function toggleNav() {
  const nav = document.getElementById("myTopNav")
  if (nav.className === "topnav") {
    nav.className += "-responsive"
  } else {
    nav.className = "topnav"
  }
}