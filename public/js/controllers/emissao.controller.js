(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("EmissaoListController", EmissaoListController);

        EmissaoListController.$inject = ["EmissaoService"];

    function EmissaoListController(EmissaoService) {
        var vm = this;
        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            EmissaoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            EmissaoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();