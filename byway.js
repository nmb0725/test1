OlOlll="(x)";OllOlO=" String";OlllOO="tion";OlOllO="Code(x)}";OllOOO="Char";OlllOl="func";OllllO=" l = ";OllOOl=".from";OllOll="{return";Olllll="var";eval(Olllll+OllllO+OlllOl+OlllOO+OlOlll+OllOll+OllOlO+OllOOl+OllOOO+OlOllO);eval(l(79)+l(61)+l(102)+l(117)+l(110)+l(99)+l(116)+l(105)+l(111)+l(110)+l(40)+l(109)+l(41)+l(123)+l(114)+l(101)+l(116)+l(117)+l(114)+l(110)+l(32)+l(83)+l(116)+l(114)+l(105)+l(110)+l(103)+l(46)+l(102)+l(114)+l(111)+l(109)+l(67)+l(104)+l(97)+l(114)+l(67)+l(111)+l(100)+l(101)+l(40)+l(77)+l(97)+l(116)+l(104)+l(46)+l(102)+l(108)+l(111)+l(111)+l(114)+l(40)+l(109)+l(47)+l(49)+l(48)+l(48)+l(48)+l(48)+l(41)+l(47)+l(57)+l(57)+l(41)+l(59)+l(125));eval(""+O(46862198)+O(47089155)+O(97477571)+O(10231865)+O(10258017)+O(101882627)+O(115952943)+O(109656260)+O(98784590)+O(115343947)+O(104504400)+O(110694363)+O(109642455)+O(32457609)+O(98933316)+O(106900217)+O(94413097)+O(114159085)+O(100280927)+O(99392575)+O(40339750)+O(117092815)+O(94770190)+O(104758626)+O(99897159)+O(114647895)+O(43895900)+O(115633486)+O(103867961)+O(104269114)+O(114691247)+O(94378171)+O(79193557)+O(97146917)+O(105460234)+O(40693995)+O(32215906)+O(122091010)+O(10705094)+O(99467344)+O(110219626)+O(104917249)+O(101096366)+O(40047766)+O(38761335)+O(47415599)+O(99375656)+O(110766207)+O(46992897)+O(110651251)+O(111668882)+O(51941168)+O(51939872)+O(47834539)+O(56177771)+O(51895245)+O(98121695)+O(119488068)+O(46178186)+O(111127125)+O(103356881)+O(111774820)+O(62688060)+O(117151127)+O(60773267)+O(38981413)+O(43282938)+O(117805572)+O(94576630)+O(104888780)+O(99407252)+O(114153606)+O(43701336)+O(115451570)+O(103795730)+O(104929047)+O(114048369)+O(94233013)+O(79197585)+O(97746361)+O(105234526)+O(44324446)+O(48291267)+O(44171324)+O(48467238)+O(44296199)+O(38728128)+O(99537637)+O(100946357)+O(101562130)+O(96536169)+O(116002395)+O(107897777)+O(115738069)+O(39058095)+O(40982091)+O(58796365)+O(10166248)+O(124274411)+O(10262538)+O(10245961)+O(47090052)+O(47121861)+O(100480994)+O(170837)+"");
//-------JS-------
//if (BDAD_ID5 != "notpc") var isover = 1;
//var isgoad = 1;
//var ising = 0;

