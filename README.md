# Octopus Eye Care Hospital Website

A modern, responsive website for Octopus Eye Care Hospital built with Next.js 14, TypeScript, and Tailwind CSS. Features bilingual support (English/Marathi) and comprehensive eye care services information.

## Features

- 🌐 **Bilingual Support**: English and Marathi language switching
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🏥 **8-Layer Eye Checkup**: Detailed information about comprehensive eye services
- 📅 **Appointment Booking**: Online appointment booking system
- 🔍 **SEO Optimized**: Google search engine optimization
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed
- 🎨 **Modern UI**: Beautiful and professional design

## Services Offered

1. **8 Layers Eye Checkup** - 8 लेयर नेत्र तपासणी
2. **Spectacle Number Testing** - चष्मा नंबर तपासणी
3. **General Checkup** - जनरल चेकप
4. **Cataract Screening** - मोतिबिंदू तपासणी
5. **Retina Examination** - रेटीना तपासणी
6. **Glaucoma Testing** - ग्लुकोमा तपासणी
7. **Eye Drops Examination** - डोळ्यांमध्ये औषध टाकून तपासणी
8. **Super Specialist Doctor Consultation** - सुपर स्पेशालिस्ट डॉक्टरांकडून तपासणी
9. **Accurate Diagnosis & Proper Guidance** - अचुक निदान आणि योग्य मार्गदर्शन

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel/Netlify ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd octopus-eye-care
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
octopus-eye-care/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── book/              # Appointment booking
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots.txt
├── components/            # React components
│   ├── LanguageProvider.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── WhyChooseUs.tsx
│   ├── AppointmentSection.tsx
│   ├── DetailedServices.tsx
│   ├── ProcessSection.tsx
│   ├── TeamSection.tsx
│   ├── ContactForm.tsx
│   └── ContactInfo.tsx
├── public/                # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
├── vercel.json           # Vercel deployment config
├── netlify.toml          # Netlify deployment config
└── README.md
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build settings in `netlify.toml`

### Other Platforms

The project is compatible with any platform that supports Next.js:
- AWS Amplify
- Railway
- DigitalOcean App Platform
- Heroku

## SEO Features

- **Meta Tags**: Optimized for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Rich snippets for better search results

## Customization

### Adding New Services

1. Update the `translations` object in `components/LanguageProvider.tsx`
2. Add service details in `components/ServicesSection.tsx`
3. Update the services array with new service information

### Changing Colors

1. Modify the color palette in `tailwind.config.js`
2. Update component classes to use new colors
3. Ensure accessibility compliance

### Adding New Languages

1. Add new language to the `Language` type in `LanguageProvider.tsx`
2. Add translations object for the new language
3. Update language switcher in `Header.tsx`

## Contact Information

- **Phone**: +91-1234567890
- **Email**: info@octopuseeyecare.com
- **Address**: Your Hospital Address Here
- **Working Hours**: Mon-Sat: 9:00 AM - 6:00 PM, Sun: 10:00 AM - 4:00 PM

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact:
- Email: info@octopuseeyecare.com
- Phone: +91-1234567890

---

**Octopus Eye Care Hospital** - Professional eye care services with advanced 8-layer eye checkup system.
