<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">

    <style>
        .dashboard-layout {
            height: 100vh;
        }

        .dashboard-layout .sidebar {
            min-height: 90vh;
            background-color: #ffffff;
            border-radius: 2%
        }

        .dashboard-layout .content {
            background-color: #f1f1f1;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .dashboard-layout .navbar-brand {
            font-weight: bold;
        }

        .dashboard-layout .navbar {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .dashboard-layout .nav-link {
           color: #333;
            border-radius: 10px;
            margin-top: 2px
 
        }

        .dashboard-layout .nav-link:hover {
            background-color: #e0dddd

        }

        .dashboard-layout .nav-link svg {
            font-size: 20px
        }

        .dashboard-layout .nav-link.active {
            color: #333;
            border-radius: 10px;
            margin-top: 2px
        }

        .dashboard-layout .nav-link.active:hover {
            color: #333;
            background-color: #e0dddd;
            margin-top: 2px
        }
    </style>
    @inertia
</body>

</html>
