import React from 'react';

const GetStarted: React.FC = () => {
  return (
    <section id="get-started" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get Started with Pallet Ross</h2>
          <p className="mt-4 text-lg text-gray-600">Begin your journey in the world of digital art creation and collection.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900">Create Account</h3>
            <p className="mt-2 text-gray-600">Sign up and set up your artist or collector profile</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900">Upload Artwork</h3>
            <p className="mt-2 text-gray-600">Share your masterpieces with the world</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900">Connect</h3>
            <p className="mt-2 text-gray-600">Engage with the community and collectors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;