'use client'

import { useLanguage } from './LanguageProvider'
import { FaUserMd, FaAward, FaGraduationCap, FaStethoscope } from 'react-icons/fa'

export default function TeamSection() {
    const { language } = useLanguage()

    const teamMembers = [
        {
            name: language === 'mr' ? 'डॉ. राजेश शर्मा' : 'Dr. Rajesh Sharma',
            specialization: language === 'mr' ? 'नेत्र तज्ज्ञ' : 'Eye Specialist',
            experience: language === 'mr' ? '15+ वर्षांचा अनुभव' : '15+ Years Experience',
            education: language === 'mr' ? 'MS (नेत्रशास्त्र)' : 'MS (Ophthalmology)',
            icon: FaUserMd
        },
        {
            name: language === 'mr' ? 'डॉ. प्रिया पाटील' : 'Dr. Priya Patil',
            specialization: language === 'mr' ? 'रेटिना तज्ज्ञ' : 'Retina Specialist',
            experience: language === 'mr' ? '12+ वर्षांचा अनुभव' : '12+ Years Experience',
            education: language === 'mr' ? 'MD (नेत्रशास्त्र)' : 'MD (Ophthalmology)',
            icon: FaStethoscope
        },
        {
            name: language === 'mr' ? 'डॉ. अमित जोशी' : 'Dr. Amit Joshi',
            specialization: language === 'mr' ? 'ग्लुकोमा तज्ज्ञ' : 'Glaucoma Specialist',
            experience: language === 'mr' ? '10+ वर्षांचा अनुभव' : '10+ Years Experience',
            education: language === 'mr' ? 'MS (नेत्रशास्त्र)' : 'MS (Ophthalmology)',
            icon: FaAward
        },
        {
            name: language === 'mr' ? 'डॉ. सुनीता देशमुख' : 'Dr. Sunita Deshmukh',
            specialization: language === 'mr' ? 'मोतिबिंदू तज्ज्ञ' : 'Cataract Specialist',
            experience: language === 'mr' ? '8+ वर्षांचा अनुभव' : '8+ Years Experience',
            education: language === 'mr' ? 'MS (नेत्रशास्त्र)' : 'MS (Ophthalmology)',
            icon: FaGraduationCap
        }
    ]

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr' ? 'आमचे डॉक्टर' : 'Our Doctors'}
                    </h2>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr'
                            ? 'अत्यंत अनुभवी आणि प्रमाणित नेत्र तज्ज्ञ डॉक्टर'
                            : 'Highly experienced and certified eye specialist doctors'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
                                <member.icon />
                            </div>

                            <h3 className={`text-xl font-semibold text-gray-800 mb-2 ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {member.name}
                            </h3>

                            <p className={`text-primary-600 font-medium mb-2 ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {member.specialization}
                            </p>

                            <p className={`text-sm text-gray-600 mb-2 ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {member.experience}
                            </p>

                            <p className={`text-sm text-gray-500 ${language === 'mr' ? 'marathi-text' : ''
                                }`}>
                                {member.education}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
