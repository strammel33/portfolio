function toggleNav() {
  const links = document.getElementById('page-links')
  if (links.style.display === "block") {
    links.style.display = "none"
  } else {
    links.style.display = "block"
  }
}