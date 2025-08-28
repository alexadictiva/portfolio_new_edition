import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Avatar } from '../components/Avatar';
import { profile } from '../data/profile';

export const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-0">
            <Section id="sobre-mi" title="Sobre mí" className="bg-white dark:bg-gray-800">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Avatar and Personal Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <div className="flex justify-center lg:justify-start mb-8">
                            <Avatar
                                src={profile.avatar}
                                alt={profile.name}
                                size="lg"
                            />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            {profile.name}
                        </h3>

                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            {profile.role}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center justify-center lg:justify-start">
                                <svg
                                    className="w-5 h-5 text-accent mr-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors duration-200"
                                >
                                    {profile.email}
                                </a>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start">
                                <svg
                                    className="w-5 h-5 text-accent mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors duration-200"
                                >
                                    LinkedIn
                                </a>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start">
                                <svg
                                    className="w-5 h-5 text-accent mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors duration-200"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {profile.about}
                            </p>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                                Nací y crecí en Caracas, Venezuela, donde cursé mis estudios secundarios y posteriormente inicié la carrera de Administración de Empresas. En 2017 emigré a Argentina, estableciéndome en la ciudad de Buenos Aires, donde trabajé en el área de atención al cliente mientras comenzaba a capacitarme en desarrollo web.
                            </p>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                                Mi interés por la programación surgió en 2015, cuando desarrollé un sistema de mensajería interna para facilitar la comunicación entre trabajadores y supervisores dentro de la empresa en la que me desempeñaba. A partir de allí decidí enfocar mi carrera en el mundo del desarrollo web sin dejar de lado mi formación en administración.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                                Desde entonces he complementado mi formación con múltiples cursos en plataformas como Platzi, EDTeam y Udemy, y en 2020 comencé la carrera técnica de Programación y Diseño Web en el Instituto ALPI. Paralelamente he adquirido experiencia práctica construyendo aplicaciones SaaS orientadas al e-commerce y trabajando con integraciones a plataformas como Mercado Libre, Tiendanube, Empretienda, Woocommerce, entre otras.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                                Manejo herramientas y tecnologías como:
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-3 text-[14.5px] pl-[24px]">
                                    <li><strong className="text-gray-900 dark:text-white">HTML5, CSS3 y SCSS:</strong> para la maquetación y estilos.</li>
                                    <li><strong className="text-gray-900 dark:text-white">JavaScript y jQuery:</strong> para la lógica de interacción y dinamismo.</li>
                                    <li><strong className="text-gray-900 dark:text-white">React:</strong> para el desarrollo de interfaces modernas y escalables.</li>
                                    <li><strong className="text-gray-900 dark:text-white">Twig y PHP:</strong> en entornos con plantillas y backends personalizados.</li>
                                    <li><strong className="text-gray-900 dark:text-white">Git y GitHub:</strong> para control de versiones, tanto en terminal como en interfaz gráfica.</li>
                                    <li><strong className="text-gray-900 dark:text-white">Figma:</strong> en modo desarrollador para trasladar diseños a código de manera precisa.</li>
                                </ul>

                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                                También he trabajado con MySQL para la gestión de bases de datos, Google Apps Script para automatizaciones y con metodologías de diseño responsivo enfocadas en la experiencia de usuario.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                                Me considero una persona autodidacta, detallista y orientada a soluciones, con la capacidad de crear aplicaciones y páginas web que aporten valor real a las empresas, optimizando procesos y generando impacto positivo en sus ingresos.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                                Mi objetivo es seguir consolidando mis conocimientos en el ecosistema frontend, explorando librerías y frameworks modernos, y continuar desarrollando proyectos que combinen tecnología, diseño y funcionalidad para resolver necesidades del mundo real.
                            </p>
                        </div>

                        {/* Key Highlights */}
                        <div className="grid sm:grid-cols-2 gap-4 mt-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="p-4 bg-accent/5 rounded-lg border border-accent/10"
                            >
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    Experiencia
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    +3 años desarrollando aplicaciones web modernas
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="p-4 bg-accent/5 rounded-lg border border-accent/10"
                            >
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    Especialización
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    JQuery, React y diseño responsive
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};
