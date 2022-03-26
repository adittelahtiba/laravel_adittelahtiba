$(document).ready(function () {
    isi_galeri()
    $('#unggah-foto').on('click', () => {
        $('#fotgalna').attr('src', `${$('#url').val()}/assets/img/bg-color-2.png`)
    })

    function isi_galeri() {
        // foto
        $('#gal-foto').html('Loading...')
        $.getJSON(`${$('#url').val()}/isigaleri/${$('#username').val()}`, (data) => {
            $('#gal-foto').html('')
            if (data.length > 0) {
                $.each(data, (i, gal) => {
                    $('#gal-foto').append(`<div class="col-6 mb-3">
                    <div class="card">
                        <img src="${$('#url').val()}/assets/img/gallery/${gal.foto}" class="card-img-top" alt="...">
                        <div class="card-footer">
                           <small> <small class="text-muted"><a class="btn btn-danger btn-sm text-light del-foto" data-id="${gal.foto}"><i class="far fa-trash-alt"></i> Hapus</a></small></small>
                        </div>
                    </div>
                </div>`)
                })
            } else {
                $('#gal-foto').html(`Anda belum mengunggah foto!`);
            }
        });

        //video
        $('#infovid').show();
        $('#videona').html('')
        $.getJSON(`${$('#url').val()}/isivideo/${$('#username').val()}`, (data) => {
            if (data.video) {
                $('#infovid').hide();
                $('#videona').append(`
                    <div class="card h-100">
                        <video src="${$('#url').val()}/assets/img/video/${data.video}" class="card-img-top" alt="..."></video>
                        <div class="card-footer">
                           <small> <small class="text-muted"><a class="btn btn-danger btn-sm text-light" id="del-video" data-id="${data.video}"><i class="far fa-trash-alt"></i> Hapus</a></small></small>
                        </div>
                    </div>
                `)
            } else {
                $('#videona').html(`Anda belum mengunggah video!`);
            }

        })
    }


    $('#videona').on('click', '#del-video', (data) => {
        console.log($('#del-video').data('id'));
        var ask = swal({
            title: "Apakah anda yakin?",
            text: "Video akan dihapus",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ya!",
            cancelButtonText: "Tidak!",
            closeOnConfirm: false,
            closeOnCancel: false,
            allowEnterKey: false,
            allowOutsideClick: false,
        }).then((result) => {
            if (result.value) {
                //-------------------BELUM FIX---------delete in foreign check please ----------------------------------------------
                $.getJSON(`${$('#url').val()}/del-video/${$('#del-video').data('id')}`, (data) => {
                    isi_galeri()
                });
                Swal.fire({
                    title: "Berhasil!",
                    text: "Video berhasil di hapus.",
                    type: "success",
                    showCancelButton: false,
                    confirmButtonText: "OK",
                    allowEnterKey: false,
                    allowOutsideClick: false,
                })


                //-------------------BELUM FIX-------------------------------------------------------
            }
        })
    })

    $('#gal-foto').on('click', '.del-foto', function (params) {
        // console.log($(this).data('id'));
        var ask = swal({
            title: "Apakah anda yakin?",
            text: "Foto akan dihapus",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ya!",
            cancelButtonText: "Tidak!",
            closeOnConfirm: false,
            closeOnCancel: false,
            allowEnterKey: false,
            allowOutsideClick: false,
        }).then((result) => {
            if (result.value) {
                //-------------------BELUM FIX---------delete in foreign check please ----------------------------------------------
                $.getJSON(`${$('#url').val()}/del-foto/${$(this).data('id')}`, (data) => {
                    isi_galeri()
                });
                Swal.fire({
                    title: "Berhasil!",
                    text: "Foto berhasil di hapus.",
                    type: "success",
                    showCancelButton: false,
                    confirmButtonText: "OK",
                    allowEnterKey: false,
                    allowOutsideClick: false,
                })


                //-------------------BELUM FIX-------------------------------------------------------
            }
        })
    })

    $('#video').hide()
    $('#nav-gallery').on('click', 'a', function (params) {
        $('.active').removeClass('active')
        $(this).addClass('active')
        $('.card-body').hide()
        $('#' + $(this).data('id')).show()
    })

    setInterval(function (params) {
        if ($('#video-in').val() == '') {
            $('#unggah-vid').prop('disabled', true)
        } else {
            $('#unggah-vid').prop('disabled', false)
        }

    }, 100)
    $('#video-in').on('change', function (params) {
        let a = $('#video-in')[0].files[0].size;
        if (a >= 20971520) {
            swal.fire({
                title: 'File Terlalu Besar!',
                html: 'Ukuran maksimal file video 20 Mb. <br> <b></b>',
                timer: 5000,
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
                    $('#video-in').val('');
                }
            })
        }
    })

    $('#v-form').on('submit').validate({


        submitHandler: function (form) {
            var formData = new FormData($('#v-form')[0]);
            $.ajax({
                type: 'POST',
                url: `${$('#url').val()}/update-mempelai`,
                data: formData,
                contentType: false,
                enctype: 'multipart/form-data',
                processData: false,
                success: function (resp) {
                    $('#unggah-vid').prop('disabled', false)
                    $('#unggah-vid').html('Unggah')

                },
                beforeSend: function (resp) {
                    $('#unggah-vid').prop('disabled', true)
                    $('#unggah-vid').html('Loading...')
                },
                complete: function (resp) {
                    $('#unggah-vid').prop('disabled', false)
                    $('#unggah-vid').html('Unggah')
                    // console.log(resp);
                    var myJSON = JSON.stringify(resp);
                    console.log(resp);
                    if (resp.responseText.trim() == "1") {

                        let timerInterval
                        var ask = swal.fire({
                            title: 'Berhasil!',
                            html: 'Selamat data berhasil di simpan <b></b>.',
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
                        isi_galeri()
                        // window.location = `${$('#url').val()}/pernikahan-login`;

                    } else {
                        if (resp.responseText == "Big") {
                            $('#alertna').html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Ukuran Video atau format Video tidak sesuai!</strong> silahkan coba lagi.
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

    $('#f-form').on('submit').validate({


        submitHandler: function (form) {
            var formData = new FormData($('#f-form')[0]);
            $.ajax({
                type: 'POST',
                url: `${$('#url').val()}/add-foto`,
                data: formData,
                contentType: false,
                enctype: 'multipart/form-data',
                processData: false,
                success: function (resp) {
                    $('#unggahfoto').prop('disabled', false)
                    $('#unggahfoto').html('Simpan')
                },
                beforeSend: function (resp) {
                    $('#unggahfoto').prop('disabled', true)
                    $('#unggahfoto').html('Loading...')
                    $('#fotomodal').modal('hide')
                },
                complete: function (resp) {
                    $('#unggahfoto').prop('disabled', false)
                    $('#unggahfoto').html('Simpan')
                    // console.log(resp);
                    var myJSON = JSON.stringify(resp);
                    console.log(resp);
                    if (resp.responseText.trim() == "true") {

                        let timerInterval
                        var ask = swal.fire({
                            title: 'Berhasil!',
                            html: 'Selamat data berhasil di simpan <b></b>.',
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
                        isi_galeri()
                        // window.location = `${$('#url').val()}/pernikahan-login`;

                    } else {
                        if (resp.responseText == "Big") {
                            $('#alertna').html(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Ukuran Foto atau format Foto tidak sesuai!</strong> silahkan coba lagi.
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
