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
    avatar: "/portfolio_new_edition/images/me.jpg",
    about: "Soy desarrolladora frontend con más de 4 años de experiencia en aplicaciones SaaS, apasionada por crear interfaces limpias, escalables y centradas en la experiencia de usuario.",
    email: "alexadictiva@gmail.com",
    linkedin: "https://www.linkedin.com/in/libiaaperezbdev1/",
    github: "https://github.com/alexadictiva",

    skills: [
        { name: "JavaScript", category: "languages", level: "advanced" },
        { name: "HTML5", category: "frontend", level: "advanced" },
        { name: "CSS3 / SCSS", category: "frontend", level: "advanced" },
        { name: "jQuery", category: "frontend", level: "advanced" },
        { name: "Git / GitHub", category: "tools", level: "advanced" },
        { name: "Figma (Dev Mode)", category: "tools", level: "advanced" },
        { name: "React", category: "frontend", level: "beginner" },
        { name: "TypeScript", category: "languages", level: "beginner" },
        { name: "TailwindCSS", category: "frontend", level: "beginner" },
        { name: "NodeJs (básico)", category: "backend", level: "beginner" },
    ],

    education: [
        {
            degree: "Técnico en Programación y Desarrollo Web",
            institution: "Instituto Metropolitano de Altos Estudios ALPI (EMAE)",
            year: "2020-2022",
            description: "Formación técnica especializada en desarrollo web y programación"
        },
        {
            degree: "Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo",
            institution: "Platzi",
            year: "2020-2023",
            description: "Fundamentos de lógica de programación"
        },
        {
            degree: "Técnico Superior Administrativo",
            institution: "Instituto Universitario de Tecnología y Administración",
            year: "2009-2013",
            description: "Fundamentos de administración y gestión contable"
        }
    ],

    certificates: [
        {
            "name": "Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo",
            "issuer": "Platzi",
            "date": "2024",
            "link": "https://platzi.com/p/alexadictiva/curso/3221-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico sobre los Miembros de la Familia",
            "issuer": "Platzi",
            "date": "2023",
            "link": "https://platzi.com/p/alexadictiva/curso/3230-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico sobre Elementos de Trabajo",
            "issuer": "Platzi",
            "date": "2023",
            "link": "https://platzi.com/p/alexadictiva/curso/3996-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico para Principiantes - (2022)",
            "issuer": "Platzi",
            "date": "2023",
            "link": "https://platzi.com/p/alexadictiva/curso/3093-course/diploma/detalle/"
        },
        {
            "name": "Curso de Gestión de Dependencias y Paquetes con NPM",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/1763-course/diploma/detalle/"
        },
        {
            "name": "Curso de Closures y Scope en JavaScript 2020",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/1807-course/diploma/detalle/"
        },
        {
            "name": "Curso de CSS Grid Básico",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/2474-course/diploma/detalle/"
        },
        {
            "name": "Curso de Frontend Developer",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/2467-course/diploma/detalle/"
        },
        {
            "name": "Curso Práctico de Frontend Developer",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/2477-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico A1: Fechas, Horas y Expresiones Simples",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/2395-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico A1: Presente Simple y Vocabulario Común (2021)",
            "issuer": "Platzi",
            "date": "2022",
            "link": "https://platzi.com/p/alexadictiva/curso/2393-course/diploma/detalle/"
        },
        {
            "name": "Curso de Single Page Application con JavaScript Vanilla",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1787-course/diploma/detalle/"
        },
        {
            "name": "Curso Práctico de Maquetación en CSS",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1744-course/diploma/detalle/"
        },
        {
            "name": "Curso de HTML y CSS 2019",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1492-course/diploma/detalle/"
        },
        {
            "name": "Curso Práctico de JavaScript",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2327-course/diploma/detalle/"
        },
        {
            "name": "Curso Práctico de Maquetación y Animaciones con CSS",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2338-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico: Conversación 2018",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1371-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico: Gramática 2018",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1370-course/diploma/detalle/"
        },
        {
            "name": "Curso Intermedio de Gramática en Inglés (2020)",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1989-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico para Descripciones Personales (2020=",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2005-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico: Pronunciación 2020",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2002-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico: Gramática 2019",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1500-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico: Conversación 2019",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1501-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico A2: Descripciones y Comparaciones",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2196-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Práctico: Fundamentos 2019",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1499-course/diploma/detalle/"
        },
        {
            "name": "Curso de Figma - 2020",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1961-course/diploma/detalle/"
        },
        {
            "name": "Curso de Responsive Design: Maquetación Mobile First",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2030-course/diploma/detalle/"
        },
        {
            "name": "Curso de Prework: Configuración de Entorno de Desarrollo en Windows",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2042-course/diploma/detalle/"
        },
        {
            "name": "Curso Práctico de HTML y CSS",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/1758-course/diploma/detalle/"
        },
        {
            "name": "Curso Definitivo de HTML y CSS",
            "issuer": "Platzi",
            "date": "2021",
            "link": "https://platzi.com/p/alexadictiva/curso/2008-course/diploma/detalle/"
        },
        {
            "name": "Curso Profesional de Git y GitHub",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1557-course/diploma/detalle/"
        },
        {
            "name": "Curso de Asincronismo con JavaScript 2019",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1789-course/diploma/detalle/"
        },
        {
            "name": "Curso de ECMAScript 6+",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1815-course/diploma/detalle/"
        },
        {
            "name": "Fundamentos de JavaScript 2018",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1339-course/diploma/detalle/"
        },
        {
            "name": "Curso de Bootstrap 4",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1331-course/diploma/detalle/"
        },
        {
            "name": "Audiocurso de Desarrollo de Creatividad para tu Vida Profesional",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1634-course/diploma/detalle/"
        },
        {
            "name": "Curso Básico de JavaScript",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1814-course/diploma/detalle/"
        },
        {
            "name": "Curso de Frontend Developer 2019",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1640-course/diploma/detalle/"
        },
        {
            "name": "Curso de Prework: Buenas Prácticas y Entorno de Desarrollo en macOS 2019",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1650-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico: Fundamentos 2018",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1358-course/diploma/detalle/"
        },
        {
            "name": "Curso de Inglés Básico A1: Conversaciones Cortas y Habituales (2020)",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1945-course/diploma/detalle/"
        },
        {
            "name": "Curso de Estrategias para Aprender Inglés Online 2020",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1944-course/diploma/detalle/"
        },
        {
            "name": "Curso Básico de Programación",
            "issuer": "Platzi",
            "date": "2020",
            "link": "https://platzi.com/p/alexadictiva/curso/1050-course/diploma/detalle/"
        }
    ],

    projects: [
        {
            id: "appstore-facturacion",
            title: "Landing AppStore Facturación Tiendanube",
            description: "Landing informativa para la App de Facturación en Tiendanube",
            image: "/portfolio_new_edition/images/project-appstore.png",
            stack: ["HTML", "CSS", "JavaScript"],
            demoUrl: "https://www.tiendanube.com/tienda-aplicaciones-nube/ecommapp-facturacion?q=accounting",
            achievements: ["Integración con Tiendanube", "Diseño responsive", "Optimización SEO"]
        },
        {
            id: "ebook",
            title: "Ebook Landing Page",
            description: "Landing informativa para la lanzamiento de Ebook de Ecomm-App",
            image: "/portfolio_new_edition/images/ebook-landing.png",
            stack: ["HTML", "CSS", "JavaScript"],
            demoUrl: "https://www.tiendanube.com/tienda-aplicaciones-nube/ecommapp-facturacion?q=accounting",
            achievements: ["Integración con Tiendanube", "Diseño responsive", "Optimización SEO"]
        },
        {
            id: "wetrex-landing",
            title: "Landing Wetrex con Google Sheets",
            description: "Landing de pauta comercial para Wetrex con formulario conectado a Google Sheets como base de datos",
            image: "/portfolio_new_edition/images/project-wetrex.png",
            stack: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
            demoUrl: "https://ecomm-app.com/landing/wetrex.html",
            achievements: ["Integración con Google Sheets", "Formularios dinámicos", "Automatización de datos"]
        },
        {
            id: "ecommapp-website",
            title: "Website Ecomm-App",
            description: "Sitio web principal de Ecomm-App con accesos al registro y login",
            image: "/portfolio_new_edition/images/project-ecommapp.png",
            stack: ["HTML", "CSS", "JavaScript"],
            demoUrl: "https://ecomm-app.com/landing/landing.html",
            achievements: ["Sistema de autenticación", "Diseño corporativo", "Navegación intuitiva"]
        },
        {
            id: "gigena-landing",
            title: "Gigena Landing Project",
            description: "Landing Page para la empresa Gigena",
            image: "/portfolio_new_edition/images/gigena-landing-project.png",
            stack: ["JavaScript", "Twig", "Scss"],
            demoUrl: "https://alexadictiva.github.io/gigenaLandingProject/",
            achievements: ["Diseño moderno", "Optimización de rendimiento", "Experiencia de usuario mejorada"]
        },
        {
            id: "12-apostles",
            title: "The 12 Apostles",
            description: "Website para la empresa The 12 Apostles",
            image: "/portfolio_new_edition/images/12-apostles-project.png",
            stack: ["HTML", "JavaScript", "Scss"],
            demoUrl: "https://alexadictiva.github.io/gigenaLandingProject/",
            achievements: ["Diseño moderno", "Optimización de rendimiento", "Experiencia de usuario mejorada"]
        },
        {
            id: "coffee-app",
            title: "Coffe App",
            description: "Proyecto personal de PWA sobre una aplicación de café para practicar mis habilidades en JavaScript, HTML y CSS",
            image: "/portfolio_new_edition/images/coffe-app-practice.png",
            stack: ["JavaScript", "Vue", "Bootstrap"],
            demoUrl: "https://coffeepwa-dd8f1.web.app/",
            repoUrl: "https://github.com/alexadictiva/coffeeapp",
            achievements: ["PWA certificada", "Offline functionality", "Interfaz intuitiva"]
        },
        {
            id: "todo-list",
            title: "To Do List",
            description: "Proyecto personal de To Do List para practicar mis habilidades en JavaScript, HTML y CSS",
            image: "/portfolio_new_edition/images/todo-list-practice.png",
            stack: ["JavaScript", "Vue", "HTML", "Bootstrap"],
            demoUrl: "https://alexadictiva.github.io/todolistvue/",
            repoUrl: "https://github.com/alexadictiva/todolistvue",
            achievements: ["Gestión de estado", "CRUD completo", "Diseño responsive"]
        }
    ]
};

