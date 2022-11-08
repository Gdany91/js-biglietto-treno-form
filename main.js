/* Descrizione:
Riscrivere il programma del calcolo del biglietto del treno in versione completa,
la logica rimane esattamente la stessa,
ma con interfaccia utente reale, grazie alla manipolazione del DOM vista questa mattina insieme.Vi consigliamo di andare in questo ordine per non perdervi sui nuovi passaggi: 

MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), portiamo la logica che abbiam fatto sull’esercizio di ieri sull’uso di un interfaccia reale, anche se ancora grezza appunto. La risposta finale (o output) sarà anch’essa da scrivere grezza per ora.

MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form completo e stilizzato in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il price e output completo stilizzato. Il price rimane sempre con massimo due decimali.Nota:
- Chiaramente assicuratevi prima che l’ex di ieri sia corretto in tutto ciò che vi serve, così da poter riciclare tutto il possibile nel nuovo esercizio, quindi in caso prima correggete quella parte;
- fate attenzione a che tipo di dato vi ritorna un input :occhiolino:  ;
- Se non vi sentite particolarmente creativi, vi alleghiamo uno screeshot per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.Buon divertimento :fianco_treno_alta_velocità: */


const myButton = document.querySelector("button");
/* let price = distance * 2 */

myButton.addEventListener("click",

    function () {

        const age = document.getElementById ("age").value;
        const distance = document.getElementById("distance").value;
        let price = distance * 2;
        let totPrice;
    
        if (age < 18) {
            
            totPrice = price - (price * 0.2) ;
            document.getElementById("ticket").innerHTML= "il tuo biglietto costa " + totPrice + "€" ;
        }

        else if (age > 64) {
        
            totPrice = price - (price * 0.4) ;
            document.getElementById("ticket").innerHTML= "il tuo biglietto costa " + totPrice + "€" ;
        }

        else {
        
            document.getElementById("ticket").innerHTML= "il tuo biglietto costa " + price + "€" ;

        }

    }
)