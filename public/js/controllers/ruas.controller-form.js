(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("RuaFormController", RuaFormController);

        RuaFormController.$inject = [
        "RuaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function RuaFormController(
        RuaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.rua = {};
        vm.titulo = "Nova Rua";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                RuaService.findById($routeParams.id).success(function (data) {
                    vm.rua = data;
                    vm.titulo = "Editando Rua";
                });
            }
        }

        function salvar() {
            RuaService.save(vm.rua).success(function () {
                $location.path("/rua");
                alert("Rua cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();