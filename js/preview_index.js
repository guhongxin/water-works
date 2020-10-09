 /**
  * 初始化运行
  */
//主项目标识
var mainProName;
//站点Id
var stationId;
//泵房Id
var pumpId;
//泵房参数
var param;
//VR 高度 宽度
var VRheight;
var VRwidth;
var VRflag=true;
//视频区域宽度、高度
var playWnd_width;
var playWnd_height;
var overallObj = {};
var isErrorMsgRefresh = true;
var isInitDataRefresh = true;
var cameraDevice;
var cameraDeviceList;

var areaName;
var stationName;
var cimName;
var pumpName;
var cimNo;


$(function(){
	$(document).keydown(function(e){
	    var key =  e.which || e.keyCode;;
	    if(key == 27 || key == 122){
	    	fullScreen("lessen_icon");
	    }
	});
	//判断请求中是否包含全屏参数
	$(window.frameElement).attr("allowfullscreen","true");
	//初始主项目标识
	mainProName = $("#mainProName").val();
	//初始页面样式
	initStyle();
	//初始站点泵房信息
	initStationPump();
	//水质数据按钮增加点击事件
	$("#ifrPage").height(VRheight);
	$("#ifrPage").width(VRwidth-32);
	getVR(pumpId);
	$(".conRight_b .data_span").click(function(){
		$(".conRight_b .data_span").removeClass("select");
		$(this).addClass("select");
		//加载水质数据
		loadSzsjEchart(document.getElementById("szsj"),$(this).attr("name"));
	});
	
	//延迟初始化数据
	setTimeout(function(){
		//初始页面数据
		$(".zhezhaoc").show();
		initData();
		$(".zhezhaoc").hide();
	},10);
	
	//增加页面大小改变事件
	$(window).resize(function(){
//	   window.location.reload();
		initStyle();
	});
	//设置定时刷新任务--10分钟
	setInterval(function(){
		initStationPump();
		if(stationId != null && stationId != "" && pumpId!=null && pumpId != "" && isInitDataRefresh){
			isInitDataRefresh = false;
//			$(".zhezhaoc").show();
			initData();
			$(".zhezhaoc").hide();
		}
	},1.5*60*1000);
	//设置定时刷新报警信息--3秒钟
	
	setInterval(function(){
		if(isErrorMsgRefresh){
			isErrorMsgRefresh = false;
			initStationPump();
			loadErrorMsgInfo();
		}
	},10*1000);
	//延迟一秒加载视频控件
	/*playSXTSP(function(src){
		$("#kzt_sxt source").attr("src",src);
		var player = videojs('kzt_sxt', {}, function(){console.log('videojs播放器初始化成功')});
        player.play();
	});*/
	//控制台增加点击事件
	/*$("#kzt").click(function(){
		//window.parent.addTab($(window.frameElement).parents("body").find("a[data-href='/ecgs/camera/index?stationId="+stationId+"&pumpId="+pumpId+"']"));
		js.addTabPage('631ecea5648141e794e56fa7c30571b1','<i class="fa icon-camrecorder"> </i> 视频监控',ctx+'/ecgs/camera/index?stationId='+stationId+"&pumpId="+pumpId, true);
	});*/
	//增加泵组总功耗详情点击事件
	$("#bzzghxq_div").click(function(){
		$("#bzzghxq_div").hide();
	});
	// $("body")[0].style.zoom=0.8;
	$("body").niceScroll({cursorcolor:"gray",cursoropacitymax: 0.5});
	initVideo();
});

/**
 * 初始站点泵房信息
 */
var initStationPump = function(){
	stationId = $("#stationId").val();
	pumpId = $("#pumpId").val();
	param = {stationId:stationId,pumpId:pumpId};
}

/**
 * 初始化页面样式
 */
var initStyle = function(){
	//删除系统自带样式
	//$("head link").remove();
	//判断页面高度与主区域高度的区别
	if($("body").height() > $("#main_content").height()){
		 $("#main_content").height($("body").height());
	}
	//确定中间部分高度，根据页面自适应
	$("#content_div").height($("#main_content").height() - $("#top_div").height() - $("#foot_div").height()-20);
	//中间区域左右两边宽度
	var leftRightWidth = ($("#content_div").width()- $("#content_center").width()-72)/2;
	VRwidth = $("#content_center").width();
	//加载左边区域样式，实现基础自适应
	$("#content_left").width(leftRightWidth);
	$("#content_left .fourCape").width(leftRightWidth);
	$("#content_left .conLeft_c").height($("#content_left").height()-555);
	$('<style>#content_left .fourCape:before{width:'+ (leftRightWidth-20) +'px; left:10px;}</style>').appendTo('#content_left');
	$('<style>#content_left .conLeft_c:after{height:'+ ($("#content_left").height()-575) +'px; }</style>').appendTo('#content_left');
	$("#content_left .zcslGh").width((leftRightWidth - 40)/2);
	$("#jcksyl").height($(".conLeft_b").height() - 60);
	//$("#dqcsl_chart,#bzzgh_chart").height($(".conLeft_c").height() - 50);
	$("#bz_info").height($(".conLeft_bb").height() - 60);

	//加载右边区域样式，实现基础自适应
	$("#content_right").width(leftRightWidth);
	$("#content_right .fourCape").width(leftRightWidth);
	$("#content_right .conRight_a .wdSdTq").width(($("#content_right .conRight_a").width()-30)/3);
	$("#content_right .conRight_a .shidu").css("left",($("#content_right .conRight_a .wendu").width() + 15) +"px");
	$("#content_right .conRight_a .verticalLine").eq(0).css("left",($("#content_right .conRight_a .wendu").width() + 15) +"px");
	$("#content_right .conRight_a .verticalLine").eq(1).css("left",($("#content_right .conRight_a .wendu").width() + $("#content_right .conRight_a .shidu").width() + 15) +"px");
	
	$("#szsj").height($(".conRight_b").height() - 60);
	//加载中间区域样式，实现基础自适应
	$("#content_right .conRight_c").height($("#content_right").height()-555);
	$("#kzt").height($(".conRight_c").height() - 60);
	$('<style>#content_right .fourCape:before{width:'+ (leftRightWidth-20) +'px; left:10px;}</style>').appendTo('#content_right');
	$('<style>#content_right .conRight_c:after{height:'+ ($("#content_right").height()-575) +'px; }</style>').appendTo('#content_right');
	var co_ce_footHeight = $("#content_center").height() - $("#content_center .co_ce_top").height() - $("#content_center .co_ce_content").height()-14;
	$("#content_center .co_ce_foot").height(co_ce_footHeight);
	VRheight =$("#content_center .co_ce_content").height();
	if(co_ce_footHeight > $("#content_center .co_ce_foot").height()){
		$("#content_center .center_margin").height((co_ce_footHeight-$("#content_center .co_ce_foot").height())/2);
	}
	$("#content_center .ce_foot_content .bJTInfo").height($("#content_center .co_ce_foot").height() - 40);
	$('<style>#content_center .ce_foot_content .bJTInfo:after{height:'+ ($("#content_center .co_ce_foot").height() -60) +'px; top:10px; }</style>').appendTo('#content_left');
	$("#content_center .ce_foot_content .bJTInfo .bJTInfo_content,#content_center .ce_foot_content .bJTInfo .xzbj").height($("#content_center .co_ce_foot .bJTInfo").height() - 30);
	$("#content_center .bJTInfo .bJTInfo_content .bJTInfo_num").css("line-height",$("#content_center .ce_foot_content .bJTInfo .bJTInfo_content").height()+"px");
	//设置视频播放长宽
	playWnd_width = parseInt($("#kzt").width());
	$("#playWnd").width(playWnd_width);
	playWnd_height = parseInt($("#kzt").height());
	$("#playWnd").height(playWnd_height);
	$("#playWnd").css("margin","0 auto;");
}

