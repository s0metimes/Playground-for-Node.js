var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var readline = require('readline');


function getPhoneNumbers() {
    var fileName = 'companies.txt';
    var absolute_url = "https://www.mobileworldcongress.com/exhibitor/";
    var url = "";

    var reader = readline.createInterface({
        input: fs.createReadStream(fileName)
    });

    reader.on('line', function(line) {
        url = absolute_url + line;
        request(url, function(err, res, body) {
            if (err) throw err;

            var $ = cheerio.load(body);
            fs.appendFileSync('infos.txt', "company_name: " + line);
            $("div.mod-content p").map(function() {
                var text = $(this).text().toString().trim();
                if (text.startsWith("+82"))
                    fs.appendFileSync('infos.txt', ", phone: " + text);
            });

            var text = $("a.web-site-link").attr("href");
            if (text != null) {
                text = String(text);
                if (text.length !== 0)
                    fs.appendFileSync('infos.txt', ", site: " + text);
            }
            fs.appendFileSync('infos.txt', "\n");
        });
    });
}

//getPhoneNumbers();
getNames();



function getNames() {
    var absolute_url = "https://www.mobileworldcongress.com/exhibition/2018-exhibitors/";
    var url = "";
    var companyNames = [];
    var i = 1;

    for (i = 1; i <= 6; i++) {
        (function(i) {
            url = absolute_url + "page/" + i + "/?country=1834";

            request(url, function(err, res, body) {
                if (err) throw err;

                var $ = cheerio.load(body);

                $("div.box-title").map(function() {
                    fs.appendFile('companies.txt', $(this).text().trim() + "\n");
                });
            });
        })(i);
    }
}
