Ye request mujhe kaafi pasand aayi, kyunki ye **industry-oriented** hai.

Main tumhe **"meri पसंद"** wala structure nahi dunga. Main wo structure dunga jo tum **80-90% MERN companies** me dekh sakte ho (thoda bahut naam change ho sakta hai, responsibility almost same rehti hai).

---

# 1. Backend (Node.js + Express)

```
src/
│
├── config/
├── routes/
├── controllers/
├── services/
├── repositories/
├── models/
├── middlewares/
├── validations/
├── dto/
├── utils/
├── helpers/
├── constants/
├── lib/
├── events/
├── jobs/
├── sockets/
├── uploads/
├── docs/
├── tests/
│
├── app.js
└── server.js
```

---

# config/

### Purpose

Application configuration.

### Isme kya hoga?

```
db.js
redis.js
cloudinary.js
stripe.js
aws.js
passport.js
mail.js
```

### Rule

✅ Third-party service initialize karo

❌ Business logic nahi.

Example

```
mongoose.connect()

cloudinary.config()

new Stripe(API_KEY)

```
``` js
// config/db.js
mongoose.connect(process.env.MONGO_URI);
```

---

# routes/

### Purpose

Sirf endpoints define karna.

Example

```
POST /login

GET /courses

DELETE /course/:id
```

Example

```js
router.post("/login", loginController);
```

Route me kabhi ye nahi hona chahiye

```js
User.findOne(...)
bcrypt.compare(...)
```

---

# controllers/

### Purpose

Request aur Response handle karna.

Example

```
req.body

req.params

req.query

res.json()
```
``` js
exports.login = async (req, res) => {
  const user = await authService.login(req.body);
  res.json(user);
};
```

Controller ka kaam

```
Receive Request

↓

Call Service

↓

Return Response
```

Controller me kabhi

```
Huge business logic

Complex calculations

Database queries
```

nahi.

---

# services/

### Purpose

Business Logic

Yahi project ka brain hai.

Example

```
Login

Register

Purchase Course

Generate Invoice

Send OTP

Create Order

Calculate Discount
```
``` js
async function login(data) {
  const user = await userRepo.findByEmail(data.email);
  // compare password
  // generate JWT
  return user;
}
```

Service ka rule

Business decision yahi hoga.

Example

```
Email already exists?

↓

Password compare

↓

Generate JWT

↓

Return User
```

---

# repositories/

### Purpose

Database access.

Sirf database.

Example

```
findUser()

createUser()

updateCourse()

deleteEnrollment()
```

``` js
exports.findByEmail = (email) =>
  User.findOne({ email });
```

Rule

```
Mongo

MySQL

Postgres

Prisma

Mongoose
```

Jo bhi DB hai usse baat karega.

Business logic nahi.

---

# models/

Mongo Schema

```
User.js

Course.js

Payment.js

Enrollment.js
```

``` js
const UserSchema = new Schema({
  name: String,
  email: String
});
```

Rule

Sirf schema.

---

# middlewares/

Express request ke beech me chalne wale functions.

Example

```
Authentication

Authorization

Rate Limiter

Logger

Upload

Error Handler
```
``` js
router.get("/profile", verifyJWT, profileController);
```

Example

```
verifyJWT

adminOnly

uploadImage

errorHandler
```

---

# validations/

Request validation.

```
register.validation.js

login.validation.js

course.validation.js
```

``` js
loginSchema.parse(req.body);
```

Libraries

```
Zod

Joi

Express Validator
```

---

# dto/

DTO = Data Transfer Object

Purpose

Database se pura object mat bhejo.

Sirf required fields.

Example


``` js
return {
  id: user.id,
  name: user.name,
  email: user.email
};
```
Database

```
password

otp

refreshToken

email

role
```

Frontend

```
name

email

profileImage
```

DTO convert karega.

---

# utils/

Reusable pure functions.

Example

```
formatDate()

slugify()

generateOTP()

capitalize()

randomString()
```
``` js
exports.slugify = (text) =>
  text.toLowerCase().replace(/ /g, "-");
```


Rule

Database nahi.

Request nahi.

Response nahi.

---

# helpers/

Complex reusable helpers.

Example

``` js
await sendEmail(user.email, subject, html);
```
```
sendEmail()

generatePDF()

excelExport()

csvReader()
```

Difference

Utils

👉 Pure Function

Helpers

👉 Third party ka helper.

---

# constants/

Fixed values.

```
ROLE

STATUS

ERROR_MESSAGE

REGEX

LIMITS
```
``` js
module.exports = {
  ROLE_ADMIN: "admin"
};
```

---

# lib/

External libraries wrap karna.

Example

``` js
module.exports = new Stripe(process.env.STRIPE_SECRET);
```

```
jwt.js

bcrypt.js

axios.js
```

Taaki future me replace karna easy ho.

---

# events/

Event Driven Architecture.

Example

``` js
eventEmitter.emit("userRegistered", user);
```

```
User Registered

↓

Email

↓

Notification

↓

Analytics
```

---

# jobs/

Background Jobs.


``` js
cron.schedule("* * * * *", cleanup);
```
Example

```
Send Email

Generate Report

Cleanup

Cron
```

Mostly

BullMQ

Agenda

Cron

---

# sockets/

Realtime

``` js
io.emit("newMessage", message);
```

```
Chat

Notifications

Live Tracking
```

---

# uploads/

Temporary uploads.

---

# docs/

Swagger

OpenAPI

API Documentation

---

# tests/

Unit Test

Integration Test

---

# app.js

Express App

```
middlewares

routes

cors
```

