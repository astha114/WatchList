const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true},
    user: { type: mongoose.Schema.Types.ObjectId },
    movies: [{ title: String, year: String, imdbID: String, poster: String, watched: Boolean }],
});

module.exports = mongoose.model('Watchlist', watchlistSchema);