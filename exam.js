// ==UserScript==
// @name         保密考试
// @namespace    http://tampermonkey
// @version      0.1
// @description  过滤包含关键字的XHR请求
// @match        http://*.baomi.org.cn/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
    this.addEventListener('load', function() {
      if (this.responseURL.indexOf('getExamContentData') !== -1){
          if (this.readyState === 4 && this.status === 200) {
            var json = JSON.parse(this.responseText);
            console.log("选择题");
            var answer1=json.data.typeList[0].questionList;
            answer1.forEach(function(item) {console.log(item.answer);});}
            console.log("判断题");
            var answer2=json.data.typeList[1].questionList;
            var uniqueCollection2 = [];
            answer2.forEach(function(item) {console.table(item.answer);
           });}
   });
    open.apply(this, arguments);
  };
})();
