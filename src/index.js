(function(){
	let makebtn, copybtn, input, output, blurbcopy;
	function init(){
	  makebtn = document.getElementById("makebtn");
	  copybtn = document.getElementById("copybtn");
	  input = document.getElementById("wordcount");
	  output = document.getElementById("blurb");
	  blurbcopy = document.getElementById("blurbcopy");
	  makebtn.addEventListener("click",showNonsense,false);
	  copybtn.addEventListener("click",copyToClipboard,false);
	  renderNonsense(input.value);
	  document.removeEventListener("DOMContentLoaded", init);
	}
	function showNonsense(){
	  renderNonsense(input.value);
	}
	function renderNonsense(num){
		let loremObject = LoremMaker.getLorem(num);
	 	 output.innerHTML = loremObject.blurb;
	 	 if (Number(num) === 0){
			 input.value = loremObject.count;
		 }
        blurbcopy.value = output.innerText;
	}
    function copyToClipboard() {
        blurbcopy.select();
        document.execCommand("copy");
        alert("Your nonsense is in the clipboard. You may now paste it into your layout.");
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
		//random number utility function
		function randRange(min, max) {
			return Math.floor(Math.random()*(max-min+1))+min;
		}
		return {"getLorem":getLorem}
	}();
	
	document.addEventListener("DOMContentLoaded", init);
}());