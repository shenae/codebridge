// for Modal Box //

let modal = document.getElementById('myModal');
	let btn = document.getElementById('modalbox-button');
	let span = document.getElementsByClassName("modalbox-close")[0];
	btn.onclick = function() {
		modal.style.display = "block";
	}
	span.onclick = function() {
		modal.style.display = "none";	
	}
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}