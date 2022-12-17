// let prviBroj = 5;
// console.log(prviBroj)

// let ime = 'Amin';
// let prezime = 'Nicevic';
// let godine = 17;

// console.log(ime);
// console.log(prezime);
// console.log(godine);

// let recenica = 'Ja sam ' + ime + ' imam ' + godine + ' godina';
// //nadodavanje stringova i brojeva

// console.log(recenica);

// console.log('Ove godine imam ' + godine + ' godina')

// // godine = godine+1; nacin1
// // godine++           nacin2
// godine += 1;
// let recenica = 'Sledece cu imati ' + godine + ' godina ' 

// let recenica = `Ja sam ${ime} imam ${godine} godina`
// //najbolji nacin za ubacivanje varijabli u stringu
// console.log(recenica)

// let prviBroj = 10;
// let drugiBroj = 5;
// let treciBroj = 7;
// let cetvrtiBroj = 8;

// let rezultat = prviBroj - drugiBroj;
// console.log(prviBroj > drugiBroj);
// //true
// console.log(treciBroj > cetvrtiBroj);
// //false

// console.log((prviBroj > drugiBroj) && (treciBroj > cetvrtiBroj));
// //false zbog toga sto trebaju oba iskaza da budu tacna
// //moraju oba iskaza da budu tacna da && bio true

// console.log((prviBroj > drugiBroj) || (treciBroj > cetvrtiBroj));
//pokazuje true jer kod || treba samo jedan iskaz da bude tacan

// let prviBroj = 5;
// let drugiBroj = 10;

// if(prviBroj < drugiBroj){
// //ako je ovo true onda ce se ovo ispisati u konzoli
//     console.log('prvi broj je manji od drugog')
// } else {
//     console.log('prvi broj nije manji od drugog')
//     //ako je ovo ovde false onda ce se ovo ispisati u konzoli
// }

// let vreme = 19;
// if (vreme < 12){
//     console.log('Dobro jutro!')
// } else if (vreme < 20) {
//     console.log('Dobar dan!')
// } else {
//     console.log('Dobro vece!')
// }

// let mesec = 3;
// if(mesec === 1 ){
//     console.log('Januar')
// } else if (mesec === 2){
//     console.log(Februar)
// } else if (mesec === 3){
//     console.log('Mart')
// }
//ovako bi radili else if 12 puta i nbe treba tako da se radi
//nego cemo koristiti switch

// let mesec = 11;

// switch(mesec){
//     case 1:
//         console.log('Januar');
//         break;
//     case 2:
//         console.log('Februar');
//         break;
//     case 3:
//         console.log('Mart');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     case 5:
//         console.log('Maj');
//         break;  
//     case 6:
//         console.log('Jun');
//         break;  
//     case 7:
//     console.log('Jul');
//         break; 
//     case 8:
//         console.log('Avgust');
//         break;  
//     case 9:
//         console.log('Septembar');
//         break;  
//     case 10:
//         console.log('Oktobar');
//         break;  
//     case 11:
//         console.log('Novembar');
//         break;  
//     case 12:
//         console.log('Decembar');
//         break;              
// }
// ovako treba da pisemo ove uslove kada ih ima vise ;)


//  PETLJE
//Petlje sluze da se odredjeni dio koda ponavlja sve dok se ne ispuni neki uslov

// //25 novcanica
// let novcanica = 30 ;

// //10eura vrednost jedne novcanice
// let vrednostNovcanice = 10; 

// //brojac
// let brojac = 0;

// //izbrojane novcanice
// let izbrojaneNovcanice = 0;

// //while - dok 'broji novcanice sve dok je brojac manji od broja novcanica'
// while(brojac < novcanica){
//     izbrojaneNovcanice++ //ovo odavde moze da se makne jer je dupli brojac
//     brojac++ //ovo ne moze jer bi napravili infinitive petlju tj beskonacnu petlju 
// }

// console.log(izbrojaneNovcanice * vrednostNovcanice);



