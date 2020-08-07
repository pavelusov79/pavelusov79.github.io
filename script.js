document.querySelector(".pull").onclick = function() {
	this.classList.toggle("pull-active");
	document.querySelector(".menu ul").classList.toggle("active");
} 

var showLarge = document.querySelector(".product_left .big");
var markImg = document.querySelector(".product_left div");
var img = document.querySelectorAll(".product_left div img");
var path = window.location.pathname.split("/");

// if(path[path.length-1] == "product_page.html") {
// 	markImg.addEventListener("click", f);
// }

// function f(e){
// 	for(var i = 0; i < img.length; i++) {
// 		img[i].classList.remove("select");
// 	}
// 	e.target.classList.add("select");
// 	showLarge.src = e.target.src;
// }
for(var i = 0; i<img.length; i++) {
	img[i].onclick = function(e) {
		for(var j = 0; j<img.length; j++) {
			img[j].classList.remove("select");
		}
		e.target.classList.add("select");
		showLarge.src = e.target.src;
	}
}

$(function() {
  // при нажатии на кнопку arrow
  $('.arrow').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },800);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>1500) {
    // то сделать кнопку arrow видимой
    $('.arrow').fadeIn();
  }
  // иначе скрыть кнопку arrow
  else {
    $('.arrow').fadeOut();
  }
});

var news = document.querySelector(".show_news");
var news_p = document.querySelectorAll(".show_text");
if(path[path.length-1] == "index.html") {
	news.addEventListener("click", (e) => {
		for(var i = 0; i < news_p.length; i++) {
			news_p[i].children[1].style.display = "none";
			news_p[i].children[0].innerHTML = "&#43";
		}
		e.target.children[1].style.display = "block";
		e.target.children[0].innerHTML = "&#45";
	});
}

