import React from "react";
import "./BrandSlider.css";

const brandLogos = Array.from({ length: 10 }, (_, i) => `/brands/brand-${i + 1}.png`);

const BrandSlider = () => {
  return (
    <section className="w-full py-16 bg-gray-100 overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-8">함께한 브랜드</h2>
      
      <div className="relative w-full overflow-hidden">
        <div className="brand-slider-track flex gap-16 whitespace-nowrap px-4">
          {brandLogos.concat(brandLogos).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`브랜드 ${i + 1}`}
              loading="lazy"
              className="h-20 w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>

      <div className="brand-slider-track flex gap-16 whitespace-nowrap px-4">
  {/* 브랜드 이미지들 */}
</div>
    </section>
  );
};

export default BrandSlider;