// sta ako su nam novcanice razliciyte vrednosti za to koristimo  nizove.

// let novcanice = [10, 5, 20, 50, 100, 5, 10, 5, 20, 50, 100, 20];

// console.log(novcanice.length)

// let brojNovcanica = novcanice.length;
// //izbrojane novcanice
// let izbrojaneNovcanice = 0;

// //while - dok 'broji novcanice sve dok je brojac manji od broja novcanica'
// while(izbrojaneNovcanice < brojNovcanica){
//     izbrojaneNovcanice++  
// }

// console.log('broj izbrojanih novcanica: ' + izbrojaneNovcanice)

// ===== 
// let novcanice = [10, 5, 20, 50, 100, 5, 10, 5, 20, 50, 100, 20];
// let brojNovcanica = novcanice.length;
// let brojac = 0;//od nule pocinje zato sto i niz pocinje od nule
// while(brojac < brojNovcanica){ //ovaj blok koda se celo vreme ponavlja
//     console.log('-------');
//     console.log('uslov prosao');
//     console.log(`novcanica na poziciji [${brojac}] je ${novcanice[brojac]}`)
//     // console.log(novcanice[brojac]) //ispisuje sve novcanice od pocetka do kraja jednu ispod druge

//     brojac++ //brojac se povecava posle svakog brojenja za po 1
// }

// console.log('### KRAJ PETLJE###')
// if (brojac < brojNovcanica){
//     console.log('brojac je manji');
// } else {
//     console.log('xxxxxxxxxxxxxx')
//     console.log('brojac nije manji')
// }

//PREKO FOR PETLJE SAD
// let novcanice = [10, 5, 200, 20, 50, 100, 5, 10, 5, 20, 50, 100, 20];
// let brojNovcanica = novcanice.length;
// // let brojac = 0;
// let ukupnoNovca = 0;

// for(brojac = 0; brojac < brojNovcanica; brojac++){
//     // for(let brojac in novcanice){
//     console.log(novcanice[brojac]);

//     ukupnoNovca += novcanice[brojac];
// }
// console.log('###KRAJ PETLJE###');
// console.log('Ukupno imamo '+ukupnoNovca+ ' eura');

//novi i jednostavniji nacin

// let novcanice = [10, 5, 200, 20, 50, 100, 5, 10, 5, 20, 50, 100, 20];

// for(let brojac in novcanice){
//     console.log(`brojac: ${brojac}`);
//     console.log(novcanice[brojac]);
//     console.log('---------')
// }

//novi primer
// let automobili = ['audi', 'bmw', 'porshce'];

// for(let automobil of automobili ){
//     console.log(automobil)
// }

//jos jedan primer

// let automobili = ['audi', 'bmw', 'porshce', 'mercedes'];

// automobili.forEach(function(automobil) {
// console.log(automobil);
// });

//prvi susret sa funkcijom .

//objekti sledeci -->
//objekti nemaju brojanje kao sto imaju nizovi, nego mi treba da mu zadamo sta ima umesto toga

// let automobili = { 
//     prviAuto:'Audi',
//     drugiAuto:'BMW',
//     treciAuto:'Porsche',
//     cetvrtiAuto:'Mrcedes'
// };
// console.log(automobili)
//nema smisla da mi pisemo prvi, drugi, treci ,cetvrti... itd zbog toga radimo sledece --->

// let automobili = {
//     audi:'50000e',
//     BMW: '60000e',
//     Porsche: '75000e',
//     Mercedes: '1000000e'
// };
// console.log(automobili);
//ispisali smo cene automobila
//sta ako zelimo da imamo hjos informacija o svakom autu pojedinacno npr. godiste model...
//u sledecem primeru stavljamo za svaki auto poseban niz 
//u sledecem primeru imamo 4 niza smestena u jedan objekat

