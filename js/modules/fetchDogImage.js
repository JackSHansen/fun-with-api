// Fetches a random dog image URL from the API
export async function fetchDogImage() {
  const response = await fetch('https://random.dog/woof.json');
  const data = await response.json();
  return data.url; // Returns the image URL
}
