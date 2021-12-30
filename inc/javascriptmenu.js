let list = [
	['clickevent', '클릭 이벤트'],
	['keyevent', '키 이벤트'],
	['roll', '롤오버 이미지1'],
	['roll2', '롤오버 이미지2'],
	['form', '폼컨트롤'],
	['roll3', '롤오버 이미지3'],
	['image', '이미지'],
	['image2', '이미지2'],
	['form1', '폼1'],
	['form2', '폼2'],
	['form3', '폼3'],
	['form4', '폼4'],
	['timer1', '타이머1'],
	['timer2', '타이머2'],
	['timer3', '타이머3'],
	['timer4', '타이머4'],
	['timer5', '타이머5'],
	['timer6', '타이머6'],
	['dom1', 'DOM1'],
	['dom2', 'DOM2'],
	['dom3', 'DOM3'],
	['dom4', 'DOM4'],
	['dom5', 'DOM5'],
	['dom6', 'DOM6'],
	['dom7', 'DOM7'],
	['dom8', 'DOM8'],
	['dom9', 'DOM9'],
	
	['style1', '스타일1'],
	['style2', '스타일2'],
	['style3', '스타일3'],
	['style4', '스타일4'],
	['style5', '스타일5'],
	['transition1', '트랜지션1'],
	['transition2', '트랜지션2'],
	['transition3', '트랜지션3'],
	['transition4', '트랜지션4'],
	['transition5', '트랜지션5'],
	['animation1', '타이머+애니메이션1'],
	['animation2', '타이머+애니메이션2'],
	['animation3', '타이머+애니메이션3'],
	['animation4', '타이머+애니메이션4'],
	['animation5', '타이머+애니메이션5'],
	['animation6', '타이머+애니메이션6'],
	['animation7', '타이머+애니메이션7'],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
	['', ''],
];

let temp = '';

list.forEach(function (item, index) {
	temp +=
		'<div onclick="window.open(\'' +
		item[0] +
		'.html\');"' +
		(location.href.endsWith(item[0] + '.html')
			? 'style="opacity: 1;"'
			: 'style="opacity: .5;"') +
		'><span class="title">' +
		item[1] +
		'</span></div>';
});

$('#jsmenu').append(temp);

$(window).keydown(function (evt) {
	if (evt.ctrlKey && evt.shiftKey && evt.keyCode == 90) {
		$('#menuleft, #left').toggle();
	}
});
