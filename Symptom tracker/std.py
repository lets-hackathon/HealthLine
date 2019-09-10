import pandas as pd
import json
a=pd.read_excel (r'C:\Users\Ansh Riyal\Desktop\Data mining\tweet mining\data.xlsx')

# print(str(a.Disease[1]))

d={}

for i in range(len(a.Symptom)):
	d[a.Symptom[i]]=[]

for i in range(len(a.Symptom)):
	if(str(a.Disease[i])!="nan"):
		dis=a.Disease[i]
	d[a.Symptom[i]].append(dis)

print(len(d))
print(len(a.Symptom))


with open("data.json",'w') as f:
	json.dump(d,f)