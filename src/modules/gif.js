async function giphy(weather) {
  const img = document.querySelector('#gif');
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=OMkxfL7EreAtBnW3c7yG8YIb8kXVODGB&s=${weather}`, {
      mode: 'cors',
    });
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
    img.style.display = 'block';
  } catch {
    img.style.display = 'none';
  }
}

export default giphy;
