export type Service = {
  title: string;
  slug: string;
  /** Heroicons-style outline path */
  icon: string;
  text: string;
};

/** Software development services — shown on the home page and /services. */
export const services: Service[] = [
  {
    title: "Process Automation",
    slug: "process-automation",
    icon: "M4.5 12a7.5 7.5 0 0113.06-5.03M19.5 12a7.5 7.5 0 01-13.06 5.03M16.5 6.75h3.75V3M7.5 17.25H3.75V21M12 9.75A2.25 2.25 0 1012 14.25a2.25 2.25 0 000-4.5z",
    text: "Automate repetitive back-office workflows so approvals, records and reports move without manual handoffs.",
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    icon: "M10.5 3.75h3M10.5 19.5h3M7.5 2.25h9a1.5 1.5 0 011.5 1.5v16.5a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5V3.75a1.5 1.5 0 011.5-1.5z",
    text: "Native and cross-platform apps for Android and iOS, built to work with your existing systems and data.",
  },
  {
    title: "Custom Software Development",
    slug: "custom-software-development",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14.25 3.75l-4.5 16.5",
    text: "Applications designed around how your organisation actually works, from requirement study to go-live.",
  },
  {
    title: "Order Management System",
    slug: "order-management-system",
    icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
    text: "Track orders end to end — quotations, confirmations, dispatch and invoicing in one connected flow.",
  },
  {
    title: "Warehouse Management System",
    slug: "warehouse-management-system",
    icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
    text: "Stock, bin locations, inward and outward movement with real-time visibility across warehouses.",
  },
  {
    title: "Offshore Team",
    slug: "offshore-team",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    text: "Dedicated engineering teams working as an extension of yours, from Coimbatore.",
  },
];
