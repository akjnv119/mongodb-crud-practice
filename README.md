# MongoDB CRUD Practice

This repository contains MongoDB queries that I practiced while learning backend development.

## Completed (Day 1)
- Database & Collection creation
- insertOne / insertMany
- find()
- Projection
- sort, limit, skip
- $and, $or operators

## Upcoming (Day 2)
- updateOne / updateMany
- deleteOne / deleteMany
- Aggregation pipelines ($match, $project, etc.)

## Sample Query
```js
db.products.find({}, { name: 1, price: 1, _id: 0 })
  .sort({ price: -1 })
  .limit(2)
