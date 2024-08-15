import profile from "@/assets/profile.webp";

const Hero = () => {
  return (
    <section className="relative isolate pt-2.5 overflow-hidden pl-3.5 sm:h-64">
      <div className="rounded-[10px] p-4 absolute bg-white border border-indigo-400 max-w-96 sm:left-52 sm:rounded-es-none sm:px-7">
        <p className="sm:text-lg">
          Hi Jonathan, I'm Dan from pipeline-monitoring. I'm here to help you get set up
          and collecting payments from your franchisees.
        </p>
      </div>
      <div className="aspect-square absolute top-48 -z-[1] rounded-full bg-indigo-400 max-w-68 w-72 sm:top-28" />
      <img src={profile} alt="hero" className="ml-4 mt-24 sm:mt-3.5" />
    </section>
  );
};

export default Hero;
