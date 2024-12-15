const bgImg = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

function bgHandler() {
  const random = bgImg[Math.floor(Math.random() * bgImg.length)];
  const img = document.createElement("img");
  img.src = `./imgs/${random}`;
  document.body.appendChild(img);
}

bgHandler();