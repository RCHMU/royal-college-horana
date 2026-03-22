const eventData = {
  1: { title: "Annual Sports Meet 2026", date: "March 25, 2026", desc: "The biggest event of the year! All four houses will compete for the championship. Expect thrilling races, field events and house spirit.", img: "https://picsum.photos/id/201/1200/600", gallery: ["https://picsum.photos/id/201/600/400","https://picsum.photos/id/202/600/400","https://picsum.photos/id/203/600/400", "https://picsum.photos/id/204/600/400"] },
  2: { title: "Science Exhibition 2026", date: "April 15, 2026", desc: "Students from Grade 6-13 will showcase innovative projects, experiments and inventions.", img: "https://picsum.photos/id/301/1200/600", gallery: ["https://picsum.photos/id/301/600/400","https://picsum.photos/id/302/600/400"] },
  3: { title: "Cultural Concert & Drama Night", date: "May 10, 2026", desc: "A night filled with music, dance and drama performances by our talented students.", img: "https://picsum.photos/id/401/1200/600", gallery: ["https://picsum.photos/id/401/600/400","https://picsum.photos/id/402/600/400","https://picsum.photos/id/403/600/400"] },
  4: { title: "Sports Meet 2025", date: "March 20, 2025", desc: "Pradheepa House won the championship after an exciting competition.", img: "https://picsum.photos/id/501/1200/600", gallery: ["https://picsum.photos/id/501/600/400","https://picsum.photos/id/502/600/400"] },
  5: { title: "Annual Concert 2025", date: "June 15, 2025", desc: "Unforgettable performances by the school band and cultural clubs.", img: "https://picsum.photos/id/601/1200/600", gallery: ["https://picsum.photos/id/601/600/400","https://picsum.photos/id/602/600/400","https://picsum.photos/id/603/600/400"] },
  6: { title: "Science Exhibition 2024", date: "April 10, 2024", desc: "Over 50 student projects displayed.", img: "https://picsum.photos/id/701/1200/600", gallery: ["https://picsum.photos/id/701/600/400"] },
  7: { title: "Big Match 2025", date: "February 28, 2025", desc: "The annual cricket encounter between Royal College Horana and Siri Piyarathana College.", img: "https://picsum.photos/id/801/1200/600", gallery: ["https://picsum.photos/id/801/600/400","https://picsum.photos/id/802/600/400"] }
};

// Main Image එක මාරු කරන Function එක
function changeMainImage(src) {
  const mainImg = document.getElementById('modalImage');
  mainImg.style.opacity = '0'; // කුඩා ඇනිමේෂන් එකක් සඳහා
  setTimeout(() => {
    mainImg.src = src;
    mainImg.style.opacity = '1';
  }, 200);
}

function showEventDetail(id) {
  const ev = eventData[id];
  document.getElementById('modalImage').src = ev.img;
  document.getElementById('modalTitle').textContent = ev.title;
  document.getElementById('modalDate').textContent = ev.date;
  document.getElementById('modalDesc').textContent = ev.desc;

  // මෙහිදී onclick="changeMainImage('${src}')" එකතු කර ඇත
  const galleryHTML = ev.gallery.map(src => 
    `<img src="${src}" 
          onclick="changeMainImage('${src}')" 
          class="rounded-2xl w-full h-40 object-cover cursor-pointer hover:ring-4 hover:ring-gold transition shadow-lg" 
          alt="Gallery Image">`
  ).join('');
  
  document.getElementById('modalGallery').innerHTML = galleryHTML;
  document.getElementById('eventModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Modal එක ඇති විට පිටුපස scroll වීම වැළැක්වීමට
}

function closeModal() {
  document.getElementById('eventModal').classList.add('hidden');
  document.body.style.overflow = 'auto'; // නැවත scroll කිරීමට ඉඩ දීම
}

const menuBtn = document.getElementById('mobile-menu-button');
const closeBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Menu එක විවෘත කිරීමට
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
});

// Menu එක වසා දැමීමට
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full');
});
