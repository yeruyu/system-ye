//二级菜单
$('.A1').mouseenter(function () {
    $('.son').css('display', 'block');
    $('.son').css('z-index', '3');
})
$('.A1').mouseleave(function () {
    $('.son').css('display', 'none');
})
//导航栏切换页面
$('.fun>li').click(function (event) {
    let target = $(event.target);
    let id = target.attr('id');
    console.log(id);
    if (id === '1') {
        $('#info').css('display', 'block');
        $('#study').css('display', 'none');
        $('#leave').css('display', 'none');
        $('#adjust').css('display', 'none');
        $('.leaveInformation').css('display', 'none');
    } else if (id === '2') {
        $('#info').css('display', 'none');
        $('#study').css('display', 'block');
        $('#leave').css('display', 'none');
        $('#adjust').css('display', 'none');
        $('.leaveInformation').css('display', 'none');
    } else if (id === '3') {
        $('#info').css('display', 'none');
        $('#study').css('display', 'none');
        $('#leave').css('display', 'block');
        $('#adjust').css('display', 'none');
        $('.leaveInformation').css('display', 'none');
    } else {
        $('#info').css('display', 'none');
        $('#study').css('display', 'none');
        $('#leave').css('display', 'none');
        $('#adjust').css('display', 'block');
        $('.leaveInformation').css('display', 'none');
    }
})
//研学请假或调整原因填写界面
$('#Leave').click(function () {
    $('.leaveInformation1').css('display', 'block');
})
$('#Adjust').click(function () {
    $('.leaveInformation2').css('display', 'block');
})
$('.x').click(function () {
    $('.leaveInformation').css('display', 'none')
})









































