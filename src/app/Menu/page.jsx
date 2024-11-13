"use client";

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import dynamic from 'next/dynamic';
import QRCode from 'react-qr-code';

// Dynamically import QRCodeScanner to prevent SSR issues with window objects
const QRCodeScanner = dynamic(() => import('react-qr-reader').then(mod => mod.default), { ssr: false });

// Component to load and display .glb model
function ChickenModel() {
  const { scene } = useGLTF('/chicken.glb'); // Replace with your model path
  return <primitive object={scene} scale={0.5} />;
}

const Page = () => {
  const [scannedData, setScannedData] = useState(null);
  const [showAR, setShowAR] = useState(false);

  // Function to handle QR code scan
  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
      setShowAR(true); // Show AR view when QR is successfully scanned
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  // Function to handle click on QR code
  const handleQRCodeClick = () => {
    setShowAR(true); // Show AR view on QR code click
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-5 mt-5 h-screen">
      {!scannedData ? (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold " >SCAN CODE</h1>
          {/* QR Code to show a link */}
          <QRCode value="'https://your-project.vercel.app/chicken.glb'" className="mt-4  hover:cursor-pointer" onClick={handleQRCodeClick}  />
          
          <div className="mt-4">
            <QRCodeScanner
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '300px', height: '300px' }}
            />
          </div>
        </div>
      ) : showAR ? (
        <div className="w-full h-[500px]">
          <Canvas>
            <ambientLight intensity={0.5} />
            <Environment preset="sunset" />
            <OrbitControls enableZoom={false} />
            <ChickenModel />
          </Canvas>
        </div>
      ) : null}
    </div>
  );
};

export default Page;
