# 🚀 Complete Frontend & Backend Interview Preparation Guide

## 📚 Table of Contents

1. [HTML (1-50)](#-html-1-50)
2. [CSS (51-100)](#-css-51-100)
3. [Browser Working & Rendering (1-40)](#-browser-working--rendering-1-40)
4. [Frontend Security (41-90)](#-frontend-security-41-90)
5. [Performance Optimization (91-120)](#-performance-optimization-91-120)
6. [JavaScript (1-120)](#-javascript-1-120)
7. [React (121-220)](#-react-121-220)
8. [Node + Express (221-310)](#-node--express-221-310)
9. [MongoDB (311-360)](#-mongodb-311-360)
10. [System Design & DevOps (361-500)](#-system-design--devops-361-500)
11. [Real-World Experience Questions (401-450)](#-real-world-experience-questions-401-450)
12. [Scenario-Based Questions (451-500)](#-scenario-based-questions-451-500)
13. [Tricky Frontend Questions (Top 30)](#-tricky-frontend-questions-top-30)
14. [Database (Top 25)](#-database-top-25)
15. [PHP + Laravel (100 Questions)](#-php--laravel-top-100-questions)

---

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

## 🎨 CSS (51-100)

51. CSS kya hai?

`Hinglish Explanation:`

CSS (Cascading Style Sheets) web pages ko style karne ke liye use hoti hai. Isse colors, layouts, spacing, fonts aur animations control kiye ja sakte hain.

`Interview Answer:`

CSS is a stylesheet language used to control the presentation, layout, and appearance of HTML elements on a webpage.

Example:

```css
h1 {
  color: blue;
}
```

---

52. CSS types?

`Hinglish Explanation:`

CSS apply karne ke 3 tareeke hain: Inline CSS, Internal CSS aur External CSS. Production projects me mostly External CSS use hoti hai.

`Interview Answer:`

The three types of CSS are Inline CSS, Internal CSS, and External CSS. External CSS is preferred for maintainability.

Example:

```html
<h1 style="color:red">
  Hello
</h1>
```

---

53. Specificity kya hai?

`Hinglish Explanation:`

Specificity decide karti hai ki multiple CSS rules me se kaunsa rule apply hoga. ID selector ki priority class aur element selectors se zyada hoti hai.

`Interview Answer:`

Specificity is the priority system CSS uses to determine which rule should be applied when multiple rules target the same element.

Example:

```css
#title {
  color: red;
}
```

---

54. !important kya karta hai?

`Hinglish Explanation:`

`!important` CSS rule ki priority bahut high kar deta hai aur normal specificity rules ko override kar deta hai.

`Interview Answer:`

`!important` forces a CSS declaration to take precedence over other conflicting declarations.

Example:

```css
p {
  color: red !important;
}
```

---

55. Cascade kya hai?

`Hinglish Explanation:`

Cascade CSS ka rule system hai jo decide karta hai ki final style kaunsi apply hogi based on origin, specificity aur order.

`Interview Answer:`

The Cascade is the process CSS uses to resolve conflicts between multiple style rules.

Example:

```css
p {
  color: blue;
}

p {
  color: red;
}
```

---

56. Class vs ID selector?

`Hinglish Explanation:`

Class multiple elements par use ho sakti hai, jabki ID ek page me unique honi chahiye.

`Interview Answer:`

Classes are reusable across multiple elements, whereas IDs uniquely identify a single element.

Example:

```css
.card {}

#header {}
```

---

57. Attribute selector?

`Hinglish Explanation:`

Attribute selectors HTML attributes ke basis par elements select karte hain.

`Interview Answer:`

Attribute selectors target elements based on the presence or value of specific attributes.

Example:

```css
input[type="text"] {
  border: 1px solid;
}
```

---

58. Pseudo-classes? (`:hover`)

`Hinglish Explanation:`

Pseudo-classes element ke special states ko target karti hain jaise hover, focus ya visited.

`Interview Answer:`

Pseudo-classes define styles for specific element states without adding extra classes.

Example:

```css
button:hover {
  background: blue;
}
```

---

59. Pseudo-elements? (`::before`)

`Hinglish Explanation:`

Pseudo-elements element ke specific parts ko style karne ya virtual content add karne ke liye use hote hain.

`Interview Answer:`

Pseudo-elements target specific parts of an element or insert generated content.

Example:

```css
p::before {
  content: "★";
}
```

---

60. Combinators kya hain?

`Hinglish Explanation:`

Combinators elements ke relationships define karte hain jaise parent-child ya sibling relationships.

`Interview Answer:`

Combinators specify relationships between selectors, such as descendants, children, or siblings.

Example:

```css
div > p {
  color: red;
}
```

---

61. Box model kya hai?

`Hinglish Explanation:`

Har HTML element ek box ki tarah treat hota hai jisme Content, Padding, Border aur Margin hote hain.

`Interview Answer:`

The CSS Box Model consists of content, padding, border, and margin, which together determine an element's size.

Example:

```css
.box {
  padding: 20px;
  border: 1px solid;
}
```

---

62. margin vs padding?

`Hinglish Explanation:`

Margin element ke bahar spacing create karta hai, jabki Padding content aur border ke beech spacing create karta hai.

`Interview Answer:`

Margin creates space outside an element, while padding creates space inside the element around its content.

Example:

```css
div {
  margin: 20px;
  padding: 20px;
}
```

---

63. border kya hai?

`Hinglish Explanation:`

Border content aur padding ke around visible boundary create karta hai.

`Interview Answer:`

A border is the visible line surrounding an element's padding and content area.

Example:

```css
div {
  border: 2px solid black;
}
```

---

64. box-sizing kya hai?

`Hinglish Explanation:`

`box-sizing` decide karta hai width aur height calculate karte waqt padding aur border include honge ya nahi.

`Interview Answer:`

The `box-sizing` property controls how element dimensions are calculated.

Example:

```css
box-sizing: border-box;
```

---

65. content-box vs border-box?

`Hinglish Explanation:`

`content-box` me width sirf content area ko represent karti hai. `border-box` me width me padding aur border bhi include hote hain.

`Interview Answer:`

`content-box` excludes padding and border from width calculations, while `border-box` includes them.

Example:

```css
box-sizing: border-box;
```

---

66. display property kya hai?

`Hinglish Explanation:`

Display property define karti hai ki element page par kaise behave karega.

`Interview Answer:`

The `display` property determines how an element is rendered and participates in layout.

Example:

```css
display: flex;
```

---

67. block vs inline vs inline-block?

`Hinglish Explanation:`

Block poori width leta hai, inline content jitni width leta hai aur inline-block inline rehta hai lekin width-height support karta hai.

`Interview Answer:`

Block elements occupy full width, inline elements occupy only content width, and inline-block combines features of both.

Example:

```css
display: block;
display: inline;
display: inline-block;
```

---

68. display: none vs visibility: hidden?

`Hinglish Explanation:`

`display:none` element ko layout se completely remove kar deta hai. `visibility:hidden` element ko invisible karta hai lekin space reserve rakhta hai.

`Interview Answer:`

`display:none` removes the element from the document flow, while `visibility:hidden` hides it but preserves its layout space.

Example:

```css
display: none;

visibility: hidden;
```

---

69. position property?

`Hinglish Explanation:`

Position property define karti hai ki element normal flow me ya custom coordinates par place hoga.

`Interview Answer:`

The `position` property controls how an element is positioned within the document layout.

Example:

```css
position: absolute;
```

---

70. static vs relative vs absolute vs fixed vs sticky?

`Hinglish Explanation:`

`static` default position hai. `relative` current position ke respect me move hota hai. `absolute` nearest positioned parent ke respect me place hota hai. `fixed` viewport ke respect me fix rehta hai aur `sticky` scroll ke saath switch karta hai.

`Interview Answer:`

These positioning modes determine how elements are placed and behave within the layout and viewport.

Example:

```css
position: fixed;

top: 0;
```

71. Flexbox kya hai?

`Hinglish Explanation:`

Flexbox ek one-dimensional layout system hai jo rows ya columns me items ko efficiently arrange aur align karne ke liye use hota hai.

`Interview Answer:`

Flexbox is a CSS layout model designed for aligning and distributing items efficiently in a row or column.

Example:

```css
.container {
  display: flex;
}
```

---

72. flex container vs item?

`Hinglish Explanation:`

Jis element par `display:flex` lagta hai wo Flex Container hota hai. Uske direct children Flex Items hote hain.

`Interview Answer:`

A Flex Container is the parent element with `display:flex`, and its direct children become Flex Items.

Example:

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

73. justify-content?

`Hinglish Explanation:`

`justify-content` main axis par items ki alignment control karta hai jaise start, center, end ya space-between.

`Interview Answer:`

`justify-content` aligns flex items along the main axis of the flex container.

Example:

```css
.container {
  justify-content: center;
}
```

---

74. align-items?

`Hinglish Explanation:`

`align-items` cross axis par items ko align karta hai. Ye vertical alignment ke liye bahut commonly use hota hai.

`Interview Answer:`

`align-items` controls the alignment of flex items along the cross axis.

Example:

```css
.container {
  align-items: center;
}
```

---

75. flex-wrap?

`Hinglish Explanation:`

Default me flex items ek hi line me rehte hain. `flex-wrap` items ko next line me move karne deta hai jab space kam ho.

`Interview Answer:`

`flex-wrap` determines whether flex items stay on one line or wrap onto multiple lines.

Example:

```css
.container {
  flex-wrap: wrap;
}
```

---

76. flex-grow/shrink/basis?

`Hinglish Explanation:`

`flex-grow` extra space distribute karta hai, `flex-shrink` items ko shrink karne deta hai aur `flex-basis` initial size define karta hai.

`Interview Answer:`

These properties control how flex items grow, shrink, and determine their initial size within a flex container.

Example:

```css
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 200px;
}
```

---

77. center align kaise karte ho?

`Hinglish Explanation:`

Flexbox me horizontal aur vertical dono alignment ke liye `justify-content:center` aur `align-items:center` use karte hain.

`Interview Answer:`

The most common way to center content is using Flexbox with both `justify-content:center` and `align-items:center`.

Example:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

78. CSS Grid kya hai?

`Hinglish Explanation:`

CSS Grid ek two-dimensional layout system hai jo rows aur columns dono ko manage kar sakta hai.

`Interview Answer:`

CSS Grid is a powerful layout system for creating complex two-dimensional layouts using rows and columns.

Example:

```css
.container {
  display: grid;
}
```

---

79. grid-template-columns?

`Hinglish Explanation:`

Ye grid ke columns ki width aur count define karta hai.

`Interview Answer:`

`grid-template-columns` specifies the number and size of columns in a grid layout.

Example:

```css
.container {
  grid-template-columns:
    1fr 1fr 1fr;
}
```

---

80. gap kya hai?

`Hinglish Explanation:`

`gap` grid ya flex items ke beech spacing provide karta hai bina margin use kiye.

`Interview Answer:`

The `gap` property defines spacing between grid or flex items.

Example:

```css
.container {
  gap: 20px;
}
```

---

81. flexbox vs grid difference?

`Hinglish Explanation:`

Flexbox one-dimensional layouts ke liye best hai, jabki Grid two-dimensional layouts ke liye better hai.

`Interview Answer:`

Flexbox is designed for one-dimensional layouts, whereas Grid is designed for two-dimensional layouts.

Example:

```css
/* Flex */
display: flex;

/* Grid */
display: grid;
```

---

82. Media queries kya hain?

`Hinglish Explanation:`

Media Queries screen size ya device characteristics ke basis par different styles apply karti hain.

`Interview Answer:`

Media Queries enable responsive designs by applying CSS rules based on device properties.

Example:

```css
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

---

83. Mobile-first approach?

`Hinglish Explanation:`

Mobile-first approach me pehle mobile styles likhe jate hain aur phir larger screens ke liye enhancements add kiye jate hain.

`Interview Answer:`

Mobile-first design starts with styles for small screens and progressively enhances them for larger devices.

Example:

```css
.card {
  width: 100%;
}

@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}
```

---

84. breakpoints kya hote hain?

`Hinglish Explanation:`

Breakpoints specific screen widths hote hain jahan layout ya styling change ki jati hai responsive design ke liye.

`Interview Answer:`

Breakpoints are predefined screen widths where CSS rules change to adapt layouts for different devices.

Example:

```css
@media (min-width: 768px) {
}

@media (min-width: 1024px) {
}
```

---

85. viewport kya hai?

`Hinglish Explanation:`

Viewport browser window ka visible area hota hai jahan webpage display hota hai. Responsive websites ke liye viewport meta tag important hai.

`Interview Answer:`

The viewport is the visible area of a webpage in the browser and is essential for responsive design.

Example:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
/>
```


86. rem vs em vs px?

`Hinglish Explanation:`

`px` fixed unit hai. `em` parent element ke font-size par depend karta hai aur `rem` root (`html`) font-size par depend karta hai.

`Interview Answer:`

`px` is an absolute unit, `em` is relative to the parent font size, and `rem` is relative to the root font size.

Example:

```css
font-size: 16px;
font-size: 1.2em;
font-size: 1rem;
```

---

87. Colors define kaise karte ho?

`Hinglish Explanation:`

CSS me colors naam, HEX, RGB, RGBA, HSL aur HSLA formats me define kiye ja sakte hain.

`Interview Answer:`

CSS supports multiple color formats including named colors, HEX, RGB, RGBA, HSL, and HSLA.

Example:

```css
color: red;

color: #ff0000;

color: rgb(255, 0, 0);
```

---

88. Background properties?

`Hinglish Explanation:`

Background properties se color, image, position, repeat aur size control ki ja sakti hai.

`Interview Answer:`

Background properties control the appearance of an element's background, including color, image, position, and size.

Example:

```css
background-color: #eee;
background-image: url(bg.jpg);
background-size: cover;
```

---

89. Font properties?

`Hinglish Explanation:`

Font properties text ka appearance control karti hain jaise font-family, size, weight aur style.

`Interview Answer:`

Font properties define typography such as font family, size, weight, style, and spacing.

Example:

```css
font-family: Arial;
font-size: 16px;
font-weight: bold;
```

---

90. Line-height kya hai?

`Hinglish Explanation:`

Line-height text lines ke beech vertical spacing define karta hai. Readability improve karne ke liye important hai.

`Interview Answer:`

`line-height` controls the vertical spacing between lines of text and improves readability.

Example:

```css
line-height: 1.6;
```

---

91. text-align vs vertical-align?

`Hinglish Explanation:`

`text-align` horizontal alignment control karta hai, jabki `vertical-align` inline ya table-cell elements ki vertical alignment control karta hai.

`Interview Answer:`

`text-align` aligns content horizontally, while `vertical-align` controls vertical positioning of inline-level elements.

Example:

```css
text-align: center;

vertical-align: middle;
```

---

92. Z-index kya hai?

`Hinglish Explanation:`

Z-index overlapping elements ki stacking order define karta hai. Higher z-index wala element upar dikhega.

`Interview Answer:`

The `z-index` property controls the stacking order of positioned elements along the z-axis.

Example:

```css
.modal {
  z-index: 999;
}
```

---

93. Stacking context kya hai?

`Hinglish Explanation:`

Stacking Context ek independent stacking environment hota hai jisme elements ka z-index calculate hota hai.

`Interview Answer:`

A stacking context is an isolated layer where z-index values are evaluated independently.

Example:

```css
.container {
  position: relative;
  z-index: 1;
}
```

---

94. Overflow kya hai?

`Hinglish Explanation:`

Overflow tab handle hota hai jab content container ke size se bada ho jaye.

`Interview Answer:`

The `overflow` property controls how content is handled when it exceeds an element's boundaries.

Example:

```css
overflow: auto;

overflow: hidden;
```

---

95. Opacity vs visibility?

`Hinglish Explanation:`

Opacity element ko transparent banata hai, jabki visibility element ko hide karta hai lekin layout space maintain rakhta hai.

`Interview Answer:`

`opacity` affects transparency, while `visibility` controls whether an element is visible without removing its layout space.

Example:

```css
opacity: 0;

visibility: hidden;
```

---

96. Transform kya hai?

`Hinglish Explanation:`

Transform element ko move, rotate, scale ya skew karne ke liye use hota hai bina layout affect kiye.

`Interview Answer:`

The `transform` property modifies an element's appearance through translation, rotation, scaling, or skewing.

Example:

```css
transform: rotate(45deg);
```

---

97. Transition kya hai?

`Hinglish Explanation:`

Transition CSS property changes ko smooth animation effect ke saath perform karti hai.

`Interview Answer:`

Transitions create smooth animations between property value changes over a specified duration.

Example:

```css
button {
  transition: all 0.3s ease;
}
```

---

98. Animation kya hai?

`Hinglish Explanation:`

Animation complex visual effects create karne ke liye use hoti hai aur keyframes ke through control ki jati hai.

`Interview Answer:`

CSS Animations allow elements to change styles over time using keyframes.

Example:

```css
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

99. CSS variables kya hain?

`Hinglish Explanation:`

CSS Variables reusable values store karne ke liye use hoti hain. Theme management aur maintainability me bahut useful hain.

`Interview Answer:`

CSS Variables are custom properties that store reusable values and improve maintainability.

Example:

```css
:root {
  --primary-color: blue;
}

button {
  color: var(--primary-color);
}
```

---

100. Preprocessors (SASS/LESS) kya hain?

`Hinglish Explanation:`

SASS aur LESS CSS preprocessors hain jo variables, nesting, mixins aur functions jaise advanced features provide karte hain.

`Interview Answer:`

CSS preprocessors extend CSS with additional features and compile into standard CSS for browsers.

Example:

```scss
$primary: blue;

button {
  color: $primary;
}
```


---

## 🌐 Browser Working & Rendering (1-40)

1. Browser kaise kaam karta hai?

`Hinglish Explanation:`

Browser server se HTML, CSS aur JavaScript download karta hai. Phir HTML parse karke DOM banata hai, CSS se CSSOM banata hai aur finally page render karta hai.

`Interview Answer:`

A browser fetches resources from the server, parses HTML and CSS, creates the DOM and CSSOM, builds the Render Tree, and renders pixels on the screen.

Example:

```text
Request
 ↓
HTML/CSS/JS Download
 ↓
DOM + CSSOM
 ↓
Render Tree
 ↓
Layout → Paint → Composite
```

---

2. Sabse pehle browser kya load karta hai?

`Hinglish Explanation:`

Browser sabse pehle HTML document request karta hai. Baad me HTML parse karte waqt CSS, JS aur images jaise resources discover karta hai.

`Interview Answer:`

The browser first requests and downloads the HTML document, then discovers and loads additional resources.

Example:

```text
Browser
 ↓
index.html
 ↓
style.css
app.js
images
```

---

3. HTML parsing kaise hoti hai?

`Hinglish Explanation:`

Browser HTML ko top-to-bottom read karta hai aur har tag ko parse karke DOM nodes create karta hai.

`Interview Answer:`

HTML parsing converts raw HTML markup into a structured DOM tree that JavaScript can interact with.

Example:

```html
<body>
  <h1>Hello</h1>
</body>
```

```text
Body
 ↓
H1
```

---

4. DOM kya hai?

`Hinglish Explanation:`

DOM (Document Object Model) webpage ka tree structure representation hai jise JavaScript dynamically modify kar sakta hai.

`Interview Answer:`

The DOM is a tree-like representation of HTML elements that allows scripts to access and manipulate content.

Example:

```javascript
document
  .querySelector("h1")
  .textContent = "Hi";
```

---

5. CSSOM kya hai?

`Hinglish Explanation:`

CSSOM (CSS Object Model) CSS rules ka tree structure hota hai jo browser styling calculate karne ke liye use karta hai.

`Interview Answer:`

The CSSOM is a tree representation of CSS rules used to calculate styles for elements.

Example:

```css
h1 {
  color: red;
}
```

---

6. Render tree kya hota hai?

`Hinglish Explanation:`

Render Tree DOM aur CSSOM ko combine karke banta hai. Isme sirf visible elements include hote hain.

`Interview Answer:`

The Render Tree contains visible DOM elements along with their computed styles and is used for rendering.

Example:

```text
DOM
 +
CSSOM
 ↓
Render Tree
```

---

7. DOM + CSSOM kaise combine hote hain?

`Hinglish Explanation:`

Browser DOM ke har visible node par CSS rules apply karta hai aur Render Tree generate karta hai.

`Interview Answer:`

The browser combines DOM nodes with computed styles from CSSOM to create the Render Tree.

Example:

```text
DOM Node
 +
Computed Style
 ↓
Render Node
```

---

8. Critical rendering path kya hai?

`Hinglish Explanation:`

Critical Rendering Path wo process hai jo browser follow karta hai HTML se pixels display karne tak.

`Interview Answer:`

The Critical Rendering Path is the sequence of steps required to convert HTML, CSS, and JavaScript into rendered pixels.

Example:

```text
HTML
 ↓
DOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
```

---

9. Layout (reflow) kya hota hai?

`Hinglish Explanation:`

Layout ya Reflow me browser elements ki exact position aur dimensions calculate karta hai.

`Interview Answer:`

Layout is the process of calculating the size and position of elements on the page.

Example:

```css
width: 200px;
```

---

10. Paint kya hota hai?

`Hinglish Explanation:`

Paint phase me browser pixels draw karta hai jaise colors, borders, shadows aur text.

`Interview Answer:`

Painting converts layout information into actual pixels displayed on the screen.

Example:

```css
background: blue;
```

---

11. Composite kya hota hai?

`Hinglish Explanation:`

Composite phase me browser different layers ko combine karke final screen output generate karta hai.

`Interview Answer:`

Compositing combines painted layers into the final image displayed to the user.

Example:

```text
Layer 1
Layer 2
 ↓
Final Screen
```

---

12. Reflow vs repaint difference?

`Hinglish Explanation:`

Reflow layout recalculate karta hai, jabki Repaint sirf visual appearance update karta hai bina layout change kiye.

`Interview Answer:`

Reflow recalculates layout and positions, whereas Repaint updates visual styles without affecting layout.

Example:

```css
width: 300px;   /* Reflow */

color: red;     /* Repaint */
```

---

13. Reflow expensive kyun hota hai?

`Hinglish Explanation:`

Reflow me browser ko multiple elements ke size aur position dobara calculate karne padte hain, jo performance impact kar sakta hai.

`Interview Answer:`

Reflow is expensive because it triggers layout recalculations that may affect many elements in the document.

Example:

```javascript
element.style.width =
  "500px";
```

---

14. Browser rendering ko kaise optimize karte ho?

`Hinglish Explanation:`

Unnecessary DOM updates avoid karo, CSS optimize karo, images compress karo aur code splitting use karo.

`Interview Answer:`

Rendering can be optimized by minimizing reflows, reducing DOM manipulations, compressing assets, and using lazy loading.

Example:

```javascript
documentFragment.append(
  element
);
```

---

15. CSS render blocking kyun hoti hai?

`Hinglish Explanation:`

Browser Render Tree banane se pehle CSS download aur parse karta hai. Isliye CSS render-blocking resource mani jati hai.

`Interview Answer:`

CSS blocks rendering because the browser must calculate styles before displaying content.

Example:

```html
<link
  rel="stylesheet"
  href="style.css"
/>
```

---

16. JavaScript parsing ko kyun block karta hai?

`Hinglish Explanation:`

Browser HTML parsing pause kar deta hai kyunki JavaScript DOM ko modify kar sakti hai.

`Interview Answer:`

JavaScript blocks HTML parsing because it can modify the DOM during execution.

Example:

```html
<script src="app.js"></script>
```

---

17. async vs defer scripts?

`Hinglish Explanation:`

`async` script download aur execute independently karta hai. `defer` script HTML parsing complete hone ke baad execute hota hai.

`Interview Answer:`

`async` executes as soon as it downloads, while `defer` waits until HTML parsing is complete.

Example:

```html
<script async src="app.js"></script>

<script defer src="app.js"></script>
```

---

18. Script loading ka order kya hota hai?

`Hinglish Explanation:`

Normal scripts sequentially load aur execute hoti hain. Defer scripts order maintain karti hain, async scripts order guarantee nahi karti.

`Interview Answer:`

Normal and deferred scripts preserve execution order, whereas async scripts execute whenever they finish downloading.

Example:

```html
<script defer src="a.js"></script>
<script defer src="b.js"></script>
```

---

19. Preload vs prefetch?

`Hinglish Explanation:`

Preload current page ke important resources ke liye use hota hai. Prefetch future navigation ke resources ko background me load karta hai.

`Interview Answer:`

Preload fetches critical resources for the current page, while Prefetch loads resources likely needed in the future.

Example:

```html
<link
  rel="preload"
  href="font.woff2"
/>
```

---

20. Lazy loading kya hai?

`Hinglish Explanation:`

Lazy Loading resources ko tab load karti hai jab unki zarurat hoti hai. Isse initial page load fast ho jata hai.

`Interview Answer:`

Lazy Loading delays loading of non-critical resources until they are required.

Example:

```html
<img
  src="image.jpg"
  loading="lazy"
/>
```

21. Browser caching kaise kaam karti hai?

`Hinglish Explanation:`

Browser downloaded resources (CSS, JS, Images) ko local cache me store karta hai. Next request par browser cache check karta hai aur agar resource valid ho to server se dobara download nahi karta.

`Interview Answer:`

Browser caching stores resources locally and reuses them for future requests, reducing network traffic and improving page load performance.

Example:

```text
Request
 ↓
Browser Cache
 ↓
Found? → Use Cache
Not Found → Fetch Server
```

---

22. Cache types kya hote hain?

`Hinglish Explanation:`

Browser me Memory Cache, Disk Cache, Service Worker Cache aur CDN Cache commonly use hote hain.

`Interview Answer:`

Common cache types include Memory Cache, Disk Cache, Service Worker Cache, and CDN Cache.

Example:

```text
Memory Cache
Disk Cache
Service Worker Cache
CDN Cache
```

---

23. Service worker kya karta hai?

`Hinglish Explanation:`

Service Worker background me run hota hai aur caching, offline support aur push notifications provide karta hai.

`Interview Answer:`

A Service Worker acts as a proxy between the browser and network, enabling caching, offline access, and background tasks.

Example:

```javascript
navigator.serviceWorker
  .register("/sw.js");
```

---

24. HTTP request lifecycle kya hota hai?

`Hinglish Explanation:`

User request karta hai → DNS lookup hota hai → TCP/HTTPS connection banti hai → server response bhejta hai → browser render karta hai.

`Interview Answer:`

The HTTP lifecycle includes DNS resolution, connection establishment, request transmission, server processing, response delivery, and rendering.

Example:

```text
Browser
 ↓
DNS
 ↓
TCP/HTTPS
 ↓
Server
 ↓
Response
```

---

25. DNS resolution kya hota hai?

`Hinglish Explanation:`

DNS domain name ko IP address me convert karta hai taaki browser server locate kar sake.

`Interview Answer:`

DNS Resolution translates a domain name into an IP address required to establish a connection with the server.

Example:

```text
google.com
 ↓
142.250.xx.xx
```

---

26. TCP handshake kya hota hai?

`Hinglish Explanation:`

TCP connection establish karne ke liye client aur server ke beech 3-step communication hota hai jise Three-Way Handshake kehte hain.

`Interview Answer:`

TCP uses a three-way handshake to establish a reliable connection between client and server.

Example:

```text
SYN
 ↓
SYN-ACK
 ↓
ACK
```

---

27. HTTPS connection kaise establish hoti hai?

`Hinglish Explanation:`

HTTPS TLS/SSL encryption use karta hai. Browser aur server certificate verify karke secure connection establish karte hain.

`Interview Answer:`

HTTPS establishes a secure encrypted connection using TLS/SSL certificates and a cryptographic handshake.

Example:

```text
Browser
 ↓
TLS Handshake
 ↓
Encrypted Connection
```

---

28. First Contentful Paint (FCP) kya hai?

`Hinglish Explanation:`

FCP measure karta hai ki user ko page ka pehla visible content kitni jaldi dikhai diya.

`Interview Answer:`

First Contentful Paint measures the time taken for the first piece of content to appear on the screen.

Example:

```text
Page Load
 ↓
Text/Image Appears
 = FCP
```

---

29. Largest Contentful Paint (LCP) kya hai?

`Hinglish Explanation:`

LCP page ke sabse bade visible element ke render hone ka time measure karta hai.

`Interview Answer:`

Largest Contentful Paint measures how quickly the main content of a page becomes visible.

Example:

```text
Hero Image Loaded
 ↓
LCP
```

---

30. Time to Interactive (TTI) kya hai?

`Hinglish Explanation:`

TTI batata hai ki page kab fully interactive hua aur user actions ka response dene laga.

`Interview Answer:`

Time to Interactive measures when a page becomes fully responsive to user interactions.

Example:

```text
Page Loaded
 ↓
JS Executed
 ↓
Interactive
```

---

31. Bundle size ka impact kya hai?

`Hinglish Explanation:`

Bada bundle download aur parse hone me zyada time leta hai, jiski wajah se page load slow ho sakta hai.

`Interview Answer:`

Large bundle sizes increase download, parsing, and execution time, negatively impacting performance.

Example:

```text
100KB Bundle
 ↓ Fast

5MB Bundle
 ↓ Slow
```

---

32. Tree shaking kya hai?

`Hinglish Explanation:`

Tree Shaking unused code ko final bundle se remove karta hai jisse application lightweight ban jati hai.

`Interview Answer:`

Tree Shaking eliminates unused exports from the final bundle, reducing bundle size.

Example:

```javascript
import { add } from "./utils";
```

---

33. Code splitting kya hai?

`Hinglish Explanation:`

Code Splitting bundle ko multiple chunks me divide karta hai jo demand par load hote hain.

`Interview Answer:`

Code Splitting breaks large bundles into smaller chunks that are loaded only when needed.

Example:

```javascript
import("./Dashboard");
```

---

34. Webpack kya karta hai?

`Hinglish Explanation:`

Webpack modules aur assets ko bundle, optimize aur transform karta hai deployment ke liye.

`Interview Answer:`

Webpack is a module bundler that processes, optimizes, and bundles application assets.

Example:

```javascript
module.exports = {
  entry: "./src/index.js"
};
```

---

35. DevTools ka use kaise karte ho?

`Hinglish Explanation:`

Chrome DevTools debugging, performance analysis, network monitoring aur DOM inspection ke liye use hota hai.

`Interview Answer:`

DevTools helps inspect elements, debug JavaScript, analyze performance, and monitor network requests.

Example:

```text
F12
 ↓
Elements
Network
Performance
```

---

36. Performance profiling kaise karte ho?

`Hinglish Explanation:`

Performance tab use karke slow rendering, long tasks aur bottlenecks identify kiye jate hain.

`Interview Answer:`

Performance profiling measures execution time and identifies rendering and scripting bottlenecks.

Example:

```text
DevTools
 ↓
Performance Tab
 ↓
Record
```

---

37. Memory profiling kaise karte ho?

`Hinglish Explanation:`

Memory tab se heap snapshots aur memory usage analyze karke memory leaks detect kiye jate hain.

`Interview Answer:`

Memory profiling helps identify memory leaks and analyze object allocation patterns.

Example:

```text
DevTools
 ↓
Memory Tab
 ↓
Heap Snapshot
```

---

38. Network tab kaise use karte ho?

`Hinglish Explanation:`

Network Tab requests, responses, timings aur resource sizes analyze karne ke liye use hota hai.

`Interview Answer:`

The Network Tab helps inspect HTTP requests, response times, payload sizes, and caching behavior.

Example:

```text
DevTools
 ↓
Network
 ↓
Request Details
```

---

39. Browser storage kaise kaam karta hai?

`Hinglish Explanation:`

Browser LocalStorage, SessionStorage, Cookies aur IndexedDB ke through client-side data store karta hai.

`Interview Answer:`

Browser storage mechanisms allow applications to store data locally for persistence and offline capabilities.

Example:

```javascript
localStorage.setItem(
  "theme",
  "dark"
);
```

---

40. IndexedDB kya hai?

`Hinglish Explanation:`

IndexedDB browser ka built-in NoSQL database hai jo large amount of structured data store kar sakta hai.

`Interview Answer:`

IndexedDB is a client-side NoSQL database used for storing large volumes of structured data offline.

Example:

```javascript
indexedDB.open(
  "MyDatabase"
);
```


---

## 🔐 Frontend Security (41-90)

41. Frontend security kya hoti hai?

`Hinglish Explanation:`

Frontend Security ka goal client-side application ko attacks se protect karna hai. Isme XSS, CSRF, data leakage aur insecure storage jaise threats ko prevent kiya jata hai.

`Interview Answer:`

Frontend security focuses on protecting client-side applications from attacks such as XSS, CSRF, data leaks, and insecure resource access.

Example:

```text
Input Validation
+
Secure Headers
+
HTTPS
```

---

42. XSS kya hota hai?

`Hinglish Explanation:`

XSS (Cross-Site Scripting) attack me attacker malicious JavaScript inject karta hai jo victim ke browser me execute ho jata hai.

`Interview Answer:`

XSS is a security vulnerability where attackers inject malicious scripts that execute in a user's browser.

Example:

```html
<script>
  alert("Hacked");
</script>
```

---

43. XSS ke types kya hain?

`Hinglish Explanation:`

XSS ke 3 major types hote hain: Stored XSS, Reflected XSS aur DOM-Based XSS.

`Interview Answer:`

The main types of XSS are Stored XSS, Reflected XSS, and DOM-Based XSS.

Example:

```text
Stored
Reflected
DOM-Based
```

---

44. Stored XSS kya hota hai?

`Hinglish Explanation:`

Stored XSS me malicious script database me save ho jati hai aur har user ko serve hoti hai jo affected page visit karta hai.

`Interview Answer:`

Stored XSS occurs when malicious code is permanently stored on the server and delivered to users.

Example:

```text
Comment Saved
 ↓
Script Stored
 ↓
Executed for Users
```

---

45. Reflected XSS kya hota hai?

`Hinglish Explanation:`

Reflected XSS me malicious code URL ya request ke through aata hai aur immediately response me reflect ho jata hai.

`Interview Answer:`

Reflected XSS occurs when malicious input is immediately returned in the server response without proper sanitization.

Example:

```text
URL
 ↓
Server Response
 ↓
Script Executes
```

---

46. DOM-based XSS kya hota hai?

`Hinglish Explanation:`

DOM-based XSS browser ke andar JavaScript ke through hota hai jab unsafe data directly DOM me inject ki jati hai.

`Interview Answer:`

DOM-Based XSS occurs when client-side JavaScript modifies the DOM using untrusted input.

Example:

```javascript
element.innerHTML =
  location.hash;
```

---

47. XSS ka real-world example kya hai?

`Hinglish Explanation:`

Agar comment box me malicious script save ho jaye aur baad me users ke browser me execute ho, to wo Stored XSS ka real example hai.

`Interview Answer:`

A common example is injecting a script into a comment field that executes whenever other users view the comment.

Example:

```html
<script>
  stealCookies();
</script>
```

---

48. XSS prevent kaise karte ho?

`Hinglish Explanation:`

Input sanitize karo, output escape karo, CSP use karo aur unsafe HTML rendering avoid karo.

`Interview Answer:`

XSS can be prevented through input sanitization, output encoding, Content Security Policy, and avoiding unsafe DOM manipulation.

Example:

```javascript
element.textContent =
  userInput;
```

---

49. Input sanitization kya hota hai?

`Hinglish Explanation:`

Input Sanitization malicious ya unwanted content ko remove ya clean karne ki process hai.

`Interview Answer:`

Input sanitization removes or filters potentially dangerous content before processing or storing it.

Example:

```javascript
DOMPurify.sanitize(
  userInput
);
```

---

50. Output escaping kya hota hai?

`Hinglish Explanation:`

Output Escaping special characters ko safe format me convert karta hai taaki browser unhe code ke roop me execute na kare.

`Interview Answer:`

Output escaping converts special characters into safe representations before rendering them.

Example:

```html
&lt;script&gt;
```

---

51. Content Security Policy kya hai?

`Hinglish Explanation:`

CSP browser ko batata hai ki scripts, styles aur resources kin trusted sources se load ho sakte hain.

`Interview Answer:`

Content Security Policy is a security mechanism that restricts which resources can be loaded and executed.

Example:

```http
Content-Security-Policy:
default-src 'self'
```

---

52. CSP kaise implement karte ho?

`Hinglish Explanation:`

CSP HTTP response headers ya meta tags ke through configure ki jati hai.

`Interview Answer:`

CSP is typically implemented using HTTP response headers that define trusted resource sources.

Example:

```http
Content-Security-Policy:
script-src 'self'
```

---

53. CSRF kya hota hai?

`Hinglish Explanation:`

CSRF (Cross-Site Request Forgery) attack me attacker authenticated user ki taraf se unauthorized requests perform karwata hai.

`Interview Answer:`

CSRF tricks authenticated users into performing unintended actions on a trusted website.

Example:

```text
Logged-in User
 ↓
Malicious Request
 ↓
Action Performed
```

---

54. CSRF attack kaise hota hai?

`Hinglish Explanation:`

User login hota hai aur attacker malicious page visit karwata hai jo hidden request send kar deta hai.

`Interview Answer:`

A CSRF attack exploits a user's active session to execute unauthorized actions without their consent.

Example:

```html
<img
  src="/transfer-money"
/>
```

---

55. CSRF prevent kaise karte ho?

`Hinglish Explanation:`

CSRF Tokens, SameSite cookies aur origin validation use karke CSRF attacks prevent kiye jate hain.

`Interview Answer:`

CSRF can be prevented using CSRF tokens, SameSite cookies, and request origin validation.

Example:

```javascript
csrfToken =
  "abc123";
```

---

56. CSRF token kya hota hai?

`Hinglish Explanation:`

CSRF Token ek unique random value hoti hai jo har request ke saath validate ki jati hai.

`Interview Answer:`

A CSRF token is a unique value used to verify that requests originate from trusted users.

Example:

```html
<input
  type="hidden"
  value="csrf-token"
/>
```

---

57. SameSite cookie kya hoti hai?

`Hinglish Explanation:`

SameSite cookie cross-site requests me cookie sharing ko control karti hai aur CSRF attacks reduce karti hai.

`Interview Answer:`

SameSite cookies restrict when cookies are sent with cross-site requests, helping prevent CSRF attacks.

Example:

```http
Set-Cookie:
session=123;
SameSite=Strict
```

---

58. Clickjacking kya hota hai?

`Hinglish Explanation:`

Clickjacking me attacker hidden iframe ya UI tricks use karke user ko unintended actions perform karwata hai.

`Interview Answer:`

Clickjacking tricks users into clicking hidden or disguised elements on a webpage.

Example:

```text
Invisible Button
 ↓
User Click
 ↓
Unauthorized Action
```

---

59. Clickjacking prevent kaise karte ho?

`Hinglish Explanation:`

X-Frame-Options aur CSP frame-ancestors directives use karke clickjacking attacks prevent kiye jate hain.

`Interview Answer:`

Clickjacking is prevented using X-Frame-Options and CSP frame restrictions.

Example:

```http
X-Frame-Options:
DENY
```

---

60. X-Frame-Options kya hai?

`Hinglish Explanation:`

Ye HTTP header decide karta hai ki webpage iframe ke andar load ho sakta hai ya nahi.

`Interview Answer:`

X-Frame-Options is a security header that protects websites from being embedded in frames.

Example:

```http
X-Frame-Options:
SAMEORIGIN
```

61. Cookies kya hoti hain?

`Hinglish Explanation:`

Cookies browser me store hone wale small data files hote hain. Ye authentication, session management aur user preferences store karne ke liye use kiye jate hain.

`Interview Answer:`

Cookies are small pieces of data stored in the browser and commonly used for session management, authentication, and personalization.

Example:

```javascript
document.cookie =
  "theme=dark";
```

---

62. HttpOnly cookie kya hoti hai?

`Hinglish Explanation:`

HttpOnly cookie JavaScript se access nahi ki ja sakti. Isse XSS attacks ke through cookie theft ka risk kam ho jata hai.

`Interview Answer:`

An HttpOnly cookie cannot be accessed by JavaScript, helping protect sensitive session data from XSS attacks.

Example:

```http
Set-Cookie:
session=abc123;
HttpOnly
```

---

63. Secure cookie kya hoti hai?

`Hinglish Explanation:`

Secure cookie sirf HTTPS connection ke through transmit hoti hai. HTTP requests ke saath ye send nahi hoti.

`Interview Answer:`

A Secure cookie is transmitted only over HTTPS connections, reducing the risk of interception.

Example:

```http
Set-Cookie:
session=abc123;
Secure
```

---

64. LocalStorage vs cookies security?

`Hinglish Explanation:`

LocalStorage JavaScript se directly accessible hota hai, isliye XSS attacks ka risk zyada hota hai. HttpOnly cookies sensitive tokens store karne ke liye safer option mani jati hain.

`Interview Answer:`

LocalStorage is vulnerable to XSS because JavaScript can access it, whereas HttpOnly cookies provide better protection for sensitive data.

Example:

```javascript
localStorage.setItem(
  "token",
  "abc"
);
```

---

65. JWT kya hota hai?

`Hinglish Explanation:`

JWT (JSON Web Token) ek compact token format hai jo user identity aur claims securely store karta hai.

`Interview Answer:`

JWT is a signed token format used to securely transmit authentication and authorization information.

Example:

```text
Header.Payload.Signature
```

---

66. JWT ko securely kaise store karte ho?

`Hinglish Explanation:`

Production applications me JWT ko HttpOnly Secure Cookies me store karna best practice mana jata hai.

`Interview Answer:`

JWTs should ideally be stored in HttpOnly Secure Cookies to reduce exposure to XSS attacks.

Example:

```http
Set-Cookie:
token=jwt-token;
HttpOnly;
Secure
```

---

67. Token expiration kya hota hai?

`Hinglish Explanation:`

Token expiration ek predefined expiry time hoti hai jiske baad token invalid ho jata hai aur dobara login ya refresh ki zarurat padti hai.

`Interview Answer:`

Token expiration limits the validity period of a token, reducing the impact of token theft.

Example:

```json
{
  "exp": 1750000000
}
```

---

68. Refresh token kya hota hai?

`Hinglish Explanation:`

Refresh Token long-lived token hota hai jo expired access token ko regenerate karne ke liye use hota hai.

`Interview Answer:`

A Refresh Token is used to obtain new access tokens without requiring the user to log in again.

Example:

```text
Access Token Expired
 ↓
Refresh Token
 ↓
New Access Token
```

---

69. Session fixation attack kya hai?

`Hinglish Explanation:`

Session Fixation me attacker victim ko predefined session ID use karne ke liye force karta hai aur baad me us session ka misuse karta hai.

`Interview Answer:`

Session Fixation is an attack where an attacker forces a user to use a known session identifier.

Example:

```text
Attacker Session ID
 ↓
Victim Login
 ↓
Session Hijack
```

---

70. Authentication vs authorization difference?

`Hinglish Explanation:`

Authentication verify karta hai ki user kaun hai, jabki Authorization decide karta hai ki user kya access kar sakta hai.

`Interview Answer:`

Authentication verifies identity, while Authorization determines permissions and access rights.

Example:

```text
Login
 ↓
Authentication

Admin Access
 ↓
Authorization
```

---

71. HTTPS kyun important hai?

`Hinglish Explanation:`

HTTPS client aur server ke beech data encrypt karta hai, jisse passwords aur sensitive information secure rehti hai.

`Interview Answer:`

HTTPS secures communication by encrypting data exchanged between clients and servers.

Example:

```text
HTTP  → Not Secure

HTTPS → Encrypted
```

---

72. SSL/TLS kya hota hai?

`Hinglish Explanation:`

TLS (aur purana SSL) encryption protocols hain jo secure communication establish karte hain.

`Interview Answer:`

SSL/TLS are cryptographic protocols that provide secure and encrypted communication over networks.

Example:

```text
Browser
 ↓
TLS Handshake
 ↓
Encrypted Connection
```

---

73. Man-in-the-middle attack kya hota hai?

`Hinglish Explanation:`

MITM attack me attacker client aur server ke beech communication intercept karta hai aur data dekh ya modify kar sakta hai.

`Interview Answer:`

A Man-in-the-Middle attack occurs when an attacker intercepts communication between two parties.

Example:

```text
Client
 ↓
Attacker
 ↓
Server
```

---

74. CORS kya hota hai?

`Hinglish Explanation:`

CORS (Cross-Origin Resource Sharing) browser security mechanism hai jo different origins ke beech requests ko control karta hai.

`Interview Answer:`

CORS is a browser security feature that controls cross-origin HTTP requests.

Example:

```http
Access-Control-Allow-Origin:
https://example.com
```

---

75. Same-origin policy kya hoti hai?

`Hinglish Explanation:`

Same-Origin Policy browser ka security rule hai jo ek origin ko dusre origin ke resources directly access karne se restrict karta hai.

`Interview Answer:`

The Same-Origin Policy prevents scripts from accessing resources from different origins unless explicitly allowed.

Example:

```text
app.com
 ≠
 api.other.com
```


76. CORS error kaise fix karte ho?

`Hinglish Explanation:`

CORS error frontend se fix nahi hota. Backend ko proper `Access-Control-Allow-Origin` aur related headers send karne hote hain.

`Interview Answer:`

CORS errors are resolved by configuring the server to allow requests from trusted origins using appropriate CORS headers.

Example:

```http
Access-Control-Allow-Origin:
https://myapp.com
```

---

77. Secure headers kaunse hote hain?

`Hinglish Explanation:`

Secure headers browser ko additional security rules enforce karne me help karte hain aur attacks jaise XSS, Clickjacking ko reduce karte hain.

`Interview Answer:`

Common security headers include CSP, HSTS, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy.

Example:

```http
Content-Security-Policy
X-Frame-Options
Strict-Transport-Security
```

---

78. HSTS kya hota hai?

`Hinglish Explanation:`

HSTS browser ko force karta hai ki website hamesha HTTPS ke through hi access ho.

`Interview Answer:`

HTTP Strict Transport Security (HSTS) forces browsers to use HTTPS instead of insecure HTTP connections.

Example:

```http
Strict-Transport-Security:
max-age=31536000
```

---

79. Subresource Integrity kya hota hai?

`Hinglish Explanation:`

SRI ensure karta hai ki CDN ya external source se load hua file tampered na ho.

`Interview Answer:`

Subresource Integrity verifies that externally loaded resources have not been modified or compromised.

Example:

```html
<script
  src="app.js"
  integrity="sha384-xyz"
></script>
```

---

80. API keys ko secure kaise karte ho?

`Hinglish Explanation:`

API keys ko frontend me hardcode nahi karna chahiye. Sensitive keys backend ya environment variables me store karni chahiye.

`Interview Answer:`

API keys should be stored securely on the server side or in protected environment variables, never exposed in client code.

Example:

```env
API_KEY=secret-key
```

---

81. Sensitive data frontend mein kyun store nahi karna chahiye?

`Hinglish Explanation:`

Frontend code aur storage user ke control me hote hain. Koi bhi DevTools se data dekh sakta hai.

`Interview Answer:`

Sensitive data should not be stored on the frontend because users can inspect, modify, or extract it.

Example:

```javascript
// Avoid
localStorage.setItem(
  "password",
  "123456"
);
```

---

82. DevTools se data leak kaise hota hai?

`Hinglish Explanation:`

Users Network tab, Storage tab aur Source files inspect karke hidden data, tokens ya API responses dekh sakte hain.

`Interview Answer:`

DevTools can expose client-side code, API responses, tokens, and storage data if sensitive information is improperly handled.

Example:

```text
DevTools
 ↓
Network Tab
 ↓
API Response Visible
```

---

83. Third-party scripts risk kya hota hai?

`Hinglish Explanation:`

Third-party scripts compromised ho sakti hain aur malicious code inject kar sakti hain jo users ka data access kar sakta hai.

`Interview Answer:`

Third-party scripts introduce supply-chain risks because they execute with the same permissions as the application.

Example:

```html
<script src="cdn.js"></script>
```

---

84. iframe security kaise handle karte ho?

`Hinglish Explanation:`

Sandboxing, CSP aur X-Frame-Options use karke iframe-based risks reduce kiye ja sakte hain.

`Interview Answer:`

Iframe security can be improved using sandbox attributes, CSP policies, and frame restrictions.

Example:

```html
<iframe
  sandbox=""
  src="page.html"
></iframe>
```

---

85. Phishing attack kya hota hai?

`Hinglish Explanation:`

Phishing attack me attacker fake websites ya emails use karke users se credentials ya sensitive information collect karta hai.

`Interview Answer:`

Phishing is a social engineering attack that tricks users into revealing sensitive information through fake websites or messages.

Example:

```text
Fake Login Page
 ↓
User Credentials Stolen
```

---

86. Dependency vulnerabilities kya hoti hain?

`Hinglish Explanation:`

Project me use hone wali third-party packages me security flaws ho sakte hain jo application ko vulnerable bana dete hain.

`Interview Answer:`

Dependency vulnerabilities are security issues present in third-party libraries used by an application.

Example:

```bash
npm audit
```

---

87. npm audit kya karta hai?

`Hinglish Explanation:`

`npm audit` installed packages ko scan karta hai aur known security vulnerabilities identify karta hai.

`Interview Answer:`

npm audit analyzes project dependencies and reports known security vulnerabilities.

Example:

```bash
npm audit

npm audit fix
```

---

88. OWASP kya hai?

`Hinglish Explanation:`

OWASP (Open Web Application Security Project) ek organization hai jo web application security awareness aur best practices provide karti hai.

`Interview Answer:`

OWASP is a nonprofit organization focused on improving software security through standards and educational resources.

Example:

```text
OWASP
 ↓
Security Guidelines
```

---

89. OWASP Top 10 kya hai?

`Hinglish Explanation:`

OWASP Top 10 web applications ke sabse common aur critical security risks ki list hai.

`Interview Answer:`

OWASP Top 10 is a widely recognized list of the most critical web application security risks.

Example:

```text
Broken Access Control
XSS
Injection
CSRF
```

---

90. Frontend app ko secure kaise banate ho?

`Hinglish Explanation:`

Input validation, output escaping, HTTPS, CSP, secure authentication aur dependency scanning follow karna chahiye.

`Interview Answer:`

A secure frontend application uses HTTPS, secure headers, proper authentication, input validation, dependency auditing, and secure storage practices.

Example:

```text
HTTPS
 +
CSP
 +
HttpOnly Cookies
 +
Input Validation
```


---

## ⚡ Performance Optimization (91-120)


91. Frontend performance kya hoti hai?

`Hinglish Explanation:`

Frontend Performance ka matlab hai webpage kitni fast load hoti hai, render hoti hai aur user interactions ka response kitni jaldi deti hai. Goal user experience ko smooth banana hota hai.

`Interview Answer:`

Frontend performance measures how quickly a web application loads, renders, and responds to user interactions.

Example:

```text
Fast Load
+
Fast Render
+
Fast Interaction
```

---

92. Page load time kaise improve karte ho?

`Hinglish Explanation:`

Images optimize karo, unnecessary JavaScript remove karo, code splitting use karo aur caching enable karo.

`Interview Answer:`

Page load time can be improved through asset optimization, caching, lazy loading, and reducing JavaScript bundle size.

Example:

```text
Compress Assets
 ↓
Lazy Load
 ↓
Cache Resources
```

---

93. Critical CSS kya hota hai?

`Hinglish Explanation:`

Critical CSS wo CSS hoti hai jo page ke above-the-fold content ko render karne ke liye immediately required hoti hai.

`Interview Answer:`

Critical CSS contains the styles required to render visible content quickly during initial page load.

Example:

```html
<style>
  .header {
    color: blue;
  }
</style>
```

---

94. Render blocking resources kya hote hain?

`Hinglish Explanation:`

Aise resources jo page render hone se pehle load hona zaroori hote hain, unhe render-blocking resources kehte hain.

`Interview Answer:`

Render-blocking resources delay page rendering until they are downloaded and processed.

Example:

```html
<link
  rel="stylesheet"
  href="style.css"
/>
```

---

95. Lazy loading images kaise karte ho?

`Hinglish Explanation:`

Images ko tab load karte hain jab wo viewport ke paas aati hain. Isse initial page load fast ho jata hai.

`Interview Answer:`

Lazy loading delays image loading until the image is needed or enters the viewport.

Example:

```html
<img
  src="image.jpg"
  loading="lazy"
/>
```

---

96. Image optimization kaise karte ho?

`Hinglish Explanation:`

Images compress karo, proper dimensions use karo aur WebP jaise modern formats prefer karo.

`Interview Answer:`

Image optimization includes compression, responsive sizing, modern formats, and lazy loading.

Example:

```html
<img
  src="image.webp"
  width="400"
/>
```

---

97. WebP kya hota hai?

`Hinglish Explanation:`

WebP ek modern image format hai jo JPEG aur PNG ke comparison me better compression provide karta hai.

`Interview Answer:`

WebP is a modern image format that delivers smaller file sizes while maintaining image quality.

Example:

```html
<img src="banner.webp" />
```

---

98. CDN ka use kaise karte ho?

`Hinglish Explanation:`

CDN content ko geographically nearest server se serve karta hai jisse latency aur load time reduce hota hai.

`Interview Answer:`

A CDN distributes content across multiple servers and delivers resources from the closest location to users.

Example:

```text
User
 ↓
Nearest CDN Server
 ↓
Content
```

---

99. Bundle size kaise reduce karte ho?

`Hinglish Explanation:`

Unused code remove karo, tree shaking use karo, code splitting karo aur heavy libraries avoid karo.

`Interview Answer:`

Bundle size can be reduced through tree shaking, code splitting, lazy loading, and dependency optimization.

Example:

```javascript
import("./Dashboard");
```

---

100. Tree shaking kaise kaam karta hai?

`Hinglish Explanation:`

Build tools unused exports ko identify karke final bundle se remove kar dete hain.

`Interview Answer:`

Tree shaking removes unused code from the final bundle during the build process.

Example:

```javascript
import { add } from "./utils";
```

---

101. Code splitting kaise implement karte ho?

`Hinglish Explanation:`

Application ko multiple chunks me divide kiya jata hai jo demand par load hote hain.

`Interview Answer:`

Code splitting breaks applications into smaller bundles that are loaded only when required.

Example:

```javascript
const Dashboard =
  React.lazy(() =>
    import("./Dashboard")
  );
```

---

102. Caching strategies kya hoti hain?

`Hinglish Explanation:`

Common strategies me Cache First, Network First aur Stale While Revalidate include hote hain.

`Interview Answer:`

Caching strategies define how applications fetch and store resources to balance speed and freshness.

Example:

```text
Cache First
Network First
Stale While Revalidate
```

---

103. Browser cache vs server cache?

`Hinglish Explanation:`

Browser cache client side par store hoti hai, jabki server cache backend par frequently used data store karti hai.

`Interview Answer:`

Browser cache stores resources on the client, while server cache stores data on the server to reduce processing time.

Example:

```text
Browser Cache
 ↓ Client

Redis Cache
 ↓ Server
```

---

104. Service worker caching kya hai?

`Hinglish Explanation:`

Service Worker network requests intercept karta hai aur resources cache se serve kar sakta hai.

`Interview Answer:`

Service Worker caching enables offline support and faster resource delivery through client-side caching.

Example:

```javascript
self.addEventListener(
  "fetch",
  event => {}
);
```

---

105. Reflow reduce kaise karte ho?

`Hinglish Explanation:`

DOM changes batch karo, unnecessary layout calculations avoid karo aur frequent style updates minimize karo.

`Interview Answer:`

Reflow can be reduced by minimizing DOM updates, batching changes, and avoiding unnecessary layout recalculations.

Example:

```javascript
const fragment =
  document.createDocumentFragment();
```

106. DOM manipulation optimize kaise karte ho?

`Hinglish Explanation:`

Frequent DOM updates expensive hote hain. Multiple changes ko batch karo, DocumentFragment use karo aur unnecessary re-renders avoid karo.

`Interview Answer:`

DOM manipulation can be optimized by minimizing direct updates, batching changes, and reducing reflows and repaints.

Example:

```javascript
const fragment =
  document.createDocumentFragment();

fragment.appendChild(item);
```

---

107. Debounce ka use performance mein kaise hota hai?

`Hinglish Explanation:`

Debounce rapid events (search input, resize) ko control karta hai aur event execution ko delay karta hai jab tak user interaction stop na ho.

`Interview Answer:`

Debouncing limits function execution until a specified delay has passed since the last event.

Example:

```javascript
const debouncedSearch =
  debounce(search, 300);
```

---

108. Throttle ka use kaise hota hai?

`Hinglish Explanation:`

Throttle ensure karta hai ki function fixed interval me hi execute ho. Scroll aur resize events me commonly use hota hai.

`Interview Answer:`

Throttling limits the execution rate of a function to a fixed interval.

Example:

```javascript
const throttledScroll =
  throttle(handleScroll, 200);
```

---

109. Virtualization kya hota hai?

`Hinglish Explanation:`

Large lists me sirf visible items render kiye jate hain aur baaki items dynamically load hote hain.

`Interview Answer:`

Virtualization improves performance by rendering only visible items instead of the entire dataset.

Example:

```text
10000 Items
 ↓
Render Only 20 Visible
```

---

110. Infinite scroll kaise implement karte ho?

`Hinglish Explanation:`

Jab user page ke bottom ke paas pahunchta hai tab next data batch automatically fetch kiya jata hai.

`Interview Answer:`

Infinite scrolling loads additional content dynamically as users approach the end of the current content.

Example:

```javascript
window.addEventListener(
  "scroll",
  loadMoreData
);
```

---

111. Lighthouse score kaise improve karte ho?

`Hinglish Explanation:`

Images optimize karo, bundle size reduce karo, caching enable karo aur Core Web Vitals improve karo.

`Interview Answer:`

Lighthouse scores improve through performance optimization, accessibility improvements, SEO enhancements, and best practices.

Example:

```text
Optimize Images
+
Code Splitting
+
Caching
```

---

112. FCP improve kaise karte ho?

`Hinglish Explanation:`

Critical CSS inline karo, render-blocking resources reduce karo aur server response fast rakho.

`Interview Answer:`

FCP can be improved by reducing render-blocking resources and prioritizing critical content.

Example:

```html
<link
  rel="preload"
  href="style.css"
/>
```

---

113. LCP improve kaise karte ho?

`Hinglish Explanation:`

Hero image optimize karo, CDN use karo aur critical resources ko preload karo.

`Interview Answer:`

LCP improves by optimizing large content elements, reducing server latency, and prioritizing critical assets.

Example:

```html
<link
  rel="preload"
  href="hero.webp"
/>
```

---

114. TTI improve kaise karte ho?

`Hinglish Explanation:`

Heavy JavaScript reduce karo, code splitting use karo aur unnecessary third-party scripts avoid karo.

`Interview Answer:`

TTI improves by reducing JavaScript execution time and minimizing long-running tasks.

Example:

```javascript
React.lazy(() =>
  import("./Dashboard")
);
```

---

115. Memory leaks kaise avoid karte ho?

`Hinglish Explanation:`

Unused event listeners remove karo, timers clear karo aur unnecessary references release karo.

`Interview Answer:`

Memory leaks can be avoided by cleaning up resources, removing listeners, and preventing unnecessary object retention.

Example:

```javascript
clearInterval(timer);

removeEventListener(
  "click",
  handler
);
```

---

116. CPU usage kaise optimize karte ho?

`Hinglish Explanation:`

Heavy calculations optimize karo, unnecessary re-renders avoid karo aur expensive tasks background me move karo.

`Interview Answer:`

CPU usage can be optimized by reducing expensive computations and avoiding unnecessary rendering work.

Example:

```javascript
useMemo(
  () => expensiveTask(),
  []
);
```

---

117. Web workers ka use kab karte ho?

`Hinglish Explanation:`

Heavy computations, image processing ya data parsing jaise tasks ke liye Web Workers use kiye jate hain taaki UI block na ho.

`Interview Answer:`

Web Workers are used for CPU-intensive operations that should run without blocking the main thread.

Example:

```javascript
const worker =
  new Worker("worker.js");
```

---

118. Preload resources ka use kaise karte ho?

`Hinglish Explanation:`

Preload important resources ko early fetch karta hai jinki current page ko immediately zarurat hoti hai.

`Interview Answer:`

Preload prioritizes critical resources required for the current page rendering.

Example:

```html
<link
  rel="preload"
  href="font.woff2"
  as="font"
/>
```

---

119. Prefetch ka use kab karte ho?

`Hinglish Explanation:`

Prefetch future navigation ke resources ko background me load karta hai jisse next page fast open hota hai.

`Interview Answer:`

Prefetch loads resources likely to be needed in future navigations during browser idle time.

Example:

```html
<link
  rel="prefetch"
  href="/dashboard.js"
/>
```

---

120. Performance monitoring tools kaunse hain?

`Hinglish Explanation:`

Performance monitor karne ke liye Lighthouse, Chrome DevTools, WebPageTest, New Relic aur Datadog jaise tools use hote hain.

`Interview Answer:`

Popular performance monitoring tools include Lighthouse, Chrome DevTools, WebPageTest, New Relic, and Datadog.

Example:

```text
Lighthouse
Chrome DevTools
WebPageTest
New Relic
```


---

## 🧠 JavaScript (1-120)

1. JavaScript kya hai?

`Hinglish Explanation:`

JavaScript ek high-level programming language hai jo web pages ko interactive banati hai. Aaj JavaScript frontend, backend (Node.js), mobile aur desktop applications me bhi use hoti hai.

`Interview Answer:`

JavaScript is a high-level, dynamically typed programming language used to build interactive web applications. It supports event-driven, asynchronous, and object-oriented programming paradigms.

Example:

```javascript
console.log("Hello JavaScript");
```

---

2. JS dynamically typed kaise hai?

`Hinglish Explanation:`

JavaScript me variable ka type declare nahi karna padta. Ek hi variable runtime par different types ki values hold kar sakta hai.

`Interview Answer:`

JavaScript is dynamically typed because variable types are determined at runtime rather than during compilation. A variable can hold values of different types over its lifetime.

Example:

```javascript
let data = "Raj";
data = 25;
```

---

3. var vs let vs const?

`Hinglish Explanation:`

`var` function-scoped hota hai aur redeclare ho sakta hai. `let` block-scoped hota hai aur reassign ho sakta hai. `const` block-scoped hota hai aur reassign nahi ho sakta.

`Interview Answer:`

`var` is function-scoped and can be redeclared. `let` is block-scoped and reassignable, while `const` is block-scoped and cannot be reassigned.

Example:

```javascript
let age = 25;
const PI = 3.14;
```

---

4. Hoisting kya hai?

`Hinglish Explanation:`

Hoisting JavaScript ka behavior hai jisme declarations execution se pehle memory me move ho jati hain. Variables aur functions hoist hote hain, lekin initialization nahi.

`Interview Answer:`

Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase of execution.

Example:

```javascript
console.log(a);

var a = 10;
```

---

5. Temporal Dead Zone kya hai?

`Hinglish Explanation:`

TDZ wo area hai jahan `let` aur `const` variables declare to ho jate hain lekin initialization se pehle access nahi kiye ja sakte.

`Interview Answer:`

The Temporal Dead Zone is the period between variable declaration and initialization where accessing a `let` or `const` variable throws an error.

Example:

```javascript
console.log(name);

let name = "Raj";
```

---

6. Scope kya hota hai?

`Hinglish Explanation:`

Scope define karta hai ki variable program ke kis part se access kiya ja sakta hai.

`Interview Answer:`

Scope determines the accessibility and visibility of variables within different parts of a program.

Example:

```javascript
function test() {
  let x = 10;
}
```

---

7. Scope types?

`Hinglish Explanation:`

JavaScript me mainly Global Scope, Function Scope aur Block Scope hote hain. Variable ki visibility scope ke according decide hoti hai.

`Interview Answer:`

The main scope types in JavaScript are Global Scope, Function Scope, and Block Scope.

Example:

```javascript
let globalVar = 1;

function demo() {
  let localVar = 2;
}
```

---

8. Lexical scope kya hai?

`Hinglish Explanation:`

Lexical Scope ka matlab hai ki function apne surrounding scope ke variables access kar sakta hai, jahan wo define hua tha.

`Interview Answer:`

Lexical Scope means a function can access variables from its parent scope based on where it was defined in the code.

Example:

```javascript
function outer() {
  let name = "Raj";

  function inner() {
    console.log(name);
  }
}
```

---

9. Closure kya hai?

`Hinglish Explanation:`

Closure tab banta hai jab ek inner function apne outer function ke variables ko outer function execute hone ke baad bhi access kar sakta hai.

`Interview Answer:`

A closure is created when a function remembers and accesses variables from its lexical scope even after the outer function has finished executing.

Example:

```javascript
function outer() {
  let count = 0;

  return function () {
    count++;
  };
}
```

---

10. Closure ka real use case?

`Hinglish Explanation:`

Closures private variables create karne, data hiding aur function factories banane ke liye use hote hain.

`Interview Answer:`

Closures are commonly used for data encapsulation, private state management, and creating reusable function factories.

Example:

```javascript
function counter() {
  let count = 0;

  return () => ++count;
}
```

---

11. Execution context kya hai?

`Hinglish Explanation:`

Execution Context environment hota hai jahan JavaScript code execute hota hai. Isme variables, functions aur `this` ki information store hoti hai.

`Interview Answer:`

An Execution Context is the environment in which JavaScript code is evaluated and executed.

Example:

```javascript
function greet() {
  console.log("Hello");
}
```

---

12. Call stack kya hai?

`Hinglish Explanation:`

Call Stack ek data structure hai jo function calls ko track karta hai. Functions Last-In-First-Out order me execute hote hain.

`Interview Answer:`

The Call Stack is a stack data structure that keeps track of function execution order in JavaScript.

Example:

```javascript
function a() {
  b();
}

function b() {}
```

---

13. Event loop kya hai?

`Hinglish Explanation:`

Event Loop asynchronous tasks ko manage karta hai. Jab Call Stack empty hota hai tab callback queue se tasks uthakar execute karta hai.

`Interview Answer:`

The Event Loop continuously checks the Call Stack and processes queued asynchronous callbacks when the stack becomes empty.

Example:

```javascript
setTimeout(() => {
  console.log("Done");
}, 0);
```

---

14. Callback queue kya hai?

`Hinglish Explanation:`

Callback Queue me asynchronous callbacks wait karte hain jab tak Call Stack empty na ho jaye.

`Interview Answer:`

The Callback Queue stores completed asynchronous callbacks waiting to be executed by the Event Loop.

Example:

```javascript
setTimeout(() => {
  console.log("Queue");
}, 1000);
```

---

15. Microtask queue kya hai?

`Hinglish Explanation:`

Microtask Queue high-priority queue hoti hai jisme Promise callbacks aur Mutation Observers store hote hain.

`Interview Answer:`

The Microtask Queue contains tasks such as Promise callbacks and is processed before the Callback Queue.

Example:

```javascript
Promise.resolve().then(() => {
  console.log("Microtask");
});
```

---

16. Macrotask kya hai?

`Hinglish Explanation:`

Macrotasks asynchronous operations hote hain jaise `setTimeout`, `setInterval` aur DOM events.

`Interview Answer:`

Macrotasks are tasks placed in the Callback Queue, such as timers, DOM events, and network callbacks.

Example:

```javascript
setTimeout(() => {
  console.log("Macrotask");
}, 0);
```

---

17. Promises kya hain?

`Hinglish Explanation:`

Promise asynchronous operation ka future result represent karta hai. Ye callback hell ko reduce karta hai aur code readable banata hai.

`Interview Answer:`

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

Example:

```javascript
const promise =
  fetch("/users");
```

---

18. Promise states?

`Hinglish Explanation:`

Promise ki 3 states hoti hain: Pending, Fulfilled aur Rejected. Ek baar state change ho jaye to dobara change nahi hoti.

`Interview Answer:`

A Promise can be in one of three states: Pending, Fulfilled, or Rejected.

Example:

```javascript
Promise.resolve("Success");
```

---

19. Async/await kya hai?

`Hinglish Explanation:`

Async/Await Promises ke upar built syntax hai jo asynchronous code ko synchronous jaisa readable banata hai.

`Interview Answer:`

Async/Await provides a cleaner way to work with Promises by allowing asynchronous code to be written in a synchronous style.

Example:

```javascript
async function getData() {
  const data = await fetch("/api");
}
```

---

20. Promise chaining?

`Hinglish Explanation:`

Promise Chaining multiple asynchronous operations ko sequentially execute karne ke liye `.then()` methods ko chain karti hai.

`Interview Answer:`

Promise chaining allows sequential execution of asynchronous operations by returning values or Promises from `.then()` callbacks.

Example:

```javascript
fetch("/users")
  .then(res => res.json())
  .then(data => console.log(data));
```

21. Callback hell kya hai?

`Hinglish Explanation:`

Jab multiple asynchronous callbacks ek dusre ke andar nested ho jate hain to code difficult to read aur maintain ho jata hai. Is problem ko Callback Hell ya Pyramid of Doom kehte hain.

`Interview Answer:`

Callback Hell occurs when multiple nested callbacks make code difficult to read, debug, and maintain. It is commonly solved using Promises or Async/Await.

Example:

```javascript
getUser(function(user) {
  getOrders(user.id, function(orders) {
    getPayment(orders, function(payment) {
      console.log(payment);
    });
  });
});
```

---

22. Error handling async mein kaise?

`Hinglish Explanation:`

Promises me `.catch()` aur Async/Await me `try...catch` use karke asynchronous errors handle kiye jate hain.

`Interview Answer:`

Asynchronous errors can be handled using `.catch()` with Promises or `try...catch` blocks with Async/Await.

Example:

```javascript
try {
  const data = await fetchData();
} catch (error) {
  console.error(error);
}
```

---

23. this keyword kya hai?

`Hinglish Explanation:`

`this` current execution context ke object ko refer karta hai. Iski value function call karne ke tareeke par depend karti hai.

`Interview Answer:`

The `this` keyword refers to the object that is currently executing the function. Its value depends on how the function is invoked.

Example:

```javascript
const user = {
  name: "Raj",
  greet() {
    console.log(this.name);
  }
};
```

---

24. Arrow vs normal function?

`Hinglish Explanation:`

Arrow functions apna `this` create nahi karti, wo parent scope se inherit karti hain. Normal functions ka apna `this` hota hai.

`Interview Answer:`

Arrow functions have lexical `this` binding, while regular functions have dynamic `this` based on invocation context.

Example:

```javascript
const add = (a, b) => a + b;

function sum(a, b) {
  return a + b;
}
```

---

25. Bind kya karta hai?

`Hinglish Explanation:`

`bind()` ek naya function return karta hai jiska `this` permanently specified object se bind hota hai.

`Interview Answer:`

The `bind()` method creates a new function with a fixed `this` context and optionally predefined arguments.

Example:

```javascript
const boundFn =
  greet.bind(user);
```

---

26. Call vs apply?

`Hinglish Explanation:`

Dono function ko immediately invoke karte hain aur `this` set karte hain. Difference sirf arguments pass karne ka hai.

`Interview Answer:`

`call()` accepts arguments individually, whereas `apply()` accepts arguments as an array.

Example:

```javascript
fn.call(user, 1, 2);

fn.apply(user, [1, 2]);
```

---

27. Prototype kya hai?

`Hinglish Explanation:`

JavaScript me har object ek prototype se linked hota hai. Prototype inheritance aur shared methods provide karta hai.

`Interview Answer:`

A prototype is an object from which other objects inherit properties and methods.

Example:

```javascript
Person.prototype.greet =
  function() {};
```

---

28. Prototypal inheritance?

`Hinglish Explanation:`

JavaScript objects dusre objects se properties aur methods inherit kar sakte hain using prototype chain.

`Interview Answer:`

Prototypal inheritance allows objects to inherit behavior directly from other objects through the prototype chain.

Example:

```javascript
child.__proto__ = parent;
```

---

29. Object.create kya karta hai?

`Hinglish Explanation:`

`Object.create()` specified prototype ke saath naya object create karta hai.

`Interview Answer:`

`Object.create()` creates a new object and sets its prototype to the provided object.

Example:

```javascript
const user =
  Object.create(person);
```

---

30. Deep vs shallow copy?

`Hinglish Explanation:`

Shallow copy sirf top-level properties copy karti hai, nested objects reference share karte hain. Deep copy poora object structure clone karti hai.

`Interview Answer:`

A shallow copy copies references for nested objects, while a deep copy creates completely independent copies.

Example:

```javascript
const copy =
  structuredClone(obj);
```

---

31. JSON kya hai?

`Hinglish Explanation:`

JSON (JavaScript Object Notation) lightweight data exchange format hai jo APIs aur applications ke beech data transfer ke liye use hota hai.

`Interview Answer:`

JSON is a text-based data format used for storing and exchanging structured data.

Example:

```javascript
const json =
  JSON.stringify(user);
```

---

32. Map vs Object?

`Hinglish Explanation:`

Map kisi bhi type ki keys support karta hai aur insertion order maintain karta hai. Object mainly string aur symbol keys ke liye use hota hai.

`Interview Answer:`

Map provides better support for dynamic key-value storage, while Object is primarily used for structured data representation.

Example:

```javascript
const map = new Map();

map.set("name", "Raj");
```

---

33. Set vs Array?

`Hinglish Explanation:`

Set unique values store karta hai aur duplicates allow nahi karta. Array ordered collection hai jisme duplicate values ho sakti hain.

`Interview Answer:`

A Set stores unique values only, while an Array allows duplicate values and supports indexing.

Example:

```javascript
const set =
  new Set([1, 2, 2]);
```

---

34. WeakMap kya hai?

`Hinglish Explanation:`

WeakMap me keys sirf objects ho sakti hain aur garbage collection automatically unused keys ko remove kar sakta hai.

`Interview Answer:`

WeakMap is a collection of key-value pairs where keys are objects and can be garbage collected.

Example:

```javascript
const wm =
  new WeakMap();
```

---

35. Symbol kya hai?

`Hinglish Explanation:`

Symbol unique aur immutable primitive value hoti hai jo unique object properties create karne ke liye use hoti hai.

`Interview Answer:`

A Symbol is a unique primitive value commonly used as object property keys to avoid naming collisions.

Example:

```javascript
const id =
  Symbol("id");
```

---

36. Destructuring kya hai?

`Hinglish Explanation:`

Destructuring object ya array se values extract karne ka concise syntax provide karti hai.

`Interview Answer:`

Destructuring allows extracting values from arrays or properties from objects into variables.

Example:

```javascript
const { name } = user;
```

---

37. Spread operator?

`Hinglish Explanation:`

Spread operator (`...`) array ya object ke elements ko expand karta hai. Copy aur merge operations me commonly use hota hai.

`Interview Answer:`

The spread operator expands iterable values into individual elements and is useful for copying and merging data.

Example:

```javascript
const arr2 =
  [...arr1];
```

---

38. Rest operator?

`Hinglish Explanation:`

Rest operator multiple values ko collect karke ek array me store karta hai.

`Interview Answer:`

The rest operator collects multiple values into a single array parameter or variable.

Example:

```javascript
function sum(...nums) {
  return nums;
}
```

---

39. Template literals?

`Hinglish Explanation:`

Template literals string interpolation aur multiline strings provide karti hain using backticks.

`Interview Answer:`

Template literals allow embedding expressions inside strings and support multiline formatting.

Example:

```javascript
const msg =
  `Hello ${name}`;
```

---

40. Default parameters?

`Hinglish Explanation:`

Default parameters function arguments ke liye fallback values define karne ki facility dete hain.

`Interview Answer:`

Default parameters provide predefined values when function arguments are not supplied.

Example:

```javascript
function greet(name = "Guest") {
  return name;
}
```


41. Debounce kya hai?

`Hinglish Explanation:`

Debounce function ko tab execute karta hai jab specified delay tak koi naya event trigger na ho. Search input aur resize events me commonly use hota hai.

`Interview Answer:`

Debouncing limits function execution until a specified delay has passed since the last event, reducing unnecessary calls.

Example:

```javascript
function debounce(fn, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(
      () => fn(...args),
      delay
    );
  };
}
```

---

42. Throttle kya hai?

`Hinglish Explanation:`

Throttle function execution ko fixed interval tak limit karta hai. Chahe event kitni baar trigger ho, function specified time me ek hi baar chalega.

`Interview Answer:`

Throttling ensures a function executes at most once within a specified time interval.

Example:

```javascript
function throttle(fn, delay) {
  let flag = true;

  return () => {
    if (!flag) return;

    fn();
    flag = false;

    setTimeout(() => {
      flag = true;
    }, delay);
  };
}
```

---

43. Memoization?

`Hinglish Explanation:`

Memoization expensive function results ko cache karta hai taaki same input par computation dobara na karni pade.

`Interview Answer:`

Memoization is an optimization technique that stores function results and returns cached values for repeated inputs.

Example:

```javascript
const cache = {};

function square(n) {
  if (cache[n]) return cache[n];

  return cache[n] = n * n;
}
```

---

44. Pure functions?

`Hinglish Explanation:`

Pure Function same input par hamesha same output deti hai aur external state ko modify nahi karti.

`Interview Answer:`

A pure function always returns the same output for the same input and has no side effects.

Example:

```javascript
function add(a, b) {
  return a + b;
}
```

---

45. Side effects kya hai?

`Hinglish Explanation:`

Jab function external state modify kare ya external resources access kare to use side effect kehte hain.

`Interview Answer:`

A side effect is any operation that modifies external state or interacts with systems outside the function.

Example:

```javascript
let count = 0;

function increment() {
  count++;
}
```

---

46. Functional programming kya hai?

`Hinglish Explanation:`

Functional Programming immutable data, pure functions aur function composition par focus karti hai.

`Interview Answer:`

Functional Programming is a paradigm that emphasizes pure functions, immutability, and declarative code.

Example:

```javascript
const result =
  [1, 2, 3].map(x => x * 2);
```

---

47. Event delegation?

`Hinglish Explanation:`

Event Delegation me parent element par event listener lagaya jata hai aur child events bubbling ke through handle kiye jate hain.

`Interview Answer:`

Event Delegation uses event bubbling to handle events from multiple child elements through a single parent listener.

Example:

```javascript
ul.addEventListener("click", e => {
  console.log(e.target);
});
```

---

48. Garbage collection?

`Hinglish Explanation:`

Garbage Collection automatically unused memory ko free karti hai taaki memory efficiently use ho sake.

`Interview Answer:`

Garbage Collection automatically removes objects that are no longer reachable from the application.

Example:

```javascript
let obj = {
  name: "Raj"
};

obj = null;
```

---

49. Memory leak kya hai?

`Hinglish Explanation:`

Memory Leak tab hota hai jab unused memory release nahi hoti aur application unnecessary memory consume karti rehti hai.

`Interview Answer:`

A memory leak occurs when allocated memory remains referenced and cannot be garbage collected.

Example:

```javascript
let cache = [];
```

---

50. Closures se leak kaise hota hai?

`Hinglish Explanation:`

Closure outer scope variables ko memory me hold rakhta hai. Agar unnecessary references maintain rahein to memory leak ho sakta hai.

`Interview Answer:`

Closures can cause memory leaks by retaining references to variables that are no longer needed.

Example:

```javascript
function outer() {
  let largeData = [];

  return function () {
    return largeData;
  };
}
```

---

51. Proxy kya hai?

`Hinglish Explanation:`

Proxy object ke operations ko intercept aur customize karne ki facility deta hai jaise get, set aur delete.

`Interview Answer:`

A Proxy wraps an object and intercepts operations such as property access, assignment, and deletion.

Example:

```javascript
const proxy = new Proxy({}, {});
```

---

52. Reflect API kya hai?

`Hinglish Explanation:`

Reflect API object operations perform karne ke liye standard methods provide karti hai aur Proxy ke saath commonly use hoti hai.

`Interview Answer:`

The Reflect API provides methods for performing object operations in a consistent and functional way.

Example:

```javascript
Reflect.get(user, "name");
```

---

53. Generators kya hain?

`Hinglish Explanation:`

Generators special functions hote hain jo execution ko pause aur resume kar sakte hain using `yield`.

`Interview Answer:`

Generators are functions that can pause execution and produce multiple values over time using `yield`.

Example:

```javascript
function* gen() {
  yield 1;
  yield 2;
}
```

---

54. Iterators kya hain?

`Hinglish Explanation:`

Iterator ek object hota hai jo sequence ke values ko one-by-one return karta hai.

`Interview Answer:`

An Iterator is an object that provides a `next()` method to traverse a collection sequentially.

Example:

```javascript
const it =
  [1, 2][Symbol.iterator]();
```

---

55. for...in vs for...of?

`Hinglish Explanation:`

`for...in` object keys iterate karta hai, jabki `for...of` iterable values iterate karta hai.

`Interview Answer:`

`for...in` iterates over property names, while `for...of` iterates over values of iterable objects.

Example:

```javascript
for (let key in obj) {}

for (let value of arr) {}
```

---

56. Module system kya hai?

`Hinglish Explanation:`

Module System code ko reusable aur maintainable parts me divide karne ki facility deta hai.

`Interview Answer:`

A module system allows code organization into reusable and independent files.

Example:

```javascript
export default add;
```

---

57. ES modules vs CommonJS?

`Hinglish Explanation:`

ES Modules modern JavaScript standard hai, jabki CommonJS Node.js ka traditional module system hai.

`Interview Answer:`

ES Modules use `import/export`, while CommonJS uses `require/module.exports`.

Example:

```javascript
import app from "./app.js";

// CommonJS
const app =
  require("./app");
```

---

58. Strict mode kya hai?

`Hinglish Explanation:`

Strict Mode JavaScript ke unsafe behaviors ko restrict karta hai aur coding mistakes detect karne me help karta hai.

`Interview Answer:`

Strict Mode enables stricter parsing and error handling, helping developers write safer code.

Example:

```javascript
"use strict";
```

---

59. Type coercion kya hai?

`Hinglish Explanation:`

Type Coercion automatic type conversion process hai jo JavaScript different types ke values compare ya operate karte waqt karti hai.

`Interview Answer:`

Type Coercion is the automatic conversion of values from one data type to another by JavaScript.

Example:

```javascript
"5" + 1; // "51"
```

---

60. == vs ===?

`Hinglish Explanation:`

`==` value compare karta hai aur type conversion allow karta hai. `===` value aur type dono compare karta hai.

`Interview Answer:`

`==` performs loose equality with type coercion, whereas `===` performs strict equality without type conversion.

Example:

```javascript
5 == "5";   // true

5 === "5";  // false
```


61. NaN kya hai?

`Hinglish Explanation:`

NaN ka matlab "Not a Number" hai. Jab koi invalid mathematical operation hoti hai ya number conversion fail hota hai tab NaN return hota hai.

`Interview Answer:`

NaN is a special numeric value representing an invalid or undefined mathematical result. It is of type `number`.

Example:

```javascript
Number("abc"); // NaN

Number.isNaN(NaN); // true
```

---

62. undefined vs null?

`Hinglish Explanation:`

`undefined` ka matlab variable declare hua hai par value assign nahi hui. `null` intentionally assigned empty value ko represent karta hai.

`Interview Answer:`

`undefined` indicates a variable has not been assigned a value, while `null` represents an intentional absence of value.

Example:

```javascript
let a;

let b = null;
```

---

63. typeof operator?

`Hinglish Explanation:`

`typeof` kisi variable ya value ka data type check karne ke liye use hota hai.

`Interview Answer:`

The `typeof` operator returns the data type of a given operand as a string.

Example:

```javascript
typeof "Raj"; // string

typeof 10; // number
```

---

64. instanceof?

`Hinglish Explanation:`

`instanceof` check karta hai ki object kisi specific constructor ya class se create hua hai ya nahi.

`Interview Answer:`

The `instanceof` operator checks whether an object exists in a constructor's prototype chain.

Example:

```javascript
arr instanceof Array; // true
```

---

65. Array methods (map/filter/reduce)?

`Hinglish Explanation:`

`map()` data transform karta hai, `filter()` conditions ke basis par data select karta hai aur `reduce()` values ko single result me combine karta hai.

`Interview Answer:`

`map()` transforms elements, `filter()` selects matching elements, and `reduce()` accumulates values into a single result.

Example:

```javascript
arr.map(x => x * 2);

arr.filter(x => x > 5);

arr.reduce((a, b) => a + b);
```

---

66. Reduce ka use?

`Hinglish Explanation:`

Reduce array ke saare elements ko process karke ek final value return karta hai jaise sum, average ya object creation.

`Interview Answer:`

`reduce()` is used to accumulate array values into a single output such as totals, objects, or grouped data.

Example:

```javascript
const sum =
  [1, 2, 3].reduce(
    (acc, curr) => acc + curr,
    0
  );
```

---

67. Flatten array kaise?

`Hinglish Explanation:`

Nested arrays ko single-level array me convert karne ko flattening kehte hain.

`Interview Answer:`

Arrays can be flattened using the `flat()` method or recursion for deeply nested structures.

Example:

```javascript
const arr =
  [1, [2, [3]]];

arr.flat(Infinity);
```

---

68. Deep clone kaise?

`Hinglish Explanation:`

Deep clone nested objects aur arrays ki completely independent copy create karta hai.

`Interview Answer:`

Deep cloning creates a new copy of an object including all nested references.

Example:

```javascript
const clone =
  structuredClone(obj);
```

---

69. Object comparison?

`Hinglish Explanation:`

JavaScript objects reference ke basis par compare hote hain, values ke basis par nahi.

`Interview Answer:`

Objects are compared by reference, so two objects with identical values are not equal unless they reference the same memory location.

Example:

```javascript
{} === {}; // false
```

---

70. Immutable data kya hai?

`Hinglish Explanation:`

Immutable data create hone ke baad modify nahi hota. Changes ke liye nayi copy create ki jati hai.

`Interview Answer:`

Immutable data cannot be modified after creation, improving predictability and state management.

Example:

```javascript
const user = {
  ...oldUser,
  age: 25
};
```

---

71. Currying kya hai?

`Hinglish Explanation:`

Currying ek function ko multiple single-argument functions me convert karne ki technique hai.

`Interview Answer:`

Currying transforms a function with multiple arguments into a sequence of functions that each take one argument.

Example:

```javascript
const add =
  a => b => a + b;
```

---

72. Partial application?

`Hinglish Explanation:`

Partial Application me function ke kuch arguments pehle se fix kar diye jate hain aur remaining baad me pass kiye jate hain.

`Interview Answer:`

Partial application creates a new function by pre-filling some arguments of an existing function.

Example:

```javascript
const add =
  (a, b) => a + b;

const addFive =
  add.bind(null, 5);
```

---

73. Compose function?

`Hinglish Explanation:`

Compose multiple functions ko right-to-left order me execute karta hai.

`Interview Answer:`

Function composition combines multiple functions where the output of one becomes the input of the next.

Example:

```javascript
const compose =
  (f, g) => x => f(g(x));
```

---

74. Pipe kya hai?

`Hinglish Explanation:`

Pipe compose jaisa hi hai, lekin functions left-to-right order me execute hote hain.

`Interview Answer:`

Pipe executes functions from left to right, making data flow easier to read.

Example:

```javascript
const pipe =
  (f, g) => x => g(f(x));
```

---

75. Promise.all?

`Hinglish Explanation:`

`Promise.all()` multiple promises ko parallel execute karta hai aur sab successful hone par result return karta hai.

`Interview Answer:`

`Promise.all()` resolves when all promises succeed and rejects immediately if any promise fails.

Example:

```javascript
Promise.all([
  fetch("/users"),
  fetch("/posts")
]);
```

---

76. Promise.race?

`Hinglish Explanation:`

`Promise.race()` sabse pehle complete hone wale promise ka result return karta hai.

`Interview Answer:`

`Promise.race()` settles as soon as the first promise resolves or rejects.

Example:

```javascript
Promise.race([
  p1,
  p2
]);
```

---

77. Promise.any?

`Hinglish Explanation:`

`Promise.any()` pehle successful promise ka result return karta hai aur failures ignore karta hai.

`Interview Answer:`

`Promise.any()` resolves with the first fulfilled promise and rejects only if all promises fail.

Example:

```javascript
Promise.any([
  p1,
  p2
]);
```

---

78. Promise.allSettled?

`Hinglish Explanation:`

`Promise.allSettled()` sabhi promises ke complete hone ka wait karta hai, chahe success ho ya fail.

`Interview Answer:`

`Promise.allSettled()` returns the status and result of all promises without failing early.

Example:

```javascript
Promise.allSettled([
  p1,
  p2
]);
```

---

79. Retry mechanism kaise likho?

`Hinglish Explanation:`

Retry mechanism failed operation ko specified attempts tak dobara execute karta hai. Temporary network failures ke liye useful hai.

`Interview Answer:`

A retry mechanism automatically re-executes failed operations, often with delays between attempts.

Example:

```javascript
async function retry(fn, times) {
  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch {}
  }
}
```

---

80. Rate limiter function?

`Hinglish Explanation:`

Rate Limiter requests ya function calls ki frequency control karta hai taaki abuse aur excessive load prevent ho sake.

`Interview Answer:`

A rate limiter restricts how often a function or API can be executed within a given time period.

Example:

```javascript
let calls = 0;

if (calls > 100) {
  throw Error("Limit Exceeded");
}
```

81. Event bubbling kya hai?

`Hinglish Explanation:`

Event Bubbling me event sabse inner element se start hota hai aur parent elements ki taraf propagate karta hai. Ye browser ka default event flow hai.

`Interview Answer:`

Event Bubbling is the process where an event propagates from the target element up through its ancestor elements.

Example:

```javascript
child.addEventListener("click", () => {
  console.log("Child");
});

parent.addEventListener("click", () => {
  console.log("Parent");
});
```

---

82. Event capturing?

`Hinglish Explanation:`

Event Capturing bubbling ka opposite hai. Event outermost parent se start hota hai aur target element tak pahunchta hai.

`Interview Answer:`

Event Capturing is the phase where events travel from the root element down to the target element.

Example:

```javascript
parent.addEventListener(
  "click",
  () => console.log("Parent"),
  true
);
```

---

83. stopPropagation?

`Hinglish Explanation:`

`stopPropagation()` event ko parent elements tak jane se rokta hai. Isse bubbling ya capturing ko stop kiya ja sakta hai.

`Interview Answer:`

`stopPropagation()` prevents an event from propagating further through the DOM hierarchy.

Example:

```javascript
button.addEventListener("click", e => {
  e.stopPropagation();
});
```

---

84. preventDefault?

`Hinglish Explanation:`

`preventDefault()` browser ke default behavior ko stop karta hai, jaise form submit ya link navigation.

`Interview Answer:`

`preventDefault()` prevents the browser's default action associated with an event.

Example:

```javascript
form.addEventListener("submit", e => {
  e.preventDefault();
});
```

---

85. DOM manipulation basics?

`Hinglish Explanation:`

DOM Manipulation se HTML elements ko select, modify, create aur remove kiya ja sakta hai JavaScript ke through.

`Interview Answer:`

DOM manipulation allows dynamic modification of webpage content, structure, and styles using JavaScript.

Example:

```javascript
document
  .getElementById("title")
  .textContent = "Hello";
```

---

86. Virtual DOM kya hai?

`Hinglish Explanation:`

Virtual DOM Real DOM ki lightweight JavaScript copy hoti hai. Frameworks jaise React changes compare karke sirf required updates Real DOM me apply karte hain.

`Interview Answer:`

The Virtual DOM is an in-memory representation of the Real DOM used to optimize UI updates.

Example:

```javascript
setState({
  name: "Raj"
});
```

---

87. Browser rendering flow?

`Hinglish Explanation:`

Browser HTML parse karta hai, DOM aur CSSOM banata hai, render tree create karta hai aur phir layout aur paint perform karta hai.

`Interview Answer:`

The browser rendering flow consists of parsing, DOM/CSSOM creation, render tree generation, layout calculation, and painting.

Example:

```text
HTML
 ↓
DOM + CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
```

---

88. Reflow vs repaint?

`Hinglish Explanation:`

Reflow layout calculations ko trigger karta hai, jabki Repaint sirf visual appearance update karta hai. Reflow generally expensive operation hota hai.

`Interview Answer:`

Reflow recalculates layout and element positions, while Repaint updates visual styles without affecting layout.

Example:

```javascript
element.style.width = "200px";
```

---

89. Web APIs kya hain?

`Hinglish Explanation:`

Web APIs browser dwara provide kiye gaye features hote hain jaise DOM, Fetch API, LocalStorage aur Geolocation.

`Interview Answer:`

Web APIs are browser-provided interfaces that enable features such as networking, storage, and DOM manipulation.

Example:

```javascript
fetch("/api/users");
```

---

90. Fetch vs Axios?

`Hinglish Explanation:`

Fetch browser built-in API hai, jabki Axios third-party library hai jo automatic JSON parsing aur interceptors provide karti hai.

`Interview Answer:`

Fetch is a native browser API, while Axios is a feature-rich HTTP client with built-in request and response handling.

Example:

```javascript
fetch("/users");

axios.get("/users");
```

---

91. LocalStorage vs SessionStorage?

`Hinglish Explanation:`

LocalStorage browser close hone ke baad bhi data preserve rakhta hai. SessionStorage tab close hone tak data store karta hai.

`Interview Answer:`

LocalStorage persists data indefinitely, while SessionStorage stores data only for the duration of the browser session.

Example:

```javascript
localStorage.setItem(
  "theme",
  "dark"
);
```

---

92. Cookies kya hain?

`Hinglish Explanation:`

Cookies small data pieces hote hain jo browser me store hote hain aur server requests ke saath automatically send hote hain.

`Interview Answer:`

Cookies are small data files stored in the browser and commonly used for authentication and session management.

Example:

```javascript
document.cookie =
  "theme=dark";
```

---

93. CORS kya hai?

`Hinglish Explanation:`

CORS browser security mechanism hai jo different origins ke beech resource sharing control karta hai.

`Interview Answer:`

Cross-Origin Resource Sharing (CORS) allows or restricts requests between different domains.

Example:

```http
Access-Control-Allow-Origin: *
```

---

94. Same-origin policy?

`Hinglish Explanation:`

Same-Origin Policy browser security feature hai jo different domains ke resources ko directly access karne se restrict karta hai.

`Interview Answer:`

The Same-Origin Policy prevents scripts from accessing resources from different origins without explicit permission.

Example:

```text
example.com
≠
api.test.com
```

---

95. Web workers?

`Hinglish Explanation:`

Web Workers JavaScript code ko background thread me run karne ki facility dete hain taaki UI block na ho.

`Interview Answer:`

Web Workers enable background processing in separate threads without blocking the main UI thread.

Example:

```javascript
const worker =
  new Worker("worker.js");
```

---

96. Service workers?

`Hinglish Explanation:`

Service Workers browser background scripts hote hain jo caching, offline support aur push notifications handle karte hain.

`Interview Answer:`

Service Workers run independently from web pages and provide offline capabilities, caching, and background tasks.

Example:

```javascript
navigator.serviceWorker.register(
  "/sw.js"
);
```

---

97. IndexedDB kya hai?

`Hinglish Explanation:`

IndexedDB browser ka client-side NoSQL database hai jo large structured data store kar sakta hai.

`Interview Answer:`

IndexedDB is a browser-based database used for storing large amounts of structured data locally.

Example:

```javascript
indexedDB.open(
  "MyDatabase"
);
```

---

98. Memory profiling?

`Hinglish Explanation:`

Memory Profiling application ki memory usage analyze karti hai aur memory leaks identify karne me help karti hai.

`Interview Answer:`

Memory profiling helps track memory allocation, usage patterns, and potential memory leaks.

Example:

```text
Chrome DevTools
→ Memory Tab
```

---

99. Performance profiling?

`Hinglish Explanation:`

Performance Profiling slow functions, rendering bottlenecks aur expensive operations identify karne ke liye use hoti hai.

`Interview Answer:`

Performance profiling measures execution time and identifies bottlenecks affecting application performance.

Example:

```javascript
console.time("task");
console.timeEnd("task");
```

---

100. JS engine kya hai?

`Hinglish Explanation:`

JavaScript Engine JavaScript code ko parse, compile aur execute karta hai. Har browser apna JS engine use karta hai.

`Interview Answer:`

A JavaScript Engine is a program that parses, compiles, and executes JavaScript code.

Example:

```text
Chrome → V8
Firefox → SpiderMonkey
Safari → JavaScriptCore
```

101. V8 engine?

`Hinglish Explanation:`

V8 Google ka JavaScript Engine hai jo Chrome aur Node.js me use hota hai. Ye JavaScript ko machine code me compile karke fast execution provide karta hai.

`Interview Answer:`

V8 is Google's high-performance JavaScript engine used in Chrome and Node.js. It compiles JavaScript directly into machine code using Just-In-Time (JIT) compilation.

Example:

```text
JavaScript
   ↓
V8 Engine
   ↓
Machine Code
```

---

102. Garbage collector kaise kaam karta hai?

`Hinglish Explanation:`

Garbage Collector automatically memory clean karta hai by removing objects jo application se reachable nahi hote.

`Interview Answer:`

The Garbage Collector frees memory occupied by objects that are no longer reachable from the application.

Example:

```javascript
let user = {
  name: "Raj"
};

user = null;
```

---

103. Async parallel vs sequential?

`Hinglish Explanation:`

Sequential execution me tasks ek ke baad ek run hote hain. Parallel execution me multiple async tasks ek saath start ho jate hain.

`Interview Answer:`

Sequential execution waits for each task to complete, while parallel execution runs multiple asynchronous tasks simultaneously.

Example:

```javascript
await Promise.all([
  fetchUsers(),
  fetchPosts()
]);
```

---

104. Concurrency vs parallelism?

`Hinglish Explanation:`

Concurrency ka matlab multiple tasks ko manage karna hai, jabki Parallelism ka matlab multiple tasks ko same time par execute karna hai.

`Interview Answer:`

Concurrency is about handling multiple tasks efficiently, while parallelism is about executing multiple tasks at the same time.

Example:

```text
Concurrency → 1 CPU

Parallelism → Multiple CPUs
```

---

105. Race condition kya hai?

`Hinglish Explanation:`

Race Condition tab hoti hai jab multiple operations same data ko simultaneously modify karte hain aur final result unpredictable ho jata hai.

`Interview Answer:`

A race condition occurs when the outcome depends on the timing or order of asynchronous operations.

Example:

```javascript
count++;

count++;
```

---

106. Deadlock kya hai?

`Hinglish Explanation:`

Deadlock tab hota hai jab do ya zyada processes ek dusre ke resources ka wait karte rehte hain aur execution stop ho jati hai.

`Interview Answer:`

A deadlock occurs when multiple processes wait indefinitely for resources held by each other.

Example:

```text
Process A → Waiting for B

Process B → Waiting for A
```

---

107. Event loop internals?

`Hinglish Explanation:`

Event Loop Call Stack, Microtask Queue aur Callback Queue ko coordinate karta hai. Pehle Microtasks execute hoti hain, phir Macrotasks.

`Interview Answer:`

The Event Loop continuously checks the Call Stack and prioritizes Microtasks before processing Macrotasks.

Example:

```javascript
Promise.resolve().then(() => {
  console.log("Microtask");
});

setTimeout(() => {
  console.log("Macrotask");
});
```

---

108. Node vs browser JS?

`Hinglish Explanation:`

JavaScript language same hai, lekin environment alag hai. Browser DOM provide karta hai, jabki Node.js file system aur server APIs provide karta hai.

`Interview Answer:`

JavaScript syntax is the same, but browsers provide Web APIs while Node.js provides server-side APIs.

Example:

```javascript
// Browser
document.querySelector();

// Node
fs.readFile();
```

---

109. Polyfills kya hain?

`Hinglish Explanation:`

Polyfills older browsers me modern JavaScript features ka support add karte hain.

`Interview Answer:`

A Polyfill is code that implements modern JavaScript features in environments where they are not natively supported.

Example:

```javascript
if (!Array.prototype.flat) {
  // Polyfill
}
```

---

110. Transpilation kya hai?

`Hinglish Explanation:`

Transpilation modern JavaScript code ko older JavaScript version me convert karti hai taaki older browsers support kar sakein.

`Interview Answer:`

Transpilation converts source code from one version of a language to another compatible version.

Example:

```javascript
// ES6
const add = (a, b) => a + b;
```

---

111. Babel kya hai?

`Hinglish Explanation:`

Babel JavaScript transpiler hai jo modern JavaScript ko older browser-compatible code me convert karta hai.

`Interview Answer:`

Babel is a JavaScript compiler that transforms modern JavaScript syntax into backward-compatible code.

Example:

```bash
npm install @babel/core
```

---

112. Tree shaking kya hai?

`Hinglish Explanation:`

Tree Shaking unused code ko final bundle se remove karta hai jisse bundle size reduce hota hai.

`Interview Answer:`

Tree Shaking is a build optimization technique that removes unused exports from the final bundle.

Example:

```javascript
import {
  usedFunction
} from "./utils";
```

---

113. Bundling kya hai?

`Hinglish Explanation:`

Bundling multiple JavaScript files ko combine karke optimized output file create karta hai.

`Interview Answer:`

Bundling combines multiple source files into one or more optimized files for deployment.

Example:

```text
app.js
utils.js
↓
bundle.js
```

---

114. Webpack kya karta hai?

`Hinglish Explanation:`

Webpack module bundler hai jo JavaScript, CSS aur assets ko process aur optimize karta hai.

`Interview Answer:`

Webpack is a module bundler that builds, optimizes, and packages application assets.

Example:

```javascript
module.exports = {
  entry: "./src/index.js"
};
```

---

115. Code splitting?

`Hinglish Explanation:`

Code Splitting application bundle ko chhote chunks me divide karta hai taaki initial load fast ho.

`Interview Answer:`

Code Splitting breaks applications into smaller bundles that are loaded only when needed.

Example:

```javascript
import("./Dashboard");
```

---

116. Lazy loading?

`Hinglish Explanation:`

Lazy Loading resources ko tab load karti hai jab unki zarurat hoti hai, initial page load ko fast banati hai.

`Interview Answer:`

Lazy Loading delays loading of resources until they are actually required.

Example:

```javascript
const module =
  await import("./module");
```

---

117. Hot reload?

`Hinglish Explanation:`

Hot Reload development me changes ko browser me instantly reflect karta hai bina full page refresh ke.

`Interview Answer:**

Hot Reload updates application modules in real time while preserving application state.

Example:

```text
Save File
↓
UI Updated
```

---

118. Source maps kya hain?

`Hinglish Explanation:`

Source Maps minified ya transpiled code ko original source code se map karte hain taaki debugging easy ho.

`Interview Answer:`

Source Maps help developers debug transformed code by mapping it back to the original source files.

Example:

```javascript
//# sourceMappingURL=app.js.map
```

---

119. Security issues JS mein?

`Hinglish Explanation:`

Common security issues me XSS, CSRF, Injection attacks aur insecure data storage shamil hain.

`Interview Answer:`

Common JavaScript security risks include XSS, CSRF, code injection, and exposure of sensitive client-side data.

Example:

```javascript
element.textContent =
  userInput;
```

---

120. Best practices JS coding?

`Hinglish Explanation:`

Meaningful variable names, modular code, error handling, immutability aur consistent formatting follow karna best practices hain.

`Interview Answer:`

JavaScript best practices include writing clean, modular, maintainable code, handling errors properly, and following consistent coding standards.

Example:

```javascript
const getUserName = user =>
  user.name;
```


---

## ⚛️ React (121-220)

121. React kya hai?

        `Hinglish Explanation:`

        React ek JavaScript library hai jo UI (User Interface) banane ke liye use hoti hai. Yeh component-based architecture follow karti hai aur Virtual DOM use karke fast rendering provide karti hai.

        `Interview Answer:`

        React is a JavaScript library developed by Meta for building reusable and interactive user interfaces. It uses a component-based architecture and Virtual DOM for efficient rendering.

        Example:

        ```javascript
           function App() {
            return <h1>Hello React</h1>;
            }
        ```

122. JSX kya hai?

        `Hinglish Explanation:`

        JSX JavaScript XML hai. Isse hum JavaScript ke andar HTML jaisa code likh sakte hain. Browser JSX ko directly nahi samajhta, Babel ise JavaScript me convert karta hai.

        `Interview Answer:`

        JSX is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript. It gets transpiled into React.createElement calls.

        Example:

        ```javascript
           const element = <h1>Hello</h1>;
        ```

123. Virtual DOM?

        `Hinglish Explanation:`

        Virtual DOM React ka lightweight copy of Real DOM hota hai. Jab state ya props change hote hain, React pehle Virtual DOM update karta hai aur phir difference find karke sirf required changes Real DOM me karta hai.

        `Interview Answer:`

        Virtual DOM is a lightweight JavaScript representation of the Real DOM. React compares Virtual DOM changes and updates only the necessary parts of the Real DOM.

        Example:

        ```javascript
           setCount(count + 1);
        ```


124. Real DOM vs Virtual DOM?

        `Hinglish Explanation:`

        | Real DOM                          | Virtual DOM                         |
        | --------------------------------- | ----------------------------------- |
        | Browser ka actual DOM             | Memory me virtual copy              |
        | Slow updates                      | Fast updates                        |
        | Entire DOM re-render ho sakta hai | Only changed parts update hote hain |

        `Interview Answer:`

        Real DOM is the actual browser DOM, while Virtual DOM is a lightweight copy maintained by React. Virtual DOM improves performance by minimizing direct DOM manipulations.

        Example:

        ```javascript
           setName("Raj");
        ```

125. Components kya hote hain?

        `Hinglish Explanation:`

        Components React ke reusable building blocks hote hain. Har component UI ka ek independent part represent karta hai.

        `Interview Answer:`

        Components are reusable and independent pieces of UI that help build complex interfaces in a modular way.

        Example:

        ```javascript
           function Header() {
                return <h1>Header</h1>;
            }
        ```

126. Functional vs class components?

        `Hinglish Explanation:`

        Functional Component

            * Simple function hota hai
            * Hooks use kar sakta hai
            * Modern React me preferred

        Class Component

            * ES6 class hoti hai
            * Lifecycle methods use karti hai
            * Hooks support nahi karti

        `Interview Answer:`

        Functional components are JavaScript functions that return JSX and support Hooks. Class components are ES6 classes that use lifecycle methods and state management.

        Example:

        ```javascript
            // Functional
            function App() {
            return <h1>Hello</h1>;
            }
            // Class
            class App extends React.Component {
            render() {
                return <h1>Hello</h1>;
            }
            }
        ```

127. Props kya hain?

        `Hinglish Explanation:`

        Props parent component se child component ko data pass karne ke liye use hote hain. Props read-only hote hain.

        `Interview Answer:`

        Props are read-only inputs passed from a parent component to a child component for data communication.

        Example:

        ```javascript
            function User(props) {
            return <h1>{props.name}</h1>;
            }

            <User name="Raj" />
        ```

128. State kya hai?

        `Hinglish Explanation:`

        State component ka internal data hota hai jo time ke saath change ho sakta hai. State update hone par component re-render hota hai.

        `Interview Answer:`

        State is a component's internal data that can change over time and triggers re-rendering when updated.

        Example:

        ```javascript
            const [count, setCount] = useState(0);
        ```

129. Controlled components?

        `Hinglish Explanation:`

        Jab form input ki value React state se control hoti hai tab use Controlled Component kehte hain.

        `Interview Answer:`

        A controlled component is a form element whose value is controlled by React state.

        Example:

        ```javascript
            const [name, setName] = useState("");
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        ```

130. Uncontrolled components?

        `Hinglish Explanation:`

        Jab form data React state ke bajaye DOM khud manage karta hai tab use Uncontrolled Component kehte hain.

        `Interview Answer:`

        An uncontrolled component stores its own state in the DOM and is usually accessed using refs.

        Example:

        ```javascript
           const inputRef = useRef();

            <input ref={inputRef} />
        ```

131. Keys ka use?

        `Hinglish Explanation:`

        Keys React ko identify karne me help karti hain ki list me kaunsa item add, remove ya update hua hai.

        `Interview Answer:`

        Keys help React identify list items uniquely and optimize rendering during updates.

        Example:

        ```javascript
           items.map(item =>
                <li key={item.id}>{item.name}</li>
            )
        ```


132. Lists render kaise?

        `Hinglish Explanation:`

        React me array ko map() function ki help se render kiya jata hai.

        `Interview Answer:`

        Lists are rendered by iterating over arrays using the map() method and returning JSX elements.

        Example:

        ```javascript
           users.map(user =>
                <p key={user.id}>{user.name}</p>
            )
        ```

133. Conditional rendering?

        `Hinglish Explanation:`

        Condition ke basis par different UI show karna conditional rendering kehlata hai.

        `Interview Answer`:

        Conditional rendering allows components to render different UI based on conditions.

        Example:

        ```javascript
           {isLoggedIn ? <Home /> : <Login />}
        ```


134. Forms handle kaise?

        `Hinglish Explanation:`

        Forms ko generally state aur onChange event ke through handle kiya jata hai.

        `Interview Answer:`

        Forms are commonly handled using controlled components with state and event handlers.

        Example:

        ```javascript
           const [email, setEmail] = useState("");
        ```

135. Events React mein?

        `Hinglish Explanation:`

        React browser events ko handle karne ke liye event handlers provide karta hai jaise onClick, onChange, onSubmit.

        `Interview Answer:`

        React handles user interactions through event handlers such as onClick, onChange, and onSubmit.

        Example:

        ```javascript
           <button onClick={handleClick}>
                Click
            </button>
        ```

136. Synthetic events kya hain?

        `Hinglish Explanation:`

        Synthetic Event React ka wrapper hota hai jo browser events ko cross-browser compatible banata hai.

        `Interview Answer`

        Synthetic Events are React's cross-browser wrappers around native browser events.

        Example:

        ```javascript
           function handleClick(event) {
                console.log(event.target);
            }
        ```

137. Lifecycle methods?

        `Hinglish Explanation:`

        Lifecycle methods component ke different stages (mount, update, unmount) par execute hote hain.

        `Interview Answer:`

        React Lifecycle Methods are special methods in Class Components that execute during Mounting, Updating, and Unmounting phases. Common methods include componentDidMount for API calls, componentDidUpdate for handling updates, and componentWillUnmount for cleanup. In modern React, lifecycle behavior is typically handled using the useEffect hook in Functional Components.

        Example:

        ```javascript
           componentDidMount() {
                console.log("Mounted");
            }
        ```

138. Mounting kya hai?

        `Hinglish Explanation:`

        Jab component first time DOM me add hota hai use Mounting kehte hain.

        `Interview Answer:`

        Mounting is the process when a component is created and inserted into the DOM.

        Example:

        ```javascript
           useEffect(() => {
            console.log("Mounted");
            }, []);
        ```

139. Updating kya hai?

        `Hinglish Explanation:`

        State ya props change hone par component re-render hota hai, ise Updating kehte hain.

        `Interview Answer:`

        Updating occurs when a component re-renders due to changes in state or props.

        Example:

        ```javascript
           setCount(count + 1);
        ```

140. Unmounting kya hai?

        `Hinglish Explanation:`

        Jab component DOM se remove hota hai use Unmounting kehte hain.

        `Interview Answer:`

        Unmounting is the process of removing a component from the DOM.

        Example:

        ```javascript
           useEffect(() => {
            return () => console.log("Unmount");
            }, []);
        ```

141. Hooks kya hain?

        `Hinglish Explanation:`

        Hooks functional components me state aur lifecycle features use karne ki facility dete hain.

        `Interview Answer:`

        Hooks are functions that allow functional components to use state and lifecycle features.

        Example:

        ```javascript
           const [count, setCount] = useState(0);
        ```


142. useState?

        `Hinglish Explanation:`

        useState component me state create aur update karne ke liye use hota hai.

        `Interview Answer:`

        useState is a Hook used to add and manage state in functional components.

        Example:

        ```javascript
           const [count, setCount] = useState(0);
        ```

143. useEffect?

        `Hinglish Explanation:`

        Side effects jaise API calls, subscriptions aur timers handle karne ke liye useEffect use hota hai.

        `Interview Answer:`

        useEffect is used to perform side effects such as API calls, subscriptions, and DOM updates.

        Example:

        ```javascript
           useEffect(() => {
            fetchData();
            }, []);
        ```

144. useRef?

        `Hinglish Explanation:`

        useRef ek React Hook hai jo value ko store karta hai bina component ko re-render kiye. Iska use mostly DOM elements ko access karne ya aisi values store karne ke liye hota hai jo UI me show nahi hoti.

        `Interview Answer:`

        useRef is a React Hook used to store mutable values and access DOM elements. Unlike useState, updating a ref does not cause a component re-render. It is commonly used for DOM manipulation, storing previous values, timers, and keeping data between renders

        Example:

        ```javascript
           //DOM Element Access
          import { useRef } from "react";

          function App() {
            const inputRef = useRef();

            const focusInput = () => {
              inputRef.current.focus();
            };

            return (
              <>
                <input ref={inputRef} />
                <button onClick={focusInput}>
                  Focus
                </button>
              </>
            );
          }
          //Store Value Without Re-render
          import { useRef } from "react";

          function App() {
            const countRef = useRef(0);

            const handleClick = () => {
              countRef.current++;
              console.log(countRef.current);
            };

            return (
              <button onClick={handleClick}>
                Click
              </button>
            );
          }
        ```

145. useMemo?

        `Hinglish Explanation:`

        Expensive calculation ko memoize karke unnecessary recalculation se bachata hai.

        `Interview Answer:`

        useMemo memoizes computed values and recalculates them only when dependencies change.

        Example:

        ```javascript
           const total = useMemo(() => {
            return calculate();
            }, [data]);
        ```


146. useCallback?

        `Hinglish Explanation:`

        useCallback function ko memoize karta hai. Jab component re-render hota hai to function dobara create nahi hota jab tak dependencies change na ho. Ye unnecessary child re-renders avoid karne me help karta hai.

        `Interview Answer:`

        useCallback is a React Hook that memoizes a function and returns the same function instance between renders unless its dependencies change. It is mainly used for performance optimization.

        Example:

        ```javascript
           const handleClick = useCallback(() => {
            console.log("Clicked");
            }, []);
        ```

147. useReducer?

        `Hinglish Explanation:`

        Jab state complex ho ya multiple related state updates hon, tab useReducer use karte hain. Ye Redux ke reducer concept jaisa kaam karta hai.

        `Interview Answer:`

        useReducer is a Hook used for managing complex state logic. It works with a reducer function and dispatch actions to update state predictably.

        Example:

        ```javascript
           const [state, dispatch] = useReducer(reducer, 0);
           dispatch({ type: "increment" });
        ```


148. Custom hooks?

        `Hinglish Explanation:`

        Custom Hook ek reusable function hota hai jo multiple components me common Hook logic share karne ke liye banaya jata hai. Iska naam hamesha use se start hona chahiye.

        `Interview Answer:`

        Custom Hooks are reusable JavaScript functions that encapsulate React Hook logic and allow sharing stateful behavior across components.

        Example:

        ```javascript
           function useCounter() {
            const [count, setCount] = useState(0);
            return { count, setCount };
            }
        ```

149. Rules of hooks?

        `Hinglish Explanation:`

        Hooks ko sirf React functional components ya custom hooks ke andar call karna chahiye. Hooks ko loops, conditions ya nested functions ke andar nahi likhna chahiye.

        `Interview Answer:`

        Hooks must be called only at the top level of React functional components or custom Hooks. They should never be called conditionally or inside loops.

        Example:

        ```javascript
           // ❌ Wrong
            if (show) {
            useState(0);
            }
        ```

150. Dependency array issues?

        `Hinglish Explanation:`

        Dependency array galat dene se stale data, unnecessary API calls ya missing updates ho sakte hain. Har used dependency ko include karna best practice hai.

        `Interview Answer:`

        Incorrect dependency arrays can cause stale closures, missed updates, or excessive re-executions. React recommends including all referenced dependencies.

        Example:

        ```javascript
           useEffect(() => {
            fetchData(id);
            }, [id]);
        ```

151. Infinite loop useEffect mein?

`Hinglish Explanation:`

Agar useEffect ke andar state update ho aur dependency array me wahi state ho, to effect baar-baar run hota rahega aur infinite loop create ho jayega.

`Interview Answer:`

An infinite loop occurs when an effect updates a state value that is also present in its dependency array, causing the effect to run repeatedly.

Example:

```javascript
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

---

152. Cleanup function?

`Hinglish Explanation:`

Cleanup function component unmount hone ya effect dobara run hone se pehle execute hota hai. Ye memory leaks aur unwanted subscriptions ko remove karne ke liye use hota hai.

`Interview Answer:`

A cleanup function is returned from useEffect and is used to clean up resources such as timers, event listeners, or subscriptions.

Example:

```javascript
useEffect(() => {
  const timer = setInterval(() => {}, 1000);

  return () => clearInterval(timer);
}, []);
```

---

153. React.memo?

`Hinglish Explanation:`

React.memo component ko memoize karta hai. Agar props change nahi hote to component dobara render nahi hota.

`Interview Answer:`

React.memo is a higher-order component that prevents unnecessary re-renders by memoizing the component output based on props.

Example:

```javascript
export default React.memo(User);
```

---

154. Re-render kaise hota hai?

`Hinglish Explanation:`

Component re-render tab hota hai jab state change ho, props change ho ya parent component re-render ho.

`Interview Answer:`

A React component re-renders when its state changes, props change, or its parent triggers a render cycle.

Example:

```javascript
setCount(count + 1);
```

---

155. Re-render kaise avoid kare?

`Hinglish Explanation:`

Unnecessary re-renders ko React.memo, useMemo, useCallback aur proper state management se reduce kiya ja sakta hai.

`Interview Answer:`

Unnecessary re-renders can be avoided using memoization techniques like React.memo, useMemo, and useCallback.

Example:

```javascript
const total = useMemo(() => calculate(), [data]);
```

---

156. Context API?

`Hinglish Explanation:`

Context API global data share karne ke liye use hoti hai bina props drilling ke. Ye theme, authentication aur language settings ke liye useful hai.

`Interview Answer:`

Context API provides a way to share data across components without manually passing props through every level.

Example:

```javascript
const ThemeContext = createContext();
```

---

157. Redux kya hai?

`Hinglish Explanation:`

Redux ek centralized state management library hai jo application state ko single store me maintain karti hai.

`Interview Answer:`

Redux is a predictable state management library that stores application state in a centralized store and updates it through actions and reducers.

Example:

```javascript
dispatch({ type: "ADD_TODO" });
```

---

158. Redux vs Context?

`Hinglish Explanation:`

Context simple global state ke liye suitable hai, jabki Redux complex state management aur middleware support provide karta hai.

`Interview Answer:`

Context API is best for lightweight global state, whereas Redux is suitable for complex state management with middleware and debugging tools.

Example:

```javascript
// Context → Theme
// Redux → Shopping Cart
```

---

159. Middleware Redux mein?

`Hinglish Explanation:`

Middleware action aur reducer ke beech execute hota hai aur async operations ya logging handle karta hai.

`Interview Answer:`

Middleware intercepts actions before they reach reducers and is commonly used for logging, API calls, and asynchronous logic.

Example:

```javascript
const logger = store => next => action => {
  console.log(action);
  next(action);
};
```

---

160. Thunk vs Saga?

`Hinglish Explanation:`

Thunk simple async operations ke liye use hota hai, jabki Saga complex side effects aur workflows ko manage karta hai.

`Interview Answer:`

Redux Thunk uses functions for asynchronous logic, while Redux Saga uses generator functions to handle complex side effects.

Example:

```javascript
// Thunk
dispatch(fetchUsers());

// Saga
yield call(fetchUsers);
```

---

161. Zustand kya hai?

`Hinglish Explanation:`

Zustand ek lightweight state management library hai jisme Redux ke comparison me bahut kam boilerplate hota hai.

`Interview Answer:`

Zustand is a minimal state management library that provides global state management with a simple API and less boilerplate.

Example:

```javascript
const useStore = create(set => ({
  count: 0
}));
```

---

162. Recoil kya hai?

`Hinglish Explanation:`

Recoil React ke liye state management library hai jo atoms aur selectors ka use karti hai.

`Interview Answer:`

Recoil is a React state management library that manages shared state using atoms and derived state using selectors.

Example:

```javascript
const countAtom = atom({
  key: "count",
  default: 0
});
```

---

163. Code splitting?

`Hinglish Explanation:`

Code splitting bundle ko chhote chunks me divide karta hai jisse initial loading fast ho jati hai.

`Interview Answer:`

Code splitting breaks an application bundle into smaller chunks that can be loaded on demand, improving performance.

Example:

```javascript
const Home = React.lazy(() =>
  import("./Home")
);
```

---

164. Lazy loading?

`Hinglish Explanation:`

Lazy loading resources ya components ko tab load karta hai jab unki zarurat padti hai.

`Interview Answer:`

Lazy loading delays loading of components until they are actually required, reducing initial load time.

Example:

```javascript
const About = React.lazy(() =>
  import("./About")
);
```

---

165. Suspense?

`Hinglish Explanation:`

Suspense lazy loaded component ke load hone tak fallback UI show karta hai.

`Interview Answer:`

Suspense displays a fallback UI while React waits for lazy-loaded components or asynchronous operations to complete.

Example:

```javascript
<Suspense fallback={<p>Loading...</p>}>
  <About />
</Suspense>
```

---

166. Error boundaries?

`Hinglish Explanation:`

Error Boundary component tree me JavaScript errors catch karta hai aur fallback UI display karta hai.

`Interview Answer:`

Error Boundaries catch runtime errors in React components and display a fallback UI instead of crashing the application.

Example:

```javascript
componentDidCatch(error) {
  console.log(error);
}
```

---

167. Portals kya hain?

`Hinglish Explanation:`

Portals component ko parent DOM hierarchy ke bahar render karne ki facility dete hain. Ye mostly modals, tooltips aur popups ke liye use hote hain.

`Interview Answer:`

Portals allow rendering components outside the parent DOM hierarchy while maintaining the React component tree.

Example:

```javascript
ReactDOM.createPortal(
  <Modal />,
  document.body
);
```

---

168. Fragments kya hain?

`Hinglish Explanation:`

Fragments extra DOM node create kiye bina multiple elements return karne dete hain. Isse DOM clean rehta hai.

`Interview Answer:`

Fragments allow grouping multiple elements without adding extra nodes to the DOM.

Example:

```javascript
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

169. StrictMode kya hai?

`Hinglish Explanation:`

StrictMode development mode me potential problems aur unsafe practices identify karta hai. Production build me iska koi impact nahi hota.

`Interview Answer:`

StrictMode is a development tool that highlights potential issues and deprecated practices in React applications.

Example:

```javascript
<React.StrictMode>
  <App />
</React.StrictMode>
```

---

170. DevTools ka use?

`Hinglish Explanation:`

React DevTools se components, props, state, hooks aur performance inspect kiye ja sakte hain. Debugging ke liye ye bahut useful tool hai.

`Interview Answer:`

React DevTools is a browser extension used for inspecting component trees, state, props, hooks, and performance.

Example:

```javascript
Inspect Component
→ View State
→ View Props
→ Profile Performance
```


171. SSR kya hai?

`Hinglish Explanation:`

SSR (Server-Side Rendering) me HTML server par generate hota hai aur browser ko ready-made page milta hai. Isse SEO aur initial page load improve hota hai.

`Interview Answer:`

Server-Side Rendering (SSR) generates HTML on the server and sends it to the client. It improves SEO and initial page load performance.

Example:

```javascript
export async function getServerSideProps() {
  return { props: {} };
}
```

---

172. CSR kya hai?

`Hinglish Explanation:`

CSR (Client-Side Rendering) me browser JavaScript download karta hai aur UI render karta hai. React applications by default CSR use karti hain.

`Interview Answer:`

Client-Side Rendering (CSR) renders content in the browser using JavaScript after the initial page load.

Example:

```javascript
ReactDOM.createRoot(root).render(<App />);
```

---

173. Hydration kya hai?

`Hinglish Explanation:`

Hydration process me React server-rendered HTML ko interactive banata hai aur event handlers attach karta hai.

`Interview Answer:`

Hydration is the process where React attaches event listeners and makes server-rendered HTML interactive.

Example:

```javascript
hydrateRoot(document.getElementById("root"), <App />);
```

---

174. Next.js kya hai?

`Hinglish Explanation:`

Next.js React framework hai jo SSR, SSG, API routes, routing aur performance optimizations provide karta hai.

`Interview Answer:`

Next.js is a React framework that provides SSR, SSG, routing, API routes, and built-in performance optimizations.

Example:

```javascript
export default function Home() {
  return <h1>Home Page</h1>;
}
```

---

175. Routing kaise hoti hai?

`Hinglish Explanation:`

React me routing React Router ya Next.js file-based routing ke through hoti hai.

`Interview Answer:`

Routing allows navigation between pages or views without reloading the browser.

Example:

```javascript
<Route path="/about" element={<About />} />
```

---

176. Dynamic routing?

`Hinglish Explanation:`

Dynamic routing me URL parameters use karke dynamic pages create kiye jate hain.

`Interview Answer:`

Dynamic routing allows routes to be generated using dynamic parameters from the URL.

Example:

```javascript
<Route path="/user/:id" element={<User />} />
```

---

177. SEO React mein?

`Hinglish Explanation:`

SEO improve karne ke liye SSR, meta tags, structured data aur proper headings use karte hain.

`Interview Answer:`

SEO in React can be improved using SSR, meta tags, structured data, and semantic HTML.

Example:

```javascript
<Helmet>
  <title>Home Page</title>
</Helmet>
```

---

178. Accessibility?

`Hinglish Explanation:`

Accessibility ka purpose application ko sab users ke liye usable banana hai, including users with disabilities.

`Interview Answer:`

Accessibility ensures that web applications can be used by people with disabilities through semantic HTML and ARIA attributes.

Example:

```javascript
<button aria-label="Close">
  X
</button>
```

---

179. Testing React?

`Hinglish Explanation:`

React testing ka use components, user interactions aur business logic verify karne ke liye hota hai.

`Interview Answer:`

React testing ensures components behave correctly by validating rendering, interactions, and application logic.

Example:

```javascript
render(<App />);
```

---

180. Jest kya hai?

`Hinglish Explanation:`

Jest ek JavaScript testing framework hai jo unit testing aur mocking provide karta hai.

`Interview Answer:`

Jest is a JavaScript testing framework used for unit testing, mocking, and assertions.

Example:

```javascript
test("sum", () => {
  expect(1 + 1).toBe(2);
});
```

---

181. React Testing Library?

`Hinglish Explanation:`

React Testing Library user perspective se components test karne ke liye use hoti hai.

`Interview Answer:`

React Testing Library focuses on testing components the way users interact with them.

Example:

```javascript
render(<Button />);
screen.getByText("Submit");
```

---

182. Snapshot testing?

`Hinglish Explanation:`

Snapshot testing component ke rendered output ka snapshot save karta hai aur future changes compare karta hai.

`Interview Answer:`

Snapshot testing compares the current rendered output against a previously stored snapshot.

Example:

```javascript
expect(tree).toMatchSnapshot();
```

---

183. Mocking?

`Hinglish Explanation:`

Mocking external dependencies jaise APIs ya functions ko replace karta hai taaki tests isolated rahein.

`Interview Answer:`

Mocking replaces real implementations with fake ones to isolate and test specific functionality.

Example:

```javascript
jest.mock("./api");
```

---

184. Performance optimization?

`Hinglish Explanation:`

Performance optimize karne ke liye memoization, lazy loading, code splitting aur virtualization use karte hain.

`Interview Answer:`

Performance optimization involves reducing unnecessary renders, minimizing bundle size, and improving loading speed.

Example:

```javascript
const value = useMemo(() => calc(), []);
```

---

185. Bundle size reduce kaise?

`Hinglish Explanation:`

Bundle size code splitting, tree shaking aur lazy loading se reduce ki ja sakti hai.

`Interview Answer:`

Bundle size can be reduced using code splitting, tree shaking, lazy loading, and removing unused dependencies.

Example:

```javascript
const Page = React.lazy(() =>
  import("./Page")
);
```

---

186. Memoization React mein?

`Hinglish Explanation:`

Memoization expensive calculations ya functions ko cache karke unnecessary recalculations avoid karta hai.

`Interview Answer:`

Memoization stores computed results and reuses them until dependencies change.

Example:

```javascript
const result = useMemo(() => {
  return compute();
}, [data]);
```

---

187. Virtualization kya hai?

`Hinglish Explanation:`

Virtualization large lists me sirf visible items render karti hai jisse performance improve hoti hai.

`Interview Answer:`

Virtualization improves performance by rendering only visible items instead of the entire list.

Example:

```javascript
<FixedSizeList
  height={500}
  itemCount={10000}
/>
```

---

188. Large list rendering?

`Hinglish Explanation:`

Large lists render karte waqt pagination, infinite scroll ya virtualization use karni chahiye.

`Interview Answer:`

Large lists should be optimized using pagination, infinite scrolling, or virtualization techniques.

Example:

```javascript
users.map(user => (
  <User key={user.id} />
));
```

---

189. Lazy components?

`Hinglish Explanation:`

Lazy components tab load hote hain jab unki zarurat padti hai, initial bundle me nahi.

`Interview Answer:`

Lazy components are loaded only when required, reducing the initial application bundle size.

Example:

```javascript
const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
```

---

190. Image optimization?

`Hinglish Explanation:`

Image optimization me resizing, compression aur lazy loading use ki jati hai taaki page fast load ho.

`Interview Answer:`

Image optimization improves performance by reducing image size and loading images only when needed.

Example:

```javascript
<img
  loading="lazy"
  src="image.jpg"
/>
```

---

191. Folder structure kaise?

`Hinglish Explanation:`

Folder structure scalable aur feature-based honi chahiye jisse maintenance easy rahe.

`Interview Answer:`

A good folder structure separates components, pages, hooks, services, and utilities for better scalability.

Example:

```text
src/
 ├─ components/
 ├─ pages/
 ├─ hooks/
 ├─ services/
```

---

192. Scalable architecture?

`Hinglish Explanation:`

Scalable architecture modular design, reusable components aur clear separation of concerns follow karti hai.

`Interview Answer:`

Scalable architecture focuses on modularity, maintainability, and separation of concerns.

Example:

```text
features/
shared/
services/
```

---

193. Design patterns React mein?

`Hinglish Explanation:`

React me commonly Container-Presentational, Custom Hooks, HOC aur Render Props patterns use hote hain.

`Interview Answer:`

Design patterns provide reusable solutions for organizing code and improving maintainability.

Example:

```javascript
function UserList() {
  return <Users />;
}
```

---

194. HOC kya hai?

`Hinglish Explanation:`

HOC (Higher Order Component) ek function hai jo component ko input leta hai aur enhanced component return karta hai.

`Interview Answer:`

A Higher-Order Component is a function that takes a component and returns a new component with additional functionality.

Example:

```javascript
const Enhanced = withAuth(Dashboard);
```

---

195. Render props?

`Hinglish Explanation:`

Render Props pattern me component ek function prop receive karta hai aur us function ke through UI render karta hai.

`Interview Answer:`

Render Props is a pattern where a component shares logic by passing a function as a prop that returns UI.

Example:

```javascript
<DataProvider
  render={(data) => <User data={data} />}
/>
```

196. Hooks vs HOC?

`Hinglish Explanation:`

Hooks aur HOC dono reusable logic share karne ke liye use hote hain. Modern React me Hooks preferred hain kyunki code readable aur maintainable hota hai.

`Interview Answer:`

Hooks provide a cleaner and more intuitive way to reuse stateful logic compared to Higher-Order Components, which can lead to wrapper nesting.

Example:

```javascript
function useAuth() {
  return true;
}
```

---

197. Micro Frontends?

`Hinglish Explanation:`

Micro Frontends me large frontend application ko multiple independent applications me divide kiya jata hai jo alag teams maintain kar sakti hain.

`Interview Answer:`

Micro Frontends extend the microservices concept to frontend development by splitting a large application into independently deployable frontend modules.

Example:

```text
Shell App
├── Auth App
├── Dashboard App
└── Profile App
```

---

198. Monorepo kya hai?

`Hinglish Explanation:`

Monorepo ek single repository hoti hai jisme multiple applications aur shared packages maintain kiye jate hain.

`Interview Answer:`

A Monorepo is a single repository that contains multiple projects, applications, or packages managed together.

Example:

```text
apps/
packages/
shared/
```

---

199. Deployment React app?

`Hinglish Explanation:`

React application ko build karke Vercel, Netlify, AWS ya any hosting platform par deploy kiya jata hai.

`Interview Answer:`

React applications are typically deployed by generating a production build and hosting the static assets on a web server or cloud platform.

Example:

```bash
npm run build
```

---

200. Env variables React mein?

`Hinglish Explanation:`

Environment variables sensitive configurations aur environment-specific values store karne ke liye use hoti hain.

`Interview Answer:`

Environment variables allow configuration values such as API URLs and feature flags to be managed outside the source code.

Example:

```javascript
const api = process.env.REACT_APP_API_URL;
```

---

201. Build process?

`Hinglish Explanation:`

Build process source code ko optimized production-ready bundle me convert karta hai.

`Interview Answer:`

The build process transpiles, bundles, minifies, and optimizes application code for production deployment.

Example:

```bash
npm run build
```

---

202. CI/CD React?

`Hinglish Explanation:`

CI/CD automatically code build, test aur deploy karta hai jisse releases fast aur reliable bante hain.

`Interview Answer:`

CI/CD automates the process of integrating, testing, and deploying code changes to improve delivery speed and reliability.

Example:

```yaml
build:
test:
deploy:
```

---

203. Security React?

`Hinglish Explanation:`

React applications me XSS prevention, authentication, authorization aur secure API communication important hote hain.

`Interview Answer:`

React security involves preventing XSS attacks, securing authentication flows, validating input, and protecting sensitive data.

Example:

```javascript
const name = userInput;
```

---

204. XSS prevent kaise?

`Hinglish Explanation:`

React by default content escape karta hai. `dangerouslySetInnerHTML` ka use carefully karna chahiye aur input sanitize karna chahiye.

`Interview Answer:`

XSS can be prevented by sanitizing user input and avoiding unsafe HTML rendering with dangerouslySetInnerHTML.

Example:

```javascript
<div>{userInput}</div>
```

---

205. Form validation?

`Hinglish Explanation:`

Form validation user input ko verify karti hai taaki invalid ya incomplete data submit na ho.

`Interview Answer:`

Form validation ensures that user input meets business and data integrity requirements before submission.

Example:

```javascript
if (!email) {
  setError("Required");
}
```

---

206. State normalization?

`Hinglish Explanation:`

State normalization me nested data ko flat structure me store kiya jata hai taaki updates aur lookups efficient ho sakein.

`Interview Answer:`

State normalization organizes data into flat structures to reduce duplication and simplify updates.

Example:

```javascript
{
  users: {
    1: { id: 1, name: "Raj" }
  }
}
```

---

207. API calls best practices?

`Hinglish Explanation:`

API calls ko services me rakhna, loading/error states handle karna aur unnecessary requests avoid karna best practice hai.

`Interview Answer:`

API calls should be centralized, include proper error handling, and manage loading and caching efficiently.

Example:

```javascript
const data = await fetch("/api/users");
```

---

208. Error handling?

`Hinglish Explanation:`

Application me API errors, validation errors aur unexpected exceptions ko gracefully handle karna chahiye.

`Interview Answer:`

Error handling improves user experience by catching failures and displaying meaningful feedback.

Example:

```javascript
try {
  await fetchData();
} catch (error) {
  console.error(error);
}
```

---

209. Loading states?

`Hinglish Explanation:`

Loading state user ko batati hai ki data fetch ya operation process me hai.

`Interview Answer:`

Loading states provide visual feedback while asynchronous operations are in progress.

Example:

```javascript
if (loading) {
  return <Spinner />;
}
```

---

210. Skeleton UI?

`Hinglish Explanation:`

Skeleton UI actual content ke load hone tak placeholder layout show karti hai.

`Interview Answer:`

Skeleton screens improve perceived performance by displaying content placeholders during loading.

Example:

```javascript
<Skeleton height={50} />
```

---

211. Offline support?

`Hinglish Explanation:`

Offline support application ko internet unavailable hone par bhi kuch functionality provide karne deti hai.

`Interview Answer:`

Offline support enables users to access cached content and functionality without an internet connection.

Example:

```javascript
navigator.onLine;
```

---

212. PWA kya hai?

`Hinglish Explanation:`

PWA (Progressive Web App) web application ko app-like experience provide karti hai including offline support and installability.

`Interview Answer:`

A Progressive Web App combines web technologies with native app features such as offline access and home-screen installation.

Example:

```json
{
  "name": "My App"
}
```

---

213. Service worker React?

`Hinglish Explanation:`

Service Worker background me run hota hai aur caching, offline support aur push notifications provide karta hai.

`Interview Answer:`

A Service Worker is a background script that enables caching, offline capabilities, and background tasks.

Example:

```javascript
navigator.serviceWorker.register("/sw.js");
```

---

214. Caching strategies?

`Hinglish Explanation:`

Caching strategies application performance improve karti hain by reducing repeated network requests.

`Interview Answer:`

Caching strategies determine how and when resources are stored and retrieved to improve performance and reliability.

Example:

```text
Cache First
Network First
Stale While Revalidate
```

---

215. Feature flags?

`Hinglish Explanation:`

Feature flags new features ko deploy karne aur selectively enable/disable karne ke liye use hote hain.

`Interview Answer:`

Feature flags allow features to be enabled or disabled without redeploying the application.

Example:

```javascript
if (featureEnabled) {
  showNewUI();
}
```

---

216. A/B testing?

`Hinglish Explanation:`

A/B testing me users ko different versions dikhakar performance compare ki jati hai.

`Interview Answer:`

A/B testing compares multiple variations of a feature or UI to determine which performs better.

Example:

```javascript
variant === "A"
  ? <OldUI />
  : <NewUI />;
```

---

217. Internationalization?

`Hinglish Explanation:`

Internationalization (i18n) application ko multiple languages aur regions support karne layak banata hai.

`Interview Answer:`

Internationalization enables applications to support multiple languages and regional formats.

Example:

```javascript
t("welcome");
```

---

218. Dark mode implementation?

`Hinglish Explanation:`

Dark mode theme switching aur CSS classes ke through implement kiya jata hai.

`Interview Answer:`

Dark mode is typically implemented by toggling themes and applying different styles based on user preference.

Example:

```javascript
document.body.classList.toggle("dark");
```

---

219. Theming?

`Hinglish Explanation:`

Theming application ke colors, typography aur styling ko centrally manage karne ka approach hai.

`Interview Answer:`

Theming provides a centralized way to manage and switch application styles consistently.

Example:

```javascript
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

---

220. Best practices React?

`Hinglish Explanation:`

Reusable components, proper state management, lazy loading, error handling aur clean folder structure React ki important best practices hain.

`Interview Answer:`

React best practices include component reusability, clean architecture, proper state management, performance optimization, and effective testing.

Example:

```javascript
// Keep components small
// Reuse logic with hooks
// Avoid unnecessary re-renders
```


### Additional Important Questions

1. # Explain the React reconciliation algorithm.

`Hinglish Explanation:`

## Kya hain?

  React Reconciliation React ka internal process hai jo state ya props change hone par old Virtual DOM aur new Virtual DOM ko compare karta hai. React directly Real DOM ko manipulate nahi karta kyunki DOM operations expensive hote hain. Reconciliation ka purpose minimum DOM updates find karna hota hai taaki UI efficiently update ho sake.

## Kaun se problem par based hain?

  Agar application me thousands of DOM elements ho aur sirf ek element change ho, to pura DOM recreate karna expensive hoga. Browser rendering, layout calculation aur repaint operations performance ko impact kar sakte hain.

  React ne is problem ko solve karne ke liye Virtual DOM aur Reconciliation introduce kiya.

  Example:

  ```jsx
  <h1>Hello</h1>
  ```

  Updated:

  ```jsx
  <h1>Hello Raj</h1>
  ```

  Yaha React sirf text node update karega, pura DOM recreate nahi karega.

## Kaise work karta hain?

  Jab state ya props change hote hain, React naya Virtual DOM create karta hai aur usko previous Virtual DOM se compare karta hai.

  React Diffing Algorithm use karta hai jo kuch assumptions par based hota hai:

  - Different element types ⇒ subtree recreate
  - Same element types ⇒ existing DOM reuse
  - Lists me keys ke basis par matching
  - Approximate comparison complexity O(n)

  React 16 ke baad ye process Fiber Architecture ke through execute hota hai jo rendering ko pause, resume aur prioritize kar sakta hai.

## Real world Projects me kaise implement hota hain?

  Large CRM, ERP ya Dashboard applications me tables, grids aur forms frequently update hote rehte hain.

  Agar proper keys use na ki jaye to unnecessary re-renders aur state mismatch issues aate hain.

  Example:

  ```jsx
  customers.map((customer) => (
    <CustomerRow
      key={customer.id}
      customer={customer}
    />
  ))
  ```

  Iske saath React.memo use karne par React sirf changed rows ko re-render karta hai aur baaki components reuse karta hai. Isse reconciliation cost significantly reduce hoti hai.

`Interview Answer:`

React Reconciliation is the process React uses to efficiently update the UI when state or props change. React creates a new Virtual DOM tree and compares it with the previous one using its diffing algorithm. Based on the differences, it updates only the necessary parts of the Real DOM instead of re-rendering the entire page.

The algorithm relies on heuristics such as element type comparison and key-based list reconciliation to achieve efficient updates. Since React 16, reconciliation is powered by the Fiber architecture, which supports incremental rendering and update prioritization for better performance.

Example:

```jsx
const [count, setCount] = useState(0);

setCount((prev) => prev + 1);
```

---

2. # What are controlled vs. uncontrolled components?

`Hinglish Explanation:`

## Kya hain?

  React me forms ko handle karne ke do common approaches hoti hain:

  **Controlled Components** aur **Uncontrolled Components**.

  Controlled Component me form field ki value React State control karti hai. Matlab input ka single source of truth React State hota hai.

  Uncontrolled Component me form field ki value DOM khud manage karta hai aur React value ko direct track nahi karta. Value access karne ke liye generally `ref` use kiya jata hai.

## Kaun se problem par based hain?

  Forms user input lete hain aur application ko us input ke basis par validation, formatting, conditional rendering aur API calls perform karni hoti hain.

  Question ye tha ki input data ko kaun manage kare?

  - React State?
  - Ya Browser DOM?

  Isi problem ko solve karne ke liye Controlled aur Uncontrolled approaches use ki jaati hain.

  Controlled Example:

  ```jsx
  const [name, setName] = useState("");

  <input
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  ```

  Uncontrolled Example:

  ```jsx
  const inputRef = useRef();

  <input ref={inputRef} />
  ```

## Kaise work karta hain?

  *Controlled Component**

  User input type karta hai.

  ```text
  User Input
       ↓
  onChange Event
       ↓
  React State Update
       ↓
  Component Re-render
       ↓
  Updated Value Render
  ```

  React input ki value ko completely control karta hai.

  Benefits:

  - Real-time validation
  - Dynamic formatting
  - Conditional UI updates
  - Easy state management
  - Predictable behavior

  **Uncontrolled Component**

  User input type karta hai.

  ```text
  User Input
       ↓
  DOM Stores Value
       ↓
  React Accesses via Ref
  ```

  React input value ko continuously track nahi karta.

  Value tab read ki jaati hai jab explicitly required ho.

## Real world Projects me kaise implement hota hain?

  Enterprise React applications me mostly Controlled Components use kiye jaate hain kyunki forms me validation, error handling, API integration aur business rules apply karne hote hain.

  Example:

  ```jsx
  const [email, setEmail] = useState("");

  <input
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  ```

  Is approach se:

  - Email validation
  - Disable submit button
  - Auto formatting
  - Error messages

  easily implement kiye ja sakte hain.

  Uncontrolled Components generally tab use hote hain jab:

  - Simple forms ho
  - File uploads ho
  - Third-party libraries integrate karni ho
  - Performance-sensitive large forms ho

  Example:

  ```jsx
  const fileRef = useRef();

  <input
    type="file"
    ref={fileRef}
  />
  ```

  File inputs practically uncontrolled hi hote hain because browser security restrictions ke karan React directly file value control nahi kar sakta.

`Interview Answer:`

Controlled Components are form elements whose values are managed by React state. The input value is synchronized with state through the `value` prop and `onChange` handler, making React the single source of truth. This approach is preferred for validation, dynamic UI updates, and predictable state management.

Uncontrolled Components store their state within the DOM itself. React accesses the value using refs when needed rather than managing it continuously. They are useful for simple forms, file inputs, and certain third-party integrations.

In production applications, controlled components are generally preferred because they provide better control, validation capabilities, and maintainability.

Example:

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

Uncontrolled Example:

```jsx
const inputRef = useRef();

<input ref={inputRef} />
```

---

3. # How does React handle context and why use it?

`Hinglish Explanation:`

## Kya hain?

  React Context ek built-in state-sharing mechanism hai jo data ko component tree ke multiple levels tak pass karne ki facility deta hai bina props manually har level par pass kiye.

  Normally React me parent se child ko data props ke through bheja jata hai. Lekin jab data bahut deeply nested components tak pahunchana ho, to har intermediate component ko unnecessary props pass karne padte hain. Is problem ko **Prop Drilling** kehte hain.

  Context React ko allow karta hai ki data directly required components tak pahunch sake bina intermediate components ko involve kiye.

## Kaun se problem par based hain?

  Maan lo application me logged-in user information top-level component me available hai aur usko Navbar, Sidebar, Dashboard aur Profile components me use karna hai.

  Without Context:

  ```text
  App
   ↓
  Layout
   ↓
  Dashboard
   ↓
  Sidebar
   ↓
  UserProfile
  ```

  Har level par props pass karne padenge:

  ```jsx
  <Layout user={user} />
  ```

  ```jsx
  <Dashboard user={user} />
  ```

  ```jsx
  <Sidebar user={user} />
  ```

  ```jsx
  <UserProfile user={user} />
  ```

  Isse code difficult to maintain ho jata hai.

  Context is problem ko solve karta hai by providing a shared data layer.

## Kaise work karta hain?

  Context ke teen major parts hote hain:

  **1. Create Context**

  ```jsx
  const UserContext = createContext();
  ```

  **2. Provide Data**

  Provider component ke through data expose kiya jata hai.

  ```jsx
  <UserContext.Provider value={user}>
    <App />
  </UserContext.Provider>
  ```

  **3. Consume Data**

  Kisi bhi nested component me data access kiya ja sakta hai.

  ```jsx
  const user = useContext(UserContext);
  ```

  Flow:

  ```text
  Context Provider
          ↓
      Shared Value
          ↓
  Any Nested Component
  ```

  Jab Provider ki value change hoti hai to React automatically consuming components ko re-render karta hai.

## Real world Projects me kaise implement hota hain?

  Context commonly use hota hai:

  - Authentication
  - Theme Management
  - Language/Localization
  - User Preferences
  - Global Configuration
  - Feature Flags

  Authentication Example:

  ```jsx
  const AuthContext = createContext();

  <AuthContext.Provider value={{ user }}>
    <App />
  </AuthContext.Provider>
  ```

  Navbar:

  ```jsx
  const { user } = useContext(AuthContext);

  return <h3>{user.name}</h3>;
  ```

  Sidebar:

  ```jsx
  const { user } = useContext(AuthContext);

  return <p>{user.role}</p>;
  ```

  Production applications me Context ko generally global state ke liye use kiya jata hai. Lekin frequently changing large state ke liye Redux, Zustand ya similar state management solutions prefer kiye jaate hain kyunki Context updates unnecessary re-renders trigger kar sakte hain.

`Interview Answer:`

React Context is a built-in feature that allows data to be shared across a component tree without manually passing props through every level. It helps solve the prop drilling problem by enabling components to access shared data directly from a central provider.

Context works using three main parts: `createContext`, `Provider`, and `useContext`. A Provider exposes a value, and any nested component can consume that value without receiving it as a prop. When the provider value changes, React re-renders the consuming components with the updated data.

Context is commonly used for authentication, themes, localization, user preferences, and application-wide configuration. While it is excellent for sharing global data, it is not always the best choice for highly dynamic application state because frequent updates can trigger unnecessary re-renders.

Example:

```jsx
const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={{ name: "Raj" }}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  const user = useContext(UserContext);

  return <h1>{user.name}</h1>;
}
```

---

4. # What are the common performance optimization techniques in React?

`Hinglish Explanation:`

## Kya hain?

  React Performance Optimization techniques ka purpose unnecessary re-renders, expensive calculations, large DOM updates aur unnecessary API calls ko reduce karna hota hai. Small applications me performance issues usually visible nahi hote, lekin enterprise applications me thousands of components, large datasets aur complex UI interactions performance bottlenecks create kar sakte hain.

  Performance optimization ka goal React ko kam work karwana aur browser ko minimum DOM updates karwana hota hai.

## Kaun se problem par based hain?

  By default React state ya props change hone par component aur uske child components ko re-render kar sakta hai.

  Maan lo ek dashboard me 1000 rows hain aur sirf ek row update hui hai.

  ```text
  State Update
       ↓
  Parent Re-render
       ↓
  1000 Child Re-renders
  ```

  Yaha unnecessary rendering performance impact karegi.

  Isi tarah expensive calculations bhi har render par execute ho sakti hain.

  Example:

  ```jsx
  const sortedUsers = users.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  ```

  Agar users ki list badi hai to har render par sorting expensive ho sakti hai.

## Kaise work karta hain?

  React me common optimization techniques:

  **1. React.memo**

  Functional component ko memoize karta hai aur same props hone par re-render prevent karta hai.

  ```jsx
  const UserCard = React.memo(({ user }) => {
    return <h1>{user.name}</h1>;
  });
  ```

  **2. useMemo**

  Expensive calculations ko cache karta hai.

  ```jsx
  const sortedUsers = useMemo(() => {
    return users.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, [users]);
  ```

  **3. useCallback**

  Function references ko memoize karta hai.

  ```jsx
  const handleDelete = useCallback((id) => {
    deleteUser(id);
  }, []);
  ```

  Useful when passing callbacks to memoized child components.

  **4. Code Splitting**

  Entire application ko initial load par download karne ke bajaye required modules lazy load kiye jaate hain.

  ```jsx
  const Dashboard = React.lazy(() =>
    import("./Dashboard")
  );
  ```

  **5. Virtualization**

  Large lists ke case me sirf visible items render kiye jaate hain.

  ```text
  Total Rows: 10000
  Visible Rows: 20
  Rendered Rows: 20
  ```

  Libraries:

  - react-window
  - react-virtualized

  **6. Proper Keys**

  Stable keys reconciliation ko efficient banati hain.

  ```jsx
  key={user.id}
  ```

  Instead of:

  ```jsx
  key={index}
  ```

  **7. Debouncing & Throttling**

  Frequent API calls ko reduce karte hain.

  Search Example:

  ```text
  R
  Ra
  Raj
  ```

  Instead of 3 API calls:

  ```text
  Wait 500ms
       ↓
  Single API Call
  ```

## Real world Projects me kaise implement hota hain?

  Ek CRM dashboard me 5000+ customer records display ho rahe the.

  Initial Issues:

  - Slow scrolling
  - Frequent re-renders
  - Search lag
  - Large bundle size

  Optimizations:

  ```jsx
  React.memo(CustomerRow);
  ```

  ```jsx
  const filteredUsers = useMemo(...);
  ```

  ```jsx
  const handleSearch = useCallback(...);
  ```

  ```jsx
  const Reports = React.lazy(...);
  ```

  ```jsx
  key={customer.id}
  ```

  Aur large tables ke liye virtualization implement kiya gaya.

  Result:

  - Faster rendering
  - Reduced memory usage
  - Better scrolling performance
  - Faster page load times
  - Improved user experience

`Interview Answer:`

Common React performance optimization techniques focus on reducing unnecessary rendering, minimizing expensive computations, and optimizing bundle size.

Some of the most commonly used techniques include React.memo for preventing unnecessary component re-renders, useMemo for caching expensive calculations, and useCallback for maintaining stable function references. Code splitting with React.lazy and Suspense helps reduce the initial bundle size, while list virtualization improves performance when rendering large datasets.

Additionally, using stable keys, implementing debouncing for search inputs, optimizing state management, and avoiding unnecessary component updates significantly improve application performance.

In large-scale applications, performance optimization is typically achieved through a combination of memoization, efficient rendering strategies, lazy loading, and proper component architecture.

Example:

```jsx
const UserList = React.memo(({ users }) => {
  return users.map((user) => (
    <div key={user.id}>{user.name}</div>
  ));
});

const filteredUsers = useMemo(() => {
  return users.filter((user) =>
    user.active
  );
}, [users]);
```

---

5. # How does memoization work in React (React.memo, useMemo)?

`Hinglish Explanation:`

## Kya hain?

  Memoization ek performance optimization technique hai jisme previously computed result ko cache kiya jata hai taaki same input ke liye computation ya rendering dobara na karni pade.

  React me memoization primarily 3 tools ke through implement hoti hai:

  - React.memo
  - useMemo
  - useCallback

  Inka goal unnecessary re-renders aur expensive calculations ko avoid karna hota hai.

## Kaun se problem par based hain?

  React me parent component re-render hone par child components bhi re-render ho sakte hain, chahe actual data change na hua ho.

  Example:

  ```jsx
  <Dashboard>
    <UserList />
  </Dashboard>
  ```

  Dashboard re-render hua:

  ```text
  Dashboard Re-render
         ↓
  UserList Re-render
  ```

  Isi tarah expensive calculations bhi har render par dobara execute ho sakti hain.

  ```jsx
  const sortedUsers = users.sort(...);
  ```

  Large datasets me ye performance bottleneck ban sakta hai.

## Kaise work karta hain?

  **React.memo**

  Component ko memoize karta hai.

  React previous props aur current props ka shallow comparison karta hai.

  ```jsx
  const UserCard = React.memo(({ user }) => {
    return <h1>{user.name}</h1>;
  });
  ```

  Agar props same hain to component re-render nahi hoga.

  **useMemo**

  Expensive calculations ke result ko cache karta hai.

  ```jsx
  const sortedUsers = useMemo(() => {
    return users.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, [users]);
  ```

  Dependency change hone par hi calculation dobara execute hogi.

  **useCallback**

  Function reference ko memoize karta hai.

  React me function har render par naya create hota hai.

  ```jsx
  const handleDelete = useCallback((id) => {
    deleteUser(id);
  }, []);
  ```

  Isse same function reference maintain rehta hai aur memoized child components unnecessary re-render nahi karte.

  Summary:

  ```text
  React.memo
      ↓
  Memoize Component

  useMemo
      ↓
  Memoize Value

  useCallback
      ↓
  Memoize Function
  ```

## Real world Projects me kaise implement hota hain?

  CRM dashboard me 5000+ customers ki table thi.

  Table rows:

  ```jsx
  const CustomerRow = React.memo(
    ({ customer, onDelete }) => {
      ...
    }
  );
  ```

  Filtering aur sorting:

  ```jsx
  const filteredCustomers = useMemo(() => {
    return customers.filter(...);
  }, [customers]);
  ```

  Event handlers:

  ```jsx
  const handleDelete = useCallback((id) => {
    deleteCustomer(id);
  }, []);
  ```

  Result:

  - Reduced re-renders
  - Faster table rendering
  - Better scrolling performance
  - Lower CPU usage

  Production applications me React.memo, useMemo aur useCallback generally together use kiye jaate hain.

`Interview Answer:`

Memoization in React is a performance optimization technique used to avoid unnecessary computations and component re-renders by caching previously generated results.

React provides three primary memoization mechanisms. `React.memo` memoizes a component and prevents re-rendering when its props remain unchanged. `useMemo` memoizes the result of an expensive computation and recalculates it only when its dependencies change. `useCallback` memoizes function references, which helps prevent unnecessary re-renders in memoized child components.

In large-scale applications, these techniques are commonly used together to optimize rendering performance, reduce CPU-intensive operations, and improve responsiveness when working with large datasets or complex component trees.

Example:

```jsx
const UserCard = React.memo(({ user }) => {
  return <h2>{user.name}</h2>;
});

const filteredUsers = useMemo(() => {
  return users.filter((user) => user.active);
}, [users]);

const handleDelete = useCallback((id) => {
  deleteUser(id);
}, []);
```

---

6. # How does React handle batching of state updates?

`Hinglish Explanation:`

## Kya hain?

  Batching React ka optimization mechanism hai jisme multiple state updates ko combine karke ek hi re-render me process kiya jata hai. Iska purpose unnecessary renders ko reduce karna aur application performance improve karna hota hai.

  Agar React har `setState` ya state updater call ke baad immediately render kare, to large applications me bahut unnecessary rendering hogi. Batching is problem ko solve karta hai.

## Kaun se problem par based hain?

  Maan lo ek event handler me multiple state updates ho rahi hain:

  ```jsx
  setCount((prev) => prev + 1);
  setLoading(true);
  setUser(userData);
  ```

  Agar batching na ho:

  ```text
  State Update 1
        ↓
    Render 1

  State Update 2
        ↓
    Render 2

  State Update 3
        ↓
    Render 3
  ```

  Yani 3 updates ke liye 3 renders.

  Ye expensive ho sakta hai especially jab component tree large ho.

  React batching use karke:

  ```text
  State Update 1
  State Update 2
  State Update 3
        ↓
    Single Render
  ```

  perform karta hai.

## Kaise work karta hain?

  React updates ko queue me collect karta hai aur unhe ek batch ke roop me process karta hai.

  Example:

  ```jsx
  const handleClick = () => {
    setCount((prev) => prev + 1);
    setLoading(true);
    setUser(userData);
  };
  ```

  React pehle teeno updates queue karega.

  ```text
  Update Queue

  + count update
  + loading update
  + user update
  ```

  Fir ek hi reconciliation cycle me process karega.

  ```text
  Process Updates
        ↓
  New State Calculate
        ↓
  Single Re-render
  ```

  **React 17 vs React 18**

  React 17 tak batching mainly React Event Handlers ke andar hoti thi.

  Example:

  ```jsx
  const handleClick = () => {
    setCount((prev) => prev + 1);
    setLoading(true);
  };
  ```

  Yaha batching hoti thi.

  Lekin asynchronous operations me batching nahi hoti thi:

  ```jsx
  setTimeout(() => {
    setCount((prev) => prev + 1);
    setLoading(true);
  }, 1000);
  ```

  Result:

  ```text
  Render 1
  Render 2
  ```

  React 18 me Automatic Batching introduce hui.

  Ab batching work karti hai:

  - Event Handlers
  - Promises
  - setTimeout
  - Async/Await
  - Native Events

  Example:

  ```jsx
  setTimeout(() => {
    setCount((prev) => prev + 1);
    setLoading(true);
  }, 1000);
  ```

  React 18:

  ```text
  Single Render
  ```

  Ye React 18 ka important interview topic hai.

## Real world Projects me kaise implement hota hain?

  Maan lo CRM dashboard me customer data load ho raha hai.

  ```jsx
  const fetchCustomers = async () => {
    const data = await api.getCustomers();

    setCustomers(data);
    setLoading(false);
    setLastUpdated(new Date());
  };
  ```

  React 18 me ye updates automatically batch ho jayengi.

  ```text
  API Response
       ↓
  Multiple State Updates
       ↓
  Single Re-render
  ```

  Isse:

  - Better performance
  - Fewer renders
  - Faster UI updates
  - Reduced reconciliation cost

  milta hai.

  Kabhi-kabhi hume immediate update force karni hoti hai. Us case me React `flushSync` provide karta hai.

  Example:

  ```jsx
  import { flushSync } from "react-dom";

  flushSync(() => {
    setCount((prev) => prev + 1);
  });
  ```

  Ye batching ko bypass karke immediate render trigger karta hai.

`Interview Answer:`

Batching is a React optimization technique where multiple state updates are grouped together and processed in a single render cycle. Instead of re-rendering the component after every state update, React collects updates, calculates the final state, and performs a single reconciliation and render operation.

This significantly reduces unnecessary rendering and improves application performance, especially in large component trees.

Starting with React 18, automatic batching was extended beyond event handlers to include asynchronous operations such as promises, async/await, timeouts, and native event handlers. This results in fewer renders and more efficient UI updates.

In production applications, batching helps reduce reconciliation overhead and improves responsiveness when multiple state updates occur together.

Example:

```jsx
const handleClick = () => {
  setCount((prev) => prev + 1);
  setLoading(true);
  setUser(userData);
};
```

All three updates are batched and processed in a single render cycle.

---

7. # What are custom hooks and when would you use them?

`Hinglish Explanation:`

## Kya hain?

  Custom Hooks React me reusable stateful logic ko extract karne ka mechanism hain. Jab multiple components me same logic repeat ho rahi ho, to us logic ko ek custom hook me move karke reuse kiya ja sakta hai.

  Important baat ye hai ki Custom Hook component reuse nahi karta, balki logic reuse karta hai.

  React ke built-in hooks jaise:

  ```jsx
  useState()
  useEffect()
  useContext()
  useMemo()
  ```

  ki tarah hum apne hooks bhi create kar sakte hain.

  Convention ke according custom hook ka naam hamesha `use` se start hona chahiye.

  Example:

  ```jsx
  useAuth()
  useDebounce()
  useFetch()
  useLocalStorage()
  ```

## Kaun se problem par based hain?

  Maan lo application me multiple pages API call kar rahi hain.

  Without Custom Hook:

  ```jsx
  // Users Page

  useEffect(() => {
    fetchUsers();
  }, []);
  ```

  ```jsx
  // Products Page

  useEffect(() => {
    fetchProducts();
  }, []);
  ```

  ```jsx
  // Orders Page

  useEffect(() => {
    fetchOrders();
  }, []);
  ```

  Har component me:

  - Loading state
  - Error handling
  - API request logic
  - Cleanup logic

  repeat ho sakti hai.

  Isse:

  - Code duplication
  - Difficult maintenance
  - Inconsistent behavior

  jaisi problems create hoti hain.

  Custom Hooks ka main purpose reusable business logic create karna hai.

## Kaise work karta hain?

  Custom Hook internally React hooks use karta hai aur reusable functionality expose karta hai.

  Example:

  ```jsx
  function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () =>
      setCount((prev) => prev + 1);

    const decrement = () =>
      setCount((prev) => prev - 1);

    return {
      count,
      increment,
      decrement,
    };
  }
  ```

  Component:

  ```jsx
  function Counter() {
    const {
      count,
      increment,
      decrement,
    } = useCounter();

    return (
      <>
        <h1>{count}</h1>
      </>
    );
  }
  ```

  Flow:

  ```text
  Reusable Logic
        ↓
   Custom Hook
        ↓
  Multiple Components
  ```

  Har component ko custom hook ki apni isolated state milti hai.

  State share nahi hoti.

  Example:

  ```jsx
  const counter1 = useCounter();
  const counter2 = useCounter();
  ```

  Dono ki state independent hogi.

## Real world Projects me kaise implement hota hain?

  Enterprise applications me Custom Hooks extensively use hote hain.

  Common Examples:

  - Authentication
  - API Requests
  - Form Handling
  - Debouncing
  - Permissions
  - Local Storage
  - WebSocket Connections
  - Feature Flags

  Authentication Hook:

  ```jsx
  function useAuth() {
    const [user, setUser] = useState(null);

    const login = async (credentials) => {
      // login logic
    };

    const logout = () => {
      setUser(null);
    };

    return {
      user,
      login,
      logout,
    };
  }
  ```

  Usage:

  ```jsx
  const { user, logout } = useAuth();
  ```

  API Hook:

  ```jsx
  const {
    data,
    loading,
    error,
  } = useFetch("/api/customers");
  ```

  Large-scale applications me Custom Hooks business logic ko UI se separate rakhte hain, jisse code modular, testable aur maintainable banta hai.

  Ye React architecture ka important best practice mana jata hai.

`Interview Answer:`

Custom Hooks are reusable JavaScript functions that encapsulate React stateful logic using built-in hooks such as useState, useEffect, and useContext. They allow developers to extract common functionality from components and reuse it across the application without duplicating code.

Custom Hooks help separate business logic from presentation logic, making components cleaner, more maintainable, and easier to test. They are commonly used for authentication, API requests, form management, debouncing, local storage handling, permissions, and other reusable behaviors.

A Custom Hook follows the same rules as React hooks and must start with the word `use`. Each component that uses a custom hook gets its own isolated state, ensuring predictable behavior.

Example:

```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () =>
    setCount((prev) => prev + 1);

  return {
    count,
    increment,
  };
}

function Counter() {
  const { count, increment } = useCounter();

  return (
    <button onClick={increment}>
      {count}
    </button>
  );
}
```

---

8. # Explain lazy loading and code splitting in React.

`Hinglish Explanation:`

## Kya hain?

  Lazy Loading aur Code Splitting React applications ki performance optimize karne ki techniques hain.

  Normally jab React application load hoti hai, to poora JavaScript bundle browser download karta hai. Agar application badi hai to initial bundle size bahut large ho sakta hai, jisse first page load slow ho jata hai.

  Code Splitting application ko multiple smaller chunks me divide karta hai, aur Lazy Loading un chunks ko tab load karta hai jab unki actual need hoti hai.

  Simple words me:

  ```text
  Without Code Splitting

  App Bundle
      ↓
  5 MB Download
      ↓
  User Opens Home Page
  ```

  ```text
  With Code Splitting

  Home Bundle
      ↓
  Download Only Home Page Code
      ↓
  User Opens Reports Page
      ↓
  Reports Bundle Download
  ```

## Kaun se problem par based hain?

  Maan lo ek CRM application hai jisme:

  - Dashboard
  - Reports
  - Analytics
  - User Management
  - Settings

  pages hain.

  Without Code Splitting:

  ```text
  User Opens Login Page
         ↓
  Entire Application Download
         ↓
  Dashboard Code
  Reports Code
  Analytics Code
  Settings Code
  ```

  Problem:

  - Large bundle size
  - Slow initial load
  - Poor Lighthouse score
  - More memory consumption
  - Bad user experience on slow networks

  User sirf Login page dekh raha hai lekin Reports aur Analytics ka code bhi download ho raha hai.

## Kaise work karta hain?

  React `React.lazy()` aur `Suspense` provide karta hai lazy loading implement karne ke liye.

  Example:

  ```jsx
  import React, { lazy, Suspense } from "react";

  const Dashboard = lazy(() =>
    import("./Dashboard")
  );
  ```

  Usage:

  ```jsx
  <Suspense fallback={<Loader />}>
    <Dashboard />
  </Suspense>
  ```

  Flow:

  ```text
  Initial Render
        ↓
  Dashboard Required?
        ↓
       Yes
        ↓
  Download Dashboard Chunk
        ↓
  Render Dashboard
  ```

  Jab tak chunk load nahi hota:

  ```jsx
  fallback={<Loader />}
  ```

  render hota hai.

  React internally dynamic imports use karta hai:

  ```jsx
  import("./Dashboard");
  ```

  Bundlers jaise Webpack, Vite ya Rollup is code ko alag chunk me split kar dete hain.

  ```text
  main.js
  dashboard.chunk.js
  reports.chunk.js
  analytics.chunk.js
  ```

## Real world Projects me kaise implement hota hain?

  Enterprise CRM application me kuch pages bahut heavy the:

  - Analytics
  - Reports
  - Charts
  - Export Modules

  Initially:

  ```text
  Initial Bundle Size
      ↓
  4.8 MB
  ```

  Optimization:

  ```jsx
  const Reports = lazy(() =>
    import("./pages/Reports")
  );

  const Analytics = lazy(() =>
    import("./pages/Analytics")
  );
  ```

  Route-level lazy loading:

  ```jsx
  <Route
    path="/reports"
    element={<Reports />}
  />
  ```

  Result:

  ```text
  Initial Bundle
      ↓
  1.2 MB
  ```

  Benefits:

  - Faster first load
  - Better Lighthouse score
  - Reduced bandwidth usage
  - Better mobile performance
  - Improved Time To Interactive (TTI)

  Large-scale applications me route-level code splitting almost standard practice hai.

`Interview Answer:`

Lazy Loading is a technique where components or modules are loaded only when they are needed, instead of being included in the initial application bundle. Code Splitting is the process of dividing a large JavaScript bundle into smaller chunks that can be loaded on demand.

React provides `React.lazy()` and `Suspense` to implement lazy loading. When a lazily loaded component is requested, React dynamically downloads the corresponding chunk and renders it once available.

These techniques significantly reduce the initial bundle size, improve page load performance, decrease bandwidth consumption, and enhance the user experience, especially in large-scale applications.

In production applications, route-level code splitting is commonly used so that users download only the code required for the current page rather than the entire application.

Example:

```jsx
import React, { lazy, Suspense } from "react";

const Reports = lazy(() =>
  import("./Reports")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Reports />
    </Suspense>
  );
}
```

---

9. # What’s the difference between useEffect and useLayoutEffect?

`Hinglish Explanation:`

## Kya hain?

  `useEffect` aur `useLayoutEffect` dono React hooks hain jo side effects handle karne ke liye use kiye jaate hain. Dono ka API almost same hai, lekin unke execution timing me difference hota hai.

  ```jsx
  useEffect(() => {
    // side effect
  }, []);

  useLayoutEffect(() => {
    // side effect
  }, []);
  ```

  Major difference:

  ```text
  useEffect
      ↓
  Browser Paint
      ↓
  Effect Execute
  ```

  ```text
  useLayoutEffect
      ↓
  Effect Execute
      ↓
  Browser Paint
  ```

## Kaun se problem par based hain?

  React rendering process generally:

  ```text
  State Change
       ↓
  Virtual DOM Update
       ↓
  Real DOM Update
       ↓
  Browser Paint
       ↓
  User Sees UI
  ```

  Kabhi-kabhi hume DOM render hone ke immediately baad uska size, position ya layout calculate karna hota hai.

  Example:

  ```jsx
  const width = element.offsetWidth;
  ```

  Agar ye calculation browser paint ke baad ho:

  ```text
  UI Render
      ↓
  User Sees UI
      ↓
  Layout Calculation
      ↓
  UI Changes Again
  ```

  To screen flicker ya layout jump dikh sakta hai.

  Isi problem ko solve karne ke liye `useLayoutEffect` introduce kiya gaya.

## Kaise work karta hain?

  **useEffect**

  React component render karta hai.

  ```text
  Render
      ↓
  DOM Update
      ↓
  Browser Paint
      ↓
  useEffect Run
  ```

  Example:

  ```jsx
  useEffect(() => {
    fetchUsers();
  }, []);
  ```

  Common Use Cases:

  - API calls
  - Event listeners
  - Analytics
  - Logging
  - WebSocket connections
  - Timers

  Kyunki ye browser paint ko block nahi karta, isliye preferred hook mana jata hai.

  **useLayoutEffect**

  Flow:

  ```text
  Render
      ↓
  DOM Update
      ↓
  useLayoutEffect Run
      ↓
  Browser Paint
  ```

  Browser tab tak paint nahi karega jab tak `useLayoutEffect` complete na ho.

  Example:

  ```jsx
  useLayoutEffect(() => {
    const width =
      elementRef.current.offsetWidth;

    setWidth(width);
  }, []);
  ```

  Common Use Cases:

  - DOM measurements
  - Element positioning
  - Animations
  - Scroll synchronization
  - Preventing UI flicker

  Important:

  ```text
  useLayoutEffect blocks paint
  useEffect does not
  ```

  Isliye unnecessary useLayoutEffect performance ko impact kar sakta hai.

## Real world Projects me kaise implement hota hain?

  Maan lo ek analytics dashboard me dynamic charts render ho rahe hain.

  Chart library ko exact container width chahiye.

  Example:

  ```jsx
  useLayoutEffect(() => {
    const width =
      chartRef.current.offsetWidth;

    initializeChart(width);
  }, []);
  ```

  Yaha useEffect use karne par:

  ```text
  Initial Render
      ↓
  Wrong Chart Size
      ↓
  Recalculate
      ↓
  Resize Again
  ```

  User ko flicker dikh sakta hai.

  Isliye DOM measurements ke liye useLayoutEffect better choice hai.

  Lekin API requests ke liye:

  ```jsx
  useEffect(() => {
    fetchCustomers();
  }, []);
  ```

  useLayoutEffect use karna unnecessary hoga kyunki ye browser paint ko block karega aur page ko slow bana sakta hai.

  Enterprise applications me general rule:

  ```text
  Default → useEffect

  DOM Measurement /
  Layout Manipulation →
  useLayoutEffect
  ```

`Interview Answer:`

Both `useEffect` and `useLayoutEffect` are React hooks used for handling side effects, but they differ in execution timing.

`useEffect` runs asynchronously after the browser has painted the updated UI. It is commonly used for API calls, subscriptions, logging, timers, and other non-visual side effects. Since it does not block rendering, it is the preferred choice in most scenarios.

`useLayoutEffect` runs synchronously after the DOM has been updated but before the browser paints the screen. It is primarily used for DOM measurements, layout calculations, animations, and situations where visual inconsistencies or flickering must be prevented.

In production applications, `useEffect` should be the default choice, while `useLayoutEffect` should only be used when direct interaction with the DOM layout is required.

Example:

```jsx
useEffect(() => {
  fetchUsers();
}, []);

useLayoutEffect(() => {
  const width =
    containerRef.current.offsetWidth;

  setWidth(width);
}, []);
```

---

10. # How does React’s concurrent mode work?

`Hinglish Explanation:`

## Kya hain?

  Concurrent Mode (React 18 me Concurrent Features ke form me available) React ki ek advanced rendering capability hai jo rendering work ko interrupt, pause, resume aur prioritize karne ki ability deti hai.

  Traditional React rendering synchronous thi.

  ```text
  Start Render
       ↓
  Complete Entire Render
       ↓
  User Interaction Handle
  ```

  Agar render process heavy ho to UI temporarily freeze ho sakti thi.

  Concurrent Rendering ka goal UI ko responsive rakhna hai even jab background me expensive rendering chal rahi ho.

  Simple words me:

  ```text
  High Priority Work
      ↓
  User Typing
  User Click
  User Input

  Low Priority Work
      ↓
  Large Lists
  Charts
  Filters
  Reports
  ```

  React pehle important work process karta hai aur less important work ko delay ya interrupt kar sakta hai.

## Kaun se problem par based hain?

  Maan lo ek dashboard me 10,000 records filter ho rahe hain.

  User search box me type kar raha hai.

  Without Concurrent Rendering:

  ```text
  User Types
       ↓
  Heavy Filtering Starts
       ↓
  UI Blocked
       ↓
  User Experiences Lag
  ```

  User ko lag sakta hai application hang ho gayi.

  Large enterprise applications me:

  - Large tables
  - Analytics dashboards
  - Complex charts
  - Heavy filtering

  rendering bottlenecks create kar sakte hain.

  Concurrent Rendering is problem ko solve karti hai.

## Kaise work karta hain?

  React Fiber architecture Concurrent Rendering ka foundation hai.

  Fiber rendering work ko small units me divide karta hai.

  ```text
  Large Rendering Task
          ↓
      Small Units
          ↓
  Process Incrementally
  ```

  React execution ke beech me decide kar sakta hai:

  ```text
  Continue Rendering
       OR
  Pause Rendering
       OR
  Prioritize User Input
  ```

  Example:

  ```text
  Render Task
       ↓
  User Clicks Button
       ↓
  Pause Low Priority Work
       ↓
  Process Click Immediately
       ↓
  Resume Rendering
  ```

  React 18 me Concurrent Features primarily:

  **startTransition**

  Low-priority updates mark karne ke liye.

  ```jsx
  import { startTransition } from "react";

  const handleSearch = (value) => {
    setInput(value);

    startTransition(() => {
      setFilteredUsers(
        filterUsers(value)
      );
    });
  };
  ```

  Yaha:

  ```text
  setInput()
      ↓
  High Priority

  filterUsers()
      ↓
  Low Priority
  ```

  User typing smooth rahegi.

  **useTransition**

  Transition state track karne ke liye.

  ```jsx
  const [isPending, startTransition] =
    useTransition();
  ```

  Example:

  ```jsx
  startTransition(() => {
    setProducts(filteredProducts);
  });
  ```

  React background me rendering perform karega.

  **useDeferredValue**

  Expensive updates ko defer karne ke liye.

  ```jsx
  const deferredSearch =
    useDeferredValue(searchTerm);
  ```

  Useful for:

  - Search UIs
  - Large lists
  - Expensive filtering

## Real world Projects me kaise implement hota hain?

  Ek CRM application me customer search feature tha jisme 20,000+ records client-side filter ho rahe the.

  Initial implementation:

  ```jsx
  setSearch(term);
  setFilteredUsers(
    filterUsers(term)
  );
  ```

  Problem:

  ```text
  Typing Lag
  UI Freeze
  Poor UX
  ```

  Optimization:

  ```jsx
  setSearch(term);

  startTransition(() => {
    setFilteredUsers(
      filterUsers(term)
    );
  });
  ```

  Result:

  ```text
  Smooth Typing
  Responsive UI
  Faster User Experience
  ```

  Similar approach analytics dashboards, reporting modules aur large data grids me frequently use hoti hai.

  Important point:

  ```text
  Concurrent Rendering
      ≠
  Parallel Rendering
  ```

  React multiple threads me rendering nahi karta.

  Ye rendering work ko schedule aur prioritize karta hai.

`Interview Answer:`

Concurrent Mode, introduced through React 18's Concurrent Features, is a rendering mechanism that allows React to interrupt, pause, resume, and prioritize rendering work. Instead of treating all updates with the same priority, React can process urgent updates such as user interactions first while deferring less critical rendering tasks.

This capability is built on top of the Fiber architecture, which breaks rendering work into smaller units that can be scheduled intelligently. Features such as `startTransition`, `useTransition`, and `useDeferredValue` enable developers to mark non-urgent updates and improve application responsiveness.

Concurrent Rendering is particularly valuable in large-scale applications with complex UIs, large datasets, and expensive rendering operations because it helps maintain a smooth user experience without blocking the main thread.

Example:

```jsx
import { startTransition } from "react";

function handleSearch(value) {
  setSearch(value);

  startTransition(() => {
    setFilteredUsers(
      filterUsers(value)
    );
  });
}
```

In this example, updating the search input remains high priority, while filtering a large dataset is treated as a lower-priority background update.

---

11. # What is the virtual DOM and how does React use it?

`Hinglish Explanation:`

* Kya hain?

  Virtual DOM (VDOM) Real DOM ka lightweight JavaScript representation hai. Ye actual browser DOM nahi hota, balki ek in-memory object tree hoti hai jo UI ki current state ko represent karti hai.

  Example:

  ```jsx
  <div>
    <h1>Hello Raj</h1>
  </div>
  ```

  React internally ise kuch is tarah represent karta hai:

  ```javascript
  {
    type: "div",
    children: [
      {
        type: "h1",
        children: ["Hello Raj"]
      }
    ]
  }
  ```

  React directly Real DOM ke saath continuously interact nahi karta kyunki DOM operations expensive hote hain. Isliye React Virtual DOM ka use karta hai.

* Kaun se problem par based hain?

  Browser ka Real DOM update karna costly operation hota hai.

  Example:

  ```text
  Change DOM
      ↓
  Recalculate Layout
      ↓
  Repaint
      ↓
  Reflow
  ```

  Maan lo page me 5000 elements hain aur sirf ek text update hua.

  Without Virtual DOM:

  ```text
  State Change
       ↓
  Direct DOM Manipulation
       ↓
  Expensive Browser Work
  ```

  Agar baar-baar DOM updates hongi to application slow ho sakti hai.

  React ne is problem ko solve karne ke liye Virtual DOM introduce kiya.

* Kaise work karta hain?

  Jab component first time render hota hai:

  ```text
  JSX
    ↓
  Virtual DOM
    ↓
  Real DOM
  ```

  Jab state ya props change hote hain:

  ```text
  State Update
       ↓
  New Virtual DOM Create
       ↓
  Compare with Previous Virtual DOM
       ↓
  Find Differences
       ↓
  Update Real DOM
  ```

  Is comparison process ko Reconciliation kehte hain.

  Example:

  Initial Render:

  ```jsx
  <h1>Hello</h1>
  ```

  Updated Render:

  ```jsx
  <h1>Hello Raj</h1>
  ```

  React compare karega:

  ```diff
  Hello
  Hello Raj
  ```

  Sirf text node update hogi.

  Pura DOM recreate nahi hoga.

  React Diffing Algorithm use karta hai jo approximately O(n) complexity me comparison perform karta hai.

  Important:

  ```text
  Virtual DOM
      ≠
  Faster DOM
  ```

  Actual benefit ye hai ki React expensive DOM operations ko minimize karta hai.

* Real world Projects me kaise implement hota hain?

  Maan lo CRM dashboard me:

  - 5000 customers
  - Multiple filters
  - Sorting
  - Live updates

  available hain.

  Jab ek customer ka status change hota hai:

  ```text
  Customer #145
      ↓
  Active → Inactive
  ```

  React:

  ```text
  Old Virtual DOM
        ↓
  New Virtual DOM
        ↓
  Compare
        ↓
  Update Only One Row
  ```

  Instead of:

  ```text
  Re-render Entire Table
  ```

  Is approach se:

  - Better performance
  - Fewer DOM updates
  - Faster UI updates
  - Improved user experience

  achieve hota hai.

  Modern React me Fiber Architecture Virtual DOM reconciliation ko aur efficient banati hai by supporting interruptible and prioritized rendering.

`Interview Answer:`

The Virtual DOM is a lightweight JavaScript representation of the actual DOM. React uses it to efficiently manage UI updates without directly manipulating the browser DOM on every state change.

When a component's state or props change, React creates a new Virtual DOM tree and compares it with the previous one using its diffing algorithm. This process, known as reconciliation, allows React to identify the minimum set of changes required and update only the affected parts of the Real DOM.

The primary advantage of the Virtual DOM is not that it is inherently faster than the Real DOM, but that it minimizes expensive DOM operations and enables efficient rendering, especially in large applications.

Example:

```jsx
const [count, setCount] = useState(0);

<button
  onClick={() =>
    setCount((prev) => prev + 1)
  }
>
  {count}
</button>
```

When `count` changes, React creates a new Virtual DOM, compares it with the previous version, and updates only the text node displaying the count instead of re-rendering the entire page.

---

12. # How do you implement SSR (Server-Side Rendering) with React?

`Hinglish Explanation:`

* Kya hain?

  Server-Side Rendering (SSR) ek rendering technique hai jisme React components browser me render hone ke bajaye server par render hote hain aur generated HTML client ko bheja jata hai.

  Traditional React applications by default Client-Side Rendering (CSR) use karti hain.

  ```text
  Browser
      ↓
  Download JS Bundle
      ↓
  Execute React
      ↓
  Generate HTML
      ↓
  Show UI
  ```

  SSR me:

  ```text
  Request
      ↓
  Server
      ↓
  Render React Component
      ↓
  Generate HTML
      ↓
  Send HTML to Browser
      ↓
  React Hydration
  ```

  Browser ko directly rendered HTML mil jata hai.

* Kaun se problem par based hain?

  Client-Side Rendering me kuch challenges hote hain:

  - Slow initial page load
  - Poor SEO
  - Blank screen until JS loads
  - Worse performance on slow devices
  - Higher Time To First Contentful Paint (FCP)

  Example:

  CSR:

  ```text
  Open Website
       ↓
  Empty HTML
       ↓
  Download JS
       ↓
  Execute JS
       ↓
  Render UI
  ```

  Search engine crawlers aur slow networks ke liye ye ideal nahi hota.

  SSR in problems ko solve karta hai by serving pre-rendered HTML.

* Kaise work karta hain?

  SSR flow:

  ```text
  User Request
       ↓
  Node.js Server
       ↓
  React Render
       ↓
  HTML Generate
       ↓
  Send HTML
       ↓
  Browser Displays Content
       ↓
  Hydration
       ↓
  Interactive Application
  ```

  React hydration bahut important concept hai.

  Server se jo static HTML aati hai usko React client-side JavaScript ke saath attach karta hai.

  ```text
  HTML
      +
  React Event Handlers
      ↓
  Interactive UI
  ```

  React 18 me SSR APIs:

  ```jsx
  import { renderToPipeableStream }
    from "react-dom/server";
  ```

  Purane versions me:

  ```jsx
  import { renderToString }
    from "react-dom/server";
  ```

  Example:

  ```jsx
  const html = renderToString(
    <App />
  );
  ```

  Modern applications me streaming SSR prefer kiya jata hai.

  ```text
  Server Starts Rendering
          ↓
  Partial HTML Sent
          ↓
  Remaining HTML Streamed
  ```

  Isse perceived performance improve hoti hai.

* Real world Projects me kaise implement hota hain?

  Production applications me SSR mostly frameworks ke through implement kiya jata hai.

  Example:

  - Next.js
  - Remix

  Next.js SSR Example:

  ```jsx
  export async function getServerSideProps() {
    const users =
      await fetchUsers();

    return {
      props: {
        users,
      },
    };
  }
  ```

  Page:

  ```jsx
  export default function Users({
    users,
  }) {
    return (
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name}
          </p>
        ))}
      </div>
    );
  }
  ```

  Enterprise use cases:

  - E-commerce product pages
  - Marketing websites
  - Blogs
  - News portals
  - SEO-critical applications

  Example:

  ```text
  Product Page
      ↓
  Search Engine Crawls HTML
      ↓
  Better SEO Ranking
  ```

  Modern React applications generally SSR + Hydration + Code Splitting ka combination use karti hain.

  React 18 me Streaming SSR aur Suspense integration ne SSR performance ko significantly improve kiya hai.

`Interview Answer:`

Server-Side Rendering (SSR) is a rendering strategy where React components are rendered on the server and the generated HTML is sent to the browser. This allows users and search engines to receive fully rendered content immediately, improving SEO and initial page load performance.

After the HTML is delivered, React performs hydration on the client side, attaching event handlers and making the application interactive. React 18 introduced streaming SSR APIs such as `renderToPipeableStream`, which allow HTML to be streamed progressively rather than waiting for the entire page to finish rendering.

In production environments, SSR is commonly implemented using frameworks such as Next.js, which provide built-in support for server rendering, data fetching, routing, and hydration.

Example:

```jsx
export async function getServerSideProps() {
  const users = await fetchUsers();

  return {
    props: {
      users,
    },
  };
}
```

This code fetches data on the server, renders the page with that data, and sends the generated HTML to the client before hydration occurs.

---

13. # Difference between lifting state and prop drilling.

`Hinglish Explanation:`

* Kya hain?

  **Lifting State Up** aur **Prop Drilling** dono React me state sharing se related concepts hain, lekin dono ka purpose aur impact alag hai.

  **Lifting State Up** ek design pattern hai jisme shared state ko child components se utha kar nearest common parent me move kiya jata hai taaki multiple components same data use kar saken.

  **Prop Drilling** ek situation hai jahan data ko multiple intermediate components ke through pass karna padta hai, even though un components ko us data ki zarurat nahi hoti.

  ```text
  Lifting State Up
      ↓
  Solution / Pattern

  Prop Drilling
      ↓
  Problem / Side Effect
  ```

* Kaun se problem par based hain?

  Maan lo do sibling components hain:

  ```text
  App
   ├── SearchBox
   └── ProductList
  ```

  SearchBox me search term update ho raha hai aur ProductList ko bhi wahi value chahiye.

  Initially:

  ```jsx
  SearchBox State
  ```

  Problem:

  ```text
  SearchBox
       ↓
  ProductList cannot access it
  ```

  Isliye state ko parent me move kiya jata hai.

  Example:

  ```jsx
  App
   ├── SearchBox
   └── ProductList
  ```

  State:

  ```jsx
  const [search, setSearch] =
    useState("");
  ```

  Parent me store hogi.

  Ye Lifting State Up hai.

  Lekin agar hierarchy deep ho:

  ```text
  App
   ↓
  Layout
   ↓
  Dashboard
   ↓
  Sidebar
   ↓
  SearchBox
  ```

  To state ko pass karne ke liye:

  ```jsx
  <Layout search={search} />
  ```

  ```jsx
  <Dashboard search={search} />
  ```

  ```jsx
  <Sidebar search={search} />
  ```

  karna padega.

  Isse Prop Drilling problem create hoti hai.

* Kaise work karta hain?

  **Lifting State Up**

  Before:

  ```jsx
  function SearchBox() {
    const [search, setSearch] =
      useState("");
  }
  ```

  After:

  ```jsx
  function App() {
    const [search, setSearch] =
      useState("");

    return (
      <>
        <SearchBox
          search={search}
          setSearch={setSearch}
        />

        <ProductList
          search={search}
        />
      </>
    );
  }
  ```

  Flow:

  ```text
  Shared State
        ↓
  Common Parent
        ↓
  Child Components
  ```

  Ye React ka recommended approach hai.

  **Prop Drilling**

  Example:

  ```text
  App
   ↓
  Layout
   ↓
  Dashboard
   ↓
  Sidebar
   ↓
  UserProfile
  ```

  Data:

  ```jsx
  <Layout user={user} />
  ```

  ```jsx
  <Dashboard user={user} />
  ```

  ```jsx
  <Sidebar user={user} />
  ```

  ```jsx
  <UserProfile user={user} />
  ```

  Intermediate components sirf props forward kar rahe hain.

  Ye Prop Drilling hai.

  Isse:

  - Code maintainability reduce hoti hai
  - Components tightly coupled ho jaate hain
  - Refactoring difficult ho jati hai

* Real world Projects me kaise implement hota hain?

  Lifting State Up commonly use hota hai:

  - Forms
  - Filters
  - Search Components
  - Parent-child communication

  Example:

  ```jsx
  const [filters, setFilters] =
    useState({});
  ```

  Parent component me state store karke multiple children ko pass ki ja sakti hai.

  Lekin large enterprise applications me:

  ```text
  Authentication
  Theme
  Permissions
  User Profile
  Feature Flags
  ```

  jaisi data ko multiple levels tak pass karna practical nahi hota.

  Example:

  ```text
  App
   ↓
  Layout
   ↓
  Dashboard
   ↓
  Reports
   ↓
  ExportButton
  ```

  Yaha prop drilling avoid karne ke liye:

  ```jsx
  Context API
  ```

  ya

  ```jsx
  Redux
  Zustand
  Recoil
  ```

  use kiya jata hai.

  Senior-level architecture me:

  ```text
  Shared Local State
      ↓
  Lift State Up

  Global Application State
      ↓
  Context / State Management
  ```

  preferred approach hoti hai.

`Interview Answer:`

Lifting State Up is a React pattern where shared state is moved to the nearest common parent component so that multiple child components can access and update the same data. It is commonly used when sibling components need to share state.

Prop Drilling, on the other hand, is a situation where props must be passed through multiple intermediate components to reach a deeply nested component that actually needs the data. While lifting state up is a recommended design approach, prop drilling is generally considered a maintainability problem in deeply nested component trees.

For small and medium component hierarchies, lifting state up works well. However, for application-wide data such as authentication, themes, or user settings, Context API or state management libraries are typically used to avoid excessive prop drilling.

Example:

```jsx
function App() {
  const [search, setSearch] =
    useState("");

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
      />
      <ProductList
        search={search}
      />
    </>
  );
}
```

This is an example of lifting state up. If the `search` prop had to be passed through several intermediate components before reaching `ProductList`, that would be considered prop drilling.

---

14. # What is Suspense in React?

`Hinglish Explanation:`

* Kya hain?

  Suspense React ka built-in mechanism hai jo asynchronous operations ke dauran loading state ko handle karne ke liye use hota hai. Ye React ko allow karta hai ki jab tak koi component, code chunk ya data ready na ho, tab tak ek fallback UI display ki ja sake.

  Simple words me:

  ```text
  Component Ready?
       ↓
      No
       ↓
  Show Loader
       ↓
  Component Loaded
       ↓
  Show Actual UI
  ```

  Suspense ka primary use initially lazy loading ke liye introduce hua tha, lekin React 18 me ye concurrent features aur data fetching ke saath bhi integrate ho gaya.

* Kaun se problem par based hain?

  Maan lo application me ek heavy Reports page hai.

  Without Suspense:

  ```text
  User Opens Reports Page
         ↓
  Download Component
         ↓
  Blank Screen
         ↓
  Component Loaded
         ↓
  Show UI
  ```

  User ko lag sakta hai page freeze ho gaya.

  Ya phir har component me manually loading state handle karni pade:

  ```jsx
  if (loading) {
    return <Loader />;
  }
  ```

  ```jsx
  if (loading) {
    return <Spinner />;
  }
  ```

  ```jsx
  if (loading) {
    return <Skeleton />;
  }
  ```

  Large applications me ye repetitive aur difficult to manage ho sakta hai.

  Suspense centralized loading experience provide karta hai.

* Kaise work karta hain?

  Suspense ek boundary create karta hai.

  ```jsx
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
  ```

  Flow:

  ```text
  Component Requested
         ↓
  Component Available?
         ↓
        No
         ↓
  Render Fallback
         ↓
  Component Loaded
         ↓
  Replace Fallback
  ```

  Sabse common use case:

  **Lazy Loading**

  ```jsx
  import {
    lazy,
    Suspense
  } from "react";

  const Reports = lazy(() =>
    import("./Reports")
  );
  ```

  ```jsx
  <Suspense
    fallback={<div>Loading...</div>}
  >
    <Reports />
  </Suspense>
  ```

  Jab tak Reports chunk download nahi hota:

  ```text
  Loading...
  ```

  render hota hai.

  React 18 me Suspense data fetching workflows ke saath bhi kaam kar sakta hai.

  ```text
  Data Fetching
        ↓
  Suspend Rendering
        ↓
  Show Fallback
        ↓
  Data Ready
        ↓
  Render UI
  ```

* Real world Projects me kaise implement hota hain?

  Enterprise applications me Suspense commonly use hota hai:

  - Route-based code splitting
  - Dashboard modules
  - Reports pages
  - Analytics pages
  - Large widgets
  - Data loading boundaries

  Example:

  ```jsx
  const Analytics = lazy(() =>
    import("./Analytics")
  );

  const Reports = lazy(() =>
    import("./Reports")
  );
  ```

  ```jsx
  <Suspense fallback={<PageLoader />}>
    <Analytics />
  </Suspense>
  ```

  Ya nested Suspense:

  ```jsx
  <Suspense fallback={<PageLoader />}>
    <Dashboard />

    <Suspense
      fallback={<ChartLoader />}
    >
      <AnalyticsChart />
    </Suspense>
  </Suspense>
  ```

  Is approach se:

  - Faster perceived performance
  - Better user experience
  - Smaller initial bundle size
  - Cleaner loading management

  achieve hota hai.

  Modern React applications me Suspense aur Lazy Loading almost saath me use kiye jaate hain.

`Interview Answer:`

Suspense is a React feature that allows developers to handle asynchronous operations by displaying fallback content while components, code chunks, or data are being loaded.

It creates a boundary around asynchronous resources and temporarily renders a fallback UI until the required content becomes available. The most common use case for Suspense is code splitting with `React.lazy`, where components are loaded on demand instead of being included in the initial bundle.

In React 18, Suspense also plays an important role in concurrent rendering and data fetching workflows, enabling smoother loading experiences and better application responsiveness.

Example:

```jsx
import {
  lazy,
  Suspense
} from "react";

const Reports = lazy(() =>
  import("./Reports")
);

function App() {
  return (
    <Suspense
      fallback={<div>Loading...</div>}
    >
      <Reports />
    </Suspense>
  );
}
```

In this example, React displays the fallback UI while the Reports component is being downloaded and rendered.

---

15. # How do you manage state in large applications (Redux, Context, Zustand)?

`Hinglish Explanation:`

* Kya hain?

  Large React applications me state management ka purpose data ko efficiently share, update aur maintain karna hota hai. Jaise-jaise application grow karti hai, state multiple components, pages aur modules me use hone lagti hai. Is situation me prop drilling aur scattered state management difficult ho jata hai.

  Common state management solutions:

  - Context API
  - Redux Toolkit
  - Zustand

  Senior-level architecture me har tool ka apna use case hota hai.

* Kaun se problem par based hain?

  Maan lo application me:

  ```text
  Authentication
  User Profile
  Permissions
  Theme
  Notifications
  Shopping Cart
  Dashboard Filters
  ```

  multiple modules hain.

  Without centralized state:

  ```text
  Component A State
  Component B State
  Component C State
  ```

  Problems:

  - Prop Drilling
  - Duplicate Data
  - State Synchronization Issues
  - Difficult Debugging
  - Poor Scalability

  Example:

  ```text
  App
   ↓
  Layout
   ↓
  Dashboard
   ↓
  Sidebar
   ↓
  UserProfile
  ```

  Har level par:

  ```jsx
  user={user}
  ```

  pass karna maintain karna difficult ho sakta hai.

* Kaise work karta hain?

  **Context API**

  React ka built-in solution hai.

  ```jsx
  const AuthContext =
    createContext();
  ```

  ```jsx
  <AuthContext.Provider
    value={user}
  >
    <App />
  </AuthContext.Provider>
  ```

  Best For:

  - Theme
  - Auth User
  - Language
  - App Config

  Limitation:

  ```text
  Provider Value Change
         ↓
  Consuming Components Re-render
  ```

  Frequently changing large state ke liye ideal nahi hai.

  **Redux Toolkit**

  Predictable centralized state management solution.

  Flow:

  ```text
  Action
      ↓
  Reducer
      ↓
  Store Update
      ↓
  UI Update
  ```

  Example:

  ```jsx
  dispatch(addToCart(product));
  ```

  Benefits:

  - Centralized Store
  - DevTools
  - Middleware
  - Time Travel Debugging
  - Predictable Updates

  Redux Toolkit modern Redux ka recommended approach hai.

  **Zustand**

  Lightweight state management library.

  Example:

  ```jsx
  const useStore = create((set) => ({
    count: 0,
    increment: () =>
      set((state) => ({
        count: state.count + 1,
      })),
  }));
  ```

  Usage:

  ```jsx
  const count =
    useStore((state) => state.count);
  ```

  Benefits:

  - Minimal Boilerplate
  - Small Bundle Size
  - Easy Learning Curve
  - Fine-grained Updates

  Zustand generally Redux se simpler hota hai.

* Real world Projects me kaise implement hota hain?

  Enterprise applications me usually hybrid approach use hoti hai.

  Example:

  ```text
  Context API
      ↓
  Theme
  Auth User
  Localization
  ```

  ```text
  Redux Toolkit
      ↓
  Cart
  Orders
  Dashboard Data
  Permissions
  Business Workflows
  ```

  ```text
  Zustand
      ↓
  UI State
  Filters
  Modals
  Local Dashboard State
  ```

  Example:

  CRM Application:

  ```text
  Auth State
      ↓
  Context

  Customer Data
      ↓
  Redux Toolkit

  Filter Panel State
      ↓
  Zustand
  ```

  Production experience me Redux tab valuable hota hai jab application me complex business workflows, caching, middleware aur debugging requirements ho.

  Zustand excellent hai jab team lightweight aur less boilerplate solution chahti ho.

  Context API ko generally low-frequency global state ke liye reserve rakhna chahiye.

`Interview Answer:`

In large React applications, state management strategy depends on the type and complexity of the state being managed.

For low-frequency global data such as authentication, themes, localization, and application configuration, Context API is usually sufficient. However, Context is not ideal for highly dynamic state because provider updates can trigger unnecessary re-renders.

For complex business workflows, shared application data, caching, middleware integration, and advanced debugging capabilities, Redux Toolkit is commonly used. It provides a centralized store, predictable state updates, DevTools integration, and excellent scalability.

Zustand is a lightweight alternative that offers a simpler API with minimal boilerplate while still supporting global state management. It is often used for UI state, filters, modals, and medium-complexity shared state.

In production applications, I typically use Context for application-wide configuration, Redux Toolkit for complex business state, and Zustand for lightweight shared state where Redux would be excessive.

Example:

```jsx
// Context
<AuthProvider>
  <App />
</AuthProvider>

// Redux
dispatch(addToCart(product));

// Zustand
const count =
  useStore((state) => state.count);
```

---

16. # How does hydration work in React with SSR?

`Hinglish Explanation:`

* Kya hain?

  Hydration wo process hai jisme React server se aaye huye pre-rendered HTML ko interactive React application me convert karta hai.

  SSR me server React components ko render karke ready-made HTML browser ko bhej deta hai. Lekin ye HTML initially sirf static markup hota hai.

  Example:

  ```html
  <button>Increment</button>
  ```

  User button dekh sakta hai, lekin click karne par kuch nahi hoga kyunki React event handlers abhi attach nahi hue hain.

  Hydration ka kaam HTML ko React ke Virtual DOM se connect karna aur event handlers attach karna hota hai.

* Kaun se problem par based hain?

  Maan lo SSR application hai.

  Server:

  ```text
  React Components
         ↓
  HTML Generate
         ↓
  Send to Browser
  ```

  Browser ko immediately content mil jata hai.

  Problem:

  ```text
  HTML Visible
      ↓
  But Not Interactive
  ```

  Example:

  ```jsx
  <button onClick={increment}>
    Increment
  </button>
  ```

  Server HTML send kar sakta hai:

  ```html
  <button>
    Increment
  </button>
  ```

  Lekin `onClick` browser tak HTML ke through nahi pahunchta.

  Agar hydration na ho:

  ```text
  UI Visible
      ↓
  No Click Handling
      ↓
  No React State Updates
  ```

  Isliye hydration required hoti hai.

* Kaise work karta hain?

  SSR Flow:

  ```text
  Request
      ↓
  Server
      ↓
  Render React Components
      ↓
  Generate HTML
      ↓
  Send HTML
      ↓
  Browser Displays Page
  ```

  Browser content immediately show kar deta hai.

  Next step:

  ```text
  Download JS Bundle
         ↓
  React Starts
         ↓
  Create Virtual DOM
         ↓
  Compare With Existing HTML
         ↓
  Attach Event Handlers
         ↓
  Page Becomes Interactive
  ```

  Ye process Hydration kehlati hai.

  React existing HTML ko destroy nahi karta.

  Instead:

  ```text
  Existing HTML
        +
  React Logic
        ↓
  Interactive App
  ```

  React 18 me:

  ```jsx
  hydrateRoot(
    document.getElementById("root"),
    <App />
  );
  ```

  use kiya jata hai.

  Purane versions me:

  ```jsx
  ReactDOM.hydrate(...)
  ```

  use hota tha.

  Important:

  ```text
  SSR ≠ Interactive App

  SSR + Hydration
        ↓
  Interactive App
  ```

* Real world Projects me kaise implement hota hain?

  Maan lo e-commerce website hai.

  User:

  ```text
  Opens Product Page
  ```

  Server:

  ```text
  Product Details Render
        ↓
  Send HTML
  ```

  Browser immediately show karega:

  ```text
  Product Name
  Price
  Images
  Reviews
  ```

  SEO bhi improve hogi.

  Phir:

  ```text
  Download React Bundle
         ↓
  Hydration
         ↓
  Add To Cart Works
         ↓
  Wishlist Works
         ↓
  Reviews Filters Work
  ```

  Modern frameworks:

  - Next.js
  - Remix

  hydration automatically handle karte hain.

  React 18 me selective hydration aur streaming SSR introduce ki gayi hai.

  Example:

  ```text
  Header Hydrated
       ↓
  Navbar Interactive

  Analytics Widget
       ↓
  Hydrate Later
  ```

  Isse page aur responsive feel hota hai kyunki React critical UI ko pehle hydrate kar sakta hai.

`Interview Answer:`

Hydration is the process of attaching React's client-side logic to HTML that was pre-rendered on the server. In a Server-Side Rendering (SSR) application, the server sends fully rendered HTML to the browser, allowing content to appear immediately.

However, the HTML is initially static and does not contain active React event handlers. During hydration, React loads the JavaScript bundle, recreates the Virtual DOM, matches it against the existing server-rendered HTML, and attaches event listeners without re-rendering the entire page.

This approach combines the SEO and performance benefits of SSR with the interactivity of a client-side React application.

In React 18, hydration is typically performed using `hydrateRoot`, and advanced capabilities such as selective hydration and streaming SSR further improve performance and responsiveness.

Example:

```jsx
import { hydrateRoot }
  from "react-dom/client";

hydrateRoot(
  document.getElementById("root"),
  <App />
);
```

In this example, React attaches its event handlers and state management logic to the existing server-rendered HTML, making the application fully interactive.

---

17. # How do you secure a React frontend?

`Hinglish Explanation:`

* Kya hain?

  React frontend security ka matlab application ko common client-side attacks se protect karna hai. Bahut log sochte hain ki security sirf backend ki responsibility hai, lekin frontend bhi attack surface ka important part hota hai.

  Important baat:

  ```text
  Frontend Security
        ≠
  Complete Security

  Backend Validation
        +
  Frontend Security
        ↓
  Secure Application
  ```

  React frontend ko secure karne ka goal user data, authentication flows aur browser environment ko attacks se protect karna hota hai.

* Kaun se problem par based hain?

  Frontend applications commonly in attacks ka target hoti hain:

  - Cross-Site Scripting (XSS)
  - Token Theft
  - Sensitive Data Exposure
  - Clickjacking
  - Dependency Vulnerabilities
  - API Abuse
  - CSRF
  - Open Redirects

  Example:

  User Input:

  ```html
  <script>
    stealUserToken();
  </script>
  ```

  Agar application unsafe rendering kare:

  ```jsx
  dangerouslySetInnerHTML
  ```

  to malicious JavaScript execute ho sakti hai.

  Isi tarah agar JWT token LocalStorage me store hai:

  ```javascript
  localStorage.setItem(
    "token",
    token
  );
  ```

  aur application me XSS vulnerability aa jaye to token steal kiya ja sakta hai.

* Kaise work karta hain?

  **1. XSS Protection**

  React by default JSX values escape karta hai.

  Safe:

  ```jsx
  <h1>{userInput}</h1>
  ```

  React internally HTML escape kar deta hai.

  Dangerous:

  ```jsx
  <div
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  />
  ```

  Agar use karna hi pade:

  ```javascript
  DOMPurify.sanitize(html);
  ```

  use karna chahiye.

  **2. Secure Authentication**

  Sensitive tokens ideally:

  ```text
  HttpOnly Cookies
  ```

  me store hone chahiye.

  Better:

  ```text
  Browser JS
       ↓
  Cannot Access Cookie
  ```

  Compared to:

  ```javascript
  localStorage
  sessionStorage
  ```

  **3. Route Protection**

  Client-side route guards security layer nahi hain.

  Example:

  ```jsx
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
  ```

  Actual authorization hamesha backend validate karega.

  **4. Environment Variables**

  Never store:

  ```text
  API Secrets
  Private Keys
  Database Credentials
  ```

  frontend code me.

  Example:

  ```env
  REACT_APP_API_URL=
  ```

  acceptable hai.

  Lekin:

  ```env
  REACT_APP_SECRET_KEY=
  ```

  secure nahi hai kyunki frontend bundle inspect kiya ja sakta hai.

  **5. Content Security Policy (CSP)**

  Browser ko restrict karta hai ki scripts kaha se load ho sakti hain.

  Example:

  ```http
  Content-Security-Policy:
  default-src 'self'
  ```

  XSS attacks ko significantly reduce karta hai.

  **6. Dependency Security**

  Third-party packages regularly audit karni chahiye.

  Example:

  ```bash
  npm audit
  ```

  ```bash
  npm audit fix
  ```

  Outdated packages security risks create kar sakti hain.

  **7. HTTPS Everywhere**

  Production traffic hamesha:

  ```text
  HTTPS
  ```

  ke through serve honi chahiye.

  HTTP me tokens aur data intercept ho sakte hain.

* Real world Projects me kaise implement hota hain?

  Enterprise React applications me typically:

  Authentication:

  ```text
  Access Token
      ↓
  HttpOnly Cookie
  ```

  API Security:

  ```text
  Backend Validation
       +
  Role Based Authorization
  ```

  XSS Protection:

  ```javascript
  DOMPurify.sanitize()
  ```

  CSP Headers:

  ```http
  Content-Security-Policy
  ```

  Route Protection:

  ```jsx
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
  ```

  Example:

  Ek fintech dashboard project me:

  - HttpOnly Cookies
  - CSP Headers
  - DOM Sanitization
  - RBAC Authorization
  - Dependency Scanning

  implement kiya gaya tha.

  Isse token theft aur XSS attack vectors significantly reduce hue.

  Senior-level perspective se:

  ```text
  Never Trust Frontend
  ```

  Frontend UX security provide kar sakta hai, lekin actual security enforcement hamesha backend par honi chahiye.

`Interview Answer:`

Securing a React frontend involves protecting the application against common client-side threats such as XSS, token theft, dependency vulnerabilities, and unauthorized access. While React provides built-in protection against many XSS attacks through automatic escaping, additional security measures are still required.

Key practices include avoiding unsafe HTML rendering, sanitizing user-generated content, storing authentication tokens in HttpOnly cookies instead of localStorage when possible, enforcing HTTPS, implementing Content Security Policy (CSP) headers, securing third-party dependencies, and ensuring that authorization checks are always validated on the backend.

In enterprise applications, frontend route protection improves user experience, but actual security decisions must be enforced by backend APIs. A secure React application is typically built using a combination of secure authentication mechanisms, XSS prevention strategies, CSP policies, dependency management, and strong backend validation.

Example:

```jsx
import DOMPurify from "dompurify";

const safeHtml =
  DOMPurify.sanitize(userHtml);

return (
  <div
    dangerouslySetInnerHTML={{
      __html: safeHtml,
    }}
  />
);
```

This ensures that potentially malicious HTML is sanitized before being rendered in the browser.

---

18. # Explain error boundaries in React.

`Hinglish Explanation:`

* Kya hain?

  Error Boundary React ka special component hai jo apne child component tree me aane wale JavaScript rendering errors ko catch karta hai aur application ko completely crash hone se bachata hai.

  React 16 se pehle agar kisi component me runtime error aa jata tha to poori React application crash ho sakti thi.

  Error Boundaries ek graceful fallback UI show karne ka mechanism provide karti hain.

  Example:

  ```text
  Component Error
        ↓
  Error Boundary
        ↓
  Fallback UI
  ```

  Instead of:

  ```text
  Component Error
        ↓
  Entire App Crash
  ```

* Kaun se problem par based hain?

  Maan lo dashboard me multiple widgets hain:

  ```text
  Dashboard
      ↓
  Revenue Widget
  Orders Widget
  Analytics Widget
  Profile Widget
  ```

  Agar Analytics Widget me runtime error aa gaya:

  ```jsx
  const data = undefined;

  data.map(...)
  ```

  Without Error Boundary:

  ```text
  Analytics Error
        ↓
  Entire Dashboard Crash
  ```

  User blank screen dekh sakta hai.

  Error Boundary ke saath:

  ```text
  Analytics Error
        ↓
  Analytics Fallback UI
        ↓
  Remaining Dashboard Works
  ```

  Isse application zyada resilient ban jati hai.

* Kaise work karta hain?

  Error Boundary ek class component hota hai jo React lifecycle methods use karta hai:

  ```jsx
  static getDerivedStateFromError()
  ```

  aur

  ```jsx
  componentDidCatch()
  ```

  Example:

  ```jsx
  class ErrorBoundary
    extends React.Component {

    state = {
      hasError: false,
    };

    static getDerivedStateFromError() {
      return {
        hasError: true,
      };
    }

    componentDidCatch(
      error,
      errorInfo
    ) {
      console.error(error);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong</h1>;
      }

      return this.props.children;
    }
  }
  ```

  Usage:

  ```jsx
  <ErrorBoundary>
    <Dashboard />
  </ErrorBoundary>
  ```

  Flow:

  ```text
  Child Component Error
          ↓
  Error Boundary Catch
          ↓
  Update State
          ↓
  Show Fallback UI
  ```

  Important:

  Error Boundaries catch:

  ✅ Render Errors

  ✅ Lifecycle Errors

  ✅ Constructor Errors

  Error Boundaries do NOT catch:

  ❌ Event Handler Errors

  ❌ Async Errors

  ❌ setTimeout Errors

  ❌ API Request Errors

  ❌ Errors Inside Error Boundary Itself

  Example:

  ```jsx
  button.onclick = () => {
    throw new Error();
  };
  ```

  Is error ko Error Boundary catch nahi karegi.

* Real world Projects me kaise implement hota hain?

  Enterprise applications me Error Boundaries usually page-level ya widget-level lagayi jati hain.

  Example:

  ```jsx
  <ErrorBoundary>
    <AnalyticsWidget />
  </ErrorBoundary>

  <ErrorBoundary>
    <ReportsWidget />
  </ErrorBoundary>
  ```

  Agar Analytics fail ho:

  ```text
  Analytics Fallback
  ```

  Lekin:

  ```text
  Reports
  Dashboard
  Navbar
  ```

  normal kaam karte rahenge.

  Monitoring tools ke saath integration bhi common hai.

  Example:

  ```jsx
  componentDidCatch(
    error,
    errorInfo
  ) {
    Sentry.captureException(error);
  }
  ```

  Production applications me:

  - Sentry
  - Datadog
  - New Relic

  ke saath Error Boundaries frequently integrate ki jaati hain.

  Senior-level architecture me multiple small Error Boundaries prefer ki jaati hain instead of wrapping the entire application in a single boundary.

* Real World Example

  Ek CRM dashboard me Analytics module third-party chart library use kar raha tha.

  Kabhi-kabhi malformed data ki wajah se chart render fail ho jata tha.

  Solution:

  ```jsx
  <ErrorBoundary>
    <AnalyticsChart />
  </ErrorBoundary>
  ```

  Result:

  ```text
  Chart Failed
      ↓
  Show Error Widget
      ↓
  Entire Dashboard Still Works
  ```

  Is approach se user experience aur application reliability significantly improve hui.

`Interview Answer:`

Error Boundaries are React components that catch JavaScript errors occurring in their child component tree during rendering, lifecycle methods, and constructors. Instead of allowing the entire application to crash, they display a fallback UI and can also log error details for monitoring and debugging purposes.

They are implemented using class components with the `getDerivedStateFromError` and `componentDidCatch` lifecycle methods. Error Boundaries help improve application resilience by isolating failures to specific sections of the UI.

However, they do not catch errors from event handlers, asynchronous operations, API calls, or errors occurring within the Error Boundary itself.

In production applications, Error Boundaries are commonly placed around critical modules such as dashboards, reports, analytics widgets, and third-party integrations, often combined with monitoring tools like Sentry for error tracking.

Example:

```jsx
class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}
```

Usage:

```jsx
<ErrorBoundary>
  <AnalyticsDashboard />
</ErrorBoundary>
```

---

19. # How does React Router handle dynamic routes?

`Hinglish Explanation:`

* Kya hain?

  Dynamic Routes React Router ka feature hain jo URL ke dynamic values ko capture karne aur unke basis par specific data render karne ki facility dete hain.

  Maan lo application me thousands of users hain.

  Har user ke liye alag route banana practical nahi hai:

  ```text
  /user/1
  /user/2
  /user/3
  ...
  ```

  Isliye React Router dynamic parameters provide karta hai.

  Example:

  ```jsx
  /users/:id
  ```

  Yaha `:id` dynamic route parameter hai.

  React URL se actual value extract karke component ko provide kar deta hai.

* Kaun se problem par based hain?

  Maan lo e-commerce application hai.

  Products:

  ```text
  Product 101
  Product 102
  Product 103
  ```

  Agar static routes use kare:

  ```jsx
  /product-101
  /product-102
  /product-103
  ```

  To har product ke liye alag route create karna padega.

  Ye scalable nahi hai.

  Dynamic routing:

  ```jsx
  /products/:productId
  ```

  Example URLs:

  ```text
  /products/101

  /products/102

  /products/103
  ```

  Ek hi route sab products handle kar lega.

* Kaise work karta hain?

  Route Definition:

  ```jsx
  <Route
    path="/users/:id"
    element={<UserDetails />}
  />
  ```

  URL:

  ```text
  /users/123
  ```

  React Router internally:

  ```text
  id = 123
  ```

  extract karega.

  Component me access:

  ```jsx
  import { useParams }
    from "react-router-dom";

  function UserDetails() {
    const { id } = useParams();

    return <h1>{id}</h1>;
  }
  ```

  Flow:

  ```text
  URL
    ↓
  Route Match
    ↓
  Extract Params
    ↓
  Render Component
  ```

  Multiple Params:

  ```jsx
  /users/:userId/orders/:orderId
  ```

  URL:

  ```text
  /users/10/orders/500
  ```

  Result:

  ```jsx
  {
    userId: "10",
    orderId: "500"
  }
  ```

  Query Parameters alag concept hain.

  Example:

  ```text
  /products?category=mobile
  ```

  Access:

  ```jsx
  const [searchParams] =
    useSearchParams();
  ```

* Real world Projects me kaise implement hota hain?

  Enterprise applications me dynamic routes bahut common hote hain.

  Examples:

  ```text
  /users/:id

  /customers/:customerId

  /orders/:orderId

  /products/:productId

  /reports/:reportId
  ```

  CRM Example:

  ```jsx
  /customers/145
  ```

  Component:

  ```jsx
  const { customerId } =
    useParams();
  ```

  API Call:

  ```jsx
  useEffect(() => {
    fetchCustomer(customerId);
  }, [customerId]);
  ```

  Benefits:

  - Reusable Components
  - Cleaner Routes
  - Better Scalability
  - SEO Friendly URLs
  - Easier Maintenance

  Large applications me nested dynamic routes bhi common hain.

  Example:

  ```text
  /organizations/:orgId
      /users/:userId
      /permissions/:permissionId
  ```

  Isse hierarchical business data ko efficiently represent kiya ja sakta hai.

* Real World Example

  Ek CRM application me customer details page tha.

  Route:

  ```jsx
  /customers/:customerId
  ```

  URLs:

  ```text
  /customers/101

  /customers/102

  /customers/103
  ```

  Component:

  ```jsx
  const { customerId } =
    useParams();
  ```

  API:

  ```jsx
  GET /api/customers/101
  ```

  Same component thousands of customers ke liye reuse ho raha tha without creating separate routes.

`Interview Answer:`

React Router handles dynamic routes using route parameters. Dynamic segments are defined using the `:` syntax within a route path, allowing a single route definition to match multiple URL patterns.

When a URL matches a dynamic route, React Router extracts the parameter values and makes them available through the `useParams` hook. These parameters are commonly used to fetch data, render resource-specific pages, and build scalable routing structures.

Dynamic routing is widely used in applications for user profiles, product pages, customer details, order management, and other resource-based views. It enables reusable components and significantly reduces the need for creating multiple static routes.

Example:

```jsx
<Route
  path="/users/:id"
  element={<UserDetails />}
/>
```

Component:

```jsx
import { useParams }
  from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return <h1>User {id}</h1>;
}
```

If the URL is:

```text
/users/123
```

React Router extracts:

```javascript
{
  id: "123"
}
```

and provides it to the component through `useParams()`.

---

20. # How do you handle access control (auth-guard) in React?

`Hinglish Explanation:`

* Kya hain?

  Access Control ya Auth Guard ek mechanism hai jo ensure karta hai ki sirf authorized users hi specific routes, pages ya features access kar saken.

  React application me har user ko har page access nahi milna chahiye.

  Example:

  ```text
  Guest User
      ↓
  Login Page
  Signup Page
  ```

  ```text
  Authenticated User
      ↓
  Dashboard
  Profile
  Orders
  ```

  ```text
  Admin User
      ↓
  User Management
  Reports
  Settings
  ```

  Auth Guard ka purpose unauthorized users ko restricted areas se block karna hai.

* Kaun se problem par based hain?

  Maan lo ek user directly browser me URL enter kare:

  ```text
  /admin
  ```

  Agar protection na ho:

  ```text
  User Opens URL
       ↓
  Admin Page Visible
  ```

  Ye security issue ho sakta hai.

  Access Control ensure karta hai:

  ```text
  User Opens URL
       ↓
  Check Authentication
       ↓
  Check Authorization
       ↓
  Allow / Deny Access
  ```

  Important:

  ```text
  Frontend Auth Guard
      ≠
  Real Security
  ```

  Backend authorization hamesha required hoti hai.

* Kaise work karta hain?

  Authentication State:

  ```jsx
  {
    isAuthenticated: true,
    role: "admin"
  }
  ```

  Usually store hoti hai:

  - Context API
  - Redux Toolkit
  - Zustand

  Example:

  ```jsx
  const {
    user,
    isAuthenticated
  } = useAuth();
  ```

  Protected Route:

  ```jsx
  function ProtectedRoute({
    children
  }) {
    const { isAuthenticated } =
      useAuth();

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  }
  ```

  Usage:

  ```jsx
  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />
  ```

  Flow:

  ```text
  Route Request
       ↓
  Check Auth
       ↓
  Authenticated?
     /    \
   Yes    No
    ↓      ↓
  Allow  Redirect
  ```

  Role-Based Access Control (RBAC):

  Example:

  ```jsx
  function AdminRoute({
    children
  }) {
    const { user } = useAuth();

    if (
      user?.role !== "admin"
    ) {
      return (
        <Navigate
          to="/unauthorized"
        />
      );
    }

    return children;
  }
  ```

  Usage:

  ```jsx
  <Route
    path="/admin"
    element={
      <AdminRoute>
        <AdminDashboard />
      </AdminRoute>
    }
  />
  ```

* Real world Projects me kaise implement hota hain?

  Enterprise applications me authentication aur authorization generally JWT ya session-based authentication ke saath implement hoti hai.

  Flow:

  ```text
  Login
      ↓
  Receive Token
      ↓
  Fetch User Permissions
      ↓
  Store Auth State
      ↓
  Route Protection
  ```

  Example:

  User:

  ```json
  {
    "id": 101,
    "role": "manager",
    "permissions": [
      "VIEW_CUSTOMERS",
      "EDIT_CUSTOMERS"
    ]
  }
  ```

  Feature Level Protection:

  ```jsx
  {
    permissions.includes(
      "EDIT_CUSTOMERS"
    ) && (
      <EditButton />
    );
  }
  ```

  Route Level Protection:

  ```jsx
  <ProtectedRoute>
    <Customers />
  </ProtectedRoute>
  ```

  Role Level Protection:

  ```jsx
  <RoleGuard role="admin">
    <AdminPanel />
  </RoleGuard>
  ```

  Production applications me:

  - Route Guards
  - Role Guards
  - Permission Guards

  teeno layers commonly use hote hain.

  Important Senior-Level Point:

  ```text
  Frontend Guards
      ↓
  User Experience

  Backend Authorization
      ↓
  Actual Security
  ```

  Agar backend authorization missing hai to koi bhi API directly call karke protected data access kar sakta hai.

* Real World Example

  Ek CRM application me:

  Roles:

  ```text
  Admin
  Manager
  Sales Agent
  ```

  Admin:

  ```text
  Manage Users
  View Reports
  Delete Customers
  ```

  Manager:

  ```text
  View Reports
  Manage Customers
  ```

  Sales Agent:

  ```text
  View Assigned Customers
  ```

  React Router guards ke through pages protect ki gayi thi aur backend APIs role-based authorization verify kar rahi thi.

  Isse UI level aur API level dono protection achieve hui.

`Interview Answer:`

Access control in React is typically implemented using protected routes, role-based access control (RBAC), and permission-based authorization. The frontend checks the user's authentication state and permissions before rendering protected pages or features.

A common approach is to create a reusable Protected Route component that verifies whether the user is authenticated. If authentication fails, the user is redirected to a login page. For role-based access, additional checks can be performed to validate user roles or permissions before granting access.

In large-scale applications, authentication state is usually managed using Context API, Redux Toolkit, or Zustand, while user roles and permissions are fetched from the backend after login.

It is important to note that frontend route guards improve user experience but do not provide actual security. All authorization rules must also be enforced on backend APIs.

Example:

```jsx
function ProtectedRoute({
  children
}) {
  const { isAuthenticated } =
    useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
```

Usage:

```jsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

This ensures that only authenticated users can access the dashboard route, while unauthorized users are redirected to the login page.

---

21. # How do you use useReducer and what is it best for?

`Hinglish Explanation:`

* Kya hain?

  `useReducer` React ka built-in hook hai jo complex state management ke liye use hota hai. Ye Redux ke same pattern par based hai jahan state directly update nahi hoti, balki actions dispatch kiye jaate hain aur reducer function decide karta hai ki state kaise update hogi.

  `useState` simple state ke liye bahut accha hai, lekin jab state me multiple fields, complex transitions ya interconnected updates ho, tab `useReducer` zyada maintainable solution provide karta hai.

  Flow:

  ```text
  Action Dispatch
        ↓
     Reducer
        ↓
  New State Return
        ↓
     Re-render
  ```

* Kaun se problem par based hain?

  Maan lo ek form hai:

  ```jsx
  {
    loading: false,
    data: null,
    error: null
  }
  ```

  `useState` approach:

  ```jsx
  setLoading(true);
  setData(response);
  setError(null);
  ```

  Jaise-jaise application grow hoti hai:

  ```text
  More State Variables
          ↓
  More setState Calls
          ↓
  Difficult State Management
  ```

  Example:

  ```text
  Loading State
  Success State
  Error State
  Retry State
  ```

  Multiple state updates ko manage karna difficult ho sakta hai.

  Isi problem ko `useReducer` solve karta hai.

* Kaise work karta hain?

  Reducer Function:

  ```jsx
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };

      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };

      default:
        return state;
    }
  }
  ```

  Hook:

  ```jsx
  const [state, dispatch] =
    useReducer(reducer, {
      count: 0,
    });
  ```

  Action Dispatch:

  ```jsx
  dispatch({
    type: "INCREMENT",
  });
  ```

  Flow:

  ```text
  dispatch()
      ↓
  Reducer Executes
      ↓
  New State Created
      ↓
  Component Re-render
  ```

  Async Request Example:

  ```text
  FETCH_START
       ↓
  loading = true

  FETCH_SUCCESS
       ↓
  data update

  FETCH_ERROR
       ↓
  error update
  ```

  Is tarah state transitions predictable aur centralized ho jaate hain.

* Real world Projects me kaise implement hota hain?

  Enterprise applications me `useReducer` commonly use hota hai:

  - Complex Forms
  - Multi-step Wizards
  - Shopping Cart
  - API State Management
  - Dashboard Filters
  - Workflow Engines

  Example:

  ```jsx
  const initialState = {
    loading: false,
    data: [],
    error: null,
  };
  ```

  Reducer:

  ```jsx
  function reducer(state, action) {
    switch (action.type) {
      case "FETCH_START":
        return {
          ...state,
          loading: true,
        };

      case "FETCH_SUCCESS":
        return {
          loading: false,
          data: action.payload,
          error: null,
        };

      case "FETCH_ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      default:
        return state;
    }
  }
  ```

  Dispatch:

  ```jsx
  dispatch({
    type: "FETCH_START",
  });
  ```

  Benefits:

  - Predictable State Updates
  - Easier Debugging
  - Centralized Logic
  - Better Scalability
  - Redux-like Architecture

  Large applications me `useReducer + Context API` ka combination frequently use hota hai lightweight global state management ke liye.

* Real World Example

  Ek CRM application me customer filter panel tha.

  State:

  ```text
  Search
  Status
  Date Range
  Sort
  Pagination
  ```

  Initially multiple `useState` hooks use ho rahe the.

  Baad me:

  ```jsx
  useReducer()
  ```

  implement kiya gaya.

  Result:

  ```text
  Cleaner Logic
  Better Maintainability
  Easier Debugging
  ```

  kyunki saare state transitions reducer me centralized ho gaye.

`Interview Answer:`

`useReducer` is a React hook used for managing complex state logic through a reducer function and dispatched actions. Instead of directly updating state, components dispatch actions, and the reducer determines how the state should change.

It is particularly useful when state contains multiple related values, when state transitions are complex, or when the next state depends heavily on the previous state. The pattern is similar to Redux and provides predictable, centralized state management.

In production applications, `useReducer` is commonly used for forms, API request states, workflows, filters, and other scenarios where multiple state updates need to be coordinated consistently.

Example:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
}

const [state, dispatch] =
  useReducer(reducer, {
    count: 0,
  });

dispatch({
  type: "INCREMENT",
});
```

This approach keeps state transitions predictable and easier to maintain as application complexity grows.

---

22. How do you handle WebSocket or real-time data in React?

`Hinglish Explanation:`

WebSocket connection ko useEffect me create kiya jata hai aur cleanup function me close kiya jata hai. Real-time updates state me store kiye jate hain.

`Interview Answer:`

Real-time data can be handled using WebSockets by establishing connections, listening for events, and updating component state accordingly.

Example:

```javascript
useEffect(() => {
  const socket = new WebSocket(url);

  return () => socket.close();
}, []);
```

---

23. What is the role of key in React lists?

`Hinglish Explanation:`

Key React ko identify karne me help karti hai ki list me kaunsa item add, update ya remove hua hai. Stable aur unique key use karna important hai.

`Interview Answer:`

Keys help React efficiently identify list items and optimize updates during reconciliation.

Example:

```javascript
users.map(user => (
  <li key={user.id}>
    {user.name}
  </li>
));
```

---

24. Explain compound components pattern.

`Hinglish Explanation:`

Compound Components pattern me multiple related components milkar ek shared state aur behavior use karte hain. Ye flexible aur reusable APIs create karne me help karta hai.

`Interview Answer:`

The Compound Components pattern allows related components to share state and behavior while giving consumers flexible control over rendering.

Example:

```javascript
<Tabs>
  <Tabs.List />
  <Tabs.Panel />
</Tabs>
```

---

25. How does React DevTools work under the hood?

`Hinglish Explanation:`

React DevTools React Fiber tree se connect hota hai aur components, props, state aur hooks ki information read karta hai debugging ke liye.

`Interview Answer:`

React DevTools integrates with React's Fiber architecture to inspect component trees, state, props, and rendering behavior.

Example:

```text
Component Tree
→ Props
→ State
→ Hooks
```

---

26. What is StrictMode in React and why use it?

`Hinglish Explanation:`

StrictMode development mode me unsafe lifecycle methods aur side effects identify karne me help karta hai. Production build me iska effect nahi hota.

`Interview Answer:`

StrictMode is a development-only tool that helps identify potential issues, deprecated APIs, and unexpected side effects.

Example:

```javascript
<React.StrictMode>
  <App />
</React.StrictMode>
```

---

27. How would you implement theme switching in React?

`Hinglish Explanation:`

Theme switching generally Context API ya state management ke through implement ki jati hai. User preference ke basis par CSS classes ya theme objects change kiye jate hain.

`Interview Answer:`

Theme switching is commonly implemented using Context API and dynamic styles that update based on the selected theme.

Example:

```javascript
setTheme(
  theme === "light"
    ? "dark"
    : "light"
);
```

---

28. How do you test React components (Jest, RTL)?

`Hinglish Explanation:`

Jest testing framework provide karta hai aur React Testing Library user perspective se components test karne me help karti hai.

`Interview Answer:`

React components are commonly tested using Jest for assertions and React Testing Library for simulating user interactions.

Example:

```javascript
render(<Button />);

screen.getByText("Submit");
```

---

29. How do you implement HOC (Higher-Order Components)?

`Hinglish Explanation:`

HOC ek function hota hai jo component receive karta hai aur additional functionality ke saath enhanced component return karta hai.

`Interview Answer:`

A Higher-Order Component is a function that takes a component as input and returns a new component with extended behavior.

Example:

```javascript
const withAuth = (Component) =>
  (props) =>
    <Component {...props} />;
```

---

30. What is the role of forwardRef in React?

`Hinglish Explanation:`

forwardRef parent component ko child component ke DOM element ya ref tak direct access dene ke liye use hota hai.

`Interview Answer:`

forwardRef allows a parent component to pass a ref through a child component and access the underlying DOM element.

Example:

```javascript
const Input = React.forwardRef(
  (props, ref) => (
    <input ref={ref} />
  )
);
```

---

## 🌐 Node + Express (221-310)

221. Node.js kya hai?

`Hinglish Explanation:`

Node.js Chrome V8 engine par based JavaScript runtime hai jo JavaScript ko browser ke bahar run karne deta hai. Ye event-driven aur non-blocking architecture use karta hai, isliye scalable backend applications ke liye suitable hai.

`Interview Answer:`

Node.js is a JavaScript runtime built on Chrome's V8 engine. It uses an event-driven, non-blocking I/O model, making it efficient for building scalable server-side applications.

Example:

```javascript
console.log("Hello Node.js");
```

---

222. Event loop Node mein?

`Hinglish Explanation:`

Event Loop Node.js ka core mechanism hai jo asynchronous operations ko handle karta hai. Ye callback queue se tasks uthakar execute karta hai jab call stack empty hota hai.

`Interview Answer:`

The Event Loop is responsible for handling asynchronous operations in Node.js. It continuously checks the call stack and executes queued callbacks when the stack is empty.

Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
```

---

223. Non-blocking I/O?

`Hinglish Explanation:`

Non-blocking I/O me application kisi operation ke complete hone ka wait nahi karti. Request process hoti rehti hai aur result aane par callback execute hota hai.

`Interview Answer:`

Non-blocking I/O allows Node.js to continue executing other tasks while waiting for I/O operations such as file reads or database queries to complete.

Example:

```javascript
fs.readFile("file.txt", (err, data) => {
  console.log(data);
});
```

---

224. Streams kya hain?

`Hinglish Explanation:`

Streams data ko chunks me process karte hain instead of loading the entire data into memory. Ye large files aur real-time data processing ke liye useful hote hain.

`Interview Answer:`

Streams are objects that allow reading or writing data in chunks, improving memory efficiency and performance.

Example:

```javascript
const stream = fs.createReadStream("file.txt");
```

---

225. Buffers kya hain?

`Hinglish Explanation:`

Buffer raw binary data ko temporarily memory me store karta hai. Streams aur file operations me Buffer ka use hota hai.

`Interview Answer:`

A Buffer is a temporary memory area used to store binary data before processing or transmission.

Example:

```javascript
const buffer = Buffer.from("Hello");
```

---

226. Modules system?

`Hinglish Explanation:`

Modules code ko reusable aur maintainable banate hain. Node.js CommonJS aur ES Modules dono support karta hai.

`Interview Answer:`

The module system allows code organization into reusable files. Node.js supports both CommonJS and ES Modules.

Example:

```javascript
module.exports = add;
```

---

227. require vs import?

`Hinglish Explanation:`

`require()` CommonJS module system ka part hai, jabki `import` ES Modules ka. Modern applications me mostly import/export use hota hai.

`Interview Answer:`

`require` is used in CommonJS modules, whereas `import` is used in ES Modules and supports static analysis.

Example:

```javascript
const express = require("express");

// OR

import express from "express";
```

---

228. npm kya hai?

`Hinglish Explanation:`

npm (Node Package Manager) packages install, update aur manage karne ke liye use hota hai. Ye Node.js ke saath by default aata hai.

`Interview Answer:`

npm is the default package manager for Node.js used to install, manage, and publish JavaScript packages.

Example:

```bash
npm install express
```

---

229. package.json kya hai?

`Hinglish Explanation:`

package.json project metadata, dependencies, scripts aur configuration store karta hai. Ye Node.js project ka main configuration file hota hai.

`Interview Answer:`

package.json is a configuration file that contains project information, dependencies, scripts, and package metadata.

Example:

```json
{
  "name": "my-app",
  "version": "1.0.0"
}
```

---

230. process object?

`Hinglish Explanation:`

Process object current Node.js process ki information aur control provide karta hai. Isse environment variables aur process events access kiye ja sakte hain.

`Interview Answer:`

The process object provides information and control over the current Node.js process, including environment variables and runtime details.

Example:

```javascript
console.log(process.env.NODE_ENV);
```

---

231. Middleware kya hai?

`Hinglish Explanation:`

Middleware request aur response ke beech execute hone wala function hota hai. Ye logging, validation aur authentication ke liye use hota hai.

`Interview Answer:`

Middleware functions have access to the request, response, and next function, allowing them to process requests before reaching route handlers.

Example:

```javascript
app.use((req, res, next) => {
  next();
});
```

---

232. Express kya hai?

`Hinglish Explanation:`

Express Node.js ka popular web framework hai jo routing, middleware aur API development ko simple banata hai.

`Interview Answer:`

Express is a lightweight web framework for Node.js that simplifies routing, middleware handling, and API development.

Example:

```javascript
const express = require("express");
const app = express();
```

---

233. Routing kaise hoti hai?

`Hinglish Explanation:`

Routing URL aur HTTP method ke basis par request ko specific handler tak pahunchati hai.

`Interview Answer:`

Routing maps incoming requests to specific controller functions based on URL patterns and HTTP methods.

Example:

```javascript
app.get("/users", (req, res) => {
  res.send("Users");
});
```

---

234. Error handling middleware?

`Hinglish Explanation:`

Express me error handling middleware application errors ko centrally manage karta hai. Iska signature 4 parameters wala hota hai.

`Interview Answer:`

Error-handling middleware catches application errors and returns standardized error responses.

Example:

```javascript
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});
```

---

235. Custom middleware?

`Hinglish Explanation:`

Custom middleware application-specific logic implement karne ke liye banaya jata hai, jaise authentication ya request logging.

`Interview Answer:`

Custom middleware contains reusable request-processing logic that can be applied across routes.

Example:

```javascript
function logger(req, res, next) {
  console.log(req.url);
  next();
}
```

---

236. Request lifecycle?

`Hinglish Explanation:`

Request client se server tak aati hai, middleware se pass hoti hai, route handler execute hota hai aur finally response return hota hai.

`Interview Answer:`

A request passes through middleware, reaches the route handler, generates a response, and is then sent back to the client.

Example:

```text
Request
→ Middleware
→ Route
→ Response
```

---

237. REST API kya hai?

`Hinglish Explanation:`

REST API HTTP methods aur resources ke basis par client-server communication ka standard architecture hai.

`Interview Answer:`

REST is an architectural style that uses HTTP methods and resource-based URLs to perform operations on data.

Example:

```http
GET /users
POST /users
```

---

238. CRUD API kaise banate ho?

`Hinglish Explanation:`

CRUD API me Create, Read, Update aur Delete operations implement kiye jate hain using HTTP methods.

`Interview Answer:`

CRUD APIs expose endpoints for creating, retrieving, updating, and deleting resources using standard HTTP methods.

Example:

```javascript
POST   /users
GET    /users
PUT    /users/:id
DELETE /users/:id
```

---

239. Validation kaise karte ho?

`Hinglish Explanation:`

Validation ensure karti hai ki incoming request data expected format aur rules follow kare. Express-validator ya Joi commonly use hote hain.

`Interview Answer:`

Validation verifies incoming data before processing it to ensure correctness, security, and data integrity.

Example:

```javascript
if (!email) {
  return res.status(400).send();
}
```

---

240. File upload?

`Hinglish Explanation:`

Node.js me file upload ke liye commonly Multer middleware use kiya jata hai. Uploaded files ko local storage ya cloud storage me save kiya ja sakta hai.

`Interview Answer:`

File uploads are typically handled using middleware such as Multer, which processes multipart/form-data requests.

Example:

```javascript
const upload = multer({
  dest: "uploads/"
});
```

241. Authentication?

`Hinglish Explanation:`

Authentication user ki identity verify karne ka process hai. Commonly username-password, JWT, OAuth ya social login use karke authentication implement ki jati hai.

`Interview Answer:`

Authentication is the process of verifying a user's identity before granting access to an application or resource.

Example:

```javascript
const user = await User.findOne({ email });

if (user && isValidPassword) {
  // Authenticated
}
```

---

242. Authorization?

`Hinglish Explanation:`

Authorization determine karta hai ki authenticated user kya actions perform kar sakta hai. Ye roles aur permissions ke basis par decide hota hai.

`Interview Answer:`

Authorization determines what resources or actions an authenticated user is allowed to access.

Example:

```javascript
if (user.role !== "admin") {
  return res.status(403).send();
}
```

---

243. JWT kaise kaam karta hai?

`Hinglish Explanation:`

JWT me server login ke baad signed token generate karta hai. Client token ko store karta hai aur har request me bhejta hai verification ke liye.

`Interview Answer:`

JWT (JSON Web Token) is a signed token used to securely transmit user information and authenticate requests without maintaining server-side sessions.

Example:

```javascript
const token = jwt.sign(
  { id: user.id },
  SECRET
);
```

---

244. OAuth kya hai?

`Hinglish Explanation:`

OAuth ek authorization framework hai jo users ko third-party applications ko limited access dene ki permission deta hai bina password share kiye.

`Interview Answer:`

OAuth is an authorization protocol that allows applications to access user resources on behalf of a user without exposing credentials.

Example:

```javascript
passport.authenticate("google");
```

---

245. Sessions vs Tokens?

`Hinglish Explanation:`

Session-based auth me data server par store hota hai, jabki token-based auth me information token ke andar hoti hai. JWT stateless authentication ka example hai.

`Interview Answer:`

Sessions store user state on the server, while tokens store authentication data on the client and are validated on each request.

Example:

```javascript
req.session.user = user;
```

---

246. Cookies handling?

`Hinglish Explanation:`

Cookies client browser me small data store karti hain. Authentication, preferences aur session management ke liye use hoti hain.

`Interview Answer:`

Cookies are small pieces of data stored in the browser and commonly used for session tracking and authentication.

Example:

```javascript
res.cookie("token", jwtToken);
```

---

247. Rate limiting?

`Hinglish Explanation:`

Rate limiting API abuse aur DDoS attacks prevent karne ke liye requests ki limit define karta hai.

`Interview Answer:`

Rate limiting restricts the number of requests a client can make within a specified time window.

Example:

```javascript
app.use(rateLimit({
  max: 100
}));
```

---

248. Helmet kya hai?

`Hinglish Explanation:`

Helmet Express middleware hai jo security-related HTTP headers set karta hai aur common vulnerabilities se protection provide karta hai.

`Interview Answer:`

Helmet is an Express middleware that improves application security by setting various HTTP security headers.

Example:

```javascript
app.use(helmet());
```

---

249. Logging kaise karte ho?

`Hinglish Explanation:`

Logging application activities, requests aur errors track karne ke liye use hoti hai. Winston aur Pino popular logging libraries hain.

`Interview Answer:`

Logging helps monitor application behavior, track errors, and troubleshoot issues in production environments.

Example:

```javascript
logger.info("Server started");
```

---

250. Morgan kya hai?

`Hinglish Explanation:`

Morgan Express middleware hai jo HTTP requests ko automatically log karta hai.

`Interview Answer:`

Morgan is an HTTP request logger middleware for Express that records incoming requests and responses.

Example:

```javascript
app.use(morgan("combined"));
```

---

251. Clustering kya hai?

`Hinglish Explanation:`

Clustering multiple Node.js processes create karta hai jo CPU cores ka better utilization karte hain aur application throughput improve karte hain.

`Interview Answer:`

Clustering allows Node.js applications to spawn multiple worker processes to utilize multi-core CPUs efficiently.

Example:

```javascript
cluster.fork();
```

---

252. Worker threads?

`Hinglish Explanation:`

Worker Threads CPU-intensive tasks ko separate threads me execute karte hain taaki main event loop block na ho.

`Interview Answer:`

Worker Threads enable parallel execution of CPU-heavy tasks without blocking the main Node.js event loop.

Example:

```javascript
const worker =
  new Worker("./worker.js");
```

---

253. Load balancing?

`Hinglish Explanation:`

Load balancing incoming traffic ko multiple application instances me distribute karta hai jisse performance aur availability improve hoti hai.

`Interview Answer:`

Load balancing distributes incoming requests across multiple servers or instances to improve scalability and reliability.

Example:

```text
Client
→ Load Balancer
→ App Servers
```

---

254. Scaling Node app?

`Hinglish Explanation:`

Node.js applications ko horizontal scaling, clustering, caching aur load balancing ke through scale kiya ja sakta hai.

`Interview Answer:`

Node.js applications can be scaled horizontally by running multiple instances behind a load balancer.

Example:

```text
App1
App2
App3
```

---

255. Microservices Node mein?

`Hinglish Explanation:`

Microservices architecture me application ko multiple independent services me divide kiya jata hai jo independently deploy aur scale ki ja sakti hain.

`Interview Answer:`

Microservices are independently deployable services that communicate over APIs or messaging systems.

Example:

```text
User Service
Order Service
Payment Service
```

---

256. GraphQL kya hai?

`Hinglish Explanation:`

GraphQL API query language hai jo client ko required fields specify karne deta hai. Isse over-fetching aur under-fetching reduce hoti hai.

`Interview Answer:`

GraphQL is a query language for APIs that allows clients to request exactly the data they need.

Example:

```graphql
{
  user {
    name
  }
}
```

---

257. REST vs GraphQL?

`Hinglish Explanation:`

REST multiple endpoints use karta hai, jabki GraphQL generally single endpoint use karta hai aur client-specific data fetch karta hai.

`Interview Answer:`

REST exposes multiple resource-based endpoints, whereas GraphQL provides a single endpoint with flexible querying capabilities.

Example:

```text
REST     → /users
GraphQL  → /graphql
```

---

258. API versioning?

`Hinglish Explanation:`

API versioning backward compatibility maintain karne ke liye use hoti hai jab APIs me breaking changes introduce kiye jate hain.

`Interview Answer:`

API versioning allows changes to APIs without breaking existing clients by maintaining multiple API versions.

Example:

```http
/api/v1/users
/api/v2/users
```

---

259. Pagination?

`Hinglish Explanation:`

Pagination large datasets ko smaller chunks me divide karti hai taaki response size aur database load reduce ho.

`Interview Answer:`

Pagination limits the amount of data returned per request, improving performance and user experience.

Example:

```javascript
GET /users?page=1&limit=10
```

---

260. Filtering & sorting?

`Hinglish Explanation:`

Filtering required records select karti hai aur sorting results ko specific order me arrange karti hai.

`Interview Answer:`

Filtering narrows down results based on conditions, while sorting arranges records in a specified order.

Example:

```javascript
GET /users?role=admin&sort=name
```

261. Redis integration?

`Hinglish Explanation:`

Redis ek in-memory data store hai jo caching, sessions aur pub/sub systems ke liye use hota hai. Ye database load reduce karta hai aur application performance improve karta hai.

`Interview Answer:`

Redis is an in-memory data store commonly used for caching, session management, and real-time messaging to improve application performance.

Example:

```javascript
const redis = new Redis();

await redis.set("user", "Raj");
```

---

262. Caching strategies?

`Hinglish Explanation:`

Caching frequently used data ko temporary store karti hai taaki repeated database calls avoid ho sakein. Common strategies Cache-Aside, Write-Through aur Write-Back hain.

`Interview Answer:`

Caching strategies reduce latency and database load by storing frequently accessed data closer to the application.

Example:

```javascript
const data =
  await redis.get("users");
```

---

263. Queue system?

`Hinglish Explanation:`

Queue system asynchronous tasks ko process karne ke liye use hota hai. Heavy operations ko background me execute karke application responsiveness improve ki jati hai.

`Interview Answer:`

A queue system manages asynchronous tasks by processing jobs in the background instead of handling them immediately.

Example:

```javascript
await queue.add("send-email", {
  userId: 1
});
```

---

264. Background jobs?

`Hinglish Explanation:`

Background jobs long-running tasks jaise emails, reports ya notifications ko main request cycle se alag process karti hain.

`Interview Answer:`

Background jobs execute time-consuming tasks asynchronously, improving API response times and user experience.

Example:

```javascript
queue.process(async (job) => {
  sendEmail(job.data);
});
```

---

265. Cron jobs?

`Hinglish Explanation:`

Cron jobs scheduled tasks ko predefined intervals par automatically execute karti hain. Jaise daily reports ya database cleanup.

`Interview Answer:`

Cron jobs are scheduled tasks that run automatically at specific times or intervals.

Example:

```javascript
cron.schedule("0 0 * * *", () => {
  cleanup();
});
```

---

266. Email service?

`Hinglish Explanation:`

Node.js me emails send karne ke liye Nodemailer, SendGrid ya AWS SES use kiye jate hain. Production me transactional email services preferred hoti hain.

`Interview Answer:`

Email services allow applications to send notifications, verification emails, and transactional messages.

Example:

```javascript
await transporter.sendMail({
  to: "user@test.com"
});
```

---

267. File storage (S3)?

`Hinglish Explanation:`

Amazon S3 cloud object storage service hai jo files, images aur backups store karne ke liye use hoti hai. Ye scalable aur highly available hai.

`Interview Answer:`

Amazon S3 is a cloud storage service used to store and retrieve files securely and at scale.

Example:

```javascript
await s3.upload({
  Bucket: "uploads"
});
```

---

268. WebSockets?

`Hinglish Explanation:`

WebSockets client aur server ke beech persistent two-way communication provide karte hain. Ye real-time applications ke liye useful hain.

`Interview Answer:`

WebSockets establish a persistent connection between client and server, enabling real-time communication.

Example:

```javascript
ws.send("Hello");
```

---

269. Socket.io?

`Hinglish Explanation:`

Socket.io WebSockets ke upar built library hai jo real-time communication aur automatic reconnection features provide karti hai.

`Interview Answer:`

Socket.io is a real-time communication library that simplifies WebSocket implementation and provides fallback mechanisms.

Example:

```javascript
io.on("connection", socket => {
  console.log("Connected");
});
```

---

270. Real-time apps?

`Hinglish Explanation:`

Real-time applications instantly updates deliver karti hain bina page refresh ke. Chat apps, live dashboards aur multiplayer games common examples hain.

`Interview Answer:`

Real-time applications provide instant updates to users using technologies like WebSockets and Socket.io.

Example:

```javascript
socket.emit("message", data);
```

---

271. Security best practices?

`Hinglish Explanation:`

Input validation, authentication, HTTPS, rate limiting aur secure headers implement karna important security practices hain.

`Interview Answer:`

Security best practices include validating input, using HTTPS, implementing authentication, and protecting against common attacks.

Example:

```javascript
app.use(helmet());
```

---

272. CORS handle kaise?

`Hinglish Explanation:`

CORS browser security policy ko manage karta hai aur different domains ke beech requests allow ya restrict karta hai.

`Interview Answer:`

CORS controls which domains can access server resources and is commonly configured using middleware.

Example:

```javascript
app.use(cors({
  origin: "*"
}));
```

---

273. Input sanitization?

`Hinglish Explanation:`

Input sanitization malicious user input ko clean karti hai taaki XSS aur injection attacks prevent ho sakein.

`Interview Answer:`

Input sanitization removes or escapes unsafe content from user input to improve application security.

Example:

```javascript
const clean =
  validator.escape(input);
```

---

274. SQL/NoSQL injection prevent?

`Hinglish Explanation:`

Parameterized queries, ORM tools aur input validation use karke injection attacks prevent kiye jate hain.

`Interview Answer:`

Injection attacks can be prevented using parameterized queries, input validation, and ORM libraries.

Example:

```javascript
User.findOne({
  email: req.body.email
});
```

---

275. HTTPS setup?

`Hinglish Explanation:`

HTTPS SSL/TLS certificates ke through secure communication provide karta hai. Production applications me HTTPS mandatory hona chahiye.

`Interview Answer:`

HTTPS encrypts communication between clients and servers using SSL/TLS certificates.

Example:

```javascript
https.createServer(
  options,
  app
);
```

---

276. Reverse proxy?

`Hinglish Explanation:`

Reverse proxy client requests ko backend servers tak forward karta hai aur load balancing, SSL termination provide karta hai.

`Interview Answer:`

A reverse proxy sits between clients and servers, forwarding requests while improving security and scalability.

Example:

```text
Client
→ Nginx
→ Node.js
```

---

277. Nginx integration?

`Hinglish Explanation:`

Nginx commonly reverse proxy aur load balancer ke roop me Node.js applications ke saath use hota hai.

`Interview Answer:`

Nginx is often used in front of Node.js applications to handle traffic, SSL termination, and load balancing.

Example:

```nginx
proxy_pass
http://localhost:3000;
```

---

278. Docker Node app?

`Hinglish Explanation:`

Docker application aur dependencies ko container me package karta hai jisse deployment consistent aur portable ban jata hai.

`Interview Answer:`

Docker containers package Node.js applications with their dependencies, ensuring consistent deployment across environments.

Example:

```dockerfile
FROM node:20

WORKDIR /app
```

---

279. Deployment strategies?

`Hinglish Explanation:`

Common deployment strategies me Blue-Green, Rolling aur Canary deployments shamil hain. Ye downtime aur deployment risk reduce karte hain.

`Interview Answer:`

Deployment strategies define how new application versions are released while minimizing downtime and risk.

Example:

```text
Blue → Old Version
Green → New Version
```

---

280. Monitoring tools?

`Hinglish Explanation:`

Monitoring tools application performance, logs aur system health track karte hain. Prometheus, Grafana aur New Relic popular options hain.

`Interview Answer:`

Monitoring tools help track application health, performance metrics, and operational issues in production.

Example:

```text
Prometheus
Grafana
New Relic
```

281. High traffic handle kaise?

`Hinglish Explanation:`

High traffic handle karne ke liye load balancing, caching, database optimization aur horizontal scaling use ki jati hai. Bottlenecks identify karke system ko distribute karna important hota hai.

`Interview Answer:`

High traffic is handled using load balancing, caching, horizontal scaling, and efficient database design to distribute workload across multiple resources.

Example:

```text
Load Balancer
   ↓
App1  App2  App3
```

---

282. Memory leak detect?

`Hinglish Explanation:`

Memory leak tab hoti hai jab unused memory release nahi hoti. Heap snapshots, Chrome DevTools aur monitoring tools use karke leaks identify kiye ja sakte hain.

`Interview Answer:`

Memory leaks can be detected using heap dumps, profiling tools, and monitoring memory usage trends over time.

Example:

```bash
node --inspect app.js
```

---

283. API slow ho toh?

`Hinglish Explanation:`

Slow API ke liye database queries, external services aur code bottlenecks analyze karne chahiye. Caching aur query optimization commonly use ki jati hai.

`Interview Answer:`

When an API is slow, profiling, query optimization, caching, and reducing external dependencies are common solutions.

Example:

```javascript
console.time("API");
console.timeEnd("API");
```

---

284. DB bottleneck?

`Hinglish Explanation:`

Database bottlenecks inefficient queries, missing indexes ya excessive connections ki wajah se aate hain. Query optimization aur indexing important solutions hain.

`Interview Answer:`

Database bottlenecks are addressed through indexing, query optimization, caching, and proper connection management.

Example:

```sql
CREATE INDEX idx_email
ON users(email);
```

---

285. Logging strategy?

`Hinglish Explanation:`

Logging strategy me structured logs, error logs aur audit logs maintain kiye jate hain. Logs centralized system me store karna best practice hai.

`Interview Answer:`

A good logging strategy includes structured logging, centralized storage, log levels, and correlation IDs for traceability.

Example:

```javascript
logger.error(
  "Database connection failed"
);
```

---

286. Retry mechanism?

`Hinglish Explanation:`

Retry mechanism temporary failures ke case me operation ko dubara execute karta hai. Exponential backoff commonly use kiya jata hai.

`Interview Answer:`

A retry mechanism automatically re-attempts failed operations, often using exponential backoff to avoid overwhelming services.

Example:

```javascript
for (let i = 0; i < 3; i++) {
  await retry();
}
```

---

287. Circuit breaker?

`Hinglish Explanation:`

Circuit Breaker failing services ko repeatedly call karne se rokta hai. Ye system stability aur fault tolerance improve karta hai.

`Interview Answer:`

The Circuit Breaker pattern prevents repeated calls to failing services and allows systems to recover gracefully.

Example:

```javascript
breaker.fire(request);
```

---

288. Graceful shutdown?

`Hinglish Explanation:`

Graceful shutdown server ko existing requests complete karne ka time deta hai before process terminate hota hai.

`Interview Answer:`

Graceful shutdown ensures ongoing requests are completed and resources are released before the application exits.

Example:

```javascript
process.on("SIGTERM", () => {
  server.close();
});
```

---

289. Zero downtime deploy?

`Hinglish Explanation:`

Zero downtime deployment me new version deploy hota hai bina users ko service interruption diye. Blue-Green aur Rolling deployments common approaches hain.

`Interview Answer:`

Zero downtime deployment ensures application updates occur without interrupting active users or requests.

Example:

```text
Blue → Current
Green → New Version
```

---

290. Load testing kaise karte ho?

`Hinglish Explanation:`

Load testing application ki performance evaluate karti hai under expected ya high traffic conditions. JMeter aur K6 popular tools hain.

`Interview Answer:`

Load testing measures application performance under varying levels of traffic to identify bottlenecks and capacity limits.

Example:

```bash
k6 run load-test.js
```

---

291. Clustering vs Worker Threads?

`Hinglish Explanation:`

Clustering multiple processes create karta hai, jabki Worker Threads same process ke andar multiple threads run karte hain. CPU-intensive tasks ke liye Worker Threads better hain.

`Interview Answer:`

Clustering scales applications across CPU cores using processes, while Worker Threads enable parallel execution within a single process.

Example:

```javascript
cluster.fork();

// Worker
new Worker("./worker.js");
```

---

292. PM2 kya hai?

`Hinglish Explanation:`

PM2 Node.js process manager hai jo monitoring, clustering aur automatic restarts provide karta hai.

`Interview Answer:`

PM2 is a production process manager for Node.js applications that offers monitoring, clustering, and process recovery.

Example:

```bash
pm2 start app.js
```

---

293. Error monitoring tools?

`Hinglish Explanation:`

Error monitoring tools production issues automatically track aur report karte hain. Sentry aur Rollbar commonly use hote hain.

`Interview Answer:`

Error monitoring tools collect exceptions, stack traces, and diagnostics to help developers identify and resolve production issues.

Example:

```javascript
Sentry.captureException(error);
```

---

294. Health checks?

`Hinglish Explanation:`

Health check endpoints application status verify karte hain. Load balancers aur orchestration systems inka use service availability monitor karne ke liye karte hain.

`Interview Answer:`

Health checks provide endpoints that indicate whether an application is running and ready to serve requests.

Example:

```javascript
app.get("/health", (req, res) => {
  res.send("OK");
});
```

---

295. API documentation?

`Hinglish Explanation:`

API documentation endpoints, request formats aur responses explain karti hai. Swagger/OpenAPI widely used standards hain.

`Interview Answer:`

API documentation describes endpoints, request formats, responses, and authentication requirements for developers.

Example:

```yaml
GET /users
POST /users
```

---

296. GraphQL subscriptions?

`Hinglish Explanation:`

GraphQL Subscriptions real-time updates provide karti hain jab server-side data change hota hai. Ye WebSockets par based hoti hain.

`Interview Answer:`

GraphQL Subscriptions enable real-time communication by pushing updates from the server to connected clients.

Example:

```graphql
subscription {
  newMessage
}
```

---

297. Database connection pooling?

`Hinglish Explanation:`

Connection pooling database connections ko reuse karta hai taaki har request ke liye nayi connection create na karni pade.

`Interview Answer:`

Connection pooling improves performance by maintaining and reusing a pool of database connections.

Example:

```javascript
const pool =
  mysql.createPool(config);
```

---

298. Environment configuration?

`Hinglish Explanation:`

Environment-specific settings jaise database URLs aur secrets ko environment variables me store kiya jata hai.

`Interview Answer:`

Environment configuration separates application settings from code and allows different values for development, testing, and production.

Example:

```javascript
process.env.DB_URL;
```

---

299. API gateway?

`Hinglish Explanation:`

API Gateway client requests ko route karta hai aur authentication, rate limiting aur monitoring handle karta hai.

`Interview Answer:`

An API Gateway acts as a single entry point for clients and manages routing, security, and request aggregation.

Example:

```text
Client
 → API Gateway
 → Services
```

---

300. Message queue (RabbitMQ/Kafka)?

`Hinglish Explanation:`

Message queues asynchronous communication enable karti hain. RabbitMQ task queues ke liye aur Kafka high-throughput event streaming ke liye popular hai.

`Interview Answer:`

Message queues decouple services and enable reliable asynchronous communication between distributed systems.

Example:

```javascript
channel.sendToQueue(
  "orders",
  Buffer.from(data)
);
```

301. Event sourcing?

`Hinglish Explanation:`

Event Sourcing me application current state store karne ke bajay state changes ko events ke form me store karti hai. System ki complete history preserve rehti hai aur state ko events replay karke reconstruct kiya ja sakta hai.

`Interview Answer:`

Event Sourcing is a pattern where all state changes are stored as immutable events. The current state can be rebuilt by replaying those events.

Example:

```javascript
[
  { type: "ACCOUNT_CREATED" },
  { type: "MONEY_DEPOSITED", amount: 1000 }
]
```

---

302. CQRS pattern?

`Hinglish Explanation:`

CQRS (Command Query Responsibility Segregation) me read aur write operations ko separate kar diya jata hai. Isse scalability aur performance improve hoti hai.

`Interview Answer:`

CQRS separates read operations (queries) from write operations (commands), allowing independent optimization of each side.

Example:

```javascript
CreateOrderCommand

GetOrdersQuery
```

---

303. Rate limiting algorithms?

`Hinglish Explanation:`

Rate limiting algorithms requests ko control karte hain taaki abuse aur DDoS attacks prevent ho sakein. Common algorithms Fixed Window, Sliding Window aur Token Bucket hain.

`Interview Answer:`

Rate limiting algorithms restrict request frequency and protect systems from abuse, excessive traffic, and denial-of-service attacks.

Example:

```text
Fixed Window
Sliding Window
Token Bucket
Leaky Bucket
```

---

304. API caching strategies?

`Hinglish Explanation:`

API caching frequently requested responses ko temporarily store karti hai. Isse response time improve hota hai aur database load reduce hota hai.

`Interview Answer:`

API caching stores frequently accessed responses to reduce latency, database load, and overall system resource consumption.

Example:

```javascript
const cached =
  await redis.get("users");
```

---

305. Background job monitoring?

`Hinglish Explanation:`

Background jobs ko monitor karna important hai taaki failed jobs, retries aur processing delays track kiye ja sakein. Bull Board aur Agenda dashboards commonly use hote hain.

`Interview Answer:`

Background job monitoring tracks job execution, failures, retries, and processing metrics to ensure reliability.

Example:

```javascript
job.on("failed", () => {
  logger.error("Job Failed");
});
```

---

306. Log aggregation?

`Hinglish Explanation:`

Log aggregation multiple servers aur services ke logs ko ek centralized platform me collect karti hai. Troubleshooting aur monitoring easier ho jati hai.

`Interview Answer:`

Log aggregation centralizes logs from multiple systems, making analysis, monitoring, and debugging more efficient.

Example:

```text
App Servers
    ↓
 Elasticsearch
    ↓
   Kibana
```

---

307. Distributed tracing?

`Hinglish Explanation:`

Distributed tracing request ka complete journey track karti hai jab wo multiple microservices se pass hoti hai. Isse bottlenecks aur failures identify karna easy hota hai.

`Interview Answer:`

Distributed tracing follows requests across multiple services and helps identify latency issues and failures in distributed systems.

Example:

```text
Request
 → Service A
 → Service B
 → Database
```

---

308. Performance benchmarking?

`Hinglish Explanation:`

Benchmarking application ki performance measure karti hai under specific workloads. Isse throughput, latency aur resource usage evaluate ki jati hai.

`Interview Answer:`

Performance benchmarking measures how an application performs under load by analyzing metrics such as response time and throughput.

Example:

```bash
autocannon \
http://localhost:3000
```

---

309. Security scanning?

`Hinglish Explanation:`

Security scanning vulnerabilities aur insecure dependencies detect karne ke liye use hoti hai. Automated scans development lifecycle ka important part hain.

`Interview Answer:`

Security scanning identifies vulnerabilities, insecure configurations, and dependency risks before they reach production.

Example:

```bash
npm audit
```

---

310. Compliance (GDPR, etc.)?

`Hinglish Explanation:`

Compliance regulations jaise GDPR ensure karti hain ki user data securely handle aur process kiya jaye. Privacy, consent aur data protection requirements follow karna mandatory hota hai.

`Interview Answer:`

Compliance standards such as GDPR require organizations to protect user data, maintain privacy, and implement proper data handling practices.

Example:

```text
User Consent
Data Encryption
Right to Delete Data
```


### Additional Important Questions

1. Explain middleware and the types of middleware in Express.

`Hinglish Explanation:`

Middleware functions request aur response ke beech execute hote hain. Ye request ko modify kar sakte hain, validation kar sakte hain ya next middleware ko control transfer kar sakte hain.

Types: Application Middleware, Router Middleware, Error Middleware, Third-party Middleware.

`Interview Answer:`

Middleware functions have access to the request, response, and next function. They are used for tasks such as logging, authentication, validation, and error handling.

Example:

```javascript
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
```

---

2. How does request and response flow in Express?

`Hinglish Explanation:`

Client request server par aati hai, middleware chain se pass hoti hai, route handler execute hota hai aur finally response client ko return kiya jata hai.

`Interview Answer:`

A request flows through middleware functions, reaches the appropriate route handler, and then a response is sent back to the client.

Example:

```text
Request
→ Middleware
→ Route Handler
→ Response
```

---

3. What is the use of next() in Express?

`Hinglish Explanation:`

`next()` current middleware se control next middleware ya route handler ko transfer karta hai. Agar next call nahi hua to request hang ho sakti hai.

`Interview Answer:`

The `next()` function passes control to the next middleware in the stack. It is essential for continuing request processing.

Example:

```javascript
app.use((req, res, next) => {
  next();
});
```

---

4. How do you implement global error handling?

`Hinglish Explanation:`

Global error handler application ke sabhi errors ko ek centralized place par handle karta hai. Isse consistent error responses milte hain.

`Interview Answer:`

Global error handling is implemented using a middleware with four parameters: error, request, response, and next.

Example:

```javascript
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});
```

---

5. How do you structure a scalable Express application?

`Hinglish Explanation:`

Scalable applications me routes, controllers, services, models aur middleware ko separate folders me organize kiya jata hai.

`Interview Answer:`

A scalable Express application follows separation of concerns by organizing code into routes, controllers, services, models, and middleware.

Example:

```text
src/
├─ routes/
├─ controllers/
├─ services/
├─ models/
```

---

6. How do you secure an Express API (rate limiting, headers)?

`Hinglish Explanation:`

API security ke liye Helmet, Rate Limiting, Input Validation, HTTPS aur Authentication implement ki jati hai.

`Interview Answer:`

Express APIs are secured using rate limiting, HTTP security headers, input validation, authentication, and HTTPS.

Example:

```javascript
app.use(helmet());
app.use(rateLimit());
```

---

7. Explain route parameter vs. query parameter.

`Hinglish Explanation:`

Route parameters resource identify karte hain, jabki query parameters filtering, sorting ya pagination ke liye use hote hain.

`Interview Answer:`

Route parameters are part of the URL path, while query parameters provide optional data for filtering or customization.

Example:

```javascript
/users/10

/users?page=1
```

---

8. What’s the role of CORS in Express and how to configure it?

`Hinglish Explanation:`

CORS browser ko control karta hai ki kaunse domains API access kar sakte hain. Ye cross-origin requests allow ya block karta hai.

`Interview Answer:`

CORS is a browser security mechanism that controls access to resources from different origins.

Example:

```javascript
app.use(cors({
  origin: "https://example.com"
}));
```

---

9. How do you handle file uploads?

`Hinglish Explanation:`

File uploads ke liye Multer middleware commonly use hota hai. Files local storage ya cloud storage me save ki ja sakti hain.

`Interview Answer:`

File uploads are typically handled using Multer, which processes multipart/form-data requests.

Example:

```javascript
const upload = multer({
  dest: "uploads/"
});
```

---

10. How would you implement logging in Express?

`Hinglish Explanation:`

Logging requests, errors aur application events ko track karne ke liye use hoti hai. Morgan aur Winston commonly use hote hain.

`Interview Answer:`

Logging helps monitor application behavior and diagnose issues using tools such as Morgan and Winston.

Example:

```javascript
app.use(morgan("combined"));
```

---

11. What is the use of express-validator?

`Hinglish Explanation:`

express-validator incoming request data validate aur sanitize karne ke liye use hota hai. Ye invalid data ko application tak pahunchne se rokta hai.

`Interview Answer:`

express-validator provides middleware for validating and sanitizing request data before processing.

Example:

```javascript
body("email")
  .isEmail();
```

---

12. How do you prevent SQL/NoSQL injection in Express?

`Hinglish Explanation:`

Input validation, parameterized queries aur ORM tools use karke injection attacks prevent kiye jate hain.

`Interview Answer:`

SQL and NoSQL injections are prevented using input validation, parameterized queries, and ORM/ODM libraries.

Example:

```javascript
User.findOne({
  email: req.body.email
});
```

---

13. What is Helmet and how does it help with security?

`Hinglish Explanation:`

Helmet Express middleware hai jo security-related HTTP headers automatically set karta hai aur common attacks se protection provide karta hai.

`Interview Answer:`

Helmet enhances application security by setting HTTP headers that help mitigate common web vulnerabilities.

Example:

```javascript
app.use(helmet());
```

---

14. How do you handle role-based authorization in Express?

`Hinglish Explanation:`

Role-based authorization me user roles check kiye jate hain aur permissions ke basis par access allow ya deny kiya jata hai.

`Interview Answer:`

Role-based authorization restricts access based on user roles and permissions after successful authentication.

Example:

```javascript
if (user.role !== "admin") {
  return res.status(403);
}
```

---

15. What are virtual routes and when are they useful?

`Hinglish Explanation:`

Virtual routes actual database fields ke bina computed ya derived values expose karte hain. Mongoose virtuals iska common example hain.

`Interview Answer:`

Virtual routes expose computed properties without storing them in the database, improving flexibility and readability.

Example:

```javascript
userSchema.virtual("fullName");
```

---

16. Difference between synchronous and asynchronous middleware.

`Hinglish Explanation:`

Synchronous middleware immediately execute hoti hai, jabki asynchronous middleware promises ya async operations complete hone ka wait karti hai.

`Interview Answer:`

Synchronous middleware executes immediately, while asynchronous middleware handles operations such as database calls or API requests.

Example:

```javascript
app.use(async (req, res, next) => {
  await fetchData();
  next();
});
```

---

17. How do you optimize performance in Express apps?

`Hinglish Explanation:`

Caching, compression, database optimization aur unnecessary middleware removal se performance improve ki ja sakti hai.

`Interview Answer:`

Express performance can be optimized using caching, compression, efficient database queries, and minimizing middleware overhead.

Example:

```javascript
app.use(compression());
```

---

18. What is a proxy in Express and how to set it?

`Hinglish Explanation:`

Proxy client aur server ke beech intermediary layer hoti hai. Express me reverse proxy ke piche deploy karte waqt trust proxy enable karna padta hai.

`Interview Answer:`

A proxy forwards client requests to backend servers. Express supports proxy-aware configurations through trust proxy settings.

Example:

```javascript
app.set(
  "trust proxy",
  true
);
```

---

19. What is the use of app.locals and res.locals?

`Hinglish Explanation:`

app.locals application-wide data store karta hai, jabki res.locals sirf current request lifecycle ke liye data store karta hai.

`Interview Answer:`

app.locals stores global application data, while res.locals stores request-specific data accessible during a single request.

Example:

```javascript
app.locals.appName = "MyApp";

res.locals.user = user;
```

---

20. How can you implement request tracing in Express?

`Hinglish Explanation:`

Request tracing me har request ko unique ID assign ki jati hai taaki distributed systems me request flow track kiya ja sake.

`Interview Answer:`

Request tracing assigns unique identifiers to requests, making debugging and monitoring easier across services.

Example:

```javascript
req.id = uuid();

logger.info(req.id);
```

21. What is the event loop in Node.js and how does it work?

`Hinglish Explanation:`

Event Loop Node.js ka core mechanism hai jo asynchronous operations ko manage karta hai. Jab call stack empty hota hai, Event Loop callback queue se tasks uthakar execute karta hai.

`Interview Answer:`

The Event Loop enables Node.js to perform non-blocking operations by processing callbacks and asynchronous tasks when the call stack becomes empty.

Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
```

---

22. Explain the difference between process.nextTick() and setImmediate().

`Hinglish Explanation:`

`process.nextTick()` current operation complete hote hi execute hota hai, jabki `setImmediate()` next Event Loop iteration me run hota hai.

`Interview Answer:`

`process.nextTick()` has higher priority and executes before the Event Loop continues, whereas `setImmediate()` runs during the next iteration.

Example:

```javascript
process.nextTick(() => {
  console.log("nextTick");
});

setImmediate(() => {
  console.log("setImmediate");
});
```

---

23. How does Node.js handle asynchronous I/O?

`Hinglish Explanation:`

Node.js asynchronous operations ko background threads me delegate karta hai aur completion ke baad callback ya promise execute karta hai.

`Interview Answer:`

Node.js uses the Event Loop and libuv thread pool to handle asynchronous I/O without blocking the main thread.

Example:

```javascript
fs.readFile("file.txt", (err, data) => {
  console.log(data);
});
```

---

24. What are streams and how do you use them?

`Hinglish Explanation:`

Streams data ko chunks me process karte hain instead of loading everything into memory. Ye large files aur real-time data ke liye useful hain.

`Interview Answer:`

Streams allow efficient processing of large amounts of data by reading or writing it in chunks.

Example:

```javascript
const stream =
  fs.createReadStream("file.txt");
```

---

25. How does clustering work in Node.js?

`Hinglish Explanation:`

Clustering multiple Node.js processes create karta hai jo available CPU cores ka use karte hain. Isse application throughput increase hota hai.

`Interview Answer:`

Clustering allows Node.js applications to utilize multiple CPU cores by spawning worker processes.

Example:

```javascript
cluster.fork();
```

---

26. Explain how you’d implement a caching layer in Node.

`Hinglish Explanation:`

Frequently accessed data ko Redis jaise cache me store kiya jata hai. Agar cache me data available ho to database call avoid ki jati hai.

`Interview Answer:`

A caching layer stores frequently used data in memory, reducing database load and improving response times.

Example:

```javascript
const data =
  await redis.get("users");
```

---

27. How do you handle large file uploads efficiently?

`Hinglish Explanation:`

Large files ko streams ke through process karna chahiye taaki poori file memory me load na ho aur memory usage control me rahe.

`Interview Answer:`

Large file uploads should be processed using streams and chunked uploads to minimize memory consumption.

Example:

```javascript
req.pipe(
  fs.createWriteStream("file.txt")
);
```

---

28. What are child processes and how are they used?

`Hinglish Explanation:`

Child Processes separate processes run karne ki facility dete hain. Ye shell commands execute karne ya CPU-intensive tasks isolate karne ke liye use hote hain.

`Interview Answer:`

Child processes allow Node.js to execute external commands or separate workloads outside the main process.

Example:

```javascript
const { exec } =
  require("child_process");
```

---

29. What is the role of buffers in Node.js?

`Hinglish Explanation:`

Buffers binary data ko temporarily memory me store karte hain. Files, streams aur network communication me inka use hota hai.

`Interview Answer:`

Buffers provide a way to work directly with binary data in memory.

Example:

```javascript
const buffer =
  Buffer.from("Hello");
```

---

30. How do you monitor and debug Node.js performance?

`Hinglish Explanation:`

Performance monitor karne ke liye profiling tools, logs, metrics aur APM solutions use kiye jate hain. Bottlenecks identify karke optimize kiya jata hai.

`Interview Answer:`

Node.js performance can be monitored using profiling tools, metrics, logs, and application performance monitoring solutions.

Example:

```javascript
console.time("task");

console.timeEnd("task");
```

---

31. What are worker threads and when would you use them?

`Hinglish Explanation:`

Worker Threads CPU-intensive tasks ko separate threads me run karte hain taaki Event Loop block na ho.

`Interview Answer:`

Worker Threads provide parallel execution for CPU-heavy tasks without blocking the main Node.js thread.

Example:

```javascript
const worker =
  new Worker("./worker.js");
```

---

32. Explain how you’d secure a Node.js application.

`Hinglish Explanation:`

Security ke liye authentication, authorization, HTTPS, input validation aur dependency scanning implement karna zaruri hai.

`Interview Answer:`

Node.js applications are secured using authentication, authorization, HTTPS, input validation, and secure dependency management.

Example:

```javascript
app.use(helmet());
```

---

33. How do you manage environment variables securely?

`Hinglish Explanation:`

Sensitive information jaise API keys aur database credentials environment variables me store karni chahiye, codebase me nahi.

`Interview Answer:`

Environment variables separate configuration from code and help protect sensitive information.

Example:

```javascript
process.env.DB_URL;
```

---

34. What’s the difference between CommonJS and ES modules?

`Hinglish Explanation:`

CommonJS `require` aur `module.exports` use karta hai, jabki ES Modules `import` aur `export` syntax use karte hain.

`Interview Answer:`

CommonJS is the traditional Node.js module system, while ES Modules are the modern JavaScript standard.

Example:

```javascript
const fs = require("fs");

// OR

import fs from "fs";
```

---

35. How do you handle rate limiting in Node.js?

`Hinglish Explanation:`

Rate limiting API abuse aur excessive requests ko control karti hai. Express-rate-limit jaise middleware commonly use kiye jate hain.

`Interview Answer:`

Rate limiting restricts request frequency to protect applications from abuse and denial-of-service attacks.

Example:

```javascript
app.use(rateLimit({
  max: 100
}));
```

---

36. How do you implement JWT authentication in Node.js?

`Hinglish Explanation:`

Login ke baad JWT generate kiya jata hai aur client ko return kiya jata hai. Protected routes par token verify kiya jata hai.

`Interview Answer:`

JWT authentication uses signed tokens to verify user identity without storing session data on the server.

Example:

```javascript
const token = jwt.sign(
  { id: user.id },
  SECRET
);
```

---

37. How does dependency injection work in Node?

`Hinglish Explanation:`

Dependency Injection me dependencies ko class ya function ke andar directly create karne ke bajay outside se provide kiya jata hai.

`Interview Answer:`

Dependency Injection improves modularity and testability by providing dependencies from outside rather than creating them internally.

Example:

```javascript
function UserService(repo) {
  this.repo = repo;
}
```

---

38. What is the role of fs/promises in Node?

`Hinglish Explanation:`

`fs/promises` file operations ko Promise-based API ke through perform karne deta hai, jisse async/await use karna easy ho jata hai.

`Interview Answer:`

The `fs/promises` module provides Promise-based filesystem operations for cleaner asynchronous code.

Example:

```javascript
const data =
  await fs.readFile("file.txt");
```

---

39. How can you prevent memory leaks?

`Hinglish Explanation:`

Unused references remove karna, timers clear karna aur event listeners cleanup karna memory leaks prevent karne ke important steps hain.

`Interview Answer:`

Memory leaks can be prevented by releasing unused resources, cleaning up listeners, and monitoring memory usage.

Example:

```javascript
clearInterval(timer);
```

---

40. How would you implement logging and metrics?

`Hinglish Explanation:`

Logging application events aur errors record karti hai, jabki metrics performance indicators jaise response time aur memory usage measure karte hain.

`Interview Answer:`

Logging captures application events, while metrics track performance and operational health for monitoring and alerting.

Example:

```javascript
logger.info("Server started");

metrics.increment("requests");
```

---

## 🍃 MongoDB (311-360)

311. MongoDB kya hai?

`Hinglish Explanation:`

MongoDB ek NoSQL document database hai jo data ko JSON-like BSON documents ke form me store karti hai. Ye flexible schema provide karti hai aur large-scale applications ke liye suitable hai.

`Interview Answer:`

MongoDB is a NoSQL document-oriented database that stores data in BSON format. It provides flexible schemas, high scalability, and high performance.

Example:

```javascript
db.users.find();
```

---

312. NoSQL kya hai?

`Hinglish Explanation:`

NoSQL databases traditional table-based structure follow nahi karti. Ye documents, key-value, graph ya column-based data models support karti hain.

`Interview Answer:`

NoSQL databases provide flexible schemas and are designed to handle large-scale, distributed, and unstructured data efficiently.

Example:

```javascript
{
  name: "Raj",
  skills: ["JS", "MongoDB"]
}
```

---

313. Document model?

`Hinglish Explanation:`

MongoDB me data documents ke form me store hota hai. Har document ek JSON-like object hota hai jisme fields aur nested data ho sakta hai.

`Interview Answer:`

The document model stores data as BSON documents, allowing nested structures and flexible schemas.

Example:

```javascript
{
  _id: 1,
  name: "Raj"
}
```

---

314. CRUD operations?

`Hinglish Explanation:`

CRUD ka matlab Create, Read, Update aur Delete operations hai. Ye database ke basic operations hote hain.

`Interview Answer:`

CRUD operations represent the fundamental actions performed on database records: Create, Read, Update, and Delete.

Example:

```javascript
db.users.insertOne({});
db.users.find({});
db.users.updateOne({});
db.users.deleteOne({});
```

---

315. Index kya hai?

`Hinglish Explanation:`

Index database queries ko fast banata hai by creating a searchable structure on specific fields. Lekin indexes extra storage consume karte hain.

`Interview Answer:`

An index improves query performance by allowing MongoDB to locate data without scanning the entire collection.

Example:

```javascript
db.users.createIndex({
  email: 1
});
```

---

316. Compound index?

`Hinglish Explanation:`

Compound index multiple fields par create hota hai. Ye queries optimize karta hai jo ek se zyada fields use karti hain.

`Interview Answer:`

A compound index is an index on multiple fields and improves performance for queries involving those fields.

Example:

```javascript
db.users.createIndex({
  name: 1,
  age: -1
});
```

---

317. Text index?

`Hinglish Explanation:`

Text index text search operations ke liye use hota hai. Isse documents me keywords search karna easy ho jata hai.

`Interview Answer:`

A text index enables full-text search capabilities on string fields within a collection.

Example:

```javascript
db.posts.createIndex({
  title: "text"
});
```

---

318. Aggregation pipeline?

`Hinglish Explanation:`

Aggregation Pipeline multiple stages ka sequence hota hai jo data ko transform aur process karta hai. Ye complex reporting aur analytics ke liye use hota hai.

`Interview Answer:`

The Aggregation Pipeline processes documents through multiple stages to perform filtering, grouping, sorting, and transformations.

Example:

```javascript
db.users.aggregate([
  { $match: { age: 25 } }
]);
```

---

319. $match kya hai?

`Hinglish Explanation:`

`$match` aggregation pipeline me documents filter karne ke liye use hota hai. Ye SQL ke WHERE clause jaisa kaam karta hai.

`Interview Answer:`

`$match` filters documents in an aggregation pipeline and reduces the dataset passed to later stages.

Example:

```javascript
{
  $match: {
    status: "active"
  }
}
```

---

320. $group kya hai?

`Hinglish Explanation:`

`$group` documents ko group karta hai aur aggregate calculations jaise count, sum aur average perform karta hai.

`Interview Answer:`

`$group` groups documents by a specified field and performs aggregation operations on each group.

Example:

```javascript
{
  $group: {
    _id: "$role",
    count: { $sum: 1 }
  }
}
```

---

321. $lookup kya hai?

`Hinglish Explanation:`

`$lookup` MongoDB collections ko join karne ke liye use hota hai. Ye SQL JOIN jaisa behavior provide karta hai.

`Interview Answer:`

`$lookup` performs a left outer join between collections and combines related documents.

Example:

```javascript
{
  $lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "userId",
    as: "orders"
  }
}
```

---

322. Sharding kya hai?

`Hinglish Explanation:`

Sharding data ko multiple servers me distribute karta hai. Ye very large datasets aur high traffic workloads handle karne ke liye use hota hai.

`Interview Answer:`

Sharding is a horizontal scaling technique that distributes data across multiple servers called shards.

Example:

```text
Shard1
Shard2
Shard3
```

---

323. Replication kya hai?

`Hinglish Explanation:`

Replication data ki multiple copies maintain karti hai taaki high availability aur fault tolerance achieve ki ja sake.

`Interview Answer:`

Replication creates multiple copies of data across servers to improve availability and disaster recovery.

Example:

```text
Primary
 ↓
Secondary
Secondary
```

---

324. CAP theorem?

`Hinglish Explanation:`

CAP Theorem ke according distributed system ek time par Consistency, Availability aur Partition Tolerance me se sirf do guarantees fully provide kar sakta hai.

`Interview Answer:`

The CAP Theorem states that a distributed system can guarantee only two of Consistency, Availability, and Partition Tolerance at the same time.

Example:

```text
C + P
OR
A + P
```

---

325. ACID properties?

`Hinglish Explanation:`

ACID properties transactions ko reliable banati hain. Isme Atomicity, Consistency, Isolation aur Durability shamil hain.

`Interview Answer:`

ACID properties ensure reliable transactions by guaranteeing Atomicity, Consistency, Isolation, and Durability.

Example:

```text
Transfer Money
→ Complete or Rollback
```

---

326. Transactions?

`Hinglish Explanation:`

Transactions multiple operations ko ek unit ke roop me execute karti hain. Agar koi operation fail ho jaye to sab rollback ho jata hai.

`Interview Answer:`

Transactions ensure multiple database operations either succeed together or fail together.

Example:

```javascript
session.startTransaction();
```

---

327. Schema design?

`Hinglish Explanation:`

Schema design application access patterns aur query requirements ke according ki jati hai. Good schema performance aur scalability improve karti hai.

`Interview Answer:`

Schema design defines how data is structured and stored to balance performance, scalability, and maintainability.

Example:

```javascript
{
  userId: 1,
  orders: []
}
```

---

328. Embedding vs referencing?

`Hinglish Explanation:`

Embedding related data ko same document me store karta hai, jabki referencing related documents ke IDs store karta hai.

`Interview Answer:`

Embedding stores related data together, while referencing links documents using identifiers for better normalization.

Example:

```javascript
// Embedded
{
  user: {},
  address: {}
}
```

---

329. Data consistency?

`Hinglish Explanation:`

Data consistency ensure karti hai ki data accurate aur valid state me rahe. Replication aur distributed systems me consistency important concern hoti hai.

`Interview Answer:`

Data consistency ensures that all users and systems see valid and synchronized data across operations.

Example:

```text
Same Data
Across Replicas
```

---

330. Query optimization?

`Hinglish Explanation:`

Query optimization indexing, projection aur efficient filtering use karke query performance improve karti hai.

`Interview Answer:`

Query optimization improves performance by reducing unnecessary scans and using indexes effectively.

Example:

```javascript
db.users.find(
  { email: "test@test.com" }
).explain();
```

331. Index tuning?

`Hinglish Explanation:`

Index tuning ka purpose unnecessary indexes remove karna aur queries ke according optimal indexes create karna hai. Excessive indexes writes ko slow kar sakte hain.

`Interview Answer:`

Index tuning involves analyzing query patterns and creating efficient indexes while avoiding unnecessary index overhead.

Example:

```javascript
db.users.getIndexes();
```

---

332. Write concern?

`Hinglish Explanation:`

Write Concern define karta hai ki write operation successful tab mana jayega jab kitne nodes us write ko acknowledge karenge.

`Interview Answer:`

Write Concern specifies the level of acknowledgment required from MongoDB nodes before considering a write operation successful.

Example:

```javascript
db.users.insertOne(
  { name: "Raj" },
  { writeConcern: { w: "majority" } }
);
```

---

333. Read preference?

`Hinglish Explanation:`

Read Preference decide karta hai ki reads primary node se aayengi ya secondary nodes se. Isse performance aur consistency balance ki ja sakti hai.

`Interview Answer:`

Read Preference determines which replica set members handle read operations, balancing consistency and performance.

Example:

```javascript
db.collection.find().readPref(
  "secondary"
);
```

---

334. Backup & restore?

`Hinglish Explanation:`

Backup data protection ke liye use hota hai aur restore failure ya disaster ke baad data recover karne ke liye.

`Interview Answer:`

Backup and restore strategies ensure data recovery in case of accidental deletion, corruption, or infrastructure failure.

Example:

```bash
mongodump
mongorestore
```

---

335. Atlas kya hai?

`Hinglish Explanation:`

MongoDB Atlas MongoDB ka fully managed cloud database platform hai. Ye deployment, scaling aur monitoring ko simplify karta hai.

`Interview Answer:`

MongoDB Atlas is a managed cloud database service that provides hosting, scaling, monitoring, and security features.

Example:

```text
Atlas Cluster
↓
Application
```

---

336. Scaling MongoDB?

`Hinglish Explanation:`

MongoDB ko vertical scaling aur horizontal scaling dono approaches se scale kiya ja sakta hai. Horizontal scaling ke liye sharding use hoti hai.

`Interview Answer:`

MongoDB scales vertically by increasing resources and horizontally by distributing data across shards.

Example:

```text
Shard1
Shard2
Shard3
```

---

337. Performance issues fix?

`Hinglish Explanation:`

Performance issues fix karne ke liye indexing, query optimization, schema redesign aur caching use ki jati hai.

`Interview Answer:`

Performance issues are typically resolved through indexing, query optimization, efficient schema design, and caching strategies.

Example:

```javascript
db.users.find().explain();
```

---

338. Change streams?

`Hinglish Explanation:`

Change Streams real-time database changes ko monitor karne ki facility dete hain bina polling ke.

`Interview Answer:`

Change Streams allow applications to listen for real-time changes in collections, databases, or deployments.

Example:

```javascript
const stream =
  collection.watch();
```

---

339. MongoDB vs SQL?

`Hinglish Explanation:`

MongoDB document-based NoSQL database hai, jabki SQL databases table-based relational structure use karti hain.

`Interview Answer:`

MongoDB offers flexible schemas and horizontal scalability, while SQL databases provide strong relational modeling and structured schemas.

Example:

```text
MongoDB → Documents
SQL     → Tables
```

---

340. Aggregation pipeline optimization?

`Hinglish Explanation:`

Aggregation optimize karne ke liye early filtering, proper indexes aur unnecessary stages avoid karni chahiye.

`Interview Answer:`

Aggregation pipelines should minimize processed data using early filtering and leverage indexes whenever possible.

Example:

```javascript
[
  { $match: { status: "active" } }
]
```

---

341. Data modeling patterns?

`Hinglish Explanation:`

MongoDB me common patterns include embedding, referencing, bucket pattern aur subset pattern. Choice application requirements par depend karti hai.

`Interview Answer:`

Data modeling patterns help structure data efficiently based on access patterns, scalability, and performance requirements.

Example:

```javascript
{
  userId: 1,
  orders: []
}
```

---

342. Time series data?

`Hinglish Explanation:`

Time series data timestamp-based information hoti hai jaise sensor readings aur application metrics. MongoDB dedicated time-series collections support karta hai.

`Interview Answer:`

Time-series collections are optimized for storing and querying time-based data such as logs, metrics, and IoT readings.

Example:

```javascript
{
  timestamp: new Date(),
  value: 100
}
```

---

343. Geospatial queries?

`Hinglish Explanation:`

Geospatial queries location-based searches perform karti hain jaise nearby stores ya delivery radius calculations.

`Interview Answer:`

Geospatial queries allow searching and analyzing data based on geographic coordinates and distances.

Example:

```javascript
db.places.createIndex({
  location: "2dsphere"
});
```

---

344. Text search?

`Hinglish Explanation:`

Text search documents me keywords search karne ke liye use hoti hai. Iske liye text indexes create karne padte hain.

`Interview Answer:`

MongoDB text search enables keyword-based searching across indexed text fields.

Example:

```javascript
db.posts.find({
  $text: {
    $search: "mongodb"
  }
});
```

---

345. GridFS?

`Hinglish Explanation:`

GridFS large files ko chunks me divide karke MongoDB me store karta hai. Ye large media files ke liye useful hai.

`Interview Answer:`

GridFS is a specification for storing and retrieving large files that exceed MongoDB's document size limit.

Example:

```javascript
bucket.openUploadStream(
  "video.mp4"
);
```

---

346. Realm kya hai?

`Hinglish Explanation:`

MongoDB Realm mobile aur web applications ke liye backend services provide karta hai jaise authentication aur synchronization.

`Interview Answer:`

MongoDB Realm is a backend platform that provides authentication, synchronization, and serverless functions.

Example:

```javascript
app.logIn(credentials);
```

---

347. Compass tool?

`Hinglish Explanation:`

MongoDB Compass ek GUI tool hai jo databases ko visualize aur manage karne ke liye use hota hai.

`Interview Answer:`

MongoDB Compass is a graphical interface for exploring data, analyzing queries, and managing MongoDB databases.

Example:

```text
Compass
→ Collections
→ Documents
```

---

348. Monitoring tools?

`Hinglish Explanation:`

Monitoring tools database health, queries aur resource usage track karte hain. Atlas Monitoring aur Prometheus commonly use hote hain.

`Interview Answer:`

Monitoring tools help track performance metrics, query execution, resource usage, and operational health.

Example:

```text
Atlas Monitoring
Prometheus
Grafana
```

---

349. Security best practices?

`Hinglish Explanation:`

Authentication, authorization, encryption aur network restrictions MongoDB security ke important components hain.

`Interview Answer:`

MongoDB security best practices include enabling authentication, restricting network access, using encryption, and following least privilege principles.

Example:

```javascript
db.createUser({
  user: "admin"
});
```

---

350. Encryption?

`Hinglish Explanation:`

Encryption data ko unauthorized access se protect karti hai. MongoDB encryption at rest aur encryption in transit support karta hai.

`Interview Answer:`

Encryption protects sensitive data both while stored and while transmitted across networks.

Example:

```text
TLS
AES Encryption
```

351. Audit logging?

`Hinglish Explanation:`

Audit logging system activities ko track karti hai jaise login attempts, data modifications aur administrative actions. Ye security aur compliance requirements ke liye important hai.

`Interview Answer:`

Audit logging records important database activities and user actions for security, compliance, and troubleshooting purposes.

Example:

```javascript id="7v6vys"
{
  user: "admin",
  action: "DELETE_USER",
  timestamp: new Date()
}
```

---

352. Data validation?

`Hinglish Explanation:`

Data validation ensure karti hai ki documents expected format aur business rules follow karein. Isse invalid data database me store nahi hota.

`Interview Answer:`

Data validation enforces rules on document structure and field values before data is stored.

Example:

```javascript id="4vlu7r"
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      required: ["email"]
    }
  }
});
```

---

353. Schema versioning?

`Hinglish Explanation:`

Schema versioning different document structures ko manage karne ke liye use hoti hai jab application evolve hoti hai. Har document me version field maintain ki ja sakti hai.

`Interview Answer:`

Schema versioning helps manage changes in document structure while maintaining backward compatibility.

Example:

```javascript id="g16zb3"
{
  version: 2,
  name: "Raj"
}
```

---

354. Migration strategies?

`Hinglish Explanation:`

Migrations old data ko new schema me convert karne ke liye use hoti hain. Ye incremental ya batch updates ke through perform ki ja sakti hain.

`Interview Answer:`

Migration strategies help move data and schema changes safely while minimizing downtime and data inconsistencies.

Example:

```javascript id="2qhxyi"
db.users.updateMany(
  {},
  { $set: { version: 2 } }
);
```

---

355. Bulk operations?

`Hinglish Explanation:`

Bulk operations multiple insert, update ya delete requests ko ek batch me execute karti hain. Isse performance improve hoti hai aur network overhead reduce hota hai.

`Interview Answer:`

Bulk operations execute multiple database actions in a single request, improving efficiency and reducing round trips.

Example:

```javascript id="rjepm3"
db.users.bulkWrite([
  {
    insertOne: {
      document: { name: "Raj" }
    }
  }
]);
```

---

356. Cursor handling?

`Hinglish Explanation:`

Cursor query results ko batch-by-batch process karta hai. Large datasets ke liye cursor use karna memory-efficient approach hai.

`Interview Answer:`

Cursors allow applications to iterate through query results efficiently without loading all documents into memory.

Example:

```javascript id="vdl9yo"
const cursor =
  db.users.find();

while (cursor.hasNext()) {
  print(cursor.next());
}
```

---

357. Transaction best practices?

`Hinglish Explanation:`

Transactions ko short rakhna chahiye aur sirf required operations include karni chahiye. Long-running transactions performance impact kar sakti hain.

`Interview Answer:`

Transactions should be kept short, focused, and used only when multiple operations require atomicity.

Example:

```javascript id="5m8rj0"
session.startTransaction();

session.commitTransaction();
```

---

358. Error handling?

`Hinglish Explanation:`

Database errors ko properly catch aur log karna chahiye. User ko meaningful error messages dene chahiye without exposing internal details.

`Interview Answer:`

Proper error handling involves catching exceptions, logging failures, and returning meaningful responses to clients.

Example:

```javascript id="eqbdq8"
try {
  await User.find();
} catch (error) {
  console.error(error);
}
```

---

359. Connection pooling?

`Hinglish Explanation:`

Connection pooling database connections ko reuse karti hai taaki har request ke liye nayi connection create na karni pade. Isse performance improve hoti hai.

`Interview Answer:`

Connection pooling maintains reusable database connections, reducing connection overhead and improving scalability.

Example:

```javascript id="v0d3qo"
mongoose.connect(uri, {
  maxPoolSize: 20
});
```

---

360. Performance monitoring?

`Hinglish Explanation:`

Performance monitoring query execution time, resource usage aur database health track karti hai. Isse bottlenecks identify aur resolve karne me help milti hai.

`Interview Answer:`

Performance monitoring helps track database metrics, identify bottlenecks, and maintain system reliability.

Example:

```javascript id="6l8l9m"
db.currentOp();

db.serverStatus();
```


### Additional Important Questions

0. What is Data Modeling in MongoDB?

MongoDB data modeling means deciding how documents should be structured inside collections. Depending on the relationship and access pattern, we either embed related data inside a document or store it in separate collections using references. Embedding improves read performance, while referencing reduces duplication and is suitable for large or shared data.


What is an Index?

An index is a special data structure that helps MongoDB locate documents quickly without scanning the entire collection. It significantly improves read performance but slightly increases write time because indexes also need to be updated.

db.users.createIndex({
 email:1
})

Follow-up

Any disadvantage?

Answer

More storage
Slightly slower inserts and updates


Index Types

Single

Compound

Unique

TTL

Text

Multikey

Sparse

Partial

Har type ki ek line yaad rakho.


Covered Query: A Covered Query is a query where MongoDB can satisfy both the filter and the returned fields using only the index, without reading the actual document from the collection.

Example 1 (Covered Query) ✅

Index

{
    email: 1,
    name: 1
}

Query

db.users.find(
    { email: "raj@gmail.com" },
    { email: 1, name: 1, _id: 0 }
)

MongoDB:

Index
   ↓
Answer

Collection touch hi nahi hui.


Example 2 (Not Covered) ❌

Same index

{
    email: 1,
    name: 1
}

Query

db.users.find(
    { email: "raj@gmail.com" },
    { email: 1, city: 1, _id: 0 }
)

Ab city index me nahi hai.

To process:

Index
   ↓
Document
   ↓
City read
   ↓
Answer

Yani collection hit hui.

Covered Query nahi rahi.



IXSCAN means MongoDB is using an index to locate matching documents instead of performing a full collection scan.

totalDocsExamined: MongoDB had to examine only one document from the collection to satisfy the query.
totalKeysExamined: MongoDB examined one index entry (key) while searching for the result.



| Stage      | Purpose                          |
| ---------- | -------------------------------- |
| `$match`   | Filter                           |
| `$group`   | Grouping / Calculation           |
| `$project` | Fields ko select ya modify karna |
| `$sort`    | Order karna                      |
| `$limit`   | Top N records                    |
| `$skip`    | Pagination                       |
| `$lookup`  | Join                             |


| Question me word        | Stage     |
| ----------------------- | --------- |
| Only Raj                | `$match`  |
| Every / Each / Per      | `$group`  |
| Total                   | `$sum`    |
| Highest / Lowest        | `$sort`   |
| Top 10                  | `$limit`  |
| Page 2                  | `$skip`   |
| Join another collection | `$lookup` |
| Array ko todna          | `$unwind` |


| Replication       | Sharding            |
| ----------------- | ------------------- |
| Data Copy         | Data Split          |
| High Availability | Horizontal Scaling  |
| Fault Tolerance   | Large Data Handling |
| Same Data         | Different Data      |

---

1. Explain the aggregation pipeline and its stages.

`Hinglish Explanation:`

Aggregation Pipeline MongoDB ka powerful framework hai jo data ko multiple stages me process karta hai. Common stages hain `$match`, `$group`, `$project`, `$sort`, `$lookup` aur `$limit`.

`Interview Answer:`

The Aggregation Pipeline processes documents through multiple stages, allowing filtering, transformation, grouping, sorting, and joining of data efficiently.

Example:

```javascript
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } }
]);
```

---

2. How does indexing work in MongoDB, and what are compound indexes?

`Hinglish Explanation:`

Indexes MongoDB ko documents quickly locate karne me help karte hain bina poori collection scan kiye. Compound Index multiple fields par create hota hai aur multi-condition queries optimize karta hai.

`Interview Answer:`

Indexes improve query performance by reducing collection scans. Compound indexes store multiple fields and are useful for queries involving more than one field.

Example:

```javascript
db.users.createIndex({
  name: 1,
  age: 1
});
```

---

3. What’s the difference between find(), findOne(), and aggregate()?

`Hinglish Explanation:`

`find()` multiple documents return karta hai, `findOne()` sirf first matching document return karta hai aur `aggregate()` complex data transformations perform karta hai.

`Interview Answer:`

`find()` retrieves multiple documents, `findOne()` returns a single document, and `aggregate()` processes data through transformation pipelines.

Example:

```javascript
db.users.find();
db.users.findOne();
db.users.aggregate([]);
```

---

4. How do you optimize MongoDB queries for performance?

`Hinglish Explanation:`

Query optimization ke liye proper indexes, projections, efficient schema design aur explain plans use kiye jate hain.

`Interview Answer:`

MongoDB queries are optimized using indexes, limiting returned fields, analyzing execution plans, and designing efficient schemas.

Example:

```javascript
db.users.find(
  { email: "test@test.com" },
  { name: 1 }
);
```

---

5. What is schema design and how do you model relationships in MongoDB (1:1, 1:N, N:N)?

`Hinglish Explanation:`

Schema design data ko application access patterns ke according structure karti hai. Relationships embedding ya referencing ke through implement kiye jate hain.

`Interview Answer:`

Schema design determines how data is organized. Relationships can be modeled using embedded documents or references depending on access patterns.

Example:

```javascript
{
  userId: 1,
  orders: [101, 102]
}
```

---

6. Explain data validation and how to enforce it in MongoDB.

`Hinglish Explanation:`

Data validation ensure karti hai ki documents expected structure aur rules follow karein. MongoDB JSON Schema validation support karta hai.

`Interview Answer:`

MongoDB enforces data validation using schema validation rules that verify document structure and field values.

Example:

```javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      required: ["email"]
    }
  }
});
```

---

7. What are transactions in MongoDB and when would you use them?

`Hinglish Explanation:`

Transactions multiple operations ko ek atomic unit ke roop me execute karti hain. Banking ya inventory systems me ye especially useful hoti hain.

`Interview Answer:`

Transactions ensure multiple operations either succeed together or roll back together, maintaining data consistency.

Example:

```javascript
session.startTransaction();
```

---

8. What is a capped collection?

`Hinglish Explanation:`

Capped Collection fixed-size collection hoti hai jo insertion order maintain karti hai. Size limit cross hone par old documents automatically remove ho jate hain.

`Interview Answer:`

A capped collection is a fixed-size collection that automatically overwrites the oldest documents when space is exhausted.

Example:

```javascript
db.createCollection("logs", {
  capped: true,
  size: 100000
});
```

---

9. How does MongoDB handle concurrency?

`Hinglish Explanation:`

MongoDB document-level locking use karta hai jisse multiple operations simultaneously execute ho sakti hain without blocking the entire database.

`Interview Answer:`

MongoDB uses document-level concurrency control, allowing multiple operations to run concurrently while maintaining consistency.

Example:

```javascript
db.users.updateOne(
  { _id: 1 },
  { $set: { age: 25 } }
);
```

---

10. Explain change streams in MongoDB.

`Hinglish Explanation:`

Change Streams database changes ko real-time me monitor karne ki facility dete hain. Ye polling ki need ko eliminate kar dete hain.

`Interview Answer:`

Change Streams provide real-time notifications whenever data changes occur in collections or databases.

Example:

```javascript
const stream =
  collection.watch();
```

---

11. What’s the difference between populate() and $lookup?

`Hinglish Explanation:`

`populate()` Mongoose level par join perform karta hai, jabki `$lookup` MongoDB Aggregation Pipeline ke andar database level join karta hai.

`Interview Answer:`

`populate()` is a Mongoose feature, whereas `$lookup` is a MongoDB aggregation stage used for joining collections.

Example:

```javascript
User.find().populate("posts");
```

---

12. How do you perform pagination in MongoDB efficiently?

`Hinglish Explanation:`

Small datasets ke liye skip-limit use kar sakte hain, lekin large datasets ke liye cursor-based pagination better hoti hai.

`Interview Answer:`

Efficient pagination uses indexed fields and cursor-based approaches instead of large skip values.

Example:

```javascript
db.users.find()
  .limit(10);
```

---

13. What is the use of the $facet stage?

`Hinglish Explanation:`

`$facet` ek hi aggregation pipeline me multiple parallel aggregations execute karne deta hai.

`Interview Answer:`

`$facet` allows multiple aggregation pipelines to run simultaneously on the same dataset.

Example:

```javascript
{
  $facet: {
    users: [],
    stats: []
  }
}
```

---

14. How does MongoDB handle horizontal scaling?

`Hinglish Explanation:`

MongoDB horizontal scaling ke liye sharding use karta hai jisme data multiple shards me distribute kiya jata hai.

`Interview Answer:`

MongoDB scales horizontally through sharding, distributing data across multiple servers.

Example:

```text
Shard1
Shard2
Shard3
```

---

15. Difference between embedded documents vs. referenced documents.

`Hinglish Explanation:`

Embedded documents related data ko same document me store karte hain, jabki referenced documents IDs ke through relationships maintain karte hain.

`Interview Answer:`

Embedded documents improve read performance, while referenced documents reduce duplication and support normalization.

Example:

```javascript
{
  user: {},
  address: {}
}
```

---

16. How do you back up and restore a MongoDB database?

`Hinglish Explanation:`

MongoDB backup ke liye `mongodump` aur restore ke liye `mongorestore` tools provide karta hai.

`Interview Answer:`

MongoDB databases can be backed up using `mongodump` and restored using `mongorestore`.

Example:

```bash
mongodump
mongorestore
```

---

17. How can you enforce uniqueness on a field?

`Hinglish Explanation:`

Unique Index create karke kisi field par duplicate values ko prevent kiya ja sakta hai.

`Interview Answer:`

Uniqueness is enforced by creating a unique index on the desired field.

Example:

```javascript
db.users.createIndex(
  { email: 1 },
  { unique: true }
);
```

---

18. What are MongoDB Atlas Triggers?

`Hinglish Explanation:`

Atlas Triggers database events ke response me automatically functions execute karte hain. Ye serverless automation provide karte hain.

`Interview Answer:`

Atlas Triggers automatically execute functions when specific database events occur.

Example:

```text
Insert Document
↓
Trigger Function
```

---

19. What is TTL indexing and when would you use it?

`Hinglish Explanation:`

TTL (Time To Live) Index documents ko automatically expire aur delete karta hai. Sessions, OTPs aur temporary data ke liye useful hai.

`Interview Answer:`

TTL indexes automatically remove expired documents after a specified duration.

Example:

```javascript
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
);
```

---

20. How do you monitor and profile MongoDB queries?

`Hinglish Explanation:`

MongoDB queries ko monitor karne ke liye `explain()`, profiler, Atlas Monitoring aur Compass use kiye jate hain.

`Interview Answer:`

Query monitoring uses execution plans, profiling tools, and monitoring dashboards to identify slow queries and bottlenecks.

Example:

```javascript
db.users.find().explain();
```



---

## 🏗️ System Design & DevOps (361-500)

### System Design
361. URL shortener design
362. Chat system
363. Notification system
364. Rate limiter
365. Caching system
366. CDN kya hai
367. Load balancing
368. Horizontal scaling
369. Vertical scaling
370. Microservices
371. Kafka kya hai
372. RabbitMQ kya hai
373. Event-driven architecture
374. Idempotency
375. Circuit breaker
376. API gateway
377. Saga pattern
378. Distributed systems challenges
379. Consistency models
380. Failover systems

### Additional Important Questions
1. How would you design a scalable MERN-based e-commerce platform?
2. How do you deploy a MERN app on cloud platforms (e.g., Vercel, Heroku, AWS)?
3. What is CI/CD and how would you implement it for a MERN app?
4. How do you manage environment configurations for different environments?
5. What’s your approach to logging and monitoring in production?
6. How would you implement role-based access control (RBAC)?
7. How do you ensure your REST APIs are RESTful?
8. What is the difference between monolithic and microservice architectures?
9. How would you handle versioning in your APIs?
10. How do you handle scaling a database with growing user base?



### DevOps & Infrastructure
381. CI/CD pipeline
382. Docker
383. Kubernetes basics
384. AWS services
385. Nginx
386. Reverse proxy
387. Monitoring tools
388. Logging tools
389. Blue-green deployment
390. Canary deployment

### Security
391. XSS
392. CSRF
393. Injection attacks
394. bcrypt
395. HTTPS
396. CORS
397. Secure cookies
398. API security
399. OAuth
400. JWT security

---

## 🛠️ Real-World Experience Questions (401-450)

### Production / Debugging
401. Kisi production bug ko kaise identify karte ho?
402. Logs se issue kaise trace karte ho?
403. Agar bug intermittent ho toh kaise debug karoge?
404. Production vs staging bug difference kaise handle karte ho?
405. Root cause analysis kaise karte ho?
406. Bug fix ke baad regression kaise avoid karte ho?
407. Feature break ho gaya production mein — kya karoge?
408. Hotfix vs full release kab choose karte ho?
409. Rollback kab karte ho?
410. Debugging tools kaunse use karte ho?

### Performance
411. Slow API kaise identify karte ho?
412. API latency reduce kaise karte ho?
413. Frontend load time kaise improve karte ho?
414. DB query slow ho toh kya karte ho?
415. Indexing kab use karte ho?
416. Caching ka use kaise karte ho?
417. Redis kab use karte ho?
418. Bundle size kaise reduce karte ho?
419. Memory usage kaise monitor karte ho?
420. CPU bottleneck kaise detect karte ho?

### Scaling
421. High traffic handle kaise karte ho?
422. Horizontal vs vertical scaling kab use karte ho?
423. Load balancing kaise implement karte ho?
424. Stateless architecture kya hota hai?
425. Session scaling kaise karte ho?
426. Microservices kab choose karte ho?
427. Monolith kab better hai?
428. Distributed system challenges kya hote hain?
429. Failover system kaise design karte ho?
430. Rate limiting kaise implement karte ho?

### Architecture Decisions
431. System design ka approach kya hota hai?
432. Tech stack kaise choose karte ho?
433. Scalability ke liye design kaise karte ho?
434. Maintainable code kaise likhte ho?
435. Modular architecture kya hai?
436. Clean architecture kya hai?
437. Design patterns ka use kab karte ho?
438. API design best practices kya hain?
439. Versioning kaise handle karte ho?
440. Backward compatibility kaise maintain karte ho?

### Team & Process
441. Team collaboration kaise karte ho?
442. Code review kaise karte ho?
443. PR reject kab karte ho?
444. Conflict kaise resolve karte ho?
445. Agile process kya hai?
446. Sprint planning kaise hoti hai?
447. Deadline pressure kaise handle karte ho?
448. Knowledge sharing kaise karte ho?
449. Junior developers ko kaise guide karte ho?
450. Cross-team communication kaise handle karte ho?

---

## 🚨 Scenario-Based Questions (451-500)

### System Failure
451. Server crash ho gaya — first step kya hoga?
452. Multiple servers down ho gaye — kya karoge?
453. Deployment ke baad app crash ho gaya — kaise fix karoge?
454. Infinite loop production mein aa gaya — kaise detect karoge?
455. High error rate aa raha hai — kya karoge?

### Database Issues
456. Database down ho gaya — kya karoge?
457. DB connection pool exhaust ho gaya — kaise handle karoge?
458. Data corruption ho gaya — recovery kaise karoge?
459. Slow queries kaise optimize karoge?
460. Deadlock ho raha hai — kaise solve karoge?

### Performance & Latency
461. App bahut slow ho gaya — root cause kaise find karoge?
462. API latency spike ho raha hai — kya karoge?
463. Frontend slow load ho raha hai — kaise optimize karoge?
464. Memory leak detect kaise karoge?
465. GC issue kaise identify karoge?

### Traffic Spike
466. अचानक traffic 10x badh gaya — kya karoge?
467. Server overload ho gaya — kaise handle karoge?
468. Auto-scaling kaise configure karoge?
469. CDN ka use kaise karoge?
470. Rate limiting kaise implement karoge?

### Security
471. Security breach detect hua — kya karoge?
472. Data leak ho gaya — response kya hoga?
473. Unauthorized access detect hua — kaise handle karoge?
474. XSS attack ho raha hai — kaise fix karoge?
475. API abuse ho raha hai — kaise control karoge?

### Deployment & Recovery
476. Deployment fail ho gaya — kya karoge?
477. Rollback kaise karte ho?
478. Zero downtime deployment kaise karte ho?
479. Blue-green deployment kya hai?
480. Canary deployment kya hai?

### Observability
481. Monitoring tools ka use kaise karte ho?
482. Logs, metrics, traces ka difference?
483. Alerting system kaise design karte ho?
484. Production issues proactively kaise detect karte ho?
485. Debugging without logs kaise karoge?

### Edge Cases
486. Race condition aa gaya — kaise solve karoge?
487. Duplicate requests kaise handle karoge?
488. Idempotency kaise implement karte ho?
489. Retry mechanism kaise design karte ho?
490. Timeout handling kaise karte ho?

### Product Thinking
491. Feature fail ho gaya — kya karoge?
492. User complaints aa rahi hain — kaise handle karoge?
493. UX issue kaise identify karte ho?
494. Feature prioritize kaise karte ho?
495. A/B testing kaise karte ho?

### Advanced Scenarios
496. Microservices communication fail ho gaya — kya karoge?
497. Message queue down ho gaya — fallback kya hoga?
498. Third-party API fail ho gaya — kaise handle karoge?
499. Disaster recovery plan kaise design karte ho?
500. System highly available kaise banate ho?

---

## 💣🔥 Tricky Frontend Questions (Top 30)

### 🧠 JavaScript Tricky (1-10)
1. `this` keyword arrow function aur normal function mein different kyun behave karta hai?
2. `setTimeout(fn, 0)` immediately execute kyun nahi hota?
3. Promise aur async/await internally kaise kaam karte hain?
4. Event loop mein microtask pehle run hota hai ya macrotask? kyun?
5. `==` kab useful ho sakta hai despite being unsafe?
6. Closure memory leak kaise cause karta hai?
7. Deep clone ka best तरीका kya hai (JSON vs structuredClone vs manual)?
8. `Object.freeze()` ke baad bhi object kaise change ho sakta hai?
9. `NaN !== NaN` kyun hota hai?
10. JS single-threaded hone ke baad bhi parallel kaise lagta hai?

### Additional JS Tricky
- What is execution context?
- Difference between call, apply, bind
- Pollyfills
- Function currying
- Closures with many follow-up questions
- Event loop and its architecture
- Output based questions to check understanding of promise and this keyword

### ⚛️ React Tricky (11-18)
11. `useEffect` infinite loop kab aur kyun hota hai?
12. `useState` async kyun lagta hai?
13. `useMemo` aur `useCallback` galat use karne se performance worse kaise hoti hai?
14. React.memo kab kaam nahi karta?
15. Keys wrong use karne se bug kaise aata hai?
16. Context API performance issue kab deta hai?
17. Controlled vs uncontrolled components — real difference kya hai?
18. SSR ke baad hydration error kyun aata hai?

### 🌐 Browser & Rendering (19-24)
19. CSS render-blocking kyun hoti hai par JS parsing-blocking kyun hota hai?
20. Reflow aur repaint mein actual difference kya hai real example ke saath?
21. `position: absolute` kis ke relative hota hai? (trap question 😈)
22. `z-index` kab kaam nahi karta?
23. Browser HTML parsing ke beech JS execute kyun karta hai?
24. Critical rendering path optimize kaise karte ho practically?

### 🔐 Security Tricky (25-27)
25. React XSS se safe hai — kya ye statement 100% correct hai?
26. JWT localStorage mein store karna kyun dangerous hai?
27. CSRF attack tab bhi possible hai jab JWT use kar rahe ho?

### ⚡ Performance + Real-world (28-30)
28. Large list render karte waqt React app slow kyun ho jata hai? fix kaise karte ho?
29. API fast hai phir bhi UI slow kyun lag raha hai?
30. 1 second ke andar page load kaise achieve karoge real project mein?

---

## 📊 Database (Top 25)

1. How do you design database schema?
## `Hinglish Explanation:`

Database schema design karte waqt mera focus **business requirements**, **relationships**, **performance**, aur **future scalability** par hota hai.

Main generally ye approach follow karta hoon:

1. **Requirements samajhta hoon** – Kaun-kaun se entities hain (User, Course, Order, etc.).
2. **Tables/Collections identify karta hoon** – Har entity ke liye alag table.
3. **Relationships define karta hoon** – One-to-One, One-to-Many, Many-to-Many.
4. **Data types choose karta hoon** – Har field ke liye appropriate data type.
5. **Normalization apply karta hoon** – Data duplication avoid karne ke liye (generally 3NF tak).
6. **Indexes add karta hoon** – Frequently searched columns par index.
7. **Constraints use karta hoon** – Primary Key, Foreign Key, Unique, NOT NULL.
8. **Performance review karta hoon** – Query patterns dekhkar indexing ya denormalization agar zarurat ho.

---

## `Interview Answer:`

I start by understanding the business requirements and identifying the core entities. Then I define relationships, choose appropriate data types, normalize the schema to reduce redundancy, and add primary keys, foreign keys, and constraints for data integrity. Finally, I optimize the schema by creating indexes based on query patterns and consider denormalization only if performance requires it.

---

## `Real Example (LMS Project)`

Suppose I am designing an LMS database.

### Tables

```text
users
------
id
name
email
role

courses
--------
id
title
price
instructor_id

enrollments
-----------
id
user_id
course_id
enrolled_at

lessons
-------
id
course_id
title
video_url
```

### Relationships

* **User → Course** = One Instructor can create many courses.
* **Course → Lesson** = One course has many lessons.
* **User ↔ Course** = Many-to-Many through `enrollments`.

### Indexes

```sql
INDEX(email)

INDEX(course_id)

INDEX(user_id, course_id)
```

* `email` → Login queries
* `course_id` → Fetch lessons of a course
* `(user_id, course_id)` → Check whether a student is already enrolled

---

## `Things I Consider While Designing`

* Business requirements first
* Correct relationships
* Proper normalization
* Appropriate data types
* Primary & Foreign Keys
* Unique constraints where needed
* Indexes based on real query patterns
* Scalability and future features


## `30-Second Interview Answer`

> I design a database schema by first understanding the business requirements and identifying the main entities. Then I define relationships, choose appropriate data types, normalize the schema to reduce redundancy, and add primary keys, foreign keys, and constraints to maintain data integrity. Finally, I optimize performance by creating indexes based on actual query patterns and consider denormalization only when it provides a measurable performance benefit.

---

2. What is normalization vs denormalization?
## `Hinglish Explanation:`

### **Normalization**

Normalization ka matlab hai **data ko multiple related tables me divide karna** taaki duplicate data na ho aur data consistency bani rahe.

Iska main goal hai:

* Data redundancy kam karna
* Data consistency maintain karna
* Update anomalies avoid karna

---

### **Denormalization**

Denormalization ka matlab hai **performance improve karne ke liye kuch duplicate data intentionally store karna**.

Iska main goal hai:

* Joins kam karna
* Read queries fast banana
* Complex reports ko optimize karna

Isme storage thodi badh sakti hai, lekin read performance improve hoti hai.

---

## `Interview Answer:`

**Normalization** is the process of organizing data into multiple related tables to eliminate redundancy and maintain data integrity.

**Denormalization** is the process of intentionally adding redundant data to reduce joins and improve read performance, especially in read-heavy applications.

---

## `Example`

### ✅ Normalized Schema

```text
Users
------
id
name

Orders
-------
id
user_id
amount
```

User ka name sirf `Users` table me store hoga.

Order dekhna ho to JOIN lagega.

```sql
SELECT u.name, o.amount
FROM Orders o
JOIN Users u ON o.user_id = u.id;
```

---

### ✅ Denormalized Schema

```text
Orders
-------
id
user_id
user_name
amount
```

Ab `user_name` duplicate hai, lekin JOIN ki zarurat nahi.

```sql
SELECT user_name, amount
FROM Orders;
```

Read fast hogi, lekin agar user ka name change hua to duplicate values bhi update karni padengi.

---

## `Real Project Example`

### **CRM Project**

Maine **normalized schema** use ki thi:

* `users`
* `roles`
* `permissions`
* `campaigns`

Ye data frequently update hota tha, isliye consistency important thi.

---

### **Reporting Module**

Large reports (25M+ records) ke liye kuch computed/reporting data ko **denormalize** kiya tha taaki heavy JOINs avoid ho aur report generation faster ho.

---

## `When to Use`

| Normalization                    | Denormalization                  |
| -------------------------------- | -------------------------------- |
| Reduce redundancy                | Improve read performance         |
| Better data integrity            | Fewer JOINs                      |
| Write-heavy systems              | Read-heavy systems               |
| OLTP applications (CRM, Banking) | Reporting, Analytics, Dashboards |



## `30-Second Interview Answer`

> Normalization organizes data into multiple related tables to reduce redundancy and maintain data integrity, while denormalization intentionally stores some duplicate data to reduce joins and improve read performance. In my projects, I typically use normalized schemas for transactional modules like CRM and LMS, and apply denormalization selectively for reporting or analytics where query performance is more important than minimizing redundancy.
---

3. What is indexing and trade-offs?
4. How do you optimize slow queries?
5. What is EXPLAIN and how used?
6. What is JOIN and types?
7. How do you handle large datasets?
8. What is transaction?
9. What is ACID?
10. How do you handle concurrency?
11. Optimistic vs pessimistic locking?
12. What is N+1 problem?
13. How do you avoid full table scan?
14. What is partitioning?
15. What is replication?
16. How do you handle DB scaling?
17. What is indexing strategy?
18. When not to use index?
19. What is query optimization?
20. What is connection pooling?
21. How do you handle DB failures?
22. What is deadlock?
23. How do you debug DB issues?
24. What is data consistency?
25. How do you archive old data?

---

## 🔥 PHP + Laravel (Top 100 Questions)

### 🔹 SECTION 1: PHP CORE (ADVANCED) — 40 Questions

#### Basics but Deep Understanding
1. PHP 5.6 → 7 → 8 differences (real impact)
2. PHP ka request lifecycle kaise kaam karta hai?
3. `include` vs `require` vs `include_once` vs `require_once`

## `include`

### Hinglish Explanation:

`include` kisi dusri PHP file ko current file me add karta hai. Agar
file nahi milti, to warning aati hai lekin script execute hoti rehti
hai.

### Interview Answer:

`include` is used to include a file. If the file is missing, PHP
generates a warning and continues executing the script.

**Example:**

``` php
include 'header.php';

echo "Welcome!";
```

------------------------------------------------------------------------

## `require`

### Hinglish Explanation:

`require` bhi file include karta hai, lekin agar file nahi milti to
fatal error aata hai aur script wahi stop ho jati hai.

### Interview Answer:

`require` is used for mandatory files. If the file is not found, PHP
throws a fatal error and stops script execution.

**Example:**

``` php
require 'config.php';

echo "Application Started";
```

------------------------------------------------------------------------

## `include_once`

### Hinglish Explanation:

`include_once` file ko sirf ek hi baar include karta hai. Agar same file
dobara include karoge, to PHP usse ignore kar dega. Agar file missing
hai to warning aayegi aur script continue karegi.

### Interview Answer:

`include_once` includes a file only once. It prevents duplicate
inclusions while allowing the script to continue if the file is missing.

**Example:**

``` php
include_once 'helper.php';
include_once 'helper.php';
```

------------------------------------------------------------------------

## `require_once`

### Hinglish Explanation:

`require_once` file ko sirf ek baar include karta hai aur agar file nahi
milti to fatal error dekar script ko stop kar deta hai. Yeh important
files ke liye sabse zyada use hota hai.

### Interview Answer:

`require_once` includes a required file only once. It prevents duplicate
inclusion and terminates the script if the file is missing.

**Example:**

``` php
require_once 'config.php';
require_once 'config.php';
```

------------------------------------------------------------------------

## Difference Summary

  Statement        File Missing   Duplicate Include   Script Execution
  ---------------- -------------- ------------------- ------------------
  `include`        Warning        Allowed             Continues
  `require`        Fatal Error    Allowed             Stops
  `include_once`   Warning        Prevented           Continues
  `require_once`   Fatal Error    Prevented           Stops




4. `isset()` vs `empty()` vs `array_key_exists()`

## `isset()`

### Hinglish Explanation:

`isset()` check karta hai ki variable ya array key exist karti hai aur
uski value `null` nahi hai.

### Interview Answer:

`isset()` checks whether a variable or array key exists and is not
`null`.

**Example:**

``` php
$data = ['name'=>'Aman'];
isset($data['name']); // true
isset($data['age']); // false
```

------------------------------------------------------------------------

## `empty()`

### Hinglish Explanation:

`empty()` check karta hai ki value empty hai ya nahi. Ye `""`, `0`,
`"0"`, `false`, `null`, `[]` aur non-existing variable ko empty maanta
hai.

### Interview Answer:

`empty()` checks whether a variable is empty. It returns `true` for
empty values and undefined variables.

**Example:**

``` php
$name = "";
empty($name); // true

$count = 0;
empty($count); // true
```

------------------------------------------------------------------------

## `array_key_exists()`

### Hinglish Explanation:

`array_key_exists()` sirf ye check karta hai ki array me key exist karti
hai ya nahi. Agar value `null` bhi ho tab bhi ye `true` return karta
hai.

### Interview Answer:

`array_key_exists()` checks whether a specified key exists in an array,
regardless of its value.

**Example:**

``` php
$data = ['name' => null];

array_key_exists('name', $data); // true
isset($data['name']); // false
```

------------------------------------------------------------------------

## Difference Summary

  Function               Checks Existence   `null` Allowed   Empty Values
  ---------------------- ------------------ ---------------- -------------------------------
  `isset()`              ✅ Yes             ❌ No            Returns true if not null
  `empty()`              ❌ No              ✅ Yes           Returns true for empty values
  `array_key_exists()`   ✅ Yes             ✅ Yes           Doesn't check emptiness


5. PHP me data types aur type juggling kaise kaam karta hai?
## PHP Data Types

### Hinglish Explanation:

PHP ek loosely typed language hai. Isme variable ka data type
automatically uski value ke according decide hota hai. Common data types
hain: `int`, `float`, `string`, `bool`, `array`, `object`, `null`,
`resource`.

### Interview Answer:

PHP is a loosely typed language where variable types are determined
automatically based on assigned values. Common data types include
integer, float, string, boolean, array, object, null, and resource.

**Example:**

``` php
$age = 25;
$price = 99.99;
$name = "Rahul";
$isActive = true;
$colors = ["Red", "Blue"];
```

------------------------------------------------------------------------

## Type Juggling

### Hinglish Explanation:

Type juggling ka matlab hai ki PHP zarurat padne par automatically ek
data type ko dusre data type me convert kar deta hai. Ye arithmetic
operations, comparisons aur string concatenation ke time hota hai.

### Interview Answer:

Type juggling is PHP's automatic conversion of one data type to another
whenever an operation requires it.

**Example:**

``` php
$a = "10";
$b = 5;

echo $a + $b; // 15
```

Another example:

``` php
$value = "20abc";

echo $value + 5; // 25
```

------------------------------------------------------------------------

## Difference Summary

  -----------------------------------------------------------------------
  Topic                    Description
  ------------------------ ----------------------------------------------
  Data Types               Define the kind of value stored in a variable.

  Type Juggling            Automatically converts data types when
                           required by an operation.

  Explicit Type Casting    Manually converts data using `(int)`,
                           `(string)`, `(float)`, etc.
  -----------------------------------------------------------------------

### Explicit Type Casting Example

``` php
$number = "100";
$intNumber = (int) $number;

echo $intNumber;
```



#### OOP + Design
6. OOP principles PHP me kaise apply karte ho?
## `Hinglish Explanation:`

PHP me OOP principles ka use hum **classes, objects, inheritance, encapsulation, polymorphism aur abstraction** ke through karte hain. Isse code modular, reusable aur maintainable banta hai.

Agar interviewer puche **"OOP principles PHP me kaise apply karte ho?"**, to sirf definitions mat batao. Apne real project ka example do.

---

## `Interview Answer:`

In PHP, I apply OOP principles by organizing business logic into classes and using encapsulation, inheritance, polymorphism, and abstraction to keep the code modular, reusable, and easy to maintain.

For example, in my CRM and LMS projects:

* I used **Encapsulation** by keeping class properties private and exposing them through methods.
* I used **Inheritance** to extend base classes and reuse common functionality.
* I used **Polymorphism** by implementing common interfaces for different services like payment gateways.
* I used **Abstraction** by defining abstract classes or interfaces that hide implementation details and expose only the required behavior.

---

# 1. Encapsulation

### Idea

Data ko direct access nahi karne dete.

```php
class User
{
    private $email;

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getEmail()
    {
        return $this->email;
    }
}
```

### Real Example

LMS me

* User password private
* Direct access nahi
* Sirf methods ke through update

---

# 2. Inheritance

### Idea

Common functionality parent class me.

```php
class User
{
    public function login()
    {
        echo "Login";
    }
}

class Student extends User {}

class Instructor extends User {}
```

### Real Example

CRM me

Base controller

↓

UsersController

↓

CourseController

↓

EnrollmentController

Sab common methods inherit karte hain.

---

# 3. Polymorphism

### Idea

Same method

Different implementation

```php
interface Payment
{
    public function pay($amount);
}

class StripePayment implements Payment
{
    public function pay($amount)
    {
        echo "Stripe";
    }
}

class RazorpayPayment implements Payment
{
    public function pay($amount)
    {
        echo "Razorpay";
    }
}
```

Application sirf

```php
$payment->pay(1000);
```

call karta hai.

Implementation automatically decide hoti hai.

### Real Example

Payment Gateway

* Stripe
* Razorpay
* PayPal

Same interface

Different implementation

---

# 4. Abstraction

### Idea

Sirf required functionality expose karo.

Implementation hide karo.

```php
abstract class Notification
{
    abstract public function send();

    public function log()
    {
        echo "Logged";
    }
}
```

```php
class EmailNotification extends Notification
{
    public function send()
    {
        echo "Email Sent";
    }
}
```

### Real Example

Notification system

Developer ko sirf

```php
send()
```

pata hai.

Email bhejna hai ya SMS

Internal implementation hidden hai.

---

# `Real Project Example`

**CRM Project**

* `UserService` → user management
* `EmailService` → email sending
* `CampaignService` → campaign execution
* `StripePayment` → payment integration
* `Notification` interface → Email/SMS implementations

Har module independent tha, isliye maintenance aur testing easy thi.

---

# `30-Second Interview Answer`

> In PHP, I use OOP principles to build modular and maintainable applications. I use encapsulation to protect data with private properties, inheritance to reuse common functionality, polymorphism through interfaces for interchangeable implementations like payment gateways, and abstraction using interfaces or abstract classes to hide implementation details. In my CRM and LMS projects, this approach helped keep the code loosely coupled, reusable, and easier to extend.

7. SOLID principles kya hain? real example ke saath

## `Hinglish Explanation:`

**SOLID** 5 object-oriented design principles ka collection hai jo code ko **maintainable, scalable, reusable aur loosely coupled** banata hai.

Yaad rakhne ka trick:

* **S** → Single Responsibility Principle (SRP)
* **O** → Open/Closed Principle (OCP)
* **L** → Liskov Substitution Principle (LSP)
* **I** → Interface Segregation Principle (ISP)
* **D** → Dependency Inversion Principle (DIP)

---

## `Interview Answer:`

SOLID is a set of five object-oriented design principles that help developers build software that is easier to maintain, extend, test, and scale by reducing coupling and improving code organization.

---

# 1. Single Responsibility Principle (SRP)

### `Hinglish Explanation:`

Ek class ka **sirf ek reason hona chahiye change hone ka**.

❌ Wrong

```javascript
class UserService {
    createUser() {}
    sendEmail() {}
    generatePDF() {}
}
```

Agar email logic change hua ya PDF format change hua to same class modify hogi.

---

✅ Correct

```javascript
class UserService {
    createUser() {}
}

class EmailService {
    sendEmail() {}
}

class PDFService {
    generatePDF() {}
}
```

Har class ka sirf ek kaam.

---

### `Real Example`

Tumhare LMS project me

```
CourseService
```

Sirf course create kare.

```
EmailService
```

Enrollment email bheje.

```
StripeService
```

Payment handle kare.

---

# 2. Open/Closed Principle (OCP)

### `Hinglish Explanation:`

Code **extension ke liye open hona chahiye** aur **modification ke liye closed**.

Matlab existing code baar baar modify mat karo.

---

❌ Wrong

```javascript
function calculateDiscount(type) {

   if(type=="student"){

   }

   if(type=="teacher"){

   }

   if(type=="premium"){

   }

}
```

Har naye user type par function edit karna padega.

---

✅ Correct

```javascript
class StudentDiscount{
    calculate(){}
}

class TeacherDiscount{
    calculate(){}
}

class PremiumDiscount{
    calculate(){}
}
```

Naya discount?

Bas new class banao.

Purana code touch nahi.

---

### `Real Example`

Payment

```
StripePayment
```

Kal

```
RazorpayPayment
```

Aur baad me

```
PaypalPayment
```

Existing code change nahi.

Sirf new class.

---

# 3. Liskov Substitution Principle (LSP)

### `Hinglish Explanation:`

Child class ko parent class ki jagah use karne par application break nahi hona chahiye.

---

❌ Wrong

```javascript
class Bird{
   fly(){}
}

class Penguin extends Bird{

   fly(){
      throw Error("Cannot Fly")
   }

}
```

Penguin bird hai lekin fly nahi kar sakta.

Inheritance galat.

---

✅ Correct

```javascript
class Bird{}

class FlyingBird extends Bird{
   fly(){}
}

class Sparrow extends FlyingBird{}

class Penguin extends Bird{}
```

Ab koi problem nahi.

---

### `Real Example`

```
Payment
```

↓

```
StripePayment
```

↓

```
RazorpayPayment
```

Dono ka

```
pay()
refund()
```

same behavior.

Kahin bhi replace kar do.

Application same chale.

---

# 4. Interface Segregation Principle (ISP)

### `Hinglish Explanation:`

Ek bada interface mat banao.

Client ko wahi methods implement karne do jo usko chahiye.

---

❌ Wrong

```typescript
interface Worker{
   work()
   eat()
   sleep()
}
```

Robot?

Usko eat aur sleep implement karna padega.

---

✅ Correct

```typescript
interface Workable{
   work()
}

interface Eatable{
   eat()
}

interface Sleepable{
   sleep()
}
```

Ab

```
Human
```

teeno implement karega.

Robot sirf

```
Workable
```

---

### `Real Example`

LMS

Instructor

```
createCourse()
publishCourse()
```

Student

```
enrollCourse()
watchVideo()
```

Dono ke liye same interface nahi banana.

---

# 5. Dependency Inversion Principle (DIP)

### `Hinglish Explanation:`

High-level module ko directly low-level module par depend nahi hona chahiye.

Dono abstraction par depend karein.

---

❌ Wrong

```javascript
class OrderService{

   constructor(){

      this.email = new EmailService();

   }

}
```

OrderService tightly coupled hai.

SMS ya WhatsApp use karna ho to code change karna padega.

---

✅ Correct

```javascript
class OrderService{

   constructor(notificationService){

      this.notification = notificationService;

   }

}
```

Usage

```javascript
new OrderService(new EmailService());

new OrderService(new SMSService());

new OrderService(new WhatsAppService());
```

OrderService ko fark hi nahi padta.

---

### `Real Example`

Tumhare LMS me

```javascript
EnrollmentService
```

Notification bhejne ke liye directly

```javascript
EmailService
```

na use kare.

Instead

```javascript
NotificationService
```

interface use kare.

Kal

* Email
* SMS
* WhatsApp
* Push Notification

kuch bhi plug kar sakte ho.

---

# `Quick Revision Table`

| Principle   | One-Line Rule                                           | LMS Example                                                       |
| ----------- | ------------------------------------------------------- | ----------------------------------------------------------------- |
| **S - SRP** | Ek class ka sirf ek responsibility                      | `CourseService`, `EmailService`, `StripeService` alag             |
| **O - OCP** | Existing code modify na karo, extend karo               | New payment gateway add karna                                     |
| **L - LSP** | Child parent ko safely replace kar sake                 | `StripePayment` aur `RazorpayPayment` same contract follow karein |
| **I - ISP** | Chhote focused interfaces banao                         | `StudentActions` aur `InstructorActions` alag                     |
| **D - DIP** | Abstractions par depend karo, concrete classes par nahi | `EnrollmentService` → `NotificationService` interface             |

---

## **💡 30-Second Interview Answer**

> **SOLID** are five object-oriented design principles that improve maintainability, scalability, and testability.
>
> * **S**: One class should have one responsibility.
> * **O**: Open for extension, closed for modification.
> * **L**: Child classes should be replaceable with parent classes without breaking behavior.
> * **I**: Prefer small, specific interfaces over large ones.
> * **D**: Depend on abstractions rather than concrete implementations.
>
> **In my LMS project**, I applied these ideas by separating services like `CourseService`, `EmailService`, and `StripeService`, injecting notification implementations instead of hardcoding them, and designing modules so new payment providers or notification channels can be added without changing existing business logic.



8. Interface vs Abstract class

### `Hinglish Explanation:`

`Interface` ek **pure contract** hota hai. Ye sirf define karta hai ki class ko **kya implement karna hai**, implementation nahi deta (traditional concept; modern languages jaise Java me default methods aur TypeScript me sirf type contract hota hai).

`Abstract Class` bhi ek contract hoti hai, lekin isme **implementation bhi ho sakti hai**. Isme common code, properties, constructor aur abstract methods dono rakh sakte ho. Jab multiple classes me kuch common logic share karna ho tab abstract class use karte hain.

---

### `Interview Answer:`

An **Interface** defines a contract that implementing classes must follow, while an **Abstract Class** provides a partial implementation along with abstract methods. Use an interface when unrelated classes need the same behavior, and an abstract class when multiple classes share common state or functionality.

---

### `Example:`

```typescript
interface PaymentService {
  pay(amount: number): void;
}

abstract class NotificationService {
  sendLog() {
    console.log("Logging...");
  }

  abstract send(message: string): void;
}

class EmailService extends NotificationService implements PaymentService {
  pay(amount: number) {
    console.log(`Paid ₹${amount}`);
  }

  send(message: string) {
    console.log(`Email: ${message}`);
  }
}
```

---

### `Quick Interview Difference:`

| Interface                                                                                       | Abstract Class                                                       |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Defines only a contract                                                                         | Defines contract + common implementation                             |
| No instance variables/state (conceptually)                                                      | Can have state, fields, constructors                                 |
| Supports multiple implementations/inheritance (e.g., a class can implement multiple interfaces) | A class can extend only one abstract class in languages like Java/C# |
| Best for capability/behavior                                                                    | Best for code reuse and shared logic                                 |


9. Traits kya hote hain? kab use kiya?
10. Dependency Injection kya hai?

#### Advanced Concepts
11. Late Static Binding kya hota hai?
12. Namespaces ka use kyun karte hain?
13. Autoloading kaise kaam karta hai? (PSR-4)
14. Composer internally kaise kaam karta hai?
15. Reflection kya hota hai PHP me?

#### Performance & Optimization
16. PHP performance kaise improve karte ho?
17. OPCache kya hota hai?
18. Memory leak kaise detect karte ho?
19. Large data processing kaise handle karte ho?
20. Generators (`yield`) kab use kiya?

#### Error Handling
21. Exception vs Error
22. Custom exception kaise banate ho?
23. Logging kaise implement karte ho?
24. Debugging production issue kaise karte ho?

#### Security
25. SQL Injection kaise prevent karte ho?
26. XSS kya hai? kaise prevent karte ho?
27. CSRF kaise handle karte ho?
28. Secure file upload kaise karte ho?
29. Password hashing kaise karte ho?

#### Sessions & Auth
30. Session management kaise kaam karta hai?
31. Token-based auth vs session-based auth
32. JWT kya hai? kab use kiya?

#### API & Integration
33. REST API PHP me kaise banate ho?
34. Rate limiting kaise implement karte ho?
35. External API integration kaise handle karte ho?

#### Real-world Scenarios
36. Slow API debug kaise karte ho?
37. High traffic handle kaise karte ho?
38. Code refactoring ka example do
39. Legacy code kaise improve kiya?
40. Production issue ka example do

### 🔹 SECTION 2: LARAVEL (ADVANCED) — 60 Questions

#### Core Concepts
41. Laravel request lifecycle explain karo
42. MVC architecture Laravel me kaise implement hota hai?
43. Service Container kya hota hai?
44. Service Providers ka role kya hai?
45. Facades kya hote hain?

#### Routing & Middleware
46. Middleware kya hai? custom middleware kaise banate ho?
47. Route groups aur route caching kya hai?
48. Middleware chaining kaise kaam karta hai?
49. API versioning Laravel me kaise karte ho?

#### Controllers & Validation
50. Resource controllers kya hote hain?
51. Form request validation vs manual validation
52. Custom validation rules kaise banate ho?

#### Database & ORM
53. Eloquent ORM kya hai?
54. Eloquent vs Query Builder
55. N+1 problem kya hai? kaise solve kiya?
56. Lazy loading vs eager loading
57. Global scope vs local scope
58. Accessors & mutators kya hote hain?

#### Relationships
59. One-to-one, one-to-many, many-to-many relationships
60. Polymorphic relationships kya hote hain?
61. Pivot table kya hota hai?

#### Advanced DB Handling
62. Transactions Laravel me kaise use karte ho?
63. Database seeding & factories kya hote hain?
64. Migrations best practices

#### Queues & Jobs (VERY IMPORTANT)
65. Laravel queues kaise kaam karte hain?
66. Redis queue vs database queue
67. Queue failure kaise handle karte ho?
68. Retry mechanism kaise implement karte ho?
69. Jobs vs events vs listeners

#### Events & Broadcasting
70. Event-driven architecture kya hai?
71. Laravel broadcasting ka use kab karte ho?

#### Caching (VERY IMPORTANT)
72. Laravel caching kaise implement karte ho?
73. Redis vs file cache
74. Cache invalidation kaise handle karte ho?

#### Authentication & Authorization
75. Laravel authentication kaise kaam karta hai?
76. Sanctum vs Passport
77. Role-based access control kaise implement kiya?

#### API Development
78. REST API Laravel me kaise design karte ho?
79. API resources kya hote hain?
80. API pagination kaise implement karte ho?

#### Performance Optimization
81. Laravel performance optimize kaise karte ho?
82. Config caching, route caching kab use karte ho?
83. Eager loading ka impact kya hai?

#### Testing
84. Laravel testing kaise karte ho?
85. Unit vs feature testing

#### DevOps & Deployment
86. Laravel app deploy kaise karte ho?
87. Environment configuration kaise manage karte ho?

#### Advanced Architecture
88. Repository pattern kya hai?
89. Service layer architecture ka use
90. Modular Laravel kaise banate ho?

#### Real-world Scenarios (MOST IMPORTANT)
91. Slow Laravel API kaise optimize kiya?
92. Large email system kaise implement kiya?
93. Real-time notification system kaise banaya?
94. Multi-tenant system kaise design kiya?
95. High traffic handling ka real example

#### Senior-Level Thinking
96. Monolith vs microservices — kya choose kiya?
97. Code review process kaise chalate ho?
98. Team ko kaise mentor karte ho?
99. Technical decision ka example do
100. System design me Laravel ka role kaise define karte ho?

---

## 🔥 Senior-Level Answers: PHP & Laravel

### PHP Core (Selected Answers)

**1. PHP versions**
> In my experience, upgrading from PHP 5.6 to 7 improved performance significantly, almost 2x. Later with PHP 8, we got better type safety using union types and improved error handling, which helped reduce production bugs.

**2. Memory management**
> PHP handles memory automatically using garbage collection. In one project, we optimized memory by using generators instead of loading large datasets, which reduced memory usage significantly.

**3. isset vs empty vs array_key_exists**
> I usually use `isset()` for checking variables quickly. When I need to check empty values like "", 0, I use `empty()`. For arrays, I prefer `array_key_exists()` when null values are allowed.

**4. Traits**
> I used traits for sharing common methods like logging and reusable utilities across multiple classes without inheritance issues.

**5. Dependency Injection**
> I follow dependency injection to make code testable. For example, instead of creating DB connection inside class, I inject it, which makes unit testing easier.

**6. Composer**
> Composer helps manage dependencies. We used PSR-4 autoloading so classes load automatically, which keeps code clean and maintainable.

**7. Session security**
> In production, we used HTTPS, secure cookies, and regenerated session IDs to prevent session hijacking.

**8. Exception vs Error**
> Exceptions are used for handling expected issues like validation. Errors are system-level issues. I always use try-catch for better control.

**9. Generators**
> I used generators while processing large CSV files, which avoided loading entire file into memory.

**10. PHP-FPM**
> We used PHP-FPM with Nginx to handle high traffic efficiently, improving response handling and concurrency.

### Laravel (Selected Answers)

**11. Lifecycle**
> Request goes through middleware, routing, controller, and returns response. In debugging issues, I often check middleware and service container bindings.

**12. Middleware**
> I created custom middleware for authentication and logging API requests for audit purposes.

**13. Service Container**
> It helps manage dependencies. We used it for binding interfaces to implementations, making code flexible.

**14. Eloquent vs Query Builder**
> Eloquent is good for readability. For heavy queries, I prefer Query Builder for performance optimization.

**15. N+1 problem**
> I faced this issue in user listing. Solved it using eager loading, reducing queries from 100+ to 2.

**16. Queues**
> We used Redis queues for email campaigns, which reduced API response time significantly.

**17. Jobs vs Events**
> Jobs handle background tasks. Events are used for decoupling logic like sending notifications.

**18. Caching**
> We implemented Redis caching for frequently used APIs, reducing DB load by around 60%.

**19. Sanctum vs Passport**
> For simple APIs, I prefer Sanctum. For OAuth-based systems, Passport is better.

**20. Testing**
> I write unit tests for logic and feature tests for APIs to ensure end-to-end flow.

### Frontend (Selected Answers)

**21. React vs Angular**
> In one project, I chose React for flexibility. For enterprise apps, Angular is better due to built-in structure.

**22. Virtual DOM**
> It updates only changed parts, improving UI performance.

**23. Change Detection**
> Angular tracks changes automatically. We optimized performance using OnPush strategy.

**24. State Management**
> Used Redux/NgRx for managing global state in large apps.

**25. Lazy Loading**
> Used it to load modules only when required, reducing initial load time.

**26. Debounce vs Throttle**
> Used debounce in search inputs and throttle in scroll events.

**27. SSR vs CSR**
> Used SSR for SEO-heavy pages, CSR for dashboards.

**28. Performance**
> Reduced bundle size, used lazy loading and API optimization.

### Database (Selected Answers)

**29. Index**
> We added indexes on frequently queried columns, reducing query time significantly.

**30. Normalization**
> Used normalization for clean design, but denormalized for performance-critical queries.

**31. Joins**
> Used joins to fetch related data efficiently.

**32. Query Optimization**
> Optimized queries using indexes and avoiding unnecessary joins.

**33. Transactions**
> Used transactions in payment systems to ensure data consistency.

**34. Deadlock**
> Handled by retry mechanism and proper query ordering.

**35. Large Data**
> Used pagination and batching for handling large datasets.

**36. Sharding vs Replication**
> Used replication for read scaling. Sharding for very large datasets.

### API & System Design (Selected Answers)

**37. REST**
> Follow proper HTTP methods and stateless design.

**38. PUT vs PATCH**
> PUT replaces full data, PATCH updates partial data.

**39. Idempotency**
> Ensures repeated calls give same result, useful in payment APIs.

**40. Rate Limiting**
> Used middleware to limit API calls per user.

**41. Microservices**
> Used when system grows large, but adds complexity.

**42. Email System**
> Used queue + workers + AWS SES for scalable email delivery.

**43. Scalability**
> Used load balancer, caching, and queues.

**44. Caching**
> Used Redis for fast data access.

### Security (Selected Answers)

**45. OWASP**
> Handled SQL Injection, XSS, CSRF in applications.

**46. SQL Injection**
> Used prepared statements and ORM.

**47. XSS/CSRF**
> Escaped inputs and used CSRF tokens.

**48. Auth vs Authorization**
> Authentication verifies user, authorization checks access.

**49. Performance Tuning**
> Optimized DB, caching, and API responses.

**50. Monitoring**
> Used logs and tools like New Relic for monitoring.

### Bonus: JD-Specific Strong Answers

**CRM Experience**
> I worked on CRM where users manage leads, campaigns, and track activities in real-time.

**Audit System**
> Implemented logging system to track user actions for compliance and debugging.

**CI/CD**
> Used GitHub Actions/Jenkins for automated build and deployment.

**Docker**
> Used Docker for consistent development and deployment environments.

**AWS**
> Worked with EC2, S3, SES for hosting, storage, and email services.

**Real-time Tracking**
> Used tracking pixels and event logging for email analytics.

**Scaling Strategy**
> Handled scaling using queues, caching, and horizontal scaling.

---

## 📝 Quick Reference: Topic Areas

| Category | Question Range |
|----------|----------------|
| HTML | 1-50 |
| CSS | 51-100 |
| Browser & Rendering | 1-40 |
| Frontend Security | 41-90 |
| Performance Optimization | 91-120 |
| JavaScript | 1-120 |
| React | 121-220 |
| Node + Express | 221-310 |
| MongoDB | 311-360 |
| System Design & DevOps | 361-500 |
| Real-World Experience | 401-450 |
| Scenario-Based | 451-500 |
| Tricky Frontend | Top 30 |
| Database | Top 25 |
| PHP + Laravel | Top 100 |

---

*Happy Learning! 🚀*