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
} from "../assets/icons";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
    percentage: "50%"
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
    percentage: "40%"
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
    percentage: "60%"
  },
  {
    imageUrl: rxjs,
    name: "RxJS",
    type: "Reactive Programming",
    percentage: "50%"
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
    percentage: "80%"
  },
  {
    imageUrl: springboot,
    name: "Spring Boot",
    type: "Backend",
    percentage: "70%"
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
    percentage: "50%"
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
    percentage: "50%"
  },
  {
    imageUrl: symfony,
    name: "Symfony",
    type: "Backend",
    percentage: "80%"
  },
  {
    imageUrl: laravel,
    name: "Laravel",
    type: "Backend",
    percentage: "80%"
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    percentage: "80%"
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
    percentage: "80%"
  },
  {
    imageUrl: webpack,
    name: "Webpack",
    type: "Tooling",
    percentage: "80%"
  },
  {
    imageUrl: jest,
    name: "Jest",
    type: "Testing",
    percentage: "80%"
  },
  {
    imageUrl: junit,
    name: "JUnit",
    type: "Testing",
    percentage: "80%"
  },
  {
    imageUrl: jenkins,
    name: "Jenkins",
    type: "Database",
    percentage: "80%"
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
    percentage: "80%"
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
    percentage: "80%"
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    percentage: "80%"
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
];

export const projects = [
  {
    iconUrl: unicauca,
    theme: "btn-back-red",
    name: "Sitio web de comercio electrónico.",
    skills:
      "PHP, Symfony, JavaScript, JWT, bcrypt, APIs, Git, Nginx, Docker",
    description:
      "Sitio web de comercio electrónico desarrollado en PHP con Symfony Framework, implementa las características principales de este tipo de servicios, como: Carrito de compras, Proceso de compra, Gestión de usuarios, Gestión de inventarios, Administración de contenido, Seguridad, etc.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: unicauca,
    theme: "btn-back-red",
    name: "Sitio web de comercio electrónico.",
    skills: "PHP, Symfony, JavaScript, JWT, bcrypt, APIs, Git, Nginx, Docker",
    description:
      "Sitio web de comercio electrónico desarrollado en PHP con Symfony Framework, implementa las características principales de este tipo de servicios, como: Carrito de compras, Proceso de compra, Gestión de usuarios, Gestión de inventarios, Administración de contenido, Seguridad, etc.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
];
