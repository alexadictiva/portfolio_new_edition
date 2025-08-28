import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { profile } from '../data/profile';

export const Education: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-0">
            <Section id="educacion" title="Educación" className="bg-white dark:bg-gray-800">
                <div className="grid md:grid-cols-2 gap-8">
                    {profile.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-lg text-accent font-medium mb-2">
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {edu.year}
                                    </p>
                                </div>

                                {/* Education Icon */}
                                <div className="ml-4 p-3 bg-accent/10 rounded-full">
                                    <svg
                                        className="w-6 h-6 text-accent"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 14l9-5-9-5-9 5 9 5z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {edu.description && (
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                    {edu.description}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 bg-accent/5 rounded-lg p-8 border border-accent/10"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        Formación Continua
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
                        Me mantengo constantemente actualizada con las últimas tecnologías y mejores prácticas
                        del desarrollo web a través de cursos online, conferencias y participación en comunidades
                        de desarrolladores.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6 mt-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-accent mb-2">
                                +50
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                Cursos Completados
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-2xl font-bold text-accent mb-2">
                                +1000h
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                Horas de Estudio
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-2xl font-bold text-accent mb-2">
                                +20
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                Certificaciones
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
};
