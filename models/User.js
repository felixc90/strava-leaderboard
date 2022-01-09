const mongoose = require('mongoose')

var schema = mongoose.Schema({
    'strava_id' : Number,
    'discord_id' : Number,
    'refresh_token' : String,
    'name' : String,
    'username' : String,
    'profile' : String,
    'guilds' : [Number],
    'most_recent_run' : Number,
    'statistics' : [
        {
            'week_starting' : Date,
            'total_distance' : Number,
            'total_time' : Number,
        }
    ]
})
module.exports = mongoose.model("User", schema)