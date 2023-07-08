import {
  GET_ALL_SUPPLIERS,
  GET_CATEGORIES,
  FILTER_BY_CATEGORY,
  SEARCH_PROFESSIONALS,
} from "../actionsTypes/actionsType";

const initialState = {
  //este estado es solo una prueba para iniciar redux, puede modificarse cuando se desee los amu <3
  suppliers: [],
  categories: [],
  filteredCategories: [],
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SUPPLIERS:
      return {
        ...state,
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
    case "RESET_CATEGORY_FILTER":
      return {
        ...state,
        filteredCategories: [],
      };
    case SEARCH_PROFESSIONALS:
      return {
        ...state,
        professionals: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
