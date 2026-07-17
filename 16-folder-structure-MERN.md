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

# api/

API endpoints.

Example

```
auth.api.js

course.api.js

payment.api.js
```

Mostly

Axios.

---

# services/

Business logic after API.

Example

```
login()

logout()

purchaseCourse()
```

Suppose login ke baad

```
Save Token

Update Store

Redirect
```

Ye service karegi.

---

# pages/

Actual screen.

```
Home

Dashboard

Login

Profile

Checkout
```

---

# components/

Reusable UI.

```
Button

Modal

Input

Navbar

Sidebar

Card
```

Rule

Business logic minimum.

---

# features/

Bade projects ka heart.

```
features/

auth/

dashboard/

course/

payment/

profile/
```

Har feature ke andar

```
components

hooks

services

types
```

---

# layouts/

```
DashboardLayout

AuthLayout

AdminLayout
```

---

# hooks/

Custom Hooks.

```
useAuth()

useDebounce()

usePagination()
```

---

# store/

Redux

Zustand

Jotai

---

# context/

React Context.

---

# providers/

```
ThemeProvider

QueryProvider

AuthProvider
```

---

# utils/

```
formatDate()

truncate()

currencyFormat()
```

---

# lib/

Wrapped libraries.

```
axios.js

react-query.js
```

---

# constants/

```
Routes

Role

Theme

API_URL
```

---

# config/

Frontend Config.

```
env

theme

menu
```

---

# styles/

Global CSS

Tailwind

Variables

---

# types/

TypeScript

Interfaces

Types

---

# React Flow

```
Page

↓

Component

↓

Hook

↓

Service

↓

API

↓

Express

↓

Response

↓

Store

↓

UI
```

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
