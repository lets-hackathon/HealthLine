const tf = require('@tensorflow/tfjs');
//const tf = require('@tensorflow/tfjs-node') //breaks at node -v < 10.x.x
const label2id = require('./tfjs-model/label2id.json')
const word2id = require('./tfjs-model/word2id.json')


//load the model, need to host the model.json file and access via http
let model;
async function predict() {
  model = await tf.loadLayersModel('http://127.0.0.1:3000/model.json'); //npm http-server /path/to/tfjs-model -p 3000 find a way to host using express.static function
console.log("model loaded successfully.");

//processing
  let text = "i am happy"; //this is an example, it will be taken from .txt file sent by ansh...
  let tokenized_text = text.split(" ");
  let encoded_samples = [];
  for (let i = 0; i < tokenized_text.length; i++) {
    if (word2id[tokenized_text[i]] != undefined) {
      encoded_samples.push(word2id[tokenized_text[i]])
    }
    else {
      continue;
    }
  }
  encoded_samples = tf.tensor1d(encoded_samples);
  encoded_samples = encoded_samples.pad([[178 - encoded_samples.size,0]]);
  encoded_samples = encoded_samples.reshape([1, 178]);
  label_probs = model.predict(encoded_samples).print(); //replace this and send it to chartjs
}  

predict();