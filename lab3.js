"use strict"
var meny = [    
    
     "klass1" = [
         {"Name" : "Margarita","Ingr" : "Tomatsås, Ost","Pris" : "65 kr"},
         {"Name" : "Vesuvio","Ingr" : "Tomatsås, Ost, Skinka","Pris" : "65 kr"},
         {"Name" : "Altono","Ingr" : "Tomatsås, Ost, Tonfisk","Pris" : "65 kr"}
     ]];
     /*{
     "klass2" : [
         {"Name" : "Calzone","Ingr" : "Tomatsås, Ost, Skinka","Pris" : "80 kr" },
         {"Name" : "Capricciosa","Ingr" : "Tomatsås, Ost, Skinka, Champinjoner","Pris" : "70 kr"},
         {"Name" : "Tomaso","Ingr" : "Tomatsås, Ost, Skinka, Räkor","Pris" : "70 kr" },
         {"Name" : "Hawaii","Ingr" : "Tomatsås, Ost, Skinka, Ananas","Pris" : "70 kr"},
         {"Name" : "Oriental","Ingr" : "Tomatsås, Ost, Skinka, Köttfärs","Pris" : "70 kr"},
         {"Name" : "Venezia","Ingr" : "Tomatsås, Ost, Skinka, Tonfisk","Pris" : "70 kr"},
         {"Name" : "Bolognese","Ingr" : "Tomatsås, Ost, Köttfärs, Lök","Pris" : "70 kr"},
         {"Name" : "Napoli","Ingr" : "Tomatsås, Ost, Räkor, Champinjoner","Pris" : "70 kr"}
         ]},
         {
         "klass3" : [
             {"Name" : "Bravo","Ingr" : "Tomatsås, Ost, Skinka, Bacon, Lök, Ägg","Pris" : "75 kr"},
             {"Name" : "Princessa","Ingr" : "Tomatsås, Ost, Skinka, Räkor, Champinjoner","Pris" : "75 kr"},
             {"Name" : "Kroppkärr","Ingr" : "Tomatsås, Ost, Skinka, Köttfärs, Champinjoner","Pris" : "75 kr"},
             {"Name" : "Afrikano","Ingr" : "Tomatsås, Ost, Ananas, Curry, Banan","Pris" : "75 kr"},
             {"Name" : "Önska","Ingr" : "Tomatsås, Ost, Skinka, Räkor, Champinjoner","Pris" : "85 kr"},
             {"Name" : "Lambada","Ingr" : "Tomatsås, Ost, Skinka, Köttfärs, Räkor","Pris" : "75 kr"},
             {"Name" : "Alsterdalen","Ingr" : "Tomatsås, Ost, Skinka, Crabfish, Räkor","Pris" : "75 kr"},
             {"Name" : "Paradis","Ingr" : "Tomatsås, Ost, Skinka, Räkor, Ananas","Pris" : "75 kr"},
             {"Name" : "Roma","Ingr" : "Tomatsås, Ost, Skinka, Kantareller, Tomater (färska)","Pris" : "75 kr"},
             {"Name" : "Banjogatan","Ingr" : "Tomatsås, Ost, Skinka, Salami, Paprika","Pris" : "75 kr"},
             {"Name" : "Rimini","Ingr" : "Tomatsås, Ost, Köttfärs, Gorgonzolaost, Lök","Pris" : "75 kr"},
             {"Name" : "Opera","Ingr" : "Tomatsås, Ost, Köttfärs, Ananas, Curry, Banan","Pris" : "75 kr"},
             {"Name" : "Mesopotamia","Ingr" : "Tomatsås, Ost, Salami, Köttfärs, Nötter","Pris" : "75 kr"}
         ]},
         {
         "Såser" : [
             {"Namn" : "Bearnaisesas","Pris" : "10 kr"},
             {"Namn" : "Kebabsås mild","Pris" : "10 kr"},
             {"Namn" : "Kebabsås stark","Pris" : "10 kr"},
             {"Namn" : "Kebabsås blandad","Pris" : "10 kr"},
             {"Namn" : "Tzatziki","Pris" : "10 kr"},
             {"Namn" : "Vitlök","Pris" : "10 kr"}
         ]},
         {
         "Dryck" : [
             {"Namn" : "Coca-Cola","Pris" : "15 kr"},
             {"Namn" : "Coca-Cola light","Pris" : "15 kr"},
             {"Namn" : "Fanta","Pris" : "15 kr"},
             {"Namn" : "Sprite","Pris" : "15 kr"},
             {"Namn" : "Mineralvatten","Pris" : "15 kr" },
             {"Namn" : "Lättöl","Pris" : "15 kr"},
             {"Namn" : "Coca-Cola stor","Pris" : "20 kr"},
             {"Namn" : "Fanta stor", "Pris" : "20 kr"}
         ]
        }]*/
    
window.addEventListener('load', function(){

    
   this.console.log(meny);
   this.console.log(meny.length);
   this.console.log(meny[0]);
   this.console.log(Object.values(meny[0]).length);

   /*let tabRefs = document.querySelectorAll('.tab-pane > p');
   for(var i = 0; i<meny.length; i++){
    let keys = Object.keys(meny[i]);
    this.console.log(meny[i]);
    this.console.log(keys.length);
  
       for(var j = 0; j<meny[i].length; j++){
           this.console.log(meny[i].length);
           for(var k = 0; k<meny[i][j].length; k++){
            this.console.log( i, j, k);
            this.console.log(meny[i][j][k]);
            let tmpTxt = meny[i][j][k].Name + "\t" + meny[i][j][k].Ingr + "\t" + meny[i][j][k].Pris +"\n";
            let tmpTxtNode = document.createTextNode(tmpTxt);
            
            tabRefs[j].appendChild(tmpTxtNode);
           }
       }
   }*/
});