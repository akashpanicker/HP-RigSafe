export interface AlertData {
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
  zoneType?: string;
  location?: string;
}

export const alertData: AlertData[] = [
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
    zoneType: 'Red Zone',
    location: 'Drill floor 9'
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
    zoneType: 'Yellow Zone',
    location: 'Drill floor 9'
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
    zoneType: 'Yellow Zone',
    location: 'Drill floor 9'
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
    zoneType: 'Yellow Zone',
    location: 'Drill floor 9'
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
    zoneType: 'Yellow Zone',
    location: 'Drill floor 9'
  },
];
