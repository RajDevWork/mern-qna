[⬅ Back to Index](./README.md)

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

  Hinglish Explanation

    MongoDB Atlas Triggers ek serverless automation feature hai jo MongoDB Atlas provide karta hai.

    Iska kaam hai database me hone wale events ko continuously monitor karna aur jaise hi koi specific event hota hai (Insert, Update, Delete, Replace etc.), automatically ek function execute kar dena, bina kisi API call ya cron job ke.

    Simple words me:

    "Jab database me koi event hota hai, Atlas Trigger automatically response me predefined JavaScript function chala deta hai."

    Iske liye alag se server maintain karne ki zarurat nahi hoti.

    Real Life Example

    Suppose ek E-commerce application hai.

    Customer ne order place kiya.

    orders Collection

    {
      customer: "Raj",
      amount: 2500,
      status: "Pending"
    }

    Jaise hi ye document insert hua,

    Atlas Trigger automatically execute ho jayega aur

    Email bhej sakta hai
    SMS bhej sakta hai
    Invoice generate kar sakta hai
    Inventory update kar sakta hai
    Analytics collection me data store kar sakta hai

    Without writing any backend API.

    Working Flow
    User Places Order
            │
            ▼
    Document Inserted into MongoDB
            │
            ▼
    Atlas Trigger Detects Event
            │
            ▼
    Executes Serverless Function
            │
            ▼
    Send Email / Update Inventory / Log Activity
    Types of Atlas Triggers
    1. Database Trigger (Most Common)

    Database ke events monitor karta hai.

    Supported Events

    Insert
    Update
    Delete
    Replace

    Example

    New User Registered

    ↓

    Trigger

    ↓

    Send Welcome Email
    2. Scheduled Trigger

    Ye Cron Job ki tarah kaam karta hai.

    Specific time ya interval par function execute karta hai.

    Example

    Every Day 12 AM

    ↓

    Delete Expired Sessions

    ↓

    Backup Data

    ↓

    Generate Reports

    Example

    Imagine
    ``` js

    users.insertOne({
      name: "Raj",
      email: "raj@gmail.com"
    });

    ```

    Atlas Trigger detect karega

    Insert Event

    ↓

    Run Function

    ↓

    Send Welcome Email


  `Interview Answer:`

    MongoDB Atlas Triggers are a serverless automation feature provided by MongoDB Atlas. They automatically execute JavaScript functions whenever specific database events occur, such as insert, update, delete, or replace operations, or based on a scheduled time. They eliminate the need for a dedicated backend service to monitor database changes. We commonly use Atlas Triggers for sending notifications, synchronizing data with external systems, updating audit logs, processing orders, and automating background tasks. Since the functions run on MongoDB Atlas infrastructure, we don't need to manage servers for these event-driven operations.


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

