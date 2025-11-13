import React, { useState } from "react";

export default function GalleryBootstrapReact({ galleriesProp }) {
  const defaultGalleries = [
    {
      key: "A",
      title: "FOTOS A",
      caption:
        "Organizados por intereses y creatividad, formamos los grupos y comenzamos a dar forma a nuestra propia edición de la revista PROA CIT.",
      images: [
        "public/A1.jpg",
        "public/AA1.jpg",
        "public/AAAA1.jpg",
        "public/AAAAA1.jpg",
      ],
    },
    {
      key: "B",
      title: "FOTOS B",
      caption:
        "Los grupos compartieron sus avances con la profesora, recibiendo consejos y correcciones para seguir mejorando cada propuesta de la revista.",
      images: ["public/BB2.jpg", "public/BBB2.jpg", "public/BBBBB2.jpg"],
    },
    {
      key: "C",
      title: "FOTOS C",
      caption:
        "Los grupos salieron a entrevistar y recopilar información, ampliando sus investigaciones para enriquecer los contenidos de la revista.",
      images: ["public/CCC3.PNG", "public/CCCCC3.jpg"],
    },
    {
      key: "D",
      title: "FOTOS D",
      caption:
        "Luego de la presentación de la revista en Feria de Ciencias, junto a la profesora coordinamos las nuevas cosas que debíamos agregar a la revista.",
      images: [
        "https://via.placeholder.com/800x600?text=Foto+D+1",
        "https://via.placeholder.com/800x600?text=Foto+D+2",
      ],
    },
  ];

  const galleries =
    galleriesProp && Array.isArray(galleriesProp)
      ? galleriesProp
      : defaultGalleries;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalCaption, setModalCaption] = useState("");

  function openModal(imgUrl, caption) {
    setModalImage(imgUrl);
    setModalCaption(caption || "");
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalImage(null);
    setModalCaption("");
  }

  return (
    <div className="container my-4">
      {galleries.map((g) => (
        <section key={g.key} className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div>
              <h4 className="mb-1">{g.title}</h4>
              <p className="mb-0 text-muted" style={{ maxWidth: "70ch" }}>
                {g.caption}
              </p>
            </div>
          </div>

          <div className="row g-3">
            {Array.isArray(g.images) && g.images.length > 0 ? (
              g.images.map((src, idx) => (
                <div key={idx} className="col-6 col-sm-4 col-md-3">
                  <div className="card h-100 shadow-sm overflow-hidden">
                    <button
                      type="button"
                      className="btn p-0 border-0 text-start w-100"
                      onClick={() =>
                        openModal(src, `${g.title} — Imagen ${idx + 1}`)
                      }
                      style={{ background: "transparent" }}
                    >
                      <img
                        src={src}
                        alt={`${g.title} ${idx + 1}`}
                        className="card-img-top img-fluid"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    </button>
                    <div className="card-body py-2 px-2">
                      <small className="text-muted">
                        {g.title} — {idx + 1}
                      </small>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p className="text-muted">No hay imágenes para mostrar.</p>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Simple modal */}
      {modalOpen && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalCaption}</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={modalImage}
                  alt={modalCaption}
                  className="img-fluid"
                  style={{
                    maxHeight: "80vh",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
