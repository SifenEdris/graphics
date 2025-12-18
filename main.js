// ======= THEME TOGGLE =======
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if(localStorage.getItem("theme")==="light") body.classList.add("light");

themeToggle.addEventListener("click",()=>{
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("light")?"light":"dark");
  themeToggle.textContent = body.classList.contains("light")?"🌙":"☀️";
});

themeToggle.textContent = body.classList.contains("light")?"🌙":"☀️";

// ======= SMOOTH SCROLL =======
document.querySelectorAll('.nav a').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const target=document.querySelector(link.getAttribute('href'));
    window.scrollTo({top:target.offsetTop-60,behavior:'smooth'});
  });
});

// ======= HAMBURGER MENU =======
const hamburger=document.getElementById("hamburger");
const nav=document.querySelector(".nav");
hamburger.addEventListener("click",()=>{ nav.classList.toggle("active"); });

// ======= SCROLL REVEAL =======
const revealElements=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
  const windowHeight=window.innerHeight;
  revealElements.forEach(el=>{
    if(el.getBoundingClientRect().top<windowHeight-100){
      el.classList.add('visible');
    }
  });
});

// ======= CIRCULAR SKILLS =======
document.querySelectorAll(".skill-circle").forEach(circle=>{
  const percent = circle.dataset.skill;
  const stroke = circle.querySelectorAll("circle")[1];
  const offset = 283-(283*percent/100);
  setTimeout(()=>{ stroke.style.strokeDashoffset = offset; },500);
});

// ======= TESTIMONIAL CAROUSEL AUTO-SCROLL =======
const carousel=document.querySelector('.testimonial-carousel');
let scrollAmount=0;
setInterval(()=>{
  if(carousel){
    scrollAmount+=270;
    if(scrollAmount>=carousel.scrollWidth) scrollAmount=0;
    carousel.scrollTo({left:scrollAmount, behavior:'smooth'});
  }
},4000);

// ======= CURRENT YEAR FOOTER =======
document.getElementById("year").textContent = new Date().getFullYear();
body.classList.toggle("light");
localStorage.setItem("theme", body.classList.contains("light")?"light":"dark");
themeToggle.textContent = body.classList.contains("light")?"🌙":"☀️";









const testimonials = [
  {
    text: "Working with Sifen was amazing. Clean code, great communication, and the final result exceeded expectations.",
    name: "Daniel M.",
    role: "Startup Founder",
    img: "https://i.pravatar.cc/100?img=12"
  },
  {
    text: "Very professional and creative. The UI/UX design was modern and smooth.",
    name: "Sarah L.",
    role: "Product Manager",
    img: "https://i.pravatar.cc/100?img=32"
  },
  {
    text: "Fast delivery, strong skills, and great attention to detail. Highly recommended.",
    name: "Ahmed R.",
    role: "Business Owner",
    img: "https://i.pravatar.cc/100?img=45"
  }
];

let index = 0;
const card = document.querySelector(".testimonial-card");

function updateTestimonial() {
  card.innerHTML = `
    <p class="quote">“${testimonials[index].text}”</p>
    <div class="client">
      <img src="${testimonials[index].img}">
      <div>
        <h4>${testimonials[index].name}</h4>
        <span>${testimonials[index].role}</span>
      </div>
    </div>
  `;
}

document.querySelector(".next").onclick = () => {
  index = (index + 1) % testimonials.length;
  updateTestimonial();
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
};

/* Auto slide */
setInterval(() => {
  index = (index + 1) % testimonials.length;
  updateTestimonial();
}, 6000);

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const response = await fetch(contactForm.action, {
    method: contactForm.method,
    body: formData
  });

  if (response.ok) {
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    contactForm.reset();
  } else {
    formMessage.textContent = "Oops! Something went wrong.";
    formMessage.style.color = "red";
  }
});
