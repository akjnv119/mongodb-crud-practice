use('ecommerce');

// db.products.find()
// db.products.find().pretty()

//filter by field
//db.products.find({ category: "Electronics" })

// Using comparison operator

//db.products.find({ price: { $gt: 1000 } }) // greater than 1000
//db.products.find({ price: { $gte: 1000, $lte: 50000 } })

// Logical operators

//db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })
// db.products.find({
//   $and: [
//     { category: "Electronics" },
//     { price: { $gt: 1000 } }
//   ]
// })

//Projection (select specific fields)

//db.products.find({}, { name: 1, price: 1, _id: 0 })

//sorting and limiting
db.products.find().sort({ price:-1 }).limit(2)
