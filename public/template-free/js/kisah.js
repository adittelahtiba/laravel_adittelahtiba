$(document).ready(() => {
    isi_kisah()

    function isi_kisah() {
        $('#kisahna').html('');
        $.getJSON(`${$('#url').val()}/isikisah/${$('#username').val()}`, (data) => {
            let collapsed = ''
            let show = 'show'
            if (data.length > 0) {
                $.each(data, (i, kisah) => {
                    // if (i > 0) {
                    //     collapsed = 'collapsed'
                    //     show = ''
                    // }
                    $('#kisahna').append(`

                    <div class="row">
                    <div class="col-2"><a class="btn btn-danger btn-sm  btn-block text-light btndel" data-id="${kisah.id}" data-judul="${kisah.judul}"><i class="fas fa-trash-alt"></i></a></div>
                    <div class="col-10">
                    <div class="accordion-item" style="background:none;">
                        <h2 class="accordion-header" id="panelsStayOpen-heading${kisah.id}">
                            <button class="accordion-button ${collapsed}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${kisah.id}" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style="background:none;">
                            ${kisah.judul}
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapse${kisah.id}" class="accordion-collapse collapse ${show}" aria-labelledby="panelsStayOpen-heading${kisah.id}">
                            <div class="accordion-body">
                            ${kisah.kisah}
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    `)
                })
            }
        });
    }


    $('#kisahna').on('click', '.btndel', function (params) {
        var ask = swal({
            title: "Hapus Kisah ini?",
            text: `Kisah "${$(this).data('judul')}" akan di hapus.`,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            confirmButtonText: "Ya!",
            cancelButtonText: "Tidak!",
            closeOnConfirm: false,
            closeOnCancel: false,
            allowEnterKey: false,
            allowOutsideClick: false,
        }).then((result) => {
            if (result.value) {
                //-------------------BELUM FIX---------delete in foreign check please ----------------------------------------------
                $.getJSON(`${$('#url').val()}/del-kisah/${$(this).data('id')}`, (data) => {
                    isi_kisah()
                });
                Swal.fire({
                    title: "Berhasil!",
                    text: "Kisah berhasil hapus.",
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

    $('#k-form').on('submit').validate({
        ignore: "",
        rules: {
            judul: {
                required: true,
            },
            tanggal: {
                required: true,
            },
            kisah: {
                required: true,
            },
        },
        messages: {
            judul: {
                required: 'Judul <small><font color="red">*Tidak boleh kosong.</font></small>',
            },
            tanggal: {
                required: 'Tanggal ini untuk menentukan urutan kisah <small><font color="red">*Tidak boleh kosong.</font></small>',
            },
            kisah: {
                required: 'Kisah <small><font color="red">*Tidak boleh kosong.</font></small>',
            }
        },

        submitHandler: function (form) {
            $.ajax({
                type: 'POST',
                url: `${$('#url').val()}/add-kisah/${$('#id_mempelai').val()}`,
                data: $('#k-form').serialize(),
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
                    if (resp.responseText.trim() == "true") {

                        let timerInterval
                        var ask = swal.fire({
                            title: 'Berhasil!',
                            html: 'Selamat kisah berhasil disimpan<br> <b></b>.',
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
                                isi_kisah();
                                $('#tambah-kisah').modal('hide')
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
                        isi_kisah();
                        $('#tambah-kisah').modal('hide')
                    }


                }
            });
            return false;
        }
    });
})
