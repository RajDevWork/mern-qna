[⬅ Back to Index](./README.md)

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

