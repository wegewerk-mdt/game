var weg = -1;

function wegpunkt()
{
    switch ( weg )
    {
 /*       case 0:

            ausgabe ("Hi ich bin die Stimme in deinem Kopf<br /><br />");
            aktionen ("Wie hei�t du?");
            console.log(weg);

            break;
*/

        case -1:

            ausgabe ("Ich habe geh�rt das es in dem Gro�en Wald einen Schatz geben soll! <br /><br />");
            aktionen ("Kommst du mit mir mit den Schatz suchen? A: Ja Klar gerne!  B: N� ich habe keine Lust C: Was, ich wei� nicht ist das gef�hrlich?");
            console.log(weg);

            break;

        case -2:

            ausgabe ("Sehr sch�n also auf ins Abenteuer! <br /><br /> [...] <br /> [...] <br /> [...] <br />");
            console.log(weg);

            break;

        case -3:

            ausgabe ("Viel Spa�! Und auf wiedersehen ich muss los einen Schatz bergen! <br /><br />");
            console.log(weg);

            break;

        case -4:

            ausgabe ("Ich habe eine idee wir Spielen Schere, Stein, Papier der Gewinner entscheidet was wir machen! <br /><br />");
            aktionen ("Was w�hlst du Schere, Stein oder Papier?");
            console.log(weg);

            break;

        case -5:

            ausgabe (userInfo+": " + "Schere" + "  <br /> Computer: Stein <br /> Es sieht so aus als h�tte ich gewonnen! Also los gehen wir! <br /><br />");
            console.log(weg);

            break;

        case -6:

            ausgabe (userInfo+": " + "Papier" + "  <br /> Computer: Schere <br /> Es sieht so aus als h�tte ich gewonnen! Also los gehen wir! <br /><br />");
            console.log(weg);

            break;

        case -7:

            ausgabe (userInfo+": " + "Stein" + " <br /> Computer: Papier <br /> Es sieht so aus als h�tte ich gewonnen! Also los gehen wir! <br /><br />");
            console.log(weg);

            break;

        case -8:

            ausgabe ("Du bist nach einem Langen Fu�marsch am Waldrand angekommen dort steht ein Ticketh�uschen du hast noch <br />" + geld + " � in der Tasche.<br /><br /> ");
            aktionen ("M�chtest du f�r 4,50� eine Karte kaufen? (Tiket) oder dich lieber reinschleichen? (B�se)");
            console.log(weg);

            break;
       
       case -9:

            ausgabe ("Du hast recht alles muss seine Korektheit haben! Ich Liebe brave Menschen!<br /><br />");
            console.log(weg);

            break;


       case -10:

            ausgabe ("Sehr gut, schei� Kapitalistenschweine!<br /><br /> ");
            console.log(weg);

            break;

wegpunkt();

    }
}

function bewegung ( richtung )
{

/*        if (weg==0)
        {
            userInfo=document.getElementById('in').value;
            weg=-1 ;
            console.log(userInfo);
        } */

        if (weg==-1)
        {

            if (richtung=="A"||richtung=="a")
            {
                weg=-2;
            }

        }

        if (weg==-2)
        {
            weg=-8;

        }

        if (weg==-3)
        {

        }

        if (weg==-4)
        {

        }

        if (weg==-5)
        {

        }

        if (weg==-6)
        {

        }

        if (weg==-7)
        {

        }

        if (weg==-8)
        {

        }

        if (weg==-9)
        {

        }

        if (weg==-10)
        {

        }

        if (weg==-11)
        {

        }

        if (weg==-12)
        {

        }
wegpunkt();
}

wegpunkt();      

