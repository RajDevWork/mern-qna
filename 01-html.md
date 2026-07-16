[⬅ Back to Index](./README.md)

## 🧱 HTML (1-50)

### Basics
1. HTML kya hai?

    Hindi Explanation
    HTML ka full form HyperText Markup Language hai.
    Ye web pages ka basic structure banane ke liye use hota hai.

    Browser ko batata hai:

    heading kaha hogi
    paragraph kaha hoga
    image, button, form, table etc. kaha render honge

    HTML programming language nahi hai, ye ek markup language hai kyunki ye content ko structure karti hai using tags.

    Example:

    <h1>Hello</h1>
    <p>Welcome to website</p>
    Interview Me English Me Kya Bolna Hai

    HTML stands for HyperText Markup Language. It is the standard markup language used to create and structure web pages. HTML defines elements like headings, paragraphs, images, forms, tables, and links using tags. It is not a programming language; it is a markup language used to structure content for browsers.


2. HTML5 kya hai?

    Hindi Explanation
    HTML5 HTML ka latest version hai.

    Isme bahut naye features aaye:

    Semantic tags
    Audio and video support
    Canvas
    Local Storage
    Better form validation
    Geolocation APIs

    Pehle audio/video play karne ke liye plugins lagte the jaise Flash, but HTML5 me direct support milta hai.

    Semantic tags jaise:

    <header>
    <footer>
    <article>
    <section>
    <nav>

    Ye SEO aur readability improve karte hain.

    `Interview Answer `(English)

    HTML5 is the latest version of HTML that provides new features and improved support for modern web applications.

    It introduced semantic elements like <header>, <section>, and <footer> for better readability and SEO.

    HTML5 also supports multimedia elements such as <audio> and <video> without requiring external plugins.
    Additionally, it provides APIs like Local Storage, Geolocation, Canvas, and improved form handling.


3. Doctype kya hota hai?

    Hindi Explanation
    DOCTYPE browser ko batata hai ki document kaunsa HTML version use kar raha hai.

    Ye file ke sabse top me likha jata hai.

    Example:

    <!DOCTYPE html>

    HTML5 me sirf itna hi likhna hota hai.

    Agar DOCTYPE nahi lagate to browser quirks mode me chala jata hai jahan rendering inconsistent ho sakti hai.

    DOCTYPE khud HTML tag nahi hai.

    `Interview Answer `(English)

    The DOCTYPE declaration tells the browser which version of HTML the document is using.

    In HTML5, the declaration is:

    <!DOCTYPE html>

    It helps the browser render the page in standards mode instead of quirks mode, ensuring consistent behavior across browsers.
    DOCTYPE is not an HTML tag; it is an instruction to the browser.

4. Meta tags kya hote hain?

    Hindi Explanation
    Meta tags webpage ke baare me metadata provide karte hain.

    Ye <head> section ke andar likhe jate hain aur directly webpage par visible nahi hote.

    Meta tags use hote hain:

    SEO ke liye
    Character encoding define karne ke liye
    Responsive design ke liye
    Description dene ke liye

    Example:

    <meta charset="UTF-8">
    <meta name="description" content="HTML Interview Notes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    `Interview Answer `(English)

    Meta tags provide metadata about the HTML document.

    They are placed inside the <head> section and are not directly visible on the webpage.

    Meta tags are commonly used for:

    SEO
    Character encoding
    Responsive design
    Page descriptions
    Browser compatibility

    Example:
    <meta charset="UTF-8">


5. Charset kya hai?

    Hindi Explanation
    Charset define karta hai ki browser text characters ko kaise interpret karega.

    Mostly UTF-8 use hota hai because ye almost sabhi languages aur special characters support karta hai.

    Example:

    <meta charset="UTF-8">

    Agar charset define nahi karenge to kuch characters incorrectly display ho sakte hain.

    `Interview Answer `(English)

    Charset defines the character encoding used in the HTML document.

    The most commonly used charset is UTF-8 because it supports almost all characters and languages.

    Example:

    <meta charset="UTF-8">
    It ensures that text and special characters are displayed correctly in the browser.


6. `<html>`, `<head>`, `<body>` ka role?

`Hinglish Explanation:`

`<html>` poore HTML document ka root element hai. `<head>` metadata, CSS aur scripts rakhta hai, jabki `<body>` user ko visible content show karta hai.

`Interview Answer:`

