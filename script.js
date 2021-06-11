const backArrow = document.getElementById('leftarrow');
const frontArrow = document.getElementById('rightarrow');
const imagess = document.getElementById('thumbnail');
const img = [
  { img: "tree.jpg" },
  { img: "redflower.jpg" },
  { img: "house.jpg" },
  { img: "ocean.jpg" },
  { img: "moutwt.jpg" }

];
let imgCount = 0;

function images() {
  const item = img[imgCount];
  imagess.src = item.img;
  document.body.style.backgroundImage = `url(${item.img})`;



}
backArrow.addEventListener('click', function () {

  imgCount--
  if (imgCount < 0) {
    imgCount = img.length - 1
  }

  images();
})

frontArrow.addEventListener('click', function () {
  imgCount++

  if (imgCount > img.length - 1) {
    imgCount = 0
  }

  images();
})