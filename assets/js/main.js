function nextToggle(item) {
	item.firstChild.classList.add('d-none');
	item.nextElementSibling.classList.remove('d-none');
}



// スムーススクロール
$(function(){
  $('a[href^="#mv"]').click(function(){
    //スクロールのスピード
    var speed = 700;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});
});