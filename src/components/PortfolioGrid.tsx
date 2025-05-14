import React, { useState } from "react";

const portfolioImages = Array.from({ length: 27 }, (_, i) => `/portfolio/image-${i + 1}.jpg`);

const PortfolioGrid = () => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 9, portfolioImages.length));
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800">
        시공 포트폴리오
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {portfolioImages.slice(0, visibleCount).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`시공 이미지 ${i + 1}`}
            loading="lazy"
            className="w-full h-52 sm:h-60 md:h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300"
          />
        ))}
      </div>

      {visibleCount < portfolioImages.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition text-sm sm:text-base"
          >
            더 보기
            <span className="text-xl">↓</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioGrid;