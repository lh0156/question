let list = [
	['heading', '제목,<hn>'],
	['paragraph', '문단,<p>'],
	['body', '본문<body>'],
	['hr', '수평선<hr>'],
	['style', '스타일'],
	['list', '리스트'],
	['link', '링크<a>'],
	['image', '이미지<img>'],
	['anchor', '앵커<a>']
	//['', ''],
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
