//******************
//Globale Variablen*
//******************
$(document).ready(
    function(){
         $('#schluessel').hover(
            function(){
                $('#schluessel').removeClass("durchsichtig");
            })

         $("#prompt").click(
            function(){
                $("#artikelAusgabe").removeClass("Artikelclasse");
            })
         
         $("#t").click(
            function(){
                $("#artikelAusgabe").addClass("Artikelclasse");
            })
          }) 


var troll = true;
var geld = 15.00;
var aufbau = 0;
var weg=14;
var sammlung = " ";
schleife=0;

//********
//Game.js*
//********

function wegpunkt()
{
    ausgabe2 (" ");
    if (weg != 15 && weg != 9 && weg!=19 || troll == false && weg!=23)

        for (i=0; i<map.length; i++) {
            if (weg == map[i].nr) {
                for (var k =0; k < map[i].nb.length; k++ ){
                    if (map[i].nb[k].R == "z"){ 
                        sammlung = sammlung +" \"" + map[i].nb[k].R+"\"" + "<img id='pfeil'onclick='eingabe(\"z\")' src='image/pfeil_blau.png' width='120' height='120'>";
                    }
                    else {
                        sammlung = sammlung +" \"" + map[i].nb[k].R+"\"";
                    }
                }
                 aktionen("In welche Richtung gehst du?"  + sammlung );
                 sammlung= " ";
                return;
            }
        }
else {
    switch ( weg )
    {
        case 9:
            aktionen ("Was machst du? A: du gehst auf die aussichtsplatform des berges B: du gehst lieber zurück<img id='pfeil'onclick='eingabe(\"z\")' src='image/pfeil_blau.png' width='120' height='120'>");
            break;

            case 15:
                if (troll==true){
                    aktionen("Vor dir steht ein Haesslicher Troll was machst du? <img id='troll' onclick='eingabe(\"a\")' src='image/troll.png' width='291' height='300'> <img id='pfeil'onclick='eingabe(\"z\")' src='image/pfeil_blau.png' width='120' height='120'>")
                }
                else{
                    aktionen("<In welcherichtungs gehst du? (z) (o)>")
                }
                break;

        
        case 19:
            for (i=0; i < tascheninhalt.length;i++)
            {
                if (tascheninhalt[i].name=="Schluessel")
                {
                    aktionen ("Du kannst nur zurueck? (Z) <img id='pfeil'onclick='eingabe(\"z\")' src='image/pfeil_blau.png' width='120' height='120'>");
                }
                else
                {
                    aktionen ("Du kannst nur zurueck? (Z)<img id='schluessel' class='durchsichtig' onclick='eingabe(\"schluessel\")' src='image/schluessel.png' width='50' height='30'><img id='pfeil'onclick='eingabe(\"z\")' src='image/pfeil_blau.png' width='120' height='120'>");
                }
            }             
            break;

        case 23: 
            aktionen ("In welche richtung moechtest du gehen? (w) (SW) <img id='brunnen' src='image/brunnen.png' width='301' height='340'>");


    }
}
}

var bewegung = function(eingabeText){
    if (weg != 15||troll==false){
        console.log('bewegung: weg vorher: '+weg);
        for (var i = 0; i < map.length; i++) {
            if (weg == map[i].nr) {
                for (var k =0; k < map[i].nb.length; k++ ) {
                    if (eingabeText == map[i].nb[k].R ) {
                            weg = map[i].nb[k].T;
                            console.log('bewegung: weg nachher: '+weg);
                            return;
                        }   
                }
            }
        }
    }
    else {

            if  (weg==15)
        {
            if (eingabeText=='A'||eingabeText=='a')
            {
                trollfunktion();
                if (troll == false)
                {
                    console.log("gewonnen");
                    weg=15;
                    wegpunkt();
                }

                else 
                {
                    weg=14;
                    console.log("verloren");
                    wegpunkt();
                }
            }

            else if (eingabeText=='B'||eingabeText=='b')
            {
                weg=14;
            }

            else if (eingabeText=='C'||eingabeText=='c')
            {
                ausgabe("Der Troll hat dir dein ganzes Geldgeklaut! Und du musst wieder zurück von dort wo du hergekommen bist!<br /><br />");
                geld = geld - geld;
                weg=14;
            }
        }
    }
    }     



//********
//Objekte*
//********

var schluessel = {
    kraftgewinn: 0,
    name: "Schluessel",
    wo: false,
    bild:"<img src='image/schluessel.png' width='50' height='30'>"
}

var streichhoelzer = {
    kraftgewinn: 0,
    name: "Streichhoelzer",
    eigenschaften: "kann Feuer entfachen",
    bild:"<img src='image/streichhoelzer.png' width='120' height='79'>"
}

var nichts = {
    name: "Nichts",
    bild:" "

}

