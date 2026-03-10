interface AlertRowProps {
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

function AlertRow({
  status,
  issue,
  activity,
  eventId,
  region,
  site,
  rig,
  camera,
  dateTime,
}: AlertRowProps) {
  const isCritical = status === 'critical';

  return (
    <tr className={isCritical ? 'alert-row--critical' : ''}>
      <td>
        <span
          className={`alert-row__status-badge alert-row__status-badge--${status}`}
        >
          <span className="alert-row__status-dot" aria-hidden="true" />
          {isCritical ? 'CRITICAL' : 'WARNING'}
        </span>
      </td>
      <td>{issue}</td>
      <td>
        <span
          className={
            isCritical ? 'alert-row__active-badge' : 'alert-row__recent-badge'
          }
        >
          {isCritical && <span className="alert-row__status-dot" aria-hidden="true" />}
          {activity}
        </span>
      </td>
      <td>{eventId}</td>
      <td>{region}</td>
      <td>{site}</td>
      <td>{rig}</td>
      <td>{camera}</td>
      <td>{dateTime}</td>
      <td>
        <button
          className="alert-row__action-btn"
          type="button"
          aria-label={`View recording for event ${eventId}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </td>
      <td>
        <button
          className="alert-row__action-btn"
          type="button"
          aria-label={`Acknowledge event ${eventId}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default AlertRow;
