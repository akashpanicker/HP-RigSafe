import { useState } from 'react';
import CameraThumbnail from './CameraThumbnail';

interface Camera {
  id: number;
  name: string;
  image: string;
  video?: string;
  isAlert: boolean;
  hasDetection: boolean;
}

const cameras: Camera[] = [
  { id: 1, name: 'Camera 01', image: '/assets/images/camera-01.png', isAlert: false, hasDetection: false },
  { id: 2, name: 'Camera 02', image: '/assets/images/camera-02.png', isAlert: false, hasDetection: false },
  { id: 3, name: 'Camera 03', image: '/assets/images/camera-03.png', isAlert: false, hasDetection: false },
  { id: 4, name: 'Camera 04', image: '/assets/images/camera-04.png', video: '/assets/images/Rig video 1.mp4', isAlert: true, hasDetection: true },
  { id: 5, name: 'Camera 05', image: '/assets/images/camera-05.png', isAlert: false, hasDetection: false },
  { id: 6, name: 'Camera 06', image: '/assets/images/camera-06.png', isAlert: false, hasDetection: false },
];

function CameraThumbnailBar() {
  const [activeCamera, setActiveCamera] = useState<number>(1);

  return (
    <section className="thumbnail-section" aria-label="Camera thumbnails">
      <div className="thumbnail-section__top">
        <button className="thumbnail-section__dropdown" type="button" aria-label="Select rig">
          <span>Rig 125</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      <div className="thumbnail-bar" role="listbox" aria-label="Camera feed thumbnails">
        {cameras.map((camera) => (
          <CameraThumbnail
            key={camera.id}
            name={camera.name}
            image={camera.image}
            video={camera.video}
            isActive={activeCamera === camera.id}
            isAlert={camera.isAlert}
            hasDetection={camera.hasDetection}
            onClick={() => setActiveCamera(camera.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default CameraThumbnailBar;
