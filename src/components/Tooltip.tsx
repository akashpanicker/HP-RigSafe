import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type ReactElement,
  type ReactNode,
  type SetStateAction,
} from 'react';

interface TooltipProviderContextValue {
  activeTooltipId: string | null;
  setActiveTooltipId: Dispatch<SetStateAction<string | null>>;
}

const TooltipProviderContext = createContext<TooltipProviderContextValue | null>(null);

interface TooltipProviderProps {
  children: ReactNode;
}

export function TooltipProvider({ children }: TooltipProviderProps) {
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveTooltipId(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const value = useMemo(
    () => ({ activeTooltipId, setActiveTooltipId }),
    [activeTooltipId]
  );

  return (
    <TooltipProviderContext.Provider value={value}>
      {children}
    </TooltipProviderContext.Provider>
  );
}

interface TooltipContextValue {
  tooltipId: string;
  contentId: string;
  isOpen: boolean;
  openTooltip: () => void;
  requestCloseTooltip: () => void;
}

const TooltipContext = createContext<TooltipContextValue | null>(null);

function useTooltipProviderContext() {
  const context = useContext(TooltipProviderContext);
  if (!context) {
    throw new Error('Tooltip components must be wrapped with TooltipProvider.');
  }
  return context;
}

function useTooltipContext() {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('TooltipTrigger and TooltipContent must be used within Tooltip.');
  }
  return context;
}

interface TooltipProps {
  children: ReactNode;
  className?: string;
}

export function Tooltip({ children, className }: TooltipProps) {
  const { activeTooltipId, setActiveTooltipId } = useTooltipProviderContext();
  const tooltipId = useId();
  const contentId = `${tooltipId}-content`;
  const closeTimeoutRef = useRef<number | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openTooltip = () => {
    clearCloseTimeout();
    setActiveTooltipId(tooltipId);
  };

  const requestCloseTooltip = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveTooltipId((currentId) => (currentId === tooltipId ? null : currentId));
    }, 80);
  };

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

  const value = useMemo(
    () => ({
      tooltipId,
      contentId,
      isOpen: activeTooltipId === tooltipId,
      openTooltip,
      requestCloseTooltip,
    }),
    [activeTooltipId, tooltipId]
  );

  return (
    <TooltipContext.Provider value={value}>
      <div
        className={`tooltip-root${className ? ` ${className}` : ''}`}
        onMouseEnter={openTooltip}
        onMouseLeave={requestCloseTooltip}
        onFocusCapture={openTooltip}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            requestCloseTooltip();
          }
        }}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  );
}

interface TooltipTriggerProps {
  asChild?: boolean;
  children: ReactNode;
}

export function TooltipTrigger({ asChild = false, children }: TooltipTriggerProps) {
  const { contentId, isOpen } = useTooltipContext();

  if (asChild) {
    if (!isValidElement(children)) {
      throw new Error('TooltipTrigger with asChild expects a single React element child.');
    }

    const child = children as ReactElement<{ 'aria-describedby'?: string }>;
    const existingDescribedBy = child.props['aria-describedby'];
    const describedBy = isOpen
      ? [existingDescribedBy, contentId].filter(Boolean).join(' ')
      : existingDescribedBy;

    return cloneElement(child, {
      'aria-describedby': describedBy || undefined,
    });
  }

  return (
    <span aria-describedby={isOpen ? contentId : undefined}>
      {children}
    </span>
  );
}

interface TooltipContentProps {
  children: ReactNode;
  side?: 'top' | 'bottom';
}

export function TooltipContent({ children, side = 'top' }: TooltipContentProps) {
  const { contentId, isOpen, openTooltip, requestCloseTooltip } = useTooltipContext();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id={contentId}
      role="tooltip"
      className={`tooltip-content ${side === 'bottom' ? 'tooltip-content--bottom' : ''}`}
      onMouseEnter={openTooltip}
      onMouseLeave={requestCloseTooltip}
    >
      {Children.toArray(children)}
      <span className="tooltip-content__arrow" aria-hidden="true" />
    </div>
  );
}
