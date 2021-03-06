angular
    .module("MyApp", ["ngRoute", "satellizer"])
    .config(function($routeProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "partials/home.html",
            })
            .when("/home", {
                templateUrl: "partials/home.html",
            })
            .when("/emissao", {
                templateUrl: "partials/emissao.html",
            })
            .when("/emissao/:id", {
                templateUrl: "partials/emissao-form.html",
            })
            .when("/emissao/new", {
                templateUrl: "partials/emissao-form.html",
            }) 
            .when("/contribuinte", {
                templateUrl: "partials/contribuinte.html",
            })
            .when("/contribuinte/:id", {
                templateUrl: "partials/contribuinte-form.html",
            })
            .when("/contribuinte/new", {
                templateUrl: "partials/contribuinte-form.html",
            }) 
            .when("/atividade", {
                templateUrl: "partials/atividade.html",
            })
            .when("/atividade/:id", {
                templateUrl: "partials/atividade-form.html",
            })
            .when("/atividade/new", {
                templateUrl: "partials/atividade-form.html",
            })            
            .when("/empresa", {
                templateUrl: "partials/empresa.html",
            })
            .when("/empresa/:id", {
                templateUrl: "partials/empresa-form.html",
            })
            .when("/empresa/new", {
                templateUrl: "partials/empresa-form.html",
            })
            .when("/responsavel", {
                templateUrl: "partials/responsavel.html",
            })
            .when("/responsavel/:id", {
                templateUrl: "partials/responsavel-form.html",
            })
            .when("/responsavel/new", {
                templateUrl: "partials/responsavel-form.html",
            })
            .when("/rua", {
                templateUrl: "partials/rua.html",
            })
            .when("/rua/:id", {
                templateUrl: "partials/rua-form.html",
            })
            .when("/rua/new", {
                templateUrl: "partials/rua-form.html",
            })
            .when("/bairro", {
                templateUrl: "partials/bairro.html",
            })
            .when("/bairro/:id", {
                templateUrl: "partials/bairro-form.html",
            })
            .when("/bairro/new", {
                templateUrl: "partials/bairrro-form.html",
            })
            .when("/cidade", {
                templateUrl: "partials/cidade.html",
            })
            .when("/cidade/:id", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/cidade/new", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/estado", {
                templateUrl: "partials/estado.html",
            })
            .when("/estado/:id", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/estado/new", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/pais", {
                templateUrl: "partials/pais.html",
            })
            .when("/pais/:id", {
                templateUrl: "partials/pais-form.html",
            })
            .when("/pais/new", {
                templateUrl: "partials/pais-form.html",
            })            
            .otherwise({
                templateUrl: "partials/404.html",
            });
    })
    .run(function($rootScope, $window) {
        
    })
    .directive("ngConfirmClick", [
        function() {
            return {
                link: function(scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind("click", function(event) {
                        if (window.confirm(msg)) {
                            scope.$eval(clickAction);
                        }
                    });
                },
            };
        },
    ]);