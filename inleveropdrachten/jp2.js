

  function Block(Block) {

  var loc = 2.3;
  
      LINKS = 37,
      RECHTS = 39,
      BOVEN = 38,
      BENEDEN = 40;

      switch (Block) {
      case LINKS:
       document.getElementById(1.1).style.backgroundColor = "#1B63DF";
        break;
      case RECHTS:
       document.getElementById(1.2).style.backgroundColor = "#1B63DF";
        break;
      case BOVEN:
       document.getElementById(1.3).style.backgroundColor = "#1B63DF";
        break;
      case BENEDEN:
       document.getElementById(1.4).style.backgroundColor = "#1B63DF";
         break;
      default:
       document.querySelector("#geen").innerHTML = "<h1>geen arrow key</h1>";
         break;
    }

}

    function check(event) {
      var indruk = event || window.event,
        knop = (indruk.which) ? indruk.which : indruk.keyCode;

        Block(knop);

        return false;
    }
    document.onkeydown = check;