`<html>` is the root element, `<head>` contains metadata and resources, and `<body>` contains the visible content of the webpage.

Example:

```html
<html>
  <head></head>
  <body>Hello</body>
</html>
```

---

7. `<title>` vs `<h1>` difference?

`Hinglish Explanation:`

`<title>` browser tab aur SEO ke liye use hota hai, jabki `<h1>` page ka main visible heading hota hai.

`Interview Answer:`

`<title>` defines the page title shown in browser tabs and search engines, while `<h1>` is the main visible heading of the page.

Example:

```html
<title>Home Page</title>
<h1>Welcome</h1>
```

---

8. `<div>` vs `<span>`?

`Hinglish Explanation:`

`<div>` block-level container hai aur `<span>` inline container hai. Dono non-semantic elements hain.

`Interview Answer:`

`<div>` is a block-level container, whereas `<span>` is an inline container used for styling or grouping content.

Example:

```html
<div>Block</div>
<span>Inline</span>
```

---

9. # new css animaions aya hai na vo bata dena

`Hinglish Explanation:`

## Kya hain?

  Traditional CSS animations mostly time-based hoti thi.

  Example:

  ```css
  animation: slideIn 2s ease;
  ```

  Yaha animation time ke according chalti hai.

  Modern CSS me naye features aaye hain jo animations ko scroll, view visibility aur user interaction ke saath connect karte hain.

  Important features:

  - Scroll-driven Animations
  - View Timelines
  - animation-timeline
  - animation-range
  - @starting-style
  - View Transitions API (browser feature, CSS integration ke saath)

## Kaun se problem par based hain?

  Pehle scroll-based animations ke liye JavaScript use karna padta tha.

  Example:

  ```javascript
  window.addEventListener("scroll", () => {
    // calculate position
    // trigger animation
  });
  ```

  Problems:

  - Performance overhead
  - Scroll jank
  - Complex implementation

  New CSS animation features browser level par optimized solution provide karte hain.

## Kaise work karta hain?

  **Scroll Driven Animations**

  Animation scroll position ke basis par chalti hai.

  ```css
  .progress-bar {
    animation: grow linear;
    animation-timeline: scroll();
  }
  ```

  Flow:

  ```text
  User Scroll
       ↓
  Timeline Progress
       ↓
  Animation Progress
  ```

  **View Timeline**

  Element viewport me enter ya exit hone par animation control kar sakta hai.

  ```css
  .card {
    animation: fade-in linear;
    animation-timeline: view();
  }
  ```

  Example:

  ```text
  Element enters viewport
           ↓
       Animation Start
  ```

  **animation-range**

  Define karta hai animation kis range me chale.

  ```css
  .card {
    animation-range: entry 0% cover 50%;
  }
  ```

  **@starting-style**

  Entry animations ko smooth banata hai.

  ```css
  @starting-style {
    .modal {
      opacity: 0;
    }
  }
  ```

  Browser initial state aur final state ko smoothly animate kar sakta hai.

## Real world Projects me kaise implement hota hain?

  Modern landing pages aur SaaS dashboards me:

  - Scroll progress bars
  - Fade-in sections
  - Reveal animations
  - Timeline effects
  - Product showcase animations

  Example:

  ```css
  .feature-card {
    animation: fade-in linear;
    animation-timeline: view();
  }
  ```

  Isse card automatically animate hoga jab viewport me visible hoga.

  JavaScript scroll listeners ki zarurat nahi padegi.

  Performance bhi better hoti hai kyunki browser animation lifecycle ko optimize kar sakta hai.

`Interview Answer:`

Recent CSS animation enhancements include Scroll-Driven Animations, View Timelines, animation-timeline, animation-range, and @starting-style. These features allow animations to be driven by scroll position or element visibility instead of relying solely on time-based keyframes.

Previously, developers often used JavaScript scroll listeners to implement such effects, which could introduce performance issues. Modern CSS provides native browser-optimized solutions that improve performance and simplify implementation.

These features are increasingly used in modern web applications for scroll-based effects, viewport-triggered animations, progress indicators, and interactive user experiences.

Example:

```css
.progress-bar {
  animation: grow linear;
  animation-timeline: scroll();
}

.feature-card {
  animation: fade-in linear;
  animation-timeline: view();
}
```

---



9. # physical aur logical pixel?:

`Hinglish Explanation:`

