[⬅ Back to Index](./README.md)

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
## `Hinglish Explanation:`

**Index** database ka ek special data structure hota hai jo records ko **jaldi find** karne me help karta hai, bilkul book ke **table of contents** ki tarah.

Agar index nahi hoga, to database ko har row check karni padegi (**Full Table Scan / COLLSCAN**).

Agar index hoga, to database directly required records tak pahunch sakta hai (**Index Scan / IXSCAN**).

**Trade-off** ye hai ki read queries fast ho jati hain, lekin har insert, update aur delete ke time index bhi update karna padta hai.

---

## `Interview Answer:`

An index is a data structure that improves query performance by allowing the database to locate records quickly without scanning the entire table or collection. While indexes significantly speed up read operations, they increase storage usage and add overhead to insert, update, and delete operations because the indexes must also be maintained.

---

## `Example`

### Without Index

```sql
SELECT * FROM users
WHERE email = 'raj@example.com';
```

Database:

```text
Row1
Row2
Row3
...
Row1000000
```

Har row check karega.

**Execution Plan**

```text
COLLSCAN
```

---

### With Index

```sql
CREATE INDEX idx_email
ON users(email);
```

Ab query

```sql
SELECT * FROM users
WHERE email = 'raj@example.com';
```

Execution Plan

```text
IXSCAN
```

Sirf required records hi search honge.

---

## `Trade-offs`

### ✅ Advantages

* Fast search queries
* Faster sorting (`ORDER BY`)
* Better filtering (`WHERE`)
* Faster JOIN operations
* Improved aggregation performance in many cases

---

### ❌ Disadvantages

* Extra disk storage
* Slower `INSERT`
* Slower `UPDATE`
* Slower `DELETE`
* Too many indexes can hurt write performance

---

## `Real Project Example`

CRM project me users ko frequently email se search kiya jata tha.

```sql
CREATE INDEX idx_email
ON users(email);
```

Isse login aur user search bahut fast ho gaye.

Campaign module me composite index use kiya tha.

```sql
(status, email)
```

Query

```sql
WHERE status='ACTIVE'
AND email='abc@gmail.com'
```

Index efficiently use hota tha.

Agar sirf

```sql
WHERE email='abc@gmail.com'
```

query chalti, to **left-prefix rule** ki wajah se ye composite index effectively use nahi hota tha, isliye query planner ko dusra index ya scan choose karna pad sakta tha.

---

## `Types of Indexes`

* **Single Index** → `(email)`
* **Composite Index** → `(status, email)`
* **Unique Index** → Duplicate values prevent karta hai.
* **Text Index** (MongoDB) → Full-text search ke liye.
* **TTL Index** (MongoDB) → Documents automatically expire/delete karne ke liye.



## `30-Second Interview Answer`

> An index is a data structure that improves query performance by avoiding full table or collection scans. It speeds up reads, filtering, sorting, and joins, but it comes with trade-offs such as additional storage and slower insert, update, and delete operations because the indexes must also be maintained. In my projects, I create indexes based on actual query patterns—for example, indexing `email` for user lookups and using composite indexes for frequently filtered columns like `status` and `email`.

---
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

