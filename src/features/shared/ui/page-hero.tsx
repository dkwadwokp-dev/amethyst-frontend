interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
  usePattern?: boolean;
}

const PageHero = ({ title, subtitle, image, usePattern }: PageHeroProps) => {
  return (
    <div
      className="relative bg-[#0a0a0a] py-20 md:py-32 text-center px-6 bg-cover bg-center overflow-hidden"
      style={image ? { backgroundImage: `url('${image}')` } : {}}
    >
      {/* Balanced Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0"></div>

      {/* Subtle Pattern Overlay */}
      {usePattern && (
        <div
          className="absolute inset-0 opacity-10 z-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-marcellus text-white mb-6 uppercase tracking-wider leading-tight">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-px w-10 bg-stone-300/30"></div>
          <p className="text-xs md:text-sm font-manrope text-stone-300 tracking-[0.4em] uppercase font-bold">
            {subtitle}
          </p>
          <div className="h-px w-10 bg-stone-300/30"></div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
