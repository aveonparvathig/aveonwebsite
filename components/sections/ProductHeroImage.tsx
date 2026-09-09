import Image from "next/image";

interface ProductHeroImageProps {
  slug: string;
  title: string;
}

// Map product slugs to their dashboard image filenames
const productImages: Record<string, string> = {
  "university-erp": "/products/uerp.png",
  "college-erp": "/products/college erp.png",
  "school-erp": "/products/school erp.png",
  "lms-ai-chatbot": "/products/lms erp.png",
  "hrm-payroll": "/products/hrm erp.png",
  "library-management": "/products/library erp (1).png",
  "hostel-mess": "/products/hostel mess erp.png",
  "coe": "/products/coe erp.png",
  "inventory-management": "/products/inventory erp.png",
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
      className="w-full h-auto object-cover"
    />
  );
}
