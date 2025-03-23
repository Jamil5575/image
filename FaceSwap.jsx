import React, { useState } from 'react';

function FaceSwap() {
  const [sourceImage, setSourceImage] = useState(null);
  const [targetImage, setTargetImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSwap = async () => {
    if (!sourceImage || !targetImage) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('source', sourceImage);
    formData.append('target', targetImage);

    const response = await fetch('/api/face-swap', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setResultImage(data.imageUrl);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        onChange={(e) => setSourceImage(e.target.files[0])}
        className="p-2 bg-gray-800 rounded"
      />
      <input
        type="file"
        onChange={(e) => setTargetImage(e.target.files[0])}
        className="p-2 bg-gray-800 rounded"
      />
      <button
        onClick={handleSwap}
        disabled={loading}
        className="p-2 bg-neon-blue text-white rounded"
      >
        {loading ? 'Swapping faces...' : 'Swap Faces'}
      </button>
      {resultImage && <img src={resultImage} alt="Swapped" className="mt-4 rounded" />}
    </div>
  );
}

export default FaceSwap;