"use strict";
requirejs.config({
    paths: {
        "angular":"../bower_components/angular/angular.min",
        "angular-route":"../bower_components/angular-route/angular-route.min",
        "angular-mock":"../bower_components/angular-mocks/angular-mocks",
        "angular-animate":"../bower_components/angular-animate/angular-animate.min",
        "angular-material":"../bower_components/angular-material/angular-material.min",
        "angular-aria":"../bower_components/angular-aria/angular-aria.min",
        "hammerjs":"../bower_components/hammerjs/hammer.min"
    },
     shim: {
         "hammerjs":{exports:"hammerjs"},
        "angular":{exports:"angular"},
        "angular-route":["angular"],
        "angular-mock":["angular"],
        "angular-aria":["angular"],
        "angular-animate":["angular"],
        "angular-material":{
            deps:["angular", "angular-aria", "angular-animate", "hammerjs"]
        }
    }
});
requirejs(["angular","app"], function(angular){
      angular.bootstrap(document, ["ngNoxCV"]);
});