/**
 * 初始化页面数据
 */
var initData = function(){
	
	var nowDate = new Date();
	var dayNum = nowDate.getDay();
	var dayDom = $("#top_div span[name='day']");
	switch (dayNum) {
	  case 0: dayDom.text("星期日"); break;
	  case 1: dayDom.text("星期一"); break;
	  case 2: dayDom.text("星期二"); break;
	  case 3: dayDom.text("星期三"); break;
	  case 4: dayDom.text("星期四"); break;
	  case 5: dayDom.text("星期五"); break;
	  case 6: dayDom.text("星期六"); break;
	  default : "";
	}
	$("#top_div span[name='time']").text(nowDate.getHours() + ":" + nowDate.getMinutes());
	//查询泵房信息
	var pumpData = sendAjaxTB('/water/pumpDetails/findWaterPumpInfo',param);
	if(pumpData.code == 0){
		//加载泵房信息及欢迎词
		loadBfInfoAndWelcomeMsg(pumpData.data,pumpData.welcomeMsg);
	}else{
		//$.modal.msg("加载泵房基本信息"+pumpData.msg);
		$.modal.msgError("加载泵房基本信息"+pumpData.msg);
		//$.modal.alert("加载泵房基本信息"+pumpData.msg);
	}
	
	//查询泵房配置信息
	var pumpData = sendAjaxTB('/water/pumpDetails/findPumpDetailsWaterTank',param);
	if(pumpData.code == 0){
		//加载泵房信息及欢迎词
//		loadBfInfoAndWelcomeMsg(pumpData.data,pumpData.welcomeMsg);
		var tankLevel = pumpData.data.tankLevelSensor ;
			if(tankLevel.length  > 0){
				//存在水箱
				$(".sxyw").show();
			}else{
				$(".sxyw").hide();
			}
	}else{
		//$.modal.msg("加载泵房基本信息"+pumpData.msg);
		$.modal.msgError("加载泵房基本信息"+pumpData.msg);
		//$.modal.alert("加载泵房基本信息"+pumpData.msg);
	}
	
	
	
	//加载进/出口水压力数据
	var jcksylData = sendAjaxTB('/water/pumpDetails/findinOutletPressure',param);
	if(jcksylData.code == 0){
		var bfInfo = $(".bengfang_div").data("bfInfo");
		if(!(bfInfo && bfInfo.offLineStatus == "2")){
			loadJcksylEchart(document.getElementById("jcksyl"),jcksylData.data);
		}
	}else{
		$.modal.msgError("加载进出水压力信息"+jcksylData.msg);
	}

	
	//获取泵组产水量和总功耗数据
	var bzcslAndZgh = sendAjaxTB('/water/pumpDetails/findPumpFlowOrEnergy',param);
	if(bzcslAndZgh.code == 0){
		/*var data = bzcslAndZgh.data;
		//泵组区域顺序
		//var cimArray = ["低区","中区","中高区","高区","超高区","最高区"];
		var cimArray = [];
		//产水量最大值
		var bzcslMax = 50;
		//总功耗最大值
		var bzzghMax = 50;
		var bzcslData = {};
		var bzzghData = {};
		
		//bzcslData.series_view = [0,0,0,0,0,0];
		//bzcslData.series_sj = [0,0,0,0,0,0];
		//bzzghData.series = [0,0,0,0,0,0];
		bzcslData.series_view = [];
		bzcslData.series_sj = [];
		bzzghData.series = [];
		for(var i=0; i<data.length; i++){
			var cimData = data[i];
			var bCsl = cimData.pumpFlow*1;
			var bZgh = cimData.pumpSysPwr*1;
			if(bCsl > bzcslMax){
				bzcslMax = (parseInt(bCsl/50) + 1)*50;
			}
			if(bZgh > bzzghMax){
				bzzghMax = (parseInt(bZgh/50) + 1)*50;
			}
			//var index = getArrayIndex(cimArray,cimData.cimName);
			//bzcslData.series_sj[index] = bCsl <0 ? 0:bCsl;
			//bzcslData.series_view[index] = bCsl <0 ? 0: bCsl > 500 ? 500:bCsl;
			//bzzghData.series[index] = bZgh < 0? 0:bZgh;
			cimArray.push(cimData.cimName);
			bzcslData.series_sj.push(bCsl <0 ? 0:bCsl);
			bzcslData.series_view.push(bCsl <0 ? 0: bCsl > 500 ? 500:bCsl);
			bzzghData.series.push(bZgh < 0? 0:bZgh);
		}
		
		var indicator_csl=[];
		var indicator_zgh=[];
		for(var i=0; i< cimArray.length; i++ ){
			var cimObj_csl = {};
			cimObj_csl.name = cimArray[i];
			cimObj_csl.max = bzcslMax;
			indicator_csl.push(cimObj_csl);
			var cimObj_zgh = {};
			cimObj_zgh.name = cimArray[i];
			cimObj_zgh.max = bzzghMax;
			indicator_zgh.push(cimObj_zgh);
		}
		bzcslData.indicator = indicator_csl;
		bzzghData.indicator = indicator_zgh;
//			bzcslData.series_view=[100,200,300,400,100,200];
		//加载泵组产水量
		loadDqcslEchart(document.getElementById("dqcsl_chart"),bzcslData);
		//加载泵组总功耗
		loadBzzghEchart(document.getElementById("bzzgh_chart"),bzzghData);*/
		
		loadbzInfoEchart(document.getElementById("bz_info"),bzcslAndZgh.data);
	}else{
		$.modal.msgError("加载泵组产水量和总功耗信息"+bzcslAndZgh.msg);
	}
	
	//加载水质数据
	var szsjData = sendAjaxTB('/water/pumpDetails/findQualityInfo',param);
	if(szsjData.code == 0){
//			szsjData.data = {
//					"dirtyArry": ["-0.2", "-0.5", "-0.9"],
//					"phArry": ["7", "8", "6"],
//					"rchlorArry": ["0.02", "0.05", "0.08"],
//					"pumpId": "decfcaa001104478b8438dc243f6f5b0",
//					"stationId": "928f59c75d9248ee9cf99a00f32c9a86",
//					"timeArry": ["2019-12-09 20:24:13", "2019-12-09 20:24:17", "2019-12-09 20:24:21"]
//					};
		$("#content_right .conRight_b").data("jcksylData", szsjData.data);
		//加载水质数据
		$(".conRight_b .data_span").eq(0).click();
	}else{
		$.modal.msgError("加载水质信息"+szsjData.msg);
	}
	
	 
	//加载运行状态数据
	$("#content_center .co_ce_content .sjx_bf_d,#content_center .co_ce_content .pingtai_div").hide();
	var runSatusData = sendAjaxTB('/water/pumpDetails/findCimOrPumpInfo',param);
	if(runSatusData.code == 0){
		//加载运行状态数据
		loadRunSatusData(runSatusData.data);
	}else{
		$.modal.msgError("加载泵组及单泵信息"+runSatusData.msg);
	}
	
	//加载警报信息
	loadErrorMsgInfo();
	
	isInitDataRefresh = true;
}

/**
 * 查找元素在数组中的索引
 */
var getArrayIndex = function(array,str){
	var index = -1;
	for(var i=0; i< array.length; i++){
		if(str == array[i]){
			index = i;
			break;
		}
	}
	return index;
}


/**
 * 加载泵房信息及欢迎词
 */
