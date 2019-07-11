import serial
import pymongo
import time


myClient = pymongo.MongoClient("mongodb://localhost:27017")

docSys = myClient['docSys']

coll = docSys['data']

ser = serial.Serial('COM7', 9600, timeout=0.2)

while True:
	rec = ser.readline()
	new_rec = []
	avarage = 0
	if (rec):
		rec = rec.decode('ascii')
		rec = rec.split(',');
		for x in range(len(rec)-1):
			new_rec.append(int(rec[x]))
			avarage += int(rec[x])
		avarage = avarage/(len(new_rec))
		new_rec.append(float(rec[-1][0:-2]))
		# print(new_rec)
		data = {"pressure": new_rec, 'avarage': avarage, 'time': int(time.time())}
		print(coll.insert_one(data));
