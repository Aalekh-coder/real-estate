import { ArrowRight } from "lucide-react";

const SixthSection = () => {
  return (
    <>
      <div className="w-full bg-[#1F4B43] px-5 py-5 my-10 lg:my-24 ">
        <div className="md:flex md:gap-5 md:items-center lg:px-24">
          <div className="md:w-1/2">
            <img src="https://i.pinimg.com/736x/f3/cf/8e/f3cf8e561977316ce99ac813d737d658.jpg" className="lg:h-[50vh] rounded-xl" />
          </div>
          <div className="text-white md:w-1/2">
            <p className="font-bold my-2 text-2xl">
              Local expertise for luxury homes
            </p>
            <p className="my-4">
              Unrivaled local insight for discerning buyers and sellers. We
              leverage deep market knowledge and exclusive networks to navigate
              Delhi's luxury real estate landscape, securing your ideal high-end
              property.
            </p>
            <button className="flex items-center gap-2 text-black bg-[#E7C873] px-4 py-2 rounded-xl font-medium">
              Learn More <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-20 md:flex lg:px-32 lg:pb-20">
          <div className="flex flex-col text-center my-5">
            <span className="text-[#E7C873] text-4xl">$18M</span>
            <span className="text-white px-5 font-medium text-xl">
              Owned from properties transaction.
            </span>
          </div>
          <div className="flex flex-col text-center my-5">
            <span className="text-[#E7C873] text-4xl">26k</span>
            <span className="text-white px-5 font-medium text-xl">
              Properties for Buy.
            </span>
          </div>
          <div className="flex flex-col text-center my-5">
            <span className="text-[#E7C873] text-4xl">15K</span>
            <span className="text-white px-5 font-medium text-xl">
              Properties for Sell.
            </span>
          </div>
          <div className="flex flex-col text-center my-5">
            <span className="text-[#E7C873] text-4xl">800</span>
            <span className="text-white px-5 font-medium text-xl">
              Daily completed transations.
            </span>
          </div>
        </div>
      </div>
      {/* other sections */}

      <div className="px-5 py-5 flex flex-col md:flex-row md:items-start md:px-8 md:gap-5 lg:px-24 lg:border-b lg:mb-24">
        <div className="md:w-1/2">
          <p className="font-bold text-xl">What our customers are saying us?</p>
          <p className="text-lg my-3">
            Hear directly from satisfied clients: Their success, our passion.
          </p>
          <div className="flex items-start gap-10 my-5">
            <div>
              <p className="font-bold text-3xl">10m+</p>
              <p>Happy People</p>
            </div>
            <div>
              <p className="font-bold text-3xl">4.88</p>
              <p>Overall rating</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="flex items-center gap-3 mt-10 md:mt-0">
            <img src="/sixth/girlDb.png" />
            <div>
              <p className="font-bold text-lg">Neha</p>
              <p className="font-medium">Designer</p>
            </div>
          </div>
          <p className="px-3 mt-4">As a first-time homebuyer, I was overwhelmed by the sheer complexity of the real estate market. But then I discovered The Houses of Purchase, and it truly lived up to its name. Their comprehensive resources and expert advice empowered me to understand everything from market trends to negotiation tactics. I felt confident and in control throughout the entire process, and ultimately, I secured my dream home at a price I was genuinely thrilled with. If you're looking to make smart, impactful real estate decisions, this is absolutely the platform you need. They give you the real power of purchase</p>
        </div>
      </div>

    </>
  );
};

export default SixthSection;
