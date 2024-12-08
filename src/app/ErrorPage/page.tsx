import React from 'react';

const MainContent404: React.FC = () => {
  return (
    <main className="text-center py-20">
      <h2 className="text-6xl font-bold text-orange-500">404</h2>
      <p className="text-2xl font-bold text-gray-800 mt-4">Oops! Look likes something going wrong</p>
      <p className="text-lg text-gray-600 mt-2">
        Page Cannot be found! we&apos;ll have it figured out in no time. Meanwhile, check out these fresh ideas:
      </p>
      <button className="mt-6 px-8 py-4 bg-orange-500 text-white font-bold rounded">Go to home</button>
    </main>
  );
};

export default MainContent404;