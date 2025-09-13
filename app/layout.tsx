import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Octopus Eye Care Consultant - Comprehensive Eye Care Services',
    description: 'Professional eye care services including 8-layer eye checkup, cataract screening, retina examination, glaucoma testing, and specialized eye treatments. Book your free appointment today.',
    keywords: 'eye care, eye Consultant, cataract surgery, retina treatment, glaucoma, eye checkup, ophthalmology, Octopus Eye Care',
    authors: [{ name: 'Octopus Eye Care Consultant' }],
    openGraph: {
        title: 'Octopus Eye Care Consultant - Comprehensive Eye Care Services',
        description: 'Professional eye care services including 8-layer eye checkup, cataract screening, retina examination, glaucoma testing, and specialized eye treatments.',
        type: 'website',
        locale: 'en_US',
    },
    robots: {
        index: true,
        follow: true,
    },
    verification: {
        google: 'your-google-verification-code',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body className={inter.className}>
                <LanguageProvider>
                    <div className="min-h-screen flex flex-col">
                        <Header />
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </LanguageProvider>
            </body>
        </html>
    )
}
