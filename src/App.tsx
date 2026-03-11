import { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CameraThumbnailBar from './components/CameraThumbnailBar';
import VideoPanel from './components/VideoPanel';
import AlertToast from './components/AlertToast';
import AlertTable from './components/AlertTable';
import AlertCardPanel from './components/AlertCardPanel';
import IncidentDetailsPage from './components/IncidentDetailsPage';
import { alertData } from './constants/alerts';

type AppView = 'dashboard' | 'incident-details';

const DASHBOARD_HASH = '#/';
const INCIDENT_DETAILS_HASH = '#/incident-details';

const getViewFromHash = (hash: string): AppView =>
  hash === INCIDENT_DETAILS_HASH ? 'incident-details' : 'dashboard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLayout, setActiveLayout] = useState('Layout 2');
  const [currentView, setCurrentView] = useState<AppView>(() => getViewFromHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentView(getViewFromHash(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToView = (view: AppView) => {
    const targetHash = view === 'incident-details' ? INCIDENT_DETAILS_HASH : DASHBOARD_HASH;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
      return;
    }
    setCurrentView(view);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLayoutChange = (layout: string) => {
    setActiveLayout(layout);
    navigateToView('dashboard');
  };

  const handleOpenIncidentDetailsInNewTab = () => {
    const incidentDetailsUrl = `${window.location.pathname}${window.location.search}${INCIDENT_DETAILS_HASH}`;
    window.open(incidentDetailsUrl, '_blank', 'noopener,noreferrer');
  };

  const handleBackToDashboard = () => {
    navigateToView('dashboard');
  };

  if (currentView === 'incident-details') {
    return (
      <IncidentDetailsPage 
        isSidebarOpen={isSidebarOpen} 
        onToggleSidebar={toggleSidebar}
        onBack={handleBackToDashboard}
      />
    );
  }

  const activeAlert = alertData.find(a => a.activity === 'Active') || null;
  const recentAlerts = alertData.filter(a => a.activity === 'Recent');

  return (
    <div className="app">
      <Header 
        isSidebarOpen={isSidebarOpen} 
        onToggleSidebar={toggleSidebar} 
        onLogoClick={handleBackToDashboard}
      />

      <div className="app-container">
        <Sidebar 
          isOpen={isSidebarOpen} 
          activeLayout={activeLayout}
          onLayoutChange={handleLayoutChange}
        />

        <main className={`main-content ${activeLayout === 'Layout 1' ? 'main-content--layout-1' : ''}`}>
          {activeLayout === 'Layout 1' ? (
            <div className="layout-1-grid">
              <div className="layout-1-main">
                <CameraThumbnailBar />
                
                <section className="video-section video-section--single" aria-label="Video monitoring panel">
                  <VideoPanel
                    cameraName="Cam 04 - Pipe Deck"
                    breadcrumb="West > Midland Site > Rig 145 > Cam 04 - Pipe Deck"
                    feedImage="/assets/images/camera-04.png"
                    feedVideo="/assets/images/Rig video 1.mp4"
                    isAlert={true}
                    onOpenIncidentDetails={handleOpenIncidentDetailsInNewTab}
                  />
                </section>
              </div>
              <AlertCardPanel activeAlert={activeAlert} recentAlerts={recentAlerts} />
            </div>
          ) : (
            <div className="main-content__inner">
              <CameraThumbnailBar />

              <section className="video-section" aria-label="Video monitoring panels">
                <VideoPanel
                  cameraName="Cam 04 - Pipe Deck"
                  breadcrumb="West > Midland Site > Rig 145 > Cam 04 - Pipe Deck"
                  feedImage="/assets/images/camera-02.png"
                  feedVideo="/assets/images/Rig video 1.mp4"
                  isAlert={true}
                  onOpenIncidentDetails={handleOpenIncidentDetailsInNewTab}
                />
                <VideoPanel
                  cameraName="Cam 03 – Pipe Deck"
                  breadcrumb="West > Site 09 > Rig 146 > Cam 03 – Pipe Deck"
                  feedImage="/assets/images/camera-05.png"
                  onOpenIncidentDetails={handleOpenIncidentDetailsInNewTab}
                />
              </section>

              <AlertTable onViewRecording={handleOpenIncidentDetailsInNewTab} />
            </div>
          )}
        </main>
      </div>

      <AlertToast onViewDetails={handleOpenIncidentDetailsInNewTab} />
    </div>
  );
}

export default App;
