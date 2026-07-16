[⬅ Back to Index](./README.md)

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

