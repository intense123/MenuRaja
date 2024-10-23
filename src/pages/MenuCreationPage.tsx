import React from 'react';
import { Upload, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MenuCreationPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Create Your Digital Menu
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Choose how you'd like to create your digital menu
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          <Link 
            to="/upload-menu"
            className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-8">
              <div className="flex justify-center">
                <Upload className="h-12 w-12 text-indigo-600" />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
                Upload Your Menu
              </h2>
              <p className="mt-4 text-gray-500 text-center">
                Upload your existing menu design and we'll convert it into a digital format
              </p>
            </div>
          </Link>

          <Link 
            to="/customize-template"
            className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-8">
              <div className="flex justify-center">
                <Palette className="h-12 w-12 text-indigo-600" />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
                Customize Template
              </h2>
              <p className="mt-4 text-gray-500 text-center">
                Choose from our beautiful templates and customize them to match your brand
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}