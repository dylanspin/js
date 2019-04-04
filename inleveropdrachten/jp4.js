


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
            op += op * 0.005; //timer
        }, 10);
      }

 function check(){
   var naam = document.getElementById('0').value;
   var adres = document.getElementById('1').value;
   var woon = document.getElementById('2').value;
   var postcode = document.getElementById('3').value;
   var land = document.getElementById('4').value;
   var beroep = document.getElementById('6').value;

   var r =/[a-zA-Z]+/g;
   var adr = /^([1-9][e][\s])*([a-zA-Z]+(([\.][\s])|([\s]))?)+[1-9][0-9]*(([-][1-9][0-9]*)|([\s]?[a-zA-Z]+))?$/i;
   var post = /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i;
   var i = (r.test(naam));
   var l = (adr.test(adres));
   var p = (post.test(postcode));
   var l = (r.test(land));
   var w = (r.test(woon));
   var b = (r.test(beroep));

     console.log(beroep);
     console.log(b);
     if(i){}
     else{
       window.alert("geen Naam");
     }
     if(l){}
     else{
       window.alert("geen Adres");
     }
     if(p){}
     else{
       window.alert("geen Woonplaats");
     }
     if(p){}
     else{
       window.alert("geen Postcode");
     }
     if(l){}
     else{
       window.alert("geen Land");
     }
     if(b){}
     else{
       window.alert("geen beroep");
     }
 }

 function check1(){
   var naam = document.getElementById('0').value;
   var adres = document.getElementById('1').value;
   var woon = document.getElementById('2').value;
   var postcode = document.getElementById('3').value;
   var land = document.getElementById('4').value;
   var beroep = document.getElementById('6').value;

   var r =/[a-zA-Z]+/g;
   var adr = /^([1-9][e][\s])*([a-zA-Z]+(([\.][\s])|([\s]))?)+[1-9][0-9]*(([-][1-9][0-9]*)|([\s]?[a-zA-Z]+))?$/i;
   var post = /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i;
   var i = (r.test(naam));
   var l = (adr.test(adres));
   var p = (post.test(postcode));
   var l = (r.test(land));
   var w = (r.test(woon));
   var b = (r.test(beroep));

     console.log(beroep);
     console.log(b);
     if(i){}
     else{
       window.alert("no Name");
     }
     if(l){}
     else{
       window.alert("no Address");
     }
     if(p){}
     else{
       window.alert("no residence");
     }
     if(p){}
     else{
       window.alert("no Zip code");
     }
     if(l){}
     else{
       window.alert("no Country");
     }
     if(b){}
     else{
       window.alert("no Job");
     }
 }
