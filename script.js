import { fetchTextToImage, fetchUpscaleImage } from './utils/api';

// Text-to-Image Generation
const generateButton = document.getElementById('generate-button');
const generatedImage = document.getElementById('generated-image');

generateButton.addEventListener('click', async () => {
  const prompt = document.getElementById('text-prompt').value;
  const style = document.getElementById('style-select').value;

  if (!prompt) {
    alert('Please enter a prompt.');
    return;
  }

  try {
    const imageUrl = await fetchTextToImage(prompt, style);
    generatedImage.src = imageUrl; // Display the generated image
  } catch (error) {
    alert('Failed to generate image. Please try again.');
  }
});

// Image Upscaling
const upscaleButton = document.getElementById('upscale-button');
const upscaledImage = document.getElementById('upscaled-image');

upscaleButton.addEventListener('click', async () => {
  const fileInput = document.getElementById('upscale-file');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please upload an image.');
    return;
  }

  try {
    const imageUrl = await fetchUpscaleImage(file);
    upscaledImage.src = imageUrl; // Display the upscaled image
  } catch (error) {
    alert('Failed to upscale image. Please try again.');
  }
});