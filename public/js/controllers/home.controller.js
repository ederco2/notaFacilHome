(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.contribuintePage   = contribuintePage;
        vm.atividadePage      = atividadePage;
        vm.empresasPage       = empresasPage;
        vm.responsavelPage    = responsavelPage;
        vm.ruasPage           = ruasPage;
        vm.bairrosPage        = bairrosPage;
        vm.cidadesPage        = cidadesPage;
        vm.estadosPage        = estadosPage;        
        vm.paisPage           = paisPage;

        activate();

        function activate() {
        }

        function contribuintePage() {
            $location.path("/contribuinte");
        }         
        function atividadePage() {
            $location.path("/atividade");
        }        
        function empresasPage() {
            $location.path("/empresa");
        }
        function responsavelPage() {
            $location.path("/responsavel");
        }
        function ruasPage() {
            $location.path("/rua");
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
        function paisPage() {
            $location.path("/pais");
        }
    }
})();