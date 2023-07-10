import {
  GET_ALL_SUPPLIERS,
  GET_CATEGORIES,
  FILTER_BY_CATEGORY,
  SEARCH_PROFESSIONALS,
  FILTER_BY_GENRES,
  ORDER_BY_RATING,
} from "../actionsTypes/actionsType";

const initialState = {
  //este estado es solo una prueba para iniciar redux, puede modificarse cuando se desee los amu <3
  suppliers: [],
  backup: [],
  categories: [],
  filteredCategories: [],
  suppliers2: [],
  filteredSuppliers: [],
  professionals:[],

  profesiones: [
    { id: 1, name: "Programador" },
    { id: 2, name: "Diseñador web" },
    { id: 3, name: "Especialista en SEO" },
    { id: 4, name: "Ingeniero de software" },
    { id: 5, name: "Analista de datos" },
    { id: 6, name: "Desarrollador de aplicaciones móviles" },
    { id: 7, name: "Administrador de sistemas" },
    { id: 8, name: "Ingeniero de redes" },
    { id: 9, name: "Experto en ciberseguridad" },
    { id: 10, name: "Especialista en inteligencia artificial" },
    { id: 11, name: "Diseñador gráfico" },
    { id: 12, name: "Ilustrador" },
    { id: 13, name: "Fotógrafo" },
    { id: 14, name: "Animador 3D" },
    { id: 15, name: "Diseñador de moda" },
    { id: 16, name: "Artista digital" },
    { id: 17, name: "Escenógrafo" },
    { id: 18, name: "Maquetista" },
    { id: 19, name: "Diseñador de interiores" },
    { id: 20, name: "Diseñador de logotipos" },
    { id: 21, name: "Consultor de marketing" },
    { id: 22, name: "Consultor financiero" },
    { id: 23, name: "Consultor de recursos humanos" },
    { id: 24, name: "Consultor de negocios" },
    { id: 25, name: "Consultor de estrategia" },
    { id: 26, name: "Consultor de ventas" },
    { id: 27, name: "Consultor de gestión" },
    { id: 28, name: "Consultor de calidad" },
    { id: 29, name: "Consultor de logística" },
    { id: 30, name: "Consultor de transformación digital" },
    { id: 31, name: "Asistente virtual" },
    { id: 32, name: "Redactor de contenido" },
    { id: 33, name: "Traductor" },
    { id: 34, name: "Community Manager" },
    { id: 35, name: "Nutricionista" },
    { id: 36, name: "Entrenador personal" },
    { id: 37, name: "Terapeuta" },
    { id: 38, name: "Consejero financiero" },
    { id: 39, name: "Gestor de redes sociales" },
    { id: 40, name: "Especialista en marketing digital" },
    { id: 41, name: "Pastelero" },
    { id: 42, name: "Ceramista" },
    { id: 43, name: "Sastrería" },
    { id: 44, name: "Joyería artesanal" },
    { id: 45, name: "Escultor" },
    { id: 46, name: "Bisutería" },
    { id: 47, name: "Elaboración de velas" },
    { id: 48, name: "Arreglos florales" },
    { id: 49, name: "Decorador de eventos" },
    { id: 50, name: "Origamista" },
  ],
  clientPosts: [
    {
      id: 1,
      title: "Diseño de logotipo",
      image: "http://placeimg.com/640/480/business",
      content:
        "Estoy buscando un diseñador gráfico para crear un logotipo moderno y creativo para mi nueva empresa. Necesito que el logotipo refleje la identidad de mi marca y transmita profesionalismo. Por favor, envíen ejemplos de trabajos anteriores. ¡Espero sus propuestas!",
    },
    {
      id: 2,
      title: "Desarrollo de sitio web",
      image: "http://placeimg.com/640/480/tech",
      content:
        "Necesito un desarrollador web experimentado para crear un sitio web para mi negocio. El sitio debe ser atractivo, fácil de navegar y compatible con dispositivos móviles. También necesito un sistema de gestión de contenido para poder actualizar el contenido de manera fácil. Por favor, envíen su portafolio y presupuesto.",
    },
    {
      id: 3,
      title: "Redacción de contenido",
      image: "http://placeimg.com/640/480/writing",
      content:
        "Busco un redactor creativo y con experiencia para generar contenido original y atractivo para mi blog. Necesito artículos de calidad sobre temas relacionados con mi industria. Si tienes experiencia en SEO y palabras clave, sería un plus. Por favor, envíen ejemplos de artículos previos y su tarifa por palabra.",
    },
    {
      id: 4,
      title: "Fotografía de producto",
      image: "http://placeimg.com/640/480/photography",
      content:
        "Estoy buscando un fotógrafo profesional para tomar fotografías de alta calidad de mis productos. Necesito imágenes atractivas que resalten las características de mis productos y sean ideales para uso en catálogos y sitios web. Por favor, envíen ejemplos de trabajos previos y su disponibilidad.",
    },
    {
      id: 5,
      title: "Optimización de SEO",
      image: "http://placeimg.com/640/480/seo",
      content:
        "Necesito mejorar el posicionamiento de mi sitio web en los motores de búsqueda. Busco un especialista en SEO que pueda realizar una auditoría de mi sitio, optimizar palabras clave, mejorar la estructura de enlaces y aplicar estrategias de SEO on-page y off-page. Por favor, envíen su experiencia y presupuesto.",
    },
    {
      id: 6,
      title: "Marketing en redes sociales",
      image: "http://placeimg.com/640/480/social-media",
      content:
        "Busco un experto en marketing en redes sociales que pueda ayudarme a aumentar mi presencia en plataformas como Facebook, Instagram y Twitter. Necesito estrategias efectivas para aumentar seguidores, generar engagement y promover mis productos. Por favor, envíen ejemplos de campañas exitosas y su plan de trabajo.",
    },
    {
      id: 7,
      title: "Traducción de documentos",
      image: "http://placeimg.com/640/480/translation",
      content:
        "Estoy buscando un traductor profesional para traducir documentos de inglés a español. Los documentos son de naturaleza técnica y necesito una traducción precisa y de calidad. Por favor, envíen su experiencia en traducción y su tarifa por palabra o por página.",
    },
    {
      id: 8,
      title: "Edición de video",
      image: "http://placeimg.com/640/480/video-editing",
      content:
        "Necesito un editor de video que pueda editar material de grabaciones y crear videos promocionales de alta calidad. Busco efectos visuales atractivos, transiciones suaves y una narrativa convincente. Por favor, envíen ejemplos de trabajos anteriores y su tarifa por proyecto o por hora.",
    },
    {
      id: 9,
      title: "Consultoría de negocios",
      image: "http://placeimg.com/640/480/business-consulting",
      content:
        "Busco un consultor de negocios experimentado que pueda ayudarme a mejorar la eficiencia y rentabilidad de mi empresa. Necesito asesoramiento en áreas como estrategia empresarial, marketing, operaciones y finanzas. Por favor, envíen su experiencia y describan cómo pueden ayudar a mi negocio.",
    },
    {
      id: 10,
      title: "Diseño de folletos",
      image: "http://placeimg.com/640/480/print-design",
      content:
        "Estoy buscando un diseñador gráfico que pueda crear folletos atractivos y profesionales para promocionar mi negocio. Necesito un diseño creativo que capture la atención de los clientes potenciales y transmita la información de manera clara. Por favor, envíen ejemplos de diseños anteriores y su tarifa por proyecto.",
    },
  ],
  postprovider: [
    {
      id: 1,
      title: "Programador Web Freelance",
      content:
        "Ofrezco servicios de desarrollo web freelance. Experiencia en HTML, CSS, JavaScript y frameworks populares como React y Vue.js.",
      image: "http://placeimg.com/640/480/tech",
    },
    {
      id: 2,
      title: "Diseñador Gráfico Freelance",
      content:
        "Especializado en diseño gráfico, ofrezco servicios de creación de logotipos, banners, tarjetas de presentación y más. ¡Contáctame para discutir tu proyecto!",
      image: "http://placeimg.com/640/480/design",
    },
    {
      id: 3,
      title: "Traductor Freelance",
      content:
        "Servicios de traducción en varios idiomas. Traducción de documentos, sitios web y contenido multimedia. Precisión y calidad garantizadas.",
      image: "http://placeimg.com/640/480/translation",
    },
    {
      id: 4,
      title: "Redactor de Contenidos Freelance",
      content:
        "Experiencia en redacción de artículos, blogs, descripciones de productos y más. Ofrezco contenido de calidad adaptado a tus necesidades.",
      image: "http://placeimg.com/640/480/writing",
    },
    {
      id: 5,
      title: "Experto en Marketing Digital Freelance",
      content:
        "Servicios de marketing digital para aumentar la visibilidad y el alcance de tu negocio. Estrategias de SEO, gestión de redes sociales y publicidad en línea.",
      image: "http://placeimg.com/640/480/marketing",
    },
    {
      id: 6,
      title: "Fotógrafo Freelance",
      content:
        "Capturo momentos especiales y creando recuerdos duraderos. Sesiones fotográficas para bodas, eventos, retratos y más.",
      image: "http://placeimg.com/640/480/photography",
    },
    {
      id: 7,
      title: "Asistente Virtual Freelance",
      content:
        "Asistencia administrativa y organizativa en línea. Manejo de correos electrónicos, gestión de calendarios y tareas administrativas.",
      image: "http://placeimg.com/640/480/virtualassistant",
    },
    {
      id: 8,
      title: "Consultor de Negocios Freelance",
      content:
        "Análisis y asesoramiento empresarial para optimizar procesos, aumentar la eficiencia y mejorar la rentabilidad. Consultoría personalizada para tu negocio.",
      image: "http://placeimg.com/640/480/business",
    },
    {
      id: 9,
      title: "Contador Freelance",
      content:
        "Servicios de contabilidad y asesoramiento financiero para pequeñas empresas y emprendedores. Manejo de impuestos, estados financieros y más.",
      image: "http://placeimg.com/640/480/accounting",
    },
    {
      id: 10,
      title: "Desarrollador de Apps Móviles Freelance",
      content:
        "Creación de aplicaciones móviles personalizadas para iOS y Android. Experiencia en desarrollo nativo y frameworks como React Native.",
      image: "http://placeimg.com/640/480/mobileapp",
    },
    {
      id: 11,
      title: "Diseñador de Interiores Freelance",
      content:
        "Especializado en diseño de interiores para hogares y espacios comerciales. Transformo tus ideas en ambientes funcionales y estéticamente atractivos.",
      image: "http://placeimg.com/640/480/interiordesign",
    },
    {
      id: 12,
      title: "Desarrollador de Videojuegos Freelance",
      content:
        "Creación de videojuegos para diversas plataformas. Programación, diseño de niveles, gráficos y sonido para una experiencia de juego única.",
      image: "http://placeimg.com/640/480/gamedevelopment",
    },
    {
      id: 13,
      title: "Nutricionista Freelance",
      content:
        "Asesoramiento nutricional personalizado y planes de alimentación saludables. Ayudo a mis clientes a alcanzar sus objetivos de salud y bienestar.",
      image: "http://placeimg.com/640/480/nutrition",
    },
    {
      id: 14,
      title: "Entrenador Personal Freelance",
      content:
        "Entrenamientos personalizados adaptados a tus metas y necesidades. Te ayudo a lograr una mejor condición física y alcanzar tus objetivos de bienestar.",
      image: "http://placeimg.com/640/480/personaltrainer",
    },
    {
      id: 15,
      title: "Instructor de Yoga Freelance",
      content:
        "Clases de yoga en línea o presenciales para todos los niveles. Mejora tu flexibilidad, fuerza y bienestar general a través de la práctica del yoga.",
      image: "http://placeimg.com/640/480/yoga",
    },
    {
      id: 16,
      title: "Editor de Video Freelance",
      content:
        "Edición profesional de videos para proyectos personales o comerciales. Ajustes de color, cortes precisos y efectos visuales para lograr un resultado impactante.",
      image: "http://placeimg.com/640/480/videoediting",
    },
    {
      id: 17,
      title: "Diseñador de Moda Freelance",
      content:
        "Creación de diseños de moda únicos y a medida. Diseño de prendas, ilustraciones y asesoramiento en tendencias para marcas y diseñadores independientes.",
      image: "http://placeimg.com/640/480/fashiondesign",
    },
    {
      id: 18,
      title: "Instructor de Fitness Freelance",
      content:
        "Clases de fitness y entrenamientos personalizados para ayudarte a mantenerte en forma y alcanzar tus objetivos de salud. Motivación y apoyo garantizados.",
      image: "http://placeimg.com/640/480/fitness",
    },
    {
      id: 19,
      title: "Consultor SEO Freelance",
      content:
        "Optimización de motores de búsqueda para mejorar la visibilidad en línea de tu sitio web. Estrategias de SEO, análisis de palabras clave y más.",
      image: "http://placeimg.com/640/480/seo",
    },
    {
      id: 20,
      title: "Escritor de Contenido Técnico Freelance",
      content:
        "Redacción de contenido técnico y especializado. Artículos, manuales, guías y documentación técnica para empresas y profesionales del sector.",
      image: "http://placeimg.com/640/480/technicalwriting",
    },
  ],
  categorias: [
    {
      idcategoria: 1,
      nombre: "Tecnología",
      profesiones: [
        { id: 1, name: "Programador" },
        { id: 2, name: "Diseñador web" },
        { id: 3, name: "Especialista en SEO" },
        { id: 4, name: "Ingeniero de software" },
        { id: 5, name: "Analista de datos" },
        { id: 6, name: "Desarrollador de aplicaciones móviles" },
        { id: 7, name: "Administrador de sistemas" },
        { id: 8, name: "Ingeniero de redes" },
        { id: 9, name: "Experto en ciberseguridad" },
        { id: 10, name: "Especialista en inteligencia artificial" },
      ],
    },
    {
      idcategoria: 2,
      nombre: "Arte y Diseño",
      profesiones: [
        { id: 11, name: "Diseñador gráfico" },
        { id: 12, name: "Ilustrador" },
        { id: 13, name: "Fotógrafo" },
        { id: 14, name: "Animador 3D" },
        { id: 15, name: "Diseñador de moda" },
        { id: 16, name: "Artista digital" },
        { id: 17, name: "Escenógrafo" },
        { id: 18, name: "Maquetista" },
        { id: 19, name: "Diseñador de interiores" },
        { id: 20, name: "Diseñador de logotipos" },
      ],
    },
    {
      idcategoria: 3,
      nombre: "Consultoría",
      profesiones: [
        { id: 21, name: "Consultor de marketing" },
        { id: 22, name: "Consultor financiero" },
        { id: 23, name: "Consultor de recursos humanos" },
        { id: 24, name: "Consultor de negocios" },
        { id: 25, name: "Consultor de estrategia" },
        { id: 26, name: "Consultor de ventas" },
        { id: 27, name: "Consultor de gestión" },
        { id: 28, name: "Consultor de calidad" },
        { id: 29, name: "Consultor de logística" },
        { id: 30, name: "Consultor de transformación digital" },
      ],
    },
    {
      idcategoria: 4,
      nombre: "Servicios",
      profesiones: [
        { id: 31, name: "Asistente virtual" },
        { id: 32, name: "Redactor de contenido" },
        { id: 33, name: "Traductor" },
        { id: 34, name: "Community Manager" },
        { id: 35, name: "Nutricionista" },
        { id: 36, name: "Entrenador personal" },
        { id: 37, name: "Terapeuta" },
        { id: 38, name: "Consejero financiero" },
        { id: 39, name: "Gestor de redes sociales" },
        { id: 40, name: "Especialista en marketing digital" },
      ],
    },
    {
      idcategoria: 5,
      nombre: "Manualidades",
      profesiones: [
        { id: 41, name: "Pastelero" },
        { id: 42, name: "Ceramista" },
        { id: 43, name: "Sastrería" },
        { id: 44, name: "Joyería artesanal" },
        { id: 45, name: "Escultor" },
        { id: 46, name: "Bisutería" },
        { id: 47, name: "Elaboración de velas" },
        { id: 48, name: "Arreglos florales" },
        { id: 49, name: "Decorador de eventos" },
        { id: 50, name: "Origamista" },
      ],
    },
  ],
  clients: [
    {
      name: "John Smith",
      email: "john.smith@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "male",
      description: "Cliente en busca de servicios freelance de calidad",
      rating: 0,
    },
    {
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "female",
      description: "Cliente interesado en proyectos creativos y originales",
      rating: 0,
    },
    {
      name: "Michael Davis",
      email: "michael.davis@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "male",
      description: "Cliente en busca de soluciones tecnológicas innovadoras",
      rating: 0,
    },
    {
      name: "Jessica Brown",
      email: "jessica.brown@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "female",
      description: "Cliente que necesita servicios de diseño gráfico",
      rating: 0,
    },
    {
      name: "David Johnson",
      email: "david.johnson@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "male",
      description: "Cliente buscando asesoramiento financiero",
      rating: 0,
    },
    {
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "female",
      description: "Cliente interesada en servicios de marketing digital",
      rating: 0,
    },
    {
      name: "Robert Taylor",
      email: "robert.taylor@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "male",
      description: "Cliente en busca de desarrollo web",
      rating: 0,
    },
    {
      name: "Jennifer Martinez",
      email: "jennifer.martinez@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "female",
      description: "Cliente que necesita servicios de traducción",
      rating: 0,
    },
    {
      name: "Matthew Clark",
      email: "matthew.clark@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "male",
      description: "Cliente en busca de servicios de consultoría empresarial",
      rating: 0,
    },
    {
      name: "Sophia Turner",
      email: "sophia.turner@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "female",
      description: "Cliente interesada en servicios de redacción de contenido",
      rating: 0,
    },
    {
      name: "Daniel Rodriguez",
      email: "daniel.rodriguez@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "male",
      description: "Cliente buscando servicios de fotografía",
      rating: 0,
    },
    {
      name: "Olivia Walker",
      email: "olivia.walker@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "female",
      description: "Cliente en busca de servicios de diseño de logotipos",
      rating: 0,
    },
    {
      name: "Christopher Green",
      email: "christopher.green@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "male",
      description: "Cliente interesado en servicios de edición de video",
      rating: 0,
    },
    {
      name: "Ava Hill",
      email: "ava.hill@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "female",
      description:
        "Cliente buscando servicios de desarrollo de aplicaciones móviles",
      rating: 0,
    },
    {
      name: "Andrew Turner",
      email: "andrew.turner@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "male",
      description: "Cliente en busca de servicios de diseño de sitios web",
      rating: 0,
    },
    {
      name: "Mia Adams",
      email: "mia.adams@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "female",
      description:
        "Cliente interesada en servicios de gestión de redes sociales",
      rating: 0,
    },
    {
      name: "Ethan Cooper",
      email: "ethan.cooper@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "male",
      description: "Cliente buscando servicios de consultoría de marketing",
      rating: 0,
    },
    {
      name: "Isabella Reed",
      email: "isabella.reed@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "female",
      description:
        "Cliente en busca de servicios de optimización de motores de búsqueda",
      rating: 0,
    },
    {
      name: "William Baker",
      email: "william.baker@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "male",
      description: "Cliente interesado en servicios de diseño de folletos",
      rating: 0,
    },
    {
      name: "Chloe Gray",
      email: "chloe.gray@example.com",
      image: "http://placeimg.com/640/480/people",
      genre: "female",
      description:
        "Cliente buscando servicios de diseño de tarjetas de presentación",
      rating: 0,
    },
  ],
  profesionales: [
    {
      id: 1,
      name: "Janie Méndez",
      email: "Sal_Canales@yahoo.com",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      genre: "female",
      years_exp: "3",
      description:
        "Especialista en decoración de eventos y celebraciones, Artista que crea esculturas en diferentes materiales, Profesional en terapia y tratamiento de problemas emocionales y mentales, Encargado de gestionar las redes sociales de una marca o empresa",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 49,
          name: "Decorador de eventos",
          description: "Especialista en decoración de eventos y celebraciones",
        },
        {
          id: 45,
          name: "Escultor",
          description: "Artista que crea esculturas en diferentes materiales",
        },
        {
          id: 37,
          name: "Terapeuta",
          description:
            "Profesional en terapia y tratamiento de problemas emocionales y mentales",
        },
        {
          id: 39,
          name: "Gestor de redes sociales",
          description:
            "Encargado de gestionar las redes sociales de una marca o empresa",
        },
      ],
      rating: 3,
      ubicacion: "Doloreshaven",
      phone: "5950-607-079",
    },
    {
      id: 2,
      name: "Helen Atencio",
      email: "Natalia62@hotmail.com",
      image: "https://randomuser.me/api/portraits/women/34.jpg",
      genre: "female",
      years_exp: "1",
      description: "Experto en optimización de motores de búsqueda",
      categorias: [
        {
          id: 1,
          nombre: "Tecnología",
        },
      ],
      profesiones: [
        {
          id: 3,
          name: "Especialista en SEO",
          description: "Experto en optimización de motores de búsqueda",
        },
      ],
      rating: 5,
      ubicacion: "Escalanteview",
      phone: "588 184 886",
    },
    {
      id: 3,
      name: "Megan Frías",
      email: "Patricia.Amador@yahoo.com",
      image: "https://randomuser.me/api/portraits/women/34.jpg",
      genre: "male",
      years_exp: "4",
      description: "Profesional en diseño y confección de prendas a medida",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 43,
          name: "Sastrería",
          description: "Profesional en diseño y confección de prendas a medida",
        },
      ],
      rating: 2,
      ubicacion: "Puebla Armando",
      phone: "590 694 466",
    },
    {
      id: 4,
      name: "Sta. Kristine Torres",
      email: "Lilia.Arenas@gmail.com",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      genre: "male",
      years_exp: "5",
      description:
        "Especialista en decoración de eventos y celebraciones, Experto en asesoramiento financiero y planificación económica",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 49,
          name: "Decorador de eventos",
          description: "Especialista en decoración de eventos y celebraciones",
        },
        {
          id: 38,
          name: "Consejero financiero",
          description:
            "Experto en asesoramiento financiero y planificación económica",
        },
      ],
      rating: 4,
      ubicacion: "Rincónfurt",
      phone: "5008-125-405",
    },
    {
      id: 5,
      name: "Mamie Viera",
      email: "Claudia_Olivares@hotmail.com",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      genre: "male",
      years_exp: "4",
      description:
        "Especialista en gestión de recursos humanos y desarrollo organizacional, Creador de velas artesanales y aromáticas, Creador de arreglos y decoraciones florales",
      categorias: [
        {
          id: 3,
          nombre: "Consultoría",
        },
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 23,
          name: "Consultor de recursos humanos",
          description:
            "Especialista en gestión de recursos humanos y desarrollo organizacional",
        },
        {
          id: 47,
          name: "Elaboración de velas",
          description: "Creador de velas artesanales y aromáticas",
        },
        {
          id: 48,
          name: "Arreglos florales",
          description: "Creador de arreglos y decoraciones florales",
        },
      ],
      rating: 3,
      ubicacion: "Morelia Luis Miguel",
      phone: "527 356 768",
    },
    {
      id: 6,
      name: "Nelson Téllez",
      email: "Guillermina_Zambrano13@gmail.com",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
      genre: "female",
      years_exp: "3",
      description:
        "Creador de joyas y accesorios hechos a mano, Creador de arreglos y decoraciones florales",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 44,
          name: "Joyería artesanal",
          description: "Creador de joyas y accesorios hechos a mano",
        },
        {
          id: 48,
          name: "Arreglos florales",
          description: "Creador de arreglos y decoraciones florales",
        },
      ],
      rating: 3,
      ubicacion: "Santacruzland",
      phone: "543068972",
    },
    {
      id: 7,
      name: "Edmund Mata DVM",
      email: "AnaVictoria_Polanco@yahoo.com",
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      genre: "male",
      years_exp: "3",
      description:
        "Especialista en asesoramiento financiero y gestión de finanzas",
      categorias: [
        {
          id: 3,
          nombre: "Consultoría",
        },
      ],
      profesiones: [
        {
          id: 22,
          name: "Consultor financiero",
          description:
            "Especialista en asesoramiento financiero y gestión de finanzas",
        },
      ],
      rating: 1,
      ubicacion: "Monclova Concepción",
      phone: "525 628 471",
    },
    {
      id: 8,
      name: "Shannon Jimínez",
      email: "Vernica30@corpfolder.com",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
      genre: "male",
      years_exp: "3",
      description:
        "Encargado de la administración y mantenimiento de sistemas informáticos, Especialista en gestión de recursos humanos y desarrollo organizacional",
      categorias: [
        {
          id: 1,
          nombre: "Tecnología",
        },
        {
          id: 3,
          nombre: "Consultoría",
        },
      ],
      profesiones: [
        {
          id: 7,
          name: "Administrador de sistemas",
          description:
            "Encargado de la administración y mantenimiento de sistemas informáticos",
        },
        {
          id: 23,
          name: "Consultor de recursos humanos",
          description:
            "Especialista en gestión de recursos humanos y desarrollo organizacional",
        },
      ],
      rating: 2,
      ubicacion: "Evelynville",
      phone: "503 690 546",
    },
    {
      id: 9,
      name: "Susan Valdés",
      email: "Andrea69@nearbpo.com",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
      genre: "female",
      years_exp: "1",
      description:
        "Creador de velas artesanales y aromáticas, Experto en desarrollo de estrategias empresariales, Especialista en técnicas de venta y negociación",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
        {
          id: 3,
          nombre: "Consultoría",
        },
      ],
      profesiones: [
        {
          id: 47,
          name: "Elaboración de velas",
          description: "Creador de velas artesanales y aromáticas",
        },
        {
          id: 25,
          name: "Consultor de estrategia",
          description: "Experto en desarrollo de estrategias empresariales",
        },
        {
          id: 26,
          name: "Consultor de ventas",
          description: "Especialista en técnicas de venta y negociación",
        },
      ],
      rating: 3,
      ubicacion: "Dulce Maríaburgh",
      phone: "530258386",
    },
    {
      id: 10,
      name: "Virginia Dueñas III",
      email: "Csar_Gil@corpfolder.com",
      image: "https://randomuser.me/api/portraits/women/16.jpg",
      genre: "female",
      years_exp: "1",
      description:
        "Especialista en entrenamiento físico personalizado, Profesional en nutrición y alimentación saludable",
      categorias: [
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 36,
          name: "Entrenador personal",
          description: "Especialista en entrenamiento físico personalizado",
        },
        {
          id: 35,
          name: "Nutricionista",
          description: "Profesional en nutrición y alimentación saludable",
        },
      ],
      rating: 3,
      ubicacion: "Ocala",
      phone: "555473570",
    },
    {
      id: 11,
      name: "Viola Ochoa",
      email: "Gloria_Arenas@hotmail.com",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      genre: "female",
      years_exp: "5",
      description: "Creador de diseños y planos de interiores de espacios",
      categorias: [
        {
          id: 2,
          nombre: "Arte y Diseño",
        },
      ],
      profesiones: [
        {
          id: 19,
          name: "Diseñador de interiores",
          description: "Creador de diseños y planos de interiores de espacios",
        },
      ],
      rating: 5,
      ubicacion: "Delgadoberg",
      phone: "593.600.578",
    },
    {
      id: 12,
      name: "Kathleen Roque Mtro.",
      email: "Hugo_Lomeli96@nearbpo.com",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      genre: "female",
      years_exp: "2",
      description:
        "Especialista en decoración de eventos y celebraciones, Creador de pasteles y postres, Profesional en terapia y tratamiento de problemas emocionales y mentales, Asistente personal remoto que realiza tareas administrativas",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 49,
          name: "Decorador de eventos",
          description: "Especialista en decoración de eventos y celebraciones",
        },
        {
          id: 41,
          name: "Pastelero",
          description: "Creador de pasteles y postres",
        },
        {
          id: 37,
          name: "Terapeuta",
          description:
            "Profesional en terapia y tratamiento de problemas emocionales y mentales",
        },
        {
          id: 31,
          name: "Asistente virtual",
          description:
            "Asistente personal remoto que realiza tareas administrativas",
        },
      ],
      rating: 2,
      ubicacion: "La Laguna Luis Fernandoborough",
      phone: "593.368.038",
    },
    {
      id: 13,
      name: "Jana Cornejo",
      email: "Paulina92@nearbpo.com",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      genre: "female",
      years_exp: "4",
      description:
        "Encargado de gestionar las redes sociales de una marca o empresa, Encargado de gestionar las redes sociales de una marca o empresa",
      categorias: [
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 39,
          name: "Gestor de redes sociales",
          description:
            "Encargado de gestionar las redes sociales de una marca o empresa",
        },
        {
          id: 34,
          name: "Community Manager",
          description:
            "Encargado de gestionar las redes sociales de una marca o empresa",
        },
      ],
      rating: 3,
      ubicacion: "Emiliastad",
      phone: "520593467",
    },
    {
      id: 14,
      name: "Ignacio Cotto",
      email: "Leticia77@corpfolder.com",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      genre: "male",
      years_exp: "2",
      description:
        "Encargado de gestionar las redes sociales de una marca o empresa, Escritor de contenido creativo y persuasivo",
      categorias: [
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 34,
          name: "Community Manager",
          description:
            "Encargado de gestionar las redes sociales de una marca o empresa",
        },
        {
          id: 32,
          name: "Redactor de contenido",
          description: "Escritor de contenido creativo y persuasivo",
        },
      ],
      rating: 4,
      ubicacion: "Naucalpan de Juárez Octavio",
      phone: "5070-481-515",
    },
    {
      id: 15,
      name: "Andrew Rodrígez",
      email: "Antonio.Zambrana24@nearbpo.com",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      genre: "female",
      years_exp: "3",
      description:
        "Experto en estrategias y técnicas de marketing, Experto en desarrollo de estrategias empresariales, Creador de piezas de cerámica y alfarería",
      categorias: [
        {
          id: 3,
          nombre: "Consultoría",
        },
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 21,
          name: "Consultor de marketing",
          description: "Experto en estrategias y técnicas de marketing",
        },
        {
          id: 25,
          name: "Consultor de estrategia",
          description: "Experto en desarrollo de estrategias empresariales",
        },
        {
          id: 42,
          name: "Ceramista",
          description: "Creador de piezas de cerámica y alfarería",
        },
      ],
      rating: 2,
      ubicacion: "Rosaliamouth",
      phone: "5394-762-738",
    },
    {
      id: 16,
      name: "Della Menéndez",
      email: "Teodoro98@corpfolder.com",
      image: "https://randomuser.me/api/portraits/women/20.jpg",
      genre: "female",
      years_exp: "3",
      description: "Experto en estrategias y técnicas de marketing",
      categorias: [
        {
          id: 3,
          nombre: "Consultoría",
        },
      ],
      profesiones: [
        {
          id: 21,
          name: "Consultor de marketing",
          description: "Experto en estrategias y técnicas de marketing",
        },
      ],
      rating: 5,
      ubicacion: "Carlashire",
      phone: "510277178",
    },
    {
      id: 17,
      name: "Javier Navarro II",
      email: "Rosario.Lemus@nearbpo.com",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      genre: "male",
      years_exp: "5",
      description:
        "Escritor de contenido creativo y persuasivo, Especialista en asesoramiento financiero y gestión de finanzas",
      categorias: [
        {
          id: 4,
          nombre: "Servicios",
        },
        {
          id: 3,
          nombre: "Consultoría",
        },
      ],
      profesiones: [
        {
          id: 32,
          name: "Redactor de contenido",
          description: "Escritor de contenido creativo y persuasivo",
        },
        {
          id: 22,
          name: "Consultor financiero",
          description:
            "Especialista en asesoramiento financiero y gestión de finanzas",
        },
      ],
      rating: 5,
      ubicacion: "Pleasanton",
      phone: "581054826",
    },
    {
      id: 18,
      name: "Margarita Limón",
      email: "Esmeralda.Barraza@hotmail.com",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      genre: "female",
      years_exp: "3",
      description:
        "Especialista en gestión de calidad y mejora continua, Creador de velas artesanales y aromáticas",
      categorias: [
        {
          id: 3,
          nombre: "Consultoría",
        },
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 28,
          name: "Consultor de calidad",
          description: "Especialista en gestión de calidad y mejora continua",
        },
        {
          id: 47,
          name: "Elaboración de velas",
          description: "Creador de velas artesanales y aromáticas",
        },
      ],
      rating: 3,
      ubicacion: "Bloomington",
      phone: "5082-506-444",
    },
    {
      id: 19,
      name: "Matt Solorio",
      email: "Timoteo.Kanea@yahoo.com",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      genre: "female",
      years_exp: "5",
      description:
        "Experto en diseño y configuración de redes de computadoras, Experto en optimización de motores de búsqueda",
      categorias: [
        {
          id: 1,
          nombre: "Tecnología",
        },
      ],
      profesiones: [
        {
          id: 8,
          name: "Ingeniero de redes",
          description:
            "Experto en diseño y configuración de redes de computadoras",
        },
        {
          id: 3,
          name: "Especialista en SEO",
          description: "Experto en optimización de motores de búsqueda",
        },
      ],
      rating: 3,
      ubicacion: "Adánton",
      phone: "517466897",
    },
    {
      id: 20,
      name: "Sra. Frankie Salcido",
      email: "MaraEugenia13@gmail.com",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      genre: "female",
      years_exp: "3",
      description:
        "Escritor de contenido creativo y persuasivo, Encargado de gestionar las redes sociales de una marca o empresa",
      categorias: [
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 32,
          name: "Redactor de contenido",
          description: "Escritor de contenido creativo y persuasivo",
        },
        {
          id: 39,
          name: "Gestor de redes sociales",
          description:
            "Encargado de gestionar las redes sociales de una marca o empresa",
        },
      ],
      rating: 3,
      ubicacion: "Oklahoma City",
      phone: "515 052 285",
    },
    {
      id: 21,
      name: "Virginia Vergara",
      email: "Guillermo.Tern60@nearbpo.com",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      genre: "female",
      years_exp: "4",
      description: "Profesional en diseño y confección de prendas a medida",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 43,
          name: "Sastrería",
          description: "Profesional en diseño y confección de prendas a medida",
        },
      ],
      rating: 3,
      ubicacion: "Evaberg",
      phone: "522476167",
    },
    {
      id: 22,
      name: "Irma Kanea",
      email: "Adela10@corpfolder.com",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
      genre: "male",
      years_exp: "4",
      description:
        "Profesional en terapia y tratamiento de problemas emocionales y mentales, Profesional que brinda servicios de traducción de idiomas",
      categorias: [
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 37,
          name: "Terapeuta",
          description:
            "Profesional en terapia y tratamiento de problemas emocionales y mentales",
        },
        {
          id: 33,
          name: "Traductor",
          description:
            "Profesional que brinda servicios de traducción de idiomas",
        },
      ],
      rating: 4,
      ubicacion: "Mazatlán Estebanborough",
      phone: "530902643",
    },
    {
      id: 23,
      name: "Rudy Nieves",
      email: "XimenaGuadalupe.Burgos78@nearbpo.com",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
      genre: "female",
      years_exp: "3",
      description:
        "Escritor de contenido creativo y persuasivo, Creador de maquetas y modelos tridimensionales, Creador de diseños gráficos para diversos proyectos",
      categorias: [
        {
          id: 4,
          nombre: "Servicios",
        },
        {
          id: 2,
          nombre: "Arte y Diseño",
        },
      ],
      profesiones: [
        {
          id: 32,
          name: "Redactor de contenido",
          description: "Escritor de contenido creativo y persuasivo",
        },
        {
          id: 18,
          name: "Maquetista",
          description: "Creador de maquetas y modelos tridimensionales",
        },
        {
          id: 11,
          name: "Diseñador gráfico",
          description: "Creador de diseños gráficos para diversos proyectos",
        },
      ],
      rating: 4,
      ubicacion: "Villahermosa Carolina",
      phone: "508841281",
    },
    {
      id: 24,
      name: "Doris Véliz",
      email: "Agustn_Manzanares72@corpfolder.com",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      genre: "male",
      years_exp: "3",
      description:
        "Creador de arreglos y decoraciones florales, Profesional en diseño y confección de prendas a medida",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 48,
          name: "Arreglos florales",
          description: "Creador de arreglos y decoraciones florales",
        },
        {
          id: 43,
          name: "Sastrería",
          description: "Profesional en diseño y confección de prendas a medida",
        },
      ],
      rating: 3,
      ubicacion: "Oaxaca Martín",
      phone: "507 372 769",
    },
    {
      id: 25,
      name: "Jessie Mascareñas",
      email: "Uriel_Faras89@corpfolder.com",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      genre: "male",
      years_exp: "3",
      description:
        "Especialista en gestión de recursos humanos y desarrollo organizacional, Especialista en asesoramiento financiero y gestión de finanzas, Creador de joyas y accesorios hechos a mano",
      categorias: [
        {
          id: 3,
          nombre: "Consultoría",
        },
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 23,
          name: "Consultor de recursos humanos",
          description:
            "Especialista en gestión de recursos humanos y desarrollo organizacional",
        },
        {
          id: 22,
          name: "Consultor financiero",
          description:
            "Especialista en asesoramiento financiero y gestión de finanzas",
        },
        {
          id: 44,
          name: "Joyería artesanal",
          description: "Creador de joyas y accesorios hechos a mano",
        },
      ],
      rating: 3,
      ubicacion: "Villa de Álvarez José",
      phone: "557 058 699",
    },
    {
      id: 26,
      name: "Henrietta Valverde",
      email: "MaraEugenia85@corpfolder.com",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      genre: "male",
      years_exp: "2",
      description:
        "Creador de arreglos y decoraciones florales, Creador de pasteles y postres",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 48,
          name: "Arreglos florales",
          description: "Creador de arreglos y decoraciones florales",
        },
        {
          id: 41,
          name: "Pastelero",
          description: "Creador de pasteles y postres",
        },
      ],
      rating: 4,
      ubicacion: "General Escobedo Elena",
      phone: "5000-422-418",
    },
    {
      id: 27,
      name: "Shawna Mesa",
      email: "Rosa_Valladares@nearbpo.com",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      genre: "male",
      years_exp: "1",
      description:
        "Asistente personal remoto que realiza tareas administrativas, Escritor de contenido creativo y persuasivo, Experto en el arte del origami, plegado de papel, Profesional en diseño y confección de prendas a medida",
      categorias: [
        {
          id: 4,
          nombre: "Servicios",
        },
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 31,
          name: "Asistente virtual",
          description:
            "Asistente personal remoto que realiza tareas administrativas",
        },
        {
          id: 32,
          name: "Redactor de contenido",
          description: "Escritor de contenido creativo y persuasivo",
        },
        {
          id: 50,
          name: "Origamista",
          description: "Experto en el arte del origami, plegado de papel",
        },
        {
          id: 43,
          name: "Sastrería",
          description: "Profesional en diseño y confección de prendas a medida",
        },
      ],
      rating: 3,
      ubicacion: "Leonardoville",
      phone: "545493452",
    },
    {
      id: 28,
      name: "Estelle Lebrón",
      email: "Israel.Castillo35@yahoo.com",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      genre: "female",
      years_exp: "5",
      description:
        "Experto en gestión y optimización de la cadena de suministro, Creador de piezas de cerámica y alfarería",
      categorias: [
        {
          id: 3,
          nombre: "Consultoría",
        },
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 29,
          name: "Consultor de logística",
          description:
            "Experto en gestión y optimización de la cadena de suministro",
        },
        {
          id: 42,
          name: "Ceramista",
          description: "Creador de piezas de cerámica y alfarería",
        },
      ],
      rating: 2,
      ubicacion: "Tadeoburgh",
      phone: "5836-301-552",
    },
    {
      id: 29,
      name: "Celia Varela",
      email: "Timoteo_Salas@corpfolder.com",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
      genre: "male",
      years_exp: "2",
      description:
        "Especialista en protección y seguridad de sistemas informáticos",
      categorias: [
        {
          id: 1,
          nombre: "Tecnología",
        },
      ],
      profesiones: [
        {
          id: 9,
          name: "Experto en ciberseguridad",
          description:
            "Especialista en protección y seguridad de sistemas informáticos",
        },
      ],
      rating: 4,
      ubicacion: "Jerónimostad",
      phone: "586245328",
    },
    {
      id: 30,
      name: "Irvin Alarcón",
      email: "Daniel.Delgadillo@yahoo.com",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      genre: "female",
      years_exp: "4",
      description:
        "Experto en gestión y optimización de la cadena de suministro, Asesor en procesos de transformación digital de empresas, Creador de joyas y accesorios hechos a mano",
      categorias: [
        {
          id: 3,
          nombre: "Consultoría",
        },
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 29,
          name: "Consultor de logística",
          description:
            "Experto en gestión y optimización de la cadena de suministro",
        },
        {
          id: 30,
          name: "Consultor de transformación digital",
          description:
            "Asesor en procesos de transformación digital de empresas",
        },
        {
          id: 44,
          name: "Joyería artesanal",
          description: "Creador de joyas y accesorios hechos a mano",
        },
      ],
      rating: 2,
      ubicacion: "Vergaraport",
      phone: "554.715.591",
    },
    {
      id: 31,
      name: "Terrell Roybal",
      email: "JuanManuel_Ybarra91@nearbpo.com",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      genre: "female",
      years_exp: "4",
      description:
        "Creador de aplicaciones móviles para iOS y Android, Experto en optimización de motores de búsqueda, Creador de pasteles y postres, Creador de arreglos y decoraciones florales",
      categorias: [
        {
          id: 1,
          nombre: "Tecnología",
        },
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 6,
          name: "Desarrollador de aplicaciones móviles",
          description: "Creador de aplicaciones móviles para iOS y Android",
        },
        {
          id: 3,
          name: "Especialista en SEO",
          description: "Experto en optimización de motores de búsqueda",
        },
        {
          id: 41,
          name: "Pastelero",
          description: "Creador de pasteles y postres",
        },
        {
          id: 48,
          name: "Arreglos florales",
          description: "Creador de arreglos y decoraciones florales",
        },
      ],
      rating: 2,
      ubicacion: "Fajardofort",
      phone: "540 230 914",
    },
    {
      id: 32,
      name: "Kevin Ortiz",
      email: "Uriel.Llamas@yahoo.com",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      genre: "male",
      years_exp: "5",
      description:
        "Profesional en diseño y confección de prendas a medida, Asesor de gestión empresarial para la mejora de procesos y eficiencia",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
        {
          id: 3,
          nombre: "Consultoría",
        },
      ],
      profesiones: [
        {
          id: 43,
          name: "Sastrería",
          description: "Profesional en diseño y confección de prendas a medida",
        },
        {
          id: 27,
          name: "Consultor de gestión",
          description:
            "Asesor de gestión empresarial para la mejora de procesos y eficiencia",
        },
      ],
      rating: 5,
      ubicacion: "Mount Pleasant",
      phone: "5796-075-442",
    },
    {
      id: 33,
      name: "Leticia Cordero",
      email: "Rafael_Elizondo@nearbpo.com",
      image: "https://randomuser.me/api/portraits/women/34.jpg",
      genre: "male",
      years_exp: "5",
      description:
        "Creador de arte digital y gráficos, Creador de diseños de moda y prendas de vestir, Encargado de la administración y mantenimiento de sistemas informáticos",
      categorias: [
        {
          id: 2,
          nombre: "Arte y Diseño",
        },
        {
          id: 1,
          nombre: "Tecnología",
        },
      ],
      profesiones: [
        {
          id: 16,
          name: "Artista digital",
          description: "Creador de arte digital y gráficos",
        },
        {
          id: 15,
          name: "Diseñador de moda",
          description: "Creador de diseños de moda y prendas de vestir",
        },
        {
          id: 7,
          name: "Administrador de sistemas",
          description:
            "Encargado de la administración y mantenimiento de sistemas informáticos",
        },
      ],
      rating: 3,
      ubicacion: "Yakima",
      phone: "536815485",
    },
    {
      id: 34,
      name: "Franklin Tórrez",
      email: "Martn82@hotmail.com",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      genre: "male",
      years_exp: "3",
      description:
        "Especialista en decoración de eventos y celebraciones, Profesional en diseño y confección de prendas a medida, Asistente personal remoto que realiza tareas administrativas, Especialista en entrenamiento físico personalizado",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 49,
          name: "Decorador de eventos",
          description: "Especialista en decoración de eventos y celebraciones",
        },
        {
          id: 43,
          name: "Sastrería",
          description: "Profesional en diseño y confección de prendas a medida",
        },
        {
          id: 31,
          name: "Asistente virtual",
          description:
            "Asistente personal remoto que realiza tareas administrativas",
        },
        {
          id: 36,
          name: "Entrenador personal",
          description: "Especialista en entrenamiento físico personalizado",
        },
      ],
      rating: 4,
      ubicacion: "Omaha",
      phone: "5239-043-552",
    },
    {
      id: 35,
      name: "Sra. Owen Feliciano",
      email: "Olivia84@gmail.com",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      genre: "female",
      years_exp: "3",
      description:
        "Diseñador de escenarios para teatro, cine y televisión, Creador de diseños y planos de interiores de espacios, Especialista en técnicas de venta y negociación",
      categorias: [
        {
          id: 2,
          nombre: "Arte y Diseño",
        },
        {
          id: 3,
          nombre: "Consultoría",
        },
      ],
      profesiones: [
        {
          id: 17,
          name: "Escenógrafo",
          description: "Diseñador de escenarios para teatro, cine y televisión",
        },
        {
          id: 19,
          name: "Diseñador de interiores",
          description: "Creador de diseños y planos de interiores de espacios",
        },
        {
          id: 26,
          name: "Consultor de ventas",
          description: "Especialista en técnicas de venta y negociación",
        },
      ],
      rating: 5,
      ubicacion: "San Juan del Río María Teresachester",
      phone: "566.015.953",
    },
    {
      id: 36,
      name: "Lori Zayas",
      email: "ngela.Amaya@gmail.com",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      genre: "male",
      years_exp: "5",
      description:
        "Creador de aplicaciones móviles para iOS y Android, Experto en diseño y configuración de redes de computadoras, Encargado de gestionar las redes sociales de una marca o empresa, Experto en estrategias de marketing digital",
      categorias: [
        {
          id: 1,
          nombre: "Tecnología",
        },
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 6,
          name: "Desarrollador de aplicaciones móviles",
          description: "Creador de aplicaciones móviles para iOS y Android",
        },
        {
          id: 8,
          name: "Ingeniero de redes",
          description:
            "Experto en diseño y configuración de redes de computadoras",
        },
        {
          id: 34,
          name: "Community Manager",
          description:
            "Encargado de gestionar las redes sociales de una marca o empresa",
        },
        {
          id: 40,
          name: "Especialista en marketing digital",
          description: "Experto en estrategias de marketing digital",
        },
      ],
      rating: 2,
      ubicacion: "Silver Spring",
      phone: "5804-938-811",
    },
    {
      id: 37,
      name: "Joanne Lozada",
      email: "Maximiliano.Ros@hotmail.com",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      genre: "male",
      years_exp: "3",
      description:
        "Asesor de gestión empresarial para la mejora de procesos y eficiencia, Encargado de gestionar las redes sociales de una marca o empresa",
      categorias: [
        {
          id: 3,
          nombre: "Consultoría",
        },
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 27,
          name: "Consultor de gestión",
          description:
            "Asesor de gestión empresarial para la mejora de procesos y eficiencia",
        },
        {
          id: 34,
          name: "Community Manager",
          description:
            "Encargado de gestionar las redes sociales de una marca o empresa",
        },
      ],
      rating: 3,
      ubicacion: "Guadalupe Carmen",
      phone: "582 228 682",
    },
    {
      id: 38,
      name: "Sr. Georgia Sosa",
      email: "Margarita3@corpfolder.com",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      genre: "male",
      years_exp: "1",
      description:
        "Encargado de gestionar las redes sociales de una marca o empresa, Asistente personal remoto que realiza tareas administrativas",
      categorias: [
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 34,
          name: "Community Manager",
          description:
            "Encargado de gestionar las redes sociales de una marca o empresa",
        },
        {
          id: 31,
          name: "Asistente virtual",
          description:
            "Asistente personal remoto que realiza tareas administrativas",
        },
      ],
      rating: 1,
      ubicacion: "Jiutepec Elíasside",
      phone: "578141436",
    },
    {
      id: 39,
      name: "Charlotte Miramontes Lic.",
      email: "Emiliano22@nearbpo.com",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      genre: "female",
      years_exp: "2",
      description:
        "Creador de velas artesanales y aromáticas, Profesional en terapia y tratamiento de problemas emocionales y mentales, Profesional que brinda servicios de traducción de idiomas",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 47,
          name: "Elaboración de velas",
          description: "Creador de velas artesanales y aromáticas",
        },
        {
          id: 37,
          name: "Terapeuta",
          description:
            "Profesional en terapia y tratamiento de problemas emocionales y mentales",
        },
        {
          id: 33,
          name: "Traductor",
          description:
            "Profesional que brinda servicios de traducción de idiomas",
        },
      ],
      rating: 2,
      ubicacion: "Chihuahua Esmeralda",
      phone: "569858395",
    },
    {
      id: 40,
      name: "Edmond Barrientos",
      email: "FernandoJavier_Padrn@gmail.com",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      genre: "male",
      years_exp: "1",
      description:
        "Encargado de gestionar las redes sociales de una marca o empresa, Experto en asesoramiento financiero y planificación económica",
      categorias: [
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 39,
          name: "Gestor de redes sociales",
          description:
            "Encargado de gestionar las redes sociales de una marca o empresa",
        },
        {
          id: 38,
          name: "Consejero financiero",
          description:
            "Experto en asesoramiento financiero y planificación económica",
        },
      ],
      rating: 5,
      ubicacion: "Pedrazaland",
      phone: "575 045 677",
    },
    {
      id: 41,
      name: "Sr. Evelyn Alemán",
      email: "Vernica_Aguilera@gmail.com",
      image: "https://randomuser.me/api/portraits/women/38.jpg",
      genre: "female",
      years_exp: "1",
      description:
        "Experto en desarrollo de sistemas y algoritmos de inteligencia artificial, Experto en diseño y desarrollo de sitios web",
      categorias: [
        {
          id: 1,
          nombre: "Tecnología",
        },
      ],
      profesiones: [
        {
          id: 10,
          name: "Especialista en inteligencia artificial",
          description:
            "Experto en desarrollo de sistemas y algoritmos de inteligencia artificial",
        },
        {
          id: 2,
          name: "Diseñador web",
          description: "Experto en diseño y desarrollo de sitios web",
        },
      ],
      rating: 1,
      ubicacion: "Piedras Negras Guadalupe",
      phone: "598.600.035",
    },
    {
      id: 42,
      name: "Maria Casárez",
      email: "Guadalupe.Quiones53@gmail.com",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      genre: "female",
      years_exp: "5",
      description: "Artista que crea ilustraciones y dibujos",
      categorias: [
        {
          id: 2,
          nombre: "Arte y Diseño",
        },
      ],
      profesiones: [
        {
          id: 12,
          name: "Ilustrador",
          description: "Artista que crea ilustraciones y dibujos",
        },
      ],
      rating: 5,
      ubicacion: "Benavídezchester",
      phone: "5990-597-359",
    },
    {
      id: 43,
      name: "Benny Rael",
      email: "Patricio_Meja@gmail.com",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      genre: "male",
      years_exp: "3",
      description:
        "Experto en desarrollo de sistemas y algoritmos de inteligencia artificial, Creador de diseños de moda y prendas de vestir",
      categorias: [
        {
          id: 1,
          nombre: "Tecnología",
        },
        {
          id: 2,
          nombre: "Arte y Diseño",
        },
      ],
      profesiones: [
        {
          id: 10,
          name: "Especialista en inteligencia artificial",
          description:
            "Experto en desarrollo de sistemas y algoritmos de inteligencia artificial",
        },
        {
          id: 15,
          name: "Diseñador de moda",
          description: "Creador de diseños de moda y prendas de vestir",
        },
      ],
      rating: 3,
      ubicacion: "Richardson",
      phone: "547045745",
    },
    {
      id: 44,
      name: "Desiree Oquendo",
      email: "Mayte74@corpfolder.com",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      genre: "male",
      years_exp: "4",
      description:
        "Creador de animaciones en 3D, Artista que crea ilustraciones y dibujos",
      categorias: [
        {
          id: 2,
          nombre: "Arte y Diseño",
        },
      ],
      profesiones: [
        {
          id: 14,
          name: "Animador 3D",
          description: "Creador de animaciones en 3D",
        },
        {
          id: 12,
          name: "Ilustrador",
          description: "Artista que crea ilustraciones y dibujos",
        },
      ],
      rating: 5,
      ubicacion: "Saltillo Adela",
      phone: "523.242.163",
    },
    {
      id: 45,
      name: "Jamie Peres",
      email: "Samuel19@hotmail.com",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      genre: "male",
      years_exp: "3",
      description: "Desarrollador de software especializado en ingeniería",
      categorias: [
        {
          id: 1,
          nombre: "Tecnología",
        },
      ],
      profesiones: [
        {
          id: 1,
          name: "Programador",
          description: "Desarrollador de software especializado en ingeniería",
        },
      ],
      rating: 1,
      ubicacion: "Monclova Ana Luisafurt",
      phone: "519.708.360",
    },
    {
      id: 46,
      name: "Pamela de Anda",
      email: "Rocio.Cruz86@yahoo.com",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
      genre: "male",
      years_exp: "5",
      description:
        "Encargado de gestionar las redes sociales de una marca o empresa, Experto en gestión y optimización de la cadena de suministro, Experto en desarrollo de estrategias empresariales",
      categorias: [
        {
          id: 4,
          nombre: "Servicios",
        },
        {
          id: 3,
          nombre: "Consultoría",
        },
      ],
      profesiones: [
        {
          id: 34,
          name: "Community Manager",
          description:
            "Encargado de gestionar las redes sociales de una marca o empresa",
        },
        {
          id: 29,
          name: "Consultor de logística",
          description:
            "Experto en gestión y optimización de la cadena de suministro",
        },
        {
          id: 25,
          name: "Consultor de estrategia",
          description: "Experto en desarrollo de estrategias empresariales",
        },
      ],
      rating: 3,
      ubicacion: "Juradoberg",
      phone: "586641756",
    },
    {
      id: 47,
      name: "Malcolm Ibarra",
      email: "Alberto_Gil@nearbpo.com",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      genre: "male",
      years_exp: "1",
      description:
        "Creador de diseños gráficos para diversos proyectos, Creador de arte digital y gráficos",
      categorias: [
        {
          id: 2,
          nombre: "Arte y Diseño",
        },
      ],
      profesiones: [
        {
          id: 11,
          name: "Diseñador gráfico",
          description: "Creador de diseños gráficos para diversos proyectos",
        },
        {
          id: 16,
          name: "Artista digital",
          description: "Creador de arte digital y gráficos",
        },
      ],
      rating: 4,
      ubicacion: "Cicero",
      phone: "560955929",
    },
    {
      id: 48,
      name: "Rosalie Vásquez IV",
      email: "Laura0@gmail.com",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      genre: "female",
      years_exp: "1",
      description: "Creador de accesorios de bisutería y complementos",
      categorias: [
        {
          id: 5,
          nombre: "Manualidades",
        },
      ],
      profesiones: [
        {
          id: 46,
          name: "Bisutería",
          description: "Creador de accesorios de bisutería y complementos",
        },
      ],
      rating: 4,
      ubicacion: "Riverahaven",
      phone: "5875-498-044",
    },
    {
      id: 49,
      name: "Raquel Guzmán",
      email: "MaraLuisa.Ozuna@corpfolder.com",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      genre: "female",
      years_exp: "2",
      description:
        "Encargado de gestionar las redes sociales de una marca o empresa, Profesional en nutrición y alimentación saludable",
      categorias: [
        {
          id: 4,
          nombre: "Servicios",
        },
      ],
      profesiones: [
        {
          id: 39,
          name: "Gestor de redes sociales",
          description:
            "Encargado de gestionar las redes sociales de una marca o empresa",
        },
        {
          id: 35,
          name: "Nutricionista",
          description: "Profesional en nutrición y alimentación saludable",
        },
      ],
      rating: 2,
      ubicacion: "Anitaport",
      phone: "593 561 599",
    },
    {
      id: 50,
      name: "Courtney Magaña",
      email: "Cristian.Tovar@yahoo.com",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      genre: "female",
      years_exp: "5",
      description:
        "Asesor en procesos de transformación digital de empresas, Especialista en técnicas de venta y negociación",
      categorias: [
        {
          id: 3,
          nombre: "Consultoría",
        },
      ],
      profesiones: [
        {
          id: 30,
          name: "Consultor de transformación digital",
          description:
            "Asesor en procesos de transformación digital de empresas",
        },
        {
          id: 26,
          name: "Consultor de ventas",
          description: "Especialista en técnicas de venta y negociación",
        },
      ],
      rating: 2,
      ubicacion: "Iglesiasview",
      phone: "586 113 096",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SUPPLIERS:
      return {
        ...state,
        backup: action.payload,
        suppliers: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case FILTER_BY_CATEGORY: {
      const filteredCategories = state.categories.filter(
        (category) => category.nombre === action.payload
      );
      return {
        ...state,
        filteredCategories: filteredCategories,
      };
    }
    case SEARCH_PROFESSIONALS:
      return {
        ...state,
        professionals: action.payload,
      };
      //!filtro por rating
    case ORDER_BY_RATING: {
      const sortedProfessionals = [...state.profesionales].sort((a, b) => {
        if (action.payload === "lower") {
          return a.rating - b.rating;
        } else if (action.payload === "higher") {
          return b.rating - a.rating;
        }
        return 0;
      });

      return {
        ...state,
        suppliers: [...sortedProfessionals],
      };
    }
    //! filtro de busqueda por generos
    case FILTER_BY_GENRES: {
      const backup = state.backup;
      const filteredSuppliers =
        action.payload === "All"
          ? backup
          : backup.filter((supplier) => supplier.genre === action.payload);

      return {
        ...state,
        suppliers: filteredSuppliers,
      };
    }
    //! caso por default
    default:
      return { ...state };
  }
};

export default reducer;
