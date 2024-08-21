import { PipelineRoute, Status } from "@/types/Map";

export const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Live Stream",
    path: "/streaming",
  },
  {
    label: "Officers",
    submenu: [
      { label: "All Officers", path: "/officers" },
      { label: "Add Officers", path: "/officers/add" },
    ],
  },
  {
    label: "Reports",
    path: "/reports",
  },
  {
    label: "Settings",
    path: "/settings",
  },
];

export const PipelineRoutes: PipelineRoute<Status>[] = [
  {
    id: 1,
    name: "Lagos to Ogun Pipeline",
    state: "Lagos",
    coordinates: {
      start: { latitude: 6.5244, longitude: 3.3792 },
      end: { latitude: 6.8996, longitude: 3.2584 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 2,
    name: "Ogun to Oyo Pipeline",
    state: "Ogun",
    coordinates: {
      start: { latitude: 6.8996, longitude: 3.2584 },
      end: { latitude: 7.3775, longitude: 3.947 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 3,
    name: "Oyo to Kwara Pipeline",
    state: "Oyo",
    coordinates: {
      start: { latitude: 7.3775, longitude: 3.947 },
      end: { latitude: 8.4799, longitude: 4.5418 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 4,
    name: "Kwara to Niger Pipeline",
    state: "Kwara",
    coordinates: {
      start: { latitude: 8.4799, longitude: 4.5418 },
      end: { latitude: 9.081999, longitude: 5.6517 },
    },
    status: "warning",
    faults: [
      {
        fault_coordinates: { latitude: 8.9, longitude: 5.2 },
        description: "Pressure fluctuation detected",
        reported_at: "2024-08-17T17:15:00.000Z",
        status: "warning",
      },
    ],
  },
  {
    id: 5,
    name: "Niger to Abuja Pipeline",
    state: "Niger",
    coordinates: {
      start: { latitude: 9.081999, longitude: 5.6517 },
      end: { latitude: 9.0579, longitude: 7.4951 },
    },
    status: "critical",
    faults: [
      {
        fault_coordinates: { latitude: 9.0, longitude: 6.5 },
        description: "Pipeline rupture detected",
        reported_at: "2024-08-17T17:20:00.000Z",
        status: "critical",
      },
    ],
  },
  {
    id: 6,
    name: "Abuja to Kaduna Pipeline",
    state: "Abuja",
    coordinates: {
      start: { latitude: 9.0579, longitude: 7.4951 },
      end: { latitude: 10.5105, longitude: 7.4165 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 7,
    name: "Kaduna to Kano Pipeline",
    state: "Kaduna",
    coordinates: {
      start: { latitude: 10.5105, longitude: 7.4165 },
      end: { latitude: 12.0022, longitude: 8.5919 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 8,
    name: "Kano to Katsina Pipeline",
    state: "Kano",
    coordinates: {
      start: { latitude: 12.0022, longitude: 8.5919 },
      end: { latitude: 13.0027, longitude: 7.6006 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 9,
    name: "Katsina to Sokoto Pipeline",
    state: "Katsina",
    coordinates: {
      start: { latitude: 13.0027, longitude: 7.6006 },
      end: { latitude: 13.0059, longitude: 5.2476 },
    },
    status: "warning",
    faults: [
      {
        fault_coordinates: { latitude: 13.0, longitude: 6.5 },
        description: "Leakage detected",
        reported_at: "2024-08-17T17:30:00.000Z",
        status: "warning",
      },
    ],
  },
  {
    id: 10,
    name: "Sokoto to Kebbi Pipeline",
    state: "Sokoto",
    coordinates: {
      start: { latitude: 13.0059, longitude: 5.2476 },
      end: { latitude: 12.4503, longitude: 4.1975 },
    },
    status: "critical",
    faults: [
      {
        fault_coordinates: { latitude: 12.8, longitude: 4.5 },
        description: "Severe rupture detected",
        reported_at: "2024-08-17T17:40:00.000Z",
        status: "critical",
      },
    ],
  },
  {
    id: 11,
    name: "Kebbi to Zamfara Pipeline",
    state: "Kebbi",
    coordinates: {
      start: { latitude: 12.4503, longitude: 4.1975 },
      end: { latitude: 12.1225, longitude: 6.2239 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 12,
    name: "Zamfara to Bauchi Pipeline",
    state: "Zamfara",
    coordinates: {
      start: { latitude: 12.1225, longitude: 6.2239 },
      end: { latitude: 10.3103, longitude: 9.8439 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 13,
    name: "Bauchi to Gombe Pipeline",
    state: "Bauchi",
    coordinates: {
      start: { latitude: 10.3103, longitude: 9.8439 },
      end: { latitude: 10.2897, longitude: 11.1719 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 14,
    name: "Gombe to Yobe Pipeline",
    state: "Gombe",
    coordinates: {
      start: { latitude: 10.2897, longitude: 11.1719 },
      end: { latitude: 12.2977, longitude: 11.5021 },
    },
    status: "warning",
    faults: [
      {
        fault_coordinates: { latitude: 11.5, longitude: 11.3 },
        description: "Minor leakage detected",
        reported_at: "2024-08-17T18:00:00.000Z",
        status: "warning",
      },
    ],
  },
  {
    id: 15,
    name: "Yobe to Borno Pipeline",
    state: "Yobe",
    coordinates: {
      start: { latitude: 12.2977, longitude: 11.5021 },
      end: { latitude: 11.8333, longitude: 13.151 },
    },
    status: "critical",
    faults: [
      {
        fault_coordinates: { latitude: 12.1, longitude: 12.3 },
        description: "Severe pressure drop detected",
        reported_at: "2024-08-17T18:10:00.000Z",
        status: "critical",
      },
    ],
  },
  {
    id: 16,
    name: "Borno to Adamawa Pipeline",
    state: "Borno",
    coordinates: {
      start: { latitude: 11.8333, longitude: 13.151 },
      end: { latitude: 9.3265, longitude: 12.3984 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 17,
    name: "Adamawa to Taraba Pipeline",
    state: "Adamawa",
    coordinates: {
      start: { latitude: 9.3265, longitude: 12.3984 },
      end: { latitude: 8.8877, longitude: 11.3636 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 18,
    name: "Taraba to Benue Pipeline",
    state: "Taraba",
    coordinates: {
      start: { latitude: 8.8877, longitude: 11.3636 },
      end: { latitude: 7.7278, longitude: 8.5361 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 19,
    name: "Benue to Kogi Pipeline",
    state: "Benue",
    coordinates: {
      start: { latitude: 7.7278, longitude: 8.5361 },
      end: { latitude: 7.7969, longitude: 6.743 },
    },
    status: "warning",
    faults: [
      {
        fault_coordinates: { latitude: 7.8, longitude: 7.2 },
        description: "Temperature anomaly detected",
        reported_at: "2024-08-17T18:20:00.000Z",
        status: "warning",
      },
    ],
  },
  {
    id: 20,
    name: "Kogi to Enugu Pipeline",
    state: "Kogi",
    coordinates: {
      start: { latitude: 7.7969, longitude: 6.743 },
      end: { latitude: 6.5244, longitude: 7.5106 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 21,
    name: "Enugu to Anambra Pipeline",
    state: "Enugu",
    coordinates: {
      start: { latitude: 6.5244, longitude: 7.5106 },
      end: { latitude: 6.2209, longitude: 7.0722 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 22,
    name: "Anambra to Imo Pipeline",
    state: "Anambra",
    coordinates: {
      start: { latitude: 6.2209, longitude: 7.0722 },
      end: { latitude: 5.572, longitude: 7.0588 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 23,
    name: "Imo to Abia Pipeline",
    state: "Imo",
    coordinates: {
      start: { latitude: 5.572, longitude: 7.0588 },
      end: { latitude: 5.4527, longitude: 7.5248 },
    },
    status: "critical",
    faults: [
      {
        fault_coordinates: { latitude: 5.6, longitude: 7.2 },
        description: "Severe rupture detected",
        reported_at: "2024-08-17T18:30:00.000Z",
        status: "critical",
      },
    ],
  },
  {
    id: 24,
    name: "Abia to Rivers Pipeline",
    state: "Abia",
    coordinates: {
      start: { latitude: 5.4527, longitude: 7.5248 },
      end: { latitude: 4.8156, longitude: 7.0498 },
    },
    status: "warning",
    faults: [
      {
        fault_coordinates: { latitude: 5.0, longitude: 7.3 },
        description: "Pressure fluctuation detected",
        reported_at: "2024-08-17T18:40:00.000Z",
        status: "warning",
      },
    ],
  },
  {
    id: 25,
    name: "Rivers to Bayelsa Pipeline",
    state: "Rivers",
    coordinates: {
      start: { latitude: 4.8156, longitude: 7.0498 },
      end: { latitude: 4.7719, longitude: 6.0847 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 26,
    name: "Bayelsa to Delta Pipeline",
    state: "Bayelsa",
    coordinates: {
      start: { latitude: 4.7719, longitude: 6.0847 },
      end: { latitude: 5.4897, longitude: 5.8987 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 27,
    name: "Delta to Edo Pipeline",
    state: "Delta",
    coordinates: {
      start: { latitude: 5.4897, longitude: 5.8987 },
      end: { latitude: 6.5244, longitude: 5.6145 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 28,
    name: "Edo to Ondo Pipeline",
    state: "Edo",
    coordinates: {
      start: { latitude: 6.5244, longitude: 5.6145 },
      end: { latitude: 7.2508, longitude: 5.1931 },
    },
    status: "warning",
    faults: [
      {
        fault_coordinates: { latitude: 6.9, longitude: 5.4 },
        description: "Leakage detected",
        reported_at: "2024-08-17T18:50:00.000Z",
        status: "warning",
      },
    ],
  },
  {
    id: 29,
    name: "Ondo to Ekiti Pipeline",
    state: "Ondo",
    coordinates: {
      start: { latitude: 7.2508, longitude: 5.1931 },
      end: { latitude: 7.7199, longitude: 5.311 },
    },
    status: "critical",
    faults: [
      {
        fault_coordinates: { latitude: 7.4, longitude: 5.2 },
        description: "Pipeline rupture detected",
        reported_at: "2024-08-17T19:00:00.000Z",
        status: "critical",
      },
    ],
  },
  {
    id: 30,
    name: "Ekiti to Osun Pipeline",
    state: "Ekiti",
    coordinates: {
      start: { latitude: 7.7199, longitude: 5.311 },
      end: { latitude: 7.562, longitude: 4.5663 },
    },
    status: "normal",
    faults: [],
  },
  {
    id: 31,
    name: "Osun to Ogun Pipeline",
    state: "Osun",
    coordinates: {
      start: { latitude: 7.562, longitude: 4.5663 },
      end: { latitude: 6.8996, longitude: 3.2584 },
    },
    status: "normal",
    faults: [],
  },
  // Continue to add more routes for all 36 states
];
