"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

const ImageModal = ({ isOpen, onClose, images, currentIndex, onPrevious, onNext }: ImageModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="relative max-w-4xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white hover:text-cyan-400 transition-colors duration-200 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-cyan-400 transition-colors duration-200 z-10 bg-black/50 rounded-full"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-cyan-400 transition-colors duration-200 z-10 bg-black/50 rounded-full"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <img
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  // Split the images array into 4 equal parts
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <>
      <div
        className={cn(
          "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-[400px]",
          className,
        )}
      >
        <div className="flex size-full items-center justify-center">
          <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
            <div
              style={{
                transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
              }}
              className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8"
            >
              {chunks.map((subarray, colIndex) => (
                <motion.div
                  animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                  transition={{
                    duration: colIndex % 2 === 0 ? 10 : 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  key={colIndex + "marquee"}
                  className="flex flex-col items-start gap-8"
                >
                  <GridLineVertical className="-left-4" offset="80px" />
                  {subarray.map((image, imageIndex) => {
                    const globalIndex = colIndex * chunkSize + imageIndex;
                    return (
                      <div className="relative" key={imageIndex + image}>
                        <GridLineHorizontal className="-top-4" offset="20px" />
                        <motion.img
                          whileHover={{
                            y: -10,
                            scale: 1.05,
                          }}
                          whileTap={{
                            scale: 0.95,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          key={imageIndex + image}
                          src={image}
                          alt={`Gallery image ${globalIndex + 1}`}
                          className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl cursor-pointer hover:ring-cyan-400/50 transition-all duration-300"
                          width={970}
                          height={700}
                          onClick={() => handleImageClick(globalIndex)}
                        />
                      </div>
                    );
                  })}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={selectedImageIndex !== null}
        onClose={handleCloseModal}
        images={images}
        currentIndex={selectedImageIndex || 0}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};