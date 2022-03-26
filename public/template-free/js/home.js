$(document).ready(function () {

    $('#u-form').on('submit').validate({
        ignore: "",
        rules: {
            nama_panggilan_w: {
                required: true
            },
            nama_panggilan_p: {
                required: true
            },
            tanggal_resepsi: {
                required: true
            },
            mulai_resepsi: {
                required: true
            }
        },
        messages: {
            nama_panggilan_w: {
                required: 'Nama Panggilan Wanita <small><font color="red">*Tidak boleh kosong.</font></small>',
            },
            nama_panggilan_p: {
                required: 'Nama Panggilan Pria <small><font color="red">*Tidak boleh kosong.</font></small>',
            },
            tanggal_resepsi: {
                required: 'Tanggal Resepsi <small><font color="red">*Tidak boleh kosong.</font></small>',
            },
            mulai_resepsi: {
                required: 'Waktu Mulai Resepsi <small><font color="red">*Tidak boleh kosong.</font></small>',
            }
        },

        submitHandler: function (form) {
            var formData = new FormData($('#u-form')[0]);
            $.ajax({
                type: 'POST',
                url: `${$('#url').val()}/update-mempelai`,
                data: formData,
                contentType: false,
                enctype: 'multipart/form-data',
                processData: false,
                success: function (resp) {
                    $('.btn').prop('disabled', false);
                },
                beforeSend: function (resp) {
                    $('.btn').prop('disabled', true);
                },
                complete: function (resp) {
                    // console.log(resp);
                    var myJSON = JSON.stringify(resp);
                    console.log(resp);
                    if (resp.responseText.trim() == "1") {

                        let timerInterval
                        var ask = swal.fire({
                            title: 'Berhasil!',
                            html: 'Selamat data berhasil di update <b></b>.',
                            timer: 3000,
                            timerProgressBar: true,
                            onBeforeOpen: () => {
                                Swal.showLoading()
                                timerInterval = setInterval(() => {
                                    const content = Swal.getContent()
                                    if (content) {
                                        const b = content.querySelector('b')
                                        if (b) {
                                            let detik = Swal.getTimerLeft() / 1000
                                            b.textContent = Math.round(detik)
                                        }
                                    }
                                }, 100)
                            },
                            onClose: () => {
                                clearInterval(timerInterval)
                            }
                        }).then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === Swal.DismissReason.timer) {}
                        })
                        window.location = `${$('#url').val()}/pernikahan-login`;

                    } else {
                        if (resp.responseText == "Big") {
                            $('#alertna').html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Ukuran gambar atau format gambar tidak sesuai!</strong> silahkan coba lagi.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`)
                        window.location= `#alertna`;
                        } else {
                            var ask = swal({
                                icon: 'error',
                                title: 'Periksa Koneksi Internet Anda dan Silahkan Coba Lagi!',
                                html: "Terjadi Kesalahan Dalam Penyimpanan Data!",
                                type: "warning",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Close!",
                                closeOnConfirm: false,
                                closeOnCancel: false,
                                customClass: 'swal-wide',
                                width: '950px',
                                allowEnterKey: false,
                                allowOutsideClick: false,
                            }).then((result) => {})
                        }
                        $('.btn').prop('disabled', false);
                    }


                }
            });
            return false;
        }
    });
});
