@extends('admin.layouts.app')

@section('content')

<div>

    {{-- <div class="pt-3">
        <div class="bg-image" style="max-width: 22rem;">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp" class="w-100" />
            <div class="mask text-light d-flex justify-content-center flex-column text-center" style="background-color: rgba(0, 0, 0, 0.5)">
              <h4>Single Room</h4>
              <p class="m-0">40x40 feet</p>
            </div>
          </div>
    </div> --}}
    <room-types-add></room-types-add>
    {{-- <room-types-add :options="{{json_encode($options)}}"></room-types-add> --}}
</div>



@endsection
