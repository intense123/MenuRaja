import React from 'react';
import { QrCode, Smartphone, Upload, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'Easy Menu Upload',
      description: 'Upload and update your menu items instantly through our user-friendly dashboard.',
      icon: Upload,
    },
    {
      name: 'Instant QR Generation',
      description: 'Get your unique QR code instantly that links directly to your digital menu.',
      icon: QrCode,
    },
    {
      name: 'Mobile Optimized',
      description: 'Beautiful, responsive design that works perfectly on all mobile devices.',
      icon: Smartphone,
    },
    {
      name: 'Secure Platform',
      description: 'Your menu data is protected with enterprise-grade security.',
      icon: Shield,
    },
  ];

  return (
    <div className="py-12 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for a digital menu
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}