import { useState } from 'react';
import styles from './Categories.module.css';
import { useLocation } from 'react-router-dom';

// Importa las imágenes de ocupación
import educacionIcon from '../../assets/categoriesIcons/educación.png';
import saludIcon from '../../assets/categoriesIcons/salud.png';
import desarrolloSoftwareIcon from '../../assets/categoriesIcons/desarrollo-de-software.png';
import comercioIcon from '../../assets/categoriesIcons/comercio.png';
import hobbieIcon from '../../assets/categoriesIcons/hobbie.png';
import ingenieriaIcon from '../../assets/categoriesIcons/ingeniería.png';
// ... importa otras imágenes de ocupación según sea necesario ...

const Categories = () => {
  const categories = [
    {
      "id": 1,
      "name": "Educación",
      "Ocupations": [
        {
          "id": "d0d2643e-f8b4-42d5-874c-629c73659192",
          "name": "Docente"
        },
        {
          "id": "3647a0e7-5ae9-47a1-8875-8fd8f14ff3ef",
          "name": "Docente universitario"
        },
        {
          "id": "ee424a28-943a-4a5f-a74f-4b5829fe62c2",
          "name": "Docente educación física"
        },
        {
          "id": "a97ce511-83f8-4e5e-8967-1e85f93b1940",
          "name": "Docente primaria"
        }
      ]
    },
    {
      "id": 5,
      "name": "Salud",
      "Ocupations": [
        {
          "id": "016c45c9-3d39-4a69-8428-92d39104c3a0",
          "name": "Médico forense"
        },
        {
          "id": "4ea3c4b7-363a-405c-a0f0-2e8b0f2053df",
          "name": "Doctor cardiovascular"
        },
        {
          "id": "519a8458-5133-4242-8dbe-853b2e75ff58",
          "name": "Doctor quimioterapia"
        }
      ]
    },
    {
      "id": 2,
      "name": "Desarrollo de software",
      "Ocupations": [
        {
          "id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
          "name": "Programador front-end angular tailwindcss"
        },
        {
          "id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
          "name": "Programador back-end mongodb"
        },
        {
          "id": "06687775-c6b8-4a79-9460-e2cb3c264aa1",
          "name": "Programador fullstack mern"
        }
      ]
    },
    {
      "id": 4,
      "name": "Comercio",
      "Ocupations": [
        {
          "id": "ead4986d-1535-4e37-82e5-693475bd752a",
          "name": "Cajera"
        },
        {
          "id": "2db233da-bdfb-4546-b636-0dc2a44d83e8",
          "name": "Carnicero"
        }
      ]
    },
    {
      "id": 3,
      "name": "Hobbie",
      "Ocupations": [
        {
          "id": "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
          "name": "Niñero/a"
        }
      ]
    },
    {
      "id": 6,
      "name": "Ingeniería",
      "Ocupations": [
        {
          "id": "0c986a47-b160-48e1-a77f-ba205b8b5c28",
          "name": "Ingeniería en memes"
        },
        {
          "id": "1d84e54d-b081-4dd5-84e6-3da518e2edb6",
          "name": "Ingeniería en software"
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCategoryLinkClick = (categoryId) => {
    // Actualiza la ubicación actual sin redirigir
    const newLocation = {
      ...location,
      pathname: `/category/${categoryId}`,
    };
    window.history.pushState(null, '', newLocation.pathname);
  };

  return (
    <div className={styles.categoryContainer}>
      <h2 className={styles.categoryh2}>CATEGORIAS</h2>
      <p className={styles.categoryDescription}>
        Aquí se renderizarán las categorías y sus filtros y ordenamientos. Habrá posibilidad de filtrar por categoría, por profesión, por género, por puntuación.
      </p>

      <div className={styles.categoryLabels}>
        {categories.map((category) => (
          <div key={category.id} className={styles.categoryItem}>
            <div
              className={styles.categoryItem}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name === 'Educación' && (
                <img
                  src={educacionIcon}
                  alt={category.name}
                  className={styles.logo}
                />
              )}
              {category.name === 'Salud' && (
                <img
                  src={saludIcon}
                  alt={category.name}
                  className={styles.logo}
                />
              )}
              {category.name === 'Desarrollo de software' && (
                <img
                  src={desarrolloSoftwareIcon}
                  alt={category.name}
                  className={styles.logo}
                />
              )}
              {category.name === 'Comercio' && (
                <img
                  src={comercioIcon}
                  alt={category.name}
                  className={styles.logo}
                />
              )}
              {category.name === 'Hobbie' && (
                <img
                  src={hobbieIcon}
                  alt={category.name}
                  className={styles.logo}
                />
              )}
              {category.name === 'Ingeniería' && (
                <img
                  src={ingenieriaIcon}
                  alt={category.name}
                  className={styles.logo}
                />
              )}
              {/* ... renderiza otras imágenes de ocupación según sea necesario ... */}

              <p>{category.name}</p>
            </div>

            {selectedCategory && selectedCategory.id === category.id && (
              <div className={styles.categoryBox}>
                <h3>Ocupaciones:</h3>
                <div className={styles.categoryLabels}>
                  {category.Ocupations.map((occupation) => (
                    <div key={occupation.id} className="occupationCard">
                      {occupation.name}
                    </div>
                  ))}
                </div>
                <button onClick={() => handleCategoryLinkClick(category.id)}>
                  Ver más
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;