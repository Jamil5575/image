import React, { useState } from 'react';

function TextToImage() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('photorealistic');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const response = await fetch('/api/text-to-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, style }),
    });
    const data = await response.json();
    setImage(data.imageUrl);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt"
        className="p-2 w-full bg-gray-800 rounded"
      />
      <select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        className="p-2 bg-gray-800 rounded"
      >
        <option value="photorealistic">Photorealistic</option>
        <option value="anime">Anime</option>
        <option value="cyberpunk">Cyberpunk</option>
      </select>
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="p-2 bg-neon-blue text-white rounded"
      >
        {loading ? 'Generating...' : 'Generate Image'}
      </button>
      {image && <img src={image} alt="Generated" className="mt-4 rounded" />}
    </div>
  );
}

export default TextToImage;