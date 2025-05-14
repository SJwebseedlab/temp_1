import { useRef, useState, useEffect } from "react";

interface Props {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, altBefore, altAfter }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderX, setSliderX] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = (e instanceof TouchEvent) ? e.touches[0].clientX : e.clientX;
    let x = ((clientX - rect.left) / rect.width) * 100;
    x = Math.max(0, Math.min(100, x));
    setSliderX(x);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-72 sm:h-96 overflow-hidden rounded-lg shadow-lg select-none"
    >
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={altAfter}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={altBefore}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <div
        className="absolute top-0 bottom-0 z-10 cursor-ew-resize"
        style={{ left: `${sliderX}%` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="w-1 bg-white h-full shadow-md" />
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center shadow">
          <span className="text-gray-700 text-xs font-bold">↔</span>
        </div>
      </div>
    </div>
  );
}
