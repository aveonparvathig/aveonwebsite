import Image from "next/image";

interface ProductHeroImageProps {
  slug: string;
  title: string;
}

// Map product slugs to their dashboard image filenames
const productImages: Record<string, string> = {
  "university-erp": "/products/ums.webp",
  "college-erp": "/products/cms.webp",
  "school-erp": "/products/sms.webp",
  "lms-ai-chatbot": "/products/la.png",
  "hrm-payroll": "/products/hrd.webp",
  "library-management": "/products/li.png",
  "hostel-mess": "/products/hostel mess erp.png",
  "coe": "/products/c.png",
  "inventory-management": "/products/inventory-dashboard.webp",
};

export default function ProductHeroImage({ slug, title }: ProductHeroImageProps) {
  const imagePath = productImages[slug];

  if (!imagePath) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <p className="text-center text-gray-500">Dashboard image not found</p>
      </div>
    );
  }

  return (
    <img
      src={imagePath}
      alt={`${title} dashboard`}
      className="w-full h-full object-contain"
    />
  );
}
