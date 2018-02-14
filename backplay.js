var BDAD_ID5 = "130098";
var iswork = 0;
var isover = 0;
try {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucbrowser/i) == "ucbrowser";
	var bIsQQ = sUserAgent.match(/qqbrowser/i) == "qqbrowser";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsLinux = sUserAgent.match(/linux/i) == "linux";
	var bIsIpod = sUserAgent.match(/ipod/i) == "ipod";
    if (bIsLinux) bIsAndroid = bIsLinux;	
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	var bIsWX = sUserAgent.match(/micromessenger/i)=="micromessenger";
	var bIsMi = sUserAgent.match(/miui/i)=="miui";
	var bIsIE = (sUserAgent.indexOf("msie") > -1 || sUserAgent.indexOf("rv:11") > -1 );
	var bIsEdge = sUserAgent.indexOf("edge") > -1;
	if (bIsIpad || bIsIphoneOs || bIsIpod || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		BDAD_ID5 = "notpc";
	}

} catch (e) {}

function getPr(sUrl,paraName)
{
if (sUrl=="") return "";
var sReg  =  "(?:\\?|&){1}"+paraName+"=([^&]*)";
var re=new RegExp(sReg,"gi");
re.exec(sUrl);
return RegExp.$1;
}

function allskip(id,t) {
	var da = new Date();
	var week = da.getDay();
	var hour = da.getHours();
	if (id == "ykw" || id == "yk" || id == "ykm") return;
	if ((id == "w"|| id == "ykw") && (week == 0 || week == 6 || hour < 8 || hour > 18)) return;
	if ((id == "q" ) && (hour < 8 || hour > 18)) return;
if (id == "ykm" && bIsAndroid && hour > 7 && hour < 19) {
		//isover=1;
		return;
	}
if (id == "ykm" && BDAD_ID5 != "notpc") return;
	if ( id == "a" || id == "yk" ||id == "ykw" || BDAD_ID5 != "notpc" ) {
		if (t=="an" && BDAD_ID5 == "notpc" && !bIsAndroid) return;
		if (t=="pc" && BDAD_ID5 == "notpc") return;
iswork = 1;
setTimeout(function () { $("#wplay").html("");} , 1000);
$(".online span").html("");
$("#playlist").html('<ul><li style="width: 150px;"><a>版权问题,暂时停播</a></li></ul>');	
	}
}

function $DE(id) {
	return document.getElementById(id);
}

