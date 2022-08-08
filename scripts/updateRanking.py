import json
import requests
from bs4 import BeautifulSoup

url ="https://www.musinsa.com/ranking/best?period=day"

file_path = './public/data/ranking.json'

response = requests.get(url)

ranking = []

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    list = soup.select('#goodsRankList > li > div.li_inner > div.article_info > p.list_info > a')[0: 10]

for item in list:
    ranking.append(item['title'])

data = { "data":  ranking }

with open(file_path, 'w') as outfile:
    json.dump(data, outfile, indent=2, ensure_ascii=False)