var loadBfInfoAndWelcomeMsg = function(bfInfo,welcomeMsg){
	areaName = bfInfo.areaName;
	stationName = bfInfo.stationName;
	pumpName = bfInfo.pumpName;
	
	$(".bengfang_div").data("bfInfo",bfInfo);
	if(bfInfo.pumpName == null || bfInfo.pumpName == ""){
		bfInfo.pumpName = "清江山水四号泵房";
	}
	if(bfInfo.pumpNameEn == null || bfInfo.pumpNameEn == ""){
		bfInfo.pumpNameEn = "QINGJIANG LANDSCAPE FOUR PUMP HOUSE";
	}
	if(bfInfo.scrollMsg == null || bfInfo.scrollMsg == ""){
		bfInfo.scrollMsg = "欢迎省厅领导前来我司参观考察智慧泵房系统";
	}
	$(".bengfang_div .bfName span").text(bfInfo.pumpName);
	$(".bengfang_div .bfEnName span").text(bfInfo.pumpNameEn);
	$(".welcome_div .welcome_msg").text(bfInfo.scrollMsg);
	//上报时间
	$("#time_sb").text(bfInfo.uploadTime);
	
	//加载总产水量和功耗
	if(bfInfo.totalFlow.length>3 && bfInfo.totalFlow.length < 7){
		$(".zcsl .totalWater").css("font-size","28px");
	}else if(bfInfo.totalFlow.length>6){
		$(".zcsl .totalWater").css("font-size","20px");
	}
	$(".zcsl .totalWater").text(bfInfo.totalFlow);
	$(".zcsl .yesTotalWater").text(bfInfo.yesTotalFlow);
	if(bfInfo.totalSysPwr.length>3 && bfInfo.totalSysPwr.length < 7){
		$(".gongh .powerWaste").css("font-size","28px");
	}else if(bfInfo.totalSysPwr.length>6){
		$(".gongh .powerWaste").css("font-size","20px");
	}
	$(".gongh .powerWaste").text(bfInfo.totalSysPwr);
	$(".gongh .yesPowerWaste").text(bfInfo.yesTotalSysPwr);

	
	//加载湿度、温度、天气
	if(bfInfo && bfInfo.offLineStatus == "2"){
		$("#temperature").text("--");
		$("#humidity").text("--");
	}else{
		if(bfInfo.temp != null){
			$("#temperature").text(bfInfo.temp.split(".")[0]);
		}
		if(bfInfo.humi != null){
			$("#humidity").text(bfInfo.humi.split(".")[0]);
		}
	}
	
	//初始为晴
	$("#weather").text("晴");
	//查询天气
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(bfInfo.lng, bfInfo.lat);
	var gc = new BMap.Geocoder();
	gc.getLocation(point, function(rs) {
		var addComp = rs.addressComponents;
//		js.showMessage(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
		//var tqData = sendAjaxTB("https://www.tianqiapi.com/api/?version=v6&appid=69494418&appsecret=CPRu978K&city="+addComp.district.substr(0,addComp.district.length-1));
		var tqData = sendAjaxTB("https://www.tianqiapi.com/api/?version=v6&appid=44499958&appsecret=DBPjT4tC&city="+addComp.district.substr(0,addComp.district.length-1));
		if($.common.isNotEmpty(tqData.wea)){
			$("#weather").text(tqData.wea);
			$("#weather").attr("title",tqData.wea);
		}
		if($.common.isNotEmpty(tqData.tem2) && $.common.isNotEmpty(tqData.tem1)){
			$("#weather_wd").text(tqData.tem2 + "~" + tqData.tem1);
		}else{
			$("#weather_wd").text("无~无");
		}
		
	});
	
	//泵房未脱机
	if(bfInfo && bfInfo.offLineStatus == "0"){
		//水箱位液
		$(".ce_foot_title .sxyw_num").text(bfInfo.waterLevel);
	}
	
	//泵房脱机
	if(bfInfo && bfInfo.offLineStatus == "2"){
		$("#co_top_bg").removeClass("co_top_bg");
		$("#co_top_bg").addClass("co_top_bg_gray");
		
		$(".sjx_bf_d").children(".pingt_bg").addClass("pingt_bg_gray");
		$(".sjx_bf_d").children(".pingt_bg").removeClass("pingt_bg");
		$(".sjx_bf_d").children(".pingt_name").css({"color":"#959595"});
		$("#pump_lixi").show();
	}
	
}


/**
 * 进/出水口压力柱状图初始化方法
 * @param {Object} conditions
 */
