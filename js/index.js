window.onload=function(){
    //banner开始
    let n=0;
    let flag=true;
    let bannerImg=document.querySelectorAll('.banna .banna-img a');
    let bannerbox=document.querySelector('.banna');
    let left=document.querySelector('.banna-xiaoyu');
    let right=document.querySelector('.banna-dayu');
    let circles=document.querySelectorAll('.banna-radius li');
    function move() {
        n++;
        if(n>=bannerImg.length){
            n=0;
        }
        bannerImg.forEach(function(val,ind) {
            val.classList.remove('active');
            circles[ind].classList.remove('active');
        });
        bannerImg[n].classList.add('active');
        circles[n].classList.add('active');
    }
    let t=setInterval(move,2000);
    bannerbox.onmouseenter=function(){
        clearInterval(t);
    };
    bannerbox.onmouseleave=function(){
        t=setInterval(move,2000);
    };
    right.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        move();
    };
    left.onclick=function(){
        console.log(1)
        if(!flag){
            return;
        }
        flag=false;
        n--;
        if(n<0){
            n=bannerImg.length-1;
        }
        bannerImg.forEach(function(val,ind) {
            val.classList.remove('active');
            circles[ind].classList.remove('active');
        });
        bannerImg[n].classList.add('active');
        circles[n].classList.add('active');
    };
    circles.forEach(function(value,index) {
        value.onclick=function () {
            circles.forEach(function(val,ind) {
                val.classList.remove('active');
                bannerImg[ind].classList.remove('active');
            });
            this.classList.add('active');
            bannerImg[index].classList.add('active');
            n=index;
        }
    });
    bannerImg.forEach(function(value) {
        value.addEventListener('transitionend',function () {
            flag=true;
        })
    });

    navleft=document.querySelectorAll('.banna-left li');
    banner_list=document.querySelectorAll('.banner_list li');
    navleft.forEach(function(value,index) {
        value.onmouseover=function() {
            navleft.forEach(function(a,b) {
                banner_list[b].classList.remove('active');
                a.classList.remove('active');
            });
            this.classList.add('active');
            banner_list[index].classList.add('active');
        };
        value.onmouseout=function() {
            navleft.forEach(function(a,b) {
                banner_list[b].classList.remove('active');
                a.classList.remove('active');
            })
        };
        banner_list[index].onmouseover=function() {
            banner_list[index].classList.add('active');
            value.classList.add('active');
        };
        banner_list[index].onmouseout=function() {
            banner_list[index].classList.remove('active');
            value.classList.remove('active');
        }
    });

    //banner结束

    //家电开始
    jd_a2=document.querySelectorAll('.jda a');
    jd_content=document.querySelectorAll('.jdb .jd-right');
    function fun(c,d){
        c.forEach(function(value,index) {
            value.onmouseover=function() {
                c.forEach(function(a,b) {
                    a.classList.remove('active');
                    d[b].classList.remove('active');
                });
                value.classList.add('active');
                d[index].classList.add('active');
            }
        });
    }
    fun(jd_a2,jd_content);
    //家电结束

    //智能开始
    zn_a2=document.querySelectorAll('.zna a');
    zn_content=document.querySelectorAll('.znb .jd-right');
    fun(zn_a2,zn_content);
    //智能结束

    //搭配开始
    dp_a2=document.querySelectorAll('.dpa a');
    dp_content=document.querySelectorAll('.dpb .jd-right');
    fun(dp_a2,dp_content);
    //搭配结束
    //配件开始
    pj_a2=document.querySelectorAll('.pja a');
    pj_content=document.querySelectorAll('.pjb .jd-right');
    fun(pj_a2,pj_content);
    //配件结束
    //周边开始
    zb_a2=document.querySelectorAll('.zba a');
    zb_content=document.querySelectorAll('.zbb .jd-right');
    fun(zb_a2,zb_content);
    //周边结束

    //内容开始



    //内容结束
}
