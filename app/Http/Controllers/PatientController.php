<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PatientController extends Controller
{
    public function index()
    {
        $data = [
            'title' => 'Tabel Pasien',
            'jsfile' => 'patient.js',
            'rs' => DB::table('hospitals')->get()
        ];
        return view('patient/v_show', $data);
    }

    public function load($rs_name)
    {
        $aData['aaData'] = [];

        $rs = DB::table('patients as a')
            ->join('hospitals as b', 'a.hospital_id', '=', 'b.id')
            ->select('a.*', 'b.name as hospital_name')
            ->where('b.name', 'like', "%$rs_name%")
            ->orderByDesc('a.id')
            ->get();
        $no = 1;
        foreach ($rs as $row) {
            $aData['aaData'][] = [
                $no++,
                $row->name . '<br>ID : ' . $row->id,
                $row->address,
                $row->phone,
                $row->hospital_name . '<br>ID : ' . $row->hospital_id,
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
            'hospital_id' => 'required',
            'phone' => 'required',
            'address' => 'required'
        ]);

        $data['created_at'] = date('Y-m-d H:i:s');

        $resp = DB::table('patients')->insert($data);

        echo json_encode($resp);
    }

    public function getById($id)
    {
        $data = DB::table('patients')->where('id', $id)->first();
        echo json_encode($data);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'hospital_id' => 'required',
            'phone' => 'required',
            'address' => 'required'
        ]);

        $data['updated_at'] = date('Y-m-d H:i:s');


        $resp = DB::table('patients')->where('id', $request->id)->update($data);

        echo json_encode($resp);
    }

    public function delete($id)
    {
        $resp = DB::table('patients')->where('id', $id)->delete();

        echo json_encode($resp);
    }
}