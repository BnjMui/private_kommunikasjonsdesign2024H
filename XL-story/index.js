function onClick(id) {
  if (
    document.getElementById(id).style.display === "none" ||
    document.getElementById(id).style.display === ""
  ) {
    document.getElementById(id).style.display = "block";
  } else {
    document.getElementById(id).style.display = "none";
  }
}
