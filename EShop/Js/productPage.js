
window.jQuery || document.write('jquery-1.12.0.min.js')
$(document).ready(function () {
    
    $('#btnTennis').click(function () {
        var t = parseInt($('#tennisC').val());      
        countTennis = t + 1;
        $("#tennisC").val(countTennis);
    });
    $("#btnSoccer").click(function () {
        var s = parseInt($('#soccerC').val());
        countSoccer = s + 1;
        $("#soccerC").val(countSoccer);
    });
    $("#btnBasketball").click(function () {
        var b = parseInt($('#basketballC').val());
        countBasketball = b + 1;
        $("#basketballC").val(countBasketball);
    });
    $("#btnGolf").click(function () {
        var g = parseInt($('#golfC').val());
        countGolf = g + 1;
        $("#golfC").val(countGolf);
    });



});
var countTennis;
var countSoccer;
var countBasketball;
var countGolf;


var products = {

    'tennisJ': countTennis,
    'soccerJ': countSoccer,
    'basketballJ': countBasketball,
    'golfJ': countGolf
};