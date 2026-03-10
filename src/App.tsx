import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CameraThumbnailBar from './components/CameraThumbnailBar';
import VideoPanel from './components/VideoPanel';
import AlertToast from './components/AlertToast';
import AlertTable from './components/AlertTable';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Header isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />

      <div className="app-container">
        <Sidebar isOpen={isSidebarOpen} />

        <main className="main-content">
          <CameraThumbnailBar />

          <section className="video-section" aria-label="Video monitoring panels">
            <VideoPanel
              cameraName="Cam 04 - Pipe Deck"
              breadcrumb="West > Midland Site > Rig 145 > Cam 04 - Pipe Deck"
              feedImage="/assets/images/camera-02.png"
              feedVideo="/assets/images/Rig video 1.mp4"
              isAlert={true}
            />
            <VideoPanel
              cameraName="Cam 03 – Pipe Deck"
              breadcrumb="West > Site 09 > Rig 146 > Cam 03 – Pipe Deck"
              feedImage="/assets/images/camera-05.png"
            />
          </section>

          <AlertTable />
        </main>
      </div>

      <AlertToast />
    </div>
  );
}

export default App;
