import Image from 'next/image';

const Blogright = () => {
  return (
    <div className="p-6 space-y-8 ">
      {/* Search Section */}
      <div className="flex justify-center">
        <input 
          type="text" 
          placeholder="Search Your Keyword" 
          className="border-2 border-gray-300 p-4 rounded-xl w-full sm:w-[320px] focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
        />
      </div>

      {/* Profile Section */}
      <div className="text-center space-y-4">
        <div className="w-[148px] h-[148px] rounded-full overflow-hidden mx-auto">
          <Image
            src="/whiteman.png"
            alt="Profile Picture"
            width={148}
            height={148}
            className="object-cover"
          />
        </div>

        <p className="font-bold text-lg">Prince Miyako</p>
        <div className="flex justify-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-[#FF9F0D]">&#9733;</span>
          ))}
          <p className="text-sm">(1 Review)</p>
        </div>
        <p className="text-base text-gray-600">This is a sample paragraph text describing the user or any additional details you want to include.</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-6">
        {/* Social Icons */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="#333" viewBox="0 0 24 24" width="24" height="24"><path d="M22.675 0H1.325C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.714-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.325-.592 1.325-1.325V1.325C24 .592 23.408 0 22.675 0z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#333" viewBox="0 0 24 24" width="24" height="24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.92 4.92 0 001.523 6.573 4.9 4.9 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.95 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.874 9.874 0 010 21.542a13.94 13.94 0 007.548 2.212c9.056 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.637A10.01 10.01 0 0024 4.557z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#333" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.975.975 1.254 2.242 1.316 3.608.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.316 3.608-.975.975-2.242 1.254-3.608 1.316-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.316-.975-.975-1.254-2.242-1.316-3.608-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.316-3.608.975-.975 2.242-1.254 3.608-1.316C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.738 0 8.332.014 7.052.072 5.771.131 4.48.416 3.515 1.382 2.55 2.348 2.266 3.639 2.207 4.92c-.058 1.28-.072 1.686-.072 4.078s.014 2.798.072 4.078c.059 1.281.343 2.572 1.308 3.538.965.965 2.256 1.249 3.538 1.308 1.28.058 1.686.072 4.078.072s2.798-.014 4.078-.072c1.281-.059 2.572-.343 3.538-1.308.965-.965 1.249-2.256 1.308-3.538.058-1.28.072-1.686.072-4.078s-.014-2.798-.072-4.078c-.059-1.281-.343-2.572-1.308-3.538-.965-.965-2.256-1.249-3.538-1.308C15.798.014 15.362 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg>
      </div>

      {/* Recent Posts Section */}
      <div className="bg-white p-6 lg:w-[500px] rounded-xl shadow-lg space-y-6">
        <h2 className="font-bold text-xl">Recent Posts</h2>
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-[100px] h-[100px] rounded-lg overflow-hidden bg-gray-300">
                <Image src={`/post${index + 1}.png`} alt={`Post ${index + 1}`} width={100} height={100} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="text-sm text-gray-600">June {22 + index}, 2020</p>
                <p className="font-medium text-lg">Lorem ip adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 lg:w-[500px] rounded-xl shadow-lg space-y-6">
        <h2 className="font-bold text-xl">Recent Posts</h2>
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-[100px] h-[100px] rounded-lg overflow-hidden bg-gray-300">
                <Image src={`/post${index + 1}.png`} alt={`Post ${index + 1}`} width={100} height={100} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="text-sm text-gray-600">June {22 + index}, 2020</p>
                <p className="font-medium text-lg">Lorem ip adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogright;

