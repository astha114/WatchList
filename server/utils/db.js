const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/watchList")
.then(()=>{
    console.log('db.connected')
})