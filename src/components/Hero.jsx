const Hero = () => {
  return (
    <div className="">
      <div className="relative">
        {/*---------------- Image---------------- */}
        <img
          className="w-full h-[500px] lg:h-[600px] object-cover rounded-md "
          src="/assets/hero/1.jpg"
          alt="Image"
        />
        {/*-------------- Overlay-------------- */}
        <div className="absolute top-0 w-full h-full bg-purple-500 opacity-50 rounded-md " />
        {/*-------------- Text-------------- */}
        <div className="absolute top-0 left-0 flex flex-col justify-center w-full h-full text-gray-300 pl-8  ">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Healthy <span className="text-pink-700">& Testy </span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-pink-700 ">Foods</span> Devlivered
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
