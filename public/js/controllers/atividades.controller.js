(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("AtividadeListController", AtividadeListController);

        AtividadeListController.$inject = ["AtividadeService"];

    function AtividadeListController(AtividadeService) {
        var vm = this;
        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            AtividadeService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            AtividadeService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();