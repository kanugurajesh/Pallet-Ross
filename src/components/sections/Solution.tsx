import React from 'react';
import { Zap, Shield, Heart } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Solution</h2>
          <p className="mt-4 text-lg text-gray-600">A comprehensive platform for artists and collectors</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="relative p-6 bg-gray-50 rounded-lg">
            <div className="absolute top-6 right-6 text-blue-600">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mt-8 text-xl font-semibold">Fast & Efficient</h3>
            <p className="mt-2 text-gray-600">Lightning-fast uploads and seamless transactions</p>
          </div>
          <div className="relative p-6 bg-gray-50 rounded-lg">
            <div className="absolute top-6 right-6 text-blue-600">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mt-8 text-xl font-semibold">Secure Platform</h3>
            <p className="mt-2 text-gray-600">Advanced security measures to protect your art</p>
          </div>
          <div className="relative p-6 bg-gray-50 rounded-lg">
            <div className="absolute top-6 right-6 text-blue-600">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="mt-8 text-xl font-semibold">Community Focused</h3>
            <p className="mt-2 text-gray-600">Connect with like-minded artists and collectors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;