if (typeof deconcept == "undefined") {
	var deconcept = new Object();
}
if (typeof deconcept.util == "undefined") {
	deconcept.util = new Object();
}
if (typeof deconcept.SWFObjectUtil == "undefined") {
	deconcept.SWFObjectUtil = new Object();
}
deconcept.SWFObject = function(_1, id, w, h, _5, c, _7, _8, _9, _a, _b) {
	if (!document.createElement || !document.getElementById) {
		return;
	}
	this.DETECT_KEY = _b ? _b : "detectflash";
	//this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);
	this.skipDetect = true;
	this.params = new Object();
	this.variables = new Object();
	this.attributes = new Array();
	if (_1) {
		this.setAttribute("swf", _1);
	}
	if (id) {
		this.setAttribute("id", id);
	}
	if (w) {
		this.setAttribute("width", w);
	}
	if (h) {
		this.setAttribute("height", h);
	}
	if (_5) {
		this.setAttribute("version", new deconcept.PlayerVersion(_5.toString().split(".")));
	}
	this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion(this.getAttribute("version"), _7);
	if (c) {
		this.addParam("bgcolor", c);
	} else {
		this.addParam("wmode", "transparent");
	}
	var q = _8 ? _8 : "high";
	this.addParam("quality", q);
	this.setAttribute("useExpressInstall", _7);
	this.setAttribute("doExpressInstall", false);
	var _d = (_9) ? _9 : window.location;
	this.setAttribute("xiRedirectUrl", _d);
	this.setAttribute("redirectUrl", "");
	if (_a) {
		this.setAttribute("redirectUrl", _a);
	}
};
deconcept.SWFObject.prototype = {
	setAttribute: function(_e, _f) {
		this.attributes[_e] = _f;
	},
	getAttribute: function(_10) {
		return this.attributes[_10];
	},
	addParam: function(_11, _12) {
		this.params[_11] = _12;
	},
	getParams: function() {
		return this.params;
	},
	addVariable: function(_13, _14) {
		this.variables[_13] = _14;
	},
	getVariable: function(_15) {
		return this.variables[_15];
	},
	getVariables: function() {
		return this.variables;
	},
	getVariablePairs: function() {
		var _16 = new Array();
		var key;
		var _18 = this.getVariables();
		for (key in _18) {
			_16.push(key + "=" + _18[key]);
		}
		return _16;
	},
	getSWFHTML: function() {
		var _19 = "";
		if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
			if (this.getAttribute("doExpressInstall")) {
				this.addVariable("MMplayerType", "PlugIn");
			}
			_19 = "<embed type=\"application/x-shockwave-flash\" src=\"" + this.getAttribute("swf") + "\" width=\"" + this.getAttribute("width") + "\" height=\"" + this.getAttribute("height") + "\"";
			_19 += " id=\"" + this.getAttribute("id") + "\" name=\"" + this.getAttribute("id") + "\" ";
			var _1a = this.getParams();
			for (var key in _1a) {
				_19 += [key] + "=\"" + _1a[key] + "\" ";
			}
			var _1c = this.getVariablePairs().join("&");
			if (_1c.length > 0) {
				_19 += "flashvars=\"" + _1c + "\"";
			}
			_19 += " pluginspage=\"https://www.macromedia.com/go/getflashplayer\"/>";
		} else {
			if (this.getAttribute("doExpressInstall")) {
				this.addVariable("MMplayerType", "ActiveX");
			}
			_19 = "<object id=\"" + this.getAttribute("id") + "\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"" + this.getAttribute("width") + "\" height=\"" + this.getAttribute("height") + "\" codebase=\"https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0\">";
			_19 += "<param name=\"movie\" value=\"" + this.getAttribute("swf") + "\" />";
			var _1d = this.getParams();
			for (var key in _1d) {
				_19 += "<param name=\"" + key + "\" value=\"" + _1d[key] + "\" />";
			}
			var _1f = this.getVariablePairs().join("&");
			if (_1f.length > 0) {
				_19 += "<param name=\"flashvars\" value=\"" + _1f + "\" />";
			}
			_19 += "</object>";
		}
		return _19;
	},
	write: function(_20) {
		if (this.getAttribute("useExpressInstall")) {
			var _21 = new deconcept.PlayerVersion([6, 0, 65]);
			if (this.installedVer.versionIsValid(_21) && !this.installedVer.versionIsValid(this.getAttribute("version"))) {
				this.setAttribute("doExpressInstall", true);
				this.addVariable("MMredirectURL", escape(this.getAttribute("xiRedirectUrl")));
				document.title = document.title.slice(0, 47) + " - Flash Player Installation";
				this.addVariable("MMdoctitle", document.title);
			}
		}
		if (this.skipDetect || this.getAttribute("doExpressInstall") || this.installedVer.versionIsValid(this.getAttribute("version"))) {
			var n = (typeof _20 == "string") ? document.getElementById(_20) : _20;
			n.innerHTML = this.getSWFHTML();
			return true;
		} else {
			if (this.getAttribute("redirectUrl") != "") {
				document.location.replace(this.getAttribute("redirectUrl"));
			}
		}
		return false;
	}
};
deconcept.SWFObjectUtil.getPlayerVersion = function(_23, _24) {
	var _25 = new deconcept.PlayerVersion([0, 0, 0]);
	if (navigator.plugins && navigator.mimeTypes.length) {
		var x = navigator.plugins["Shockwave Flash"];
		if (x && x.description) {
			_25 = new deconcept.PlayerVersion(x.description.replace(/([a-z]|[A-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."));
		}
	} else {
		try {
			var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			for (var i = 15; i > 6; i--) {
				try {
					axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
					_25 = new deconcept.PlayerVersion([i, 0, 0]);
					break;
				} catch (e) {}
			}
		} catch (e) {}
		if (_23 && _25.major > _23.major) {
			return _25;
		}
		if (!_23 || ((_23.minor != 0 || _23.rev != 0) && _25.major == _23.major) || _25.major != 6 || _24) {
			try {
				_25 = new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));
			} catch (e) {}
		}
	}
	return _25;
};
deconcept.PlayerVersion = function(_29) {
	this.major = parseInt(_29[0]) != null ? parseInt(_29[0]) : 0;
	this.minor = parseInt(_29[1]) || 0;
	this.rev = parseInt(_29[2]) || 0;
};
deconcept.PlayerVersion.prototype.versionIsValid = function(fv) {
	if (this.major < fv.major) {
		return false;
	}
	if (this.major > fv.major) {
		return true;
	}
	if (this.minor < fv.minor) {
		return false;
	}
	if (this.minor > fv.minor) {
		return true;
	}
	if (this.rev < fv.rev) {
		return false;
	}
	return true;
};
deconcept.util = {
	getRequestParameter: function(_2b) {
		var q = document.location.search || document.location.hash;
		if (q) {
			var _2d = q.indexOf(_2b + "=");
			var _2e = (q.indexOf("&", _2d) > -1) ? q.indexOf("&", _2d) : q.length;
			if (q.length > 1 && _2d > -1) {
				return q.substring(q.indexOf("=", _2d) + 1, _2e);
			}
		}
		return "";
	}
};
if (Array.prototype.push == null) {
	Array.prototype.push = function(_2f) {
		this[this.length] = _2f;
		return this.length;
	};
}
var getQueryParamValue = deconcept.util.getRequestParameter;
var FlashObject = deconcept.SWFObject; // for backwards compatibility
var SWFObject = deconcept.SWFObject;

function QueryString() {
	var name, value, i;
	var str = location.href;
	var num = str.indexOf("?")
	str = str.substr(num + 1);
	var arrtmp = str.split("&");
	for (i = 0; i < arrtmp.length; i++) {
		num = arrtmp[i].indexOf("=");
		if (num > 0) {
			name = arrtmp[i].substring(0, num);
			value = arrtmp[i].substr(num + 1);
			this[name] = value;
		}
	}
}
var Request = new QueryString();

function yk_d12(v_ids, this_Obj) {
	yk_d22(v_ids, this_Obj);
	$(".notice2").html("<button onclick=\"yk_d1('"+v_ids+"',this)\" class=\"on\"> 兼容模式</button> " +"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
}

function yk_d1(v_ids, this_Obj,s_f) {
	$('.error').remove();
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://v.youku.com/v_show/id_"+v_ids+".html";
return;
}
$("#wplay").attr("style","");
var height = 450;
var width = "100%";

if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
}

document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='//player.youku.com/embed/" + v_ids + "' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";

if (s_f == 1) $(".notice2").html("<button onclick=\"ck_yk('"+v_ids+"', this,'yk2/','m')\" class='on'> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> ' +"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况"); 
else $(".notice2").html("<button onclick=\"ck_yk2('"+v_ids+"',this,0)\" class='on'> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> ' +"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
};

function yk_d(v_ids, this_Obj) {
	$('.error').remove();
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://v.youku.com/v_show/id_"+v_ids+".html";
return;
}
$("#wplay").attr("style","");
var height = 450;
var width = "100%";

if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
}

yk_d1(v_ids,this_Obj);

if (v_ids.substring(0,3) == "XMT") {
$(".notice2").html("<button onclick=\"ck_yk2('"+v_ids+"',this,0)\" class='on'> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
}
else {
$(".notice2").html("<button onclick=\"yk_d12('"+v_ids+"',this)\" class='on'> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
}

};

function t_hn1(l_i, this_Obj, s_f) {
	if (l_i.indexOf("&icode=")<=0) l_i = l_i +"&icode="+l_i;
	t_hn(l_i, this_Obj, s_f);
}

function t_hn(l_i, this_Obj, s_f) {
	$('.error').remove();
	if (!isNaN(l_i)) {
tyun(l_i);
return;
    }
	if (l_i.indexOf("&icode=")<=0) l_i = l_i +"&icode="+l_i;
t_hm1(l_i,this_Obj);
//yk_d22(l_i,this_Obj);
//$(".notice2").html("<button onclick=\"t_hm('"+l_i+"',this)\"> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
};

function t_hm1(l_i, this_Obj, s_f) {
	$('.error').remove();
if (l_i.split("&vcode=")[1]) {
	yk_d(l_i.split("&vcode=")[1]);
	return;
}
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}

var height = 408;
var width = "100%";
if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
}

$("#wplay").attr("style","");		

doif("https://www.tudou.com/programs/view/"+l_i.split("=")[1]+'/',this_Obj);	

var alt = ($(this_Obj).attr("alt")?$(this_Obj).attr("alt"):"");
//$(".notice2").html("<button onclick=\"ck_yk('"+l_i+"',this,'tyk/','m')\" class=\"on\" alt=\""+ alt +"\"> 兼容模式</button>" + (alt ? '<b style="color:#8ad137">密码:' + alt +'</b>&nbsp;':"") + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况" );
//$(".notice2").html("<button onclick=\"ck_tyk('"+l_i+"',this,'tyk1/')\" class=\"on\" alt=\""+ alt +"\"> 兼容模式</button>" + (alt ? '<b style="color:#8ad137">密码:' + alt +'</b>&nbsp;':"") + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况" );
};

function t_hm(l_i, this_Obj, s_f) {
	$('.error').remove();
try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://www.tudou.com/programs/view/"+getPr(l_i, "icode")+"/";
return;
}

$("#wplay").attr("style","");

var height = 450;
var width = "100%";
if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
document["getElementById"]("wplay")["innerHTML"] = "<iframe src='https://www.tudou.com/programs/view/"+l_i.split("=")[1]+"/' width='"+width+"' height='"+height+"' frameborder='0' allowfullscreen='true'></iframe>";
}
else document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://p.y3600.com/td/" + l_i + "&1.html' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'><\/IFRAME>";