var loadJcksylEchart = function(dom,data){
	var type =[];
	var seriesData = [{name:"进水口压力",data:[]},{name:"出水口压力",data:[]}];
	for(var i=0; i<data.length; i++){
		type.push(data[i].cimName);
		seriesData[0].data.push(data[i].inp*1);
		seriesData[1].data.push(data[i].outPA*1);
	}
	
	var myChart = echarts.init(dom);
	//显示数据转换
	for(var i = 0; i< seriesData.length ; i++){
		seriesData[i].type = "bar";
		seriesData[i].barGap=0.3;
		seriesData[i].barWidth=20;
		if(i==0){
			seriesData[i].itemStyle={normal: {
	            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                offset: 0,
	                color: 'rgba(0, 255, 255, 1)',
	            }, {
	                offset: 1,
	                color: 'rgba(0, 255, 255, 0.1)'
	            }]),
	            shadowColor: 'rgba(0, 0, 0, 0.4)',
	            shadowBlur: 20
	        }};
			
		}else if(i==1){
			seriesData[i].itemStyle={normal: {
	            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                offset: 0,
	                color: 'rgba(49, 195, 90, 1)'
	            }, {
	                offset: 1,
	                color: 'rgba(49, 195, 90, 0.1)'
	            }]),
	            shadowColor: 'rgba(0, 0, 0, 0.4)',
	            shadowBlur: 20
	        }};
		}
		seriesData[i].label = {
			normal: {
		        show: true,
		        position:'top',
		        distance: 15,
		        align: 'center',
		        verticalAlign:'middle',
		        rotate: 0,
		        formatter: '{c}',
		        fontSize: 16,
		        rich: {
		            name: {
		                textBorderColor: '#fff'
		            }
		        },
		        textStyle: {
	                color: '#ccccd3'
	            }
		    }
		}
	}
	var option = null;
	option = {
		color: [ 'rgb(0, 255, 255)', 'rgb(49, 195, 90)'],
		tooltip : {
			trigger: 'axis',
			axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			data:["进水口压力","出水口压力"],
			textStyle: {
                color: '#ccccd3'
            }
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis : [
			{
				type : 'category',
				data :type,
				axisTick: {
					alignWithLabel: true
				},
				axisLabel: {
		            textStyle: {
		                color: '#a5a5af'
		            }
		        },
		        axisLine: {
					lineStyle: {
						color: '#1f2056'
					}
				},
		        splitLine:{
		        	show: true,//去除网格线
		        	lineStyle:{
		        		color:'#1e1f55'
	        		}
	        	}
			}
		],
		yAxis : [
			{
				name:'(bar)',
				type : 'value',
				axisTick: {
					alignWithLabel: true
				},
				nameTextStyle: {
	                color: '#88889a'
	            },
				//y轴颜色
				axisLine: {
					lineStyle: {
						color: '#1f2056'
					}
				},
				axisLabel: {
		            textStyle: {
		                color: '#a5a5af'
		            }
		        },
		        splitLine:{
		        	show: true,//去除网格线
		        	lineStyle:{
		        		color:'#1e1f55'
	        		}
	        	}
			}
		],
		series : seriesData
	};
	;
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}
	
	
	/**
	 * 泵组产水量/总功耗柱状图初始化方法
	 * @param {Object} conditions
	 */
	var loadbzInfoEchart = function(dom,data){
		var type =[];
		var seriesData = [{name:"产水量",data:[]},{name:"总功耗",data:[]}];
		for(var i=0; i<data.length; i++){
			type.push(data[i].cimName);
			seriesData[0].data.push(data[i].pumpFlow);
			seriesData[1].data.push(data[i].pumpSysPwr);
		}
		
		var myChart = echarts.init(dom);
		//显示数据转换
		for(var i = 0; i< seriesData.length ; i++){
			seriesData[i].type = "bar";
			seriesData[i].barGap=0.3;
			seriesData[i].barWidth=20;
			seriesData[i].yAxisIndex = i;
			if(i==0){
				seriesData[i].itemStyle={normal: {
		            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                offset: 0,
		                color: 'rgba(0, 255, 255, 1)',
		            }, {
		                offset: 1,
		                color: 'rgba(0, 255, 255, 0.1)'
		            }]),
		            shadowColor: 'rgba(0, 0, 0, 0.4)',
		            shadowBlur: 20
		        }};
			}else if(i==1){
				seriesData[i].itemStyle={normal: {
		            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                offset: 0,
		                color: 'rgba(255, 0, 0, 1)'
		            }, {
		                offset: 1,
		                color: 'rgba(255, 0, 0, 0.1)'
		            }]),
		            shadowColor: 'rgba(0, 0, 0, 0.4)',
		            shadowBlur: 20
		        }};
			}
			seriesData[i].label = {
				normal: {
			        show: true,
			        position:'top',
			        distance: 15,
			        align: 'center',
			        verticalAlign:'middle',
			        rotate: 0,
			        formatter: '{c}',
			        fontSize: 16,
			        rich: {
			            name: {
			                textBorderColor: '#fff'
			            }
			        },
			        textStyle: {
		                color: '#ccccd3'
		            }
			    }
			}
		}
		var option = null;
		option = {
			color: [ 'rgb(0, 255, 255)', 'rgb(49, 195, 90)'],
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				data:["产水量","总功耗"],
				textStyle: {
	                color: '#ccccd3'
	            }
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data :type,
					axisTick: {
						alignWithLabel: true
					},
					axisLabel: {
			            textStyle: {
			                color: '#a5a5af'
			            }
			        },
			        axisLine: {
						lineStyle: {
							color: '#1f2056'
						}
					},
			        splitLine:{
			        	show: true,//去除网格线
			        	lineStyle:{
			        		color:'#1e1f55'
		        		}
		        	}
				}
			],
			yAxis : [
				{
					name:'产水量(m³)',
					type : 'value',
					position: 'left',
					axisTick: {
						alignWithLabel: true
					},
					nameTextStyle: {
		                color: '#88889a'
		            },
					//y轴颜色
					axisLine: {
						lineStyle: {
							color: '#1f2056'
						}
					},
					axisLabel: {
			            textStyle: {
			                color: '#a5a5af'
			            }
			        },
			        splitLine:{
			        	show: true,//去除网格线
			        	lineStyle:{
			        		color:'#1e1f55'
		        		}
		        	}
				},
				{
					name:'功耗(kW)',
					type : 'value',
					position: 'right',
					axisTick: {
						alignWithLabel: true
					},
					nameTextStyle: {
		                color: '#88889a'
		            },
					//y轴颜色
					axisLine: {
						lineStyle: {
							color: '#1f2056'
						}
					},
					axisLabel: {
			            textStyle: {
			                color: '#a5a5af'
			            }
			        },
			        splitLine:{
			        	show: true,//去除网格线
			        	lineStyle:{
			        		color:'#1e1f55'
		        		}
		        	}
				}
			],
			series : seriesData
		};
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}
}

/**
 * 加载当前产水量
 */
var loadDqcslEchart = function(dom,data){
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		tooltip: {
			formatter: function (params) {
	            var indicatorData = myChart.getOption().radar[0].indicator;
	            var sj_data = data.series_sj;
	            var res='<span>'+params.name+'(m³)</span></br>' 
				for(var i=0;i<indicatorData.length;i++){
					res+='<span>'+indicatorData[i].name+':'+(sj_data[i]==0 ? 0 :sj_data[i])+'</span></br>'
				}
				return res;
	        }
		},
		radar: {
			name: {
				textStyle: {
					color: '#9d9da7',
					padding: [3, 0]
				},
				formatter: function(text){
				   	if(text != "低区" && text != "高区"){
				   		var textR = "";
			   			var strlength = text.length;
				   		for(var i=0; i< strlength-1;i++){
				   			textR += text[i]+'\n';
				   		}
				   		text = textR + text[strlength-1];
				   	}
			   		return text; 
				}
			},
			splitArea : {
	            show : false,
	            areaStyle:{
	            	color: ['rgba(250,250,250,1)','rgba(200,200,200,0.3)']
	            }
	        },
	        splitLine:{
	        	lineStyle:{
	        		color:'#1a1c50'
	        	}
	        },
	        axisLine:{
	            show : false
	        },
			indicator: data.indicator
		},
		series: [{
			name: '产水量',
			type: 'radar',
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
					offset: 0,
					color: 'rgba(99, 211, 236,0.8)'
				}, {
					offset: 1,
					color: 'rgba(12, 40, 169,0.8)'
				}])
			},
			lineStyle:{
				color:'rgba(13, 46, 200,0.1)'
			},
			data : [
				 {
					value : data.series_view,
					name : '产水量',
					symbolSize:2
				}
			]
		}]
	};;
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}

/**
 * 加载泵组总功耗
 */
var loadBzzghEchart = function(dom,data){
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		tooltip: {},
		radar: {
			name: {
				textStyle: {
					color: '#9d9da7',
					padding: [3, 0]
			   },
			   formatter: function(text){
				   	if(text != "低区" && text != "高区"){
				   		var textR = "";
			   			var strlength = text.length;
				   		for(var i=0; i< strlength-1;i++){
				   			textR += text[i]+'\n';
				   		}
				   		text = textR + text[strlength-1];
				   	}
			   		return text; 
			   	}
			},
			splitArea : {
	            show : false,
	            areaStyle:{
	            	color: ['rgba(250,250,250,1)','rgba(200,200,200,0.3)']
	            }
	        },
	        splitLine:{
	        	lineStyle:{
	        		color:'#1a1c50'
	        	}
	        },
	        axisLine:{
	            show : false
	        },
			indicator: data.indicator
		},
		series: [{
			name: '总功耗',
			type: 'radar',
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
					offset: 0,
					color: 'rgba(99, 211, 236,0.8)'
				}, {
					offset: 1,
					color: 'rgba(12, 40, 169,0.8)'
				}])
			},
			lineStyle:{
				color:'rgba(13, 46, 200,0.1)'
			},
			data : [
				{
					value :  data.series,
					name : '总功耗',
					symbolSize:2
				}
			]
		}]
	};;
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
		myChart.on('click',function(param){
	        $("#bzzghxq_div").show();
	    });
	}
}

/**
 * 加载水质数据
 */
