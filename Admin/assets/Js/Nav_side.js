$(".menu-item").on('click',function()
{
    $(".menu-item.active").removeClass('active');
    $(this).addClass('active')
})

$(".sub-item").on('click',function()
{
    $(".sub-item.active").removeClass('active');
    $(this).toggleClass('active')
})

$(".item-salary").on('click',function()
{
    $('.sub-item-salary').toggleClass('show')
})
$(".item-employee").on('click',function()
{
    $('.sub-item-employee').toggleClass('show')
})
$(".item-department").on('click',function()
{
    $('.sub-item-department').toggleClass('show')
})



$('.open-btn').on('click',function(){
    $('.sidebar').addClass('active')
})
$('.close-btn').on('click',function(){
    $('.sidebar').removeClass('active')
})