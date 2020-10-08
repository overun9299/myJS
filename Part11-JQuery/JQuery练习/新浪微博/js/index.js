$(function () {

    $(".myButton").click(function () {
        console.log($(".mText").val());
        let val = $(".mText").val();
        let $1 = $("<li>\n" +
            "                <div class=\"conmm\">\n" +
            "                    <p class=\"myone\">"+ val +"</p>\n" +
            "                    <p class=\"myTwo\"><span class=\"Mleft\">"+ formartDate() +"</span>\n" +
            "                        <span class=\"MRight\">\n" +
            "                            <a href=\"javascript:\" class=\"upup\">0</a>\n" +
            "                            <a href=\"javascript:\" class=\"downdown\">0</a>\n" +
            "                            <a href=\"javascript:\" class=\"deldel\">删除</a>\n" +
            "                        </span>\n" +
            "                    </p>\n" +
            "                </div>\n" +
            "            </li>");
        $(".myUl").append($1);

    })


    // 生成时间方法
    function formartDate() {
        var date = new Date();
        // 2018-4-3 21:30:23
        var arr = [date.getFullYear() + "-",
            date.getMonth() + 1 + "-",
            date.getDate() + " ",
            date.getHours() + ":",
            date.getMinutes() + ":",
            date.getSeconds()];
        return arr.join("");

    }


    // 2.监听顶点击
    $("body").delegate(".upup", "click", function () {
        $(this).text(parseInt($(this).text()) + 1);
    });
    // 3.监听踩点击
    $("body").delegate(".downdown", "click", function () {
        $(this).text(parseInt($(this).text()) + 1);
    });
    // 4.监听删除点击
    $("body").delegate(".deldel", "click", function () {
        $(this).parents(".conmm").remove();
    });
})