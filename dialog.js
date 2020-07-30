// Set up the page
window.onload = function() {scrollFunction();toBottom();linkImages();};
window.onscroll = function() {scrollFunction()};
// Hide the button when reaching the button
function scrollFunction() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        document.getElementById("tobottom").style.display = "none";
    } else {
        document.getElementById("tobottom").style.display = "block";
    }
}
// These functions perform the scroll
function toBottom(){window.scrollTo(0,document.body.scrollHeight);}
function toTop(){window.scrollTo(0,0);}

function linkImages(){
	// insert the modal into the page
	document.getElementsByTagName("body")[0].innerHTML += '		<div id="modal" class="modal"><span class="close">&times;</span><img class="modal-content" id="modal-img"></div>';
	document.getElementsByClassName("close")[0].onclick = function() {
		document.getElementById('modal').style.display = "none";
	};
	// bind the modal to the images
	const l = document.getElementsByTagName("img");
	for (let i = 0; i < l.length; i++) {
		l[i].onclick = function(){
			document.getElementById('modal').style.display = "block";
			document.getElementById('modal-img').src = l[i].src;
			// document.location.href = l[i].src;
			// console.log("Image clicked");
		}
	};
}

// Code for controlling the modal
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    //captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 
