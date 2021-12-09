(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("EmissaoFormController", EmissaoFormController);

        EmissaoFormController.$inject = [
        "EmissaoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function EmissaoFormController(
        EmissaoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.emissao = {};
        vm.titulo = "Emitir Nota";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                EmissaoService.findById($routeParams.id).success(function (data) {
                    vm.emissao = data;
                    vm.titulo = "Editando a Nota";
                });
            }
        }

        function salvar() {
            EmissaoService.save(vm.emissao).success(function () {
                $location.path("/emissao");
                alert("Nota cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();