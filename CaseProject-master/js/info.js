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
var gameArray = [];
// Pushing object games into array
gameArray.push(games);

// // Video Games
// var celeste = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/iofYDsA2yqg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
// var frostpunk = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/qqEpSOFDXGA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
// var octopath = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/Fmi8KrntszI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
// var battleforazeroth = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/jSJr3dXZfcg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
// var godofwar = '<iframe width="100%" height="400" src="https://www.youtube.com/embed/K0u_kAWLJOA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

// array, indexnumber for oject within object, and title
function info(array, indexNumber, title) {
	// Gather Review Box for Movie
	var titleDiv = document.getElementById(title);
	// Seeing how many div#info are on the page
	var docInfo = document.querySelectorAll('div#info').length;
	// Gather div#Poster
	var poster = titleDiv.childNodes[3];
	// If there is 1 or more div#info
	if (docInfo >= 1) {
		// Remove the info box of moveDiv
		removeElement(titleDiv);
		// Current img src = movie poster from array
		poster.childNodes[1].src = array[0][indexNumber].poster;
		// Resizing poster
		poster.childNodes[1].style = "height: 100%; width: 100%;";
		// Changing background-color back to white
		titleDiv.style = 'background-color: white;';
	} else {
		// Replace movie poster with X image
		poster.childNodes[1].src = 'images/x.png';
		// Shrinking and positoning X.png
		poster.childNodes[1].style = 'width: 35%; height: auto; margin-top: 95%;';
		// appended movie info to current titleDiv
		titleDiv.innerHTML += '<div id="info">'+'<img src="'+array[0][indexNumber].poster+'" id="moviePoster"><div id="info-right"><h1>'+array[0][indexNumber].title+'</h1><p>'+array[0][indexNumber].description+'</p><strong>Rating: '+array[0][indexNumber].rating+'/100</strong>'+array[0][indexNumber].trailer+'</div></div>';
		// CSS Styling
		titleDiv.style = 'background-color: #696969; color: #F8F8FF;';
	}
}

// Removes an element from the document
// FIXME
function removeElement(titleDiv) {
	// Checks to see if titleDiv exists
	if (titleDiv) {
		// Gathering first div#info
		var info = document.getElementById('info');
		//div#info parent remove Child(div#info)
		info.parentNode.removeChild(info);
	}
}
