from urllib2 import Request, urlopen, URLError #Has requests functionality
import urllib #Must use because urllib2 does not have urlencode just in case query string has spaces
import json
from pyquery import PyQuery as pq

parameters = { 'count' : 100, 'q' : 'Star Wars movie'}
parameters = urllib.urlencode(parameters)
url = "http://loklak.org/api/search.json?"+parameters

request = Request(url, None, {'User-agent' : 'Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5'})

try:
	response = urlopen(request)
	results = response.read()
	results = json.loads(results)
	results = results["statuses"]
	for result in results:
		tweet = result["text"]
		if "Emoji--forText" not in tweet:
			print tweet, '\n'
		else:
		  #emoji_key = pandas.read_csv('emoji_table.txt', encoding='utf-8', index_col=0)
		  img = pq(tweet)('img')
		  print img.attr("alt").encode("utf-8")
except URLError, e:
    print 'Error Code:', e

