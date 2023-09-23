const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// variable contenant le numéro du slide en cours
let  currentSlide= 0; 
const sldLeftBtn = document.getElementById("arrow_left");
const sldRightBtn = document.getElementById("arrow_right");
const imgfield =  document.getElementById("banner-img");
const tagLine = document.getElementById("tagLine");//appel des textes du slide

/*
 * Add or remove Class
 * @param {string} id
 * @param {boolean} addClass
 */

function addRemoveClass(id, addClass){
	if( addClass === true){
		document.getElementById(id).classList.add("dot_selected");
	} else{
		document.getElementById(id).classList.remove("dot_selected");
	}
}

//mise en place des flêches
function setSlides(){
	//commande du click des flêches
	sldLeftBtn.addEventListener('click',function(){
		//mise en place de la fonction défilement de la flêche gauche
		if(currentSlide === 0){ //Appel du slide à partir de 0
			addRemoveClass("0", false);
			//document.getElementById("dot-"+currentSlide).classList.remove("dot_selected");//changement du bouton blanc en même tps que l'immage
			currentSlide = 3;
			addRemoveClass(currentSlide, true);
			//document.getElementById("dot-"+currentSlide).classList.add("dot_selected");
		//Appel du slide suivant à partir d'une position + le bouton blanc			
		}else{		
			addRemoveClass(currentSlide, false);
			//document.getElementById(currentSlide).classList.remove("dot_selected");
			currentSlide = currentSlide - 1;
			addRemoveClass(currentSlide, true);
			//document.getElementById(currentSlide).classList.add("dot_selected");
		}
		//recuperation des images dans html pour les slides
		imgfield.src = "./assets/images/slideshow/"+slides[currentSlide].image;
		tagLine.innerHTML = slides[currentSlide].tagLine;
	});

	sldRightBtn.addEventListener('click',function(){

  		if(currentSlide === 3){
			//document.getElementById("3").classList.remove("dot_selected");
			addRemoveClass("3",false);
			
			currentSlide = 0;
			//document.getElementById("0").classList.add("dot_selected");
			addRemoveClass(currentSlide,true);
		}else{		
			//document.getElementById(currentSlide).classList.remove("dot_selected");	
			addRemoveClass(currentSlide,false);

			currentSlide = currentSlide + 1;
			//document.getElementById(currentSlide).classList.add("dot_selected");	
			addRemoveClass(currentSlide,true);
		}

		imgfield.src = "./assets/images/slideshow/"+slides[currentSlide].image;
		tagLine.innerHTML = slides[currentSlide].tagLine;
	});
}
document.addEventListener("DOMContentLoaded",(event)=>{
	setSlides();
});


