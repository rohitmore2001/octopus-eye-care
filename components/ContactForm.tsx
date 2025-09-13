'use client'

import { useState } from 'react'
import { useLanguage } from './LanguageProvider'
import { FaUser, FaEnvelope, FaPhone, FaComment, FaPaperPlane } from 'react-icons/fa'

export default function ContactForm() {
    const { language } = useLanguage()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
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
        console.log('Contact form submitted:', formData)
        alert(language === 'mr' ? 'आपला संदेश पाठवला गेला आहे!' : 'Your message has been sent!')
    }

    return (
        <div className="card">
            <h2 className={`text-2xl font-bold text-gray-800 mb-6 ${language === 'mr' ? 'marathi-text' : ''
                }`}>
                {language === 'mr' ? 'आम्हाला संदेश पाठवा' : 'Send us a Message'}
            </h2>

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
                        {language === 'mr' ? 'ईमेल' : 'Email'} *
                    </label>
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder={language === 'mr' ? 'आपला ईमेल' : 'Enter your email'}
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
                        {language === 'mr' ? 'विषय' : 'Subject'}
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder={language === 'mr' ? 'संदेशाचा विषय' : 'Message subject'}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'mr' ? 'संदेश' : 'Message'} *
                    </label>
                    <div className="relative">
                        <FaComment className="absolute left-3 top-4 text-gray-400" />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder={language === 'mr' ? 'आपला संदेश येथे लिहा' : 'Write your message here'}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                    <FaPaperPlane className="text-lg" />
                    <span>{language === 'mr' ? 'संदेश पाठवा' : 'Send Message'}</span>
                </button>
            </form>
        </div>
    )
}
