$(function () {
    var copyBtn = new ClipboardJS('#copy');

    copyBtn.on("success", function (e) {
        e.clearSelection();
    });
});