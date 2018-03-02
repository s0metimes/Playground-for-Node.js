/**
 * Last updated 2018.02.08...
 * Published by s0metimes (Sihwan Oh)
 * 안녕.
 */

/*
    module loads
*/
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var readline = require('readline');

var fileName = "mwc_list.txt";
var absolute_url = "https://www.mobileworldcongress.com/exhibition/2018-exhibitors/page/";
var absolute_param = "?country=1834";
var url = "";
var j = 1;

for (var i = 1; i <= 6; i++) {
    (function(i) {
        url = absolute_url + i + absolute_param;

        request(url, function(err, res, body) {
            if(err) throw err;

            var $ = cheerio.load(body);
            $('div.box-title').map(function() {
                fs.appendFileSync(fileName, j++ + ": " + $(this).text() + "\r\n");
            });
        });
    })(i);


}
