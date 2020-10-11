$(function () {
    var wolfTimer;

    //游戏规则按钮 ，但是把事件绑定到a 标签上，即$("#id").click(),但是没有任何反应，然后查了下，原来不能把click事件直接绑定到a标签上，必须绑定到 标签之内的元素上
    // $(".role").trigger("click" , function () {
    //     console.log(123)
    // })
    $(".role").click(function () {
        $(".rule").stop().fadeIn(300)
    })

    $(".getClose").click(function () {
        $(".rule").stop().fadeOut(300)
    })

    $(".startGame").click(function () {
        console.log("开始游戏")
        $(this).css({
            display:"none"
        })
        progressHandler();
    })
    $(".reStartGame").click(function () {
        $(".fenshu").text(0)
        console.log("重新开始")
        $(".endGame").css({
            display:"none"
        })
        $(".progress").css({
            width:180
        })
        progressHandler();
    })



    function progressHandler() {

        let interval = setInterval(function () {
            let style = $(".progress").width()
            style-= 2;
            $(".progress").css({
                width:style
            })

            if (style <= 0) {
                clearInterval(interval);
                $(".endGame").css({
                    display:"block"
                })
                clearInterval(wolfTimer);
                $(".wolfImage").remove();
            }
        }, 200);
        startWolfAnimation();

    }


    function startWolfAnimation() {

        // 1.定义两个数组保存所有灰太狼和小灰灰的图片
        var wolf_1=['./images/h0.png','./images/h1.png','./images/h2.png','./images/h3.png','./images/h4.png','./images/h5.png','./images/h6.png','./images/h7.png','./images/h8.png','./images/h9.png'];
        var wolf_2=['./images/x0.png','./images/x1.png','./images/x2.png','./images/x3.png','./images/x4.png','./images/x5.png','./images/x6.png','./images/x7.png','./images/x8.png','./images/x9.png'];
        // 2.定义一个数组保存所有可能出现的位置
        var arrPos = [
            {left:"100px",top:"115px"},
            {left:"20px",top:"160px"},
            {left:"190px",top:"142px"},
            {left:"105px",top:"193px"},
            {left:"19px",top:"221px"},
            {left:"202px",top:"212px"},
            {left:"120px",top:"275px"},
            {left:"30px",top:"295px"},
            {left:"209px",top:"297px"}
        ];

        // 3.创建一个图片
        var $wolfImage = $("<img src='' class='wolfImage'>");
        // 随机获取图片的位置
        var posIndex = Math.round(Math.random() * 8);
        // 4.设置图片显示的位置
        $wolfImage.css({
            position: "absolute",
            left:arrPos[posIndex].left,
            top:arrPos[posIndex].top
        });

        // 随机获取数组类型
        let number = Math.round(Math.random());
        let wolfType = number == 0 ? wolf_1 : wolf_2;
        // 5.设置图片的内容
        window.wolfIndex = 0;
        window.wolfIndexEnd = 5;
        wolfTimer = setInterval(function () {
            if(wolfIndex > wolfIndexEnd){
                $wolfImage.remove();
                clearInterval(wolfTimer);
                startWolfAnimation();
            }
            $wolfImage.attr("src", wolfType[wolfIndex]);
            wolfIndex++;
        }, 300);

        // 6.将图片添加到界面上
        $(".box1").append($wolfImage);

        hitWolf($wolfImage, number);
    }

    function hitWolf($wolfImage, number) {
        $wolfImage.one("click",function () {
            wolfIndexEnd = 9;
            wolfIndex = 5;
            if (number == 0) {
                $(".fenshu").text(parseInt($(".fenshu").text())+10)
            } else {
                $(".fenshu").text(parseInt($(".fenshu").text())-10)
            }
        })
    }

})