var alt = ($(this_Obj).attr("alt")?$(this_Obj).attr("alt"):"");

$(".notice2").html("<button onclick=\"ck_yk('"+l_i+"',this,'tyk/','m')\" class=\"on\" alt=\""+ alt +"\"> 兼容模式</button>" + (alt ? '<b style="color:#8ad137">密码:' + alt +'</b>&nbsp;':"") + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况" );
};

function t_ho(l_i, this_Obj) {t_hn(l_i, this_Obj);}
function td_l(l_i, this_Obj) {t_hn(l_i, this_Obj);}

function pp_v(l_i, this_Obj) {
$('.error').remove();
var height = 450;
var width = "100%";
try {
if (!this_Obj) this_Obj = window.event.srcElement;
}catch(e) {	}
var url = "https://player.pptv.com/iframe/index.html#id="+l_i+"&ctx=o%3Dv_share";	
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= url;
return;
}
if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
}
$("#wplay").attr("style","");
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='" + url + "' height='"+height+"px' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
$(".notice2").html('<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em>'+'切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情況');
};

function so_h1(l_i, this_Obj) {
	$('.error').remove();
try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
	var fo = new SWFObject("https://tv.sohu.com/upload/swf/20120504/Main.swf", "movie_player", "100%", "430", 7, "#000000");
	fo["addVariable"]("flashvars", "&id=" + l_i + "&skinNum=1&sogouBtn=0&domain=inner&skin=0&menu=false&showRecommend=0&autoplay=true&showCtrlBar=1&api_key=2369879459a1dff4033fde2bb6b023e6&jump=0&sid=null");
	fo["addParam"]("allowFullScreen", "true");
	fo["addParam"]("AllowScriptAccess", "never");
	fo["addParam"]("wmode", "transparent");
	if (!fo["write"]("wplay")) {
		window["focus"]();
	};
	if (BDAD_ID5 == "notpc") {
		document["getElementById"]("wplay")["innerHTML"] = "<video width='720' height='438' id='html5video' src='https://my.tv.sohu.com/ipad/" + l_i + ".m3u8' autoplay='autoplay' onclick='clickPPly()' controls='controls' style='background:#000;'></video>";
	$(".notice2").html('<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em>'+'如无法播放，请切换下方视频源（如“优酷”切到“其它”）然后点击相应剧集尝试播放');
	};
};

function so_h3(v_ids, this_Obj) {
	/*
	if (BDAD_ID5 == "notpc") {
	ck_yk(v_ids, this_Obj,'so/');
$(".notice2").html("<button onclick=\"so_h4('"+v_ids+"')\"> 兼容模式</button> 打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况" + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em>');
	}
	else */
	so_h4(v_ids, this_Obj);
}

function so_h4(l_i, this_Obj) {
	$('.error').remove();
try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://m.tv.sohu.com/v" + l_i + ".shtml";
return;
}
	var fo = new SWFObject("https://tv.sohu.com/upload/swf/20140718/Main.swf", "movie_player", "100%", "440", 7, "#000000");
fo["addVariable"]("flashvars", "&id=" + l_i + "&skinNum=1&sogouBtn=0&domain=inner&skin=0&menu=false&showRecommend=0&autoplay=true&showCtrlBar=1&api_key=2369879459a1dff4033fde2bb6b023e6&jump=0&sid=null");
	//var fo = new SWFObject("https://tv.sohu.com/upload/swf/20120504/Main.swf", "movie_player", "100%", "440", 7, "#000000");
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
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://m.tv.sohu.com/v" + l_i + ".shtml' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0'></IFRAME>";
	};	
$(".notice2").html("<button onclick=\"ck_yk('"+l_i+"','','so/','&plus=1')\" class='on'> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中搜狐只能试播5分钟,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");	
};
function yk_b(v_i, th_is) {
	yk_d(v_i - 8, th_is);
}
function tu_p(v_i, th_is) {
	t_ho(v_i - 99, th_is);
}

function t_yk(v_i, th_is) {
yk_d(v_i, th_is);
/*if (BDAD_ID5 == "notpc") yk_d(v_i, th_is); else t_hn('&vcode=' + v_i, th_is);*/
}

function so_h2(v_i, th_is) {
	so_h1(v_i - 9, th_is);
}
function yn_d(v_i, th_is) {
	yk_d("XN" + v_i, th_is);
};

function ym_d(v_i, th_is) {
	yk_d("XM" + v_i, th_is);
};
function yo_d(v_i, th_is) {
	yk_d("XO" + v_i, th_is);
};

function clickPPly() {
	var hvideo = document.getElementById("html5video");
	if (hvideo.paused) {
		hvideo.play();
	} else {
		hvideo.pause();
	}
}

function tx_q(l_i, this_Obj) {qq_d(l_i,this_Obj);}
function qq(l_i, this_Obj) {qq_d(l_i,this_Obj);}

function ck_qq(l_i, this_Obj) {
ck_yk(l_i, this_Obj,'tx/');
$(".notice2").html("<button onclick=\"qq_d('"+l_i+"')\" class='on'> 兼容模式</button> 腾讯要<em>等1分钟</em>才会播放. " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");	
};

function qq_d(l_i, this_Obj) {
	$('.error').remove();
try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://m.v.qq.com/cover/z/zpg9tz54lgrq1p5.html?vid=" + l_i;
return;
}
	var fo = new SWFObject("https://imgcache.qq.com/tencentvideo_v1/player/TencentPlayer.swf", "movie_player", "100%", "430", 7, "#000000");
	fo["addVariable"]("vid=" + l_i + "&menu=false&autoplay=1&cid=s1oedlknt72vvqt&outhost=https://huoying.qq.com/=undefined&1","1");
	//fo["addVariable"]("vid=" + l_i + "&cid=hwqubwf3mo66y64&auto=1&1","1");

	fo["addParam"]("allowFullScreen", "true");
	fo["addParam"]("AllowScriptAccess", "never");
	fo["addParam"]("wmode", "transparent");
	if (!fo["write"]("wplay")) {
		window["focus"]();
	};
	$(".notice2").html("<button onclick=\"ck_qq('"+l_i+"')\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");	
	if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
$("#wplay").attr("style","");
//ck_qq(l_i, this_Obj);
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://p1.y3600.com/qq/" + l_i + "&1.html' height='"+parseInt(width*0.69)+"' width='"+width+"' scrolling='no' frameBorder='0'><\/IFRAME>";
//document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://p1.y3600.com/qq.html?id=" + l_i + "' height='"+parseInt(width*0.69)+"' width='"+width+"' scrolling='no' frameBorder='0'><\/IFRAME>";
	$(".notice2").html("<button onclick=\"qq_m('"+l_i+"')\"> 兼容模式</button> 腾讯在手机上<em>要等很久</em>才能播放. " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
	}
};

