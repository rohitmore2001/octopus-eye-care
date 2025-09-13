'use client'

import { useLanguage } from './LanguageProvider'
import { FaPhone, FaCalendarAlt, FaUserMd, FaEye, FaCheckCircle, FaArrowRight } from 'react-icons/fa'

export default function ProcessSection() {
    const { language } = useLanguage()

    const processSteps = [
        {
            icon: FaPhone,
            title: language === 'mr' ? 'फोन करा किंवा ऑनलाइन बुक करा' : 'Call or Book Online',
            description: language === 'mr'
                ? 'आम्हाला फोन करा किंवा ऑनलाइन अपॉइंटमेंट बुक करा'
                : 'Call us or book your appointment online',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: FaCalendarAlt,
            title: language === 'mr' ? 'तारीख आणि वेळ निवडा' : 'Choose Date & Time',
            description: language === 'mr'
                ? 'तुमच्या सोयीसाठी तारीख आणि वेळ निवडा'
                : 'Select date and time convenient for you',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: FaUserMd,
            title: language === 'mr' ? 'डॉक्टरांकडून तपासणी' : 'Doctor Examination',
            description: language === 'mr'
                ? 'अनुभवी डॉक्टरांकडून नेत्र तपासणी'
                : 'Eye examination by experienced doctors',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: FaEye,
            title: language === 'mr' ? '8-लेयर तपासणी' : '8-Layer Checkup',
            description: language === 'mr'
                ? '8-लेयर व्यापक नेत्र तपासणी'
                : 'Comprehensive 8-layer eye checkup',
            color: 'from-orange-500 to-orange-600'
        },
        {
            icon: FaCheckCircle,
            title: language === 'mr' ? 'निदान आणि मार्गदर्शन' : 'Diagnosis & Guidance',
            description: language === 'mr'
                ? 'अचूक निदान आणि योग्य मार्गदर्शन'
                : 'Accurate diagnosis and proper guidance',
            color: 'from-red-500 to-red-600'
        }
    ]

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr' ? 'तपासणी प्रक्रिया' : 'Checkup Process'}
                    </h2>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr'
                            ? 'नेत्र तपासणीची सोपी आणि सुरक्षित प्रक्रिया'
                            : 'Simple and safe process for eye checkup'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connection Line */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-300 z-0">
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
                                </div>
                            )}

                            <div className="relative z-10 text-center space-y-4">
                                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl shadow-lg`}>
                                    <step.icon />
                                </div>

                                <div className="bg-white rounded-lg p-4 shadow-lg">
                                    <div className="text-sm font-semibold text-primary-600 mb-2">
                                        {language === 'mr' ? 'स्टेप' : 'Step'} {index + 1}
                                    </div>

                                    <h3 className={`text-lg font-semibold text-gray-800 mb-2 ${language === 'mr' ? 'marathi-text' : ''
                                        }`}>
                                        {step.title}
                                    </h3>

                                    <p className={`text-sm text-gray-600 ${language === 'mr' ? 'marathi-text' : ''
                                        }`}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                        <h3 className={`text-2xl font-bold text-gray-800 mb-4 ${language === 'mr' ? 'marathi-text' : ''
                            }`}>
                            {language === 'mr'
                                ? 'तुमच्या जवळच्या हॉस्पिटलमध्ये मोफत नेत्र तपासणीसाठी आताच नाव नोंदणी करा'
                                : 'Book Your Free Appointment at Your Nearest Hospital Today'
                            }
                        </h3>

                        <p className={`text-lg text-gray-600 mb-6 ${language === 'mr' ? 'marathi-text' : ''
                            }`}>
                            {language === 'mr'
                                ? 'आमच्या अनुभवी डॉक्टर आणि आधुनिक तंत्रज्ञानासह सर्वोत्तम नेत्र सेवा मिळवा'
                                : 'Get the best eye care services with our experienced doctors and modern technology'
                            }
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+91-1234567890"
                                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
                            >
                                <FaPhone className="text-lg" />
                                <span>{language === 'mr' ? 'आताच कॉल करा' : 'Call Now'}</span>
                            </a>

                            <a
                                href="/book"
                                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
                            >
                                <FaCalendarAlt className="text-lg" />
                                <span>{language === 'mr' ? 'अपॉइंटमेंट बुक करा' : 'Book Appointment'}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
