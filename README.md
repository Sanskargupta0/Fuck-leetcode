# FuckLeetCode

Stop pretending to care about algorithm puzzles and start building actual shit that matters.

## 🚀 Features

- Automatically solve LeetCode problems daily
- Keep your streak alive while you focus on real development
- Real-time waitlist counter
- Fully responsive design
- Clean, modern UI

## 🛠️ Setup

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sanskargupta0/Fuck-leetcode.git
cd Fuck-leetcode
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
# NoCodeAPI Configuration
VITE_NOCODEAPI_BASE_URL=https://v1.nocodeapi.com/your-username/google_sheets
VITE_NOCODEAPI_API_KEY=your-api-key-here
VITE_SHEET_TAB_ID=Emails

# Google Sheets Configuration
VITE_WAITLIST_ROW_ID=2
VITE_WAITLIST_FIELD=Total People
VITE_WAITLIST_FILTER_VALUE=Total People
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 📋 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_NOCODEAPI_BASE_URL` | NoCodeAPI base URL | `https://v1.nocodeapi.com/username/google_sheets` |
| `VITE_NOCODEAPI_API_KEY` | Your NoCodeAPI key | `your-api-key` |
| `VITE_SHEET_TAB_ID` | Google Sheets tab name | `Emails` |
| `VITE_WAITLIST_ROW_ID` | Row ID for count lookup | `2` |
| `VITE_WAITLIST_FIELD` | Field name for total count | `Total People` |
| `VITE_WAITLIST_FILTER_VALUE` | Filter value for count | `Total People` |

## 🔧 Google Sheets Setup

1. Create a Google Sheet with columns: `Emails`, `Date`, `Total People`
2. Set up NoCodeAPI integration with your Google Sheets
3. Configure the sheet ID and API key in your `.env` file
4. Ensure the "Total People" field contains the current waitlist count

## 🚀 Deployment

### Build for production:
```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Environment Variables for Production

Make sure to set the same environment variables in your production environment (Vercel, Netlify, etc.).

## 🎯 Features

- **Responsive Design**: Works perfectly on all devices
- **Real-time Counter**: Dynamic waitlist count from Google Sheets
- **Modern UI**: Clean, professional design
- **Performance Optimized**: Fast loading and smooth animations
- **Accessibility**: WCAG compliant design

## 👨‍💻 Developer

**Sanskar Gupta**
- GitHub: [@Sanskargupta0](https://github.com/Sanskargupta0)
- Twitter: [@Sanskar362002](https://x.com/Sanskar362002)
- Email: sanskargupta362002@gmail.com

## 📅 Timeline

Expected launch: Q3 2025

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⚠️ Disclaimer

This project is not affiliated with LeetCode. It's a humorous take on coding interview preparation culture.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