var loadSzsjEchart = function(dom,type){
	var data = $("#content_right .conRight_b").data("jcksylData");
	var szsjName = "";
	var seriesName = "";
	var viewData = [];
	//整理已有记录
	var timeArry = data.timeArry;
	if(timeArry == null){
		return false;
	}
	var nowDate = new Date(timeArry[0]);
	var baseStr =  nowDate.getFullYear()+'-'+(nowDate.getMonth()+1) + "-" + nowDate.getDate();
	var PHData = [];
	var dirtyData = [];
	var rchlorData = [];
	for(var i=0; i< timeArry.length; i++){
		var phObj={};
		phObj.name=timeArry[i];
		phObj.value=[timeArry[i],data.phArry[i]*1];
		PHData.push(phObj);
		var dirtyObj={};
		dirtyObj.name=timeArry[i];
		dirtyObj.value=[timeArry[i],data.dirtyArry[i]*1];
		dirtyData.push(dirtyObj);
		var rchlorObj={};
		rchlorObj.name=timeArry[i];
		rchlorObj.value=[timeArry[i],data.rchlorArry[i]*1];
		rchlorData.push(rchlorObj);
	}
	if(type == "dirtyArry"){
		seriesName = "浊度";
		szsjName = "(NTU)";
		viewData = dirtyData;
	}else if(type == "rchlorArry"){
		seriesName = "余氟";
		szsjName = "(mg/L)";
		viewData = rchlorData;
	}else if(type == "phArry"){
		seriesName = "PH值";
		szsjName = "";
		viewData = PHData;
	}
	
	
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		tooltip: {
			trigger: 'axis',
			position: function (pt) {
				return [pt[0], '10%'];
			}
		},
		toolbox: {
			feature: {
				dataZoom: {
					yAxisIndex: 'none'
				},
				restore: {},
				saveAsImage: {}
			}
		},
		xAxis: {
			type: 'time',
	        tickMax: true,
	 		min: baseStr+" 00:00:00",
	        max: baseStr+" 24:00:00",
	        interval:7200000,
	        axisLabel:{
	        	formatter: function (value, index) {
	        	    var date = new Date(value);
	        	    return date.getHours();
	        	   
	        	},
	        	textStyle: {
	                color: '#a5a5af'
	            }
	        },
	        axisLine: {
				lineStyle: {
					color: '#1f2056'
				}
			},
	        splitLine:{
	        	show: true,//去除网格线
	        	lineStyle:{
	        		color:'#1e1f55',
	        		type:'dashed'
        		}
        	}
		},
		yAxis: {
			type: 'value',
			name:szsjName,
			boundaryGap: [0, '100%'],
			nameTextStyle: {
                color: '#88889a'
            },
			//y轴颜色
			axisLine: {
				lineStyle: {
					color: '#1f2056'
				}
			},
			axisLabel: {
	            textStyle: {
	                color: '#a5a5af'
	            }
	        },
	        splitLine:{
	        	show: false,//去除网格线
	        	lineStyle:{
	        		color:'#1e1f55'
        		}
        	}
		},
		dataZoom: [{
			type: 'inside',
			start: 0,
			end: 100,
			startValue:0,
			endValue:100
		}],
		series: [
			{
				name:seriesName,
				type:'line',
				smooth:true,
				symbol: 'none',
				sampling: 'average',
				itemStyle: {
					color: '#fff'
				},
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(25, 62, 166,1)'
					}, {
						offset: 1,
						color: 'rgba(25, 62, 166,0)'
					}])
				},
				data: viewData
			}
		],
		color: '#fff'
	};
	;
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}

/**
 * 切换视频效果
 */
var changeView = function(type){
	$("#kzt_title a").removeClass("select");
	$(event.target).addClass("select");
	if(type==4){
		$("#kzt").css("background","url(../img/preview/jkbg_four.jpg) no-repeat center");
	}else{
		$("#kzt").css("background","url(../img/preview/jkbg.jpg) no-repeat center");
	}
}

/**
 * 选择泵房取消方法
 */
var selectPumpCancel = function(){
	initStationPump();
	if(stationId == null || stationId == "" || pumpId==null || pumpId == ""){
		$.modal.msgError("未选择泵房站点");
		return false;
	}else{
		$("#selectPump").hide();
		return true;
	}
}

/**
 * 选择泵房确定方法
 */
var selectPumpSure = function(){
	$("#stationId").val($("[name='stationInfo']").val());
	$("#pumpId").val($("[name='pumpInfo']").val());
	if(selectPumpCancel()){
		//初始页面数据
		initData();
	}
}
/**
 * 打开选择泵房窗口
 * 
 */
var openSelectPump = function(){
	$("#selectPump").show();
}

/**
 * 加载运行状态数据
 */
var positionObj = {"低区":"diqu","中区":"zhongqu","中高区":"zhonggaoqu","高区":"gaoqu","最高区":"zuigaoqu","超高区":"chaogaoqu"};
var pumpStatusData = {"0":"关闭","1":"打开","2":"脱机"};
var isOnceLoad = true;
var loadRunSatusData = function(data){
	$("#content_center .co_ce_content .bengInfo .deng_div").remove();
	var bfInfo = $(".bengfang_div").data("bfInfo");
	
	if(bfInfo && bfInfo.offLineStatus == "2"){
		$("#co_top_bg").addClass("co_top_bg_gray");
		$("#co_top_bg").removeClass("co_top_bg");
	}else{
		$("#co_top_bg").addClass("co_top_bg");
		$("#co_top_bg").removeClass("co_top_bg_gray");
	}
	
	//首先全部隐藏
	for(var i=0; i<data.length; i++ ){
		var cimData = data[i];
		var cimType = positionObj[cimData.cimName];
		$("#content_center .co_ce_content .sjx_bf ."+cimType).show();
		var cimDom = $("#content_center .co_ce_content .bengInfo ."+cimType).show();
		if(cimData.runPumpsList != null){
			var pumpsLength = cimData.runPumpsList.length;
			if(isOnceLoad){
				var cimDomPosition = cimDom.position();
				//判断泵的数量来决定显示位置
				if(pumpsLength < 3){
					cimDomPosition.top = cimDomPosition.top+20;
					cimDomPosition.left = cimDomPosition.left-50;
					cimDom.css({'left':cimDomPosition.left+'px','top':cimDomPosition.top+'px'});
				}else if(pumpsLength > 2 && pumpsLength < 5){
					cimDomPosition.top = cimDomPosition.top+10;
					cimDomPosition.left = cimDomPosition.left-30;
					cimDom.css({'left':cimDomPosition.left+'px','top':cimDomPosition.top+'px'});
				}else if(pumpsLength > 4){
					
				}
			}
			
			for(var j=0; j< pumpsLength;j++){
				var pumpData = cimData.runPumpsList[j];
				var pumpDom = $('<div class="deng_div"></div>').appendTo(cimDom);
				//单泵状态，0关闭，1运行，2是脱机
				/*if(pumpData.errorCount > 0 || (bfInfo && bfInfo.offLineStatus == "2") ){
					pumpDom.addClass("pump_tj");
				}else{
					if(pumpData.status == "0"){
						pumpDom.addClass("pump_tj");
					}else if(pumpData.status == "1"){
						pumpDom.addClass("pump_yx");
					}
				}
				if(pumpData.status == "2"){
					pumpDom.addClass("pump_gz");
				}*/
				//泵房脱机
				if(bfInfo && bfInfo.offLineStatus == "2"){
					pumpDom.addClass("pump_tj");
					pumpDom.attr("title",pumpData.pumpName + "：" + "泵房脱机");
				}
				
				if(bfInfo && bfInfo.offLineStatus == "0"){
					if(pumpData.errorCode > 0){
						pumpDom.addClass("pump_gz");
					}else{
						if(pumpData.status == "0"){
							pumpDom.addClass("pump_tj");
						}else if(pumpData.status == "1"){
							pumpDom.addClass("pump_yx");
						}else if(pumpData.status == "2"){
							pumpDom.addClass("pump_tj");
						}
					}
					pumpDom.attr("title",pumpData.pumpName + ":" + pumpStatusData[pumpData.status]);
				}
				
				pumpDom.data("pumpData",pumpData);
				pumpDom.data("cimData",cimData);
				
			}
			
			//压力区泵全脱机后控制托盘
			var isAllPumpTJ = true ;
			for(var t=0; t<pumpsLength;t++){
				var echoPumpData = cimData.runPumpsList[t];
				if(bfInfo && bfInfo.offLineStatus != "2"){
					if(echoPumpData.status == "2"){
						isAllPumpTJ = isAllPumpTJ & true ;
					}else{
						isAllPumpTJ = isAllPumpTJ & false;
					}
				}
			}
			if(isAllPumpTJ){
				$(".sjx_bf_d."+cimType).children(".pingt_bg").addClass("pingt_bg_gray");
				$(".sjx_bf_d."+cimType).children(".pingt_bg").removeClass("pingt_bg");
				$(".sjx_bf_d."+cimType).children(".pingt_name").css({"color":"#959595"});
			}else{
				$(".sjx_bf_d."+cimType).children(".pingt_bg_gray").addClass("pingt_bg");
				$(".sjx_bf_d."+cimType).children(".pingt_bg").removeClass("pingt_bg_gray");
			}
			
			
			
		}
	}
	$("#content_center .co_ce_content .bengInfo .deng_div").click(function(){
		var pumpData = $(this).data("pumpData");
		var cimData = $(this).data("cimData");
		var bfInfo = $(".bengfang_div").data("bfInfo");
		$("#content_center .co_ce_content .bengInfo .deng_div").removeClass("pump_xz");
		$("#content_center .co_ce_content .bengInfo .deng_div").removeClass("pump_xz_yx");
		if((bfInfo && bfInfo.offLineStatus == "0")){
			if(pumpData.status == "0"){
				$(this).addClass("pump_xz");
			}else if(pumpData.status == "1"){
				$(this).addClass("pump_xz_yx");
			}else if(pumpData.status == "2"){
				$(this).addClass("pump_tj");
			}
		}
//			else if((bfInfo && bfInfo.offLineStatus == "1")){
//			$(this).addClass("pump_xz_yx");
//		}
		else if((bfInfo && bfInfo.offLineStatus == "2")){
			$(this).addClass("pump_tj");
		}
		$(".ce_foot_title .bInfo_name").text(cimData.cimName + pumpData.pumpName);
		//$(".ce_foot_title .sxyw_num").text(cimData.waterLevel);
		if((bfInfo && bfInfo.offLineStatus == "2")){
			$(".ce_foot_content .zyxsc .bJTInfo_num").text(0);
			$(".ce_foot_content .dqpl .bJTInfo_num").text(0);
			$(".ce_foot_content .zgh .bJTInfo_num").text(0);
			$(".ce_foot_content .djdl .bJTInfo_num").text(0);
		}else{
			$(".ce_foot_content .zyxsc .bJTInfo_num").text(pumpData.runtime);
			$(".ce_foot_content .dqpl .bJTInfo_num").text(pumpData.freq);
			$(".ce_foot_content .zgh .bJTInfo_num").text((pumpData.power/1000).toFixed(1));
			$(".ce_foot_content .djdl .bJTInfo_num").text(pumpData.current);
		}

		//刷新设置数据 
		setUpClick("show");
		
		cimName = cimData.cimName;
		cimNo = cimData.cim;
	});
	$("#content_center .co_ce_content .bengInfo .deng_div").eq(0).click();
	isOnceLoad = false;
}

