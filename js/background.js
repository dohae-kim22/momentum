const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const selectedImage = images[Math.floor(Math.random() * images.length)];

const imgEl = document.createElement("img");
imgEl.src = `image/${selectedImage}`;

document.body.append(imgEl);