var trompete = {
    kraftgewinn: 1000,
    name: "trompete",
    bild: "<img src='image/Trompete.png' width='250' height='161'>",
    eigenschaften: "Macht Laerm"
}

//****************
//Funktionen.tasche*
//****************


var tasche = function (){
    var schleife = 0;
    var zusammen = " ";
    aktionen ("<img id='beutelvoninnen' onclick='wegpunkt()' src='image/beutelgross.png' width='729' height='920'>");
    while (schleife < tascheninhalt.length)
    {
        zusammen = zusammen + "<div id='artikel'>" + tascheninhalt[schleife].bild + "</div>";
        schleife++;
    }
    schleife=0;
    ausgabe2 (zusammen);
    }

// ACHTUNG!!! 
var tascheninhalt = [streichhoelzer, nichts, trompete];
var hand = 0;

//****************
//Funktionen.hand*
//****************


var InDieHand = function()
{
    so = tascheninhalt.length - 1
    if (so == hand)
    {
        hand = 0;
    }
    else 
    {
        hand++;
    }
    bildHandBox ("<p class='abstand'>In deiner Hand befindet sich momentan:</p>" + tascheninhalt[hand].bild );
}

//******************
//Funktionen.troll *
//******************

var trollfunktion = function ()
{
    
    var schadenTroll=0;
    var kraftTroll = 50;
    var schadenUser=0;
    var kraftUser=20 + tascheninhalt[hand].kraftgewinn;
    var counter=0;
    var energieUser = 100; 
    var energieTroll = 340;
    var prozentUser= 0;
    var prozentTroll = 0;
    var kraftAbzugUser = 0;
    var kraftAbzugTroll = 0;
    var stop = "M";

while (stop=="M")
{
    //ausgabe ("Du: Energie: " + energieUser + " Kraft: " + kraftUser + "<br />");
    //ausgabe ("Der Troll: Energie: " + energieTroll +" Kraft: " + kraftTroll + "<br /><br />");


    schadenUser=Math.round(Math.random() * kraftUser);
    schadenTroll=Math.round(Math.random() * kraftTroll);  


    prozentUser = Math.round(schadenTroll * (100 / energieUser));
    prozentTroll = Math.round(schadenUser * (100 / energieTroll));


    energieUser = energieUser - schadenTroll;
    energieTroll = energieTroll - schadenUser;

    console.log ("prozentUser " + prozentUser);
    console.log ("prozentTroll " + prozentTroll);

    kraftAbzugUser = Math.round(prozentUser * kraftUser / 100);
    kraftAbzugTroll = Math.round(prozentTroll * kraftTroll / 100);

    console.log ("kraftAbzugUser " + kraftAbzugUser);
    console.log ("kraftAbzugTroll " + kraftAbzugTroll);

    kraftTroll = kraftTroll - kraftAbzugTroll;
    kraftUser = kraftUser - kraftAbzugUser; 




    //ausgabe (" Troll: -" + schadenUser + "Energie <br /><br />");
    //ausgabe (" Du: -" + schadenTroll + "Energie <br /><br />");

    //ausgabe ("Du: Energie: " + energieUser + " Kraft: " + kraftUser + "<br />");
    //ausgabe ("Der Troll: Energie: " + energieTroll +" Kraft: " + kraftTroll + "<br /><br />");



        if (energieUser <= 0)
        {
            troll = true;
            stop = "k";
            weg=14;
            wegpunkt();
        }

        if (energieTroll <= 0)
        {
            troll = false; 
            stop = "k";
        }
}
}

//*****************
//Bewegung und co.*
//*****************


var ist_richtungs_angabe = function (eingabe)
{
    var Richtungen = "n|no|o|so|s|sw|w|nw|a|b|c".split('|');
    if( Richtungen.indexOf(eingabe) !== -1 ) {
        return true;
    } else {
        return false;
    }
}


function aktionen ( text )
{
    document.getElementById('prompt').innerHTML = text;
}

function ausgabe2 ( text )
{
     document.getElementById('artikelAusgabe').innerHTML = text;
}

function bildHandBox (text){
    document.getElementById('hand').innerHTML = text;
}

function eingabe(eingabeText)
{
    

    if (ist_richtungs_angabe(eingabeText) )
    {
        
        bewegung(eingabeText)
        wegpunkt();
    }
    else 
    {
        switch ( eingabeText)
        {
        
            case 'q':
            case 'Q':
                InDieHand();
                break;

                case 't':
                case 'T':
                tasche();
                break;

            case "schluessel":
                    tascheninhalt.push(schluessel);
                    wegpunkt();
                break;

            case "untersuche brunnen":
                brunnen();
                break;

            case 'z':
                weg=14;
                wegpunkt();
                break;
        }
    }
}
wegpunkt(); 
