

// 1. MODAL
 

document.getElementById('contact').addEventListener('click',function(){
    document.getElementById('contact_modal').style.display = 'block';
})

document.getElementById('modalClose').addEventListener('click',function(){
    document.getElementById('contact_modal').style.display = 'none';
})


// 2. gnb메뉴
$(function(){
    $('header .gnbBtn').on('click',function(){
    $('header nav.gnb').toggleClass('on');
    });
    $('.contents').on('click',function(){
    $('header nav.gnb').removeClass('on');
    });

});

 

