//for slide show //
let n = 0;
let images = [];
let time = 4000;
//list of images//
images[0] = '../images/birthday.jpeg';
images[1] = '../images/twinswindow.jpg';
images[2] = '../images/kidscoats.jpeg';
images[3] = '../images/arsinoebathroom.jpg'
images[4] = '../images/adultfamily.jpeg';
images[5] = '../images/leobathroom.jpg';
//function to change the image//
function changeImg() {
	document.getElementById('slides').src = images[n];

	if(n < images.length - 1) {
		n++; }
	else {
		n=0;
	}
	setTimeout("changeImg()", time);
}
 window.onload = changeImg;