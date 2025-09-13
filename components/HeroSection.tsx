'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageProvider'
import { FaEye, FaArrowRight, FaPhone, FaCalendarAlt } from 'react-icons/fa'

export default function HeroSection() {
    const { language, t } = useLanguage()

    return (
        <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e0f2fe\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

            <div className="container-custom section-padding relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2 text-primary-600">
                                <FaEye className="text-2xl" />
                                <span className="text-sm font-semibold uppercase tracking-wider">
                                    {language === 'mr' ? 'व्यावसायिक नेत्र सेवा' : 'Professional Eye Care'}
                                </span>
                            </div>

                            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {t('hero.title')}
                            </h1>

                            <p className={`text-xl text-gray-600 leading-relaxed ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {t('hero.subtitle')}
                            </p>

                            <p className={`text-lg text-gray-700 leading-relaxed ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {t('hero.description')}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/book" className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 group">
                                <FaCalendarAlt className="text-lg" />
                                <span>{t('hero.cta')}</span>
                                <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link href="/services" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                                <FaEye className="text-lg" />
                                <span>{t('learn.more')}</span>
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="flex items-center space-x-6 text-gray-600">
                            <div className="flex items-center space-x-2">
                                <FaPhone className="text-primary-600" />
                                <a href="tel:+91-1234567890" className="hover:text-primary-600 transition-colors font-medium">
                                    +91-1234567890
                                </a>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary-600">1000+</div>
                                <div className="text-sm text-gray-600">
                                    {language === 'mr' ? 'संतुष्ट रुग्ण' : 'Happy Patients'}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary-600">15+</div>
                                <div className="text-sm text-gray-600">
                                    {language === 'mr' ? 'वर्षांचा अनुभव' : 'Years Experience'}
                                </div>
                            </div>
                            <div className="text-center col-span-2 md:col-span-1">
                                <div className="text-2xl font-bold text-primary-600">24/7</div>
                                <div className="text-sm text-gray-600">
                                    {language === 'mr' ? 'आपत्कालीन सेवा' : 'Emergency Care'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="relative">
                        <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                            {/* Eye Care Illustration */}
                            <div className="text-center space-y-6">
                                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                                    <FaEye className="text-6xl text-primary-600" />
                                </div>

                                <div className="space-y-3">
                                    <h3 className={`text-xl font-semibold text-gray-800 ${language === 'mr' ? 'marathi-text' : ''
                                        }`}>
                                        {language === 'mr' ? '8-लेयर नेत्र तपासणी' : '8-Layer Eye Checkup'}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                            <span>{language === 'mr' ? 'चष्मा नंबर' : 'Spectacle Number'}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                            <span>{language === 'mr' ? 'जनरल चेकप' : 'General Checkup'}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                            <span>{language === 'mr' ? 'मोतिबिंदू' : 'Cataract'}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                            <span>{language === 'mr' ? 'रेटीना' : 'Retina'}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                            <span>{language === 'mr' ? 'ग्लुकोमा' : 'Glaucoma'}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                            <span>{language === 'mr' ? 'औषध तपासणी' : 'Eye Drops'}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                            <span>{language === 'mr' ? 'सुपर स्पेशालिस्ट' : 'Super Specialist'}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                            <span>{language === 'mr' ? 'अचूक निदान' : 'Accurate Diagnosis'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 rounded-full opacity-60"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-200 rounded-full opacity-60"></div>
                    </div>
                </div>
            </div>
        </section >
    )
}