const btnSelengkapnya = document.getElementById('btn-selengkapnya');
const teksLengkap = document.getElementById('tentang-lengkap');

btnSelengkapnya.addEventListener('click', function () {
  const tersembunyi = teksLengkap.classList.toggle('tersembunyi');
  if (tersembunyi) {
    btnSelengkapnya.textContent = 'Selengkapnya';
  } else {
    btnSelengkapnya.textContent = 'Lebih Sedikit';
  }
});