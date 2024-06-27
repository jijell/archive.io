const nama = "JIJEL"
let usia = 20;

const biodata = document.getElementById(`biodata`);

function generateBiodata() {
    let aku;

    if (usia > 17 && usia < 26) {
        aku = "kamu sudah cukup umur";
    }
    else if (usia > 25) {
        aku = "kamu sudah lewat batas umur";
    }
    else {
       aku = "kamu masih belum cukup umur";
    }
    return biodata.innerHTML = aku;
}

console.log(nama);
console.log(usia);

generateBiodata();