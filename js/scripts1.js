	var expandableContent = document.getElementById("homepageH2c").addEventListener("click",expandableContentFunction);
function expandableContentFunction(){
	console.log("function expandableContentFunction");
	var x = document.getElementById("expandableDiv");
	if (x.style.display==="none") {
		x.style.display = "block";
		var expandableContent = document.getElementById("homepageH2c").innerHTML="others -";
	}
	else{
		x.style.display="none";
		var expandableContent = document.getElementById("homepageH2c").innerHTML="others +";
	}
}