## Kya hain?

  Screen par jo actual hardware dots hote hain unhe **Physical Pixels** kehte hain.

  Aur jo pixels browser ya operating system layout calculate karne ke liye use karta hai unhe **Logical Pixels (CSS Pixels)** kehte hain.

  Simple words me:

  ```text
  Physical Pixel
      ↓
  Real Hardware Pixel

  Logical Pixel
      ↓
  Virtual/CSS Pixel
  ```

  Modern devices me ek logical pixel ko display karne ke liye multiple physical pixels use kiye ja sakte hain.

## Kaun se problem par based hain?

  Agar har device directly physical pixels use karti to same website har screen par alag size ki dikhti.

  Example:

  ```text
  Device A
  1920 × 1080

  Device B
  3840 × 2160 (4K)
  ```

  Agar button width:

  ```css
  width: 100px;
  ```

  ko direct physical pixels mana jaye to 4K screen par button bahut chhota dikhega.

  Is problem ko solve karne ke liye browsers logical pixels use karte hain.

  Example:

  ```css
  width: 100px;
  ```

  Har device par approximately same visual size maintain karega.

## Kaise work karta hain?

  Browser ek mapping maintain karta hai:

  ```text
  Logical Pixel
        ↓
  Multiple Physical Pixels
  ```

  Is mapping ko Device Pixel Ratio (DPR) define karta hai.

  Example:

  ```text
  DPR = 1

  1 Logical Pixel
      ↓
  1 Physical Pixel
  ```

  Retina Display:

  ```text
  DPR = 2

  1 Logical Pixel
      ↓
  2 × 2 Physical Pixels
      ↓
  4 Physical Pixels
  ```

  Example:

  ```javascript
  window.devicePixelRatio
  ```

  Output:

  ```text
  1
  2
  3
  ```

  depending on device.

  Example:

  ```css
  width: 100px;
  height: 100px;
  ```

  DPR = 2 device:

  ```text
  CSS Width = 100px

  Actual Physical Width
       ↓
  200 Physical Pixels
  ```

## Real world Projects me kaise implement hota hain?

  Responsive applications aur image optimization me ye concept bahut important hota hai.

  Example:

  Agar image:

  ```text
  100 × 100 CSS Pixels
  ```

  display karni hai.

  Retina device:

  ```text
  DPR = 2
  ```

  To ideal image:

  ```text
  200 × 200 Physical Pixels
  ```

  honi chahiye.

  Isliye:

  ```html
  <img
    src="image-1x.png"
    srcset="
      image-2x.png 2x,
      image-3x.png 3x
    "
  />
  ```

  use kiya jata hai.

  Canvas development me bhi scaling required hoti hai.

  Example:

  ```javascript
  canvas.width =
    width * window.devicePixelRatio;
  ```

  Warna graphics blurry dikh sakte hain.

  Large-scale applications me:

  - Responsive Design
  - Retina Images
  - Canvas Rendering
  - Mobile UI Development

  sab jagah logical aur physical pixels ka understanding important hota hai.

`Interview Answer:`

Physical Pixels are the actual hardware pixels present on a display, while Logical Pixels (or CSS Pixels) are virtual units used by browsers and operating systems for layout and rendering.

Modern devices often map one logical pixel to multiple physical pixels using a Device Pixel Ratio (DPR). This abstraction ensures that UI elements maintain a consistent visual size across devices with different screen densities.

For example, on a device with a DPR of 2, one CSS pixel is rendered using a 2×2 grid of physical pixels. This allows high-density displays such as Retina screens to render sharper text and images without affecting layout dimensions.

Example:

```javascript
console.log(window.devicePixelRatio);
```

Output:

```text
1   // Standard Display
2   // Retina Display
3   // High Density Mobile Display
```

---


9. Block vs inline elements?

`Hinglish Explanation:`

Block elements nayi line se start hote hain aur poori width lete hain. Inline elements content jitni hi space lete hain.

`Interview Answer:`

Block elements occupy the full available width, while inline elements only take up the space required by their content.

Example:

```html
<div>Block</div>
<span>Inline</span>
```

---

10. Inline-block kya hai?

`Hinglish Explanation:`

Inline-block element inline ki tarah behave karta hai lekin width aur height set karne ki permission deta hai.

