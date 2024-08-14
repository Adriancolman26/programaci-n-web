import React from "react";

const Projects = () => (
  <section id="projects" className="projects">
    <h2 className="center titulo">Proyectos</h2>
    <div className="project Margen">
      <div className="division">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/bombonera.png" alt="" />
        </div>
        <div>
          <h3 className="center">Proyecto 1</h3>
          <p className="center">
            Los planos digitales para una bombonera moderna combinan diseño y
            funcionalidad, destacando vitrinas iluminadas para una presentación
            elegante de dulces y chocolates. La disposición eficiente del
            mobiliario asegura un flujo cómodo tanto para clientes como para el
            personal. La iluminación resalta los productos, mientras que los
            aspectos técnicos, como ventilación y climatización, garantizan el
            confort y la frescura. La decoración refleja el estilo deseado, y la
            accesibilidad y seguridad están cuidadosamente planificadas para una
            experiencia de compra óptima.
          </p>
        </div>
      </div>
    </div>
    <div className="project Margen">
      <div className="division">
        <div>
          <img src="armas.png" alt="" />
        </div>
        <div>
          <h3 className="center">Proyecto 2</h3>
          <p className="center">
            El catálogo de armas de presión de aire ofrece una variedad de
            modelos diseñados para precisión y rendimiento. Incluye información
            detallada sobre cada arma, desde especificaciones técnicas hasta
            características de seguridad. El catálogo está organizado para
            facilitar la búsqueda, destacando las opciones disponibles y sus
            aplicaciones específicas, y proporciona una visión clara de las
            capacidades y ventajas de cada modelo.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
