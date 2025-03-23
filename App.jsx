import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextToImage from './components/TextToImage';
import ImageUpscaling from './components/ImageUpscaling';
import FaceSwap from './components/FaceSwap';
import BackgroundRemoval from './components/BackgroundRemoval';
import ProfilePictureGenerator from './components/ProfilePictureGenerator';
import PassportPhotoMaker from './components/PassportPhotoMaker';
import AIReplacer from './components/AIReplacer';

function App() {
  const [activeTab, setActiveTab] = useState('text-to-image');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="p-4">
        <div className="flex space-x-4 mb-4">
          <button onClick={() => setActiveTab('text-to-image')} className="p-2 bg-gray-800 rounded">
            Text-to-Image
          </button>
          <button onClick={() => setActiveTab('upscaling')} className="p-2 bg-gray-800 rounded">
            Image Upscaling
          </button>
          <button onClick={() => setActiveTab('face-swap')} className="p-2 bg-gray-800 rounded">
            Face Swap
          </button>
          <button onClick={() => setActiveTab('background-removal')} className="p-2 bg-gray-800 rounded">
            Background Removal
          </button>
          <button onClick={() => setActiveTab('profile-picture')} className="p-2 bg-gray-800 rounded">
            Profile Picture
          </button>
          <button onClick={() => setActiveTab('passport-photo')} className="p-2 bg-gray-800 rounded">
            Passport Photo
          </button>
          <button onClick={() => setActiveTab('ai-replacer')} className="p-2 bg-gray-800 rounded">
            AI Replacer
          </button>
        </div>

        {activeTab === 'text-to-image' && <TextToImage />}
        {activeTab === 'upscaling' && <ImageUpscaling />}
        {activeTab === 'face-swap' && <FaceSwap />}
        {activeTab === 'background-removal' && <BackgroundRemoval />}
        {activeTab === 'profile-picture' && <ProfilePictureGenerator />}
        {activeTab === 'passport-photo' && <PassportPhotoMaker />}
        {activeTab === 'ai-replacer' && <AIReplacer />}
      </main>
      <Footer />
    </div>
  );
}

export default App;