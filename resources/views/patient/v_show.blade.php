@extends('layout.main')

@section('content')
    <div class="container-fluid">
        <h1 class="mt-4">Pasien</h1>
        <div class="card mb-4">
            <div class="row">
                <div class="col-4">
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modal-add">
                        Tambah Data
                    </button>
                </div>
                <div class="col-4">
                    <select class="form-select" aria-label="Default select example" id="rs_name">
                        <option selected value="_">Filter Rumah Sakit</option>
                        @foreach ($rs as $row)
                            <option value="{{ $row->name }}">{{ $row->name }} ({{ $row->id }})</option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table mr-1"></i>
                Data Pasien
            </div>

            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped" id="tb_data" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Kontak</th>
                                <th>Rumahsakit</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>



    <!-- Modal -->
    <div class="modal fade" id="modal-add" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Tambah Pasien</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form id="i-form" method="POST">
                    <div class="modal-body">
                        @csrf
                        <select class="form-select" aria-label="Default select example" name="hospital_id"
                            id="hospital_id" required>
                            <option selected value="">Pilih Rumah Sakit</option>
                            @foreach ($rs as $row)
                                <option value="{{ $row->id }}">{{ $row->name }} ({{ $row->id }})</option>
                            @endforeach
                        </select>
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="name" name="name" placeholder="name@example.com"
                                required>
                            <label for="floatingInput">Nama Pasien</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="address" name="address"
                                placeholder="name@example.com" required>
                            <label for="floatingInput">Alamat</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="phone" name="phone" placeholder="name@example.com"
                                required>
                            <label for="floatingInput">No. Telp</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary btnsubmit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="modal-upd" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Tambah Rumahsakit</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form id="u-form" method="POST">
                    <div class="modal-body">
                        @csrf
                        <input type="hidden" id="uid" name="id">
                        <select class="form-select" aria-label="Default select example" name="hospital_id"
                            id="uhospital_id" required>
                            <option selected value="">Pilih Rumah Sakit</option>
                            @foreach ($rs as $row)
                                <option value="{{ $row->id }}">{{ $row->name }} ({{ $row->id }})</option>
                            @endforeach
                        </select>
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" class="form-control" id="uname" name="name" placeholder="name@example.com"
                                required>
                            <label for="floatingInput">Nama Pasien</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="uaddress" name="address"
                                placeholder="name@example.com" required>
                            <label for="floatingInput">Alamat</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="uphone" name="phone"
                                placeholder="name@example.com" required>
                            <label for="floatingInput">No. Telp</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary btnsubmit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
