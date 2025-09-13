'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'mr'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
    en: {
        // Header
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.book': 'Book Appointment',

        // Hero Section
        'hero.title': 'Octopus Eye Care Consultatnt',
        'hero.subtitle': 'Comprehensive Eye Care Services',
        'hero.description': 'Professional eye care with advanced 8-layer eye checkup system. Get accurate diagnosis and proper guidance from our super specialist doctors.',
        'hero.cta': 'Book Your Free Appointment',
        'hero.cta.subtitle': 'Book your free appointment at your native place.',

        // Services
        'services.title': 'Our Services',
        'services.subtitle': '8-Layer Comprehensive Eye Checkup',
        'services.1': '8 Layers Eye Checkup',
        'services.2': 'Spectacle Number Testing',
        'services.3': 'General Checkup',
        'services.4': 'Cataract Screening',
        'services.5': 'Retina Examination',
        'services.6': 'Glaucoma Testing',
        'services.7': 'Eye Drops Examination',
        'services.8': 'Super Specialist Doctor Consultation',
        'services.9': 'Accurate Diagnosis & Proper Guidance',

        // Footer
        'footer.address': 'Address',
        'footer.phone': 'Phone',
        'footer.email': 'Email',
        'footer.hours': 'Working Hours',
        'footer.copyright': '© 2024 Octopus Eye Care Hospital. All rights reserved.',

        // Common
        'learn.more': 'Learn More',
        'book.now': 'Book Now',
        'get.started': 'Get Started',
    },
    mr: {
        // Header
        'nav.home': 'मुख्यपृष्ठ',
        'nav.services': 'सेवा',
        'nav.about': 'आमच्याबद्दल',
        'nav.contact': 'संपर्क',
        'nav.book': 'अपॉइंटमेंट बुक करा',

        // Hero Section
        'hero.title': 'ऑक्टोपस आय केअर सल्लागार',
        'hero.subtitle': 'व्यापक नेत्र सेवा',
        'hero.description': 'प्रगत 8-लेयर नेत्र तपासणी प्रणालीसह व्यावसायिक नेत्र सेवा. आमच्या सुपर स्पेशालिस्ट डॉक्टरांकडून अचूक निदान आणि योग्य मार्गदर्शन मिळवा.',
        'hero.cta': 'तुमच्या जवळच्या हॉस्पिटलमध्ये मोफत नेत्र तपासणीसाठी आताच नाव नोंदणी करा',
        'hero.cta.subtitle': 'तुमच्या जवळच्या हॉस्पिटलमध्ये मोफत नेत्र तपासणीसाठी आताच नाव नोंदणी करा.',

        // Services
        'services.title': 'आमच्या सेवा',
        'services.subtitle': '8-लेयर व्यापक नेत्र तपासणी',
        'services.1': '8 लेयर नेत्र तपासणी',
        'services.2': 'चष्मा नंबर तपासणी',
        'services.3': 'जनरल चेकप',
        'services.4': 'मोतिबिंदू तपासणी',
        'services.5': 'रेटीना तपासणी',
        'services.6': 'ग्लुकोमा तपासणी',
        'services.7': 'डोळ्यांमध्ये औषध टाकून तपासणी',
        'services.8': 'सुपर स्पेशालिस्ट डॉक्टरांकडून तपासणी',
        'services.9': 'अचुक निदान आणि योग्य मार्गदर्शन',

        // Footer
        'footer.address': 'पत्ता',
        'footer.phone': 'फोन',
        'footer.email': 'ईमेल',
        'footer.hours': 'कामाचे तास',
        'footer.copyright': '© 2024 ऑक्टोपस आय केअर हॉस्पिटल. सर्व हक्क सुरक्षित.',

        // Common
        'learn.more': 'अधिक जाणून घ्या',
        'book.now': 'आताच बुक करा',
        'get.started': 'सुरुवात करा',
    }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en')

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'mr')) {
            setLanguage(savedLanguage)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])

    const t = (key: string): string => {
        const translation = translations[language] as Record<string, string>
        return translation[key] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
