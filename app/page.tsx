'use client'

import { useLanguage } from '@/components/LanguageProvider'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import AppointmentSection from '@/components/AppointmentSection'

export default function HomePage() {
    const { language } = useLanguage()

    return (
        <div className="min-h-screen">
            <HeroSection />
            <ServicesSection />
            <WhyChooseUs />
            <AppointmentSection />
        </div>
    )
}
