let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let cardsContainer = document.querySelector("#cards-container");
form.addEventListener("submit", (dets) => {
  // console.log(dets);
  dets.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://plus.unsplash.com/premium_photo-1779753391100-6ed78213c5b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
  );

  let h3 = document.createElement("h3");
  h3.textContent = "rahul";

  let h5 = document.createElement("h5");
  h5.textContent = "stars";

  let p = document.createElement("p");
  p.textContent = "all around him";

  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  cardsContainer.appendChild(card);
});
