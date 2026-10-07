import Image from "next/image";
import { HeroImage, ResponsiveImage } from "@/components/ui/OptimizedImage";
import ProductIcon from "@/components/ui/ProductIcon";

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
  "fees-management": "/products/fees.png",
  "online-examination": "/products/online-examination.png",
};

export default function ProductHeroImage({ slug, title }: ProductHeroImageProps) {
  const imagePath = productImages[slug];

  if (!imagePath) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary-50 to-primary-100 p-10">
        <span className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-white text-primary-600 shadow-[0_20px_40px_-18px_rgb(29_111_242_/_0.5)]">
          <ProductIcon slug={slug} className="h-10 w-10" />
        </span>
        <p className="text-center text-lg font-bold text-navy-900">{title}</p>
      </div>
    );
  }

  return (
    <HeroImage
      src={imagePath}
      alt={`${title} dashboard`}
      width={600}
      height={500}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
      className="w-full h-full object-contain"
    />
  );
}
