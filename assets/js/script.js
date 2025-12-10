const HOTEL_WHATSAPP = "919381214611"; // change if needed

// Auto year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Smooth scroll for buttons with data-scroll
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = btn.getAttribute("data-scroll");
    const el = document.querySelector(target);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// IntersectionObserver for scroll animations
const animatedEls = document.querySelectorAll("[data-animate]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: show immediately
  animatedEls.forEach((el) => el.classList.add("in-view"));
}

// Booking form -> open WhatsApp with filled message
const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const roomType = document.getElementById("room-type").value;
    const guests = document.getElementById("guests").value || "2";
    const message = document.getElementById("message").value.trim();

    let text = `New Booking Request - Basha Guest Rooms%0A%0A`;
    text += `Name: ${name}%0A`;
    text += `Guest Phone: ${phone}%0A`;
    text += `Room Type: ${roomType}%0A`;
    text += `Guests: ${guests}%0A`;
    text += `Check-in: ${checkin}%0A`;
    text += `Check-out: ${checkout}%0A`;
    if (message) {
      text += `%0ASpecial Requests:%0A${message}`;
    }

    const url = `https://wa.me/${HOTEL_WHATSAPP}?text=${text}`;
    window.open(url, "_blank");
  });
}

// Contact form -> WhatsApp enquiry
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cname").value.trim();
    const phone = document.getElementById("cphone").value.trim();
    const message = document.getElementById("cmessage").value.trim();

    let text = `New Enquiry - Basha Guest Rooms%0A%0A`;
    text += `Name: ${name}%0A`;
    text += `Phone: ${phone}%0A`;
    text += `Message:%0A${message}`;

    const url = `https://wa.me/${HOTEL_WHATSAPP}?text=${text}`;
    window.open(url, "_blank");
  });
}

// Room cards: "Book This Room" -> prefill room type + scroll to booking
document.querySelectorAll(".room-cta .book").forEach((btn) => {
  btn.addEventListener("click", () => {
    const room = btn.getAttribute("data-room");
    const select = document.getElementById("room-type");
    if (select && room) {
      select.value = room;
    }
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Room cards: WhatsApp button with room name
document.querySelectorAll(".room-cta .whatsapp").forEach((btn) => {
  btn.addEventListener("click", () => {
    const roomName = btn.getAttribute("data-whatsapp-room") || "Room";
    const text = `Hi Basha Guest Rooms,%0AI want to know availability and price for: ${roomName}.`;
    const url = `https://wa.me/${HOTEL_WHATSAPP}?text=${text}`;
    window.open(url, "_blank");
  });
});
