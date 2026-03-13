const GallerySection = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
      title: "Prime Ribeye Steak"
    },
    {
      url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=1200",
      title: "Seafood Paella"
    },
    {
      url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
      title: "Pan-Seared Salmon"
    },
    {
      url: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800",
      title: "Tiramisu"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <span className="text-amber-600 font-medium tracking-widest text-sm uppercase block mb-2">Our Gallery</span>
        <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">SIGNATURE CREATIONS</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Large item top left */}
        <div className="relative overflow-hidden group md:col-span-2">
          <img 
            src={images[1].url} 
            alt={images[1].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white font-light text-xl italic">{images[1].title}</p>
          </div>
        </div>
        {/* Top right */}
        <div className="relative overflow-hidden group md:row-span-2">
          <img 
            src={images[0].url} 
            alt={images[0].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white font-light text-xl italic">{images[0].title}</p>
          </div>
        </div>
        {/* Bottom left */}
        <div className="relative overflow-hidden group">
          <img 
            src={images[2].url} 
            alt={images[2].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white font-light text-xl italic">{images[2].title}</p>
          </div>
        </div>
        {/* Bottom middle */}
        <div className="relative overflow-hidden group">
          <img 
            src={images[3].url} 
            alt={images[3].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white font-light text-xl italic">{images[3].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
