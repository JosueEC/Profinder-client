import React, { useState } from 'react';
import styles from './Categories.module.css';
import SupplierCardsContainer from '../../components/SupplierCardsContainer/SupplierCardsContainer';
import { Heading } from '@chakra-ui/layout';


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

   // Estado para almacenar la ocupación seleccionada
   const [selectedOccupation, setSelectedOccupation] = useState('');

   // Manejador de cambio de selección de ocupación
   const handleOccupationChange = (event) => {
     setSelectedOccupation(event.target.value);
   };
 
   return (
     <div className={styles.categoryContainer}>
      <Heading
        className={styles.categoryh2}
        fontSize='4xl'
        bgGradient='linear(to-l, teal.300, green.400)' bgClip='text'>
        CATEGORIAS
      </Heading>
       <p className={styles.categoryDescription}>
         Aquí se renderizarán las categorías y sus filtros y ordenamientos. Habrá posibilidad de filtrar por categoría, por profesión, por género, por puntuación.
       </p>
 
       <div className={styles.categoryLabels}>
         {categories.map((category) => (
           <div key={category.id}>
             <div className={styles.categoryItem}>
               <img
                 //src={`../../assets/categoriesIcons/${category.name.toLowerCase()}.png`}
                 //alt={category.name}
                 //className={styles.logo}
               />
               <p className={styles.categoryLabel}>{category.name}</p>
             </div>
 
             {/* Menú desplegable de ocupaciones */}
             <select value={selectedOccupation} onChange={handleOccupationChange} className={styles.categorySelect}>
               <option value="">Seleccione una ocupación</option>
               {category.Ocupations.map((occupation) => (
                 <option key={occupation.id} value={occupation.name}>
                   {occupation.name}
                 </option>
               ))}
             </select>
           </div>
         ))}
       </div>
       <SupplierCardsContainer />
     </div>
   );
 };
 
 export default Categories;