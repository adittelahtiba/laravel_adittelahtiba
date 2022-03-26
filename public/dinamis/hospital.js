$(document).ready(() => {

    console.log('ok');
    $('#tb_data').DataTable({
        "bLengthChange": true,
        "responsive": true,
        "bSort": true,
        "aoColumns": [{
                "sWidth": "5%",
                "sClass": "center",
                "bSortable": true
            },
            {
                "sWidth": "15%",
                "sClass": "left",
                "bSortable": true
            },
            {
                "sWidth": "20%",
                "sClass": "left",
                "bSortable": true
            },
            {
                "sWidth": "10%",
                "sClass": "left",
                "bSortable": true
            },
            {
                "sWidth": "10%",
                "sClass": "left",
                "bSortable": true
            },
        ],
        "sDom": 'Bfrtp',
        "sAjaxSource": `load-rs`,
        "bServerSide": false,
        "sServerMethod": "GET",
        "aaSorting": [
            [0, 'asc']
        ],
        "fnDrawCallback": function (oSettings) {},
        "bAutoWidth": false
    });

    $('#i-form').on('submit').validate({
        ignore: "",
        rules: {

        },
        messages: {
            name: {
                required: 'Nama Rumah Sakit <small class="text-danger">*Tidak boleh kosong</small>',
            },
            email: {
                required: 'Email <small class="text-danger">*Tidak boleh kosong</small>',
                email: 'Email <small class="text-danger">*Tidak valid</small>'
            },
            phone: {
                required: 'No. Telp <small class="text-danger">*Tidak boleh kosong</small>',
            },
            address: {
                required: 'Alamat <small class="text-danger">*Tidak boleh kosong</small>',
            },
        },

        submitHandler: function (form) {
            $.ajax({
                type: 'POST',
                url: `save-rs`,
                data: $('#i-form').serialize(),
                success: function (resp) {
                    $('.btnsubmit').prop('disabled', false);
                    $('.btnsubmit').html('Save');
                    $('#modal-add').modal('hide');
                },
                beforeSend: function (resp) {
                    $('.btnsubmit').prop('disabled', true);
                    $('.btnsubmit').html('Loading...');
                },
                complete: function (resp) {
                    $('.btnsubmit').prop('disabled', false);
                    $('.btnsubmit').html('Save');
                    console.log(resp.responseText);
                    if (resp.responseText == "true") {
                        let timerInterval
                        var ask = swal.fire({
                            title: 'Berhasil!',
                            html: 'Data baru berhasil ditambahkan.',
                            timer: 2500,
                            // timerProgressBar: true,
                            allowOutsideClick: false,
                            onBeforeOpen: () => {
                                Swal.showLoading()
                                timerInterval = setInterval(() => {
                                    const content = Swal.getContent()
                                    if (content) {
                                        const b = content.querySelector('b')
                                        if (b) {
                                            b.textContent = Swal.getTimerLeft()
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
                                $("#tb_data").dataTable().api().ajax.reload(null, false);
                                $('#i-form').trigger("reset");
                            }
                        })
                    } else {
                        Swal.fire({
                            title: "Gagal!",
                            text: resp.responseText,
                            type: "error",
                            showCancelButton: false,
                            confirmButtonText: "OK",
                            allowEnterKey: false,
                            allowOutsideClick: false,
                        });
                    }
                }
            });
            return false;
        }
    });

    $('#u-form').on('submit').validate({
        ignore: "",
        rules: {

        },
        messages: {
            name: {
                required: 'Nama Rumah Sakit <small class="text-danger">*Tidak boleh kosong</small>',
            },
            email: {
                required: 'Email <small class="text-danger">*Tidak boleh kosong</small>',
                email: 'Email <small class="text-danger">*Tidak valid</small>'
            },
            phone: {
                required: 'No. Telp <small class="text-danger">*Tidak boleh kosong</small>',
            },
            address: {
                required: 'Alamat <small class="text-danger">*Tidak boleh kosong</small>',
            },
        },

        submitHandler: function (form) {
            $.ajax({
                type: 'POST',
                url: `update-rs`,
                data: $('#u-form').serialize(),
                success: function (resp) {
                    $('.btnsubmit').prop('disabled', false);
                    $('.btnsubmit').html('Save');
                    $('#modal-upd').modal('hide');
                },
                beforeSend: function (resp) {
                    $('.btnsubmit').prop('disabled', true);
                    $('.btnsubmit').html('Loading...');
                },
                complete: function (resp) {
                    $('.btnsubmit').prop('disabled', false);
                    $('.btnsubmit').html('Save');
                    console.log(resp.responseText);
                    if (resp.responseText == 1) {
                        let timerInterval
                        var ask = swal.fire({
                            title: 'Berhasil!',
                            html: 'Data berhasil diubah.',
                            timer: 2500,
                            // timerProgressBar: true,
                            allowOutsideClick: false,
                            onBeforeOpen: () => {
                                Swal.showLoading()
                                timerInterval = setInterval(() => {
                                    const content = Swal.getContent()
                                    if (content) {
                                        const b = content.querySelector('b')
                                        if (b) {
                                            b.textContent = Swal.getTimerLeft()
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
                                $("#tb_data").dataTable().api().ajax.reload(null, false);
                                $('#u-form').trigger("reset");
                            }
                        })
                    } else {
                        Swal.fire({
                            title: "Gagal!",
                            text: resp.responseText,
                            type: "error",
                            showCancelButton: false,
                            confirmButtonText: "OK",
                            allowEnterKey: false,
                            allowOutsideClick: false,
                        });
                    }
                }
            });
            return false;
        }
    });

    $('#tb_data').on('click', '.btn-edit', function () {
        $.getJSON(`get-rs-${$(this).data('id')}`, (data) => {
            $('#uid').val(data.id);
            $('#uname').val(data.name);
            $('#uaddress').val(data.address);
            $('#uemail').val(data.email);
            $('#uphone').val(data.phone);
        })
    })

    $('#tb_data').on('click', '.btn-del', function (params) {
        var ask = swal({
            title: "Are you sure?",
            text: "",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes!",
            cancelButtonText: "No!",
            closeOnConfirm: false,
            closeOnCancel: false,
            allowEnterKey: false,
            allowOutsideClick: false,
        }).then((result) => {
            if (result.value) {
                //-------------------BELUM FIX---------delete in foreign check please ----------------------------------------------
                $.getJSON(`delete-rs-${$(this).data('id')}`, (data) => {
                    Swal.fire({
                        title: "Berhasil!",
                        text: "",
                        type: "success",
                        // showCancelButton: false,
                        // confirmButtonText: "OK",
                        // allowEnterKey: false,
                        // allowOutsideClick: false,
                    });
                    $("#tb_data").dataTable().api().ajax.reload(null, false);

                });
                //-------------------BELUM FIX-------------------------------------------------------
            }
        });
    })
});