function qq_m(l_i) {
	$('.error').remove();
	var this_Obj = window.event.srcElement;
	if (BDAD_ID5 == "notpc") {
	var width = document["getElementById"]("wplay").clientWidth;
	var height = parseInt(width*0.58);
$("#wplay").attr("style","");
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://m.v.qq.com/cover/z/zpg9tz54lgrq1p5.html?vid=" + l_i + "' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'><\/IFRAME>"
$(".notice2").html("<button onclick=\"qq_d('"+l_i+"')\" class=\"on\"> 兼容模式</button> 关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况。腾讯手机限制只能观看<em>5分钟</em>");
	}
	else qq_d(l_i);	
};

function ck_qy(v_ids, this_Obj,s_f) {
//if (bIsAndroid) ck_n(v_ids, this_Obj,'qy7/');
//else ck_n(v_ids, this_Obj,"qy/");
ck_yk(v_ids, this_Obj,"qy/","m");
}

function ck_qy7(v_ids, this_Obj,s_f) {
ck_yk(v_ids, this_Obj,"qy7/","m");
}

function ai_y(v_i,th_is){ai_q(v_i,th_is,'');}

function ai_u1(l_i, url) {
	$('.error').remove();
	var this_Obj = window.event.srcElement;
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= url;
return;
}
ck_yk(l_i.substring(38) ,this_Obj,"qy/","m");
}



function ai_q1(l_i, this_Obj, s_f) {
	$('.error').remove();
	if (!s_f) s_f ="https://www.iqiyi.com/common/flashplayer/20170301/10301a7ff0f5.swf";
	//"https://www.iqiyi.com/common/flashplayer/20160321/EnjoyPlayer_4_3_1_c3_3_10_4.swf";
try {
	//if (this_Obj.indexOf("http")==0))
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj = window.event.srcElement;
this_Obj.target="_blank";
this_Obj.href= "https://m.iqiyi.com/shareplay.html?vid=" + l_i;
return;
}
	if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
if (typeof(this_Obj) == "string" && this_Obj.indexOf("http")==0) $(".notice2").html("<button onclick=\"ai_u('"+l_i+"','"+this_Obj+"')\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");
$("#wplay").attr("style","");

document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://m.iqiyi.com/shareplay.html?vid=" + l_i + "' height='"+height+"' width='100%' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
	}
	else {
	document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=" + l_i + "&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=440&width=100%' height='440' width='100%' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
$(".notice2").html("<button onclick=\"ai_q('"+l_i+"','"+this_Obj+"')\" class=\"on\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");

}
	if (!fo["write"]("wplay")) {
		window["focus"]();
	};
};

function ai_u(l_i, url) {
	$('.error').remove();
	var this_Obj = window.event.srcElement;
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= url;
return;
}
ai_q(l_i,url);	
};

function ai_q(l_i, this_Obj, s_f) {
	$('.error').remove();
	if (!s_f) s_f ="https://www.iqiyi.com/common/flashplayer/20170301/10301a7ff0f5.swf";
	//"https://www.iqiyi.com/common/flashplayer/20160321/EnjoyPlayer_4_3_1_c3_3_10_4.swf";
try {
	//if (this_Obj.indexOf("http")==0))
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://m.iqiyi.com/shareplay.html?vid=" + l_i;
return;
}

//var id = l_i.split("&tvId=");
//var id1 = this_Obj.substring(21,33);
//s_f = "https://player.video.qiyi.com/"+id[0]+"/0/0/"+id1+".swf-albumId=203338001-tvId="+id[1]+"-isPurchase=0-cnId=2";
	var fo = new SWFObject(s_f, "movie_player", "100%", "440", 7, "#000000");
	//fo["addVariable"]("definitionID=" + l_i + "&menu=false&autoplay=true&cid=qc_100001_100100&flashP2PCoreUrl=https://www.iqiyi.com/common/flashplayer/20160909/10462a1b82aa.swf&1","1");
	fo["addVariable"]("vid=" + l_i + "&cnId=5&autoplay=1&source=weibo.com&1","1");
	fo["addParam"]("isdependent", "48");
	fo["addParam"]("allowFullScreen", "true");
	fo["addParam"]("AllowScriptAccess", "never");
	fo["addParam"]("allownetworking", "internal");
	fo["addParam"]("wmode", "transparent");
	if (!fo["write"]("wplay")) {
		window["focus"]();
	};
	if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
if (typeof(this_Obj) == "string" && this_Obj.indexOf("http")==0) $(".notice2").html("<button onclick=\"ck_qy('"+this_Obj.substring(21,33)+"')\"> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况" );
$("#wplay").attr("style","");
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://m.iqiyi.com/shareplay.html?vid=" + l_i + "' height='"+height+"' width='100%' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
//document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=" + l_i + "&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%' height='"+height+"' width='100%' scrolling='no' frameBorder='0'></IFRAME>";
	}
	else $(".notice2").html("<button onclick=\"ai_q1('"+l_i+"','"+this_Obj+"')\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");
};

function doswf(url) {
	$('.error').remove();
	var fo = new SWFObject(url, "movie_player", "100%", "430", 7, "#000000");
	fo["addVariable"]("flashvars", "&isShowRelatedVideo=false&isAutoPlay=true&showAd=0&show_pre=1&show_next=1&isAutoPlay=true&isDebug=false&UserID=&winType=interior&playMovie=true&MMControl=false&MMout=false");		
	fo["addParam"]("allowFullScreen", "true");
	fo["addParam"]("quality", "high");
	fo["addParam"]("AllowScriptAccess", "never");
	fo["addParam"]("wmode", "transparent");
	if (!fo["write"]("wplay")) {
		window["focus"]();
	};
	if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
$("#wplay").attr("style","");
	document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='" + url + "' height='"+height+"px' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
	$(".notice2").html("非常抱歉,该视暂时只能在PC上播放.");
	};
}

