import { useState } from 'react';
import AlertRow from './AlertRow';

interface AlertData {
  id: number;
  status: 'critical' | 'warning';
  issue: string;
  activity: string;
  eventId: string;
  region: string;
  site: string;
  rig: string;
  camera: string;
  dateTime: string;
}

const alertData: AlertData[] = [
  {
    id: 1,
    status: 'critical',
    issue: 'Human detected – Restricted Zone',
    activity: 'Active',
    eventId: 'EVT-9082',
    region: 'West',
    site: 'Midland Site',
    rig: 'Rig 145',
    camera: 'Cam 04 - Pipe Deck',
    dateTime: '10/24/2025 12:45 PM',
  },
  {
    id: 2,
    status: 'warning',
    issue: 'Human detected – Yellow Zone',
    activity: 'Recent',
    eventId: 'EVT-9081',
    region: 'West',
    site: 'Midland Site',
    rig: 'Rig 145',
    camera: 'Camera 04',
    dateTime: '10/24/2025 12:40 PM',
  },
  {
    id: 3,
    status: 'warning',
    issue: 'Human detected – Yellow Zone',
    activity: 'Recent',
    eventId: 'EVT-9078',
    region: 'West',
    site: 'Midland Site',
    rig: 'Rig 145',
    camera: 'Cam 04 - Pipe Deck',
    dateTime: '10/24/2025 11:15 AM',
  },
  {
    id: 4,
    status: 'warning',
    issue: 'Human detected – Yellow Zone',
    activity: 'Recent',
    eventId: 'EVT-9075',
    region: 'West',
    site: 'Midland Site',
    rig: 'Rig 145',
    camera: 'Camera 04',
    dateTime: '10/24/2025 09:30 AM',
  },
  {
    id: 5,
    status: 'warning',
    issue: 'Human detected – Yellow Zone',
    activity: 'Recent',
    eventId: 'EVT-9060',
    region: 'West',
    site: 'Midland Site',
    rig: 'Rig 145',
    camera: 'Cam 04 - Pipe Deck',
    dateTime: '10/23/2025 03:22 PM',
  },
];

function AlertTable() {
  const [activeView, setActiveView] = useState<'table' | 'card'>('table');

  return (
    <section className="alerts-section" aria-label="Alert notifications">
      <div className="alerts-section__header">
        <h2 className="alerts-section__title">All Alert</h2>

        <div className="alerts-section__view-toggle" role="tablist" aria-label="View toggle">
          <button
            className={`alerts-section__view-btn${activeView === 'table' ? ' alerts-section__view-btn--active' : ''}`}
            onClick={() => setActiveView('table')}
            role="tab"
            aria-selected={activeView === 'table'}
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Table
          </button>
          <button
            className={`alerts-section__view-btn${activeView === 'card' ? ' alerts-section__view-btn--active' : ''}`}
            onClick={() => setActiveView('card')}
            role="tab"
            aria-selected={activeView === 'card'}
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="3" y1="15" x2="21" y2="15" />
            </svg>
            Card
          </button>
        </div>
      </div>

      <div className="alert-table-wrapper">
        <table className="alert-table" aria-label="Alerts list">
          <thead className="alert-table__head">
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Issue</th>
              <th scope="col">Active / Recent</th>
              <th scope="col">Event ID</th>
              <th scope="col">Region</th>
              <th scope="col">Site</th>
              <th scope="col">Rig</th>
              <th scope="col">Camera</th>
              <th scope="col">Date and Time</th>
              <th scope="col">Recording</th>
              <th scope="col">Acknowledge</th>
            </tr>
          </thead>
          <tbody className="alert-table__body">
            {alertData.map((alert) => (
              <AlertRow
                key={alert.id}
                status={alert.status}
                issue={alert.issue}
                activity={alert.activity}
                eventId={alert.eventId}
                region={alert.region}
                site={alert.site}
                rig={alert.rig}
                camera={alert.camera}
                dateTime={alert.dateTime}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav className="pagination" aria-label="Alert table pagination">
        <button className="pagination__btn" type="button" aria-label="Previous page">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="pagination__btn pagination__btn--active" type="button" aria-current="page">
          1
        </button>
        <button className="pagination__btn" type="button">2</button>
        <button className="pagination__btn" type="button">3</button>
        <span className="pagination__ellipsis" aria-hidden="true">…</span>
        <button className="pagination__btn" type="button">100</button>
        <button className="pagination__btn" type="button" aria-label="Next page">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </nav>
    </section>
  );
}

export default AlertTable;
