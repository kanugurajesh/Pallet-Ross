import React from 'react';
import { Target, Brush, Users } from 'lucide-react';

const Strategy: React.FC = () => {
  return (
    <section id="strategy" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Create Your Strategy</h2>
          <p className="mt-4 text-lg text-gray-600">Build a successful approach to showcase and sell your art</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-blue-600">
              <Target className="w-full h-full" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Define Your Goals</h3>
            <p className="mt-2 text-gray-600">Set clear objectives for your artistic journey</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-blue-600">
              <Brush className="w-full h-full" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Develop Your Style</h3>
            <p className="mt-2 text-gray-600">Refine your unique artistic voice</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-blue-600">
              <Users className="w-full h-full" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Build Your Audience</h3>
            <p className="mt-2 text-gray-600">Connect with collectors and enthusiasts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;