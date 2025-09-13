'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageProvider'
import { FaEye, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Footer() {
    const { language, t } = useLanguage()

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Hospital Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <FaEye className="text-primary-400 text-2xl" />
                            <span className="text-xl font-bold">
                                {language === 'mr' ? 'ऑक्टोपस आय केअर' : 'Octopus Eye Care'}
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {language === 'mr'
                                ? 'व्यावसायिक नेत्र सेवा आणि प्रगत 8-लेयर नेत्र तपासणी प्रणालीसह अचूक निदान आणि योग्य मार्गदर्शन.'
                                : 'Professional eye care services with advanced 8-layer eye checkup system for accurate diagnosis and proper guidance.'
                            }
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                            {language === 'mr' ? 'द्रुत लिंक' : 'Quick Links'}
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                                    {t('nav.home')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                                    {t('nav.services')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                                    {t('nav.about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                                    {t('nav.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                            {language === 'mr' ? 'सेवा' : 'Services'}
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="text-gray-300">
                                {language === 'mr' ? '8 लेयर नेत्र तपासणी' : '8-Layer Eye Checkup'}
                            </li>
                            <li className="text-gray-300">
                                {language === 'mr' ? 'मोतिबिंदू तपासणी' : 'Cataract Screening'}
                            </li>
                            <li className="text-gray-300">
                                {language === 'mr' ? 'रेटीना तपासणी' : 'Retina Examination'}
                            </li>
                            <li className="text-gray-300">
                                {language === 'mr' ? 'ग्लुकोमा तपासणी' : 'Glaucoma Testing'}
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                            {language === 'mr' ? 'संपर्क माहिती' : 'Contact Information'}
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300 text-sm">
                                        {language === 'mr'
                                            ? 'आपला पत्ता येथे ठेवा'
                                            : 'Your Hospital Address Here'
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-primary-400 flex-shrink-0" />
                                <a href="tel:+91-1234567890" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                                    +91-1234567890
                                </a>
                            </div>

                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-primary-400 flex-shrink-0" />
                                <a href="mailto:info@octopuseeyecare.com" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                                    info@octopuseeyecare.com
                                </a>
                            </div>

                            <div className="flex items-start space-x-3">
                                <FaClock className="text-primary-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300 text-sm">
                                        {language === 'mr'
                                            ? 'सोम-शनि: 9:00 AM - 6:00 PM'
                                            : 'Mon-Sat: 9:00 AM - 6:00 PM'
                                        }
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                        {language === 'mr'
                                            ? 'रविवार: 10:00 AM - 4:00 PM'
                                            : 'Sunday: 10:00 AM - 4:00 PM'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            {t('footer.copyright')}
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                                {language === 'mr' ? 'गोपनीयता नीती' : 'Privacy Policy'}
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                                {language === 'mr' ? 'अटी आणि नियम' : 'Terms & Conditions'}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