var arr = [
	{
		"id": "item1", 
		"name": "Assasin’s Creed: Rogue",
		"price": "$29.99",
		"description": "The plot is set in a fictional history of real world events and follows the centuries-old struggle between the Assassins, who fight for peace with free will, and the Templars, who desire peace through control. The story is set in the mid-18th century during the Seven Years' War, and follows Shay Patrick Cormac, an Assassin-turned-Templar who hunts down former members of his Brotherhood after being betrayed by them. Gameplay in Rogue is very similar to that of Black Flag with a mixture of ship-based naval exploration and third-person land-based exploration with some new features.",
		"img": {"img1": "img/game/assasians1.jpg", "img2": "img/game/assasians2.png", "img3": "img/game/assasians3.png", "img4": "img/game/assasians4.jpg"},
		"category": 4
	},
	{
		"id": "item2", 
		"name": "Tomb Raider",
		"price": "$24.55",
		"description": "Donec feugiat tellus sem, laoreet iaculis orci lobortis vel. Sed sed luctus orci, at lacinia risus. Ut porttitor ante ac tincidunt elementum. Curabitur ex dolor, condimentum vitae nunc vel, pulvinar semper justo. Vestibulum et aliquet magna, maximus dapibus enim. Vestibulum ex lectus, posuere eu viverra at, mattis et enim. Nam efficitur sem et lectus fringilla, at pharetra nulla luctus.",
		"img": {"img1": "img/game/tom1.jpg", "img2": "img/game/tom2.jpg", "img3": "img/game/tom3.jpg", "img4": "img/game/tom4.jpg"},
		"category": 3
	},
	{
		"id": "item3", 
		"name": "Ryse: Son of Rome",
		"price": "$35.76",
		"description": "The centuries-old struggle between the Assassins, who fight for peace with free will, and the Templars, who desire peace through control. The story is set in the mid-18th century during the Seven Years' War, and follows Shay Patrick Cormac, an Assassin-turned-Templar who hunts down former members of his Brotherhood after being betrayed by them. Gameplay in Rogue is very similar to that of Black Flag with a mixture of ship-based naval exploration and third-person.",
		"img": {"img1": "img/game/ryse1.jpg", "img2": "img/game/ryse2.jpg", "img3": "img/game/ryse3.jpg", "img4": "img/game/ryse4.jpg"},
		"category": 4
	},
	{
		"id": "item4", 
		"name": "orld Of Warcraft:\nWrath Of The Linch King",
		"price": "$43.78",
		"description": "Curabitur ex dolor, condimentum vitae nunc vel, pulvinar semper justo. Vestibulum et aliquet magna, maximus dapibus enim. Vestibulum ex lectus, posuere eu viverra at, mattis et enim. Nam efficitur sem et lectus fringilla, at pharetra nulla luctus. Nunc cursus, augue ac ultricies volutpat, neque erat congue justo, ac pretium tellus eros a neque. Integer ipsum sem, consectetur a mollis ac, cursus eu ipsum.",
		"img": {"img1": "img/game/warcfaft1.jpg", "img2": "img/game/warcfaft2.jpg", "img3": "img/game/warcfaft3.jpg", "img4": "img/game/warcfaft4.jpg"},
		"category": 2
	},
	{
		"id": "item5", 
		"name": "BUTTLEFIELD 1",
		"price": "$19.99",
		"description": "who fight for peace with free will, and the Templars, who desire peace through control. The story is set in the mid-18th century during the Seven Years' War, and follows Shay Patrick Cormac, an Assassin-turned-Templar who hunts down former members of his Brotherhood after being betrayed by them. Gameplay in Rogue is very similar to that of Black Flag with a mixture of ship-based naval exploration and third-person land-based exploration with some new features.",
		"img": {"img1": "", "img2": "", "img3": "", "img4": ""},
		"category": 1
	},
	{
		"id": "item6", 
		"name": "STAR WARS:\nButtlefront II",
		"price": "$23.90",
		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		"img": {"img1": "img/game/buttle1.jpg", "img2": "img/game/buttle2.jpg", "img3": "img/game/buttle3.jpg", "img4": "img/game/buttle4.jpg"},
		"category": 1
	},
	{
		"id": "item7", 
		"name": "BUTTELFIELD 4",
		"price": "$21.65",
		"description": "Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
		"img": {"img1": "img/game/buttle4_1.jpg", "img2": "img/game/buttle4_2.jpg", "img3": "img/game/buttle4_3.jpg", "img4": "img/game/buttle4.jpg"},
		"category": 1
	},
	{
		"id": "item8", 
		"name": "WORLD OF TANKS",
		"price": "$35.20",
		"description": "The plot is set in a fictional history of real world events and follows the centuries-old struggle between the Assassins, who fight for peace with free will, and the Templars, who desire peace through control. The story is set in the mid-18th century during the Seven Years' War, and follows Shay Patrick Cormac, an Assassin-turned-Templar who hunts down former members of his Brotherhood after being betrayed by them. Gameplay in Rogue is very similar to that of Black Flag with a mixture of ship-based naval exploration and third-person",
		"img": {"img1": "img/game/tank1.jpg", "img2": "img/game/tank2.png", "img3": "img/game/tank3.jpg", "img4": "img/game/tank4.jpg"},
		"category": 1
	},
	{
		"id": "item9", 
		"name": "FOR HONOR",
		"price": "$44.70",
		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
		"img": {"img1": "", "img2": "", "img3": "", "img4": ""},
		"category": 1
	},
	{
		"id": "item10", 
		"name": "WORLD OF WARSHIPS",
		"price": "$46.50",
		"description": "Feugiat tellus sem, laoreet iaculis orci lobortis vel. Sed sed luctus orci, at lacinia risus. Ut porttitor ante ac tincidunt elementum. Curabitur ex dolor, condimentum vitae nunc vel, pulvinar semper justo. Vestibulum et aliquet magna, maximus dapibus enim. Vestibulum ex lectus, posuere eu viverra at, mattis et enim. Nam efficitur sem et lectus fringilla, at pharetra nulla luctus. Nunc cursus, augue ac ultricies volutpat, neque erat congue justo, ac pretium tellus eros a neque. Integer ipsum sem.",
		"img": {"img1": "img/game/ships1.jpg", "img2": "img/game/ships2.jpg", "img3": "img/game/ships3.jpg", "img4": "img/game/ships4.jpg"},
		"category": 1
	},
	{
		"id": "item11", 
		"name": "CALL OF DUTY\nInfinite Warface",
		"price": "$29.99",
		"description": "The plot is set in a fictional history of real world events and follows the centuries-old struggle between the Assassins, who fight for peace with free will, and the Templars, who desire peace through control. The story is set in the mid-18th century during the Seven Years' War, and follows Shay Patrick Cormac",
		"img": {"img1": "img/game/call_duty1.jpg", "img2": "img/game/call_duty2.jpg", "img3": "img/game/call_duty3.jpg", "img4": "img/game/call_duty4.jpg"},
		"category": 2
	},
	{
		"id": "item12", 
		"name": "MIDDLE EARTH:\nShadow of War",
		"price": "$20.99",
		"description": "Donec feugiat tellus sem, laoreet iaculis orci lobortis vel. Sed sed luctus orci, at lacinia risus. Ut porttitor ante ac tincidunt elementum. Curabitur ex dolor, condimentum vitae nunc vel, pulvinar semper justo. Vestibulum et aliquet magna, maximus dapibus enim. Vestibulum ex lectus, posuere eu viverra at, mattis et enim. Nam efficitur sem et lectus fringilla, at pharetra nulla luctus. Nunc cursus, augue ac ultricies volutpat, neque erat congue justo, ac pretium tellus eros a neque. Integer ipsum sem, consectetur a mollis ac, cursus eu ipsum.",
		"img": {"img1": "img/game/middle1.jpg", "img2": "img/game/middle2.jpg", "img3": "img/game/middle3.jpg", "img4": "img/game/middle4.jpg"},
		"category": 2
	},
	{
		"id": "item13", 
		"name": "DISHONORED 2",
		"price": "$37.15",
		"description": "At lacinia risus. Ut porttitor ante ac tincidunt elementum. Curabitur ex dolor, condimentum vitae nunc vel, pulvinar semper justo. Vestibulum et aliquet magna, maximus dapibus enim. Vestibulum ex lectus, posuere eu viverra at, mattis et enim. Nam efficitur sem et lectus fringilla, at pharetra nulla luctus. Nunc cursus, augue ac ultricies volutpat, neque erat congue justo, ac pretium tellus eros a neque. Integer ipsum sem, consectetur a mollis ac.",
		"img": {"img1": "img/game/dis1.jpg", "img2": "img/game/dis2.jpg", "img3": "img/game/dis3.jpg", "img4": "img/game/dis4.jpg"},
		"category": 5
	},
	{
		"id": "item14", 
		"name": "THIEF",
		"price": "$18.99",
		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		"img": {"img1": "img/game/thief1.jpeg", "img2": "img/game/thief2.jpg", "img3": "img/game/thief3.jpeg", "img4": "img/game/thief4.jpg"},
		"category": 5
	},
	{
		"id": "item15", 
		"name": "HITMAN",
		"price": "$38.45",
		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		"img": {"img1": "img/game/hitman1.jpg", "img2": "img/game/hitman2.jpg", "img3": "img/game/hitman3.jpg", "img4": "img/game/hitman4.jpg"},
		"category": 5
	}
];

