'use client'

import { useState } from 'react'
import { useLanguage } from './LanguageProvider'
import { FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUser, FaEnvelope } from 'react-icons/fa'

export default function AppointmentSection() {
    const { language } = useLanguage()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        preferredDate: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        alert(language === 'mr' ? 'आपला अपॉइंटमेंट बुक झाला आहे!' : 'Your appointment has been booked!')
    }

    return (
        <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-white space-y-8">
                        <div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {language === 'mr'
                                    ? 'तुमच्या जवळच्या हॉस्पिटलमध्ये मोफत नेत्र तपासणीसाठी आताच नाव नोंदणी करा'
                                    : 'Book Your Free Appointment at Your Nearest Hospital'
                                }
                            </h2>

                            <p className={`text-xl opacity-90 leading-relaxed ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {language === 'mr'
                                    ? 'आमच्या अनुभवी डॉक्टरांकडून व्यावसायिक नेत्र सेवा मिळवा. 8-लेयर नेत्र तपासणी आणि अचूक निदानासाठी आजच अपॉइंटमेंट बुक करा.'
                                    : 'Get professional eye care from our experienced doctors. Book your appointment today for 8-layer eye checkup and accurate diagnosis.'
                                }
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <FaPhone className="text-2xl text-primary-200" />
                                <div>
                                    <div className="font-semibold">
                                        {language === 'mr' ? 'फोन करा' : 'Call Us'}
                                    </div>
                                    <a href="tel:+91-1234567890" className="text-primary-200 hover:text-white transition-colors">
                                        +91-1234567890
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-2xl text-primary-200" />
                                <div>
                                    <div className="font-semibold">
                                        {language === 'mr' ? 'पत्ता' : 'Address'}
                                    </div>
                                    <div className="text-primary-200">
                                        {language === 'mr'
                                            ? 'आपला हॉस्पिटल पत्ता येथे'
                                            : 'Your Hospital Address Here'
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <FaClock className="text-2xl text-primary-200" />
                                <div>
                                    <div className="font-semibold">
                                        {language === 'mr' ? 'कामाचे तास' : 'Working Hours'}
                                    </div>
                                    <div className="text-primary-200">
                                        {language === 'mr'
                                            ? 'सोम-शनि: 9:00 AM - 6:00 PM'
                                            : 'Mon-Sat: 9:00 AM - 6:00 PM'
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Appointment Form */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8">
                        <h3 className={`text-2xl font-bold text-gray-800 mb-6 text-center ${language === 'mr' ? 'marathi-text' : ''
                            }`}>
                            {language === 'mr' ? 'अपॉइंटमेंट बुक करा' : 'Book Your Appointment'}
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {language === 'mr' ? 'नाव' : 'Full Name'} *
                                </label>
                                <div className="relative">
                                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder={language === 'mr' ? 'आपले नाव प्रविष्ट करा' : 'Enter your full name'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {language === 'mr' ? 'फोन नंबर' : 'Phone Number'} *
                                </label>
                                <div className="relative">
                                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder={language === 'mr' ? 'आपला फोन नंबर' : 'Enter your phone number'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {language === 'mr' ? 'ईमेल' : 'Email'}
                                </label>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder={language === 'mr' ? 'आपला ईमेल' : 'Enter your email'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {language === 'mr' ? 'पसंतीची तारीख' : 'Preferred Date'}
                                </label>
                                <div className="relative">
                                    <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="date"
                                        name="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {language === 'mr' ? 'संदेश' : 'Message'}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder={language === 'mr' ? 'कोणतीही विशेष माहिती' : 'Any special requirements'}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                {language === 'mr' ? 'अपॉइंटमेंट बुक करा' : 'Book Appointment'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
