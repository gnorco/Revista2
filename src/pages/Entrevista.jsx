import { useEffect, useRef, useState } from "react";
import "./Entrevistas.css";

export default function Entrevista() {
  const bloqueRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (bloqueRef.current) observer.observe(bloqueRef.current);
    return () => {
      if (bloqueRef.current) observer.unobserve(bloqueRef.current);
    };
  }, []);

  return (
    <section className="entrevista-section">
      <div className="overlay-fondo"></div>

      <div className="contenido">
        <div
          ref={bloqueRef}
          className={`bloque-intro ${isVisible ? "visible" : ""}`}
        >
          <div className="bloque-intro-inner">
            <h2>
              <span className="icono-microfono">🎤</span> Entrevistas CIT
            </h2>
            <p>
              En esta sección compartimos las entrevistas realizadas por nuestro
              equipo sobre los distintos temas de la revista:{" "}
              <span className="negrita">
                videojuegos, cocina, deporte y entretenimiento.
              </span>
              Cada entrevista busca mostrar distintas perspectivas, experiencias
              e historias que conectan con los ejes principales de nuestro
              proyecto{" "}
              <span className="negrita">
                CIT (Ciencia, Innovación y Tecnología)
              </span>
              .
            </p>
          </div>
        </div>

        <div className="videos-grid">
          <div className="video-item">
            <div className="video-card">
              <div className="video-box">
                <div className="pin-icon">📌</div>
                <img className="video-frame" src="/Hongos.png" alt="Hongos" />
              </div>
              <div className="video-content left-align">
                <div className="video-subtitle">
                  <span className="podcast-badge">Podcast</span>
                </div>
                <h3 className="video-title">Hongos Pleurotus Hostreatus</h3>
                <p className="video-desc">
                  Explora el fascinante mundo del hongo Pleurotus ostreatus: sus
                  propiedades, cultivo y beneficios para la salud.
                </p>
                <a
                  href="https://open.spotify.com/episode/0NAqMz6WnAgmjSRiLgUWdW?si=0d0fOMWrRDS0IHb5f00jZQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="video-button">Escuchar Ahora!</button>
                </a>
                <div className="video-arrow">➜</div>
              </div>
            </div>
          </div>

          <div className="video-item">
            <div className="video-card">
              <div className="video-box">
                <div className="pin-icon">📌</div>
                <img className="video-frame" src="/Arduinos.png" alt="Arduinos" />
              </div>
              <div className="video-content left-align">
                <div className="video-subtitle">
                  <span className="podcast-badge">Podcast</span>
                </div>
                <h3 className="video-title">Arduinos y Sensores</h3>
                <p className="video-desc">
                  Descubrí el mundo de los Arduinos y sensores: proyectos,
                  experimentos y tips para crear tus propios dispositivos.
                </p>
                <a
                  href="https://open.spotify.com/episode/4c957LPFbHtIKZcBoWHV7v?si=F0yzfc7aSeuDSNA2b82eyQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="video-button">Escuchar Ahora!</button>
                </a>
                <div className="video-arrow">➜</div>
              </div>
            </div>
          </div>
        </div>

        <div className="destacadas-header">
          <div className="destacadas-icon">📰</div>
          <h2 className="destacadas-title">Todas nuestras Entrevistas</h2>
        </div>

        <div className="destacadas-sub">
          <div className="destacadas-line"></div>
          <span className="destacadas-text">
            Explora nuestro contenido más reciente
          </span>
        </div>

        <div className="videos-grid">
          <div className="video-item">
            <div className="video-card">
              <div className="video-box">
                <img className="video-frame" src="/Podcast1.png" alt="Podcast1" />
              </div>
              <div className="video-content left-align">
                <div className="video-subtitle">
                  <span className="podcast-badge">Entrevista</span>
                </div>
                <h3 className="video-title">Dr. Maria Gonzalez</h3>
                <b className="video-desc">
                  <span style={{ color: "#0099ffff" }}>Cientifica de Datos</span>
                </b>
                <p className="video-desc">Conversamos sobre el futuro de la IA.</p>
                <a
                  href="https://open.spotify.com/episode/5KHw62i4RvZpia46oefvBD?si=5--lNKBxQ1SHbUjiXummfQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="video-button">Escuchar Ahora!</button>
                </a>
                <div className="video-arrow">➜</div>
              </div>
            </div>
          </div>

          <div className="video-item">
            <div className="video-card">
              <div className="video-box">
                <img className="video-frame" src="/Podcast2.png" alt="Podcast2" />
              </div>
              <div className="video-content left-align">
                <div className="video-subtitle">
                  <span className="podcast-badge">Entrevista</span>
                </div>
                <h3 className="video-title">Carlos Mendez</h3>
                <b className="video-desc">
                  <span style={{ color: "#0099ffff" }}>Desarrollador de VideoJuegos</span>
                </b>
                
                <p className="video-desc">
                  Análisis profundo con invitados especiales.
                </p>
                <a
                  href="https://open.spotify.com/episode/14TQGNBfu6caBI6tGoJWjW?si=RcBf4Gd4SnmHkobRtoZKgw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="video-button">Escuchar Ahora!</button>
                </a>
                <div className="video-arrow">➜</div>
              </div>
            </div>
          </div>

          <div className="video-item">
            <div className="video-card">
              <div className="video-box">
                <img className="video-frame" src="/Podcast3.png" alt="Podcast3" />
              </div>
              <div className="video-content left-align">
                <div className="video-subtitle">
                  <span className="podcast-badge">Entrevista</span>
                </div>
                <h3 className="video-title">Chef Roberto Silva</h3>
                <b className="video-desc">
                  <span style={{ color: "#0099ffff" }}>Chef Molecular</span>
                </b>
                <p className="video-desc">
                  La química detrás de los sabores modernos.
                </p>
                <a
                  href="https://open.spotify.com/episode/2RZGheXDrHBA1YBhZCi8z6?si=XiGbvKEKS7KK56ldmu-1kQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="video-button">Escuchar Ahora!</button>
                </a>
                <div className="video-arrow">➜</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
