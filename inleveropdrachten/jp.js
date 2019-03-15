
var speler = true;
    function Achtergrond(t){
      var div = t.id;
        if (speler){
          document.getElementById(div).style.backgroundColor = "#1B63DF";
          speler = false;
          document.getElementById(div).innerHTML ="<div class='center'><h1 class = 'een'>" + "0" +"</h1></div>";
        }
        else{
          document.getElementById(div).style.backgroundColor = "#F45A18";
          speler = true;
          document.getElementById(div).innerHTML ="<div class='center'><h1 class = 'een'>" + "×" +"</h1></div>";
        }
    }
