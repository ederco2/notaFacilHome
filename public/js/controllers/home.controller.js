(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.cidadesPage = cidadesPage;
        vm.estadosPage = estadosPage;
        vm.bairrosPage = bairrosPage;

        activate();

        function activate() {
        }
        function bairrosPage() {
            $location.path("/bairro");
        }
        function cidadesPage() {
            $location.path("/cidade");
        }
        function estadosPage() {
            $location.path("/estado");
        }
    }
})();