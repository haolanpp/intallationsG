$(function() {

    // 显示小屏菜单
    $('.menu').mouseover(function() {
        $('.menu>ul').show();
    });
    $('.menu>ul').mouseout(function() {
        $('.menu>ul').hide();
    })

    // 显示搜索提示
    $('.nav>.search>input').focus(function() {
        $('.search-other').show();
    });
    $('.nav>.search>input').blur(function() {
        $('.search-other').hide();
    });


})