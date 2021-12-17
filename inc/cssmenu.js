let list = [
	['focus', '포커스'],
	['visibility', '가시성'],
	['exam01', '페이지(날씨)'],
	['exam02', '페이지(테이블)'],
	['exam03', '페이지(이력서)'],
	['exam04', '페이지(체크박스)']
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
