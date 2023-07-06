import styles from './Categories.module.css';
import {NavLink} from 'react-router-dom'
import logoCarpintero from '../../assets/categoriesIcons/carpintero.png';
import logoElectricista from '../../assets/categoriesIcons/electricista.png';
import logoFontanero from '../../assets/categoriesIcons/fontanero.png';
import logoMecanico from '../../assets/categoriesIcons/mecanico.png';
import logoObrero from '../../assets/categoriesIcons/obrero.png';
import logoPanadero from '../../assets/categoriesIcons/panadero.png';
import logoPeluquero from '../../assets/categoriesIcons/peluquero.png';
import logoSoldador from '../../assets/categoriesIcons/soldador.png';


const categoryNames = [
    "Carpintero",
    "Electricista",
    "Fontanero",
    "Mecánico",
    "Obrero",
    "Panadero",
    "Peluquero",
    "Soldador"
  ];
  
  const categoryLogos = [
    logoCarpintero,
    logoElectricista,
    logoFontanero,
    logoMecanico,
    logoObrero,
    logoPanadero,
    logoPeluquero,
    logoSoldador
  ];


const Categories = () => {
  return (
    <div className={styles.categoryContainer}>
        <h2 className={styles.categoryh2}>CATEGORIAS</h2>
        <p className={styles.categoryDescription}>Aqui se renderizaran las categorias y sus filtros y ordenamientos. 
            Habrá posibiliad de filtrar por categoría, por profesión, por género, por puntuación</p>

        <div className={styles.categoryLabels}>
            {categoryNames.map((category, index) => (
                <NavLink
                    to={`/categories`} // Reemplaza la ruta con la ruta correcta ///category/${category}
                    key={index}
                    className={styles.categoryItem}
                    activeClassName={styles.active} // Agrega estilos para el enlace activo si lo deseas
                >
                    <img src={categoryLogos[index]} alt={category} className={styles.logo} />
                    <p>{category}</p>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default Categories