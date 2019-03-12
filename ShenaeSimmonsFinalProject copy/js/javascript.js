// for split screen landing page //
document.addEventListener('DOMContentLoaded', function(){
		let container = document.getElementById('container');
		let topLayer = container.querySelector('.top');
		let handle = container.querySelector('.handle');
		let skew = 0;
		let delta = 0;

		if(container.className.indexOf('skewed') != -1){
		skew = 1000;
	}
	container.addEventListener('mousemove', function(i){
		delta = (i.clientX - window.innerWidth / 2) * 0.5;

		handle.style.left = i.clientX + delta + 'px';

		topLayer.style.width = i.clientX + skew + delta + 'px';
	});

	});
