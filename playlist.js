function submit_err() {
var sUserAgent = navigator.userAgent.toLowerCase();
var message = $("#message").val();
if (message == "" || message.substr(0,3) == "请简单") {
alert("请简单描述问题，如第几集放不出，什么提示等。并留下您的联系方式，如qq,email,电话。");
return false;
}
var message = message +" ms:"+ sUserAgent;
var url ="http://api.duoshuo.com/posts/create.json";
$.ajax({
  type: 'POST',
  url: url,
  data: {
  short_name: "y3600",
  secret:"0a3bec37fa2607bb90464f9cff7fc6dd",
  thread_key:"notice.movie",
  message:message,
author_name:title,
author_email: classid+"-" +id +'@y3600.com',
author_url:location.href
  },
complete: function(msg) { alert("提交成功"); },
});
}

function showPlayerList(content) {
var online = "";
var playlist = "";
 for(var i=0;i<content.length && i <7;i++)
 {
    var obj = content[i];

	 online += "<a id=\"M20\" name=\"M20\" onmouseover=\"MM("+i+",'M20','B20','');\" class=\"" +  (i==0?"On":"Off")+  "\"><i style=\"background-image:url("+ obj["site_info"]["logo"]+ ")\"></i>"  + obj["site_info"]["name"] + "</a>";

		playlist += "<ul id='B20' name='B20'" + (i>0 ? " style='display:none;'" :"")+">";
	 for(var j=0;j<obj["episodes"].length;j++)
	 {		
	 var obj1 = obj["episodes"][j];
		playlist += '<li><a target="_blank" href="'+ obj1["url"] +'" title="'+ obj1["single_title"] +'">'+obj1["episode"]+'集</a>'+(j+1 == obj["episodes"].length ?'<div class="new">新</div>':"") +'</li>';

	}
	playlist += "</ul>";
 }
 $(".online span").html(online);
 $(".playlist").html(playlist);
}

function showSeasonList(){
season = new Array();
end = new Array();
$(".season a").each(function(i,o) {
re = /第?(\d{1,3})-?.+/i
re = o.innerText.match(re);
if (location.href == o.href) o.className = "On";
if (re && parseInt(re[1]) >0 ) season[re[1]] = o.outerHTML;
else end.push(o.outerHTML); 
});
$(".season").html(season.join("") + end.join("") + '<div class="clear"></div>');
}

var modclose = 0;

