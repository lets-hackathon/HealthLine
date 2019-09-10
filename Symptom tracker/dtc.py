import pandas as pd
import json
a=pd.read_excel (r'C:\Users\Ansh Riyal\Desktop\Data mining\tweet mining\data.xlsx')

# print(str(a.Disease[1]))

d={}

for i in range(len(a.Disease)):
	if(str(a.Disease[i])!="nan"):
		d[a.Symptom[i]]=a.Count[i]

with open("tosort.json",'w') as f:
	json.dump(d,f)