var btn = document.querySelector(".product_right button");
if(path[path.length-1] == "product_page.html") {
	btn. onclick = function() {
	var div = document.createElement("div");
	btn.appendChild(div);
	div.className = "popup";
	div.innerHTML = "<p>товар добавлен в корзину</p>"
	setTimeout(function(){
		div.style.display = "none";
	}, 1200);
	if(document.querySelector(".busket").style.display = "none") {
		document.querySelector(".busket").style.display = "block";
	}
	}
}

// var prod_big = document.querySelector(".product_left .big");
// var prod_img1 = document.querySelector("#sm1");
// var prod_img2 = document.querySelector("#sm2");
// var prod_img3 = document.querySelector("#sm3");
// var prod_img4 = document.querySelector("#sm4");
// var prod_name = document.querySelector(".product_text_1");
// var prod_price = document.querySelector(".product_text_2");
// var prod_descr = document.querySelector(".product_text_3");
var title = document.querySelector("title");
if(title.innerHTML == "Product_page") {
	title.innerHTML = "Assasin’s Creed: Rogue";
}
// for(var i = 0; i<btn.length; i++) {
// 	btn[i].onclick = function(e) {
// 		for(var j = 0; j<arr.length; j++) {
// 			if(this.getAttribute("id") == arr[j].id) {
// 				if(title.innerHTML == "Product_page.html") {
// 					prod_name.innerHTML = arr[j].name;
// 					prod_price.innerHTML = arr[j].price;
// 					prod_descr.innerHTML = arr[j].description;
// 					prod_big.src = arr[j].img.img1;
// 					prod_img1.src = arr[j].img.img1;
// 					prod_img2.src = arr[j].img.img2;
// 					prod_img3.src = arr[j].img.img3;
// 					prod_img4.src = arr[j].img.img4;
// 					title.innerHTML = arr[j].name;
// 				}
// 			}
// 		}
// 	}
// }