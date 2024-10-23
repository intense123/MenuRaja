import React, { useState } from 'react';
import { ChevronRight, QrCode } from 'lucide-react';
import MenuTemplate from '../components/MenuTemplate';
import QRCodeGenerator from '../components/QRCodeGenerator';

const templates = [
  {
    id: 1,
    name: 'Modern Minimal',
    preview: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    description: 'Clean and modern design with focus on typography',
  },
  {
    id: 2,
    name: 'Classic Elegant',
    preview: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    description: 'Traditional layout with elegant styling',
  },
  {
    id: 3,
    name: 'Bold & Vibrant',
    preview: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    description: 'Colorful design with bold typography',
  },
];

export default function CustomizeTemplatePage() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [menuData, setMenuData] = useState(null);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handleSaveMenu = (data) => {
    setMenuData(data);
    setShowQR(true);
  };

  if (showQR && menuData) {
    return <QRCodeGenerator menuData={menuData} />;
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Choose Your Template
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Select a template to start customizing your menu
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {templates.map((template) => (
            <div
              key={template.id}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleTemplateSelect(template)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={template.preview}
                  alt={template.name}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{template.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{template.description}</p>
              </div>
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
            </div>
          ))}
        </div>

        {selectedTemplate && (
          <MenuTemplate 
            template={selectedTemplate}
            onSave={handleSaveMenu}
          />
        )}
      </div>
    </div>
  );
}