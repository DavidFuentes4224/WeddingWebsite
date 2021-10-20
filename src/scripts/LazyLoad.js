const lazyloadImages = document.querySelectorAll("[data-src]");    

function preloadImage(img) {
  const src= img.getAttribute("data-src");
  if(!src)
    return;
  
  var rotation = (Math.random() * 5) - 2;
  if(img.className.includes("polaroidz")){
    img.style.transform = 'rotate(' + rotation + 'deg)';
  }
  img.src = src;
}

const imgOptions = {
};

const imgObserver = new IntersectionObserver(
  (entries, imgObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    })
  },
  imgOptions);

lazyloadImages.forEach(image => {
  imgObserver.observe(image);
});