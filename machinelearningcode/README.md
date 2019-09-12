# description

this directory contains the code to train a model to detect emotions associated with text data, which is used for the utility social presence analysis that determines the overall mental status of a person based on their social media data.  
the model is trained using long short term memory approach and produces an accuracy of approximately 93%.  
the final model created is converted to be used by tensorflowjs in order to integrate well with the nodejs development environment.  
the subdirectories/files are explained as follows
- **model**: contains the outcome model in Hierarchical Data Format (version 5)
- **data**: the text data used for training/testing the model
- **train.py**: code in python to create the model

## To run
Type in terminal the following commands -

1. `npm install http-server`
2. from directory Healthline, `npx http-server ./website/ml/tfjs-model/ -p 3000`
3. from directory machinelearningcode `node predict.js`

> if error @tensorflow/tfjs-node not found, `npm install @tensorflow/tfjs-node`  
> if error @tensorflow/tfjs not found, `npm install @tensorflow/tfjs`  
> make sure to have node -v 10.x.x or higher and npm/npx installed before
