/* global define, Modernizr */
/* jshint indent:4 */
define(function (){
    'use strict';
  
    var self = {};
    
    
    self.init = function init() {
        console.log('Core module initialised');
    };
   
    console.log('Module ready');
    
    // test for the Canvas Browser Feature
    if (Modernizr.canvas) {
        console.log('Canvas!');
    }
    
    
    self.init();
  
    return self;
});


