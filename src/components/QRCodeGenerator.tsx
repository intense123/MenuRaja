import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { Download, Share2 } from 'lucide-react';

interface QRCodeGeneratorProps {
  menuData: string | object;
}

export default function QRCodeGenerator({ menuData }: QRCodeGeneratorProps) {
  const [qrValue, setQrValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    try {
      // Convert menu data to a JSON string if it's an object
      const menuString = typeof menuData === 'string' ? menuData : JSON.stringify(menuData);
      
      // Encode the menu data as base64
      const encodedData = btoa(menuString);
      
      // Create the full URL for the menu
      const menuUrl = `${window.location.origin}/menu/${encodedData}`;
      setQrValue(menuUrl);
      setError('');
    } catch (err) {
      setError('Failed to generate QR code. Please try again with less data.');
    }
  }, [menuData]);

  const downloadQRCode = () => {
    try {
      const canvas = document.querySelector('canvas');
      if (!canvas) return;

      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'menu-raja-qr.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (err) {
      setError('Failed to download QR code. Please try again.');
    }
  };

  const shareQRCode = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'MenuRaja QR Code',
          text: 'Scan this QR code to view our menu!',
          url: qrValue
        });
      } else {
        await navigator.clipboard.writeText(qrValue);
        alert('QR code link copied to clipboard!');
      }
    } catch (err) {
      setError('Failed to share QR code. Please try again.');
    }
  };

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Your Menu QR Code</h2>
      
      <div className="p-4 bg-white rounded-lg shadow-sm">
        {qrValue && (
          <QRCode
            value={qrValue}
            size={200}
            level="H"
            includeMargin={true}
            renderAs="canvas"
          />
        )}
      </div>

      <p className="text-sm text-gray-600 text-center">
        Scan this QR code with a smartphone camera to view the menu
      </p>

      <div className="flex space-x-4">
        <button
          onClick={downloadQRCode}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </button>
        <button
          onClick={shareQRCode}
          className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </button>
      </div>
    </div>
  );
}