let list = [
	['focus', '포커스'],
	['visibility', '가시성'],
	['exam01', '페이지(날씨)'],
	['exam02', '페이지(테이블)'],
	['exam03', '페이지(이력서)'],
	['exam04', '페이지(체크박스)'],
	['exam05', '복습(이동1)'],
	['exam06', '복습(회전1)'],
	['exam07', '복습(회전2)'],
	['exam08', '복습(메뉴)'],
	['exam09', '복습(테두리)'],
	['exam10', '복습(이동2)'],
	['exam11', '복습(회전3)'],
	['exam12', '복습(이동3)'],
	['exam13', '복습(공)'],
	['exam14', '복습(문자1)'],
	['exam15', '복습(문자2)'],
	['exam16', '복습(레코드)'],
	['exam17', '복습(테이프)']
];

let temp = '';

list.forEach(function (item, index) {
	temp +=
		'<div onclick="location.href=\'' +
		item[0] +
		'.html\';"' +
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
