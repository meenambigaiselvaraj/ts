var form = (function () {
    function form() {
        var _this = this;
        this.name = document.getElementById('name');
        this.regno = document.getElementById('regno');
        this.dept = document.getElementById('dept');
        this.button = document.getElementById('sub');
        this.button.onclick = function (e) {
            _this.init();
        };
    }
    form.prototype.init = function () {
        console.log("Welcome ", this.name.value);
    };
    return form;
}());
var foo = new form();
