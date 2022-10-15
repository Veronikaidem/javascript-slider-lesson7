let data = [
  {
    id: 1,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    title: "slide title 1",
  },
  {
    id: 2,
    imageUrl:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "slide title 2",
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    title: "slide title 3",
  },
  {
    id: 4,
    imageUrl:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "slide title 4",
  },
];

const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;

function createDivTag(item) {
  const divtag = document.createElement("div");
  divtag.classList.add("slide");

  return divtag;
}

function createImgTag(item) {
  const tagImage = document.createElement("img");
  tagImage.setAttribute("src", item.imageUrl);
  tagImage.setAttribute("alt", item.title);
  tagImage.classList.add("image-slider");
  return tagImage;
}

function createH3Tag(item) {
  const h3title = document.createElement("h3");
  h3title.innerText = item.title;

  return h3title;
}

function setSlide() {
  sliderContent.innerHTML = "";

  const slideItem = createDivTag(data[sliderIndex]);
  const imgTag = createImgTag(data[sliderIndex]);
  const titleSlider = createH3Tag(data[sliderIndex]);

  slideItem.appendChild(imgTag);
  slideItem.appendChild(titleSlider);
  sliderContent.appendChild(slideItem);
}
function arrowLeftClick(){
    if(sliderIndex==0){
        sliderIndex = data.length-1;
        setSlide();
        return
    }
  sliderIndex -= 1;
  setSlide();  
}

function arrowRightClick(){
    if(sliderIndex== data.length-1){
        sliderIndex=0;
        setSlide();
        return;
    }
  sliderIndex += 1;
  setSlide();
}

arrowLeft.addEventListener("click", arrowLeftClick);

arrowRight.addEventListener("click", arrowRightClick);

setInterval( ()=>{
 arrowRightClick();
}, 2000);

setSlide();
