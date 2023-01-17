var heroisdamarvel = /** @class */ (function () {
    function heroisdamarvel(t, r, f, i) {
        this.teletransporte = t;
        this.regenerar = r;
        this.força = f;
        this.imortalidade = i;
    }
    heroisdamarvel.prototype.exibirHeróis = function () {
        console.log("noturno tem o poder de se ".concat(this.teletransporte));
        console.log("Wolverine tem o poder de se ".concat(this.regenerar));
        console.log("Hulk tem o poder de ".concat(this.força, " e da ").concat(this.imortalidade));
    };
    return heroisdamarvel;
}());
var heróisdamarvel = new heroisdamarvel(true, false, true, true);
heróisdamarvel.exibirHeróis();
var Vingadores = /** @class */ (function () {
    function Vingadores() {
    }
    return Vingadores;
}());
var Vingadoresquemorreramnocinema = /** @class */ (function () {
    function Vingadoresquemorreramnocinema() {
    }
    return Vingadoresquemorreramnocinema;
}());
