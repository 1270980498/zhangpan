var i=0;
var timer;
$(function(){
    
    $('.banner').mouseleave(function(){
    	$('.banner .btn').hide();
    });
    $('.banner').mouseover(function(){
    	$('.banner .btn').show();
    })



	$('.ig').eq(0).show().siblings('.ig').hide();
	showTime();
	$('.btn1').click(function(){
		clearInterval(timer);
		if(i==0){
			i=4
		};
		i--;
		show();
		showTime();
	});
	$('.btn2').click(function(){
		clearInterval(timer);
		if(i==3){
			i=-1;
		};
		i++;
		show()
		showTime();
	});
	function showTime(){
		timer=setInterval(function(){
			show();
			i++;
			if(i==4){
				i=0;
			}
		},3000);
	}
	function show(){
		$('.ig').eq(i).fadeIn(300).siblings('.ig').fadeOut(300);
	}

})


function show(){
var iWidth = document.documentElement.clientWidth;//当前屏幕可见区域宽度
var iHeight = document.documentElement.clientHeight;//当前屏幕可见区域的高度
var bgObj = document.createElement("div");//在对象中创建一个对象
bgObj.setAttribute("id","bgbox");//给新对象 创建ID和值
bgObj.style.width = iWidth+"px";
bgObj.style.height =Math.max(document.body.clientHeight, iHeight)+"px";
document.body.appendChild(bgObj);//把 新的div   ID为bgogj添加到body后面
var oShow = document.getElementById('show');
oShow.style.display = 'block';
oShow.style.left = (iWidth-302)/2.3+"px";
oShow.style.top = (iHeight-302)/0.6+"px";
function oClose(){
oShow.style.display = 'none';
document.body.removeChild(bgObj);
}
var oClosebtn = document.createElement("span");
oClosebtn.innerHTML = "×";
oShow.appendChild(oClosebtn);
oClosebtn.onclick = oClose;
bgObj.onclick = oClose;
}