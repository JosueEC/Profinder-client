import { Link } from "react-router-dom";
import { useState } from "react";
import Styles from "./Navbar.module.css";

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
    <nav>
      <div className={Styles.logoContainer}>
        <Link to="/" className={Styles.logo}>
          Logo
        </Link>
      </div>
      {/* <span className={Styles.textContainer}>Tu Solucion a un Click</span> */}

      <div className={Styles.comoFuncionaContainer}>
        <Link className={Styles.comoFunciona} to="/comofunciona">
          {" "}
          ¿ Cómo funciona ?
        </Link>
      </div>

      <div className={Styles.menuContainer}>
        <ul className={Styles.menu}>
          <li>
            <a
              href="#"
              onClick={toggleDropdown}
              className={Styles.dropdownToggle}
            >
              Registrate ▼
            </a>
            {isOpen && (
              <ul>
                <li className={Styles.liDropdown}>
                  <a href="#" onClick={() => handleOptionClick("cliente")}>
                    Soy Cliente
                  </a>
                </li>
                <li className={Styles.liDropdown}>
                  <a href="#" onClick={() => handleOptionClick("profesional")}>
                    Soy Profesional
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className={Styles.loginContainer}>
        <Link to="/selectlogin" className={Styles.loginLink}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
