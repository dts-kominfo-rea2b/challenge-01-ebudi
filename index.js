// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
let isHavePet = new Map();
isHavePet.set('Monica','Yes');
isHavePet.set('Wendy','No');

function Pendidikan(inName, inCity, inGraduate){
    this.name = inName;
    this.city = inCity;
    this.graduate = inGraduate;
}
const sdMonica = new Pendidikan("SD 01", "Jakarta", 2016);
const smpMonica = new Pendidikan("SMP 02", "Jakarta", 2019);
const smaMonica = new Pendidikan("SMA 03", "Tangerang");
const sdWendy = new Pendidikan("SD 02", "Jakarta", 2010);
const smpWendy = new Pendidikan("SMP 03", "Bogor", 2013);
const smaWendy = new Pendidikan("SMA 01", "Surabaya", 2016);
const univWendy = new Pendidikan("Universitas Maju", "Tangerang");

const FavoRestoUser1 = Array.from(
    new Set([
      "Bento",
      "Sushi",
      "Pancake",
      "Eggy",
      "Tempura",
      "Bento",
      "Eggy",
      "Padang",
      "Tteok",
      "Sushi",
      "Sushi"
    ])
)
  
const FavoRestoUser2 = Array.from(
    new Set([
      "Tempura",
      "Bento",
      "Sushi",
      "Pancake",
      "Padang",
      "Katsu",
      "Geprek",
      "Pancake",
      "Eggy"
    ])
)

const firstUser = {
    name: "Monica",
    gender:"Female",
    age:"17",
    email:"monica@dingdong.com",
    favoriteColor: [
        'Yellow', 'Pink', 'White', 'Purple'
    ],
    isHavePet: isHavePet.get('Monica'),
    education: {sdMonica,smpMonica,smaMonica},
    favoriteRestaurant: FavoRestoUser1
};

const secondUser = {
    name: "Wendy",
    gender:"Male",
    age: "23",
    email:"wendy@dingdong.com",
    favoriteColor: [
        'Blue', 'Black', 'Grey'
    ],
    isHavePet: isHavePet.get('Wendy'),
    education: {sdWendy,smpWendy,smaWendy,univWendy},    
    favoriteRestaurant: FavoRestoUser2    
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};