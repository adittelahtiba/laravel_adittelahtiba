<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HospitalController extends Controller
{
    //
    public function index()
    {
        $data = [
            'title' => 'Tabel Rumah Sakit',
            'jsfile' => 'hospital.js'
        ];
        return view('hospital/v_show', $data);
    }

    public function load()
    {
        $aData['aaData'] = [];

        $rs = DB::table('hospitals')->get();
        $no = 1;
        foreach ($rs as $row) {
            $aData['aaData'][] = [
                $no++,
                $row->name . '<br>ID : ' . $row->id,
                $row->address,
                "Email : $row->email <br>Phone :  $row->phone",
                '<buttom class="btn btn-warning btn-sm btn-edit"  data-bs-toggle="modal" data-bs-target="#modal-upd" data-id="' . $row->id . '">Edit</buttom>
                <buttom class="btn btn-danger btn-sm btn-del" data-id="' . $row->id . '">Hapus</buttom>',
            ];
        }

        echo json_encode($aData);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'address' => 'required'
        ]);

        $data['created_at'] = date('Y-m-d H:i:s');

        $resp = DB::table('hospitals')->insert($data);

        echo json_encode($resp);
    }

    public function getById($id)
    {
        $data = DB::table('hospitals')->where('id', $id)->first();
        echo json_encode($data);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'address' => 'required'
        ]);

        $data['updated_at'] = date('Y-m-d H:i:s');


        $resp = DB::table('hospitals')->where('id', $request->id)->update($data);

        echo json_encode($resp);
    }

    public function delete($id)
    {
        $resp = DB::table('hospitals')->where('id', $id)->delete();

        echo json_encode($resp);
    }
}