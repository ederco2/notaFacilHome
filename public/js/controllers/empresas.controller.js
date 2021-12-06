(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("EmpresaListController", EmpresaListController);

        EmpresaListController.$inject = ["EmpresaService"];

    function EmpresaListController(EmpresaService) {
        var vm = this;
        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            EmpresaService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            EmpresaService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();