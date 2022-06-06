import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MediaSchema = new Schema({
    Name: String,
    Year: String,
    Director: String,
    Rating: String,
    Type: String
},
{collection: "movies"
});

const Model = mongoose.model("Movies",MediaSchema);

export default Model;