/**
 * 点击设置按钮事件
 */
var setUpClick = function(type){
	if($("#setUp_div").css('display') == "none" || type == "show" ){
		//加载设置信息
		var cimData = $("#content_center .co_ce_content .bengInfo .pump_xz_yx").data("cimData") || $("#content_center .co_ce_content .bengInfo .pump_xz").data("cimData");
		if(cimData == null ){
			return false;
		}
		$("#setUp_div .setUp_top .title_text label").text(" ("+cimData.cimName+")");
		var cim = cimData.cim;
		var param = {stationId:stationId,pumpId:pumpId,cim:cim};
		var setUpData = sendAjaxTB('/water/pumpDetails/findCimSetInfo',param);
		$("#setUp_div .s_con .foot_btn").removeClass("select");
		$("#setUp_div .s_con").find(".autoCheck").prop("checked",false);
		if(setUpData.code == 0){
			var setData = setUpData.data;
			$("#setUp_div").data("setUpData",setData);
			$(".outPS_num").val(setData.pressureOutSet*1);
			
			//水泵运行状态：0无动作,1水泵强关,2水泵自动模式运行,3水泵强开
			if(setData.pumpStatus == "1"){
				$("#setUp_div .s_con").eq(1).find(".but_off").addClass("select");
			}else if(setData.pumpStatus == "2"){
				$("#setUp_div .s_con").eq(1).find(".autoCheck").prop("checked",true);
			}else if(setData.pumpStatus == "3"){
				$("#setUp_div .s_con").eq(1).find(".but_on").addClass("select");
			}
			$("#setUp_div [name='pumpStatus']").val(setData.pumpStatus);
			
			//进水阀门状态：0无动作,1水阀关闭,2水阀打开
			if(setData.tapInStatus == "1"){
				$("#setUp_div .s_con").eq(2).find(".but_off").addClass("select");
			}else if(setData.tapInStatus == "2"){
				$("#setUp_div .s_con").eq(2).find(".but_on").addClass("select");
			}
			$("#setUp_div [name='tapInStatus']").val(setData.tapInStatus);
			
			//出水阀门状态：0无动作,1水阀关闭,2水阀打开
			if(setData.tapOutStatus == "1"){
				$("#setUp_div .s_con").eq(3).find(".but_off").addClass("select");
			}else if(setData.tapOutStatus == "2"){
				$("#setUp_div .s_con").eq(3).find(".but_on").addClass("select");
			}
			$("#setUp_div [name='tapOutStatus']").val(setData.tapOutStatus);
		}else{
			$.modal.msgError("加载压力区设置信息"+setUpData.msg);
			
		}
		if(type == null){
			$("#setUp_div").show();
		}
	}else{
		$("#setUp_div").hide();
	}
}

/**
 * 开关点击事件
 */
var offOrOnClick = function(){
	var thisParentDom = $(event.target).parent();
	var nameAttr = thisParentDom.find("input[type='hidden']").attr("name");
	thisParentDom.find("input").removeClass("select");
	if($(event.target).attr("type") == "checkbox"){
		if($(event.target).prop("checked")){
			thisParentDom.find("input[type='hidden']").val("2");
			thisParentDom.find("input.but_on").removeClass("select");
			thisParentDom.find("input.but_off").removeClass("select");
		}else{
			thisParentDom.find("input.but_off").addClass("select");
			thisParentDom.find("input[type='hidden']").val("1");
		}
	}else if($(event.target).attr("type") == "button"){
		if(nameAttr == "pumpStatus"){
			thisParentDom.find("input[type='checkbox']").prop("checked",false);
			/*if($(event.target).hasClass("but_on")){
				value="3";
			}*/
			if($(event.target).hasClass("but_off")){
				value="1";
			}
		}else{
			var value="1";
			if($(event.target).hasClass("but_on")){
				value="2";
			}
		}
		
		$(event.target).addClass("select");
		thisParentDom.find("input[type='hidden']").val(value);
	}
}

/**
 * 保存泵组设置方法
 */
