import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import { Inter } from "next/font/google";

// Import custom fonts
const InterFont = Inter({ subsets: ["latin"] });
const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Categories = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-8 ">
        <p
          className={`${VibeFont.className} text-[#FF9F0D] text-2xl md:text-3xl font-normal leading-tight text-center md:text-left`}
        >
          Food Category
        </p>
        <p className="font-bold text-3xl md:text-5xl leading-tight text-[#FFFFFF] text-center md:text-left mt-4">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </p>
      </div>

      {/* Food Categories Images */}
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Category 1 */}
          <div className="relative">
            <Image
              src="/categ1.png"
              alt="Category 1"
              width={305}
              height={328}
              layout="responsive"
              objectFit="cover"
            />
            <div
              className={`${InterFont.className} hidden md:block absolute top-2 left-2 text-sm text-[#FF9F0D] bg-white px-2 py-1 rounded`}
            >
              save 30%
            </div>
          </div>

          {/* Category 2 */}
          <div className="relative">
            <Image
              src="/categ2.png"
              alt="Category 2"
              width={305}
              height={328}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          {/* Category 3 */}
          <div className="relative">
            <Image
              src="/categ3.png"
              alt="Category 3"
              width={305}
              height={328}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          {/* Category 4 */}
          <div className="relative">
            <Image
              src="/categ4.png"
              alt="Category 4"
              width={305}
              height={328}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        className="container mx-auto px-4 md:mt-[120px] mb-[160px]"
        style={{ backgroundImage: "url('/assets/background.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="flex flex-col md:flex-row items-center text-white">
          {/* Left Image Block */}
          <div className="w-full md:w-1/2 p-4 flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <Image
                src="/paratha.png"
                alt="Paratha"
                width={362}
                height={356}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="w-full md:w-1/2 hidden sm:block">
              <Image
                src="/burger.png"
                alt="Burger"
                width={281}
                height={231}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Right Text Block */}
          <div className="w-full md:w-1/2 p-4">
            <p
              className={`${VibeFont.className} text-[#FF9F0D] text-xl md:text-2xl font-normal text-center md:text-left`}
            >
              Why Choose us
            </p>
            <h2 className="font-bold text-2xl md:text-4xl leading-tight mt-4 text-[#FFFFFF] text-center md:text-left">
              <span>Ex</span>traordinary taste And Experienced
            </h2>
            <p
              className={`${InterFont.className} text-sm md:text-base mt-4 text-[#FFFFFF] text-center md:text-left`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>

            {/* Icons */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {/* Fast Food */}
              <div className="flex flex-col items-center">
                <div className="bg-[#FF9F0D] w-16 h-16 flex justify-center items-center rounded">
                  <Image
                    src="/Hamburger.png"
                    alt="Hamburger"
                    width={56}
                    height={56}
                  />
                </div>
                <p className={`${InterFont.className} text-sm mt-2`}>Fast Food</p>
              </div>

              {/* Lunch */}
              <div className="flex flex-col items-center">
                <div className="bg-[#FF9F0D] w-16 h-16 flex justify-center items-center rounded">
                  <Image
                    src="/Cookie.png"
                    alt="Cookie"
                    width={56}
                    height={56}
                  />
                </div>
                <p className={`${InterFont.className} text-sm mt-2`}>Lunch</p>
              </div>

              {/* Dinner */}
              <div className="flex flex-col items-center">
                <div className="bg-[#FF9F0D] w-16 h-16 flex justify-center items-center rounded">
                  <Image
                    src="/Wine.png"
                    alt="Wine"
                    width={56}
                    height={56}
                  />
                </div>
                <p className={`${InterFont.className} text-sm mt-2`}>Dinner</p>
              </div>
            </div>

            {/* Experience Stats */}
            <div className="relative w-full max-w-md mt-6 mx-auto">
  <Image
    src="/rect.png"
    alt="Experience Stats"
    width={374}
    height={92}
    layout="responsive"
    objectFit="cover"
    className="rounded-2xl border-l-8 border-[#FF9F0D]"
  />
  <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 p-2">
    <span className="text-2xl sm:text-3xl font-bold text-[#FF9F0D]">
      30+
    </span>
    <div className="text-center">
      <span className={`${InterFont.className} block text-sm sm:text-base text-black`}>
        Years of
      </span>
      <span className="block text-lg sm:text-xl text-black font-bold">
        Experienced
      </span>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Footer: Professional Chefs Stats */}
      <div className="container mx-auto px-4 mt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <Image src="/cap.png" alt="Professional Chefs" width={120} height={120} layout="fixed" />
            <p className="font-bold text-lg mt-4">Professional Chefs</p>
            <p className="font-bold text-3xl mt-2 text-white">420</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <Image src="/juice.png" alt="Best Drinks" width={120} height={120} layout="fixed" />
            <p className="font-bold text-lg mt-4">Best Drinks</p>
            <p className="font-bold text-3xl mt-2 text-white">320</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <Image src="/spoon.png" alt="Serving Tools" width={120} height={120} layout="fixed" />
            <p className="font-bold text-lg mt-4">Serving Tools</p>
            <p className="font-bold text-3xl mt-2 text-white">30+</p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center text-center">
            <Image src="/pizza.png" alt="Delicious Pizza" width={120} height={120} layout="fixed" />
            <p className="font-bold text-lg mt-4">Delicious Pizza</p>
            <p className="font-bold text-3xl mt-2 text-white">220</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
