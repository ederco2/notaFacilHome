(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("EmpresaFormController", EmpresaFormController);

    EmpresaFormController.$inject = [
        "EmpresaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function EmpresaFormController(
        EmpresaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.empresa = {};
        vm.titulo = "Novo Empresa";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                EmpresaService.findById($routeParams.id).success(function (data) {
                    vm.empresa = data;
                    vm.titulo = "Editando Empresa";
                });
            }
        }

        function salvar() {
            EmpresaService.save(vm.empresa).success(function () {
                $location.path("/empresa");
                alert("Empresa cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();