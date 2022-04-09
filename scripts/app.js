// Change big image when hover on the preview images:
let selectedItem = 1;

$(".item-chooser1__container").click(() => {
    changeImagesByItem(1);
    changeItemStyle(1, 2);
});

$(".item-chooser2__container").click(() => {
    changeImagesByItem(2);
    changeItemStyle(2, 1);
});

const changeImagesByItem = (itemNumber) => {
    selectedItem = itemNumber;
    $("#big-img").attr("src", `../assets/images/item${selectedItem}-big1.jpg`);
    $("#preview-1").attr(
        "src",
        `../assets/images/item${selectedItem}-preview1.jpg`
    );
    $("#preview-7").attr(
        "src",
        `../assets/images/item${selectedItem}-preview7.jpg`
    );
};

const changeItemStyle = (to, from) => {
    $(`.item-chooser${to}__container`).css({
        border: "#e47911 1px solid",
    });
    $(`.price-${to}`).css({
        color: "#b12704",
        "font-weight": 700,
    });
    $(`.price-${from}`).css({
        color: "#565959",
        "font-weight": 400,
    });

    $(`.item-chooser${from}__container`).css({
        "border-color": "#e0e0e0",
    });
};

$("#img-preview-1").hover(() => {
    $("#big-img").attr("src", `../assets/images/item${selectedItem}-big1.jpg`);
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
    $("#big-img").attr("src", `../assets/images/item${selectedItem}-big7.jpg`);
});
