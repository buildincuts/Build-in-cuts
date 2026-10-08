// Smooth reveal on scroll
const items = document.querySelectorAll('.project,.skill,.facts div');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('show'); observer.unobserve(e.target);} });
},{threshold:.12});
items.forEach(i=>{i.classList.add('reveal');observer.observe(i);});

// Replace placeholder contact details before publishing.