`Interview Answer:**

`inline-block` allows elements to sit inline while supporting width, height, and margin properties.

Example:

```css
display: inline-block;
```

---

11. Semantic tags kya hain?

`Hinglish Explanation:`

Semantic tags content ka meaning batate hain, jaise `<header>`, `<footer>`, `<article>`. Ye readability aur SEO improve karte hain.

`Interview Answer:`

Semantic tags clearly describe the purpose of content, improving accessibility, maintainability, and SEO.

Example:

```html
<header></header>
<article></article>
```

---

12. `<header>` kya karta hai?

`Hinglish Explanation:`

`<header>` page ya section ka introductory content contain karta hai, jaise logo, heading aur navigation.

`Interview Answer:**

The `<header>` element represents introductory content or navigational aids for a page or section.

Example:

```html
<header>
  <h1>My Website</h1>
</header>
```

---

13. `<footer>`?

`Hinglish Explanation:`

`<footer>` page ya section ke end me additional information show karta hai jaise copyright aur contact details.

`Interview Answer:**

The `<footer>` element contains closing content such as copyright information, links, or contact details.

Example:

```html
<footer>
  © 2025
</footer>
```

---

14. `<section>` vs `<article>`?

`Hinglish Explanation:`

`<section>` related content group karta hai, jabki `<article>` independently reusable content represent karta hai.

`Interview Answer:**

`<section>` groups related content, whereas `<article>` represents standalone content that can exist independently.

Example:

```html
<section>
  <article>Blog</article>
</section>
```

---

15. `<nav>` ka use?

`Hinglish Explanation:`

`<nav>` navigation links ko group karne ke liye use hota hai.

`Interview Answer:**

The `<nav>` element defines a section containing navigation links.

Example:

```html
<nav>
  <a href="/">Home</a>
</nav>
```

---

16. `<aside>` kya hota hai?

`Hinglish Explanation:`

`<aside>` main content se related extra information show karta hai, jaise sidebar ya advertisements.

`Interview Answer:**

The `<aside>` element contains content indirectly related to the main content, such as sidebars or ads.

Example:

```html
<aside>
  Related Posts
</aside>
```

---

17. Semantic HTML ke benefits?

`Hinglish Explanation:`

Semantic HTML SEO improve karta hai, accessibility better banata hai aur code ko readable aur maintainable banata hai.

`Interview Answer:**

Semantic HTML improves accessibility, SEO, readability, and maintainability by providing meaningful structure.

Example:

```html
<article>
  Blog Post
</article>
```

---

18. `<form>` ka use?

`Hinglish Explanation:`

`<form>` user input collect karne aur server ko send karne ke liye use hota hai.

`Interview Answer:**

The `<form>` element is used to collect and submit user input.

Example:

```html
<form>
  <input />
</form>
```

---

19. GET vs POST?

`Hinglish Explanation:`

GET data fetch karta hai aur URL me data bhejta hai. POST data create ya submit karta hai aur request body me data bhejta hai.

`Interview Answer:**

GET retrieves data and sends parameters in the URL, while POST sends data in the request body for creation or updates.

Example:

```html
<form method="POST">
```

---

20. Input types?

`Hinglish Explanation:`

HTML me different input types available hain jaise text, email, password, number aur date.

`Interview Answer:**

Input types define the kind of data users can enter and provide built-in validation support.

Example:

```html
<input type="email" />
```

---

21. `name` vs `id`?

`Hinglish Explanation:`

`id` unique identifier hota hai, jabki `name` form submission ke time data key ke roop me use hota hai.

`Interview Answer:**

`id` uniquely identifies an element, while `name` is used to send form data to the server.

Example:

```html
<input
  id="email"
  name="email"
/>
```

---

22. `label` ka use?

`Hinglish Explanation:`

Label input ke description ke liye use hota hai aur accessibility improve karta hai.

`Interview Answer:**

The `<label>` element improves accessibility and allows users to focus inputs by clicking the label.

Example:

```html
<label for="email">
  Email
</label>
```

---

23. Required attribute?

`Hinglish Explanation:`

`required` field ko mandatory bana deta hai.

`Interview Answer:**

The `required` attribute prevents form submission until a value is entered.

Example:

```html
<input required />
```

---

24. Validation kaise hoti hai?

`Hinglish Explanation:`

Validation HTML attributes ya JavaScript ke through perform ki ja sakti hai.

`Interview Answer:**

Validation can be implemented using built-in HTML attributes or custom JavaScript logic.

Example:

```html
<input
  type="email"
  required
/>
```

---

25. Placeholder vs value?

`Hinglish Explanation:`

