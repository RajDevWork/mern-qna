[⬅ Back to Index](./README.md)

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

