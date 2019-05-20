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
		renderNonsense(input.value);
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
	}
    function copyToClipboard() {
        blurbcopy.select();
        document.execCommand("copy");
        document.getElementById("copydialog").style.display = "block";
    }

	const LoremMaker = function(){
		let words = ["a","ac","accumsan","aenean","aliquam","aliquet","amet","ante","arcu","at","auctor","augue","bibendum","commodo","condimentum","congue","consectetur","consequat","convallis","cras","curabitur","cursus","dapibus","diam","dictum","dignissim","dis","dolor","donec","dui","duis","efficitur","egestas","eget","eleifend","elementum","elit","enim","erat","eros","est","et","etiam","eu","euismod","ex","facilisi","facilisis","fames","faucibus","felis","fermentum","feugiat","finibus","fringilla","fusce","habitant","hendrerit","id","illegitimi","imperdiet","in","integer","ipsum","justo","lacinia","lacus","laoreet","lectus","leo","libero","ligula","lobortis","lorem","luctus","maecenas","magna","magnis","malesuada","mattis","mauris","maximus","mentus","metus","mi","molestie","mollis","montes","morbi","mus","nam","nascetur","natoque","nec","neque","netus","nibh","nisi","nisl","non","noncompis","nulla","nullam","nunc","odio","orci","ornare","parturient","pellentesque","penatibus","phasellus","placerat","porta","porttitor","posuere","pretium","proin","pulvinar","purus","quam","quis","quisque","rhoncus","ridiculus","risus","rutrum","sagittis","sapien","scelerisque","sed","semper","senectus","sit","sodales","sollicitudin","stupido","suscipit","suspendisse","tellus","tempus","tincidunt","tortor","tristique","turpis","ullamcorper","ultrices","ultricies","urna","ut","varius","vehicula","vel","velit","venenatis","vestibulum","vitae","vivamus","viverra","volutpat","vulputate"];
		function getLorem(count = 0){
			count = Number(count);
			let warr = [];
			let len = words.length;
			count = count > 0 ? count : randRange(30,len-1);
	
			for (let i=0;i<count;i++){
				let randomWord = words[randRange(0,len-1)];
		  		warr.push(randomWord);
			}
			for (let i=0;i<count;i++){
			  if (i % 10 === 0){
				warr[i] = warr[i].substring(0,1).toUpperCase() + warr[i].substring(1);
				 if (i>=150 && i % 150 === 0){
				   warr[i] = "<br><br>" + warr[i];
				 }
			  }
			  if (i % 10 === 9 || i === count - 1){
				warr[i] = warr[i] + ".";
			  }
			}
			return {"blurb":warr.join(" "),"count":count};
		}

		return {"getLorem":getLorem}
	}();
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
        blurbcopy.value = sonnets[num].join("\n");
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