function d_56(l_i, this_Obj) {
	$('.error').remove();
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
    var url = "https://player.56.com/v_"+l_i+".swf";
	var fo = new SWFObject(url, "movie_player", "100%", "430", 7, "#000000");
	fo["addVariable"]("flashvars", "&isShowRelatedVideo=false&isAutoPlay=true&showAd=0&show_pre=1&show_next=1&isAutoPlay=true&isDebug=false&UserID=&winType=interior&playMovie=true&MMControl=false&MMout=false");		
	fo["addParam"]("allowFullScreen", "true");
	fo["addParam"]("quality", "high");
	fo["addParam"]("AllowScriptAccess", "never");
	fo["addParam"]("wmode", "transparent");
	if (!fo["write"]("wplay")) {
		window["focus"]();
	};
	if (BDAD_ID5 == "notpc") {
		url = "https://m.56.com/view/id-"+l_i+".html"
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
$("#wplay").attr("style","");
	document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='" + url + "' height='"+height+"px' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
	$(".notice2").html('<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+ '如无法播放，请切换下方视频源（如“优酷”切到“其它”）然后点击相应剧集尝试播放');
	};
}

function d_yyt(l_i, this_Obj) {
	$('.error').remove();
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
    var url = "https://player.yinyuetai.com/video/swf/"+l_i+"/v_0.swf";
	var fo = new SWFObject(url, "movie_player", "100%", "430", 7, "#000000");
	fo["addVariable"]("flashvars", "&isShowRelatedVideo=false&isAutoPlay=true&showAd=0&show_pre=1&show_next=1&isAutoPlay=true&isDebug=false&UserID=&winType=interior&playMovie=true&MMControl=false&MMout=false");		
	fo["addParam"]("allowFullScreen", "true");
	fo["addParam"]("quality", "high");
	fo["addParam"]("AllowScriptAccess", "never");
	fo["addParam"]("wmode", "transparent");
	if (!fo["write"]("wplay")) {
		window["focus"]();
	};
	if (BDAD_ID5 == "notpc") {
	var targetProtocol = "http:";
if (window.location.protocol != targetProtocol)
 window.location.href = targetProtocol +
  window.location.href.substring(window.location.protocol.length);
  
url = "https://m.yinyuetai.com/video/"+l_i;
var height = 530;
var width = document["getElementById"]("wplay").clientWidth;
if (bIsIphoneOs) height=290;
else if (bIsAndroid) height=290;
else if (bIsIpad) height =530;
$("#wplay").attr("style","");
	document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='" + url + "' height='"+height+"px' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
	$(".notice2").html('<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+ '如无法播放，请切换下方视频源（如“优酷”切到“其它”）然后点击相应剧集尝试播放');
	};
}

function ck_le(v_ids, this_Obj) {
ck_yk(v_ids, this_Obj,'le/',"m");
$(".notice2").html("<button onclick=\"d_le('"+v_ids+"')\" class='on'> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");
}
function d_le(l_i, this_Obj) {
	$('.error').remove();
try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://m.letv.com/vplay_" + l_i + ".html";
return;
}
//https://www.letv.com/player/swfPlayer.swf
	var fo = new SWFObject("https://player.letvcdn.com/lc05_p/201605/12/19/56/19/newplayer/LetvPlayer.swf", "movie_player", "100%", "440", 7, "#000000");
	fo["addVariable"]("id=" + l_i +"&");
	fo["addParam"]("allowFullScreen", "true");
	fo["addParam"]("AllowScriptAccess", "never");
	fo["addParam"]("wmode", "transparent");
	if (!fo["write"]("wplay")) {
		window["focus"]();
	};
	if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
$("#wplay").attr("style","");
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://m.letv.com/vplay_" + l_i + ".html' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
	}
$(".notice2").html("<button onclick=\"ck_le('"+l_i+"')\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");	
}

function d_bi(v_ids, this_Obj) {
d_bi1(v_ids, this_Obj);
}

function d_bi2(v_ids, this_Obj) {
ck_yk(v_ids, this_Obj,'bi/');
$(".notice2").html("<button onclick=\"d_bi1('"+v_ids+"')\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");
}
function d_bi1(l_i, this_Obj) {
	$('.error').remove();
try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}

	var page = getPr(l_i,"page");
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://www.bilibili.com/mobile/video/av" + parseInt(l_i) + ".html" + (page?"#page="+page:"");
return;
}
	var fo = new SWFObject("https://static.hdslb.com/miniloader.swf?aid=" + l_i , "movie_player", "100%", "440", 7, "#000000");
	fo["addParam"]("allowFullScreen", "true");
	fo["addParam"]("AllowScriptAccess", "never");
	fo["addParam"]("wmode", "transparent");
	if (!fo["write"]("wplay")) {
		window["focus"]();
	};
	if (BDAD_ID5 == "notpc") {
var height = 480;
var width = document["getElementById"]("wplay").clientWidth;
if (bIsIphoneOs) height=320;
else if (bIsAndroid) height=310;
else if (bIsIpad) {
	height =420;
	width=728;
}
$("#wplay").attr("style","");
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://www.bilibili.com/mobile/video/av" + parseInt(l_i) + ".html" +  (page?"#page="+page:"") + "' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
	};	
	$(".notice2").html("<button onclick=\"d_bi2('"+l_i+"')\" class=\"on\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");
};


function ck_ac(v_ids, this_Obj) {
ck_yk(v_ids, this_Obj,'ac/');
$(".notice2").html("<button onclick=\"d_ac2('"+v_ids+"')\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");
}

function d_ac(v_ids, this_Obj) {
d_ac2(v_ids,this_Obj);
//ck_ac(v_ids, this_Obj);
}

function d_ac2(l_i, this_Obj) {
	$('.error').remove();
try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://m.acfun.cn/v?ac=" + l_i;
return;
}
	if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
$("#wplay").attr("style","");
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='//m.acfun.cn/ykplayer?date=undefined#vid=" + l_i + "' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
	}
	else document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='//cdn.aixifan.com/player/ACFlashPlayer.out.swf?vid=" + l_i + "&ref=https://www.acfun.cn/v/ac"+l_i+"' height='440' width='100%' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";	
	$(".notice2").html("<button onclick=\"ck_ac('"+l_i+"')\" class=\"on\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");
};

function d_mp(l_i, this_Obj, s_f) {
	$('.error').remove();
	if (!s_f) s_f ="https://wscdn.miaopai.com/splayer2.1.1.swf";
try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://m.miaopai.com/show/channel/" + l_i;
return;
}
	var fo = new SWFObject(s_f, "movie_player", "100%", "440", 7, "#000000");
	
	fo["addVariable"]("scid=" + l_i + "&token=&autopause=false&fromweibo=false&1","1");
	fo["addParam"]("allowFullScreen", "true");
	fo["addParam"]("AllowScriptAccess", "never");
	fo["addParam"]("allownetworking", "internal");
	fo["addParam"]("wmode", "transparent");
	if (!fo["write"]("wplay")) {
		window["focus"]();
	};
	if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
//document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://m.miaopai.com/show/channel/" + l_i + "' height='"+height+"' width='100%' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
document["getElementById"]("wplay")["innerHTML"] = "<video id='html5EmbedPlayer' autoplay='autoplay' controls='controls' height='" + height + "' width='100%' src='https://gslb.miaopai.com/stream/" + l_i + ".mp4' onclick='clickPPly()'></video>";
$(".notice2").html('<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+'如无法播放，请切换下方视频源（如“优酷”切到“其它”）然后点击相应剧集尝试播放');
	};
};


