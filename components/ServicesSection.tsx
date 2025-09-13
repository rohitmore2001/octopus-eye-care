'use client'

import { useLanguage } from './LanguageProvider'
import { FaEye, FaSearch, FaStethoscope, FaEyeDropper, FaUserMd, FaCheckCircle, FaMicroscope, FaHeartbeat } from 'react-icons/fa'

export default function ServicesSection() {
    const { language, t } = useLanguage()

    const services = [
        {
            icon: FaEye,
            title: t('services.1'),
            description: language === 'mr'
                ? '8 विविध स्तरांवर नेत्र तपासणी करून अचूक निदान'
                : 'Comprehensive 8-layer examination for accurate diagnosis',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: FaSearch,
            title: t('services.2'),
            description: language === 'mr'
                ? 'चष्म्याच्या नंबरची अचूक तपासणी आणि मापन'
                : 'Accurate testing and measurement of spectacle numbers',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: FaStethoscope,
            title: t('services.3'),
            description: language === 'mr'
                ? 'सामान्य नेत्र आरोग्य तपासणी आणि मूल्यांकन'
                : 'General eye health examination and assessment',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: FaEye,
            title: t('services.4'),
            description: language === 'mr'
                ? 'मोतिबिंदूची तपासणी आणि शल्यचिकित्सा'
                : 'Cataract screening and surgical treatment',
            color: 'from-orange-500 to-orange-600'
        },
        {
            icon: FaMicroscope,
            title: t('services.5'),
            description: language === 'mr'
                ? 'रेटिनाची तपासणी आणि रोग निदान'
                : 'Retina examination and disease diagnosis',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: FaHeartbeat,
            title: t('services.6'),
            description: language === 'mr'
                ? 'ग्लुकोमाची तपासणी आणि नियंत्रण'
                : 'Glaucoma testing and management',
            color: 'from-teal-500 to-teal-600'
        },
        {
            icon: FaEyeDropper,
            title: t('services.7'),
            description: language === 'mr'
                ? 'डोळ्यांमध्ये औषध टाकून विशेष तपासणी'
                : 'Special examination with eye drops for detailed analysis',
            color: 'from-indigo-500 to-indigo-600'
        },
        {
            icon: FaUserMd,
            title: t('services.8'),
            description: language === 'mr'
                ? 'सुपर स्पेशालिस्ट डॉक्टरांकडून तपासणी'
                : 'Examination by super specialist doctors',
            color: 'from-pink-500 to-pink-600'
        },
        {
            icon: FaCheckCircle,
            title: t('services.9'),
            description: language === 'mr'
                ? 'अचूक निदान आणि योग्य मार्गदर्शन'
                : 'Accurate diagnosis and proper guidance',
            color: 'from-emerald-500 to-emerald-600'
        }
    ]

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {t('services.title')}
                    </h2>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {t('services.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                            <div className="text-center space-y-4">
                                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-2xl shadow-lg`}>
                                    <service.icon />
                                </div>

                                <h3 className={`text-xl font-semibold text-gray-800 ${language === 'mr' ? 'marathi-text' : ''
                                    }`}>
                                    {service.title}
                                </h3>

                                <p className={`text-gray-600 leading-relaxed ${language === 'mr' ? 'marathi-text' : ''
                                    }`}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
                    <div className="text-center space-y-6">
                        <h3 className={`text-2xl font-bold text-gray-800 ${language === 'mr' ? 'marathi-text' : ''
                            }`}>
                            {language === 'mr'
                                ? 'तुमच्या जवळच्या हॉस्पिटलमध्ये मोफत नेत्र तपासणी'
                                : 'Free Eye Checkup at Your Nearest Hospital'
                            }
                        </h3>

                        <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${language === 'mr' ? 'marathi-text' : ''
                            }`}>
                            {language === 'mr'
                                ? 'तुमच्या जवळच्या हॉस्पिटलमध्ये मोफत नेत्र तपासणीसाठी आताच नाव नोंदणी करा. आमचे अनुभवी डॉक्टर तुम्हाला सर्वोत्तम सेवा प्रदान करतील.'
                                : 'Book your free appointment at your nearest hospital. Our experienced doctors will provide you with the best care and treatment.'
                            }
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+91-1234567890"
                                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
                            >
                                <span>{language === 'mr' ? 'आताच कॉल करा' : 'Call Now'}</span>
                            </a>
                            <a
                                href="/book"
                                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
                            >
                                <span>{language === 'mr' ? 'अपॉइंटमेंट बुक करा' : 'Book Appointment'}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
