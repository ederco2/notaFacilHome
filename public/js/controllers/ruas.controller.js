(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("RuaListController", RuaListController);

        RuaListController.$inject = ["RuaService"];

    function RuaListController(RuaService) {
        var vm = this;
        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            RuaService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            RuaService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();