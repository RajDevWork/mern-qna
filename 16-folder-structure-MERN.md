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
# Node.js + Express Folder Structure (Quick Reference)

## Recommended Structure

``` text
src/
├── config/
│   ├── db.js
│   ├── redis.js
│   ├── cloudinary.js
│   ├── stripe.js
│   └── mail.js
├── routes/
│   ├── auth.routes.js
│   ├── user.routes.js
│   ├── course.routes.js
│   └── payment.routes.js
├── controllers/
│   ├── auth.controller.js
│   ├── user.controller.js
│   ├── course.controller.js
│   └── payment.controller.js
├── services/
│   ├── auth.service.js
│   ├── user.service.js
│   ├── course.service.js
│   └── payment.service.js
├── repositories/
│   ├── user.repository.js
│   ├── course.repository.js
│   └── payment.repository.js
├── models/
│   ├── User.js
│   ├── Course.js
│   ├── Enrollment.js
│   └── Payment.js
├── middlewares/
│   ├── auth.middleware.js
│   ├── role.middleware.js
│   ├── upload.middleware.js
│   └── error.middleware.js
├── validations/
│   ├── auth.validation.js
│   ├── user.validation.js
│   └── course.validation.js
├── dto/
│   ├── user.dto.js
│   ├── course.dto.js
│   └── payment.dto.js
├── utils/
│   ├── formatDate.js
│   ├── slugify.js
│   └── generateOTP.js
├── helpers/
│   ├── sendEmail.js
│   ├── exportPDF.js
│   └── csvReader.js
├── constants/
│   ├── roles.js
│   ├── status.js
│   └── messages.js
├── lib/
│   ├── jwt.js
│   ├── bcrypt.js
│   └── axios.js
├── events/
│   ├── userRegistered.event.js
│   └── orderCreated.event.js
├── jobs/
│   ├── email.job.js
│   ├── report.job.js
│   └── cleanup.job.js
├── sockets/
│   ├── chat.socket.js
│   └── notification.socket.js
├── uploads/
├── docs/
│   └── swagger.yaml
├── tests/
│   ├── auth.test.js
│   └── course.test.js
├── app.js
└── server.js
```

------------------------------------------------------------------------

## config/

**Why?** Configure external services.

**Files** - db.js - redis.js - cloudinary.js - stripe.js - mail.js

``` js
mongoose.connect(process.env.MONGO_URI);
```

------------------------------------------------------------------------

## routes/

**Why?** Define API URLs.

**Files** - auth.routes.js - user.routes.js - course.routes.js

``` js
router.post("/login", authController.login);
```

------------------------------------------------------------------------

## controllers/

**Why?** Handle request & response.

**Files** - auth.controller.js - user.controller.js

``` js
exports.login = async (req,res)=>{
  const user = await authService.login(req.body);
  res.json(user);
};
```

------------------------------------------------------------------------

## services/

**Why?** Business logic.

**Files** - auth.service.js - payment.service.js

``` js
async function login(data){}
```

------------------------------------------------------------------------

## repositories/

**Why?** Database queries.

**Files** - user.repository.js - course.repository.js

``` js
User.findOne({email});
```

------------------------------------------------------------------------

## models/

**Why?** Database schema.

**Files** - User.js - Course.js - Payment.js

------------------------------------------------------------------------

## middlewares/

**Why?** Execute before controller.

**Files** - auth.middleware.js - role.middleware.js -
upload.middleware.js - error.middleware.js

------------------------------------------------------------------------

## validations/

**Why?** Validate request.

**Files** - auth.validation.js - course.validation.js

``` js
loginSchema.parse(req.body);
```

------------------------------------------------------------------------

## dto/

**Why?** Shape API response.

**Files** - user.dto.js - payment.dto.js

------------------------------------------------------------------------

## utils/

**Why?** Pure reusable functions.

**Files** - formatDate.js - slugify.js - generateOTP.js

------------------------------------------------------------------------

## helpers/

**Why?** Reusable helper workflows.

**Files** - sendEmail.js - exportPDF.js - csvReader.js

------------------------------------------------------------------------

## constants/

**Why?** Fixed values.

**Files** - roles.js - status.js - messages.js

------------------------------------------------------------------------

## lib/

**Why?** Wrap third-party libraries.

**Files** - jwt.js - bcrypt.js - axios.js

------------------------------------------------------------------------

## events/

**Why?** Application events.

**Files** - userRegistered.event.js - orderCreated.event.js

------------------------------------------------------------------------

## jobs/

**Why?** Background tasks.

**Files** - email.job.js - cleanup.job.js - report.job.js

------------------------------------------------------------------------

## sockets/

**Why?** Realtime communication.

**Files** - chat.socket.js - notification.socket.js

------------------------------------------------------------------------

## uploads/

**Files** - Uploaded images - PDFs - Documents

------------------------------------------------------------------------

## docs/

**Files** - swagger.yaml

------------------------------------------------------------------------

## tests/

**Files** - auth.test.js - course.test.js

------------------------------------------------------------------------

## app.js

Configure Express app.

## server.js

Start server and connect database.

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
