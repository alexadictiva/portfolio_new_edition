import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Avatar } from '../components/Avatar';
import { profile } from '../data/profile';

export const Home: React.FC = () => {
    const mainSkills = profile.skills.slice(0, 5);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-desktop mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)] py-16">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
                        >
                            Hola, soy{' '}
                            <span className="text-accent">{profile.name}</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-6"
                        >
                            {profile.role}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            {profile.about}
                        </motion.p>

                        {/* Main Skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
                        >
                            {mainSkills.map((skill, index) => (
                                <motion.span
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                                >
                                    {skill.name}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link to="/proyectos">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
                                >
                                    Ver proyectos
                                </motion.button>
                            </Link>

                            <motion.a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors duration-200"
                            >
                                Abrir LinkedIn
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex-1 flex justify-center"
                    >
                        <Avatar
                            src={profile.avatar}
                            alt={profile.name}
                            size="xl"
                            className="lg:mr-8"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
