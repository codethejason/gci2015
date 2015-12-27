from urllib2 import Request, urlopen, URLError #Has requests functionality
import urllib #Must use because urllib2 does not have urlencode just in case query string has spaces
import json

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
		print result["text"].encode('utf-8'), '\n'
except URLError, e:
    print 'Error Code:', e
