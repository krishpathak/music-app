const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
    artist:{
        type:String,
        require:true
    },
    song:{
        type:String,
        required:false
    },
    cover:{
        type:String,
        required:false
    },
    audio:{
        type:String,
        required:false
    }
});

const song = mongoose.models.musics || mongoose.model("music",MusicSchema);

module.exports = song;