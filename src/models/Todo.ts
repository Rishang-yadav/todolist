
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Define the Image schema
const TodoSchema = new Schema({
  title:{type: 'string',required: true}
});

// Create the Image model
const Todo = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
export default Todo;

