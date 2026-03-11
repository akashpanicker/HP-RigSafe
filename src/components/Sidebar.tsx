import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  activeLayout: string;
  onLayoutChange: (layout: string) => void;
}

function Sidebar({ isOpen, activeLayout, onLayoutChange }: SidebarProps) {
  const [isCameraExpanded, setIsCameraExpanded] = useState(true);
  const [isLayoutsExpanded, setIsLayoutsExpanded] = useState(true); // Default to true for easier access during development
  
  // Sub-section states
  const [isEastExpanded, setIsEastExpanded] = useState(true);
  const [isSite1Expanded, setIsSite1Expanded] = useState(true);
  const [isRig145Expanded, setIsRig145Expanded] = useState(true);

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__content">
        {/* Select Camera Section */}
        <div className="sidebar__section">
          <button 
            className="sidebar__section-header" 
            onClick={() => setIsCameraExpanded(!isCameraExpanded)}
          >
            <div className="sidebar__section-title">
              <svg className="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12V4H12" />
                <path d="M12 20H20V12" />
                <rect x="2" y="14" width="8" height="8" />
                <rect x="14" y="2" width="8" height="8" />
              </svg>
              <span>Select Camera</span>
            </div>
            <svg 
              className={`sidebar__chevron ${isCameraExpanded ? 'sidebar__chevron--expanded' : ''}`} 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {isCameraExpanded && (
            <div className="sidebar__tree">
              {/* East Region */}
              <div 
                className="sidebar__tree-item sidebar__tree-item--region"
                onClick={() => setIsEastExpanded(!isEastExpanded)}
              >
                <svg 
                  className={`sidebar__chevron ${!isEastExpanded ? 'sidebar__chevron--right' : ''}`} 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                <svg className="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <span>East</span>
              </div>

              {/* Site 1 */}
              {isEastExpanded && (
                <div className="sidebar__tree-group">
                  <div 
                    className="sidebar__tree-item sidebar__tree-item--site"
                    onClick={() => setIsSite1Expanded(!isSite1Expanded)}
                  >
                    <svg 
                      className={`sidebar__chevron ${!isSite1Expanded ? 'sidebar__chevron--right' : ''}`} 
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    <span>Site 1</span>
                  </div>

                  {/* Rig-145 */}
                  {isSite1Expanded && (
                    <div className="sidebar__tree-group">
                      <div 
                        className="sidebar__tree-item sidebar__tree-item--rig"
                        onClick={() => setIsRig145Expanded(!isRig145Expanded)}
                      >
                        <svg 
                          className={`sidebar__chevron ${!isRig145Expanded ? 'sidebar__chevron--right' : ''}`} 
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                        <span>Rig-145</span>
                      </div>

                      {/* Cameras */}
                      {isRig145Expanded && (
                        <div className="sidebar__tree-cameras">
                          <div className="sidebar__camera-item">
                            <svg className="sidebar__camera-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                              <circle cx="12" cy="13" r="4" />
                            </svg>
                            <span>Cam 01 – Drill Floor</span>
                          </div>
                          <div className="sidebar__camera-item sidebar__camera-item--active">
                            <svg className="sidebar__camera-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                              <circle cx="12" cy="13" r="4" />
                            </svg>
                            <span>Cam 04 - Pipe Deck</span>
                          </div>
                          <div className="sidebar__camera-item">
                            <svg className="sidebar__camera-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                              <circle cx="12" cy="13" r="4" />
                            </svg>
                            <span>Cam 03 – Mud Pumps</span>
                          </div>
                          <div className="sidebar__camera-item">
                            <svg className="sidebar__camera-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                              <circle cx="12" cy="13" r="4" />
                            </svg>
                            <span>Cam 04 – Mud Pumps</span>
                          </div>
                          <div className="sidebar__camera-item">
                            <svg className="sidebar__camera-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                              <circle cx="12" cy="13" r="4" />
                            </svg>
                            <span>Cam 05 – Mud Pumps</span>
                          </div>
                        </div>
                      )}

                      <div className="sidebar__tree-item sidebar__tree-item--rig">
                        <svg className="sidebar__chevron sidebar__chevron--right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        <span>Rig-146</span>
                      </div>
                      <div className="sidebar__tree-item sidebar__tree-item--rig">
                        <svg className="sidebar__chevron sidebar__chevron--right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        <span>Rig-147</span>
                      </div>
                      <div className="sidebar__tree-item sidebar__tree-item--rig">
                        <svg className="sidebar__chevron sidebar__chevron--right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        <span>Rig-148</span>
                      </div>
                      <div className="sidebar__tree-item sidebar__tree-item--rig">
                        <svg className="sidebar__chevron sidebar__chevron--right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                        <span>Rig-149</span>
                      </div>
                    </div>
                  )}
                  {/* Other Sites */}
                  {[2, 3, 4, 5, 6, 7, 8, 9].map(site => (
                    <div key={site} className="sidebar__tree-item sidebar__tree-item--site">
                      <svg className="sidebar__chevron sidebar__chevron--right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      <span>Site {site}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Other Regions */}
              {['West', 'North', 'South'].map(region => (
                <div key={region} className="sidebar__tree-item sidebar__tree-item--region">
                  <svg className="sidebar__chevron sidebar__chevron--right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <svg className="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>{region}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Predefined Layouts Section */}
        <div className="sidebar__section">
          <button 
            className="sidebar__section-header" 
            onClick={() => setIsLayoutsExpanded(!isLayoutsExpanded)}
          >
            <div className="sidebar__section-title">
              <svg className="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <span>Predefined Layouts</span>
            </div>
            <svg 
              className={`sidebar__chevron ${isLayoutsExpanded ? 'sidebar__chevron--expanded' : ''}`} 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {isLayoutsExpanded && (
            <div className="sidebar__tree">
              <div 
                className={`sidebar__tree-item ${activeLayout === 'Layout 1' ? 'sidebar__tree-item--active' : ''}`}
                onClick={() => onLayoutChange('Layout 1')}
              >
                <div className="sidebar__tree-item-content">
                  <svg className="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="12" y1="3" x2="12" y2="21" />
                  </svg>
                  <span>Layout 1</span>
                </div>
                {activeLayout === 'Layout 1' && (
                  <svg className="sidebar__check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <div 
                className={`sidebar__tree-item ${activeLayout === 'Layout 2' ? 'sidebar__tree-item--active' : ''}`}
                onClick={() => onLayoutChange('Layout 2')}
              >
                <div className="sidebar__tree-item-content">
                  <svg className="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                  </svg>
                  <span>Layout 2</span>
                </div>
                {activeLayout === 'Layout 2' && (
                  <svg className="sidebar__check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
