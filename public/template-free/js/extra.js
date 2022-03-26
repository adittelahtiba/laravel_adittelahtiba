$(document).ready(function () {
    $('#sound-option').on('change', () => {
        get_lagu($('#sound-option').val());
    })

    get_lagu($('#id_sound').val())

    function get_lagu(id) {
        if (id == 0) {
            $('#tempat-lagu').html(`
            <div>
                <label for="formFileLg" class="form-label">Pilih file audio anda sendiri.</label>
                <input class="form-control form-control-lg" id="formFileLg" name="audio" type="file" accept="audio/*" required>
            </div>
            <div>
                <input class="form-control form-control-sm mt-2" id="formFileLg" name="sumber" type="text" placeholder="Tuliskan sumber (contoh: https://www.youtube.com, dsb.)">
            </div>
            `)
        } else {
            $.getJSON(`${$('#url').val()}/get-lagu/${id}`, (data) => {
                $('#tempat-lagu').html(`
            <h6>${data.judul}</h6>
            <audio controls>
                <source src="${$('#url').val()}/assets/audio/${data.file}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <p>Sumber : <a href="${data.sumber}" target="_blank">${data.sumber}</a></p>
            `);
            });
        }
    }

    $('#s-form').on('submit').validate({
        ignore: "",
        rules: {
            audio: {
                required: true
            },
            sumber: {
                url: true
            },

        },
        messages: {
            audio: {
                required: '<small><font color="red">*anda belum memilih audio.</font></small>',
            },
            sumber: {
                url: '<small><font color="blue">*Url atau link tidak valid.(boleh di kosongkan)</font></small>',
            }
        },

        submitHandler: function (form) {
            var formData = new FormData($('#s-form')[0]);
            $.ajax({
                type: 'POST',
                url: `${$('#url').val()}/update-audio`,
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
                            html: 'Selamat audio berhasil di update <b></b>.',
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
                            <strong>Ukuran audio atau format audio tidak sesuai!</strong> silahkan coba lagi.
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
