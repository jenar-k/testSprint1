/* 
SOAL A
Buatlah sebuah program untuk membantu seorang pustakawan dalam mengelola sebuah rak dengan ketentuan sebagai berikut :
1. Membuat pilihan menu dimana pustakawan bisa menambah buku, meminjamkan buku, mengembalikan buku, dan mengganti buku.
2. Membuat sebuah rak dengan array yang memuat 5 buku. Lalu dengan menggunakan function, tambahkan 5 buku dengan judul bebas.
3. Membuat sebuah function yang memungkinkan pustakawan meminjam buku dimana apabila terdapat buku yang dipinjam, tempat yang ditinggalkan buku tersebut dibiarkan kosong. Berikut ilustrasinya
 */

var rakBuku = [];
rakBuku = ['Buku 1','Buku 2','Buku 3','Buku 4','Buku 5']

//show all buku
// document.write(rakBuku);

//tambah rak dengan memuat 5 buku
document.write('Tambah Rak dengan 5 buku' + '<br>')
var rakBuku2 = [];
rakBuku2 = ['Buku 6','Buku 7','Buku 8','Buku 9','Buku 10']
document.write(rakBuku + '<br>' + rakBuku2)


//Pinjam Buku nomor 2 di rak1
document.write('<br>')
document.write('<br>')
document.write('Pinjam Buku nomor 2 di rak 1' + '<br>')
rakBuku.splice(1,1,'')
document.write(rakBuku.join('<br>'))


//kembali buku nomor 2 ke dalam rak
document.write('<br>')
document.write('<br>')
document.write('Kembalikan buku nomor 2 ke dalam rak 1' + '<br>')
rakBuku.splice(1,1,'Buku 2')
document.write(rakBuku.join('<br>'))


//ganti koleksi buku
document.write('<br>')
document.write('<br>')
document.write('Ganti koleksi buku nomor 2 dengan buku 11 ke dalam rak 1' + '<br>')
rakBuku.splice(1,1,'Buku 11')
document.write(rakBuku.join('<br>'))




/* 
SOAL B
Buatlah sebuah program pembelian elektronik sederhana dengan ketentuan sebagai berikut :
Terdapat array yang digunakan untuk menyimpan data barang elektronik. Silahkan isi array dengan 5 jenis barang (bebas)
Terdapat 4 macam inputan yaitu, Nama barang, Jumlah barang, Harga barang, dan Discount
Output yang diharapkan dari program ini adalah sebagai berikut 
 */


var namaBarang = parseInt(prompt('Masukkan Nama barang: '));
var hargaSatuan = parseInt(prompt('Masukkan Harga Barang: '));
var jumlah = parseInt(prompt('Masukkan Jumlah Barang: '));
var diskon = parseInt(prompt('Masukkan diskon: '));

function harga (total) {
    total = hargaSatuan * jumlah / diskon * 100%
    return total;
}

var namaBarangA = namaBarang
var hargaSatuanA = hargaSatuan
var jumlahA = jumlah

document.write ('Nama Barang : ' namaBarang + '<br>');
document.write ('Harga : ' hargaSatuan + '<br>');
document.write ('Jumlah : ' jumlah + '<br>');
document.write ('Diskon : ' diskon + '%' + '<br>');
document.write ('Total : ' harga * jumlah / diskon * 100% + '<br>' );