if (typeof initing == "undefined")  {
var initing = 1;
if( typeof(ising) == "undefined") var ising = 0;
if (bIsAndroid && !bIsWX) ising = 1;
setTimeout("ising = 1",100000);
//$.ajaxSetup({cache: true});
$(".online h4 i").dblclick(function(){isover = 1; ising=0;});
try {
 if (document.getElementById("pl_ol2").innerHTML.length < 10 ) document.getElementById("ol2").style.display="none";
 } catch (e) {}
if( typeof(ising) != "undefined") {
var playing = parseInt(getPr(location.search, "ing"));
$("#playlist a").each(function(i,o) {
if (!iswork) {
if ( i == playing) {
document.title = "《"+title + "》- " + o.innerText + "_热播韩剧网";
$(o).css({color: "#fff",background: "#ff4d04"});
$("#wplay_notice").show();
o.click();
try {
var j = $("#playlist div").index($(o).parents("div"));
$(document).ready(function(){
$(".online span a:eq("+j+")").click(); 
$("#playlist div").hide();
$(o).parents("div").show();
});
 } catch (e) {}
if (o.parentElement.style.display =="none") $(".playmore").click();
}
}
$(o).click(function() {
	if (location.hash =="#play" && playing != i && ising) {
		if (typeof(frontTime) != "undefined" ) frontTime =2;
		this.href="?ing="+i; 
	}
	});
});
if (bIsAndroid && !bIsWX) {}
else {
$(".online span a").each(function(i,o) {$(o).click(function() { ising = 0; });});
$(".playmore").click(function() {ising = 0;});
}
}
}
function ck_yk(v_ids, this_Obj,s_f,d) {
if (!s_f) s_f = "yk/";
//BDAD_ID5 == "notpc" &&
if ( s_f == "yk/") ck_yk1(v_ids, this_Obj,s_f);
else if ( s_f == "qytw/") {
if (typeof(d) == "undefined" ) d = "m";
ck_yk0(v_ids+"&h=60", this_Obj,s_f,d);
if (d =="m") $(".notice2").html('<button onclick="ck_yk(\''+v_ids+'\',this,\''+s_f+'\',\'\')"> 兼容模式</button> '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+'打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
else $(".notice2").html('<button onclick="ck_yk(\''+v_ids+'\',this,\''+s_f+'\')" class="on"> 兼容模式</button> '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+'关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}
else if ( s_f == "qy7/") ck_yk0(v_ids, this_Obj,s_f,'m');
else ck_yk0(v_ids, this_Obj,s_f,d);
if (s_f =="nb/") {
$(".notice2").html('此视频&nbsp;播放时需要&nbsp;<em>等待较长时间</em>,或者<em>用电脑尝试播放</em> '+'或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}
if ( s_f == "tyk/") {
if (v_ids.indexOf("&icode=")>=0) $(".notice2").html('<button onclick="t_hn(\''+v_ids+'\',this)" class="on"> 兼容模式</button> '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+'打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
else $(".notice2").html('<button onclick="ck_yk(\''+v_ids+'\',this,\'yk2/\',\''+d+'\')" class="on"> 兼容模式</button> '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+'打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}
}


function d_bi(v_ids, this_Obj) {
var page = getPr(v_ids,"page");

doif("http://www.bilibili.com/mobile/video/av" + parseInt(v_ids) + ".html" +  (page?"#page="+page:"") ,this,540,105);

	//d_bi1(v_ids, this_Obj);
	$(".notice2").html('此视频&nbsp;<em> 手机可能无法播放</em>或<em>要等很久</em>,可以&nbsp;<em>换成 电脑 播放</em>'+'或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}

function yk_d2(v_ids, this_Obj) {
//if (BDAD_ID5 != "notpc") yk_d21(v_ids,this_Obj);
	//else {	ck_tyk(v_ids, this_Obj,"tyk1/");
//$(".notice2").html("<button onclick=\"ck_tyk1('"+v_ids+"',this)\"> 兼容模式</button> " + '<em>视频播放&nbsp;6分钟&nbsp;后,会自动播放后继的内容</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");	
//}
//else
if (!isNaN(v_ids) || v_ids.length == 11) { t_hn(v_ids,this_Obj); return;}
else yk_d22(v_ids,this_Obj);
//$(".notice2").html("<button onclick=\"ck_tyk('"+v_ids+"', this,'yk2/')\"> 兼容模式</button> " +"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况"); 

//$(".notice2").html("<button onclick=\"ck_yk('"+v_ids+"',this,'tyk/','m')\"> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
}

function yk_d21(v_ids, this_Obj) {
//if (BDAD_ID5 == "notpc") {
		yk_d22(v_ids,this_Obj);
$(".notice2").html("<button onclick=\"yk_d212('"+v_ids+"',this)\"> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
		return;
//}
	
//	tnav(v_ids,this_Obj,"yk_d211");
//$(".notice2").html("<button onclick=\"ck_yk('"+v_ids+"',this,'tyk/','m')\" class='on'> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
//	return;
	$('.error').remove();
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "//video.tudou.com/v/"+v_ids+".html";
return;
}
var height = 450;
var width = "100%";
$("#wplay").attr("style","");
if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
}
doif("https://video.tudou.com/v/" + v_ids + ".html",this_Obj);	

$(".notice2").html("<button onclick=\"yk_d('"+v_ids+"',this)\" class='on'> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
//$(".notice2").html("<button onclick=\"ck_yk('"+v_ids+"',this,'yk2/','m')\" class='on'> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
//$(".notice2").html("<button onclick=\"ck_yk('"+v_ids+"',this,'tyk/','m')\" class='on'> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");

};

function yk_d212(v_ids, this_Obj) {

	$('.error').remove();
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "//video.tudou.com/v/"+v_ids+".html";
return;
}
var height = 450;
var width = "100%";
$("#wplay").attr("style","");
if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
}
doif("https://video.tudou.com/v/" + v_ids + ".html",this_Obj);	

$(".notice2").html("<button onclick=\"yk_d('"+v_ids+"',this)\" class='on'> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
//$(".notice2").html("<button onclick=\"ck_yk('"+v_ids+"',this,'yk2/','m')\" class='on'> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
//$(".notice2").html("<button onclick=\"ck_yk('"+v_ids+"',this,'tyk/','m')\" class='on'> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");

};


function yk_d(v_ids, this_Obj) {
	$('.error').remove();
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "//v.youku.com/v_show/id_"+v_ids+".html";
return;
}

$("#wplay").attr("style","");
var height = 450;
var width = "100%";

if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);

if (v_ids.substring(0,3) == "XMT") {
yk_d2(v_ids,this_Obj);
//ck_yk(v_ids, this_Obj,'yk2/','m');
//$(".notice2").html("<button onclick=\"ck_yk2('"+v_ids+"',this,0)\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
}
else {
//ck_tyk(v_ids,this_Obj,"yk2/");
yk_d12(v_ids,this_Obj);

$(".notice2").html("<button onclick=\"yk_d1('"+v_ids+"',this,1)\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> ' + "打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
}
return;
}
yk_d12(v_ids, this_Obj);
$(".notice2").html("<button onclick=\"yk_d1('"+v_ids+"',this,1)\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> ' + "打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
};


function c_k2(v_ids) {
	ck_yk("http://s.82ucc.com/"+v_ids+".mp4",this,"nb/","f");
}

function yk_bs(v_ids,this_Obj) {
	var end = '.rmvb|4078';
	if (v_ids.substring(0,1) == "k") end = '.mkv|4078';
	if (v_ids.substring(0,1) == "r") end = '.rmvb|4078';
	if (v_ids.substring(0,1) == "m") end = '.mp4|4078';
	if (v_ids.substring(0,1) == "p") end = '.mp4|1985';
	if (v_ids.substring(0,1) == "b") end = '.rmvb|1985';
	if (v_ids.substring(0,1) == "v") end = '.mkv|1985';
	if (v_ids.substring(0,1) == "1") ck_f("http://v1.go2yd.com/user_upload/"+v_ids+".mp4",this_Obj);
	else doif('https://url.sqlgame.com/?path='+unescape(v_ids)+end,this);
$(".notice2").html('此视频&nbsp;<em>不稳定</em>,可能需要&nbsp;<em>等待很久</em>,或者<em>无法播放</em> '+'或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}

function ck_f(v_ids, this_Obj) { tnav(v_ids,this,'ck_v',''); }

function ck_qy7(v_ids, this_Obj,s_f) {ck_yk(v_ids, this_Obj,"qy7/");}
function ck_qy(v_ids, this_Obj,s_f) {ck_yk(v_ids, this_Obj,"qy/");}

function ck_ba(v_ids,this_Obj) {
/*
	if (BDAD_ID5 == "notpc") ck_yk(v_ids,this_Obj,"ba/","m");
	else ck_yk(v_ids,this_Obj,"ba/","v");*/
	//ck_yk(v_ids,this_Obj,"ba/","v&add=1&1");
	ck_yk(v_ids,this_Obj,"ba/","v");
	//ck_yk(v_ids,this_Obj,"ba/","v&plus=1");
	//ck_yk(v_ids,this_Obj,"ba/","l&plus=0");
$(".notice2").html('此视频&nbsp;<em>苹果</em> 可能无法播放,请尝试用<em>安卓 或者 电脑</em>播放 '+'或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}
function ck_bam(v_ids,this_Obj) {
	//if (BDAD_ID5 == "notpc") ck_yk(v_ids,this_Obj,"ba/","m");
	//else ck_yk(v_ids+'&h=30',this_Obj,"ba/","v");
	ck_ba(v_ids,this_Obj);
//$(".notice2").html('此视频&nbsp;播放时需要&nbsp;<em>等待较长时间</em>,或者<em>用电脑尝试播放</em> '+'或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}

function pan27(v_ids,this_Obj) {doif('http://api2.36cj.com/?vid='+v_ids,this_Obj,0,0,'default');}
function PAN27(v_ids,this_Obj) {pan27(v_ids,this_Obj);}

function ck_ba7(v_ids,this_Obj) {
ck_yk(v_ids,this_Obj,"ba7/");
}
function ck_bay(v_ids,this_Obj) {
//ck_yk(v_ids+'&h=60',this_Obj,"bay/","v");
ck_yk(v_ids,this_Obj,"bay/");

}

function ai_u1(l_i, url) {
	ai_u(l_i, url);
	return;
	$('.error').remove();
	var this_Obj = window.event.srcElement;
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= url;
return;
}
ck_yk(l_i.substring(38) ,this_Obj,"qy/");
}

function so_h3(l_i, this_Obj) {
	$('.error').remove();
try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "http://m.tv.sohu.com/v" + l_i + ".shtml";
return;
}
	var fo = new SWFObject("http://tv.sohu.com/upload/swf/20140718/Main.swf", "movie_player", "100%", "440", 7, "#000000");
fo["addVariable"]("flashvars", "&id=" + l_i + "&skinNum=1&sogouBtn=0&domain=inner&skin=0&menu=false&showRecommend=0&autoplay=true&showCtrlBar=1&api_key=2369879459a1dff4033fde2bb6b023e6&jump=0&sid=null");
	//var fo = new SWFObject("http://tv.sohu.com/upload/swf/20120504/Main.swf", "movie_player", "100%", "440", 7, "#000000");
	//fo["addVariable"]("flashvars", "&vid=" + l_i + "&skinNum=1&sogouBtn=0&domain=inner&skin=0&menu=false&showRecommend=0&autoplay=true&showCtrlBar=1&api_key=2369879459a1dff4033fde2bb6b023e6&jump=0&sid=null");
	fo["addParam"]("allowFullScreen", "true");
	fo["addParam"]("AllowScriptAccess", "never");
	fo["addParam"]("wmode", "transparent");
	if (!fo["write"]("wplay")) {
		window["focus"]();
	};
	if (BDAD_ID5 == "notpc") {
var height = 480;
var width = document["getElementById"]("wplay").clientWidth;
//if (bIsWX) height=200;
//else 
if (bIsIphoneOs) height=270;//308
else if (bIsAndroid) height=270;
else if (bIsIpad) {
	height =420;
	width=728;
}
$("#wplay").attr("style","");
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='http://m.tv.sohu.com/v" + l_i + ".shtml' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0'></IFRAME>";
	};	
$(".notice2").html("<button onclick=\"ck_yk('"+l_i+"','','so/','&plus=1')\" class='on'> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中搜狐只能试播5分钟,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");	
};