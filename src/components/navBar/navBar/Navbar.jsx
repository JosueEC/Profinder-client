//import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  // Estado para controlar la visibilidad del desplegable
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la visibilidad del desplegable
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Función para manejar el clic en una opción
  const handleOptionClick = (option) => {
    console.log("Selected option:", option);
    setIsOpen(false); // Cerrar el desplegable al seleccionar una opción
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.logo}>
            Logo
          </Link>
          <Link to="/comofunciona" className={styles.navbarLink}>
            ¿Cómo funciona?
          </Link>
          <Link to="/login" className={styles.navbarLink}>
            Registro Profesional
          </Link>
          <ul className={styles.dropdown}>
            <li className={styles.dropdownItem}>
              <a
                href="#"
                onClick={toggleDropdown}
                className={styles.dropdownToggle}
              >
                Regístrate ▼
              </a>
              {isOpen && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleOptionClick("cliente")}
                      className={styles.dropdownMenuItem}
                    >
                      Soy Cliente
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleOptionClick("profesional")}
                      className={styles.dropdownMenuItem}
                    >
                      Soy Profesional
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <Link to="#" className={styles.loginLink}>
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
