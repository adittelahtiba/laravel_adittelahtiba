let username_char = ['Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Escape', 'Home', 'End', 'Tab', 'a', 'Control', 'Backspace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '_', 'Shift', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', 'CapsLock', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
$('#username').on('keyup', (a) => {
    $('#link').val('miunika.com/pernikahan-' + $('#username').val());
})

$('#username').on('keydown', (a) => {
    return username_char.includes(a.originalEvent.key);
})


$(document).ready(function () {

    $('#u-form').on('submit').validate({
        ignore: "",
        rules: {
            username: {
                required: true,
                minlength: 8
            },
            password: {
                minlength: 6
            },
            password2: {
                minlength: 6,
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                required: 'Username <small><font color="red">*Username Tidak boleh kosong.</font></small>',
                minlength: 'Username <small><font color="red">*Minimal 8 Digit.</font></small>'
            },
            password: {
                minlength: 'Password Baru <small><font color="red">*Minimal 6 Digit.</font></small>'
            },
            password2: {
                minlength: 'Konfirmasi Password <small><font color="red">*Minimal 6 Digit.</font></small>',
                equalTo: 'Konfirmasi Password <small><font color="red">*Konfirmasi password harus sama.</font></small>'
            }
        },

        submitHandler: function (form) {
            $.ajax({
                type: 'POST',
                url: `${$('#url').val()}/update-akun/${$('#id_mempelai').val()}`,
                data: $('#u-form').serialize(),
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
                            if (result.dismiss === Swal.DismissReason.timer) {
                                // window.location = `../login`;
                            }
                        })

                    } else {
                        if (resp.responseText == "Used") {
                            $('#alertna').html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Username sudah digunakan orang lain!</strong> silahkan coba lagi.
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
