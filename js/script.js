const button = document.getElementById('generate-btn');
const img = document.getElementById('dog-image');

button.addEventListener('click', () => {
  fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(data => {
      const url = data.url;

      if (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif')) {
        img.src = url;
      } else {
        button.click();
      }
    })
    .catch(error => {
      console.error('Error fetching dog:', error);
    });
});
