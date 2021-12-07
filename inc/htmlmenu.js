let list = [
	['heading', '제목,<hn>'],
	['method', '메소드'],
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
		item[1].replace('<', '&lt;').replace('>', '&gt;') +
		'</span></div>';
});

$('#jsmenu').append(temp);

$(window).keydown(function (evt) {
	if (evt.ctrlKey && evt.shiftKey && evt.keyCode == 90) {
		$('#menuleft, #left').toggle();
	}
});
