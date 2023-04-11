var json = '';

$(document).ready(function() {
  var repo = 'https://raw.githubusercontent.com/weder96/biblia/master/json/aa.json';
  $.getJSON(repo, function(data){
    json = data;
    getVerse();
  });
  
  $("#btnNew").on("click", function() {
    getVerse();
  });
});

function getVerse(){
  if(json){
    book = Math.floor(Math.random() * json.length);
    chapter = Math.floor(Math.random() * json[book].chapters.length);
    verse = Math.floor(Math.random() * Object.keys(json[book].chapters[chapter][chapter + 1]).length);
    $(".title").html(json[book].book + " " + (chapter + 1) + ":" + (verse + 1));
    $("p").html(json[book].chapters[chapter][chapter + 1][verse + 1]);
  }
}