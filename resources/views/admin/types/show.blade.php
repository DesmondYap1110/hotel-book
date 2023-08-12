@extends('admin.layouts.app')

@section('content')

<div>

    <room-types-show
    room-type_id="{{ $roomType->id }}"
    ></room-types-show>

</div>



@endsection
