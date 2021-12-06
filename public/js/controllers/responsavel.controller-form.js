(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("RespFormController", RespFormController);

        RespFormController.$inject = [
        "ResponsavelService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function RespFormController(
        ResponsavelService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.responsavel = {};
        vm.titulo = "Novo Responsavel";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                ResponsavelService.findById($routeParams.id).success(function (data) {
                    vm.responsavel = data;
                    vm.titulo = "Editando Responsavel";
                });
            }
        }

        function salvar() {
            ResponsavelService.save(vm.responsavel).success(function () {
                $location.path("/responsavel");
                alert("Responsavel cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();