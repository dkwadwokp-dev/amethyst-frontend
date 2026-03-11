interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <div className="bg-[#2A2E33] py-24 text-center px-6">
      <h1 className="text-4xl md:text-6xl font-marcellus text-white mb-4 uppercase tracking-wide">{title}</h1>
      <p className="text-xs md:text-sm font-manrope text-gray-400 tracking-[0.2em] uppercase">"{subtitle}"</p>
    </div>
  );
};

export default PageHero;
