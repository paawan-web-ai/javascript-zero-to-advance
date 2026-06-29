let form = document.querySelector("form");

form.addEventListener("submit", (dets) => {
  console.log(dets);
  dets.preventDefault();
});
