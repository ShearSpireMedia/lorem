import { LoremMaker } from './loremmaker.js';

(function(){
	let makebtn, copybtn, input, output, blurbcopy, sonnets, sonnetbtn, titlehead, loremObject;
	function init(){
		titlehead = gid("titlehead");
		makebtn = gid("makebtn");
		copybtn = gid("copybtn");
		input = gid("wordcount");
		output = gid("blurb");
		blurbcopy = gid("blurbcopy");
		makebtn.addEventListener("click",showLoremText,false);
		copybtn.addEventListener("click",copyToClipboard,false);
		sonnetbtn = gid("sonnetbtn");
		sonnetbtn.addEventListener("click",showSonnet,false);
		renderLoremText(-1);
		document.removeEventListener("DOMContentLoaded", init);
		gid("closealert").addEventListener("click",function(){
			closeDialog();
		});
		gid("closealert").addEventListener("keyup",function(e){
			if (e.key === 'Escape') {
				closeDialog();
			}
		});
	}

	function closeDialog() {
		gid("copydialog").style.display = "none";
		gid("copybtn").focus();
	}

	function showLoremText(){
		titlehead.innerHTML = "The Text You Requested";
	  	renderLoremText(input.value);
	}
	function renderLoremText(num){
		loremObject = LoremMaker.getLorem(num);
		output.innerHTML = loremObject.blurb;
        blurbcopy.value = loremObject.blurb.split("<br>").join("\n");
		input.value = loremObject.count;
	}
    function copyToClipboard() {
        blurbcopy.select();
        document.execCommand("copy");
        gid("copydialog").style.display = "block";
		gid("closealert").focus();
    }

	//utility functions
	function randRange(min, max) {
		return Math.floor(Math.random()*(max-min+1))+min;
	}
	function gid(elid){
		return document.getElementById(String(elid));
	}
	window.addEventListener('load', function (e) {
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