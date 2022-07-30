from datetime import datetime
import json

file_path = './src/chart.json'

now = datetime.now()

data = { "hello": str(now) }

with open(file_path, 'w') as outfile:
    json.dump(data, outfile, indent=2)