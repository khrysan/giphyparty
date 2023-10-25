console.log("Let's get this party started!");

const api_key = "bHVRLkmnJxO8DogGGftrhVzzosgQAIbd";

document.querySelector("#submit").addEventListener("click", function (e) {
  e.preventDefault();
  let tag = document.querySelector("#gifSearch").value;
  getGif(tag);
  document.querySelector("#form").reset();
});

document.querySelector("#clearGifs").addEventListener("click", function (e) {
  e.preventDefault();
  const container = document.querySelector("#container");
  container.innerHTML = "";
});

async function getGif(tag) {
  let res = await axios.get("http://api.giphy.com/v1/gifs/random", {
    params: { api_key, tag },
  });
  const img = document.createElement("img");
  img.src = res.data.data.images.original.url;
  document.querySelector("#container").append(img);
  console.log(res);
}

document.addEventListener("DOMContentLoaded", function () {
  rdmPlaceholder();
});

async function rdmPlaceholder() {
  let res = await axios.get("http://api.giphy.com/v1/gifs/random", {
    params: { api_key },
  });
  console.log(res);
  const rdmTag = document.querySelector("#gifSearch");
  rdmTag.setAttribute("placeholder", res.data.data.title);
}
