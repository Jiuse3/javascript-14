
var fondi = 1000;
var numeroAcquisti = 0;
var totale = 0;

document.getElementById('spesa').addEventListener('click', function(){
     while ( fondi >= 200) {
    let acquisti = Math.floor(( Math.random()* 100 )+40);
    fondi = fondi - acquisti;
     document.getElementById('lista').innerHTML += ` <li> Spesa: ${acquisti} <br>
      Budget aggiornato: ${fondi}</li>`;
     numeroAcquisti ++;
     document.getElementById('totale').innerHTML = `Numero Acquisti: ${numeroAcquisti}`;
     totale = totale + acquisti;
    document.getElementById('valore').innerHTML =` Valore acquisti: ${totale}`;
    document.getElementById('fermati').innerHTML= `Hati speso più di 200£`;

 }

});



document.getElementById('annulla').addEventListener('click', function(){
	document.getElementById("lista").innerHTML= '';
	document.getElementById("totale").innerHTML= '';
    document.getElementById("valore").innerHTML= '';  
document.getElementById("fermati").innerHTML= '';

});