// let automobili = {
//     audi:['70000e', '2017', 'Q7'],
//     BMW:['50000e', '2018', '330D'],
//     Porsche:['60000e', '2016', 'Boxter'],
//     Mercedes:['1000000e', '2020','s400']
// };
// console.log (automobili)

//sad ovo premestamo u for petlju
// let automobili = {
//     audi:['70000e', '2017', 'Q7'],
//     BMW:['50000e', '2018', '330D'],
//     Porsche:['60000e', '2016', 'Boxter'],
//     Mercedes:['1000000e', '2020','s400']
// };
// for(automobil in automobili){
//     console.log(automobil)
// }
//in korisimo za objekte 
//ali sada nam samo daje nazive auta
// let automobili = {
//     audi:['70000e', '2017', 'Q7'],
//     BMW:['50000e', '2018', '330D'],
//     Porsche:['60000e', '2016', 'Boxter'],
//     Mercedes:['1000000e', '2020','s400']
// };
// for(automobil in automobili){
//     let naziv = automobil; 
//     // console.log(naziv) 
//     let podaciOVozilu = automobili[automobil];
//     // console.log(podaciOVozilu)

//     console.log(`${naziv} model:${podaciOVozilu[2]}, 
//             godiste:${podaciOVozilu[1]},
//             cena:${podaciOVozilu[0]} eura.`);
// }
//ovde gore smo tacno prikazali informacije.

// let automobili = {
//     audi:['70000e', '2017', 'Q7'],
//     BMW:['50000e', '2018', '330D'],
//     Porsche:['60000e', '2016', 'Boxter'],
//     Mercedes:['1000000e', '2020','s400']
// };
// console.log(automobili['audi'])
// console.log(automobili.audi)


// let osoba ={
//     ime: 'Amin',
//     prezime:'Nicevic',
//     godiste:'2004',
//     grad:'Novi Pazar'
// };
// // console.log(osoba.ime); //dobijamo amin
// console.log(`Ime:${osoba.ime}, 
// Prezime:${osoba.prezime},
// Godiste:${osoba.godiste},
// Grad:${osoba.grad}
// `)


//    FUNKCIJE


//STAN




// let nekretnine = {   //znaci ovo su ovde objekti njima manipulisemo sa .stan .kuca .plac itd.. 
//     stan: 60000,
//     kuca: 130000,
//     plac: 30000
// };
// //racunanje rate za svaku pod nekretnina
// let godine = 15 ; 
// let meseci = godine * 12;  //10 godina * 12 meseci
// let rata = nekretnine.stan / meseci;
// rata = rata.toFixed(2)// da se prikazuje broj u dve decimale

// console.log(meseci + 'meseci'); //koliko meseci placate ratu
// console.log(rata + 'eura'); //koliko iznosi vasa rata
// console.log(`Mesecna rata za stan iznosi ${rata} eura na ${godine} godina`);

// // -----

// //PLAC
//  godine = 5 ;
//  meseci = godine * 12 ;
//  rata = nekretnine.plac / meseci ;
//  rata = rata.toFixed(2)

//  console.log('-----')
//  console.log(meseci + ' meseci'); 
// console.log(rata + 'eura');
//  console.log(`Mesecna rata za plac iznosi ${rata} eura na ${godine} godina`);

// // -----

// //KUCA
// godine = 10 ;
// meseci = godine * 12 ;
// rata = nekretnine.kuca / meseci ;
// rata = rata.toFixed(2)

// console.log('-----')
// console.log(meseci + ' meseci'); 
// console.log(rata + 'eura');
// console.log(`Mesecna rata za kucu iznosi ${rata} eura na ${godine} godina`);


//da nebismo ponavljali ovaj kod i kopirali ga iznova 
// da ga nebismo ponavljali trebaju nam FUNKCIJE
// FUNKCIJE sluze da u njih smestimo jedan deo koda koji se ponavlja i poziva vise puta

// let nekretnine = { //ovo je ovde objekat 
//     stan: 60000,
//     kuca: 130000,
//     plac: 30000
// };

