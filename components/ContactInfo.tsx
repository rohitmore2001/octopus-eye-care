'use client'

import { useLanguage } from './LanguageProvider'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaHospital, FaGlobe } from 'react-icons/fa'

export default function ContactInfo() {
    const { language } = useLanguage()

    const contactDetails = [
        {
            icon: FaMapMarkerAlt,
            title: language === 'mr' ? 'पत्ता' : 'Address',
            details: [
                language === 'mr' ? 'ऑक्टोपस आय केअर हॉस्पिटल' : 'Octopus Eye Care Hospital',
                language === 'mr' ? 'मुख्य रस्ता, शहर' : 'Main Road, City',
                language === 'mr' ? 'महाराष्ट्र, भारत - 400001' : 'Maharashtra, India - 400001'
            ]
        },
        {
            icon: FaPhone,
            title: language === 'mr' ? 'फोन नंबर' : 'Phone Numbers',
            details: [
                '+91-1234567890',
                '+91-9876543210',
                language === 'mr' ? 'आपत्कालीन: +91-9999999999' : 'Emergency: +91-9999999999'
            ]
        },
        {
            icon: FaEnvelope,
            title: language === 'mr' ? 'ईमेल' : 'Email',
            details: [
                'info@octopuseeyecare.com',
                'appointment@octopuseeyecare.com',
                'emergency@octopuseeyecare.com'
            ]
        },
        {
            icon: FaClock,
            title: language === 'mr' ? 'कामाचे तास' : 'Working Hours',
            details: [
                language === 'mr' ? 'सोमवार - शनिवार: 9:00 AM - 6:00 PM' : 'Monday - Saturday: 9:00 AM - 6:00 PM',
                language === 'mr' ? 'रविवार: 10:00 AM - 4:00 PM' : 'Sunday: 10:00 AM - 4:00 PM',
                language === 'mr' ? 'आपत्कालीन: 24/7' : 'Emergency: 24/7'
            ]
        }
    ]

    return (
        <div className="space-y-8">
            <div>
                <h2 className={`text-2xl font-bold text-gray-800 mb-6 ${language === 'mr' ? 'marathi-text' : ''
                    }`}>
                    {language === 'mr' ? 'संपर्क माहिती' : 'Contact Information'}
                </h2>

                <p className={`text-lg text-gray-600 leading-relaxed ${language === 'mr' ? 'marathi-text' : ''
                    }`}>
                    {language === 'mr'
                        ? 'आमच्याशी संपर्क साधण्यासाठी खालील माहिती वापरा. आम्ही तुमच्या प्रश्नांची उत्तरे देण्यासाठी तयार आहोत.'
                        : 'Use the following information to get in touch with us. We are ready to answer your questions.'
                    }
                </p>
            </div>

            <div className="space-y-6">
                {contactDetails.map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                            <contact.icon className="text-xl" />
                        </div>

                        <div className="space-y-2">
                            <h3 className={`text-lg font-semibold text-gray-800 ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {contact.title}
                            </h3>

                            <div className="space-y-1">
                                {contact.details.map((detail, detailIndex) => (
                                    <p key={detailIndex} className="text-gray-600">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-lg p-8 text-center">
                <FaHospital className="text-4xl text-gray-400 mx-auto mb-4" />
                <h3 className={`text-lg font-semibold text-gray-700 mb-2 ${language === 'mr' ? 'marathi-text' : ''
                    }`}>
                    {language === 'mr' ? 'आमचे स्थान' : 'Our Location'}
                </h3>
                <p className={`text-gray-600 ${language === 'mr' ? 'marathi-text' : ''
                    }`}>
                    {language === 'mr'
                        ? 'येथे Google Map दिसेल'
                        : 'Google Map will be displayed here'
                    }
                </p>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6">
                <h3 className={`text-lg font-semibold text-gray-800 mb-4 ${language === 'mr' ? 'marathi-text' : ''
                    }`}>
                    {language === 'mr' ? 'द्रुत क्रिया' : 'Quick Actions'}
                </h3>

                <div className="space-y-3">
                    <a
                        href="tel:+91-1234567890"
                        className="flex items-center space-x-3 text-primary-600 hover:text-primary-700 transition-colors"
                    >
                        <FaPhone className="text-lg" />
                        <span>{language === 'mr' ? 'आताच कॉल करा' : 'Call Now'}</span>
                    </a>

                    <a
                        href="mailto:info@octopuseeyecare.com"
                        className="flex items-center space-x-3 text-primary-600 hover:text-primary-700 transition-colors"
                    >
                        <FaEnvelope className="text-lg" />
                        <span>{language === 'mr' ? 'ईमेल पाठवा' : 'Send Email'}</span>
                    </a>

                    <a
                        href="/book"
                        className="flex items-center space-x-3 text-primary-600 hover:text-primary-700 transition-colors"
                    >
                        <FaGlobe className="text-lg" />
                        <span>{language === 'mr' ? 'अपॉइंटमेंट बुक करा' : 'Book Appointment'}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
