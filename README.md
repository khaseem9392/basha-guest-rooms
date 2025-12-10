# Basha Guest Rooms – Static Website

A simple, mobile-responsive hotel website for **Basha Guest Rooms** built using **HTML, CSS, and vanilla JavaScript**.

It is designed for quick deployment on **GitHub Pages**, **Netlify**, or any static hosting.  
Guests can:

- View **Non-AC Single, Non-AC Double, and Family Room** options
- See a **photo gallery**
- Get **location on Google Maps**
- Send **booking requests via WhatsApp**
- Send **quick enquiries** via WhatsApp from a contact form

---

## Live Demo (after you deploy)

Once you deploy this repo (instructions below), your site URL will look like:

```text
https://your-github-username.github.io/basha-guest-rooms/
```

Replace `your-github-username` with your actual username.

---

## Features

- ✅ Clean, modern design using **Poppins** font  
- ✅ Sections:
  - Hero with main CTA
  - About
  - Room Types (Non-AC only)
  - Photo Gallery
  - Location (Google Maps short link – you can replace with an embed)
  - Contact & WhatsApp support
- ✅ **WhatsApp booking integration**:
  - Booking form opens WhatsApp with booking details pre-filled
  - Room cards have direct WhatsApp buttons
- ✅ **Scroll animations** with `IntersectionObserver`
- ✅ Floating **WhatsApp chat** button
- ✅ Mobile responsive layout

---

## Project Structure

```bash
basha-guest-rooms-site/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── front.jpg         # hotel front view (add your image)
│       ├── reception.jpg     # reception area (add your image)
│       ├── room-single.jpg   # Non-AC Single room photo
│       ├── room-double.jpg   # Non-AC Double room photo
│       └── room-family.jpg   # Family room photo
```

> ⚠️ The repo includes an **empty `assets/images` folder**.  
> You must copy your actual `.jpg` / `.png` images into it.

---

## How to Use

### 1. Add Your Images

Place your real photos into:

```bash
assets/images/
```

Recommended filenames (to match the existing code):

- `front.jpg` – exterior front view of Basha Guest Rooms
- `reception.jpg` – reception / lobby area
- `room-single.jpg` – sample Non-AC single room
- `room-double.jpg` – sample Non-AC double room
- `room-family.jpg` – sample Non-AC family room

You can use different filenames, but then update:

- `index.html` image `src="assets/images/..."`
- `assets/css/style.css` hero background in the `.hero` selector

---

### 2. Update Contact Details (if needed)

Currently set to:

- Phone: **+91 93812 14611**
- WhatsApp: `919381214611`
- Email placeholder: `yourhotelmail@example.com`

To change:

1. Open `index.html`
2. Search and edit:
   - `+91 93812 14611`
   - `HOTEL_WHATSAPP = "919381214611"` (inside `assets/js/script.js`)
   - All `https://wa.me/919381214611?...` links

---

### 3. Open Locally (for testing)

Just open `index.html` in a browser:

- On Windows: double-click `index.html`
- Or right-click → “Open With” → choose your browser

You should see the full website working locally, with animations and WhatsApp integration.

---

## Deploy to GitHub Pages

1. Create a new repo on GitHub, e.g. **`basha-guest-rooms`**.
2. Upload all files and folders from `basha-guest-rooms-site/` to the repo root.
3. Go to **Settings → Pages**.
4. Under **“Source”**, choose:
   - **Deploy from a branch**
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**.

GitHub will build and give you a URL like:

```text
https://your-github-username.github.io/basha-guest-rooms/
```

This is your **live hotel website** link.

---

## Deploy to Netlify (optional)

1. Go to Netlify and sign up (GitHub/Google login works).
2. Click **“Add new site” → “Deploy manually”**.
3. Drag the entire project folder (with `index.html`, `assets/`) into the window.
4. Netlify will give you a public URL like:

```text
https://bashaguestrooms.netlify.app/
```

You can rename the site in Netlify settings.

---

## Customisation Guide

- ### Change Room Text / Prices
  - Open `index.html`
  - In the **Rooms** section (`<section id="rooms">`), edit:
    - Room names
    - Capacity text (e.g., “3–4 Guests”)
    - Price placeholders (`₹XXX`)

- ### Change Google Maps Link
  - Currently using:
    - `https://maps.app.goo.gl/ZUeQH2UTrQgcN4Rs6`
  - To replace with a proper embed:
    1. Open your place in Google Maps.
    2. Click **Share** → **Embed a map**.
    3. Copy the `<iframe ...>` code.
    4. Replace the `<iframe>` inside the **Location** section in `index.html`.

---

## Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Google Fonts** (Poppins)
- **WhatsApp Click-to-Chat API**
- **Google Maps URL / Embed**

---

## Notes

- No backend or database – this is a purely static site.
- Booking & enquiry are handled by **WhatsApp messages**, which you can answer manually.
- You can later connect this site to a real booking engine if needed.

---

## License

You can freely modify and use this project for your own hotel/guest house website.
