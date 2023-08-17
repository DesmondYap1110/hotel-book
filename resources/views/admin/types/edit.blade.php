@extends('admin.layouts.app')

@section('content')

<div>
    <room-types-edit
    room-type_id="{{ $roomType->id }}"
    edit-room-types-api-route="{{ route('room-types.update',['room_type' => 'room_type_id']) }}"
    ></room-types-edit>
</div>



@endsection
