# Clementra – Hotel Management System

## First install

```bash
composer install
npm install
cp .env.example .env          # then set DB_DATABASE=hotel_book
php artisan key:generate
php artisan migrate --seed    # tables + starter data
php artisan storage:link
npm run dev
```

`--seed` adds everything a new install needs, so nobody has to type it in:

| Seeder | Data |
| --- | --- |
| `AdminUserSeeder` | admin login **desmondyap64@gmail.com / 123456** (change it after the first login) |
| `HotelFacilitySeeder` | 50 hotel facilities in 6 categories (Hotels › Hotel Facilities: pool, gym, parking, ...) |
| `RoomFacilitySeeder` | 30 in-room facilities in 8 categories (Rooms › Room Facilities: kettle, hair dryer, minibar, ...) |
| `PaymentMethodSeeder` | 20 Malaysian payment methods (cards, FPX, DuitNow, e-wallets, BNPL, cash) |
| `MalaysiaLocationSeeder` | 16 states, 444 cities, 2,933 postcodes for the address fields (from `database/data/malaysia-postcodes.json`, ISC licence) |
| `HotelSeeder` | Clementra Headquarters + Main Branch |
| `RoomTypeSeeder` | Standard Queen, Deluxe King, Twin Room, Family Suite (with common room facilities) |
| `DemoRoomSeeder` | **not on production**: 2 levels × 5 rooms + nightly prices per hotel, so the booking site works at once |

The seeders only **add what is missing**, so `php artisan db:seed` is safe to run again on an
existing database – it never overwrites changes made in the app.
The lists live in `database/seeders/` – add a row there to ship it to every new install.

## Booking site & payments

Customers book at `/` (no login, guest checkout) → choose hotel + dates → room type → details → pay.
The room is **held for 30 minutes** while they pay (`BOOKING_HOLD_MINUTES`); unpaid holds expire.

The payment gateway follows `APP_ENV` (`config/payments.php`):

| APP_ENV | Gateway |
| --- | --- |
| `local`, `staging` | **Mock** – a fake gateway page with *Pay* / *Simulate failed payment*. No real money. |
| `production` | **Billplz** (FPX, cards, e-wallets). The mock is refused in production. |

Production `.env`:

```env
APP_ENV=production
BILLPLZ_API_KEY=...
BILLPLZ_COLLECTION_ID=...
BILLPLZ_X_SIGNATURE=...      # Billplz > Settings > X Signature Key (turn X Signature on)
BILLPLZ_SANDBOX=false
```

To try the real Billplz **sandbox** on staging: `PAYMENT_GATEWAY=billplz` + `BILLPLZ_SANDBOX=true` + sandbox keys.
Billplz must be able to reach `https://<your-domain>/payments/billplz/callback` (the webhook).

The scheduler must run (it expires unpaid holds every minute):

```bash
* * * * * cd /path/to/app && php artisan schedule:run >> /dev/null 2>&1
```

---

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
