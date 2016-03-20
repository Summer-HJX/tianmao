window.onload = function() {


//选项卡效果
  var pinpaione = $(".pinpaione");
  var pinpaicenter = $(".pinpaicenter");
  for (var i = 0; i < pinpaione.length; i++) {
    pinpaione[i].index = i;
    pinpaione[i].onclick = function() {
      for (var j = 0; j < pinpaione.length; j++) {
        pinpaicenter[j].style.display = "none";
        pinpaione[j].style.textDecoration = "none";
        pinpaione[j].style.fontWeight = "normal";
      }
      pinpaicenter[this.index].style.display = "block";
      this.style.textDecoration = "underline";
      this.style.fontWeight = "bold";
    }

  }



/*//热门品牌
    var pinpaione=$(".pinpaione");
    var btn=$(".btn")[0];
    var cons=$(".pinpaicenter");
    alert(cons);
    //定义存放的图片的数组
    var onearr=[];
    var twoarr=[];
    var threearr=[];
    var fourarr=[];
       //放图片
     for(var i=0; i<27;i++){//共有多少张图片
       onearr.push("image/pinpai/mingpai"+i+".jpg");//图片的地址
       twoarr.push("image/pinpai/mingpai"+i+".jpg");//图片的地址
       threearr.push("image/pinpai/mingpai"+i+".jpg");//图片的地址
       fourarr.push("image/pinpai/mingpai"+i+".jpg");//图片的地址
     }

     function random(arr){
      var newarr=[];
        //从27张图片里随机取24张
           for(var i=0;i<24;i++){
            newarr.push(arr[parseInt(Math.random()*27)]);
           }
           return newarr;
     }
      
    var tuarr=[onearr,twoarr,threearr,fourarr];
         function show(num){
          var imgarr=random(tuarr[num]);
        for(var i=0; i<imgarr.length;i++){
          //alert(1)
          var div=document.createElement("div");
          div.style.cssText="width:131px;height:79px;float:left;background:#fff;border:1px solid #ccc;text-align:center;line-height:79px;position:relative";
          div.className="divs";
          var img=document.createElement("img");
          img.src=imgarr[i];
          img.style.cssText="width:90px;height:45px;vertical-align:middle";
          // alert(img);
          var xinimg=document.createElement("img");
          xinimg.src="image/pinpai/guanzhupinpai.jpg";
          xinimg.style.cssText="width:13px;height:11px;display:none;position:absolute;right:5px;top:5px";
          xinimg.className="taoxin";
          div.appendChild(xinimg);
          div.appendChild(img);
          cons[num].appendChild(div);
        }

              var divs=$(".divs");
               // alert(divs.length);
              var taoxin=$(".taoxin");
              for(var i=0; i<divs.length;i++){
                divs[i].index=i;
                hover(divs[i],function(){
                  taoxin[this.index].style.display="block";
                },function(){
                  taoxin[this.index].style.display="none";
                })
             }


       }


        show(0);
    var index=0;
    for(var i=0;i<pinpaione.length;i++){
      pinpaione[i].index=i;
      pinpaione[i].flag=true;//开
      pinpaione[0].flag=false;
      pinpaione[i].onclick=function(){
        index=this.index;//单击谁保存谁
        for(var j=0;j<cons.length;j++){
          cons[j].style.zIndex=1;
          pinpaione[j].style.fontWeight="normal";
          pinpaione[j].style.textDecoration="none";
        }
        cons[this.index].style.zIndex=5;//现在单击的
        pinpaione[this.index].style.fontWeight="bold";
        pinpaione[this.index].style.textDecoration="underline";
        if(this.flag){
          show(this.index);
          this.flag=false;//关
        }
      }
    }
    btn.onclick=function(){
    cons[index].innerHTML="";
    show(index);
    }*/















//焦点事件
  var inners = $(".inners")[0];
  var inner = $(".inner")[0];
  inner.onfocus = function() {
    if (inner.value == "施华洛世奇华丽入驻，璀璨好礼疯狂送") {
      inner.value = "";
    }
  }
  inners.onfocus = function() {
    if (inners.value == "阿里88汽车节，车品好货送不停") {
      inners.value = "";
    }
  }
  inner.onblur = function() {
    if (inner.value == "") {
      inner.value = "施华洛世奇华丽入驻，璀璨好礼疯狂送";
    }
  }
  inners.onblur = function() {
    if (inners.value == "") {
      inners.value = "阿里88汽车节，车品好货送不停";
    }
  }


//桃心效果
  var items = $(".items");
  var taoxin = $(".taoxin");
  for (var i = 0; i < items.length; i++) {
    items[i].index = i;
    items[i].onmouseover = function() {
      taoxin[this.index].style.display = "block";
    }
    items[i].onmouseout = function() {
      taoxin[this.index].style.display = "none";
    }
  }


//banner轮播图
  var middleboxs = $(".middleboxs");
  var button = $(".button");
  var num = 1;
  var bannerbox=$(".bannerbox")[0];
  var bgarr=["#5c41ac","#005ba1","#dadada","#0979dd","#fdb7dc","#64cca9"];


  function move() {
    if (num == 6) {
      num = 0;
    }
    for (var i = 0; i < middleboxs.length; i++) {
      middleboxs[i].style.zIndex = 2;
      button[i].style.background = "black";
    }
    middleboxs[num].style.zIndex = 3;
    button[num].style.background = "red";
    bannerbox.style.background=bgarr[num];
    num++;
  }
  var t = setInterval(move, 2000);
  for (var i = 0; i < button.length; i++) {
    button[i].index = i;
    button[i].onmouseover = function() {
      clearInterval(t);
      for (var j = 0; j < middleboxs.length; j++) {
        middleboxs[j].style.zIndex = 2;
        button[j].style.background = "black";
        bannerbox.style.background=bgarr[j];
      }
      middleboxs[this.index].style.zIndex = 3;
      button[this.index].style.background = "red";
      bannerbox.style.background=bgarr[this.index];
    }

    button[i].onmouseout = function() {
      t = setInterval(move, 2000);
      num = this.index + 1;
    }
  }


//楼层跳转
  var search = $(".search")[0];
  var flag = true;
  var flag1 = true;
  var floors = $(".floor");

  var jump = $(".jump")[0];
  var btn = $("li", jump);

  for (var i = 0; i < btn.length; i++) {
    btn[i].index = i;
    btn[i].onclick = function() {
      var obj = document.documentElement.scrollTop ? document.documentElement : document.body;
      animate(obj, {
        scrollTop: floors[this.index].t-44
      });
    }
  }

  window.onscroll = function() {
    var scrollT = getScrollT();
    if (scrollT >= 700) {
      if (flag) {
        animate(search, {
          top: 0
        }, 500);
        flag = false;
        flag1 = true;
      }
    } else {
      if (flag1) {
        animate(search, {
          top: -50
        });
        flag1 = false;
        flag = true;
      }
    }

    if (scrollT >= 500) {
      jump.style.display = "block";
    } else {
      jump.style.display = "none";
    }

    for (var i = 0; i < floors.length; i++) {
      floors[i].t = floors[i].offsetTop;
      if (floors[i].t-44 <= scrollT) {
        for (var j = 0; j < btn.length; j++) {
          btn[j].style.background = "white";
        }
        btn[i].style.background = "purple";
      }
    }
  }


//侧滑轮播图
      function aa(a){
          var t=setInterval(moveleft,2000);
          function moveleft()
        {
             var father=$(".imgs")[a];
             var first=getFirst(father);
             animate(father,{left:-400},600,Tween.Linear,function()
              {father.appendChild(first);
              father.style.left=0+"px";
          });   
        }
        function moveright()
        {
             var father=$(".imgs")[a];
             var last=getLast(father);
             var first=getFirst(father);
             father.style.left=-400+"px";
             father.insertBefore(last,first);
             animate(father,{left:400},600,Tween.Linear);
             animate(father,{left:0},600,Tween.Linear);
         }
         var left=$(".left")[a];
         var right=$(".right")[a];
         left.onmouseover=right.onmouseover=function()
         {
             clearInterval(t);
         }
         left.onmouseout=right.onmouseout=function()
         {
            t=setInterval(moveleft,2000);
         }
             left.onclick=function()
             {
               moveleft();
             }
             right.onclick=function()
             {
                moveright();
             }
      }
aa(0);
aa(1);
aa(2);
aa(3);
aa(4);
aa(5);


//图片加载
/*var floorb=$(".floor-right");
      var ch=document.documentElement.clientHeight;
      window.onscroll=function(){
        var scrollT=getScrollT();
        // document.title=scrollT;
        for(var i=0;i<floorb.length;i++){
        if(floorb[i].offsetTop<scrollT+ch){
                var imgs=$("img",floorb[i]);
                for(var j=0;j<imgs.length;j++){
                  imgs[j].src=imgs[j].getAttribute("aa");
                }
           }
        }
      }*/


//图片移动 
  function bb(c) {
    var movels = $(".small")[c];
    var btnimgs = $("img", movels);
    for (var i = 0; i < btnimgs.length; i++) {
      btnimgs[i].index = i;
      btnimgs[i].onmouseover = function() {
        btnimgs[this.index].style.cssText = "margin-left:-2px";
      }
      btnimgs[i].onmouseout = function() {
        btnimgs[this.index].style.cssText = "margin-left:0px";
      }
    }
}
bb(0);
bb(1);
bb(2);
bb(3);
bb(4);
bb(5);
bb(6);
bb(7);
bb(8);
bb(9);
bb(10);
bb(11);


//右侧定位
var tequan=$(".tequan");
var text=$(".tequan-text");
for(var i=0;i<tequan.length;i++){
  tequan[i].index=i;
   tequan[i].onmouseover=function(){
      animate(text[this.index],{opacity:1,left:-90},600,Tween.Linear)
   };
   tequan[i].onmouseout=function(){
       animate(text[this.index],{opacity:0,left:-130},600,Tween.Linear)
   };
}


// 导航的下拉框
  var yiji=$(".yiji");
  var erji=$(".erji");
  for(var i=0;i<yiji.length;i++){
    yiji[i].index=i;
    hover(yiji[i],function(){
    var sons=$("li",erji[this.index]);
    var h=sons[0].offsetHeight;
    animate(erji[this.index],{height:h*sons.length},400,Tween.Linear);
    },function(){
            animate(erji[this.index],{height:0},400,Tween.Linear);})
  }




//左侧商品分类
 function CC(c) {
    var movels = $(".floor-right")[c];
    var btnimgs = $("img", movels);
    for (var i = 0; i < btnimgs.length; i++) {
      btnimgs[i].index = i;
      btnimgs[i].onmouseover = function() {
        btnimgs[this.index].style.cssText = "margin-left:-2px";
      }
      btnimgs[i].onmouseout = function() {
        btnimgs[this.index].style.cssText = "margin-left:0px";
      }
    }
}
CC(0);
CC(1);
CC(2);
CC(3);
CC(4);
CC(5);
CC(6);
CC(7);
CC(8);
CC(9);
CC(10);
CC(11);


//左侧商品服务分类
var small=$(".small");
    var list=$(".list-2");
    for(var i=0;i<small.length;i++){
      small[i].index=i;
      hover(small[i],function(){
        list[this.index].style.display="block";
        list[this.index].style.left=190+"px";
        animate(list[this.index],{left:190},1000)
      },function(){
        list[this.index].style.display="none";
        list[this.index].style.left=0+"px";
      })
    }













}