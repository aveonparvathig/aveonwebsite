export type StateInfo = {
  name: string;
  count: string;
  description: string;
  universities: string[];
};

export const STATES_DATA: Record<string, StateInfo> = {
  "tamil-nadu": {
    name: "Tamil Nadu",
    count: "500+",
    description: "Serving colleges and universities across Tamil Nadu with Anna University compliance",
    universities: ["Anna University", "Madras University", "Bharathiar University", "Periyar University"],
  },
  telangana: {
    name: "Telangana",
    count: "300+",
    description: "JNTU-compliant solutions for Telangana educational institutions",
    universities: ["JNTU Hyderabad", "Osmania University", "University of Hyderabad"],
  },
  karnataka: {
    name: "Karnataka",
    count: "250+",
    description: "VTU-compliant ERP solutions for Karnataka colleges and universities",
    universities: ["Visvesvaraya Technical University", "Bangalore University", "University of Mysore"],
  },
  maharashtra: {
    name: "Maharashtra",
    count: "280+",
    description: "Serving Maharashtra institutions with state board compliance",
    universities: ["University of Mumbai", "Savitribai Phule Pune University", "Nagpur University"],
  },
  delhi: {
    name: "Delhi NCR",
    count: "220+",
    description: "Delhi University-compliant solutions for Delhi and NCR institutions",
    universities: ["Delhi University", "Jamia Millia Islamia", "GGSIPU"],
  },
  haryana: {
    name: "Haryana",
    count: "180+",
    description: "Haryana education board compliant solutions",
    universities: ["Kurukshetra University", "GJUS&T Hisar"],
  },
  punjab: {
    name: "Punjab",
    count: "160+",
    description: "Punjab-based institution solutions with local compliance",
    universities: ["Punjab University", "Guru Nanak Dev University"],
  },
  "west-bengal": {
    name: "West Bengal",
    count: "150+",
    description: "West Bengal education board compliant ERP",
    universities: ["University of Calcutta", "Jadavpur University", "University of Burdwan"],
  },
  rajasthan: {
    name: "Rajasthan",
    count: "140+",
    description: "Rajasthan university compliant solutions",
    universities: ["Rajasthan University", "University of Rajasthan"],
  },
  gujarat: {
    name: "Gujarat",
    count: "130+",
    description: "Gujarat education solutions with local compliance",
    universities: ["Gujarat University", "Maharaja Sayajirao University"],
  },
};

export const stateSlugs = Object.keys(STATES_DATA);
