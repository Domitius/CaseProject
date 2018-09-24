var movies = {
	// Assign increments of 1, starting at 1 (Object inside of an object)
	1: {
		title: "Spiderman: Homecoming",
		description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
		rating: 73,
		trailer: '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/n9DwoQ7HWvI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
		poster: "images/spiderman.jpeg"
	},

	2: {
		title: "The Wolf of Wall Street",
		description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
		rating: 75,
		trailer:'<iframe width="100%" height="400px" src="https://www.youtube.com/embed/pabEtIERlic" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
		poster: "images/wolfofwallstreet.jpg"
	},

	3: {
		title: "Pain and Gain",
		description: "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
		rating: 45,
		trailer: '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/SEQ8jyvmYtw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
		poster: "images/paingain.jpg"
	},

	4: {
		title: "Prometheus",
		description: "Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone",
		rating: 64,
		trailer: '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/34cEo0VhfGE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
		poster: 'images/prometheus.jpg'
	},

	5: {
		title: "Ex Machina",
		description: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.",
		rating: 78,
		trailer: '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/EoQuVnKhxaM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
		poster: 'images/exmachina.jpg'
	}
}
// Declaring Array
var movieArray = [];
// Pushing object movies into array
movieArray.push(movies);

// FIXME NEED TO REPLACE INFORMATION
var games = {
	1: {
		title: "Celeste",
		description: "An explorer tackles the challenges of anxiety and depression through the physical challenegs of scaling a mountain.",
		rating: 88,
		trailer: '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/iofYDsA2yqg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
		poster: "images/celeste.png"
	},

	2: {
		title: "Frostpunk",
		description: "Rebuild society after an apocolyptic event in this resource-manger/city-builder, balancing typical resources and opportunities with ethical decisions.",
		rating: 67,
		trailer:'<iframe width="100%" height="400px" src="https://www.youtube.com/embed/qqEpSOFDXGA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
		poster: "images/frostpunk.jpg"
	},

	3: {
		title: "Octopath Traveler",
		description: "Follow eight adventurers as they join forces while tackling their own individual challenges and a common threat.",
		rating: 62,
		trailer: '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/Fmi8KrntszI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
		poster: "images/octopath.jpg"
	},

	4: {
		title: "World of Warcraft: Battle for Azeroth",
		description: "In the newest expansion to Blizzard's World of Warcraft, the Horde and the Alliance have re-energized their war with each other. But external threats may force the factions to work together again for the survival of all.",
		rating: 74,
		trailer: '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/jSJr3dXZfcg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
		poster: 'images/wowbfa.jpg'
	},

	5: {
		title: "God of War (2018)",
		description: "In the newest installment in the God of War series, Kranos and his son must challenge beings from the Norse pantheon to fulfill the final wish of Kranos' late wife.",
		rating: 91,
		trailer: '<iframe width="100%" height="400" src="https://www.youtube.com/embed/K0u_kAWLJOA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
		poster: 'images/godofwar.jpg'
	}
}
// Declaring Array
var gameArray = [];
// Pushing object games into array
gameArray.push(games);

// Flagging variable for info function
let flag = false;

// array, indexnumber for oject within object, and title
function info(array, indexNumber, title) {
	// Gather Review Box for Movie
	var titleDiv = document.getElementById(title);
	// Seeing how many div#info are on the page
	var docInfo = document.querySelectorAll('div#info').length;
	// Gather div#Poster
	var poster = titleDiv.childNodes[3];
	// If there is 1 or more div#info
	if (flag) {
		var flagTitle = flag[0];
		var flagDiv = document.getElementById(flagTitle);
		var flagPoster = flagDiv.childNodes[3];
		// Remove the info box of moveDiv
		removeElement(flagTitle);
		// Current img src = movie poster from array
		flagPoster.childNodes[1].src = flag[1];
		// Resizing poster
		flagPoster.childNodes[1].style = "height: 100%; width: 100%;";
		// Changing background-color back to white
		flagDiv.style = 'background-color: white;';
		flag = false;
	} else {
		// Replace movie poster with X image
		var defImg = poster.childNodes[1].src;
		poster.childNodes[1].src = 'images/x.png';
		// Shrinking and positoning X.png
		poster.childNodes[1].style = 'width: 35%; height: auto; margin-top: 95%;';
		// appended movie info to current titleDiv
		titleDiv.innerHTML += '<div id="info">'+'<img src="'+array[0][indexNumber].poster+'" id="moviePoster"><div id="info-right"><h1>'+array[0][indexNumber].title+'</h1><p>'+array[0][indexNumber].description+'</p><strong>Rating: '+array[0][indexNumber].rating+'/100</strong>'+array[0][indexNumber].trailer+'</div></div>';
		// CSS Styling
		titleDiv.style = 'background-color: #696969; color: #F8F8FF;';
		flag = [title, defImg];
	}
}

// Removes an element from the document
function removeElement(titleDiv) {
	// Checks to see if titleDiv exists
	if (titleDiv) {
		// Gathering first div#info
		var info = document.getElementById('info');
		//div#info parent remove Child(div#info)
		info.parentNode.removeChild(info);
	}
}
