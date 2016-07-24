/**
 * Created by Administrator on 2016/6/21.
 */

var viewHeight = document.documentElement.clientHeight || document.body.clientHeight;
var viewWidth = document.documentElement.clientWidth || document.body.clientWidth;

function showCity(ele) {
    var cont = document.getElementById(ele);
    var showCity = cont.getElementsByClassName('show_city')[0];
    var tags = showCity.getElementsByClassName('tags')[0].getElementsByTagName('li');
    var tagContent = showCity.getElementsByClassName('tagContent');
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        tag.index = i;
        tag.onclick = function (e) {
            for (var j = 0; j < tags.length; j++) {
                tags[j].className = '';
                tagContent[j].className = 'tagContent'
            }
            tags[this.index].className = 'liTag';
            tagContent[this.index].className = 'tagContent selectTag';
        }
    }
}
function eleMouse(content, ele) {
    var newEle = document.getElementById(content);
    var cur = newEle.getElementsByClassName(ele)[0];
    var show = document.getElementById('show_city');
    cur.onmousemove = function (e) {
        this.className = ele + ' title_c';
        show.className = 'show_city selectBlock';
    };
    cur.onmouseout = function (e) {
        this.className = '' + ele;
        show.className = 'show_city';
    }
}
(function () {
    var s_input = document.getElementById('s_input');
    var search_hot = document.getElementById('search_hot');
    var search_def_val = document.getElementById('search_def_val');
    s_input.onkeyup/*.onfocus*/ = function (e) {
        //s_input.defaultValue = s_input.value;
        //s_input.value = '';
        if(s_input.value==''){
            search_hot.style.display = 'block';
            search_def_val.style.display = 'block';
            return;
        }
        search_hot.style.display = 'none';
        search_def_val.style.display = 'none';
    };
    s_input.onblur = function (e) {
        //s_input.value = s_input.defaultValue;
        search_hot.style.display = 'block';
        if(s_input.value==''){
            search_def_val.style.display = 'block';
        }
    };


    var navUl = utils.getElementsByClass('navUl')[0];
    var navLis = utils.children(navUl, 'li');
    for (var i = 0; i < navLis.length; i++) {
        var lis = navLis[i];
        lis.index = i;
        lis.onmouseover = function (e) {
            var navUl_nav = utils.getElementsByClass('navUl_nav')[0];
            var showDiv = utils.children(this, 'div')[0];
            if (!showDiv) {
                return;
            }
            navUl_nav.style.display = 'block';
            showDiv.style.display = 'block';
        };
        lis.onmouseout = function (e) {
            var navUl_nav = utils.getElementsByClass('navUl_nav')[0];
            var showDiv = utils.children(this, 'div')[0];
            if (!showDiv) {
                return;
            }
            navUl_nav.style.display = 'none';
            showDiv.style.display = 'none';
        };
    }


})();
function showNav() {
    var cont = document.getElementById(ele);
    var showCity = cont.getElementsByClassName('show_city')[0];
    var tags = showCity.getElementsByClassName('tags')[0].getElementsByTagName('li');
    var tagContent = showCity.getElementsByClassName('tagContent');
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        tag.index = i;
        tag.onclick = function (e) {
            for (var j = 0; j < tags.length; j++) {
                tags[j].className = '';
                tagContent[j].className = 'tagContent'
            }
            tags[this.index].className = 'liTag';
            tagContent[this.index].className = 'tagContent selectTag';
        }
    }
}

$(document).ready(function () {
    /*-------------------------------------------------------轮播图*/
    var actli_num = $('.activity_tit li').length;  /*actli*/
    var i_mun = 0;
    var timer_banner = null;
    $('.banner li:gt(0)').hide();
    $('.activity_tit li').click(function () {
        $(this).addClass('activity_tit_one').siblings('li').removeClass('activity_tit_one');
        var i_mun1 = $('.activity_tit li').index(this);
        $('.banner li').eq(i_mun1).fadeIn('slow').siblings('li').fadeOut('slow');
        i_mun = i_mun1;
    });
    $('.slide_icon_left').click(function () {
        if (i_mun == 0) {
            i_mun = actli_num
        }
        $('.banner li').eq(i_mun - 1).stop().fadeIn('slow').siblings('li').fadeOut('slow');
        $('.activity_tit li').eq(i_mun - 1).stop().addClass('activity_tit_one').siblings('li').removeClass('activity_tit_one');
        i_mun--;
    });
    $('.slide_icon_right').click(function () {
        move_banner()
    });
    $('.big_link').mouseover(function () {
        $('.slide_icon_left').show();
        $('.slide_icon_right').show();
    });
    $('.big_link').mouseout(function () {
        $('.slide_icon_left').hide();
        $('.slide_icon_right').hide();
    });
    function bannerMoveks() {
        timer_banner = setInterval(function () {
            move_banner()
        }, 4000)
    };
    bannerMoveks();
    $('.big_link').mouseover(function () {
        clearInterval(timer_banner);
    });
    $('.big_link').mouseout(function () {
        bannerMoveks();
    });
    function move_banner() {
        if (i_mun == actli_num - 1) {
            i_mun = -1
        }
        $('.banner li').eq(i_mun + 1).stop().fadeIn('slow').siblings('li').fadeOut('slow');
        $('.activity_tit li').eq(i_mun + 1).stop().addClass('activity_tit_one').siblings('li').removeClass('activity_tit_one');
        i_mun++
    }
    /*--------------------------------------------------手风琴*/
    $('.activity_item li').mouseover(function (e) {
        $(this).find('img').css({'left': '-97px'});
        $(this).css({'width': '122px','zIndex':'10'});
        $(this).siblings('li').css({'width': '97px'});
        $(this).siblings('li').find('img').css({'left': '0px'});
    });
    $('#paihang').mouseover(function(e){
        $('.ver_thr').show();
        $('#thr_1').show();
    }).mouseout(function(e){
        $('.ver_thr').hide();
        $('#thr_1').hide();
    });
    $('#zhoubian').mouseover(function(e){
        $('.ver_thr').show();
        $('#thr_2').show();
    }).mouseout(function(e){
        $('.ver_thr').hide();
        $('#thr_2').hide();
    });



});