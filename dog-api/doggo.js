const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggo = document.querySelector(".dog-img");

function newDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.text();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const dogObject = JSON.parse(processedResponse);
      const img = document.createElement("img");
      img.src = dogObject.message;
      img.alt = "Cute doggo";
      doggo.appendChild(img);
    });
}

document.querySelector(".dog-btn").addEventListener("click", newDoggo);
