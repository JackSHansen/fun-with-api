// Sets up the button click event to fetch and display a dog image
import { fetchDogImage } from './fetchDogImage.js';
import { setImageSrc } from './setImageSrc.js';
import { isImageUrl } from './isImageUrl.js';

export function setupButton(button, img) {
  button.addEventListener('click', async () => {
    try {
      const url = await fetchDogImage();
      if (isImageUrl(url)) {
        setImageSrc(img, url);
      } else {
        button.click(); // Try again if not an image
      }
    } catch (error) {
      console.error('Error fetching dog:', error);
    }
  });
}
