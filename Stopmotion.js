/*

STOPMOTION by Christian Spreafico

Licensed GPLv3 to build open source and personal projects
or Commercial License for commercial uses

http://christianspreafico.altervista.org/

(c) Christian Spreafico

*/

function Stopmotion(options){

/* Default options */

options.width = (typeof options.width !== 'undefined') ?  options.width : '100%';
options.height = (typeof options.height !== 'undefined') ?  options.height : '100%';
options.description = (typeof options.description !== 'undefined') ?  options.description : false;
options.tooltip = (typeof options.tooltip !== 'undefined') ?  options.tooltip : false;
options.animationDuration = (typeof options.animationDuration !== 'undefined') ?  options.animationDuration : 200;

/* Compose container */

var ItemStopmotion = "<div class='ScrollbarMobile'>"+
			"<div class='ContainerBtnMobile'>"+
				"<div class='BtnTopMobile' id='BtnPlayMobile' >"+
					"<img src='http://christianspreafico.altervista.org/Stopmotion/Images/IconPlay.svg' class='ImageIconMobile' id='ImageBtnPlayMobile' />"+
				"</div>"+
				"<div class='BtnTopMobile' id='BtnPauseMobile' >"+
					"<img src='http://christianspreafico.altervista.org/Stopmotion/Images/IconPause.svg' class='ImageIconMobile' id='ImageBtnPauseMobile' />"+
				"</div>"+
			"</div>"+
			"<div class='ContainerScrollbarMobile'></div>"+
		"</div>"+
		"<div class='ContainerImage'></div>";

$('.ContainerStopmotion').html(ItemStopmotion);
	
var $body = $('body');
var $window = $(window);
var $Cover = $('.Cover');
var $ContainerImage = $('.ContainerImage');
var DataLengthTot = Data.length;
var BgImgSelected;

var $ContainerStopmotion = $('.ContainerStopmotion');
$ContainerStopmotion
.css('position', 'absolute')
.css('top', '0px')
.css('left', '0px')
.css('width', options.width)
.css('height', options.height);

var ItemImage = '';	
$ContainerImage.html(ItemImage);

function ComposeImages(j_start, j_stop){			
	if(j_start < 0){
		j_start = 0;
	}
	if(j_stop >= DataLengthTot){
		j_stop = DataLengthTot;
	}
	
	ItemImage = '';

	for(j = j_start; j < j_stop; j++){
		DataType1Current = Data[j].Type1;
						
		ItemImage += "<div id='Image"+j+"' style='overflow: hidden; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 3;'>"+
							"<img src='"+Data[j].ImageSource+"' class='Image' />";
							
		if(options.description == true){					
			if(Data[j].Description != '0'){
				ItemImage += "<div class='ContDescriptionSingle' id='ContDescriptionSingle_"+j+"'>"+Data[j].Description+"</div>";
			}
		}		
		
		ItemImage += "</div>";
	}

	$ContainerImage.html(ItemImage);
	return;
}

j_start = 0;
j_stop = 10;

ComposeImages(j_start, j_stop);

/* Compose scrollbar */

var $ContainerScrollbarMobile = $('.ContainerScrollbarMobile');
var ItemBarInsideMobile = '';

for(j=0; j<DataLengthTot; j++){
	ItemBarInsideMobile += "<div class='BarInsideMobile' id='BarInsideMobile"+j+"' name='"+j+"'>";
	
	if(options.tooltip == true){
		ItemBarInsideMobile += "<div class='Tooltip' id='Tooltip"+j+"'><div class='TooltipImage' id='TooltipImage"+j+"'></div></div>";
	}
	
	ItemBarInsideMobile += "</div>";
}

$ContainerScrollbarMobile.html(ItemBarInsideMobile);

for(j=0; j<DataLengthTot; j++){
	BgImgSelected = Data[j].ImageSource;
	$('#TooltipImage'+j).css('background-image','url("'+BgImgSelected+'")')
	.css('background-size','cover')
	.css('background-repeat','no-repeat')
	.css('background-position','50% 50%');
	
	$('#Tooltip'+j).hide();
}

var $BarInsideMobile = $('.BarInsideMobile');

/* Use scrollbar */

var ThisBar;
var GetBarInsidePosition;
var GetBarInsideWidth;
var GetBarInsidePosition_Left;
var GetBarInsidePosition_Right;
var WindowWidth;
var $window = $(window);
var LeftTooltip;
var NegativeOperator = -1;

$BarInsideMobile.mouseover(function(){
	ThisBar = this.attributes["name"].value;
	for(j=0; j<DataLengthTot; j++){
		$('#Tooltip'+j).hide();
	}
	
	GetBarInsideWidth = $('#BarInsideMobile'+ThisBar).width();
	
	GetBarInsidePosition = $('#BarInsideMobile'+ThisBar).position();
	GetBarInsidePosition_Left = GetBarInsidePosition.left;
	WindowWidth = $window.width();
	GetBarInsidePosition_Right = WindowWidth - GetBarInsidePosition_Left;
	GetBarInsidePosition_Right = GetBarInsidePosition_Right - GetBarInsideWidth;
	
	LeftTooltip = 120 - GetBarInsideWidth;
	LeftTooltip = LeftTooltip / 2;
	LeftTooltip = LeftTooltip * NegativeOperator;
	$('#Tooltip'+ThisBar).css('left', LeftTooltip);
	
	LeftTooltip = LeftTooltip * NegativeOperator;
	
	if(GetBarInsidePosition_Left < LeftTooltip){
		LeftTooltip = GetBarInsidePosition_Left * NegativeOperator;
		$('#Tooltip'+ThisBar).css('left', LeftTooltip);
	}
	if(GetBarInsidePosition_Right < LeftTooltip){
		LeftTooltip = 120 - GetBarInsideWidth;
		LeftTooltip -=  GetBarInsidePosition_Right;
		LeftTooltip = LeftTooltip * NegativeOperator;
		$('#Tooltip'+ThisBar).css('left', LeftTooltip);
	}
	
	$('#Tooltip'+ThisBar).show();
});

$BarInsideMobile.mouseout(function(){
	for(j=0; j<DataLengthTot; j++){
		$('#Tooltip'+j).hide();
	}
});

$BarInsideMobile.click(function(){
	i_scroll = this.attributes["name"].value;
	i_scroll = parseInt(i_scroll);
	
	j_start = i_scroll - 5;
	j_stop = i_scroll + 5;

	ComposeImages(j_start, j_stop);
	
	FunctionScroll(i_scroll);
});

/* Window resize */

var ContainerImageWidth = $window.width();
var WidthBarInside;

var BarMobileWidth = $ContainerScrollbarMobile.width();

function WindowResize(){
	BarMobileWidth = $ContainerScrollbarMobile.width();
	BarMobileWidth = BarMobileWidth / DataLengthTot;
	$BarInsideMobile.css('width', BarMobileWidth);
}

$window.resize(function(){
	WindowResize();
});

/* Scroll */

var i_scroll = 0;

function FunctionScroll(i_scroll){
	for(j=0; j<DataLengthTot; j++){
		$('#Image'+j).hide();
	
		if(j < i_scroll){
			$('#BarInsideMobile'+j).css('background-color', 'grey');
		}
		if(j > i_scroll){
			$('#BarInsideMobile'+j).css('background-color', '#424242');
		}
	}
	$('#BarInsideMobile'+i_scroll).css('background-color', 'grey');
	$('#Image'+i_scroll).show();
}

function ScrollDown(){
	i_scroll += 1;
}

function ScrollUp(){
	i_scroll -= 1;
}

var Versus = '+';

function ScrollUpDown(){
	if(i_scroll >= DataLengthTot){
		i_scroll = DataLengthTot - 1;
	}
	if(i_scroll < 0){
		i_scroll = 0;
	}
	
	j_start = i_scroll  - 5;
	j_stop = i_scroll + 5;
	ComposeImages(j_start, j_stop);
	
	if(Versus == '+'){
		FunctionScroll(i_scroll);
		FunctionScroll(i_scroll+1);
		FunctionScroll(i_scroll+2);
		FunctionScroll(i_scroll);
	}
	if(Versus == '-'){
		if(i_scroll == 0){
			FunctionScroll(i_scroll);
		}
		else{
			FunctionScroll(i_scroll);
			FunctionScroll(i_scroll-1);
			FunctionScroll(i_scroll-2);
			FunctionScroll(i_scroll);
		}
	}
}

var CheckCommand = 0;

$ContainerStopmotion.mouseover(function(){
	ActivateStopmotionScroll();
	CheckCommand = 1;
});

$ContainerStopmotion.mouseout(function(){
	CheckCommand = 0;
});

/* Play */

$ContainerImage.click(function(){
	if(checkBreak == 0){
		AutoPlay_Play();
		checkBreak = 1;
	}
	else{
		AutoPlay_Pause();
		checkBreak = 0;
	}
});

function ActivateStopmotionScroll(){
	$ContainerStopmotion.bind('mousewheel', function(e){
		$ContainerStopmotion.scrollTop($ContainerStopmotion.scrollTop()-e.originalEvent.wheelDeltaY);
		if(e.originalEvent.wheelDelta < 0) {
			Versus = '+';
			if(i_scroll < DataLengthTot){
				e.stopImmediatePropagation();
				ScrollDown();
			}
		}
		if(e.originalEvent.wheelDelta > 1){
			Versus = '-';
			if(i_scroll > 0){
				e.stopImmediatePropagation();
				ScrollUp();
			}
			else{
				$ContainerStopmotion.off('mousewheel');
			}
		}
		ScrollUpDown();
		return false; 
	});
}

var checkBreak = 0;

function checkKey(e) {
	e = e || window.event;
	if(CheckCommand == 1){
		if(e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40'){
			if(e.keyCode == '37' || e.keyCode == '38'){
				Versus = '-';
				if(i_scroll > 0){
					e.stopImmediatePropagation();
					ScrollUp();
				}
			}
			else if(e.keyCode == '39' || e.keyCode == '40'){
				Versus = '+';
				if(i_scroll < DataLengthTot){
					e.stopImmediatePropagation();
					ScrollDown();
				}
			}
			ScrollUpDown();
		}
		if(e.keyCode == '32'){
			if(checkBreak == 0){
				AutoPlay_Play();
				checkBreak = 1;
			}
			else{
				AutoPlay_Pause();
				checkBreak = 0;
			}
		}
		return false;
	}		
}

document.onkeydown = checkKey;

FunctionScroll(i_scroll);

$('#BtnPause').hide();

var TimerScroll;

function AutoPlay_Play(){
	$('#BtnPlayMobile').hide();
	$('#BtnPauseMobile').show();	
	TimerScroll = setInterval(function(){
		Versus = '+';
		ScrollUpDown();
		i_scroll += 1;
	}, options.animationDuration);
}

function AutoPlay_Pause(){
	clearInterval(TimerScroll);
	$('#BtnPlayMobile').show();
	$('#BtnPauseMobile').hide();
}

$('#BtnPauseMobile').hide();

var TimerScrollMobile;

$('#BtnPlayMobile').click(function(){
	AutoPlay_Play();
	checkBreak = 1;
});

$('#BtnPauseMobile').click(function(){
	AutoPlay_Pause();
	checkBreak = 0;
});

WindowResize();
}
