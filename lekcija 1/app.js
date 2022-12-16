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

//25 novcanica
let novcanica = 30 ;

//10eura vrednost jedne novcanice
let vrednostNovcanice = 10; 

//brojac
let brojac = 0;

//izbrojane novcanice
let izbrojaneNovcanice = 0;

//while - dok 'broji novcanice sve dok je brojac manji od broja novcanica'
while(brojac < novcanica){
    izbrojaneNovcanice++ //ovo odavde moze da se makne jer je dupli brojac
    brojac++ //ovo ne moze jer bi napravili infinitive petlju tj beskonacnu petlju 
}

console.log(izbrojaneNovcanice * vrednostNovcanice);