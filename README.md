# nilai.online Landing Page

Landing page terpisah untuk platform ujian online **nilai.online**, di-deploy ke Vercel.

## Setup

```bash
npm install
```

## Environment Variables

Buat file `.env.local`:

```env
# URL API dari app utama (AWS Amplify)
NEXT_PUBLIC_API_URL=https://main.d2tx1e7duyo56q.amplifyapp.com

# URL app utama untuk link login
NEXT_PUBLIC_APP_URL=https://main.d2tx1e7duyo56q.amplifyapp.com
```

## Development

```bash
npm run dev
```

Buka [http://localhost:3001](http://localhost:3001)

## Deploy ke Vercel

1. Push repo ini ke GitHub
2. Import di [vercel.com](https://vercel.com)
3. Set environment variables:
   - `NEXT_PUBLIC_API_URL` = URL app utama
   - `NEXT_PUBLIC_APP_URL` = URL app utama
4. Deploy

## Arsitektur

- Landing page ini **tidak punya database sendiri**
- Data paket/tier dan media diambil dari API publik app utama:
  - `GET /api/public/tiers` — Data paket harga
  - `GET /api/public/landing-media` — Gambar & video preview
- API sudah di-enable CORS untuk akses cross-origin
