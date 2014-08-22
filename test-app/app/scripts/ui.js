/* global define */
//define(['handlebars'], function (Handlebars) {
define(['templates', 'articles'], function (templates, articles) {
    'use strict';
    
    var self = {};
    
    self.createUI = function createUI() {
        //console.log(Handlebars);
        var html = templates['app/templates/template.hbs'](articles);
        $('.hero-unit').find('ul').html(html);
    };
    
    return self;
});

