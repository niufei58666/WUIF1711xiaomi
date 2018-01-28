window.onload=function(){
    //banner开始
    navleft=document.querySelectorAll('.banna-left li');
    console.log(navleft);
    banner_list=document.querySelectorAll('.banner_list li');

    navleft.forEach(function(value,index) {
        value.onmouseover=function() {
            navleft.forEach(function(a,b) {
                banner_list[b].classList.remove('active');
            });
            banner_list[index].classList.add('active');
        };
        value.onmouseout=function() {
            navleft.forEach(function(a,b) {
                banner_list[b].classList.remove('active');
            })
        }
        banner_list[index].onmouseover=function() {
            banner_list[index].classList.add('active');
        };
        banner_list[index].onmouseout=function() {
            banner_list[index].classList.remove('active');
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


}
