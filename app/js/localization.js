define(["angular"], function(){   
    "use strict";
    angular.module("common.localization", []).factory("localize", ["$http", "$rootScope", "$window",
        function($http, $rootScope, $window) {
            var localize;
            return localize = {
                language: $window.navigator.language,
                url: void 0,
                resourceFileLoaded: !1,
                successCallback: function(data) {
                    return localize.dictionary = data, localize.resourceFileLoaded = !0, $rootScope.$broadcast("localizeResourcesUpdated")
                },
                setLanguage: function(value) {
                    return localize.language = value.toLowerCase().split("-")[0], localize.initLocalizedResources()
                },
                setUrl: function(value) {
                    return localize.url = value, localize.initLocalizedResources()
                },
                buildUrl: function() {
                    return localize.language || (/*localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase(),*/ localize.language = localize.language.split("-")[0]), "js/i18n/resources-locale_" + localize.language + ".js"
                },
                initLocalizedResources: function() {
                    var url;
                    return url = localize.url || localize.buildUrl(), $http({
                        method: "GET",
                        url: url,
                        cache: !1
                    }).success(localize.successCallback).error(function() {
                        console.log(url);
                        return $rootScope.$broadcast("localizeResourcesUpdated")
                    })
                },
                getLocalizedString: function(value) {
                    var result, valueLowerCase;
                    return result = void 0, localize.dictionary && value ? (valueLowerCase = value.toLowerCase(), result = "" === localize.dictionary[valueLowerCase] ? value : localize.dictionary[valueLowerCase]) : result = value, result
                }
            }
        }
    ]).directive("i18n", ["localize",
        function(localize) {
            var i18nDirective;
            return i18nDirective = {
                restrict: "EA",
                updateText: function(ele, input, placeholder) {
                    var result;
                    return result = void 0, "i18n-placeholder" === input ? (result = localize.getLocalizedString(placeholder), ele.attr("placeholder", result)) : input.length >= 1 ? (result = localize.getLocalizedString(input), ele.text(result)) : void 0
                },
                link: function(scope, ele, attrs) {
                    return scope.$on("localizeResourcesUpdated", function() {
                        return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder)
                    }), attrs.$observe("i18n", function(value) {
                        return i18nDirective.updateText(ele, value, attrs.placeholder)
                    })
                }
            }
        }
    ]).controller("LangCtrl", ["$scope", "$window", "localize",
        function($scope, $window, localize) {
            return $scope.lang = $window.navigator.language, localize.initLocalizedResources(), $scope.setLang = function(lang) {
                switch (lang) {
                    case "en":
                        localize.setLanguage("EN-US");
                        break;
                    case "fr":
                        localize.setLanguage("FR-FR");
                        break;
                    default: localize.setLanguage("EN-US");
                }
                return $scope.lang = lang
            }
        }
    ])
});