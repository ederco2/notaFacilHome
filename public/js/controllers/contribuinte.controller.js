(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("ContrListController", ContrListController);

        ContrListController.$inject = ["ContribuinteService"];

    function ContrListController(ContribuinteService) {
        var vm = this;
        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            ContribuinteService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            ContribuinteService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();