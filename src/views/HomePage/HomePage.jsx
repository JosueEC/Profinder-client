import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_all } from '../../services/redux/actions/actions'
import TopPro from "../../components/Home/TopPro/TopPro";
import FeaturesGrid from "../../components/Home/FeaturesGrid/FeaturesGrid";
import TestimonialCarrousel from "../../components/Home/TestimonialCarrousel/TestimonialCarrousel";
import HowItWorks from "../../components/Home/HowItWorks/HowItWorks";
import styles from "./HomePage.module.css";
import educacionIcon from "../../assets/categoriesIcons/educación.png";
import saludIcon from "../../assets/categoriesIcons/salud.png";
import desarrolloSoftwareIcon from "../../assets/categoriesIcons/desarrollo-de-software.png";
import comercioIcon from "../../assets/categoriesIcons/comercio.png";
import hobbieIcon from "../../assets/categoriesIcons/hobbie.png";
import ingenieriaIcon from "../../assets/categoriesIcons/ingeniería.png";
import { useSelector } from 'react-redux';
const HomePage = () => {
 const profesiones = useSelector((state) => state.profesiones);
  console.log(profesiones);
   const dispatch = useDispatch();
   useEffect(() => {
    dispatch(get_all());
   }, [dispatch]);
  
  
 // console.log(data);
  const categories = [
    {
      id: 1,
      name: "Educación",
      Ocupations: [
        {
          id: "d0d2643e-f8b4-42d5-874c-629c73659192",
          name: "Docente",
        },
        {
          id: "3647a0e7-5ae9-47a1-8875-8fd8f14ff3ef",
          name: "Docente universitario",
        },
        {
          id: "ee424a28-943a-4a5f-a74f-4b5829fe62c2",
          name: "Docente educación física",
        },
        {
          id: "a97ce511-83f8-4e5e-8967-1e85f93b1940",
          name: "Docente primaria",
        },
      ],
    },
    {
      id: 5,
      name: "Salud",
      Ocupations: [
        {
          id: "016c45c9-3d39-4a69-8428-92d39104c3a0",
          name: "Médico forense",
        },
        {
          id: "4ea3c4b7-363a-405c-a0f0-2e8b0f2053df",
          name: "Doctor cardiovascular",
        },
        {
          id: "519a8458-5133-4242-8dbe-853b2e75ff58",
          name: "Doctor quimioterapia",
        },
      ],
    },
    {
      id: 2,
      name: "Desarrollo de software",
      Ocupations: [
        {
          id: "4d9c625a-bc09-441f-88fa-bf004a8c2521",
          name: "Programador front-end angular tailwindcss",
        },
        {
          id: "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
          name: "Programador back-end mongodb",
        },
        {
          id: "06687775-c6b8-4a79-9460-e2cb3c264aa1",
          name: "Programador fullstack mern",
        },
      ],
    },
    {
      id: 4,
      name: "Comercio",
      Ocupations: [
        {
          id: "ead4986d-1535-4e37-82e5-693475bd752a",
          name: "Cajera",
        },
        {
          id: "2db233da-bdfb-4546-b636-0dc2a44d83e8",
          name: "Carnicero",
        },
      ],
    },
    {
      id: 3,
      name: "Hobbie",
      Ocupations: [
        {
          id: "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
          name: "Niñero/a",
        },
      ],
    },
    {
      id: 6,
      name: "Ingeniería",
      Ocupations: [
        {
          id: "0c986a47-b160-48e1-a77f-ba205b8b5c28",
          name: "Ingeniería en memes",
        },
        {
          id: "1d84e54d-b081-4dd5-84e6-3da518e2edb6",
          name: "Ingeniería en software",
        },
      ],
    },
  ];

  return (
    <div>
      <section className={`${styles.howItWorks} ${styles.fullHeight}`}>
        <HowItWorks />
      </section>
      <section className={`${styles.featuresGrid} ${styles.fullHeight}`}>
        <FeaturesGrid />
      </section>
      <section className={`${styles.publicOpinion} ${styles.fullHeight}`}>
        <TestimonialCarrousel />
      </section>
      <section className={`${styles.Categories} ${styles.fullHeight}`}>
        <h2>CATEGORIAS</h2>

        <div className={styles.categoryLabels}>
          {categories.map((categories, index) => (
            <NavLink
              to={`/categories`} // Reemplaza la ruta con la ruta correcta ///category/${category}
              key={index}
              className={styles.categoryItem}
              activeClassName={styles.active} // Agrega estilos para el enlace activo si lo deseas
            >
              {categories.name === "Educación" && (
                <img
                  src={educacionIcon}
                  alt={categories.name}
                  className={styles.logo}
                />
              )}
              {categories.name === "Salud" && (
                <img
                  src={saludIcon}
                  alt={categories.name}
                  className={styles.logo}
                />
              )}
              {categories.name === "Desarrollo de software" && (
                <img
                  src={desarrolloSoftwareIcon}
                  alt={categories.name}
                  className={styles.logo}
                />
              )}
              {categories.name === "Comercio" && (
                <img
                  src={comercioIcon}
                  alt={categories.name}
                  className={styles.logo}
                />
              )}
              {categories.name === "Hobbie" && (
                <img
                  src={hobbieIcon}
                  alt={categories.name}
                  className={styles.logo}
                />
              )}
              {categories.name === "Ingeniería" && (
                <img
                  src={ingenieriaIcon}
                  alt={categories.name}
                  className={styles.logo}
                />
              )}

              <p>{categories.name}</p>
            </NavLink>
          ))}
        </div>
      </section>

      <section className={`${styles.serviceOffers} ${styles.fullHeight}`}>
        <TopPro />
        <h2>Render de profesionales recomendados a modo de introducción.</h2>
        <p>Card con nombre, breve descripción que el servicio ofrece</p>
      </section>
      
    </div>
  );
};

export default HomePage;
