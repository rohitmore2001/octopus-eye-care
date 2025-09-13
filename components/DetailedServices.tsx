'use client'

import { useLanguage } from './LanguageProvider'
import { FaEye, FaSearch, FaStethoscope, FaEyeDropper, FaUserMd, FaCheckCircle, FaMicroscope, FaHeartbeat, FaArrowRight } from 'react-icons/fa'

export default function DetailedServices() {
    const { language } = useLanguage()

    const detailedServices = [
        {
            icon: FaEye,
            title: language === 'mr' ? '8 लेयर नेत्र तपासणी' : '8-Layer Eye Checkup',
            description: language === 'mr'
                ? '8 विविध स्तरांवर नेत्र तपासणी करून अचूक निदान आणि योग्य उपचार'
                : 'Comprehensive 8-layer examination for accurate diagnosis and proper treatment',
            features: language === 'mr'
                ? [
                    'नेत्राच्या सर्व भागांची तपासणी',
                    'अचूक निदान आणि मार्गदर्शन',
                    'आधुनिक तंत्रज्ञान वापरून तपासणी',
                    'तज्ज्ञ डॉक्टरांकडून तपासणी'
                ]
                : [
                    'Complete examination of all eye parts',
                    'Accurate diagnosis and guidance',
                    'Examination using modern technology',
                    'Examination by expert doctors'
                ],
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: FaSearch,
            title: language === 'mr' ? 'चष्मा नंबर तपासणी' : 'Spectacle Number Testing',
            description: language === 'mr'
                ? 'चष्म्याच्या नंबरची अचूक तपासणी आणि मापन'
                : 'Accurate testing and measurement of spectacle numbers',
            features: language === 'mr'
                ? [
                    'अचूक नंबर मापन',
                    'सर्व प्रकारच्या चष्म्यांची तपासणी',
                    'आधुनिक मशीन वापरून तपासणी',
                    'योग्य चष्मा निवड मार्गदर्शन'
                ]
                : [
                    'Accurate number measurement',
                    'Testing of all types of spectacles',
                    'Examination using modern machines',
                    'Guidance for proper spectacle selection'
                ],
            color: 'from-green-500 to-green-600'
        },
        {
            icon: FaStethoscope,
            title: language === 'mr' ? 'जनरल चेकप' : 'General Checkup',
            description: language === 'mr'
                ? 'सामान्य नेत्र आरोग्य तपासणी आणि मूल्यांकन'
                : 'General eye health examination and assessment',
            features: language === 'mr'
                ? [
                    'नेत्राच्या सामान्य आरोग्याची तपासणी',
                    'नेत्राच्या दृष्टीची तपासणी',
                    'नेत्राच्या रंगाची तपासणी',
                    'नेत्राच्या हालचालींची तपासणी'
                ]
                : [
                    'General eye health examination',
                    'Vision testing',
                    'Color vision testing',
                    'Eye movement testing'
                ],
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: FaEye,
            title: language === 'mr' ? 'मोतिबिंदू तपासणी' : 'Cataract Screening',
            description: language === 'mr'
                ? 'मोतिबिंदूची तपासणी आणि शल्यचिकित्सा'
                : 'Cataract screening and surgical treatment',
            features: language === 'mr'
                ? [
                    'मोतिबिंदूची तपासणी',
                    'शल्यचिकित्सा आवश्यकतेचे मूल्यांकन',
                    'आधुनिक शल्यचिकित्सा पद्धती',
                    'शल्यचिकित्सा नंतर देखभाल'
                ]
                : [
                    'Cataract screening',
                    'Assessment of surgical need',
                    'Modern surgical techniques',
                    'Post-surgical care'
                ],
            color: 'from-orange-500 to-orange-600'
        },
        {
            icon: FaMicroscope,
            title: language === 'mr' ? 'रेटीना तपासणी' : 'Retina Examination',
            description: language === 'mr'
                ? 'रेटिनाची तपासणी आणि रोग निदान'
                : 'Retina examination and disease diagnosis',
            features: language === 'mr'
                ? [
                    'रेटिनाची तपासणी',
                    'रेटिना रोगांचे निदान',
                    'आधुनिक इमेजिंग तंत्रज्ञान',
                    'योग्य उपचार मार्गदर्शन'
                ]
                : [
                    'Retina examination',
                    'Retina disease diagnosis',
                    'Modern imaging technology',
                    'Proper treatment guidance'
                ],
            color: 'from-red-500 to-red-600'
        },
        {
            icon: FaHeartbeat,
            title: language === 'mr' ? 'ग्लुकोमा तपासणी' : 'Glaucoma Testing',
            description: language === 'mr'
                ? 'ग्लुकोमाची तपासणी आणि नियंत्रण'
                : 'Glaucoma testing and management',
            features: language === 'mr'
                ? [
                    'ग्लुकोमाची तपासणी',
                    'नेत्राच्या दबावाची तपासणी',
                    'ग्लुकोमा नियंत्रण',
                    'योग्य औषध मार्गदर्शन'
                ]
                : [
                    'Glaucoma testing',
                    'Eye pressure testing',
                    'Glaucoma management',
                    'Proper medication guidance'
                ],
            color: 'from-teal-500 to-teal-600'
        },
        {
            icon: FaEyeDropper,
            title: language === 'mr' ? 'डोळ्यांमध्ये औषध टाकून तपासणी' : 'Eye Drops Examination',
            description: language === 'mr'
                ? 'डोळ्यांमध्ये औषध टाकून विशेष तपासणी'
                : 'Special examination with eye drops for detailed analysis',
            features: language === 'mr'
                ? [
                    'औषध टाकून तपासणी',
                    'विशेष निदान',
                    'अचूक मापन',
                    'योग्य उपचार निर्णय'
                ]
                : [
                    'Examination with eye drops',
                    'Special diagnosis',
                    'Accurate measurement',
                    'Proper treatment decision'
                ],
            color: 'from-indigo-500 to-indigo-600'
        },
        {
            icon: FaUserMd,
            title: language === 'mr' ? 'सुपर स्पेशालिस्ट डॉक्टरांकडून तपासणी' : 'Super Specialist Doctor Consultation',
            description: language === 'mr'
                ? 'सुपर स्पेशालिस्ट डॉक्टरांकडून तपासणी'
                : 'Examination by super specialist doctors',
            features: language === 'mr'
                ? [
                    'सुपर स्पेशालिस्ट डॉक्टर',
                    'अत्यंत अनुभवी तज्ज्ञ',
                    'विशेष निदान',
                    'योग्य उपचार मार्गदर्शन'
                ]
                : [
                    'Super specialist doctors',
                    'Highly experienced experts',
                    'Special diagnosis',
                    'Proper treatment guidance'
                ],
            color: 'from-pink-500 to-pink-600'
        },
        {
            icon: FaCheckCircle,
            title: language === 'mr' ? 'अचूक निदान आणि योग्य मार्गदर्शन' : 'Accurate Diagnosis & Proper Guidance',
            description: language === 'mr'
                ? 'अचूक निदान आणि योग्य मार्गदर्शन'
                : 'Accurate diagnosis and proper guidance',
            features: language === 'mr'
                ? [
                    'अचूक निदान',
                    'योग्य उपचार मार्गदर्शन',
                    'रुग्ण केंद्रित सेवा',
                    'सतत देखभाल'
                ]
                : [
                    'Accurate diagnosis',
                    'Proper treatment guidance',
                    'Patient-centered care',
                    'Continuous care'
                ],
            color: 'from-emerald-500 to-emerald-600'
        }
    ]

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr' ? 'तपशीलवार सेवा' : 'Detailed Services'}
                    </h2>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === 'mr' ? 'marathi-text' : ''
                        }`}>
                        {language === 'mr'
                            ? 'प्रत्येक सेवेची तपशीलवार माहिती आणि वैशिष्ट्ये'
                            : 'Detailed information and features of each service'
                        }
                    </p>
                </div>

                <div className="space-y-12">
                    {detailedServices.map((service, index) => (
                        <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                            }`}>
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <div className="flex items-center space-x-4">
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-2xl shadow-lg`}>
                                        <service.icon />
                                    </div>
                                    <h3 className={`text-2xl font-bold text-gray-800 ${language === 'mr' ? 'marathi-text' : ''
                                        }`}>
                                        {service.title}
                                    </h3>
                                </div>

                                <p className={`text-lg text-gray-600 leading-relaxed ${language === 'mr' ? 'marathi-text' : ''
                                    }`}>
                                    {service.description}
                                </p>

                                <ul className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start space-x-3">
                                            <FaArrowRight className="text-primary-600 mt-1 flex-shrink-0" />
                                            <span className={`text-gray-700 ${language === 'mr' ? 'marathi-text' : ''
                                                }`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-full flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-4xl shadow-xl`}>
                                            <service.icon />
                                        </div>
                                        <div className="text-6xl font-bold text-gray-300">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
