(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("ContrFormController", ContrFormController);

        ContrFormController.$inject = [
        "ContribuinteService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function ContrFormController(
        ContribuinteService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.contribuinte = {};
        vm.titulo = "Novo Contribuinte";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                ContribuinteService.findById($routeParams.id).success(function (data) {
                    vm.contribuinte = data;
                    vm.titulo = "Editando Contribuinte";
                });
            }
        }

        function salvar() {
            ContribuinteService.save(vm.contribuinte).success(function () {
                $location.path("/contribuinte");
                alert("Contribuinte cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();