@extends('admin.layouts.app')

@section('content')
    <div>


        <room-types-lists
            show-room-types-route="{{ route('admin.room-types.show', ['room_type' => 'room_type_id']) }}"
            create-room-types-route="{{ route('admin.room-types.create') }}"
            delete-room-types-api-route="{{ route('room-types.destroy',['room_type'=>'room_type_id']) }}"
        ></room-types-lists>
    </div>
    @endsection

