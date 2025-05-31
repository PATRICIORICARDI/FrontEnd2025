import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import "./HomePage.scss";
import type { MenuItem } from "primereact/menuitem";

const HomePage: React.FC = () => {
  // Modelo de menú usando MenuItem[]
  const menuItems: MenuItem[] = [
    {
      label: "Inicio",
      icon: "pi pi-fw pi-home",
      command: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      label: "Menú",
      icon: "pi pi-fw pi-list",
      command: () => {
        const section = document.getElementById("menu-section");
        section?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Ubicación",
      icon: "pi pi-fw pi-map-marker",
      command: () => {
        const section = document.getElementById("location-section");
        section?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Reseñas",
      icon: "pi pi-fw pi-comments",
      command: () => {
        const section = document.getElementById("reviews-section");
        section?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Contacto",
      icon: "pi pi-fw pi-envelope",
      command: () => {
        const footer = document.getElementById("footer");
        footer?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  // Ejemplo de datos para las reseñas
  const reviews = [
    {
      name: "Ana García",
      rating: 5,
      comment:
        "¡El mejor pato asado que he probado en la ciudad! La piel crujiente y la carne jugosa. ¡Altamente recomendado!",
    },
    {
      name: "Luis Martínez",
      rating: 4,
      comment:
        "Excelente sabor, servicio muy amable. Volveré por más muy pronto.",
    },
    {
      name: "María López",
      rating: 5,
      comment:
        "La experiencia completa: ambiente acogedor, precio justo y sabor inigualable. ¡Mis amigos quedaron fascinados!",
    },
  ];

  return (
    <div className="home-page">
      {/* -------------------- Navbar -------------------- */}
      <nav className="navbar">
        <Menubar model={menuItems} className="menubar-custom" />
      </nav>

      {/* ------------------ Sección Hero ------------------ */}
      <section className="hero-section" id="hero-section">
        <div className="overlay">
          <h1 className="hero-title">¡Bienvenido a Pato Asado Express!</h1>
          <p className="hero-subtitle">
            Disfruta del auténtico pato asado con recetas tradicionales
          </p>
          <Button
            label="Ordena Ahora"
            icon="pi pi-shopping-cart"
            className="p-button-rounded p-button-lg hero-button"
            onClick={() => window.open("/menu", "_self")}
          />
        </div>
      </section>

      {/* --------------- Sección de Menú (placeholder) --------------- */}
      <section className="menu-section" id="menu-section">
        <h2>Nuestro Menú</h2>
        <p>En breve podrás ver todas nuestras especialidades de pato asado.</p>
        <img
          src="../public/menu.png"
          alt="Menú de especialidades"
          className="menu-image"
        />
      </section>

      {/* --------------- Sección de Ubicación --------------- */}
      <section className="location-section" id="location-section">
        <h2 className="section-title">¿Dónde nos encuentras?</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2138.1510769653646!2d-100.39476928837608!3d25.673709477673427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866295f4b8427dff%3A0x33d068574599460b!2sSofttek!5e0!3m2!1ses!2smx!4v1748706690625!5m2!1ses!2smx"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* --------------- Sección de Reseñas --------------- */}
      <section className="reviews-section" id="reviews-section">
        <h2 className="section-title">Reseñas de Nuestros Clientes</h2>
        <div className="reviews-container">
          {reviews.map((review, idx) => (
            <Card key={idx} className="review-card">
              <div className="review-header">
                <span className="pi pi-user user-icon" />
                <h3 className="reviewer-name">{review.name}</h3>
              </div>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={`pi pi-star${
                      i < review.rating ? "" : "-o"
                    } star-icon`}
                  ></i>
                ))}
              </div>
              <p className="review-comment">{review.comment}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* -------------------- Footer -------------------- */}
      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contacto</h3>
            <p>
              <i className="pi pi-map-marker" /> Calle Principal #123,
              Monterrey, NL
            </p>
            <p>
              <i className="pi pi-phone" /> +52 812 345 6789
            </p>
            <p>
              <i className="pi pi-envelope" /> info@patoasadoexpress.com
            </p>
          </div>
          <div className="social-media">
            <h3>Síguenos</h3>
            <a
              href="https://www.facebook.com/patoasadoexpress"
              target="_blank"
              rel="noreferrer"
            >
              <i className="pi pi-facebook facebook-icon" />
            </a>
            <a
              href="https://www.instagram.com/patoasadoexpress"
              target="_blank"
              rel="noreferrer"
            >
              <i className="pi pi-instagram instagram-icon" />
            </a>
            <a
              href="https://www.twitter.com/patoasadoexpr"
              target="_blank"
              rel="noreferrer"
            >
              <i className="pi pi-twitter twitter-icon" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Pato Asado Express. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
