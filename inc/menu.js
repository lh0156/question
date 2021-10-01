let list = [
	['operator', '변수+자료형+형변환+입출력+연산자'],
	['method', '메소드'],
	['datetime', '날짜시간'],
	['conditional', '조건문'],
	['iteration', '반복문'],
	['iteration2', '다중반복문'],
	['string', '문자열'],
	['array', '배열'],
	['array2', '다차원배열'],
	['class1', '클래스'],
	['class2', '클래스']
];

let temp = '';

list.forEach(function (item, index) {
	temp +=
		'<div onclick="location.href=\'' +
		item[0] +
		'.html\';"' +
		(location.href.endsWith(item[0] + '.html') ? 'style="opacity: 1;"' : '') +
		'><span class="title">' +
		item[1] +
		'</span></div>';
});

$('#jsmenu').append(temp);

$('#jsmenu > div').css('opacity', '.5');