import React from 'react';

interface AlertData {
  id: number;
  status: 'critical' | 'warning';
  issue: string;
  activity: string;
  eventId: string;
  rig: string;
  camera: string;
  dateTime: string;
  zoneType?: string;
  location?: string;
}

interface StatusBadgeProps {
  status: 'critical' | 'warning';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const label = status === 'critical' ? 'CRITICAL' : 'WARNING';
  const className = `status-badge status-badge--${status}`;
  
  return (
    <span className={className}>
      {label}
    </span>
  );
};

interface AlertCardHeaderProps {
  title: string;
  status: 'critical' | 'warning';
}

export const AlertCardHeader: React.FC<AlertCardHeaderProps> = ({ title, status }) => {
  return (
    <div className="alert-card__header">
      <h3 className="alert-card__title">{title}</h3>
      <StatusBadge status={status} />
    </div>
  );
};

interface AlertCardBodyProps {
  rig: string;
  eventId: string;
  cameraId: string;
  dateTime: string;
  zoneType: string;
  location: string;
}

export const AlertCardBody: React.FC<AlertCardBodyProps> = ({
  rig,
  eventId,
  cameraId,
  dateTime,
  zoneType,
  location
}) => {
  return (
    <div className="alert-card__body">
      <div className="alert-card__row">
        <span className="alert-card__label">Rig:</span>
        <span className="alert-card__value">{rig}</span>
      </div>
      <div className="alert-card__row">
        <span className="alert-card__label">Event ID:</span>
        <span className="alert-card__value">{eventId}</span>
      </div>
      <div className="alert-card__row">
        <span className="alert-card__label">Camera ID:</span>
        <span className="alert-card__value">{cameraId}</span>
      </div>
      <div className="alert-card__row">
        <span className="alert-card__label">Date and Time:</span>
        <span className="alert-card__value">{dateTime}</span>
      </div>
      <div className="alert-card__row">
        <span className="alert-card__label">Zone Type:</span>
        <span className="alert-card__value">{zoneType}</span>
      </div>
      <div className="alert-card__row">
        <span className="alert-card__label">Location:</span>
        <span className="alert-card__value">{location}</span>
      </div>
    </div>
  );
};

interface AlertCardActionsProps {
  onViewRecording: () => void;
  onAcknowledge: () => void;
}

export const AlertCardActions: React.FC<AlertCardActionsProps> = ({
  onViewRecording,
  onAcknowledge
}) => {
  return (
    <div className="alert-card__actions">
      <button className="alert-card__btn alert-card__btn--secondary" onClick={onViewRecording}>
        View Recording
      </button>
      <button className="alert-card__btn alert-card__btn--primary" onClick={onAcknowledge}>
        Acknowledge
      </button>
    </div>
  );
};

interface AlertCardProps {
  alert: AlertData;
  isHighlighted?: boolean;
}

export const AlertCard: React.FC<AlertCardProps> = ({ alert, isHighlighted }) => {
  const handleViewRecording = () => {
    console.log(`View recording for alert ${alert.id}`);
  };

  const handleAcknowledge = () => {
    console.log(`Acknowledge alert ${alert.id}`);
  };

  return (
    <div className={`alert-card ${isHighlighted ? 'alert-card--highlighted' : ''}`}>
      <AlertCardHeader title={alert.issue} status={alert.status} />
      <AlertCardBody
        rig={alert.rig}
        eventId={alert.eventId}
        cameraId={alert.camera.split(' ')[1] || '01'} // Fallback if camera name is different
        dateTime={alert.dateTime}
        zoneType={alert.zoneType || (alert.status === 'critical' ? 'Red Zone' : 'Yellow Zone')}
        location={alert.location || 'Drill floor 9'}
      />
      <AlertCardActions
        onViewRecording={handleViewRecording}
        onAcknowledge={handleAcknowledge}
      />
    </div>
  );
};

interface AlertCardPanelProps {
  activeAlert: AlertData | null;
  recentAlerts: AlertData[];
}

export const AlertCardPanel: React.FC<AlertCardPanelProps> = ({ activeAlert, recentAlerts }) => {
  return (
    <aside className="alert-card-panel">
      <div className="alert-card-panel__section">
        <h2 className="alert-card-panel__title">Active Alert</h2>
        {activeAlert ? (
          <AlertCard alert={activeAlert} isHighlighted={true} />
        ) : (
          <p className="alert-card-panel__empty">No active alerts</p>
        )}
      </div>

      <div className="alert-card-panel__section">
        <h2 className="alert-card-panel__title">Recent Alerts</h2>
        <div className="alert-card-panel__list">
          {recentAlerts.map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AlertCardPanel;
