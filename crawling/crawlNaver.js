/**
 * Last updated 2018.02.08...
 * Published by s0metimes (Sihwan Oh)
 */

/*
    module loads
*/
var request = reqiuire('request');
var cheerio = require('cheerio');
var fs = require('fs');
var readline = require('readline');

var fileName = 'crawlNaverResult.txt';
var absolute_url = 'https://comic.naver.com/';
var url = "";
