import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageComparatorProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const ImageComparator: React.FC<ImageComparatorProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "ANTES",
  afterLabel = "DESPUÉS",
  className = ""
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
    e.preventDefault();
  }, [updateSliderPosition]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
    e.preventDefault();
  }, [updateSliderPosition]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.touches[0].clientX);
      e.preventDefault();
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, updateSliderPosition]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl shadow-2xl bg-gray-900 select-none cursor-crosshair ${className}`}
      style={{ aspectRatio: '16/10' }}
    >
      {/* Imagen Después (Fondo) */}
      <img
        src={afterImage}
        alt="Después"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />
      
      {/* Imagen Antes (Recortada) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
        }}
      >
        <img
          src={beforeImage}
          alt="Antes"
          className="w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Línea divisoria */}
      <div
        className="absolute top-0 h-full bg-white shadow-lg z-10 transform -translate-x-1/2"
        style={{ 
          left: `${sliderPosition}%`,
          width: '2px'
        }}
      />

      {/* Controlador del Slider */}
      <div
        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="bg-white rounded-full border-2 border-gray-300 flex items-center justify-center w-12 h-12 shadow-lg">
          <ChevronLeft className="text-gray-600 w-4 h-4 -mr-1" />
          <ChevronRight className="text-gray-600 w-4 h-4 -ml-1" />
        </div>
      </div>

      {/* Etiquetas */}
      <div className="absolute top-4 left-4 z-30">
        <span className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm border border-white/20 shadow-lg">
          {beforeLabel}
        </span>
      </div>
      
      <div className="absolute top-4 right-4 z-30">
        <span className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm border border-white/20 shadow-lg">
          {afterLabel}
        </span>
      </div>

      {/* Texto de instrucción */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <span className="bg-black/80 text-white px-4 py-2 rounded-lg text-xs backdrop-blur-sm border border-white/20 shadow-lg">
          Arrastra para comparar
        </span>
      </div>
    </div>
  );
};