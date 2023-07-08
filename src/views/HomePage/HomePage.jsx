import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_all, getAllCategories } from '../../services/redux/actions/actions';

import TopPro from "../../components/Home/TopPro/TopPro";
import FeaturesGrid from "../../components/Home/FeaturesGrid/FeaturesGrid";
import TestimonialCarrousel from "../../components/Home/TestimonialCarrousel/TestimonialCarrousel";
import HowItWorks from "../../components/Home/HowItWorks/HowItWorks";

import styles from "./HomePage.module.css";
import tecnologiaIcon from "../../assets/categoriesIcons/educación.png";
import arteDiseñoIcon from "../../assets/categoriesIcons/salud.png";
import consultoriaIcon from "../../assets/categoriesIcons/desarrollo-de-software.png";
import serviciosIcon from "../../assets/categoriesIcons/comercio.png";
import manualidadesIcon from "../../assets/categoriesIcons/hobbie.png";
import ingenieriaIcon from "../../assets/categoriesIcons/ingeniería.png";



const HomePage = () => {
  const profesiones = useSelector((state) => state.profesiones);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(get_all());
  }, [dispatch]);

  return (
    <div>
      <section className={`${styles.howItWorks} ${styles.fullHeight}`}>
        <HowItWorks />
        
      </section>
      <div className={styles.divider} />
      <section className={`${styles.featuresGrid} ${styles.fullHeight}`}>
        <FeaturesGrid />
        
      </section>

      <section className={`${styles.publicOpinion} ${styles.fullHeight}`}>
        <TestimonialCarrousel />
        
      </section>

      <section className={`${styles.Categories} ${styles.fullHeight}`}>
        <h2>CATEGORIAS</h2>
        <div className={styles.categoryLabels}>
          {categories.map((category, index) => {
            let categoryIcon;
            switch (category.nombre) {
              case "Tecnología":
                categoryIcon = tecnologiaIcon;
                break;
              case "Arte y Diseño":
                categoryIcon = arteDiseñoIcon;
                break;
              case "Consultoría":
                categoryIcon = consultoriaIcon;
                break;
              case "Servicios":
                categoryIcon = serviciosIcon;
                break;
              case "Manualidades":
                categoryIcon = manualidadesIcon;
                break;
              default:
                categoryIcon = null;
            }

            return (
              <NavLink
                to={`/categories`} // Reemplaza la ruta con la ruta correcta
                key={index}
                className={styles.categoryItem}
                activeClassName={styles.active}
              >
                {categoryIcon && (
                  <img
                    src={categoryIcon}
                    alt={category.nombre}
                    className={styles.logo}
                  />
                )}
                <p>{category.nombre}</p>
              </NavLink>
            );
          })}
        </div>
        
      </section>

      <section className={`${styles.serviceOffers} ${styles.fullHeight}`}>
        <TopPro />
        
      </section>
    </div>
  );
};

export default HomePage;