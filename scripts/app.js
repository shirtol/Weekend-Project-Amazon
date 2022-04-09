// Change big image when hover on the preview images:

$("#img-preview-1").hover(() => {
    $("#big-img").attr("src", "../assets/images/item1-big1.jpg");
});
$("#img-preview-2").hover(() => {
    $("#big-img").attr("src", "../assets/images/item1-big2.jpg");
});
$("#img-preview-3").hover(() => {
    $("#big-img").attr("src", "../assets/images/item1-big3.jpg");
});
$("#img-preview-4").hover(() => {
    $("#big-img").attr("src", "../assets/images/item1-big4.jpg");
});
$("#img-preview-5").hover(() => {
    $("#big-img").attr("src", "../assets/images/item1-big5.jpg");
});
$("#img-preview-6").hover(() => {
    $("#big-img").attr("src", "../assets/images/item1-big6.jpg");
});
$("#img-preview-7").hover(() => {
    $("#big-img").attr("src", "../assets/images/item1-big7.jpg");
});

/* 
!TODO: change big image when hover on items 
! change preview when click on items (just 1 and 7 preview images need to change.)
! 
*/

// Change preview images when click on item:
$(".item-chooser2__container").click(() => {
    $("#preview-1").attr("src", "");
});
