function kirimData() {
    var name = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal").value;
    var pembayaran = document.getElementById("pembayaran").value;
    var jenis = document.querySelector("input[name=jenis]:checked").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;


    alert(
        "Nama : " + name +
        "\nTanggal : " + tanggal +
        "\nPembayaran : " + pembayaran +
        "\njenis : " + jenis +
        "\nEmail : " + email +
        "\nAlamat : " + alamat
    );
}

// Mengatur tanggal saat ini pada elemen input tanggal
var currentDate = new Date