function initPlayer() {
var obji =-1;
var obj =0;

try {
 obj = $.parseJSON($.cookie('playnow'+id));
obji = obj.no;
}
catch (e) {
//$.cookie('playnow'+id, '',{ expires: 3 ,path: '/'});
}

if (obji>=0) {
	var tpobj = $("#playlist a:eq("+obji+")");
	if (tpobj && tpobj.html()) {
tpobj.parent().css({ border:"1px solid #ff4e00"  });
//$("#playlist div").hide();
//tpobj.parents("div").show();
var tpid = tpobj.parents("div").attr("id");
if (tpid) tpid = parseInt(tpid.substr(5,2));
//if (tpid) {
//	$(".online span a").removeClass("On");
//	$("#ol"+ tpid).addClass("On");
//}
}

}

$("#playlist ul").each(function(i,o){ 
 if (o.parentElement.id == "pl_wx") return;
if ($("li",o).length > 21) {
	$(".playmore").show();
	$("#preview").hide();
	}
$("li",o).each(function(i){ 
if (i >20) $(this).hide();
});
});


$(".playmore").click(function() {$("#playlist li").show(); $(this).hide();$("#preview").show();});
if ($(".playlist a").length == 0) $(".coming").show();

$("#playlist a").each(function(i){
$(this).click(function() {
$("html,body").animate({scrollTop: $("#wplay").offset().top}, 1000)
$("#playlist a").css({ color: "", background: "" });
$(this).css({ color: "#fff", background: "#ff4d04" });
$("#wplay_notice").show();
$.cookie('playnow'+id, '{"no":"'+i+'","title":"'+title+'","url":"'+this.href+'","pic":"'+titlepic+'","ftitle":"'+ftitle+'","id":"'+id+'","text":"' + this.innerText+  '","classid":"'+classid+'"}', { expires: 3 , path: '/'});
playtable = $.cookie('playtable');
playtable = (playtable?playtable.split(","):[]);
playtable.push(id)
playtable = $.unique(playtable);
$.cookie('playtable', playtable.join(",") , { expires: 3 , path: '/'});
});
});

$("#preview a").each(function(i){
$(this).click(function() {
$("html,body").animate({scrollTop: $("#wplay").offset().top}, 1000)
$("#preview a").css({ color: "", background: "" });
$(this).css({ color: "#fff", background: "#ff4d04" });
$("#wplay_notice").show();
});
});

if ($(".online span a").length>3) $(".online span").addClass("tab4");

$(".online span a").removeClass("On");
$("#playlist div").hide();

/*$("#playlist div").each(function(i,o) {
	if (!o.id) o.id = "pl_ol"+ (i+1);
	o.style.display= "none";
});*/

var o =  $(".online span a:eq(0)");
if (typeof(urlid) != "undefined" && urlid =="0") {
	 o = $(".online span a:last");
	  $("#playlist div:last").show();
}
else if (parseInt(urlid) >1) {
	 o = $(".online span a:eq("+(urlid-1)+")");
	  $("#playlist div:eq("+(urlid-1)+")").show();
}
else $("#playlist div:eq(0)").show();

$(o).addClass("On");
$(o).append('<em class="j">新</em>');
 
$(".online span a").each(function(i,o) {
if (o.id) $(o).click(function() {
$(".online span a").removeClass("On");
$(o).addClass("On");
$("#playlist div").hide();
$("#pl_" + this.id).show();
});
else {
$(o).click(function() {
$(".online span a").removeClass("On");
$(o).addClass("On");
$("#playlist div").hide();
$("#playlist div:eq("+i+")").show();
});
}
});

try {
if (bIsWX && $("#pl_wx").length>0 ) {
 $(".online span").html('<a id="wx" class="On">微信</a>');
$("#playlist div").hide();
$("#pl_wx").show();
}
}
catch (e) {}

$(".ts").click(function(){
$.cookie('playtip', 1,{ expires: 15 ,path: '/'});
});
if ($.cookie('playtip') == 1) $(".ts").hide();

$(".ewm").hover(
  function () {$(".qr").show();$(".ts").show();  },
  function () {$(".qr").hide();$(".ts").hide();  }
);

if (typeof(id) != "undefined" && typeof(classid) != "undefined") {
$.ajax({url: "/reward/"+parseInt(classid)+"/"+parseInt(id)+".html",dataType: "text",cache: true,
success: function(data){
star = parseInt(data);
if (star >= 1000) {
reward = "y_icon";
$("#reward_m .wx_reward").css("font-size","13px");
}
else if (star >=400) reward = "g_icon";
else if (star >=100) reward = "s_icon";
else if (star >=20) reward = "b_icon";
else reward = "c_icon";
if (star) $("#reward_m").css("width","125px");
if (typeof(BDAD_ID5) != "undefined" && BDAD_ID5 == "notpc") {

}
else {
$(".weixin").hover(function(){$(".qr2").show();$(".ts").show();},function(){$(".qr2").hide();$(".ts").hide();});
}
$(".wx_reward").html('打赏支持' + (star?'<u>'+star+'</u>':'') + '<div class="'+reward+'"></div>');
}
});
}

$("#mod_scrollplay_close").click(function () { 
$("#mod_player").removeClass("mod_play");
$(".youku-player").css("height","100%")
$("#mod_scrollplay_drag").hide();
modclose = 1;
});

$(window).scroll(function () {
if ($("#movie_player").length > 0 && modclose == 0) {
a1=$(this).scrollTop();
a2=$('.online').offset().top;
if ( (a2-a1) < 100 ) {
$("#mod_player").addClass("mod_play");
$(".yplay").css("width","100%");
$("#youku-player").css("height","220px")
$("#mod_scrollplay_drag").show();

}
else {
$("#mod_player").removeClass("mod_play");
$("#youku-player").css("height","100%")
$("#mod_scrollplay_drag").hide();
}
}
});
}