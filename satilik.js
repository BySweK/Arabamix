var showroom = document.getElementById("showroom");
var list1 = document.querySelector("#list1");
var list2 = document.querySelector("#list2");
var showroomname = document.getElementById("name");
var showroomimage = document.getElementById("img");
var showroomisim = document.getElementById("isim");
var showroommodel = document.getElementById("model");
var showroomkm = document.getElementById("km");
var showroomfiyat = document.getElementById("fiyat");

list1.addEventListener("click", function () {
  showroom.style.display = "block";
  showroomname.textContent = "Audi";
  showroomfiyat.textContent = "Günlük 4000 TL";
  showroomisim.textContent = "Ali İhsan Şenkılıç";
  showroomkm.textContent = "300.000 km";
  showroommodel.textContent = "2021";
  showroomimage.src = "img/araba1.jpg";
});

list2.addEventListener("click", function () {
  showroom.style.display = "block";
  showroomname.textContent = "Ferrari";
  showroomfiyat.textContent = "Günlük 1900 TL";
  showroomisim.textContent = "Murat Yavuz";
  showroomkm.textContent = "600.000 km";
  showroommodel.textContent = "2019";
  showroomimage.src = "img/araba2.jpg";
});

list3.addEventListener("click", function () {
  showroom.style.display = "block";
  showroomname.textContent = "Nissan";
  showroomfiyat.textContent = "Günlük 3600 TL";
  showroomisim.textContent = "Mahsun Koç";
  showroomkm.textContent = "100.000 km";
  showroommodel.textContent = "2022";
  showroomimage.src = "img/araba3.jpg";
});
