// cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c'

//Variabel dapat menampung tipe data string (Text), integet/number, boolean, array, object

let nama =  "deku"; //string
let umur = 25; //number
let ApakahBenar = true; //boolean
let uang = 2000.2 //number namun ada koma

//operator aritmatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, 'pertambahan');
console.log(angka1 - angka2, 'perkalian');
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 * angka2, 'modulus');

//Disini aku belajar mengisi variabel :3
let PenampungHasilOperatorAritmatika = angka1 + angka2;
console.log(PenampungHasilOperatorAritmatika); //30

PenampungHasilOperatorAritmatika = angka1 - angka2;
console.log(PenampungHasilOperatorAritmatika); //-10

PenampungHasilOperatorAritmatika = angka1 / angka2;
console.log(PenampungHasilOperatorAritmatika); //2

PenampungHasilOperatorAritmatika = angka1 * angka2;
console.log(PenampungHasilOperatorAritmatika); //200

PenampungHasilOperatorAritmatika = angka1 % angka2;
console.log(PenampungHasilOperatorAritmatika); //0.5 paling

//string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika
let firstname = 'Midoriya';
let lastname = 'izuku';
let fullname = firstname + ' ' + lastname;
console.log(fullname)
console.log(firstname + ' ' +  lastname);
console.log(lastname - firstname); //Nane

//alur pembacaan code
//untuk membaca code kalian harus dari kiri ke kanan, dan atas kebawah
//contoh

let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10); //20
number = false
console.log(number + 10); //10

//pertanyaam kenapa false - 10 tetap menjadi 10?? karna false = 0, dan true = 1;
console.log(true + 10); //11

//membaca error
//error itu seharusnya jangan ditauti, seharunya takut kalau tidak ada yang namanya error dalam pemorgraman 
//karna dala pengerjaan kalau suatu fitur berjalan namun ada bug tapi tidak error, itu bikin si progamer rada
//muak mencari error atau letak kesalahannya

// contoh error
// const hewan = 'jerapah';
// console.log(hewan)
// hewan = 'buaya';``

//auto komentar bisa dengan mencet ctrl + /

//Tips nya adalah selalu teliti, dan jika ada error dibaca, dan emang butuh kebiasaan