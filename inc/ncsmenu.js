let list = [
	['응용SW 기초 기술 활용', '응용SW 기초 기술 활용'],
	['method', '메소드'],
	['datetime', '날짜시간']
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
