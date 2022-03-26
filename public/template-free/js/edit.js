$('#progress').hide()

function progress() {
    $('#progress').show()
    let i = 1;
    let progress = setInterval(() => {
        if (i < 100) {
            $('#progress').html(`<div class="progress-bar bg-dark" role="progressbar" aria-valuenow="${i++}" aria-valuemin="0" aria-valuemax="100" style="width: ${i}%;"></div>`)
        } else {
            $('#progress').hide()
            clearInterval(progress)
        }
    }, 10);
}


$('.framena').on('click', function (params) {
    progress();
    // $('#iframe').css('background-image', 'url(assets/img/Spinner-1s-200px.gif)');
    $('#iframe').attr('src', $(this).data('frame'));
    $('body').removeClass('sb-sidenav-toggled');
    $('.framena').removeClass('active')
    $(this).addClass('active')
    $.getJSON('cek_auth', (data) => {
        if (data.length < 1) {
            window.location.assign('login');
        }
    });

    if ($('#notif-' + $(this).data('id')).length > 0) {
        $.getJSON(`add-dmenu/${$('#id_mempelai').val()}/${$(this).data('id')}`, (data) => {
            $('#notif-' + $(this).data('id')).hide();
        })
    }
})

$('#layoutSidenav_content').on('click', function (params) {
    $('body').removeClass('sb-sidenav-toggled');
})
