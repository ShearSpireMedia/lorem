import { LoremMaker } from './loremmaker.js';

(function(){
	let makebtn, copybtn, input, output, blurbcopy, sonnets, sonnetbtn, titlehead;
	function init(){
		titlehead = document.getElementById("titlehead");
		makebtn = document.getElementById("makebtn");
		copybtn = document.getElementById("copybtn");
		input = document.getElementById("wordcount");
		output = document.getElementById("blurb");
		blurbcopy = document.getElementById("blurbcopy");
		makebtn.addEventListener("click",showNonsense,false);
		copybtn.addEventListener("click",copyToClipboard,false);
		sonnetbtn = document.getElementById("sonnetbtn");
		sonnetbtn.addEventListener("click",showSonnet,false);
		renderNonsense(-1);
		document.removeEventListener("DOMContentLoaded", init);
		document.getElementById("closealert").addEventListener("click",function(){
			document.getElementById("copydialog").style.display = "none";
		});
		}
	function showNonsense(){
		titlehead.innerHTML = "The Nonsense You Requested";
	  renderNonsense(input.value);
	}
	function renderNonsense(num){
		let loremObject = LoremMaker.getLorem(num);
	 	 output.innerHTML = loremObject.blurb;
	 	 if (Number(num) === 0){
			 input.value = loremObject.count;
		 }
        blurbcopy.value = loremObject.blurb.split("<br>").join("\n");
		input.value = blurbcopy.value.split(" ").length;
	}
    function copyToClipboard() {
        blurbcopy.select();
        document.execCommand("copy");
        document.getElementById("copydialog").style.display = "block";
    }

	//random number utility function
	function randRange(min, max) {
		return Math.floor(Math.random()*(max-min+1))+min;
	}
	document.addEventListener('DOMContentLoaded', function (e) {
		try {
			init(e);
			getSonnets();
		} catch (error){
			console.log("Data didn't load", error);
		}
	});
	function showSonnet(){
		titlehead.innerHTML = "The Shakespeare Sonnet You Requested";
		let num = randRange(0,sonnets.length-1);
		output.innerHTML = sonnets[num].join("<br>") + "<br>(Sonnet #" + (num+1) + ")";
        blurbcopy.value = sonnets[num].join("\n") + "\n(Sonnet #" + (num+1) + ")";
	}
	function setSonnets(j){
		sonnets = [];
		for (let i=0;i<j.length;i++){
			sonnets[i] = j[i].lines.slice();
		}
		sonnetbtn.style.display = "inline-block";
	}
	function getSonnets(){
		fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/652/sonnets.json').then(function(response) {
			if(response.ok) {
				return response.json();
			}
			throw new Error('Network response was not ok.');
		}).then(function(myJson) {
			setSonnets(myJson);
		}).catch(function(error) {
			console.log('There has been a problem with your fetch operation: ', error.message);
		});
	}
}());