import axios from 'axios';

const tf = require('@tensorflow/tfjs');
//const tf = require('@tensorflow/tfjs-node') //breaks at node -v < 10.x.x
const label2id = require('./tfjs-model/label2id.json')
const word2id = require('./tfjs-model/word2id.json')

const cors = require('cors');
const express=require("express");
const data = require("./narendramoditweets.json"); // change to YourTweets.json, which will be constructed by python
const app = express();

//load the model, need to host the model.json file and access via http
app.use(cors()); //for cross origin requests

let model;
var totlabel = {
  anger     : 0.0,
  surprise  : 0.0,
  love      : 0.0,
  joy       : 0.0,
  sadness   : 0.0,
  fear      : 0.0
};
var texts = [];

async function predict(req,res) {
  const address = "http://127.0.0.1:3001/model.json";
  model = await tf.loadLayersModel(address);
  console.log("Emotional Analysis Model loaded successfully.")

  //text processing to make it fit for the model.
  let texts = Object.values(data);
  for (let i = 0; i < texts.length; i++) {
    let tokenized_text = texts[i].split(" ");
    let encoded_samples = [];
    for (let i = 0; i < tokenized_text.length; i++) {
      if (word2id[tokenized_text[i]] != undefined) {
        encoded_samples.push(word2id[tokenized_text[i]])
      } else {
        continue;
      }
    }
    encoded_samples = tf.tensor1d(encoded_samples);
    encoded_samples = encoded_samples.pad([
      [178 - encoded_samples.size, 0]
    ]);
    encoded_samples = encoded_samples.reshape([1, 178]);
    const label_probs = model.predict(encoded_samples);
    const values = label_probs.as1D().dataSync();
    const arr = Array.from(values);

    totlabel["love"]     += arr[0];
    totlabel["surprise"] += arr[1];
    totlabel["anger"]    += arr[2];
    totlabel["joy"]      += arr[3];
    totlabel["fear"]     += arr[4];
    totlabel["sadness"]  += arr[5];
  }

  for (var property in totlabel) {
    totlabel[property] /= texts.length; //for average
  }
    //console.log(totlabel);
    return res.json(totlabel);
}

export default predict;