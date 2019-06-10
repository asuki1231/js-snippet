const req = new XMLHttpRequest();
req.responseType = "blob";
req.addEventListener("progress", event => {
  const rate = event.loaded / event.total;
  const element = document.querySelector(".progress-bar");
  element.style.width = `${rate * 100}%`;
});

req.addEventListener("load", event => {
  const data = event.target.response;
  const source = URL.createObjectURL(data);
  const image = new Image();
  image.src = source;
  document.querySelector("#log").appendChild(image);
});

//cross origin
req.open("GET", "https://via.placeholder.com/900");
req.send();
