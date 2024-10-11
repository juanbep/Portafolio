import {
  git,
  javascript,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  unicauca,
  angular,
  java,
  php,
  python,
  rxjs,
  webpack,
  mongodb,
  springboot,
  mysql,
  postgresql,
  docker,
  jest,
  junit,
  jenkins,
  oracle,
  laravel,
  symfony,
  rocket,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
    percentage: "50%",
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
    percentage: "50%",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
    percentage: "50%",
  },
  {
    imageUrl: rxjs,
    name: "RxJS",
    type: "Reactive Programming",
    percentage: "50%",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
    percentage: "60%",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind",
    type: "Frontend",
    percentage: "60%",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    percentage: "60%",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
    percentage: "80%",
  },
  {
    imageUrl: springboot,
    name: "Spring Boot",
    type: "Backend",
    percentage: "50%",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
    percentage: "50%",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
    percentage: "60%",
  },
  {
    imageUrl: symfony,
    name: "Symfony",
    type: "Backend",
    percentage: "50%",
  },
  {
    imageUrl: laravel,
    name: "Laravel",
    type: "Backend",
    percentage: "30%",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    percentage: "50%",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "rocketOps",
    percentage: "30%",
  },
  {
    imageUrl: webpack,
    name: "Webpack",
    type: "Tooling",
    percentage: "50%",
  },
  {
    imageUrl: jest,
    name: "Jest",
    type: "Testing",
    percentage: "30%",
  },
  {
    imageUrl: junit,
    name: "JUnit",
    type: "Testing",
    percentage: "30%",
  },
  {
    imageUrl: jenkins,
    name: "Jenkins",
    type: "Database",
    percentage: "30%",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
    percentage: "60%",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
    percentage: "60%",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    percentage: "40%",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Tooling",
    percentage: "70%",
  },
];

export const experiences = [
  {
    title: "Monitor Administrativo FCHS",
    company_name: "Universidad del Cauca",
    icon: unicauca,
    iconBg: "#accbe1",
    date: "feb. 2024 - jun. 2024",
    points: [
      `
      Ejercí como Monitor Administrativo de la Sala de Sistemas de la Facultad de Ciencias Humanas y Sociales de la Universidad del Cauca, fui responsable de la actualización y el mantenimiento de los equipos informáticos, la gestión del inventario, y la provisión de soporte técnico a profesores y estudiantes en el área de informática.
      Esta experiencia no solo me permitió desarrollar habilidades técnicas, sino también fortalecer mis competencias interpersonales y comunicativas.`,
    ],
  },
  {
    title: "Renovación de la Acreditación y la Certificación Institucional",
    company_name: "Universidad del Cauca",
    icon: unicauca,
    iconBg: "#fbc3bc",
    date: "oct. 2023 - dic. 2023",
    points: [
      `
      Como monitor administrativo en la Universidad del Cauca, participé en el proceso de renovación de la Acreditación y Certificación Institucional del programa de Licenciatura en Etnoeducación.
      Entre mis principales responsabilidades se encontraba la creación y gestión de bases de datos de egresados, el diseño y aplicación de encuestas, así como la elaboración de reportes estadísticos mediante representaciones gráficas. 
      Esta experiencia fue clave para fortalecer mis habilidades técnicas, analíticas y de gestión de la información.`,
    ],
  },
  {
    title: "Monitor Administrativo FCS",
    company_name: "Universidad del Cauca",
    icon: unicauca,
    iconBg: "#b7e4c7",
    date: "mar. 2023 - jun. 2023",
    points: [
      ` 
      Como Monitor Administrativo de la Sala de Sistemas de la Facultad de Ciencias de la Salud de la Universidad del Cauca, fui responsable de la actualización y el mantenimiento de los equipos informáticos, la gestión del inventario, y la provisión de soporte técnico a profesores y estudiantes en el área de informática.
      Esta experiencia no solo me permitió desarrollar habilidades técnicas, sino también fortalecer mis competencias interpersonales y comunicativas.`,
    ],
  },
  {
    title: "Desarrollador Freelance",
    company_name: "Autónomo",
    icon: rocket,
    iconBg: "#f0f4f8",
    date: "ene. 2023 - presente",
    points: [
      ` 
      Como desarrollador freelance, he trabajado en una variedad de proyectos que incluyen el desarrollo de aplicaciones web tanto en Front-End como en Back-End. Mi trabajo ha abarcado la creación de interfaces intuitivas y funcionales, así como la implementación de buenas prácticas de programación y arquitecturas de software. 
      Esta experiencia me ha permitido adquirir habilidades técnicas amplias y adaptativas, así como desarrollar capacidades para gestionar proyectos de manera independiente y colaborar con clientes para cumplir con sus requisitos y expectativas.`,
    ],
  },
];

export const projects = [
  {
    iconUrl: unicauca,
    theme: "btn-back-red",
    name: "Sitio web de comercio electrónico.",
    skills:
      "#PHP, #Symfony, #JavaScript, #JWT, #bcrypt, #APIs, #Git, #Nginx, #Docker",
    description:
      "Sitio web de comercio electrónico desarrollado en PHP con Symfony Framework, implementa las características principales de este tipo de servicios, como: Carrito de compras, Proceso de compra, Gestión de usuarios, Gestión de inventarios, Administración de contenido, Seguridad, etc.",
    link: "https://github.com/juanbep",
  },
  {
    iconUrl: unicauca,
    theme: "btn-back-red",
    name: "Sistema de Reservas para Instalaciones Deportivas Universitarias.",
    skills:
      "#Java 11, #Spring Boot, #Angular 13, #Docker, #JUnit 5, #Mockito, #MySQL, #Google Maps API.",
    description:
      "Participé en el desarrollo de una aplicación web para la gestión de reservas de las instalaciones deportivas de la Universidad del Cauca. La aplicación debe permitir a los usuarios reservar espacios deportivos, consultar disponibilidad, y gestionar sus reservas de manera eficiente.",
    link: "https://github.com/juanbep",
  },
  {
    iconUrl: unicauca,
    theme: "btn-back-red",
    name: "Sistema de Administración de Inventarios y Usuarios en JavaFX.",
    skills: "#Java 8, #JavaFX, #PostgreSQL, #JPA, #JUnit",
    description:
      "Sitio web de comercio electrónico desarrollado en PHP con Symfony Framework, implementa las características principales de este tipo de servicios, como: Carrito de compras, Proceso de compra, Gestión de usuarios, Gestión de inventarios, Administración de contenido, Seguridad, etc.",
    link: "https://github.com/juanbep",
  },
  {
    iconUrl: unicauca,
    theme: "btn-back-red",
    name: "Gastronomía sostenible: Estrategias para Minimizar el Desperdicio de Alimentos en el sector gastronómico.",
    skills: "#Python, #Pandas, #NumPy, #Matplotlib",
    description:
      "Participé en el desarrollo de un sistema de análisis de datos que utiliza un conjunto de técnicas de nivel intermedio aprendidas en el bootcamp del programa del ministerio de las TIC Talento Tech. El objetivo de este proyecto es poder estimar la demanda de alimentos en establecimientos del sector gastronómico. Funciona recopilando y analizando datos históricos y actuales, incluyendo patrones de consumo, eventos especiales, condiciones climáticas, tendencias del mercado, etc.",
    link: "https://github.com/juanbep",
  },
];
