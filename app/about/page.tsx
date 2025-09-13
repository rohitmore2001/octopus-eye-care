'use client'

import { useLanguage } from '@/components/LanguageProvider'
import WhyChooseUs from '@/components/WhyChooseUs'
import TeamSection from '@/components/TeamSection'

export default function AboutPage() {
    const { language } = useLanguage()

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
                <div className="container-custom text-center">
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr' ? 'आमच्याबद्दल' : 'About Us'}
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr'
                            ? 'ऑक्टोपस आय केअर हॉस्पिटल - व्यावसायिक नेत्र सेवा आणि प्रगत तंत्रज्ञान'
                            : 'Octopus Eye Care Hospital - Professional eye care services with advanced technology'
                        }
                    </p>
                </div>
            </section>

            {/* About Content */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className={`text-3xl font-bold text-gray-800 ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {language === 'mr' ? 'आमची कहाणी' : 'Our Story'}
                            </h2>

                            <p className={`text-lg text-gray-600 leading-relaxed ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {language === 'mr'
                                    ? 'ऑक्टोपस आय केअर हॉस्पिटल 15 वर्षांपासून नेत्र सेवा क्षेत्रात काम करत आहे. आम्ही आमच्या रुग्णांना सर्वोत्तम नेत्र सेवा प्रदान करण्यासाठी प्रतिबद्ध आहोत. आमच्या अनुभवी डॉक्टर आणि आधुनिक तंत्रज्ञानासह, आम्ही 8-लेयर नेत्र तपासणी आणि अचूक निदान प्रदान करतो.'
                                    : 'Octopus Eye Care Hospital has been serving in the eye care field for 15 years. We are committed to providing the best eye care services to our patients. With our experienced doctors and modern technology, we provide 8-layer eye checkup and accurate diagnosis.'
                                }
                            </p>

                            <p className={`text-lg text-gray-600 leading-relaxed ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {language === 'mr'
                                    ? 'आमचे मिशन आहे की प्रत्येक व्यक्तीला सर्वोत्तम नेत्र सेवा मिळावी. आम्ही आमच्या रुग्णांना व्यक्तिगत आणि व्यावसायिक सेवा प्रदान करतो. आमच्या सुपर स्पेशालिस्ट डॉक्टर आणि आधुनिक उपकरणांसह, आम्ही सर्व प्रकारच्या नेत्र समस्या सोडवतो.'
                                    : 'Our mission is to provide the best eye care services to everyone. We provide personalized and professional services to our patients. With our super specialist doctors and modern equipment, we solve all types of eye problems.'
                                }
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
                            <div className="text-center space-y-6">
                                <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-4xl font-bold text-primary-600">15+</span>
                                </div>
                                <h3 className={`text-2xl font-bold text-gray-800 ${language === 'mr' ? 'marathi-text' : ''
                                    }`}>
                                    {language === 'mr' ? 'वर्षांचा अनुभव' : 'Years of Experience'}
                                </h3>
                                <p className={`text-gray-600 ${language === 'mr' ? 'marathi-text' : ''
                                    }`}>
                                    {language === 'mr'
                                        ? 'नेत्र सेवा क्षेत्रात'
                                        : 'In Eye Care Services'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseUs />
            <TeamSection />
        </div>
    )
}
