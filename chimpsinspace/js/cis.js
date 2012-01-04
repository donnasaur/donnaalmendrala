$(function() {
  var genre = [
    "Action", 
    "Crime", 
    "Drama",
    "Science Fiction",
    "Expedition",
    "Fantasy",
    "Horror",
    "Musical",
    "Adventure",
    "Suspense",
    "Mystery",
    "Sports",
    "Romance",
    "Documentary",
    "Comedy",
    "Thriller",
    "War",
    "Western"
  	];
  var setting = [
  	"Underworld",
  	"Suburbs",
  	"Post-Apocalypse",
  	"Blue-Collar Workplace",
  	"Newsroom",
  	"Military Academy",
  	"White-Collar Workplace",
  	"Wilderness",
  	"Farm",
  	"School",
  	"International",
  	"Religious Retreat",
  	"College",
  	"Prison",
  	"Small Vessel",
  	"Frontier",
  	"Colony"
  	];
  var plot = [
  	"Commitment",
  	"Discovery",
  	"Loss",
  	"Revenge",
  	"Opposites Attract",
  	"Self-Defense",
  	"Valor",
  	"Sacrifice",
  	"Honor",
  	"Secrets",
  	"True Love",
  	"Just Desserts",
  	"Identity",
  	"Loyalty",
  	"Competition",
  	"Family",
  	"Betrayal",
  	"Hubris",
  	"Rise And Fall"
  	];
  
  function createStory() {
    $('div.genre').text(genre[Math.floor(Math.random()*genre.length)]);
    $('div.setting').text(setting[Math.floor(Math.random()*setting.length)]);
    $('div.plot').text(plot[Math.floor(Math.random()*plot.length)]);
  }
  
  $('a.generate').click (
    function() {
      createStory();
  });
  
});