var saveSetUpData = function(){
	
	var setUpData = $("#setUp_div").data("setUpData");
	var saveSetUpData= {};
	saveSetUpData.id = setUpData.id;
	saveSetUpData.pressureOutSet = $("input[name='outPS']").val()+"";
	saveSetUpData.pumpStatus = $("input[name='pumpStatus']").val();
	saveSetUpData.tapInStatus = $("input[name='tapInStatus']").val();
	saveSetUpData.tapOutStatus = $("input[name='tapOutStatus']").val();
	saveSetUpData.password = $("input[name='password']").val();
	saveSetUpData.cim = setUpData.cim;
	saveSetUpData.pumpId = setUpData.pumpId;
	$("#setUp_btn").attr('disabled',true);
	$.ajax({
		url : '/water/pumpDetails/saveCimSetInfo',
		data : saveSetUpData,
		method : 'post',
		dataType : 'json',
		async:false,
		success : function(data) {
			$("#setUp_btn").removeAttr('disabled');
			if (data) {
				if(data.code == 0){
					$.modal.msgSuccess("保存成功");
					//清空密码
					$("input[name='password']").val("")
				}else{
					$.modal.msgError("保存失败:"+data.msg);
				}
			} else {
				$.modal.msgError("数据加载异常请联系管理员");
			}
		},
	    error: function (jqXHR, textStatus, errorThrown) {
	        /*错误信息处理*/
	    	$("#setUp_btn").removeAttr('disabled');
	    	$.modal.msgError("数据加载异常请联系管理员");
	    }
	});
}
/**
 * 点击预警信息事件
 */
var alertInfoClick = function(){
	if($("#alertInfo_div").css('display') == "none"){
		$("#alertInfo_div").show();
	}else{
		$("#alertInfo_div").hide();
	}
}
/**
 * 点击全屏触发方法
 */
function fullScreen(type){
	var fullScreenDom = $("#fullScreen");
	if(type == "lessen_icon" && fullScreenDom.hasClass('lessen_icon')){
		setTimeout(function(){
			$(window.frameElement).attr("src",$(window.frameElement).attr("src"));
		});
	}else{
		if(fullScreenDom.hasClass('fullScreen')){
			if(window.navigator.userAgent.indexOf('MSIE')<0){
				var main = document.documentElement;
				if (main.requestFullscreen) {
			        main.requestFullscreen()
				} else if (main.mozRequestFullScreen) {
			        main.mozRequestFullScreen()
				} else if (main.webkitRequestFullScreen) {
			        main.webkitRequestFullScreen()
				} else if (main.msRequestFullscreen) {
					main.msRequestFullscreen()
				}
				setTimeout(function(){

					$("#top_div").height(44);
					$("#top_div").show();
					//
					var pDom_1 = $("#jcksyl").parent();
					$("#jcksyl").remove();
					pDom_1.append('<div id="jcksyl"></div>');
					
					
					var pDom_2 = $("#bz_info").parent();
					$("#bz_info").remove();
					pDom_2.append('<div id="bz_info"></div>');
					
					/*var pDom_2 = $("#dqcsl_chart").parent();
					$("#dqcsl_chart").remove();
					pDom_2.append('<div id="dqcsl_chart"></div>');*/

					/*var pDom_3 = $("#bzzgh_chart").parent();
					$("#bzzgh_chart").remove();
					pDom_3.append('<div id="bzzgh_chart"></div>');*/

					var pDom_4 = $("#szsj").parent();
					$("#szsj").remove();
					pDom_4.append('<div id="szsj" onclick="waterQualityClick()"></div>');

					//初始页面样式
					initStyle();
					//延迟初始化数据
					setTimeout(function(){
						//初始页面数据
						initData();
					},500);
					$("#fullScreen").removeClass("fullScreen");
					$("#fullScreen").addClass("lessen_icon");
					$("body").css("overflow","hidden");
				},80);
		    }
		}else if(fullScreenDom.hasClass('lessen_icon')){
			if (document.exitFullscreen) {
				document.exitFullscreen()
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen()
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen()
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen()
			}
			setTimeout(function(){
				$(window.frameElement).attr("src",$(window.frameElement).attr("src"));
			},100);
		}
	}
}

 /**
  * 初始化视频控件点击事件
  * @param e
  */
 function initVideoFrameClick(videoId) {
	 IframeOnClick.track(document.getElementById(videoId), function() {
		 $.modal.openTab("视频监控", '/monitor/video/jumpVideoPage?deviceSerial='+cameraDevice.deviceSerial+"&stationId="+stationId+"&pumpId="+pumpId+"&id="+cameraDevice.id+"&aliasName="+cameraDevice.aliasName+"&cameraVender="+cameraDevice.cameraVender);
	 });
 }

 window.onresize = function() {
	handleVideo(cameraDevice);
 }

 /**
  * 渲染监控视频
  **/
 function initVideo() {
	 var param={pumpId:pumpId};
	 $.operate.doGet("/water/pumpDetails/findCameraList",param,function (res) {
		 if(res.data && res.data.length > 0){
			 //加载select控件
			 $("#v_camera").html('');
			 for(var i=0; i<res.data.length; i++){
				 $("#v_camera").append('<option value='+res.data[i].deviceSerial+'>'+res.data[i].aliasName+'</option>');
			 }
			 cameraDeviceList = res.data;
			 //默认选择第一个
			 cameraDevice=res.data[0];
			 handleVideo(cameraDevice);
			 $("#v_camera").change(function(){
				 var deviceSerial = $(this).val();
				 if(deviceSerial){
					 for(var i=0;i<cameraDeviceList.length;i++){
						 if(deviceSerial == cameraDeviceList[i].deviceSerial){
							 cameraDevice=res.data[i];
							 break;
						 }
					 }
					 handleVideo(cameraDevice);
				 }
			 });
		 }else{
			 $("#v_camera").hide();
		 }
	 });
 }

 //初始化摄像头组件 大华
 function initDHVideo(device) {
	 $("#kzt").empty();
	 let kitToken = getValidKitToken(device.deviceSerial);
	 if(kitToken!="" && kitToken!=null){
		 let videoUrl = "imou://open.lechange.com/{deviceSerial}/0/1?streamId=1".replace('{deviceSerial}', device.deviceSerial);
		 const player = new ImouPlayer('#kzt');
		 var containerWidth = $("#kzt").width();
		 var containerHeight = $("#kzt").height();
		 // 播放器初始化
		 player.setup({
			 src: [
				 {
					 url: videoUrl, // url拼接说明请见：2.2.3 轻应用播放地址说明
					 kitToken: kitToken, // 播放Token，通过接口getKitToken获取，具体请见：2.2.4 getKitToken接口协议说明
				 }
			 ], // 播放地址
			 height: containerHeight, // 播放器高度
			 width: "100%",
			 poster: '', // 封面图url
			 autoplay: true, // 是否自动播放
			 controls: false, // 是否展示控制栏
		 });
		 $("#kzt").click(function () {
			 $.modal.openTab("视频监控", '/monitor/video/jumpVideoPage?deviceSerial='+cameraDevice.deviceSerial+"&stationId="+stationId+"&pumpId="+pumpId+"&id="+cameraDevice.id+"&aliasName="+cameraDevice.aliasName+"&cameraVender="+cameraDevice.cameraVender);
		 });
	 }else{
	 	$("#kzt").append("<h3 style='position:relative;top:45%;color:white;text-align: center;'>视频服务提供端返回异常</h3>")
	 }

 }

 function initHKVideo(device){
	 let accessToken = getValidAccessToken();
	 let videoSrc=videoLiveUrl.replace('{deviceSerial}',device.deviceSerial).replace('{accessToken}',accessToken);
	 var videoObj="<iframe\n" +
		 "                src=\""+videoSrc+"\"\n" +
		 "                id=\"bigScreenVideo\"\n" +
		 "                allowfullscreen=\"true\"\n" +
		 "                style=\"width:100%;height:100%;\"\n" +
		 "                frameborder=\"0\"\n" +
		 "                onclick=\"onVideoFrameClick(this)\"\n" +
		 "                >\n" +
		 "            </iframe>";
	 $("#kzt").html(videoObj);
	 initVideoFrameClick("bigScreenVideo");
 }
 
 function handleVideo(device){
	 if(device){
		 if(device.cameraVender==1){
			 initHKVideo(device);
		 }else {
		 	initDHVideo(device);
		 } 
	 }
 }

 /**
  * 获取大华摄像头kitToken 缓存处理
  **/
 function getValidKitToken(deviceSerial) {
	 let kitToken = $.cookie("kitToken"+deviceSerial);
	 if(!kitToken){
		 kitToken=getKitToken(deviceSerial);
	 }
	 return kitToken;
 }

 /**
  * 获取大华摄像头kitToken
  **/
 function getKitToken(deviceSerial) {
	 var kitToken="";
	 var url ="/monitor/video/getKitToken";
	 $.operate.doPostSync(url, { deviceSerial:deviceSerial,channelId:0},function (res) {
		 if(res.data && res.data.code=="0"){
			 kitToken=res.data.data.kitToken;
			 var curDate = new Date();
			 var expireDate = new Date(curDate.getTime() + (res.data.data.expireTime*1000));
			 $.cookie('kitToken'+deviceSerial, kitToken, { expires: expireDate });
		 }
	 });
	 return kitToken;
 }

 /**
  * 获取AccessToken,先从缓存中取
  **/
 function getValidAccessToken() {
	 let accessToken = $.cookie("accessToken");
	 if(!accessToken){
		 accessToken=getAccesToken();
	 }
	 return accessToken;
 }

 /**
  * 获取AccessToken
  **/
 function getAccesToken() {
	 var param={
		 appKey:appKey,
		 appSecret:appSecret
	 };
	 $.operate.doPostSync(accessToeknUrl,param,function (res) {
		 if(res.code=="200"){
			 var expireDate=new Date(res.data.expireTime);
			 accessToken=res.data.accessToken;
			 $.cookie('accessToken', res.data.accessToken, { expires: expireDate });
		 }
	 });
	 return accessToken;
 }


 /*
  * 加载报警信息
  */
