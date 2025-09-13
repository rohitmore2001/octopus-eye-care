'use client'

import { useLanguage } from '@/components/LanguageProvider'
import ServicesSection from '@/components/ServicesSection'
import DetailedServices from '@/components/DetailedServices'
import ProcessSection from '@/components/ProcessSection'

export default function ServicesPage() {
    const { language } = useLanguage()

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
                <div className="container-custom text-center">
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr' ? 'आमच्या सेवा' : 'Our Services'}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr'
                            ? '8-लेयर व्यापक नेत्र तपासणी आणि विविध नेत्र सेवा'
                            : '8-Layer comprehensive eye checkup and various eye care services'
                        }
                    </p>
                </div>
            </section>

            <ServicesSection />
            <DetailedServices />
            <ProcessSection />
        </div>
    )
}