// //proracun za stan na 15 godina
// racunanjeMesecneRate (15,'stan');
// //proracun za kucu na 5 godina
// racunanjeMesecneRate (5, 'kuca');
// //proracun za plac na 10godina
// racunanjeMesecneRate (10, 'plac');

// /*
// ova funkcija izracunava mjesecnu ratu za
// odrejenu nekretninu na odredjeni broj godina.
// */
// function racunanjeMesecneRate /*<---ovo je ime funkcije*/(godine, vrstaNekretnine){
//     let meseci = godine * 12; //puta 12 meseci
//     let rata = nekretnine[vrstaNekretnine] / meseci; //vrstaNekretnine jeste kako ce da vam se zove ono sto je u objektu od nekretnine
//     rata = rata.toFixed(2)

//     console.log('-------')
//     console.log(`Mesecna rata za ${vrstaNekretnine} iznosi ${rata} eura na ${godine} godina`);

// };



//UPRAVLJANJE RAZLICITIM ELEMENTIMA HTML STRANICE

// let brend = document.getElementsByTagName('span');

// for(let auto of brend){
//     console.log(auto.innerText)
// }
// console.log('-------');
// // console.log(brend[0].innerText)
// // console.log(brend[1].innerText)
// // console.log(brend[2].innerText) // moze i ovako da se ispisuje

// let modeli = document.getElementsByClassName('automobil-model');

// for (let model of modeli){
//     console.log(model.innerText)
// }

// console.log('--------')
// let najbolji = document.getElementById('recenica');
// console.log(najbolji.innerText)

//sad cemo da probamo da samo preko jedne funkcije odradimo sve ovo...

// brend = document.querySelector('span') //ovako se dobija samo jedan i ovo bi ispisalo samo audi
// console.log(brend);

// let brend = document.querySelectorAll('span')

// for (let auto of brend){
//     console.log(auto.innerText);
// }

// let modeli = document.querySelectorAll('.automobil-model');//ispred stavljamo tacku jer je klasa
// //kada koristimo querySelector(All) treba da napisemo tacno kako selektujemo
// // console.log(modeli);

// console.log('----------------')

// for (let model of modeli){
//     console.log(model.innerText);
// }

// let recenica = document.querySelector('#recenica')   
// //uvek kada znamo da imamo samo taj jedan element na stranici onda idemo querySelector bez All 
// //i on ce uvek selektovati samo to prvo
// console.log('----------------')
// console.log(recenica.innerText)


//Sada cemo OBRISATI recenicu iz HTML preko JavaScripta
//selektovali smo element po id i obrisali ga.
// let recenica = document.querySelector('#recenica')
// recenica.remove();
// //nema recenice na ekranu + nema recenice u kodu u inspect elements

// //a sada cemo da napravimo novi element
// let noviEl = document.createElement('div'); 
// //u zagradama pisemo koji cemo element

// console.log(noviEl)
// //ima ga samo u konzoli i nasem js 
// //ne prikazuje se na stranici

// noviEl.classList = 'novi-element'; 
// //sada smo mu dodali klasu pomocu .classList
// // i dalje nije u kodu 

// let body = document.querySelector('body');
// //ovde smo odredili gde cemo da nalepimo nas html element

// document.appendChild(noviEl);
// //ovde smo ga nalepili samo sto je prazan i ne vidi se

// noviEl.innerText = 'Pozdrav!!!';
// // sada vidimo nas nalepljeni html element na stranici
// console.log(noviEl)
// umesto ovoga mozemo ispisati i 
// noviEl.innerHTML = '<hr>Pozdrav!!!'
// i ovako cemo ispisati vise html elemenata


//sada cu da ispisem kod kako treba pravilno po redosledu
// let noviEl = document.createElement('div');
// noviEl.classList = 'novi-element';
// noviEl.innerText = 'Pozdrav!!!';

// let body = document.querySelector('body');
// body.appendChild(noviEl)