var loadErrorMsgInfo = function(){
	var errorMsgInfoData = sendAjaxTB('/water/pumpDetails/findErrorMsgInfo',param);
	
	if(errorMsgInfoData.code == 0){
		//是否自动弹出
		var isAutoTx = $("#autoTx").prop("checked");
		var errorMsgData = errorMsgInfoData.data;
		//是否有新的报警信息
		var hasNewError = false;
		var oldErrorMsgIds = $("#alertInfo_div").data("oldErrorMsgIds");
		//判断是否有新的报警信息
		if(oldErrorMsgIds != null){
			hasNewError = isHasNewErrorMsg(oldErrorMsgIds,errorMsgData);
		}else{
			hasNewError = true;
		}
		var errorMsgIds = "";
		$("#foot_div .errorMsgNum").text(errorMsgData.length);
		$("#alertInfo_div .alertInfo_content .errorMsgInfo").remove();
		for(var i=0; i<errorMsgData.length;i++ ){
			var errorMsgInfo = errorMsgData[i];
			errorMsgIds += errorMsgInfo.id + "@+@";
			var errorMsgInfoDom = $('<div class="errorMsgInfo" ></div>');
			var errorMsgTextDom = $('<span class="errorMsgText"></span>').appendTo(errorMsgInfoDom);
			errorMsgTextDom.text(errorMsgInfo.warningMsg);
			var errorMsgDateDom = $('<span class="errorMsgDate"></span>').appendTo(errorMsgInfoDom);
			errorMsgDateDom.text(errorMsgInfo.startTime);
			$("#alertInfo_div .alertInfo_content").append(errorMsgInfoDom);
		}
		if(errorMsgData.length > 0 && hasNewError){
			$("#alertInfo_div").data("oldErrorMsgIds",errorMsgIds);
			if(isAutoTx && $("#alertInfo_div").css('display') == "none"){
				$(".frb_msg").click();
			}
		}
		isErrorMsgRefresh = true;
	}else{
		$.modal.msgError("加载报警信息"+errorMsgInfoData.msg);
	}
}

/**
 * 判断是否有新增报警信息
 */
var isHasNewErrorMsg = function(oldErrorMsgIds,errorMsgData){
	var flag = false;
	for(var i=0 ; i < errorMsgData.length; i++){
		if(oldErrorMsgIds.indexOf(errorMsgData[i].id) == -1){
			flag = true;
			break;
		}
	}
	return flag;
}

/**
 * 发送同步ajax请求
 */
var sendAjaxTB = function(urlPath , conditions) {
	var demandData ;
	 $.ajax({
			url : urlPath,
			data : conditions,
			method : 'get',
			dataType : 'json',
			async:false,
			success : function(data) {
				if (data) {
					demandData = data;
				} else {
					$.modal.msgError("数据加载异常请联系管理员");
				}
			}
		});
	 return demandData;
}

/**
 * 发送异步ajax请求
 */
var sendAjaxYB = function(urlPath , conditions,backFunc) {
	 $.ajax({
			url : urlPath,
			data : conditions,
			method : 'get',
			dataType : 'json',
			async:false,
			success : function(data) {
				if (data) {
					backFunc(data);
				} else {
					$.modal.msgError('数据加载异常请联系管理员');
				}
			}
		});
}

//报警页跳转
function errorMsgClick(){
	$.modal.openTab("报警记录", '/water/errorMsg');
}

//门禁记录页跳转
function attendanceClick(){
	$.modal.openTab("门禁记录", '	/water/attendance');
}

//泵房详情页跳转
function pumpInputDetailClick(){
	$.modal.openTab("泵房详情配置", '/basic/pumpInputDetail?stationId='+stationId+"&pumpId="+pumpId);
}

//压力统计页跳转
function hydraulicPressureClick(){
	$.modal.openTab("压力数据", '/report/hydraulicPressure?stationId='+stationId+"&id="+pumpId);
}

//产生量、功耗页跳转
function waterEnergyClick(){
	$.modal.openTab("能耗及产水量", '/report/waterEnergy?stationId='+stationId+"&id="+pumpId);
}

//跳转到单泵
function pumpClick(){
    var params={areaName:areaName,stationName:stationName,pumpName:pumpName,cimName:cimName,stationId:stationId,pumpId:pumpId,cimNo:cimNo};
    var url = '/report/waterEnergy/singlePumpDetail?areaName={areaName}&stationName={stationName}&pumpName={pumpName}&cimName={cimName}&stationId={stationId}&pumpId={pumpId}&cimNo={cimNo}'
        .replace('{areaName}',params.areaName)
        .replace('{stationName}',params.stationName)
        .replace('{pumpName}',params.pumpName)
        .replace('{cimName}',params.cimName)
        .replace('{stationId}',params.stationId)
        .replace('{pumpId}',params.pumpId)
        .replace('{cimNo}',params.cimNo);
    $.modal.openTab(params.cimName+"单泵详情", url);
}

//水质页面跳转
function waterQualityClick(){
	$.modal.openTab("水质数据", '	/report/waterQuality?stationId='+stationId+"&id="+pumpId+"&pumpName="+pumpName);
}

function getVR(idPumpId){
	var data = getZip(idPumpId);
	if(data.initialPreview.length != 0 && data.initialPreviewConfig !=0){
	document.getElementById("ifrPage").src = "/basic/VRPicture/"+idPumpId;
	}else{
		//$.modal.alertError("请至泵房配置中上传VR文件！");
	}
}

function getZip(idPumpId){
  let results;
    	$.ajax({
    		type:"post",
 			url:ctx+"basic/VRPicture/getZip/"+idPumpId,
 			async:false,
 			success:function(result){
 				results =result;
 			}
    	})
    	return results;
};


function changeVR(){
	if(VRflag){
		$("#bengName").html("泵房VR图");
		$('#VRPicture').attr("style","display:none");
		VRflag = false;
	}else{
		$('#VRPicture').attr("style","display:block;z-index:1000000;position:relative;");
		$("#bengName").html("泵模型图");
		VRflag = true;
	}
};
