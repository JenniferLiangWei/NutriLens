# NutriLens — AI Nutrition Tracker
## Powered by Google Gemini (Free API)

### Files in this folder
- `index.html` — the full app
- `manifest.json` — PWA manifest (enables mobile install)
- `sw.js` — service worker (offline support)
- `icon-192.svg` / `icon-512.svg` — app icons

---

## Deploy in 2 minutes (Netlify — free)

1. Go to **https://netlify.com** → sign up free
2. Drag the entire `nutrilens_gemini` folder onto the Netlify dashboard
3. Your app is live at a URL like `nutrilens-abc123.netlify.app`
4. Optional: set a custom domain under Site Settings

---

## Deploy with Vercel (free)

1. Go to **https://vercel.com** → sign up free
2. Click "Add New Project" → "Deploy without Git"
3. Upload this folder
4. Done — live in 30 seconds

---

## How users get started

1. Open the app URL in any browser
2. They visit **https://aistudio.google.com/apikey** to get a free Gemini API key (takes 2 min)
3. Paste the key into the app setup screen
4. The key is stored only on their device — you never see it

---

## Install on phone (PWA)

**iPhone / Safari:**
- Open the app URL in Safari
- Tap the Share button → "Add to Home Screen"
- Done — it appears as an app icon

**Android / Chrome:**
- Open the app URL in Chrome
- Tap the install banner that appears, or menu → "Add to Home Screen"

---

## API costs for users

Google Gemini free tier = **1,500 requests/day** at no cost.
Each food analysis = 1 request.
Most users will never exceed the free limit.

---

## Customise

- Change app name: edit `manifest.json` and the header in `index.html`
- Change colors: edit CSS variables at the top of `index.html`
- Add your own branding: replace the logo text in the header
