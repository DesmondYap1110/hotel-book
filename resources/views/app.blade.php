<!DOCTYPE html>
{{-- The ONLY Blade page. Every screen is a Vue page in resources/js/Pages (Inertia). --}}
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}">
    <link type="text/css" href="{{ mix('css/app.css') }}" rel="stylesheet">

    {{-- restore the collapsed sidebar before first paint (no flicker) --}}
    <script>
        try { if (localStorage.getItem('cl-sidebar-collapsed') === '1') document.documentElement.classList.add('cl-admin--collapsed'); } catch (e) {}
    </script>

    @inertiaHead
</head>
<body>
    @include('partials.page-loader')

    @inertia

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
