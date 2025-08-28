import { motion } from 'framer-motion';
import { Skill } from '../data/profile';

interface SkillBadgeProps {
    skill: Skill;
    index: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
    const levelColors = {
        beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        advanced: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
        expert: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    };

    const categoryColors = {
        frontend: 'border-blue-500/20 bg-blue-50 dark:bg-blue-950/20',
        backend: 'border-green-500/20 bg-green-50 dark:bg-green-950/20',
        tools: 'border-purple-500/20 bg-purple-50 dark:bg-purple-950/20',
        languages: 'border-orange-500/20 bg-orange-50 dark:bg-orange-950/20'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className={`relative p-4 rounded-lg border-2 ${categoryColors[skill.category]} transition-all duration-200`}
        >
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                </h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${levelColors[skill.level]}`}>
                    {skill.level}
                </span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${getLevelPercentage(skill.level)}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className="h-2 bg-accent rounded-full"
                />
            </div>

            <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 capitalize">
                {skill.category}
            </div>
        </motion.div>
    );
};

const getLevelPercentage = (level: Skill['level']): number => {
    switch (level) {
        case 'beginner': return 25;
        case 'intermediate': return 50;
        case 'advanced': return 75;
        case 'expert': return 100;
        default: return 0;
    }
};
