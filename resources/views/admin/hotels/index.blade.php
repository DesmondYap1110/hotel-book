@extends('admin.layouts.app')

@section('content')

<div>
    <div class="pt-3 d-flex justify-content-end">
        <Form method="GET"  action="{{ route('admin.hotels.create') }}">
            <button class="btn btn-primary" type="submit">Add Hotels</button>
        </Form>
    </div>

    <div class="pt-3">
        
    </div>
</div>



@endsection
