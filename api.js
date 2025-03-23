export const API_ENDPOINTS = {
  TEXT_TO_IMAGE: '/api/text-to-image',
  UPSCALE_IMAGE: '/api/upscale-image',
  FACE_SWAP: '/api/face-swap',
  BACKGROUND_REMOVAL: '/api/background-removal',
  PROFILE_PICTURE: '/api/profile-picture',
  PASSPORT_PHOTO: '/api/passport-photo',
  AI_REPLACER: '/api/ai-replacer',
};

export const STYLES = [
  { value: 'photorealistic', label: 'Photorealistic' },
  { value: 'anime', label: 'Anime' },
  { value: 'cyberpunk', label: 'Cyberpunk' },
];

// Custom Backend API Key
const BACKEND_API_KEY = 'XEVboL17c4TLGyvt1WsGhhfr';

// OpenAI API Key
const OPENAI_API_KEY = 'sk-F8L2eCI3aHe7KutZwti5YXOcfeSrlsOmTe3udQ6neJqXrf3k';

// Fetch Text-to-Image from OpenAI DALL·E
export const fetchTextToImage = async (prompt, style) => {
  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `${prompt} in ${style} style`,
        n: 1,
        size: '512x512',
      }),
    });

    const data = await response.json();
    if (data.data && data.data[0].url) {
      return data.data[0].url; // Return the generated image URL
    } else {
      throw new Error('Failed to generate image.');
    }
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};

// Fetch Image Upscaling from Backend
export const fetchUpscaleImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(API_ENDPOINTS.UPSCALE_IMAGE, {
      method: 'POST',
      headers: {
        'api-key': BACKEND_API_KEY,
      },
      body: formData,
    });

    const data = await response.json();
    return data.imageUrl; // Return the upscaled image URL
  } catch (error) {
    console.error('Error upscaling image:', error);
    throw error;
  }
};

// Add more API utility functions for other features