@extends('admin.layouts.app')

@section('content')

<div>
    {{-- <div class="pt-3 d-flex justify-content-end">
        <Form method="GET" route="/admin/rooms/create">
            <button class="btn btn-primary" type="submit">Add Rooms</button>
        </Form>
    </div> --}}

    <div class="pt-3">
        <rooms-add></rooms-add>
    </div>
</div>



@endsection
