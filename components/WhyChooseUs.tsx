'use client'

import { useLanguage } from './LanguageProvider'
import { FaAward, FaUserMd, FaClock, FaShieldAlt, FaHeart, FaStethoscope } from 'react-icons/fa'

export default function WhyChooseUs() {
    const { language } = useLanguage()

    const features = [
        {
            icon: FaAward,
            title: language === 'mr' ? 'प्रमाणित डॉक्टर' : 'Certified Doctors',
            description: language === 'mr'
                ? 'अत्यंत अनुभवी आणि प्रमाणित नेत्र तज्ज्ञ डॉक्टर'
                : 'Highly experienced and certified eye specialists'
        },
        {
            icon: FaStethoscope,
            title: language === 'mr' ? 'आधुनिक तंत्रज्ञान' : 'Modern Technology',
            description: language === 'mr'
                ? 'नवीनतम तंत्रज्ञान आणि उपकरणे वापरून तपासणी'
                : 'Latest technology and equipment for accurate diagnosis'
        },
        {
            icon: FaClock,
            title: language === 'mr' ? '24/7 सेवा' : '24/7 Service',
            description: language === 'mr'
                ? 'आपत्कालीन परिस्थितीत 24/7 उपलब्ध सेवा'
                : 'Round-the-clock service for emergency situations'
        },
        {
            icon: FaShieldAlt,
            title: language === 'mr' ? 'सुरक्षित उपचार' : 'Safe Treatment',
            description: language === 'mr'
                ? 'सुरक्षित आणि प्रभावी उपचार पद्धती'
                : 'Safe and effective treatment methods'
        },
        {
            icon: FaHeart,
            title: language === 'mr' ? 'रुग्ण केंद्रित सेवा' : 'Patient-Centric Care',
            description: language === 'mr'
                ? 'रुग्णांच्या गरजांवर केंद्रित व्यक्तिगत सेवा'
                : 'Personalized care focused on patient needs'
        },
        {
            icon: FaUserMd,
            title: language === 'mr' ? 'सुपर स्पेशालिस्ट' : 'Super Specialists',
            description: language === 'mr'
                ? 'विविध नेत्र रोगांमध्ये सुपर स्पेशालिस्ट'
                : 'Super specialists in various eye conditions'
        }
    ]

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr' ? 'आम्हाला का निवडावे?' : 'Why Choose Us?'}
                    </h2>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr'
                            ? 'आमच्या अनुभवी डॉक्टर आणि आधुनिक तंत्रज्ञानासह सर्वोत्तम नेत्र सेवा'
                            : 'Best eye care services with experienced doctors and modern technology'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center space-y-4 group">
                            <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 text-3xl group-hover:scale-110 transition-transform duration-300">
                                <feature.icon />
                            </div>

                            <h3 className={`text-xl font-semibold text-gray-800 ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {feature.title}
                            </h3>

                            <p className={`text-gray-600 leading-relaxed ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Statistics */}
                <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
                            <div className={`text-gray-600 ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {language === 'mr' ? 'संतुष्ट रुग्ण' : 'Happy Patients'}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                            <div className={`text-gray-600 ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {language === 'mr' ? 'वर्षांचा अनुभव' : 'Years Experience'}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                            <div className={`text-gray-600 ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {language === 'mr' ? 'स्पेशालिस्ट डॉक्टर' : 'Specialist Doctors'}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary-600 mb-2">99%</div>
                            <div className={`text-gray-600 ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {language === 'mr' ? 'यशस्वी उपचार' : 'Success Rate'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
