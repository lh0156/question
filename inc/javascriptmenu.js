let list = [
	['clickevent', '클릭 이벤트'],
	['keyevent', '키 이벤트'],
	['roll', '롤오버 이미지1'],
	['roll2', '롤오버 이미지2'],
	['form', '폼컨트롤'],
	['roll3', '롤오버 이미지3'],
	['image', '이미지'],
	['image2', '이미지2'],
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
