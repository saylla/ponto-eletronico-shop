
import { useState } from 'react';

interface ProductImagesProps {
  images: string[];
  productName: string;
  fallbackImage: string;
}

const ProductImages = ({ images, productName, fallbackImage }: ProductImagesProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackImage;
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 aspect-square flex items-center justify-center p-4">
        <img 
          src={images[activeImageIndex]} 
          alt={`${productName || "Product image"}`}
          className="max-h-full max-w-full object-contain" 
          onError={handleImageError}
        />
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`bg-white rounded border ${
              activeImageIndex === index ? 'border-primary' : 'border-gray-200'
            } aspect-square flex items-center justify-center p-2 hover:border-primary transition-colors`}
            onClick={() => setActiveImageIndex(index)}
          >
            <img 
              src={image} 
              alt={`${productName || "Product"} - Imagem ${index + 1}`}
              className="max-h-full max-w-full object-contain" 
              onError={handleImageError}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
