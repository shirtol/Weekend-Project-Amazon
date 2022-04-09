let selectedItem = 1;
let arrOfExclusivePreview = [1, 7];

$(".item-chooser1__container").click(() => {
    changeImagesByItem(1);
    changeItemStyle(2, 1);
});

$(".item-chooser2__container").click(() => {
    changeImagesByItem(2);
    changeItemStyle(1, 2);
});

const changeImagesByItem = (itemNumber) => {
    selectedItem = itemNumber;
    $("#big-img").attr("src", `../assets/images/item${selectedItem}-big1.jpg`);

    for (let num of arrOfExclusivePreview) {
        $(`#preview-${num}`).attr(
            "src",
            `../assets/images/item${selectedItem}-preview${num}.jpg`
        );
    }
};

const changeItemStyle = (src, dest) => {
    $(`.item-chooser${dest}__container`).css({
        border: "#e47911 1px solid",
    });
    $(`.price-${dest}`).css({
        color: "#b12704",
        "font-weight": 700,
    });
    $(`.price-${src}`).css({
        color: "#565959",
        "font-weight": 400,
    });

    $(`.item-chooser${src}__container`).css({
        "border-color": "#e0e0e0",
    });
};

for (let i = 1; i <= 7; i++) {
    if (arrOfExclusivePreview.includes(i)) {
        $(`#img-preview-${i}`).hover(() => {
            $("#big-img").attr(
                "src",
                `../assets/images/item${selectedItem}-big${i}.jpg`
            );
        });
    } else {
        $(`#img-preview-${i}`).hover(() => {
            $("#big-img").attr("src", `../assets/images/item1-big${i}.jpg`);
        });
    }
}
