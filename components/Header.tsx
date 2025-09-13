'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from './LanguageProvider'
import { FaEye, FaBars, FaTimes, FaPhone } from 'react-icons/fa'

export default function Header() {
    const { language, setLanguage, t } = useLanguage()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 px-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <FaEye className="text-primary-600 text-2xl" />
                        <span className="text-xl font-bold text-gray-800">
                            {language === 'mr' ? 'ऑक्टोपस आय केअर' : 'Octopus Eye Care'}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
                            {t('nav.home')}
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">
                            {t('nav.services')}
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
                            {t('nav.about')}
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                            {t('nav.contact')}
                        </Link>
                    </nav>

                    {/* Language Switcher & CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${language === 'en'
                                    ? 'bg-white text-primary-600 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage('mr')}
                                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${language === 'mr'
                                    ? 'bg-white text-primary-600 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                मराठी
                            </button>
                        </div>

                        <Link href="/book" className="btn-primary flex items-center space-x-2">
                            <FaPhone className="text-sm" />
                            <span>{t('nav.book')}</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
                    >
                        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-4 py-4 space-y-4">
                            <Link
                                href="/"
                                className="block text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('nav.home')}
                            </Link>
                            <Link
                                href="/services"
                                className="block text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('nav.services')}
                            </Link>
                            <Link
                                href="/about"
                                className="block text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('nav.about')}
                            </Link>
                            <Link
                                href="/contact"
                                className="block text-gray-700 hover:text-primary-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('nav.contact')}
                            </Link>

                            <div className="pt-4 border-t border-gray-200">
                                <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
                                    <button
                                        onClick={() => setLanguage('en')}
                                        className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${language === 'en'
                                            ? 'bg-white text-primary-600 shadow-sm'
                                            : 'text-gray-600 hover:text-gray-800'
                                            }`}
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => setLanguage('mr')}
                                        className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${language === 'mr'
                                            ? 'bg-white text-primary-600 shadow-sm'
                                            : 'text-gray-600 hover:text-gray-800'
                                            }`}
                                    >
                                        मराठी
                                    </button>
                                </div>

                                <Link
                                    href="/book"
                                    className="btn-primary w-full text-center flex items-center justify-center space-x-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <FaPhone className="text-sm" />
                                    <span>{t('nav.book')}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