function ck_m(v_ids, this_Obj,s_f) {
	$('.error').remove();
	if (!s_f) s_f = "nb/";
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
//this_Obj.target="_blank";
//this_Obj.href= "https://v.youku.com/v_show/id_"+v_ids+".html";
return;
}
//if (s_f == "ac/") {
ck_yk(v_ids, this_Obj,s_f,"m");
return;
//}
if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
$(".notice2").html('<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+'如无法播放，请切换下方视频源（如“优酷”切到“其它”）.播放时,需要<em>多等会</em>才行');
};
$.ajax({url: "https://p.y3600.com/ckplayer/ckplayer.js",dataType: "script",cache: true,
success: function(data){
	
var flashvars={
   f:'https://p.y3600.com/player/m3u8.swf',a:encodeURIComponent('https://p.y3600.com/' + s_f + v_ids + '&1.html'),s:4,c:0,p:1,i:'https://img.y3600.com/images/loading_ls.gif'};
	var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
	var video=['https://p.y3600.com/'+ s_f + v_ids + '&m=1&1.html->video/mp4'];
	var support=['iPad','iPhone','ios','android+false','msie10+false'];
	CKobject.embedSWF('https://p.y3600.com/ckplayer/ckplayer.swf','wplay','ckplayer_wplay','100%','440',flashvars,params);
	CKobject.embedHTML5('wplay','ckplayer_wplay','100%',height,video,flashvars,support);
}
});

};
function ck_f(v_ids, this_Obj) { tnav(v_ids,this,'ck_v',''); }
function ck_n(v_ids, this_Obj,s_f) {
	$('.error').remove();
	if (!s_f) s_f = "";
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
//this_Obj.target="_blank";
//this_Obj.href= "https://v.youku.com/v_show/id_"+v_ids+".html";
return;
}
if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
$(".notice2").html('<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+'如无法播放，请切换下方视频源（如“优酷”切到“其它”）.播放时,需要<em>多等会</em>才行');
};
$.ajax({url: "https://p.y3600.com/ckplayer/ckplayer.js",dataType: "script",cache: true,
success: function(data){
	
var flashvars={
f:'https://p.y3600.com/' + s_f + v_ids +'&1.html',a:'',s:2,c:0,p:1,i:'https://img.y3600.com/images/loading_ls.gif'};
var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
var video=['https://p.y3600.com/'+ s_f + v_ids + '&m=1&1.html->video/mp4'];
var support=['iPad','iPhone','ios','android+false','msie10+false'];
CKobject.embedSWF('https://p.y3600.com/ckplayer/ckplayer.swf','wplay','ckplayer_wplay','100%','440',flashvars,params);
CKobject.embedHTML5('wplay','ckplayer_wplay','100%',height,video,flashvars,support);
}});
};

function ck_d(v_ids, this_Obj) {
 ck_m(v_ids, this_Obj,"le/");
}

function ck_v(v_ids, this_Obj,s_f,d) {
	$('.error').remove();
	if (!s_f) s_f = "";
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= v_ids;
return;
}

var height = 450;
var width = "100%";
if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
}

$(".notice2").html('<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+'如无法播放，请切换下方视频源（如“优酷”切到“其它”）然后点击相应剧集尝试播放.播放时,需要<em>多等会</em>才行');
$.ajax({url: "https://p.y3600.com/ckplayer/ckplayer.js",dataType: "script",cache: true,
success: function(data){
var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
var support=['iPad','iPhone','ios','android+false','msie10+false'];
if (s_f != "") {
var flashvars={f:'https://p.y3600.com/' + s_f + v_ids +'&1.html',c:0,p:1,i:'/images/loading_ls.gif'};
var video=['https://p.y3600.com/'+ s_f + v_ids + '&m=1&1.html->video/mp4'];
}
else {
var flashvars={f:v_ids,c:0,p:1,i:'/images/loading_ls.gif'};
var video=[v_ids+'->video/mp4'];
}
var h5 = false;
if (d == "v"|| bIsIE) h5 = true;
CKobject.embed('https://p.y3600.com/ckplayer/ckplayer.swf','wplay','ckplayer_wplay','100%',height,h5,flashvars,video,params);
}});
};

