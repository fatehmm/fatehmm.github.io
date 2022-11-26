
  let hamburger = document.getElementById('nav-icon4');
  hamburger.addEventListener('click', function(){
    if(hamburger.className.includes('open'))
    {
        hamburger.classList.remove('open');
        hamburger.style.color = "#f14a4a";
    }
    else{
        hamburger.classList.add('open');
        hamburger.style.color = "#4E16A8"
    }
  })

  let offcanvas = document.getElementById('offcanvas');
  hamburger.addEventListener('click', function(){
    if(offcanvas.className.includes('closed'))
    {
        offcanvas.classList.remove('closed');
    }
    else{
        offcanvas.classList.add('closed')
    }
  })

  const image = document.querySelector(".tilt");

image.addEventListener("mousemove", event => {
  const { top, bottom, left, right } = event.target.getBoundingClientRect();

  const middleX = (right - left) / 2;
  const middleY = (bottom - top) / 2;

  const clientX = event.clientX;
  const clientY = event.clientY;

  const offsetX = (clientX - middleX) / middleX;
  const offsetY = (middleY - clientY) / middleY;

  event.target.style.transform = `perspective(1000px) rotateY(${offsetX *
    2}deg) rotateX(${offsetY * 2}deg) scale3d(1, 1, 1)`;
});
