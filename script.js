window.addEventListener("load",()=>setTimeout(()=>document.querySelector(".loader")?.classList.add("done"),850));

const menu=document.querySelector(".hamburger"), center=document.querySelector(".nav-center");
menu?.addEventListener("click",()=>{center.classList.toggle("open"); menu.classList.toggle("open")});
document.querySelectorAll(".nav-center a").forEach(a=>a.addEventListener("click",()=>center.classList.remove("open")));

const tabs=document.querySelectorAll(".menu-tabs button"), dishes=document.querySelectorAll(".dish");
tabs.forEach(tab=>tab.addEventListener("click",()=>{
  tabs.forEach(x=>x.classList.remove("active"));tab.classList.add("active");
  const cat=tab.dataset.cat;
  dishes.forEach(d=>d.classList.toggle("hide",cat!=="all" && d.dataset.cat!==cat));
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));

const date=document.querySelector('input[type="date"]');
if(date) date.min=new Date().toISOString().split("T")[0];

const form=document.getElementById("reserveForm"), toast=document.getElementById("toast");
form?.addEventListener("submit",e=>{e.preventDefault();toast.classList.add("show");form.reset();setTimeout(()=>toast.classList.remove("show"),4000)});

let last=0;
window.addEventListener("scroll",()=>{
  const h=document.getElementById("header");
  h.classList.toggle("scrolled",window.scrollY>30);
  last=window.scrollY;
},{passive:true});
