const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggo = document.querySelector(".dog-img");

async function newDoggo() {
  const promise = await fetch(DOG_URL);
  const processedResponse = await promise.json();
  const img = document.createElement("img");
  img.src = processedResponse.message;
  img.alt = "Cute doggo";
  doggo.appendChild(img);
}

document.querySelector(".dog-btn").addEventListener("click", newDoggo);
