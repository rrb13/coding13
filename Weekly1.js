// Buatlah fungsi untuk mengklasifikasikan rentang umur menjadi 4 yaitu muda, remaja, dewasa, tua. 
// dengan inputan atau parameter 'age' bertipe number dan mengembalikan string

// contoh ketika fungsi dipanggil dengan inputan/parameter angka 18
// maka fungsi mengembalikan string berupa "kamu remaja"
// kategori umur = muda (0-11 tahun), remaja (12-25 tahun), dewasa (26-45 tahun), dan lansia (46 tahun keatas)

function myAge(age) {
    if (age < 0) {
        console.log('Coba masukan umurmu yang benar')
    } else if (age < 11) {
        console.log('Kamu masuk kategori umur muda')
    } else if (age < 26) {
        console.log('Kamu masuk kategori umur remaja')
    } else if (age < 46) {
        console.log('Kamu masuk kategori umur dewasa')
    } else if (age > 46) {
        console.log('Kamu masuk kategori umur tua')
    }

}

console.log('contoh 1')
myAge(-10)
console.log('______________________________________________')
console.log('contoh 2')
myAge(5)
console.log('______________________________________________')
console.log('contoh 3')
myAge(18)
console.log('______________________________________________')
console.log('contoh 4')
myAge(35)
console.log('______________________________________________')
console.log('contoh 5')
myAge(50)
