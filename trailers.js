var painandgain = '<div class="review-box"><iframe width="100%" height="400px" src="https://www.youtube.com/embed/SEQ8jyvmYtw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
var wolfofwallstreet = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/pabEtIERlic" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var spiderman = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/n9DwoQ7HWvI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var prometheus = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/34cEo0VhfGE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var exmachina = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/EoQuVnKhxaM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var celeste = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/iofYDsA2yqg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var frostpunk = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/qqEpSOFDXGA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var octopath = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/Fmi8KrntszI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var battleforazeroth = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/jSJr3dXZfcg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var godofwar = '<iframe width="100%" height="400" src="https://www.youtube.com/embed/K0u_kAWLJOA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

function trailer(embedlink, movietitle) {
  var div = document.getElementById(movietitle);
  div.innerHTML += embedlink;
}