---

# server.js

Application start.

```
connectDB()

listen()
```

---

# Request Flow

```
Client

↓

Route

↓

Middleware

↓

Validation

↓

Controller

↓

Service

↓

Repository

↓

Model

↓

MongoDB

↓

Response
```

---

# React Folder Structure

```
src/

├── api/
├── assets/
├── components/
├── features/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── store/
├── context/
├── utils/
├── constants/
├── types/
├── styles/
├── lib/
├── providers/
├── config/

├── App.jsx
└── main.jsx
```

---
# React Folder Structure (Quick Reference)

## Recommended Structure

``` text
src/
├── api/
│   ├── auth.api.js
│   ├── course.api.js
│   └── payment.api.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Navbar.jsx
│   └── CourseCard.jsx
├── features/
│   ├── auth/
│   │   ├── LoginForm.jsx
│   │   ├── auth.service.js
│   │   └── auth.hooks.js
│   ├── course/
│   └── payment/
├── hooks/
│   ├── useAuth.js
│   ├── useDebounce.js
│   └── usePagination.js
├── layouts/
│   ├── DashboardLayout.jsx
│   ├── AdminLayout.jsx
│   └── AuthLayout.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── DashboardPage.jsx
│   └── ProfilePage.jsx
├── routes/
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
├── services/
│   ├── auth.service.js
│   ├── course.service.js
│   └── payment.service.js
├── store/
│   ├── auth.store.js
│   └── course.store.js
├── context/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── providers/
│   ├── AuthProvider.jsx
│   └── QueryProvider.jsx
├── utils/
│   ├── formatDate.js
│   ├── slugify.js
│   └── currency.js
├── constants/
│   ├── roles.js
│   ├── routes.js
│   └── api.js
├── lib/
│   ├── axios.js
│   └── react-query.js
├── config/
│   ├── env.js
│   └── theme.js
├── styles/
│   ├── globals.css
│   └── tailwind.css
├── types/
│   └── user.types.ts
├── App.jsx
└── main.jsx
```

------------------------------------------------------------------------

## api/

**Why?** API endpoint functions.

**Files** - auth.api.js - course.api.js - payment.api.js

``` js
export const login = (data) => axios.post("/login", data);
```

------------------------------------------------------------------------

## assets/

**Files** - logo.png - hero.jpg - user.svg

------------------------------------------------------------------------

## components/

**Files** - Button.jsx - Input.jsx - Modal.jsx - Navbar.jsx

``` jsx
export default function Button({children}) {
  return <button>{children}</button>;
}
```

------------------------------------------------------------------------

## features/

**Files** - auth/LoginForm.jsx - auth/auth.service.js -
course/CourseCard.jsx

------------------------------------------------------------------------

## hooks/

**Files** - useAuth.js - useDebounce.js - usePagination.js

``` js
export function useAuth(){ }
```

------------------------------------------------------------------------

## layouts/

**Files** - DashboardLayout.jsx - AuthLayout.jsx

------------------------------------------------------------------------

## pages/

**Files** - LoginPage.jsx - HomePage.jsx - DashboardPage.jsx

------------------------------------------------------------------------

## routes/

**Files** - AppRoutes.jsx - ProtectedRoute.jsx

------------------------------------------------------------------------

## services/

**Files** - auth.service.js - payment.service.js

``` js
export async function loginUser(data){}
```

------------------------------------------------------------------------

## store/

**Files** - auth.store.js - user.store.js

------------------------------------------------------------------------

## context/

**Files** - AuthContext.jsx - ThemeContext.jsx

------------------------------------------------------------------------

## providers/

**Files** - AuthProvider.jsx - QueryProvider.jsx

------------------------------------------------------------------------

## utils/

**Files** - formatDate.js - truncate.js - capitalize.js

------------------------------------------------------------------------

## constants/

**Files** - roles.js - routes.js - api.js

------------------------------------------------------------------------

## lib/

**Files** - axios.js - react-query.js

------------------------------------------------------------------------

## config/

**Files** - env.js - theme.js

------------------------------------------------------------------------

## styles/

**Files** - globals.css - tailwind.css

------------------------------------------------------------------------

## types/

**Files** - user.types.ts - course.types.ts

------------------------------------------------------------------------

## App.jsx

Root component.

## main.jsx

React entry point.



# 📌 MERN Interviews ke liye 5 Golden Rules

Agar ye 5 rules follow karoge, to chahe folder names thode alag hon, architecture clean rahega:

1. **Routes** → Sirf URL mapping (`/login`, `/courses/:id`).
2. **Controllers** → Request lo, Service call karo, Response bhejo.
3. **Services** → Saara business logic yahin rahega.
4. **Repositories/Models** → Database access yahin tak limited rahe.
5. **Components (React)** → UI render karein; API calls aur complex logic ko Hooks/Services me shift karo.

---

## Tumhare liye ek practical advice

Tum **Laravel background** se ho. Isliye Express ko Laravel se map karke yaad karo:

| Laravel          | Express               |
| ---------------- | --------------------- |
| `routes/api.php` | `routes/`             |
| Controller       | `controllers/`        |
| Service (custom) | `services/`           |
| Eloquent Model   | `models/`             |
| Form Request     | `validations/`        |
| Middleware       | `middlewares/`        |
| `config/`        | `config/`             |
| Helper.php       | `utils/` / `helpers/` |

Is mapping ki wajah se tumhara transition bahut smooth hoga, kyunki tum naye folders yaad nahi kar rahe hoge—sirf existing Laravel concepts ko Express me translate kar rahe hoge.
