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
	['class1_book', '클래스(객체생성,캡슐화)'],
	['class2_note', '클래스(객체생성,캡슐화)'],
	['class3_bugles', '클래스(객체생성,캡슐화)'],
	['class4_employee', '클래스(객체생성,캡슐화)'],
	['class5_box', '클래스(객체멤버,배열멤버)']
	// ['class6_refrigerator', '클래스(객체멤버,배열멤버)'],
	// ['class7_student', '클래스(생성자)'],
	// ['class8_time', '클래스(생성자)'],
	// ['class9_packer', '클래스(static)'],
	// ['class10_barista', '클래스(static)']
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
