export type StateInfo = {
  name: string;
  description: string;
  universities: string[];
};

// Only states with verifiable client institutions get a page. Add a state
// here once a real deployment exists there; the sitemap, by-state hub and
// dynamic route pick it up automatically.
export const STATES_DATA: Record<string, StateInfo> = {
  "tamil-nadu": {
    name: "Tamil Nadu",
    description: "Campus ERP for Anna University, Bharathiar University and TNAU-affiliated and autonomous colleges across Tamil Nadu",
    universities: ["Anna University", "Bharathiar University", "Tamil Nadu Agricultural University", "Periyar University", "Madras University"],
  },
  karnataka: {
    name: "Karnataka",
    description: "Campus ERP for autonomous and affiliated colleges in Karnataka, starting with Bengaluru",
    universities: ["Bengaluru North University", "Bengaluru City University", "Visvesvaraya Technological University", "University of Mysore"],
  },
};

export const stateSlugs = Object.keys(STATES_DATA);
