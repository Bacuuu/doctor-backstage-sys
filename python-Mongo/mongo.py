import pymongo
import time
# import serial
# import serial.tools.list_ports

myClient = pymongo.MongoClient("mongodb://localhost:27017")

docSys = myClient['docSys']

coll = docSys['data']

data = {"pressure": [1,2,3], 'avarage': 123, 'time': int(time.time())}

print(docSys.list_collection_names())

print(coll.insert_one(data));
