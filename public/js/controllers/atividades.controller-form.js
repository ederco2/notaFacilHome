(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("AtividadeFormController", AtividadeFormController);

        AtividadeFormController.$inject = [
        "AtividadeService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function AtividadeFormController(
        AtividadeService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.atividade = {};
        vm.titulo = "Nova Atividade";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                AtividadeService.findById($routeParams.id).success(function (data) {
                    vm.atividade = data;
                    vm.titulo = "Editando Atividade";
                });
            }
        }

        function salvar() {
            AtividadeService.save(vm.atividade).success(function () {
                $location.path("/atividade");
                alert("Atividade cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();