import { ImagePlaceholder } from "../../shared/ui/image-placeholder";

const BookGallery = () => {
  return (
    <div className="py-24 bg-white max-w-6xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ImagePlaceholder className="w-full aspect-square" text="LUXURY STAY" />
        <ImagePlaceholder className="w-full aspect-square" text="WORLD CLASS DINING" />
        <ImagePlaceholder className="w-full aspect-square" text="PREMIUM AMENITIES" />
      </div>
    </div>
  );
};

export default BookGallery;
