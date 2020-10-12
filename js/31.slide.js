new Slide({
	slide : ['../img/slide-0.jpg','../img/slide-1.jpg','../img/slide-2.jpg','../img/slide-3.jpg'],
	container : ".main-stage",
	direction : "horizental", //horizental, vertical, fade
	slideTitle: [
		"<div class='custom-title'>Hello1</div>",
		"<div class='custom-title'>Hello2</div>",
		"<div class='custom-title'>Hello3</div>",
		"<div class='custom-title'>Hello4</div>",
	],
	auto : true, //false, true
	delay : 2000, //3000
	speed : 700, //500
	pager: "false", //false,true
	btnUse: true, //true,false
})

new Slide({
	slide : ['../img/home-2.jpg','../img/home-3.jpg','../img/home-4.jpg'],
	container : ".prd-stage",
	direction : "vertical",
	pager: true, //false,true
	btnUse: true, //true,false
})


new Slide({
	slide : ['../img/home-2.jpg','../img/home-3.jpg','../img/home-4.jpg'],
	container : ".prd-stage2",
	direction : "fade",
	btnUse: false, //true,false
	pager: true, //false,true
})
