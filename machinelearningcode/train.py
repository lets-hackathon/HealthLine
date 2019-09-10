import re
import json
import keras
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense
from keras.preprocessing.sequence import pad_sequences

df = pd.read_csv('./data/emotions.data')
#df.head() #to examine dataframe

#create vocabulary and encode them into numbers
word2id = {}
label2id = {}
max_words = 0

data_sent = [text.split(" ") for text in df["text"].values.tolist()]
labels = df["emotions"].values.tolist()

for sent in data_sent:
    for word in sent:
        if word not in word2id:
            word2id[word] = len(word2id)
            
    if len(sent) > max_words:
        max_words = len(sent)

#converting list to set jumbles the labels this caused the initial problem...        
label2id = {l: i for i, l in enumerate(set(labels))}
id2label = {i: l for l, i in label2id.items()}

#print(id2label)
#print(label2id)

#these save our vocabulary to use later with tensorflowjs model
with open('word2id.json', 'w') as f1:
    json.dump(word2id, f1)

with open('label2id.json', 'w') as f2:
    json.dump(label2id, f2)

#create input-output list

X = [[word2id[word] for word in sent] for sent in data_sent]
Y = [label2id[label] for label in labels]

X = pad_sequences(X, max_words)
Y = keras.utils.to_categorical(Y, num_classes=len(label2id), dtype='float32')
#print("Shape of X: {}".format(X.shape))
#print("Shape of Y: {}".format(Y.shape))

embedding_dim = 100
sequence_input = keras.Input(shape=(max_words,), dtype='int32')
embedded_inputs =keras.layers.Embedding(len(word2id) + 1,embedding_dim,input_length=max_words)(sequence_input)

# Apply dropout to prevent overfitting 
embedded_inputs = keras.layers.Dropout(0.2)(embedded_inputs)
lstm_outs = keras.layers.wrappers.Bidirectional(
    keras.layers.LSTM(embedding_dim, return_sequences=True)
)(embedded_inputs)

# Apply dropout to LSTM outputs to prevent overfitting
lstm_outs = keras.layers.Dropout(0.2)(lstm_outs)
# Attention Mechanism - Generate attention vectors
input_dim = int(lstm_outs.shape[2])
permuted_inputs = keras.layers.Permute((2, 1))(lstm_outs)
attention_vector = keras.layers.TimeDistributed(keras.layers.Dense(1))(lstm_outs)
attention_vector = keras.layers.Reshape((max_words,))(attention_vector)
attention_vector = keras.layers.Activation('softmax', name='attention_vec')(attention_vector)
attention_output = keras.layers.Dot(axes=1)([lstm_outs, attention_vector])                   
                                                                                              
# Last layer: fully connected with softmax activation
fc = keras.layers.Dense(embedding_dim, activation='relu')(attention_output)
output = keras.layers.Dense(len(label2id), activation='softmax')(fc)

# Finally building model
model = keras.Model(inputs=[sequence_input], outputs=output)
model.compile(loss="categorical_crossentropy", metrics=["acc"], optimizer='adam') 

# Print model summary
# model.summary()

# This trains the model
x_train, x_test, y_train, y_test = train_test_split(X, Y, test_size=0.20)
print(x_train.shape, y_train.shape)
print(x_test.shape, y_test.shape)
history = model.fit(X, Y, epochs=5, batch_size = 128, validation_data = (x_test, y_test), shuffle=True, verbose=1)

# This saves the model
model.save('./model/LSTM.h5')
#with open('.json', 'w') as f:
#    f.write(model.to__json())

#to load from scratch
#from keras.models import load_model
#model = load_model('./model/LSTM.h5)
