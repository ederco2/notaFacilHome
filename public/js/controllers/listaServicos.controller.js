(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("ServicoListController", ServicoListController);

        ServicoListController.$inject = ["ServicoService"];

    function ServicoListController(ServicoService) {
        var vm = this;
        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            ServicoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            ServicoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();