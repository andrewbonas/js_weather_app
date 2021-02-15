function loadContent() {
  const content = document.getElementById('content');

  const header = document.createElement('header');
  header.innerHTML = '<div class = "title">Weather Demo</div>';
  content.prepend(header);

  const footer = document.createElement('footer');
  footer.innerHTML = '<div class= "author">Andrew Bonas</div>';
  content.appendChild(footer);
}

export default loadContent;
