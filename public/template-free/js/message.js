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
                "sWidth": "20%",
                "sClass": "left",
                "bSortable": true
            },
            {
                "sWidth": "60%",
                "sClass": "center",
                "bSortable": true
            },
            {
                "sWidth": "5%",
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
        "sAjaxSource": `${$('#url').val()}/message-data`,
        "bServerSide": false,
        "sServerMethod": "GET",
        "aaSorting": [
            [0, 'asc']
        ],
        "fnDrawCallback": function (oSettings) {},
        "bAutoWidth": false
    });

    $('#tb_data').on('click', '.btndel', function (params) {
        var ask = swal({
            title: "Hapus Pesan?",
            text: "Pesan akan di hapus dari buku tamu.",
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
                $.getJSON(`${$('#url').val()}/upmessage/${$(this).data('id')}/3`, (data) => {
                    $("#tb_data").dataTable().fnReloadAjax(`${$('#url').val()}/message-data`)
                });
                Swal.fire({
                    title: "Berhasil!",
                    text: "Pesan berhasil hapus.",
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
    $('#tb_data').on('click', '.btnshow', function (params) {
        var ask = swal({
            title: "Tampilkan Pesan?",
            text: "Pesan akan di Tampilkan pada undangan.",
            type: "success",
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
                $.getJSON(`${$('#url').val()}/upmessage/${$(this).data('id')}/0`, (data) => {
                    $("#tb_data").dataTable().fnReloadAjax(`${$('#url').val()}/message-data`)
                });
                Swal.fire({
                    title: "Berhasil!",
                    text: "Pesan berhasil ditampilkan.",
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
    $('#tb_data').on('click', '.btnhide', function (params) {
        var ask = swal({
            title: "Sembunyikan Pesan?",
            text: "Pesan akan di sembunyikan dari undangan.",
            type: "success",
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
                $.getJSON(`${$('#url').val()}/upmessage/${$(this).data('id')}/1`, (data) => {
                    $("#tb_data").dataTable().fnReloadAjax(`${$('#url').val()}/message-data`)
                });
                Swal.fire({
                    title: "Berhasil!",
                    text: "Pesan berhasil disembunyikan.",
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
})
