import { motion } from 'framer-motion';

interface AvatarProps {
    src: string;
    alt: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    size = 'md',
    className = ''
}) => {
    const sizeClasses = {
        sm: 'w-16 h-16',
        md: 'w-24 h-24',
        lg: 'w-32 h-32',
        xl: 'w-40 h-40'
    };

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`relative ${sizeClasses[size]} ${className}`}
        >
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-accent/20 dark:ring-accent/30">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        // Fallback a un avatar placeholder si la imagen no carga
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0QxRjVGRiIvPgo8cGF0aCBkPSJNNDAgMTYwQzQwIDEzNS4yIDYwIDEyMCAxMDAgMTIwQzE0MCAxMjAgMTYwIDEzNS4yIDE2MCAxNjBIMTQwQzE0MCAxNDQuOCAxMjUgMTQwIDEwMCAxNDBDNzUgMTQwIDYwIDE0NC44IDYwIDE2MEg0MFoiIGZpbGw9IiNEMUY1RkYiLz4KPC9zdmc+';
                    }}
                />
            </div>

            {/* Decorative elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-20"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full opacity-30"
            />
        </motion.div>
    );
};
