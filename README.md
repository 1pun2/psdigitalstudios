# PS Digital Studios website

A simple website (HTML, CSS, JavaScript). No server, no build step, no cost.

## 1. Put it online with GitHub Pages (free)

1. Create a free account at github.com and click **New repository**. Name it anything (for example `psdigitalstudios`). Set it to **Public**.
2. Click **uploading an existing file** and drag in **everything inside this folder** (all the `.html` files, the `assets` folder, and `.nojekyll`). Click **Commit changes**.
3. Go to the repository **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. Wait 1 to 2 minutes. Your site will be live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`. Share that link with clients.

Tip: if you name the repository `YOUR-USERNAME.github.io`, the link becomes just `https://YOUR-USERNAME.github.io/`.

## 2. Change anything yourself

Everything you would want to change is in **`assets/js/data.js`**. On GitHub, open the file, click the pencil icon, edit, and click **Commit changes**. The live site updates in about a minute.

You can change: business name and tagline, WhatsApp number, Instagram link, homepage text, services, portfolio projects, reviews, About page text, the "How we work" steps, and the chat assistant's answers.

### Add a website you made for a client (portfolio)

In `data.js`, find `projects: [`. Copy one whole `{ ... },` block, paste it after the last one, and change the words:

```js
{
  name: "Sharma Sweets",
  category: "Restaurant & Café",
  headline: "Fresh Sweets Daily",
  button: "Order Now",
  description: "Sweet shop website with menu and WhatsApp orders.",
  url: "https://sharmasweets.example.com",   // the live link of that website
  image: "assets/img/portfolio/sharma-sweets.jpg",  // optional real screenshot
  theme: { bg: "#3b1d0f", fg: "#ffffff", accent: "#f5b301", onAccent: "#3b1d0f" }
},
```

- **With a screenshot:** upload the picture into `assets/img/portfolio/` and put its path in `image`.
- **Without a screenshot:** leave `image: ""` and the site draws a preview from `headline`, `button` and the `theme` colours.
- The Portfolio page filter buttons are created automatically from the `category` values.
- The 5 demo sites that came with the template have no live links yet (`url: ""`). Add the links when your demos are online, or replace them with real client work.

### Change your details

Search for `contact:` in `data.js`. Change `whatsappNumber` (country code plus number, no `+`), `instagramUrl`, and optionally `email`.

## 3. Reviews

Anyone can send a review from the **Reviews** page whenever they want. Because the site has no server, reviews do not appear on the site by themselves. This is on purpose: you approve each one first, so nobody can post spam on your business website.

**Option A: reviews arrive in your email (recommended, free)**
1. Sign up at formspree.io and create a new form. Copy its link (looks like `https://formspree.io/f/abcdwxyz`).
2. In `data.js`, paste it into `reviews: { formEndpoint: "..." }`.
3. Every review a client submits now lands in your inbox.

**Option B: no signup.** Leave `formEndpoint` empty. When a client submits, WhatsApp opens with the review already typed, and they press send to you.

**Publishing a review on the site:** copy it into `reviews.items` in `data.js`:

```js
{ name: "Client name", business: "Their business", rating: 5, text: "Their review.", date: "September 2026" },
```

Only publish real reviews from real clients.

## 4. Chat assistant

The assistant answers visitors using the question and answer list in `data.js` under `chatbot.answers`. It does not use an outside AI service, so it costs nothing and needs no keys. To teach it something new, copy an answer block, add the words a visitor might type to `keywords`, and write the `reply`. Check the current replies (pricing, timing, domain and hosting, location) and edit them so they say exactly what you offer.

## 5. Your own domain (optional, later)

In **Settings → Pages → Custom domain** you can connect a domain such as `psdigitalstudios.in` after buying it from a domain seller.

## Files

- `index.html`, `services.html`, `portfolio.html`, `reviews.html`, `about.html`, `contact.html`, `chat.html`, `404.html`: the pages
- `assets/js/data.js`: **your content (edit this)**
- `assets/js/app.js`: the site's behaviour
- `assets/css/style.css`: the design
- `assets/img/`: logo files (`logo.svg` for dark backgrounds, `logo-on-light.svg` for light ones), favicon, and a `portfolio` folder for screenshots
