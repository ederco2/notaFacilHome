(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("RespListController", RespListController);

        RespListController.$inject = ["ResponsavelService"];

    function RespListController(ResponsavelService) {
        var vm = this;
        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            ResponsavelService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            ResponsavelService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();