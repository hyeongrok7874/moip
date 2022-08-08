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
    list = soup.select('#goodsRankList > li > div.li_inner > div.article_info')[0: 10]


for item in list:
    brand = item.select_one('p.item_title > a').text
    name = item.select_one('p.list_info > a')['title']
    ranking.append({"brand": brand, "name": name})


data = { "data":  ranking }

with open(file_path, 'w') as outfile:
    json.dump(data, outfile, indent=2, ensure_ascii=False)