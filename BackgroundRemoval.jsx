import React, { useState } from 'react';

function BackgroundRemoval() {
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/background-removal', {
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
        onChange={handleUpload}
        className="p-2 bg-gray-800 rounded"
      />
      {loading && <p>Removing background...</p>}
      {resultImage && <img src={resultImage} alt="Background Removed" className="mt-4 rounded" />}
    </div>
  );
}

export default BackgroundRemoval;