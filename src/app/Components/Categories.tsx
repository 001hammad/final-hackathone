import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import { Inter } from "next/font/google";

// Importing custom fonts
const InterFont = Inter({ subsets: ["latin"] });
const VibeFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const Categories = () => {
  return (
    // Main container for the section
    <div className='bg-black h-2000px] '>
      
      {/* Food Category Title */}
      <p className={`${VibeFont.className} text-[#FF9F0D] md:mx-auto lg:ml-[630px] leading-[40px] md:w-[177px] font-normal text-[32px] md:h-[40px]  ml-[80px]`}>
        Food Category
      </p>

      {/* Choose Food Item Title */}
      <p className="md:w-[446px] md:h-[56px] font-bold md:text-[48px] text-[30px] ml-[50px] md:mb-[40px]  md:mx-auto leading-[56px] text-[#FFFFFF] md:my-0 my-[30px]">
        <span className="text-[#FF9F0D]">Ch</span>oose Food Item
      </p>

      {/* Food Categories Images */}
      <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-2 m-[20px] lg:grid-cols-4 text-white gap-[10px] md:gap-[30px] md:ml-[100px] ">
        {/* Category 1 Image with "Save 30%" Label */}
        <div className="relative">
          <Image src="/categ1.png" width={305} height={328} alt="categ1" />
          <div className={` ${InterFont.className} font-bold md:block hidden absolute top-2 left-2 text-[18px] leading-[26px] md:ml-[100px] md:mt-[130px] mt-[140px] ml-[90px] text-[#FF9F0D] bg-[#FFFFFF] text-sm px-2 py-1 rounded-[6px]`}>
            save 30%
          </div>
          <div className={` ${InterFont.className} font-bold absolute md:block hidden top-2 left-2 text-[18px] leading-[26px]  md:mt-[170px] mt-[180px] text-[#FFFFFF] bg-[#FF9F0D]  text-sm px-14 py-1 rounded-[6px]`}>
            save 30%
          </div>
        </div>

        {/* Category 2 Image */}
        <div><Image src='/categ2.png' width={305} height={328} alt="categ1"/></div>

        {/* Category 3 Image */}
        <div><Image src='/categ3.png' width={305} height={328} alt="categ1"/></div>

        {/* Category 4 Image */}
        <div><Image src='/categ4.png' width={305} height={328} alt="categ1"/></div>
      </div>

      {/* Why Choose Us Section */}
      <div className="lg:w-full md:w-[900px] bg-cover bg-center relative flex flex-col  md:ml-[10px] justify-cter it-center md:flex-row text-white md:mt-[120px]"  style={{ backgroundImage: "url('assets/background.svg')" }}>
        

        {/* BLOCK SECTION */}
        <div>
          <div className="flex md:mr-[100px] flex-col  p-[30px]">
            <div className="flex flex-row ">
              <div><Image src='/paratha.png' alt="paratha" width={362} height={356} className=" mb-[10px]"/></div>
              <div><Image src='/burger.png' alt="burger" width={281} height={231} className="lg:mt-[120px] md:mt-[80px] sm:hidden block md:block lg:block lg:ml-[10px] mb-[5px] mt-[50px]"/></div>
            </div>
            <div className="flex flex-row gap-3">
              <div><Image src='/kabab.png' width={244} height={306} alt="burger" className="md:w-[224px] w-[210px] "/></div>
              <div><Image src='/cheezburger.png' alt="burger2" width={221} height={226} className="md:w-[221px] w-[200px]"/></div>
              <div className="flex flex-col ">
                <div><Image src='/raita.png' alt="raita-pic" width={161} height={168} className=""/></div>
                <div><Image src='/lastpic.png' alt="raita-pic" width={161} height={168} className=""/></div>
              </div>
            </div>
          </div>
        </div>



        {/* Why Choose Us Text */}
        <div className="flex flex-col md:mt-[70px]">
        <p
  className={`${VibeFont.className} text-[#FF9F0D] text-center md:text-left text-[24px] md:text-[32px] font-normal leading-[30px] md:leading-[40px] mt-[40px] md:mt-0`}
>
  Why Choose us
</p>

<h2
  className="font-bold text-center md:text-left text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] mt-4 md:mt-2 text-[#FFFFFF] max-w-[500px] mx-auto md:mx-0"
>
  <span>Ex</span>traordinary taste And Experienced
</h2>

<p
  className={`${InterFont.className} font-normal text-center text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] text-[#FFFFFF] max-w-[90%] sm:max-w-[600px] md:max-w-[526px] mt-4 mx-auto`}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
  pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue
  urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus
  risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
</p>



          {/* Icons with Titles */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 my-[20px] md:my-[40px] mx-[10px] md:mx-0 md:bg-[#FF9F0D] md:bg-none p-[10px] md:p-0">
  {/* Fast Food Icon */}
  <div className="flex flex-col items-center md:items-start">
    <div className="bg-[#FF9F0D] w-[100px] h-[100px] rounded-[6px] flex justify-center items-center">
      <Image
        src="/Hamburger.png"
        alt="hamburger-icon"
        width={56}
        height={56}
      />
    </div>
    <p
      className={`${InterFont.className} font-normal text-[18px] leading-[26px] mt-2 md:mt-4`}
    >
      Fast Food
    </p>
  </div>

  {/* Lunch Icon */}
  <div className="flex flex-col items-center md:items-start">
    <div className="bg-[#FF9F0D] px-[28px] lg:w-[100px] h-[100px] rounded-[6px] flex justify-center items-center">
      <Image
        src="/Cookie.png"
        alt="cookie-icon"
        width={56}
        height={56}
      />
    </div>
    <p
      className={`${InterFont.className} font-normal text-[18px] leading-[26px] mt-2 md:mt-4`}
    >
      Lunch
    </p>
  </div>

  {/* Dinner Icon */}
  <div className="flex flex-col items-center md:items-start">
    <div className="bg-[#FF9F0D] w-[100px] h-[100px] rounded-[6px] flex justify-center items-center">
      <Image
        src="/Wine.png"
        alt="wine-icon"
        width={56}
        height={56}
      />
    </div>
    <p
      className={`${InterFont.className} font-normal text-[18px] leading-[26px] mt-2 md:mt-4`}
    >
      Dinner
    </p>
  </div>
</div>


          {/* Experience Stats Section */}
          <div className="relative mx-auto w-full max-w-[374px] h-[92px] sm:h-[122px]">
  <Image 
    src="/rect.png" 
    alt="rectangle" 
    width={374} 
    height={92} 
    className="border-l-8 border-[#FF9F0D] w-full h-auto rounded-2xl" 
  />
  <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center sm:gap-[30px] gap-2 text-center sm:text-left">
    <span className="text-[36px] sm:text-[48px] leading-[46px] sm:leading-[56px] font-bold text-[#FF9F0D]">
      30+
    </span>
    <div>
      <span className={`block ${InterFont.className} text-[16px] text-black sm:text-[20px] leading-[22px] sm:leading-[28px] font-normal`}>
        Years of
      </span>
      <span className="block text-[20px] sm:text-[24px] leading-[28px] text-black sm:leading-[32px] font-bold">
        Experienced
      </span>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Footer with Professional Chefs Stats */}
      <div className="text-white flex flex-col md:flex-row md:mx-auto md:mt-[160px] items-center gap-8 md:gap-0">
  {/* Grid Container for Items */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full justify-items-center">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center">
      <Image src="/cap.png" alt="cap-pic" height={120} width={120} />
      <p className="font-bold text-[24px] leading-[32px] mt-4">
        Professional Chefs
      </p>
      <p className="font-bold text-[40px] leading-[48px] text-[#FFFFFF] mt-2">
        420
      </p>
    </div>
    {/* Card 2 */}
    <div className="flex flex-col items-center text-center">
      <Image src="/juice.png" alt="juice-icon" height={120} width={120} />
      <p className="font-bold text-[24px] leading-[32px] mt-4">
        Best Drinks
      </p>
      <p className="font-bold text-[40px] leading-[48px] text-[#FFFFFF] mt-2">
        320
      </p>
    </div>
    {/* Card 3 */}
    <div className="flex flex-col items-center text-center">
      <Image src="/spoon.png" alt="spoon-icon" height={120} width={120} />
      <p className="font-bold text-[24px] leading-[32px] mt-4">
        Serving Tools
      </p>
      <p className="font-bold text-[40px] leading-[48px] text-[#FFFFFF] mt-2">
        30+
      </p>
    </div>
    {/* Card 4 */}
    <div className="flex flex-col items-center text-center">
      <Image src="/pizza.png" alt="pizza-icon" height={120} width={120} />
      <p className="font-bold text-[24px] leading-[32px] mt-4">
        Delicious Pizza
      </p>
      <p className="font-bold text-[40px] leading-[48px] text-[#FFFFFF] mt-2">
        220
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Categories;
