export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'languages';
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
    description?: string;
}

export interface Certificate {
    name: string;
    issuer: string;
    date: string;
    link?: string;
    image?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    stack: string[];
    demoUrl?: string;
    repoUrl?: string;
    achievements: string[];
}

export interface Profile {
    name: string;
    role: string;
    avatar: string;
    about: string;
    email: string;
    linkedin: string;
    github: string;
    skills: Skill[];
    education: Education[];
    certificates: Certificate[];
    projects: Project[];
}

export const profile: Profile = {
    name: "L. Alexandra Pérez",
    role: "Frontend Developer",
    avatar: "/images/me.jpg",
    about: "Soy desarrolladora frontend con más de 4 años de experiencia en aplicaciones SaaS, apasionada por crear interfaces limpias, escalables y centradas en la experiencia de usuario.",
    email: "alexadictiva@gmail.com",
    linkedin: "https://www.linkedin.com/in/libiaaperezbdev1/",
    github: "https://github.com/alexadictiva",

    skills: [
        { name: "JavaScript", category: "languages", level: "expert" },
        { name: "HTML5", category: "frontend", level: "expert" },
        { name: "CSS3 / SCSS", category: "frontend", level: "expert" },
        { name: "jQuery", category: "frontend", level: "advanced" },
        { name: "Git / GitHub", category: "tools", level: "advanced" },
        { name: "Figma (Dev Mode)", category: "tools", level: "advanced" },
        { name: "React", category: "frontend", level: "intermediate" },
        { name: "TypeScript", category: "languages", level: "beginner" },
        { name: "TailwindCSS", category: "frontend", level: "intermediate" },
        { name: "Node.js (básico)", category: "backend", level: "beginner" },
    ],

    education: [
        {
            degree: "Técnico en Desarrollo Web",
            institution: "Instituto Metropolitano de Altos Estudios ALPI",
            year: "2020-2022",
            description: "Formación técnica especializada en desarrollo web"
        },
        {
            degree: "Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo",
            institution: "Platzi",
            year: "2020-2023",
            description: "Fundamentos de lógica de programación"
        },
        {
            degree: "Curso de Frontend Developer",
            institution: "Platzi",
            year: "2022",
            description: "Desarrollo frontend moderno"
        }
    ],

    certificates: [
        {
            name: "Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo",
            issuer: "Platzi",
            date: "2023",
            link: "https://platzi.com/p/alexadictiva/curso/3221-course/diploma/detalle/"
        },
        {
            name: "Curso de Closure y Scope en JavaScript",
            issuer: "Platzi",
            date: "2022",
            link: "https://platzi.com/p/alexadictiva/curso/1807-course/diploma/detalle/"
        },
        {
            name: "Curso de Grid Básico",
            issuer: "Platzi",
            date: "2022",
            link: "https://platzi.com/p/tu-usuario/curso/9012-certificado/"
        },
        {
            name: "Curso de Bootstrap 4",
            issuer: "Platzi",
            date: "2020",
            link: "https://platzi.com/p/alexadictiva/curso/1331-course/diploma/detalle/"
        },
        {
            name: "Técnico en Desarrollo Web",
            issuer: "Instituto Metropolitano de Altos Estudios ALPI",
            date: "2022",
            link: "En Físico"
        }
    ],

    projects: [
        {
            id: "appstore-facturacion",
            title: "Landing AppStore Facturación Tiendanube",
            description: "Landing informativa para la App de Facturación en Tiendanube",
            image: "/images/project-appstore.jpg",
            stack: ["HTML", "CSS", "JavaScript"],
            demoUrl: "https://www.tiendanube.com/tienda-aplicaciones-nube/ecommapp-facturacion?q=accounting",
            achievements: ["Integración con Tiendanube", "Diseño responsive", "Optimización SEO"]
        },
        {
            id: "wetrex-landing",
            title: "Landing Wetrex con Google Sheets",
            description: "Landing de pauta comercial para Wetrex con formulario conectado a Google Sheets como base de datos",
            image: "/images/project-wetrex.jpg",
            stack: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
            demoUrl: "https://ecomm-app.com/landing/wetrex.html",
            achievements: ["Integración con Google Sheets", "Formularios dinámicos", "Automatización de datos"]
        },
        {
            id: "ecommapp-website",
            title: "Website Ecomm-App",
            description: "Sitio web principal de Ecomm-App con accesos al registro y login",
            image: "/images/project-ecommapp.jpg",
            stack: ["HTML", "CSS", "JavaScript"],
            demoUrl: "https://ecomm-app.com/landing/landing.html",
            achievements: ["Sistema de autenticación", "Diseño corporativo", "Navegación intuitiva"]
        },
        {
            id: "gigena-landing",
            title: "Gigena Landing Project",
            description: "Landing Page para la empresa Gigena",
            image: "/images/project2.jpg",
            stack: ["JavaScript", "Twig", "Scss"],
            demoUrl: "https://alexadictiva.github.io/gigenaLandingProject/",
            achievements: ["Diseño moderno", "Optimización de rendimiento", "Experiencia de usuario mejorada"]
        },
        {
            id: "coffee-app",
            title: "Coffe App",
            description: "Proyecto personal de PWA sobre una aplicación de café para practicar mis habilidades en JavaScript, HTML y CSS",
            image: "/images/project2.jpg",
            stack: ["JavaScript", "Vue", "Bootstrap"],
            demoUrl: "https://coffeepwa-dd8f1.web.app/",
            repoUrl: "https://github.com/alexadictiva/coffeeapp",
            achievements: ["PWA certificada", "Offline functionality", "Interfaz intuitiva"]
        },
        {
            id: "todo-list",
            title: "To Do List",
            description: "Proyecto personal de To Do List para practicar mis habilidades en JavaScript, HTML y CSS",
            image: "/images/project2.jpg",
            stack: ["JavaScript", "Vue", "HTML", "Bootstrap"],
            demoUrl: "https://alexadictiva.github.io/todolistvue/",
            repoUrl: "https://github.com/alexadictiva/todolistvue",
            achievements: ["Gestión de estado", "CRUD completo", "Diseño responsive"]
        }
    ]
};

