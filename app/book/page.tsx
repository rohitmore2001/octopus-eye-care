'use client'

import { useLanguage } from '@/components/LanguageProvider'
import AppointmentSection from '@/components/AppointmentSection'
import ContactInfo from '@/components/ContactInfo'

export default function BookPage() {
    const { language } = useLanguage()

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
                <div className="container-custom text-center">
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr' ? 'अपॉइंटमेंट बुक करा' : 'Book Appointment'}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr'
                            ? 'तुमच्या जवळच्या हॉस्पिटलमध्ये मोफत नेत्र तपासणीसाठी आताच नाव नोंदणी करा'
                            : 'Book your free appointment at your nearest hospital for eye checkup'
                        }
                    </p>
                </div>
            </section>

            <AppointmentSection />

            {/* Additional Info */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <ContactInfo />

                        <div className="space-y-8">
                            <div>
                                <h2 className={`text-2xl font-bold text-gray-800 mb-4 ${language === 'mr' ? 'marathi-text' : ''
                                    }`}>
                                    {language === 'mr' ? 'अपॉइंटमेंट माहिती' : 'Appointment Information'}
                                </h2>

                                <div className="space-y-4">
                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                        <h3 className={`font-semibold text-blue-800 mb-2 ${language === 'mr' ? 'marathi-text' : ''
                                            }`}>
                                            {language === 'mr' ? 'मोफत तपासणी' : 'Free Checkup'}
                                        </h3>
                                        <p className={`text-blue-700 ${language === 'mr' ? 'marathi-text' : ''
                                            }`}>
                                            {language === 'mr'
                                                ? 'आमच्या सर्व नेत्र तपासण्या मोफत आहेत'
                                                : 'All our eye checkups are free of cost'
                                            }
                                        </p>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                        <h3 className={`font-semibold text-green-800 mb-2 ${language === 'mr' ? 'marathi-text' : ''
                                            }`}>
                                            {language === 'mr' ? 'त्वरित अपॉइंटमेंट' : 'Quick Appointment'}
                                        </h3>
                                        <p className={`text-green-700 ${language === 'mr' ? 'marathi-text' : ''
                                            }`}>
                                            {language === 'mr'
                                                ? '24 तासांत अपॉइंटमेंट मिळेल'
                                                : 'Get appointment within 24 hours'
                                            }
                                        </p>
                                    </div>

                                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                                        <h3 className={`font-semibold text-purple-800 mb-2 ${language === 'mr' ? 'marathi-text' : ''
                                            }`}>
                                            {language === 'mr' ? 'विशेषज्ञ डॉक्टर' : 'Expert Doctors'}
                                        </h3>
                                        <p className={`text-purple-700 ${language === 'mr' ? 'marathi-text' : ''
                                            }`}>
                                            {language === 'mr'
                                                ? 'अनुभवी आणि प्रमाणित डॉक्टरांकडून तपासणी'
                                                : 'Examination by experienced and certified doctors'
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
