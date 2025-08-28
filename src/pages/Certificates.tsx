import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { CertCard } from '../components/CertCard';
import { profile } from '../data/profile';

export const Certificates: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-0">
            <Section id="certificados" title="Certificados" className="bg-white dark:bg-gray-800">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {profile.certificates.map((certificate, index) => (
                        <CertCard key={index} certificate={certificate} index={index} />
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Compromiso con la Excelencia
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Estos certificados representan mi dedicación al aprendizaje continuo y mi compromiso
                        con las mejores prácticas en el desarrollo de software. Cada uno ha contribuido a
                        expandir mis habilidades y conocimientos técnicos.
                    </p>
                </motion.div>
            </Section>
        </div>
    );
};
