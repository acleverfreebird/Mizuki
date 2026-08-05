// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string; // Iconify icon name
  category: "frontend" | "backend" | "tools" | "other";
  level: "beginner" | "intermediate" | "advanced" | "expert";
  experience: {
    years: number;
    months: number;
  };
  projects?: string[]; // Related project IDs
  certifications?: string[];
  color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
  // Frontend Skills
  {
    id: "javascript",
    name: "JavaScript",
    description:
      "Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.",
    icon: "logos:javascript",
    category: "frontend",
    level: "advanced",
    experience: { years: 3, months: 6 },
    projects: ["mizuki-blog", "portfolio-website", "data-visualization-tool"],
    color: "#F7DF1E",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "A type-safe superset of JavaScript that enhances code quality and development efficiency.",
    icon: "logos:typescript-icon",
    category: "frontend",
    level: "advanced",
    experience: { years: 2, months: 8 },
    projects: ["mizuki-blog", "portfolio-website", "task-manager-app"],
    color: "#3178C6",
  },
  {
    id: "react",
    name: "React",
    description:
      "A JavaScript library for building user interfaces, including Hooks, Context, and state management.",
    icon: "logos:react",
    category: "frontend",
    level: "advanced",
    experience: { years: 2, months: 10 },
    projects: ["portfolio-website", "task-manager-app"],
    color: "#61DAFB",
  },
  {
    id: "vue",
    name: "Vue.js",
    description:
      "A progressive JavaScript framework that is easy to learn and use, suitable for rapid development.",
    icon: "logos:vue",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 8 },
    projects: ["data-visualization-tool"],
    color: "#4FC08D",
  },
  {
    id: "angular",
    name: "Angular",
    description:
      "An enterprise-level frontend framework developed by Google, a complete single-page application solution.",
    icon: "logos:angular-icon",
    category: "frontend",
    level: "beginner",
    experience: { years: 0, months: 9 },
    projects: ["enterprise-dashboard"],
    color: "#DD0031",
  },
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "A production-level React framework supporting SSR, SSG, and full-stack development.",
    icon: "logos:nextjs-icon",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 4 },
    projects: ["e-commerce-frontend", "blog-platform"],
    color: "#616161", // 更改为深灰色，避免纯黑色
  },
  {
    id: "nuxtjs",
    name: "Nuxt.js",
    description:
      "An intuitive Vue.js framework supporting server-side rendering and static site generation.",
    icon: "logos:nuxt-icon",
    category: "frontend",
    level: "beginner",
    experience: { years: 0, months: 6 },
    projects: ["vue-ssr-app"],
    color: "#00DC82",
  },
  {
    id: "astro",
    name: "Astro",
    description:
      "A modern static site generator supporting multi-framework integration and excellent performance.",
    icon: "logos:astro-icon",
    category: "frontend",
    level: "advanced",
    experience: { years: 1, months: 2 },
    projects: ["mizuki-blog"],
    color: "#FF5D01",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building modern user interfaces.",
    icon: "logos:tailwindcss-icon",
    category: "frontend",
    level: "advanced",
    experience: { years: 2, months: 0 },
    projects: ["mizuki-blog", "portfolio-website"],
    color: "#06B6D4",
  },
  {
    id: "sass",
    name: "Sass/SCSS",
    description:
      "A CSS preprocessor providing advanced features like variables, nesting, and mixins.",
    icon: "logos:sass",
    category: "frontend",
    level: "intermediate",
    experience: { years: 2, months: 3 },
    projects: ["legacy-website", "component-library"],
    color: "#CF649A",
  },
  {
    id: "webpack",
    name: "Webpack",
    description: "A static module bundler for modern JavaScript applications.",
    icon: "logos:webpack",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 10 },
    projects: ["custom-build-tool", "spa-application"],
    color: "#8DD6F9",
  },
  {
    id: "vite",
    name: "Vite",
    description:
      "Next-generation frontend build tool with fast cold starts and hot updates.",
    icon: "logos:vitejs",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 2 },
    projects: ["vue-project", "react-project"],
    color: "#646CFF",
  },

  // Backend Skills
  {
    id: "nodejs",
    name: "Node.js",
    description:
      "A JavaScript runtime based on Chrome V8 engine, used for server-side development.",
    icon: "logos:nodejs-icon",
    category: "backend",
    level: "intermediate",
    experience: { years: 2, months: 3 },
    projects: ["data-visualization-tool", "e-commerce-platform"],
    color: "#339933",
  },
  {
    id: "python",
    name: "Python",
    description:
      "A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
    icon: "logos:python",
    category: "backend",
    level: "intermediate",
    experience: { years: 2, months: 10 },
    color: "#3776AB",
  },
  {
    id: "cpp",
    name: "C++",
    description:
      "A high-performance systems programming language widely used in game development, system software, and embedded development.",
    icon: "logos:c-plusplus",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 4 },
    projects: ["game-engine", "system-optimization"],
    color: "#00599C",
  },
  {
    id: "c",
    name: "C",
    description:
      "A low-level systems programming language, the foundation for operating systems and embedded systems development.",
    icon: "logos:c",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 2 },
    projects: ["embedded-system", "kernel-module"],
    color: "#A8B9CC",
  },

  // Tools
  {
    id: "git",
    name: "Git",
    description:
      "A distributed version control system, an essential tool for code management and team collaboration.",
    icon: "logos:git-icon",
    category: "tools",
    level: "advanced",
    experience: { years: 3, months: 0 },
    color: "#F05032",
  },
  {
    id: "vscode",
    name: "VS Code",
    description:
      "A lightweight but powerful code editor with a rich plugin ecosystem.",
    icon: "logos:visual-studio-code",
    category: "tools",
    level: "expert",
    experience: { years: 3, months: 6 },
    color: "#007ACC",
  },
  {
    id: "docker",
    name: "Docker",
    description:
      "A containerization platform that simplifies application deployment and environment management.",
    icon: "logos:docker-icon",
    category: "tools",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    color: "#2496ED",
  },
  {
    id: "nginx",
    name: "Nginx",
    description: "A high-performance web server and reverse proxy server.",
    icon: "logos:nginx",
    category: "tools",
    level: "intermediate",
    experience: { years: 1, months: 2 },
    projects: ["web-server-config", "load-balancer"],
    color: "#009639",
  },
  {
    id: "openresty",
    name: "OpenResty",
    description:
      "A high-performance web platform based on Nginx and LuaJIT, supporting dynamic web application development.",
    icon: "simple-icons:nginx",
    category: "tools",
    level: "beginner",
    experience: { years: 0, months: 8 },
    projects: ["api-gateway", "dynamic-routing"],
    color: "#00A693",
  },
  {
    id: "linux",
    name: "Linux",
    description:
      "An open-source operating system, the preferred choice for server deployment and development environments.",
    icon: "logos:linux-tux",
    category: "tools",
    level: "intermediate",
    experience: { years: 2, months: 0 },
    projects: ["server-management", "shell-scripting"],
    color: "#FCC624",
  },
  {
    id: "postman",
    name: "Postman",
    description:
      "An API development and testing tool that simplifies API design, testing, and documentation.",
    icon: "logos:postman-icon",
    category: "tools",
    level: "intermediate",
    experience: { years: 1, months: 8 },
    projects: ["api-testing", "api-documentation"],
    color: "#FF6C37",
  },
  {
    id: "figma",
    name: "Figma",
    description:
      "A collaborative interface design tool for UI/UX design and prototyping.",
    icon: "logos:figma",
    category: "tools",
    level: "intermediate",
    experience: { years: 1, months: 6 },
    color: "#F24E1E",
  },
  {
    id: "photoshop",
    name: "Photoshop",
    description: "Professional image editing and design software.",
    icon: "logos:adobe-photoshop",
    category: "tools",
    level: "intermediate",
    experience: { years: 2, months: 6 },
    projects: ["ui-design", "image-processing"],
    color: "#31A8FF",
  },

  // Other Skills
  {
    id: "graphql",
    name: "GraphQL",
    description:
      "An API query language and runtime providing a more efficient, powerful, and flexible way to fetch data.",
    icon: "logos:graphql",
    category: "other",
    level: "beginner",
    experience: { years: 0, months: 6 },
    projects: ["modern-api"],
    color: "#E10098",
  },
  {
    id: "elasticsearch",
    name: "Elasticsearch",
    description:
      "A distributed search and analytics engine used for full-text search and data analysis.",
    icon: "logos:elasticsearch",
    category: "other",
    level: "beginner",
    experience: { years: 0, months: 4 },
    projects: ["search-system"],
    color: "#005571",
  },
  {
    id: "jest",
    name: "Jest",
    description:
      "A JavaScript testing framework focused on simplicity and ease of use.",
    icon: "logos:jest",
    category: "other",
    level: "intermediate",
    experience: { years: 1, months: 2 },
    projects: ["unit-testing", "integration-testing"],
    color: "#C21325",
  },
  {
    id: "cypress",
    name: "Cypress",
    description: "A modern end-to-end testing framework for web applications.",
    icon: "logos:cypress-icon",
    category: "other",
    level: "beginner",
    experience: { years: 0, months: 8 },
    projects: ["e2e-testing"],
    color: "#17202C",
  },
];
