{{-- @if ($errors->any())
<div class="alert alert-primary alert-dismissible fade show" role="alert">Trjadi kesalahan :(<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
@endif --}}


@if ($message = Session::get('primary'))
    <div class="alert alert-primary alert-dismissible fade show" role="alert">{{ $message }}
    </div>
@endif

@if ($message = Session::get('secondary'))
    <div class="alert alert-secondary alert-dismissible fade show" role="alert">{{ $message }}
    </div>
@endif

@if ($message = Session::get('success'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">{{ $message }}
    </div>
@endif

@if ($message = Session::get('danger'))
    <div class="alert alert-danger alert-dismissible fade show" role="alert">{{ $message }}
    </div>
@endif

@if ($message = Session::get('warning'))
    <div class="alert alert-warning alert-dismissible fade show" role="alert">{{ $message }}
    </div>
@endif

@if ($message = Session::get('info'))
    <div class="alert alert-info alert-dismissible fade show" role="alert">{{ $message }}
    </div>
@endif

@if ($message = Session::get('light'))
    <div class="alert alert-light alert-dismissible fade show" role="alert">{{ $message }}
    </div>
@endif

@if ($message = Session::get('dark'))
    <div class="alert alert-dark alert-dismissible fade show" role="alert">{{ $message }}
    </div>
@endif

@if ($message = Session::get('swdanger'))
    {{-- hak akses error --}}
@endif
