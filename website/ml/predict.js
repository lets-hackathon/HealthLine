const tf = require('@tensorflow/tfjs');

// Optional Load the binding: doesn't work as of now, maybe node-gyp problem?
// require('@tensorflow/tfjs-node');

//load the model, need to host the model.json file and access via http
let model
let hostedPath = 'http://hostname/path/to/model.json';
async function foo() {
  model = await tf.loadLayersModel(hostedPath);
console.log("success");
}  

foo();
