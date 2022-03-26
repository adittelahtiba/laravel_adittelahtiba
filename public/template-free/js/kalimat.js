$(document).ready(() => {
    $("#tb_data").dataTable({
        "colReorder": {
            "realtime": true
        },
        "bLengthChange": true,
        "paging": true,
        "responsive": true,
        "bSort": true,
        "aoColumns": [{
                "sWidth": "5%",
                "sClass": "center",
                "bSortable": true
            },
            {
                "sWidth": "85%",
                "sClass": "center",
                "bSortable": true
            },
            {
                "sWidth": "10%",
                "sClass": "center",
                "bSortable": true
            },

        ],
        //"sDom": '<"top"fp>rt<"clear">', 
        "sDom": 'Bfrtp',
        "buttons": [{
            // 'text': 'Tambah Tindakan',
            // 'className': "btn btn-primary btn-flat pull-right",
            // 'action': function(e, dt, node, config) {
            //     $('#input-tindakan').modal({ backdrop: 'static', keyboard: false });
            // }
        }],
        "sAjaxSource": `${$('#url').val()}/kalimat-data`,
        "bServerSide": false,
        "sServerMethod": "GET",
        "aaSorting": [
            [0, 'asc']
        ],
        "fnDrawCallback": function (oSettings) {},
        "bAutoWidth": false
    });

    $('#tb_data').on('click', '.btnedit', function (params) {
        $('#jenis').val($(this).data('id'))
        $.getJSON(`${$('#url').val()}/get-kalimat/${$(this).data('id')}`, (data) => {
            $('#jenis_kalimat').val(data.jenis_kalimat);
            $('#judul_pembuka').val(data.judul_pembuka);
            $('#judul_penutup').val(data.judul_penutup);
            $('#judul_undangan').val(data.judul_undangan);
            $('#kalimat_kutipan').val(data.kalimat_kutipan);
            $('#kalimat_pembuka').val(data.kalimat_pembuka);
            $('#kalimat_penutup').val(data.kalimat_penutup);
            $('#sumber_kutipan').val(data.sumber_kutipan);
        });
    })

    $('#tambah').on('click', () => {
        $('#jenis').val('tambah')
    })

    $('#k-form').on('submit').validate({
        ignore: "",
        submitHandler: function (form) {
            $.ajax({
                type: 'POST',
                url: `${$('#url').val()}/adit-kalimat`,
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
                    if (resp.responseText.trim() == "true" || resp.responseText.trim() == "1") {

                        let timerInterval
                        var ask = swal.fire({
                            title: 'Berhasil!',
                            html: 'Selamat kalimat berhasil disimpan<br> <b></b>.',
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
                    }
                    $("#tb_data").dataTable().fnReloadAjax(`${$('#url').val()}/kalimat-data`)
                    $('#modal-kalimat').modal('hide')

                }
            });
            return false;
        }
    });
})