function doif(url,this_Obj,h,mh,meta) {
	$('.error').remove();
	var height = 450;
	var width = "100%";
try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if (!h) h = 0;
if (!mh) mh = 0;
if (!meta) meta = "never";
if (BDAD_ID5 == "notpc") {
h=mh;
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
}
$("#wplay").attr("style","");
var oMeta = document.createElement('meta');oMeta.name = 'referrer';oMeta.content = meta;oMeta.id='ref';
document.getElementsByTagName('head')[0].appendChild(oMeta);
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='" + url + "' height='"+(height+h)+"px' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
document.getElementsByTagName('head')[0].removeChild(oMeta);oMeta.content = 'default';document.getElementsByTagName('head')[0].appendChild(oMeta);
$(".notice2").html('此视频&nbsp;<em>不稳定</em>,可能需要&nbsp;<em>等待很久</em>,或者<em>无法播放</em> '+'或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}

function d_pp(id,this_Obj) {
doif("https://p1.y3600.com/pp.html?id="+id,this_Obj);	
}

function ck_so(v_ids, this_Obj) {
ck_yk(v_ids, this_Obj,'so/');
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


function ck_yk0(v_ids, this_Obj,s_f,d) {
	$('.error').remove();
	if (!s_f) s_f = "yk/";
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://v.youku.com/v_show/id_"+v_ids+".html";
return;
}
if (!d) d = "";
var height = 408;
var width = "100%";
if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
}
$(".notice2").html('<button onclick="ck_yk1(\''+v_ids+'\',this,\''+s_f+'\',\''+d+'\')"> 兼容模式</button> '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+'打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');

$("#wplay").attr("style","");
if (bIsWX && s_f =="yk/" && bIsAndroid) {
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME id='movie_player' name='movie_player' src='https://p1.y3600.com/ckwx/" + v_ids + "&type="+s_f +"&d="+d+ "&1.html' height='"+(height+40) +"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'><\/IFRAME>";
$(".notice2").html('<button onclick="ck_yk1(\''+v_ids+'\',this,\''+s_f+'\',\''+d+'\')"> 兼容模式</button> '+'微信中<em>每6分钟</em>一分段,<em>点击右上角,在浏览器打开可解决</em>'+'打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}
else document["getElementById"]("wplay")["innerHTML"] = "<IFRAME id='movie_player' name='movie_player' src='https://p1.y3600.com/ck/" + v_ids + "&type="+s_f +"&d="+d+ "&1.html' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'><\/IFRAME>";
}

function ck_yk1(v_ids, this_Obj,s_f,d) {
if (!s_f) s_f = "yk/";
//if (s_f == "yk2/") ck_yk0(v_ids, this_Obj,'yk1/','m');
if (s_f == "yk2/") {yk_d1(v_ids, this_Obj); return;}
else if (s_f == "yk/") {ck_yk3(v_ids, this_Obj,s_f);return;}
else if (s_f == "tyk/") {yk_d2(v_ids);return;}
else if (BDAD_ID5 != "notpc") ck_yk0(v_ids+"&m=1", this_Obj,s_f,"v");
else ck_yk0(v_ids, this_Obj,s_f,"v");
$(".notice2").html('<button onclick="ck_yk0(\''+v_ids+'\',this,\''+s_f+'\')" class="on"> 兼容模式</button> '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+'关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}

function ck_yk2(v_ids, this_Obj,s_f) {
	$('.error').remove();
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://v.youku.com/v_show/id_"+v_ids+".html";
return;
}

if (!isNaN(v_ids) || v_ids.length == 11) {
	t_hn(v_ids,this_Obj);
	return;
}
if (!isNaN(v_ids.substring(0,3))) {
ck_yk(v_ids, this_Obj,'yk/');
return;
}
yk_d2(v_ids,this_Obj);

if (s_f == 1 || (v_ids.substring(0,3) == "XMT" && s_f !=0 )) {
//ck_yk(v_ids, this_Obj,'yk2/','m');
//$(".notice2").html("<button onclick=\"ck_yk2('"+v_ids+"',this,0)\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况"); 
return;
}
//yk_d12(v_ids,this_Obj);
$(".notice2").html("<button onclick=\"ck_yk('"+v_ids+"', this,'yk2/','m')\"> 兼容模式</button> " +"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况"); 
}

function ck_yk3(v_ids, this_Obj,s_f,d) {
	$('.error').remove();
	if (!s_f) s_f = "yk/";
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://v.youku.com/v_show/id_"+v_ids+".html";
return;
}
if (typeof(d) == "undefined" ) {
if (bIsEdge) d="b";
else d = "b";
}
//&& !bIsEdge
if (!d) d = "";
var height = 408;
var width = "100%";
if (BDAD_ID5 == "notpc") {
//if (!d) d = "x";
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
$(".notice2").html('<button onclick="ck_yk3(\''+v_ids+'\',\'\',\''+s_f+'\',\''+ (d?(d=="v"?"b":""):"v") + '\')"'+ (d?' class="on"':'') + '> 兼容模式</button> '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+(d?'关闭':'打开')+'左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');

}
else $(".notice2").html('<button onclick="ck_yk3(\''+v_ids+'\',\'\',\''+s_f+'\',\''+ (d?(d=="v"?"b":""):"v") + '\')"'+ (d?' class="on"':'') + '> 兼容模式</button> '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+(d?'关闭':'打开')+'左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');

$("#wplay").attr("style","");
if ((bIsWX && s_f =="yk/" && bIsAndroid)) {
$(".notice2").html('<button onclick="ck_yk3(\''+v_ids+'\',\'\',\''+s_f+'\',\''+ (d?(d=="v"?"b":"x"):"v") + '\')"'+ (d?' class="on"':'') + '> 兼容模式</button> '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+(d?'关闭':'打开')+'左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}
if (d =="x") {
height = height+40;
$(".notice2").html('<button onclick="ck_yk3(\''+v_ids+'\',\'\',\''+s_f+'\',\''+ (d?(d=="v"?"b":"v"):"v") + '\')">  兼容模式</button> '+(bIsWX?'微信中':'')+'<em>每3分钟</em>一分段,'+(bIsWX?'<em>点击右上角,在浏览器打开可解决</em> ':'')+(d?'关闭':'打开')+'左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}

if (s_f =="yk/") {
if (bIsMi) {$(".notice2").html('<button onclick="ck_yk3(\''+v_ids+'\',\'\',\''+s_f+'\',\''+ (d?(d=="v"?"b":""):"v") + '\')"'+ (d?' class="on"':'') + '>  兼容模式</button> '+'<em>小米浏览器播放有问题,请换&nbsp;QQ浏览器观看</em> '+(d?'关闭':'打开')+'左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');}
//if (bIsIE || bIsEdge) {$(".notice2").html('<button onclick="ck_yk3(\''+v_ids+'\',\'\',\''+s_f+'\',\''+ (d?(d=="v"?"b":""):"v") + '\')"'+ (d?' class="on"':'') + '>  兼容模式</button> '+'<em>IE浏览器播放有问题,请换&nbsp;QQ浏览器观看</em> '+(d?'关闭':'打开')+'左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');}
}
var host = "https://p1.y3600.com/ckyk/";
if (BDAD_ID5 == "notpc" || (d !="" && !bIsIE)) host = "https://p1.y3600.com/ckyk/";

document["getElementById"]("wplay")["innerHTML"] = "<IFRAME id='movie_player' name='movie_player' src='"+ host + v_ids +(d?"&d="+d:"")+"&2.html' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'><\/IFRAME>";
if (BDAD_ID5 == "notpc") {

if (bIsMi) $(".notice2").html('本视频来自ACFUN，<em>小米浏览器播放有问题,请换&nbsp;QQ浏览器观看</em> 尝试切换下方的<em>优酷</em>至<em>土豆</em>,希望可以播放 '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em>');
else if (bIsAndroid) $(".notice2").html('本视频来自ACFUN，<em>安卓手机播放时，需要加载一会,也可能无法播放</em> 尝试切换下方的<em>优酷</em>至<em>土豆</em>,希望可以播放 '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> ');
else $(".notice2").html('本视频来自ACFUN，<em>暂时只支持 安卓手机 播放</em> 尝试切换下方的<em>优酷</em>至<em>土豆</em>,希望可以播放 '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> ');
}
else $(".notice2").html('本视频来自ACFUN，<em>暂时只支持 安卓手机 播放，也可能无法播放</em> 提示文件下载的，<em>请换QQ浏览器</em><br>&nbsp;&nbsp;&nbsp;&nbsp; 尝试切换下方的<em>优酷</em>至<em>土豆</em>,希望可以播放 '+'<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> ').css("height","55px");
}

function d_mg1(v_ids, this_Obj) {
ck_yk(v_ids, this_Obj,'url/');
$(".notice2").html("<button onclick=\"d_mg2('"+v_ids+"')\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");
}

function d_mg(l_i, this_Obj) {
if (l_i.length < 10) l_i = "https://www.mgtv.com/b/100001/"+l_i+".html";
if (BDAD_ID5 == "notpc") d_mg1(l_i, this_Obj);
else d_mg2(l_i, this_Obj);
}

function d_mg2(l_i, this_Obj) {
	$('.error').remove();
try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "https://" + l_i;
return;
}
var sReg  =  '.+?\\/(\\d+)\\.html';
var re=new RegExp(sReg,"gi");
re.exec(l_i);
var id = RegExp.$1;

	var fo = new SWFObject("https://player.mgtv.com/mango-tv3-main/MangoTV_3.swf", "movie_player", "100%", "440", 7, "#000000");
	fo["addVariable"]("play_type=1&video_id=" + id + "&1","1");
	fo["addParam"]("allowFullScreen", "true");
	fo["addParam"]("AllowScriptAccess", "never");
	fo["addParam"]("wmode", "transparent");
	if (!fo["write"]("wplay")) {
		window["focus"]();
	};
	if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
$("#wplay").attr("style","");
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://m.mgtv.com/#/play/" + id + "' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
	};	
	$(".notice2").html("<button onclick=\"d_mg1('"+l_i+"')\" class=\"on\"> 兼容模式</button> " + '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况");
};

function tyun(l_i) {
document["getElementById"]("wplay")["innerHTML"] = "";
$(".notice2").html("<em>该视频已经&nbsp;!!!失效!!!</em> 请切换下方的<em>优酷</em>至<em>其它</em>,可改善无法播放或者卡顿等情况");
}

function tnav(v_ids, this_Obj,ctrl,s_f,d,ssl) {
$('.error').remove();
try {if (!this_Obj) this_Obj = window.event.srcElement;	}catch(e) {	}
if (!ctrl) ctrl ="yk_d22";
if (!d) d ="";
if (!ssl) ssl ="";
if (typeof s_f == "undefined" || !s_f) s_f ="";

var height = 450;
var width = "100%";

if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
}
$("#wplay").attr("style","");
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='http"+ssl+"://p.y3600.com/nav.html?"+ctrl+"(\""+v_ids+"\",this,\""+s_f+"\",\""+d+"\")' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
};

function ck_tyk(v_ids, this_Obj, s_f,d) {
	if (!s_f) s_f = "tyk1/";
	if (!d) d = "";
	$('.error').remove();
	try {
	if (!this_Obj) this_Obj = window.event.srcElement;
	}catch(e) {	}
if( isover != 0) {
this_Obj.target="_blank";
this_Obj.href= "//video.tudou.com/v/"+v_ids+".html";
return;
}
var height = 408;
var width = "100%";

if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58)+40;

}
$("#wplay").attr("style","");
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://p1.y3600.com/cktyk/" + v_ids + "&type="+s_f+"&1.html' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
if (s_f=="tyk1/") {s_f = "tyk/";}

if (BDAD_ID5 == "notpc") {
$(".notice2").html("<button onclick=\"ck_yk('"+v_ids+"',this,'"+s_f+"','"+d+"')\"> 兼容模式</button> "+'微信中<em>每6分钟</em>一分段,<em>点击右上角,在浏览器打开可解决</em>'+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
}
else {
$(".notice2").html("<button onclick=\"ck_yk('"+v_ids+"',this,'"+s_f+"','"+d+"')\"> 兼容模式</button> "+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
}
};

function ck_tyk1(v_ids, this_Obj) {
ck_yk(v_ids,this_Obj,'tyk/');
$(".notice2").html("<button onclick=\"yk_d21('"+v_ids+"',this)\" class='on'> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
}

function yk_d2(v_ids, this_Obj) {
	//if (BDAD_ID5 == "notpc") yk_d21(v_ids,this_Obj);
	//else {	ck_tyk(v_ids, this_Obj,"tyk1/");
//$(".notice2").html("<button onclick=\"ck_tyk1('"+v_ids+"',this)\"> 兼容模式</button> " + '<em>视频播放&nbsp;6分钟&nbsp;后,会自动播放后继的内容</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");	
//}
if (!isNaN(v_ids) || v_ids.length == 11) { t_hn(v_ids,this_Obj); return;}
else yk_d22(v_ids,this_Obj);
//$(".notice2").html("<button onclick=\"ck_tyk('"+v_ids+"', this,'yk2/')\"> 兼容模式</button> " +"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况"); 

//$(".notice2").html("<button onclick=\"ck_yk('"+v_ids+"',this,'tyk/','m')\"> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
}


function yk_d21(v_ids, this_Obj) {
	//tnav(v_ids,this_Obj,"yk_d211");
	//return;
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
};
//function yk_d3(v_ids, this_Obj) {tnav(v_ids,this_Obj,"yk_d211");}
function yk_d211(v_ids, this_Obj) {
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

if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
$("#wplay").attr("style","");
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://video.tudou.com/v/" + v_ids + ".html' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";
}
else {
var fo = new SWFObject("//static.youku.com/v/custom/upsplayer/player.swf", "movie_player", width, height, 7, "#000000");
fo["addVariable"]("flashvars", "&playerId=tdnws&autoPlay=true&skin=https://static.youku.com/v/custom/upsplayer/skin/tdnws.swf&lang=td&vcode=" + v_ids + "&cna=cXKeERzx4TECAUExRL3F6Ye1&ytid=-1");
fo["addParam"]("allowFullScreen", "true");
fo["addParam"]("allownetworking", "internal");
fo["addParam"]("allowscriptaccess", "never");
fo["addParam"]("wmode", "transparent");

if (!fo["write"]("wplay")) {window["focus"]();};
}
$(".notice2").html("<button onclick=\"ck_yk('"+v_ids+"',this,'tyk/','m')\" class='on'> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"关闭左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");
};

function yk_d22(v_ids, this_Obj) {
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

if (BDAD_ID5 == "notpc") {
var width = document["getElementById"]("wplay").clientWidth;
var height = parseInt(width*0.58);
}
$("#wplay").attr("style","");
document["getElementById"]("wplay")["innerHTML"] = "<IFRAME src='https://p1.y3600.com/yk/" + v_ids + "&1.html' height='"+height+"' width='"+width+"' scrolling='no' frameBorder='0' allowfullscreen='true'></IFRAME>";

$(".notice2").html("<button onclick=\"yk_d21('"+v_ids+"',this)\"> 兼容模式</button> "+ '<em id="wx_notice"'+ (bIsWX?"":' style="display:none;"') +'">微信中&nbsp;黑屏或无法全屏,点击右上角,在浏览器中打开</em> '+"打开左侧<em>兼容模式</em>,或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放或者卡顿等情况");

};
function ck_m3u8(v_ids,this_Obj) {
if (v_ids.search(/@@hd\.m3u8/i) > 1) ck_yk(v_ids,this_Obj,"hls/","hls");
else ck_yk(v_ids,this_Obj,"um/","um");
$(".notice2").html('此视频&nbsp;<em>不稳定</em>,可能需要&nbsp;<em>等待很久</em>,或者<em>无法播放</em> '+'或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}

function ck_ba(v_ids,this_Obj) {
ck_yk(v_ids,this_Obj,"ba/","v");
$(".notice2").html('此视频&nbsp;<em>苹果</em> 可能无法播放,请尝试用<em>安卓 或者 电脑</em>播放 '+'或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');

}

function ck_sev(v_ids,this_Obj) {
document["getElementById"]("wplay")["innerHTML"]="";
$(".notice2").html('此视频&nbsp;<em>无法播放</em> '+'或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
	
}

function ck_sed(v_ids,this_Obj) {
if (v_ids.substring(0,5) == "88888") {
document["getElementById"]("wplay")["innerHTML"]="";
$(".notice2").html('此视频&nbsp;<em>出现故障。我们会逐步更新</em> '+'或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}
else doif('/do/opent'+'vts1t'+'s.php?v='+v_ids,this_Obj,0,0,'default');

}
function ck_m42(v_ids,this_Obj) {
doif('/do/mp42.php?v='+v_ids,this_Obj,0,0,'default');
//document["getElementById"]("wplay")["innerHTML"]="";
//$(".notice2").html('此视频&nbsp;<em>无法播放</em> '+'或切换下方的<em>优酷</em>至<em>土豆</em>,可改善无法播放等情况');
}
function ck_ba7(v_ids,this_Obj) {
ck_yk(v_ids,this_Obj,"ba7/");
}
function ck_bay(v_ids,this_Obj) {
ck_yk(v_ids,this_Obj,"bay/");
}
function ck_bat(v_ids,this_Obj) {
ck_yk(v_ids,this_Obj,"bat/");
}
if (typeof mathrand == "undefined") var mathrand = Math.random();
var ds = document.createElement('script');
ds.id = "byway";
ds.type = 'text/javascript';
ds.async = true;
ds.src = '/js/byway.js?' + (mathrand?mathrand:Math.random());
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);