Placeholder hint show karta hai, jabki value actual input content hota hai.

`Interview Answer:**

`placeholder` provides a hint, while `value` represents the actual field content.

Example:

```html
<input
  placeholder="Enter Email"
  value="test@mail.com"
/>
```

---

26. Radio vs checkbox?

`Hinglish Explanation:`

Radio me ek option select hota hai, checkbox me multiple options select ho sakte hain.

`Interview Answer:**

Radio buttons allow a single selection, while checkboxes support multiple selections.

Example:

```html
<input type="radio" />
<input type="checkbox" />
```

---

27. Form submit ka flow?

`Hinglish Explanation:`

User submit karta hai → validation hoti hai → request server ko jati hai → response receive hota hai.

`Interview Answer:**

The form submission flow includes user input, validation, request submission, server processing, and response handling.

Example:

```html
<button type="submit">
  Submit
</button>
```

---

28. `<img>` tag?

`Hinglish Explanation:`

Image display karne ke liye use hota hai.

`Interview Answer:**

The `<img>` element embeds images into web pages.

Example:

```html
<img src="image.jpg" />
```

---

29. alt attribute kyun important hai?

`Hinglish Explanation:`

Alt text accessibility aur SEO ke liye important hai. Image load na ho to alt text display hota hai.

`Interview Answer:**

The `alt` attribute provides alternative text for accessibility and image fallback scenarios.

Example:

```html
<img
  src="logo.png"
  alt="Company Logo"
/>
```

---

30. `<audio>` aur `<video>`?

`Hinglish Explanation:`

Audio aur video content embed karne ke liye use hote hain.

`Interview Answer:**

The `<audio>` and `<video>` elements allow embedding media content directly in webpages.

Example:

```html
<video controls></video>
```

---

31. `<source>` tag?

`Hinglish Explanation:`

Multiple media sources define karne ke liye use hota hai.

`Interview Answer:**

The `<source>` tag specifies alternative media resources for audio, video, or picture elements.

Example:

```html
<source
  src="movie.mp4"
  type="video/mp4"
/>
```

---

32. Lazy loading images?

`Hinglish Explanation:`

Image tab load hoti hai jab viewport ke paas aati hai.

`Interview Answer:**

Lazy loading delays image loading until it is needed, improving page performance.

Example:

```html
<img
  src="image.jpg"
  loading="lazy"
/>
```

---

33. `<a>` tag ka use?

`Hinglish Explanation:`

Hyperlinks create karne ke liye use hota hai.

`Interview Answer:**

The `<a>` element creates hyperlinks between resources.

Example:

```html
<a href="/about">
  About
</a>
```

---

34. target="_blank"?

`Hinglish Explanation:`

Link ko new tab me open karta hai.

`Interview Answer:**

`target="_blank"` opens the linked document in a new browser tab or window.

Example:

```html
<a
  href="#"
  target="_blank"
>
```

---

35. Anchor vs button?

`Hinglish Explanation:`

Anchor navigation ke liye aur button actions perform karne ke liye use hota hai.

`Interview Answer:**

Anchors are for navigation, while buttons trigger actions or events.

Example:

```html
<a href="/">Home</a>

<button>Save</button>
```

---

36. Relative vs absolute URL?

`Hinglish Explanation:`

Relative URL current domain ke respect me hoti hai, absolute URL complete path contain karti hai.

`Interview Answer:**

Relative URLs are based on the current location, while absolute URLs contain the full resource path.

Example:

```html
/about

https://site.com/about
```

---

37. `<table>` structure?

`Hinglish Explanation:`

Table rows aur columns ke format me data display karti hai.

`Interview Answer:**

A table consists of rows, columns, and cells for displaying structured data.

Example:

```html
<table>
  <tr>
    <td>Data</td>
  </tr>
</table>
```

---

38. `<thead>`, `<tbody>`?

`Hinglish Explanation:`

Thead header rows ke liye aur tbody actual table data ke liye use hota hai.

`Interview Answer:**

`<thead>` contains header rows, while `<tbody>` contains the main table content.

Example:

```html
<thead></thead>
<tbody></tbody>
```

---

39. colspan vs rowspan?

`Hinglish Explanation:`

Colspan columns merge karta hai aur rowspan rows merge karta hai.

