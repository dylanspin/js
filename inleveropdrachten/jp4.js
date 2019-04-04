
var naam = document.getElementById('0');
var adres = document.getElementById('1');
var woon = document.getElementById('2');
var postcode = document.getElementById('3');
var land = document.getElementById('4');
var beroep = document.getElementById('beroep');

   var click = true;
    function select(){
      var vak1 = document.getElementById('vak1');
      var vak2 = document.getElementById('vak2');
        if (click){
          for(b=0; b<=9; b++){
          document.getElementById('vak1').style.backgroundColor = "#1B63DF";
          document.getElementById('vak2').style.backgroundColor = "white";
          document.getElementById(b).style.backgroundColor = "green";
          document.body.style.backgroundColor = "#1D4F1D";
          document.getElementById('een').style.backgroundColor = "green";
          document.getElementById('twee').style.backgroundColor = "green";
          click = false;
        }
        }
        else{
          for(i=0; i<=9; i++){
          document.getElementById('vak2').style.backgroundColor = "#1b63df";
          document.getElementById('vak1').style.backgroundColor = "white";
          document.getElementById(i).style.backgroundColor = "#DB12DB";
          document.body.style.backgroundColor = "purple";
          document.getElementById('een').style.backgroundColor = "#DB12DB";
          document.getElementById('twee').style.backgroundColor = "#DB12DB";
          click = true;
        }
      }
    }

     function leeftijd(){
       var geboorte = document.getElementById('5').value;
       var info = document.getElementById('leeftijd');
       var dag = +new Date(geboorte);
       var lf = ((Date.now() - dag) / (31557600000));
       var leeftijd = parseInt(lf);
       var op = 0.1;
        document.getElementById('leeftijd').innerHTML = "<h1>"+leeftijd+"</h1>";
        var timer = setInterval(function () {
          if (op >= 1){
              clearInterval(timer);
          }
            info.style.opacity = op;
            info.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.005;
        }, 10);
      }

 function naam(){
   var r =/^[a-zA-Z]/;
   console.log(r.test(naam));
     if(r){

     }
     else{
       window.alert("Geboortedatum");
     }
 }
