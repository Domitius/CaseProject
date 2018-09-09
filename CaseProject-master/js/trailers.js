// Movies
var painandgain = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/SEQ8jyvmYtw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var wolfofwallstreet = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/pabEtIERlic" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var spiderman = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/n9DwoQ7HWvI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var prometheus = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/34cEo0VhfGE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var exmachina = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/EoQuVnKhxaM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

// Video Games
var celeste = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/iofYDsA2yqg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var frostpunk = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/qqEpSOFDXGA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var octopath = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/Fmi8KrntszI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var battleforazeroth = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/jSJr3dXZfcg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var godofwar = '<iframe width="100%" height="400" src="https://www.youtube.com/embed/K0u_kAWLJOA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

let triggered = [false,false,false,false,false,false,false,false,false,false];

function trailer(embedlink, movietitle, trigIndex) {
	var div = document.getElementById(movietitle);
	if(!triggered[trigIndex]) {
		div.innerHTML += embedlink;
		triggered[trigIndex] = true;
	} else {
		var childs = div.childNodes;
		for (var i = 0; i < childs.length; i++) {
			var thisChild = childs[i];
			if (thisChild.nodeName == "IFRAME") {
				div.removeChild(thisChild);
			}
		}
		triggered[trigIndex] = false;
	}
}