`Interview Answer:**

`colspan` merges columns, while `rowspan` merges rows.

Example:

```html
<td colspan="2">
```

---

40. Table vs div layout?

`Hinglish Explanation:`

Layout ke liye div aur CSS use karna best practice hai. Table sirf tabular data ke liye use honi chahiye.

`Interview Answer:**

Tables should be used for tabular data, while layout should be built using CSS and semantic elements.

Example:

```html
<div class="container">
```

---

41. LocalStorage kya hai?

`Hinglish Explanation:`

LocalStorage browser me data permanently store karta hai. Browser close ya system restart hone ke baad bhi data available rehta hai jab tak manually remove na kiya jaye.

`Interview Answer:`

LocalStorage is a browser storage mechanism that stores data with no expiration date. Data persists until explicitly removed.

Example:

```javascript
localStorage.setItem(
  "theme",
  "dark"
);

const theme =
  localStorage.getItem("theme");
```

---

42. SessionStorage kya hai?

`Hinglish Explanation:`

SessionStorage data ko current browser tab/session tak store karta hai. Tab close hote hi data automatically remove ho jata hai.

`Interview Answer:`

SessionStorage stores data for a single browser session and clears it when the tab or browser is closed.

Example:

```javascript
sessionStorage.setItem(
  "user",
  "Raj"
);
```

---

43. Cookies kya hain?

`Hinglish Explanation:`

Cookies small data files hoti hain jo browser me store hoti hain aur har request ke saath server ko bheji ja sakti hain. Authentication aur session management me commonly use hoti hain.

`Interview Answer:`

Cookies are small pieces of data stored in the browser and often used for authentication, sessions, and user preferences.

Example:

```javascript
document.cookie =
  "username=Raj";
```

---

44. Web storage difference?

`Hinglish Explanation:`

LocalStorage permanently data store karta hai, SessionStorage sirf current session ke liye. Dono browser storage APIs hain aur server ko automatically data send nahi karte.

`Interview Answer:`

LocalStorage persists data indefinitely, while SessionStorage stores data only for the current session. Neither is automatically sent to the server.

Example:

```javascript
localStorage.setItem("theme", "dark");

sessionStorage.setItem("cart", "1");
```

---

45. iframe kya hai?

`Hinglish Explanation:`

`iframe` ek webpage ke andar dusra webpage embed karne ke liye use hota hai. YouTube videos aur external content embed karne me commonly use hota hai.

`Interview Answer:`

An iframe embeds another HTML document within the current webpage.

Example:

```html
<iframe
  src="https://example.com"
></iframe>
```

---

46. data-* attributes?

`Hinglish Explanation:`

`data-*` custom attributes hote hain jo HTML elements me extra information store karne ke liye use kiye jate hain.

`Interview Answer:`

Data attributes allow storing custom information directly on HTML elements without affecting standard HTML behavior.

Example:

```html
<div data-user-id="101">
</div>
```

```javascript
element.dataset.userId;
```

---

47. ARIA roles kya hain?

`Hinglish Explanation:`

ARIA (Accessible Rich Internet Applications) attributes screen readers ko elements ka purpose samjhane me help karte hain.

`Interview Answer:`

ARIA roles improve accessibility by providing semantic information to assistive technologies.

Example:

```html
<button
  aria-label="Close"
>
  X
</button>
```

---

48. Accessibility kya hai?

`Hinglish Explanation:`

Accessibility ka goal website ko sab users ke liye usable banana hai, including visually impaired aur disabled users.

`Interview Answer:`

Accessibility ensures web applications are usable by people with disabilities through semantic HTML, ARIA, and keyboard support.

Example:

```html
<img
  src="logo.png"
  alt="Company Logo"
/>
```

---

49. SEO basics HTML mein?

`Hinglish Explanation:`

SEO improve karne ke liye proper headings, semantic tags, meta tags, title aur alt attributes use karne chahiye.

`Interview Answer:`

HTML SEO focuses on proper document structure, semantic markup, metadata, headings, and image alt text.

Example:

```html
<title>
  Learn HTML
</title>

<meta
  name="description"
  content="HTML Tutorial"
/>
```

---

50. HTML best practices?

`Hinglish Explanation:`

Semantic tags use karo, accessibility maintain karo, meaningful names rakho aur unnecessary nesting avoid karo. Clean aur valid HTML likhna important hai.

`Interview Answer:`

HTML best practices include semantic markup, accessibility compliance, proper document structure, and maintainable code organization.

Example:

```html
<header></header>

<main></main>

<footer></footer>
```



---

