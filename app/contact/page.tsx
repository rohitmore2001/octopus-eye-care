'use client'

import { useLanguage } from '@/components/LanguageProvider'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'

export default function ContactPage() {
    const { language } = useLanguage()

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
                <div className="container-custom text-center">
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr' ? 'संपर्क करा' : 'Contact Us'}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr'
                            ? 'आमच्याशी संपर्क साधा आणि आपल्या नेत्र समस्यांवर चर्चा करा'
                            : 'Get in touch with us and discuss your eye problems'
                        }
                    </p>
                </div>
            </section>

            <div className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}
