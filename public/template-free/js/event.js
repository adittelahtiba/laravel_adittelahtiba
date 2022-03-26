$(document).ready(function () {
    $('.btn-add').on('click', function (e) {
        $('#turut-mengundang').append(`
        <div class="input-group mt-2 anak-undang">
        <input type="text" name="diundang[]" class="form-control" placeholder="Ketikan disini..." aria-label="Recipient's username with two button addons">
        <button class="btn btn-outline-danger btn-min" type="button"><i class="fas fa-user-minus"></i></button>
    </div>
        `);
    })

    $('#turut-mengundang').on('click', '.btn-min', function (e) {
        console.log($(this.offsetParent));
        $(this.offsetParent).html('')
    })


    $('#custom-akad').hide();
    $('#custom-resepsi').hide();

    $('#akad_custom').change(function () {
        if ($(this).is(':checked')) {
            $('#custom-akad').show();
            $('#akad_selesai').prop('checked', false);
        } else {
            $('#akad_selesai').prop('checked', true);
            $('#custom-akad').hide();
        }
    })

    $('#akad_selesai').change(function () {
        if ($(this).is(':checked')) {
            $('#custom-akad').hide();
            $('#akad_custom').prop('checked', false);
        } else {
            $('#akad_custom').prop('checked', true);
            $('#custom-akad').show();
        }
    })

    $('#resepsi_custom').change(function () {
        if ($(this).is(':checked')) {
            $('#custom-resepsi').show();
            $('#resepsi_selesai').prop('checked', false);
        } else {
            $('#custom-resepsi').hide();
            $('#resepsi_selesai').prop('checked', true);
        }
    })

    $('#resepsi_selesai').change(function () {
        if ($(this).is(':checked')) {
            $('#custom-resepsi').hide();
            $('#resepsi_custom').prop('checked', false);
        } else {
            $('#custom-resepsi').show();
            $('#resepsi_custom').prop('checked', true);
        }
    })


    $('#u-form').on('submit').validate({
        ignore: "",
        rules: {
            tanggal_akad: {
                required: true,
            },
            mulai_akad: {
                required: true,
            },
            lokasi_akad: {
                required: true,
            },
            tanggal_resepsi: {
                required: true,
            },
            mulai_resepsi: {
                required: true,
            },
            lokasi_resepsi: {
                required: true,
            },
            youtube: {
                url: true,
                minlength: 11
            }
        },
        messages: {
            tanggal_akad: {
                required: 'Tanggal Akad Nikah <small><font color="red">*Tidak boleh kosong.</font></small>',
            },
            mulai_akad: {
                required: 'Waktu Mulai <small><font color="red">*Tidak boleh kosong.</font></small>',
            },
            lokasi_akad: {
                required: 'Lokasi Akad <small><font color="red">*Tidak boleh kosong.</font></small>',
            },
            tanggal_resepsi: {
                required: 'Tanggal Resepsi Nikah <small><font color="red">*Tidak boleh kosong.</font></small>',
            },
            mulai_resepsi: {
                required: 'Waktu Mulai <small><font color="red">*Tidak boleh kosong.</font></small>',
            },
            lokasi_resepsi: {
                required: 'Lokasi Resepsi <small><font color="red">*Tidak boleh kosong.</font></small>',
            },
            youtube: {
                url: 'Link Youtube <small><font color="red">*Link youtube tidak valid.</font></small>',
                minlength: 'Link Youtube <small><font color="red">*Link youtube harus lebih dari 11 karakter.</font></small>',
            }
        },

        submitHandler: function (form) {
            var formData = new FormData($('#u-form')[0]);
            $.ajax({
                type: 'POST',
                url: `${$('#url').val()}/update-event`,
                data: formData,
                id: '100',
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
                        window.location = `${$('#url').val()}/pernikahan-login#event`;

                    } else {
                        if (resp.responseText == "Big") {
                            $('#alertna').html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Ukuran gambar atau format gambar tidak sesuai!</strong> silahkan coba lagi.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`)
                            window.location = `#alertna`;
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
