import { useState } from 'react';

interface AlertToastProps {
  onViewDetails?: () => void;
}

function AlertToast({ onViewDetails }: AlertToastProps) {
  const [visible, setVisible] = useState<boolean>(true);
  const [closing, setClosing] = useState<boolean>(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`alert-toast${closing ? ' alert-toast--closing' : ''}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="alert-toast__header">
        <span className="alert-toast__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 3 2.8 19a1 1 0 0 0 .87 1.5h16.66a1 1 0 0 0 .87-1.5L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M12 9v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="17" r="1" fill="currentColor" />
          </svg>
        </span>
        <div className="alert-toast__content">
          <h3 className="alert-toast__title">New Alert Notification</h3>
          <p className="alert-toast__message">
            Human detected at West &gt; Site 09 &gt; Rig 146 &gt; Cam 03 –
            Pipe Deck
          </p>
        </div>
        <button
          className="alert-toast__close"
          onClick={handleClose}
          type="button"
          aria-label="Dismiss alert notification"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div className="alert-toast__footer">
        <button 
          className="alert-toast__view-btn" 
          type="button"
          onClick={onViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default AlertToast;
