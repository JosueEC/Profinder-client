import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../services/redux/actions/actions';

import styles from "./CategoriesSection.module.css";

import tecnologiaIcon from "../../../assets/categoriesIcons/educación.png";
import arteDiseñoIcon from "../../../assets/categoriesIcons/salud.png";
import consultoriaIcon from "../../../assets/categoriesIcons/desarrollo-de-software.png";
import serviciosIcon from "../../../assets/categoriesIcons/comercio.png";
import manualidadesIcon from "../../../assets/categoriesIcons/hobbie.png";
import ingenieriaIcon from "../../../assets/categoriesIcons/ingeniería.png";

const CategoriesSection = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case "Tecnología":
        return tecnologiaIcon;
      case "Arte y Diseño":
        return arteDiseñoIcon;
      case "Consultoría":
        return consultoriaIcon;
      case "Servicios":
        return serviciosIcon;
      case "Manualidades":
        return manualidadesIcon;
      case "Ingeniería":
        return ingenieriaIcon;
      default:
        return null;
    }
  };

  return (
    <section className={`${styles.Categories} ${styles.fullHeight}`}>
      <h2>CATEGORIAS</h2>
      <div className={styles.categoryLabels}>
        {categories.map((category, index) => {
          const categoryIcon = getCategoryIcon(category.nombre);

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
  );
};

export default CategoriesSection;