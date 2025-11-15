import React, { useState } from "react";

export default function GalleryBootstrapReact({ galleriesProp }) {
  const defaultGalleries = [
    {
      key: "A",
      title: "FOTOS A",
      caption:
        "Organizados por intereses y creatividad, formamos los grupos y comenzamos a dar forma a nuestra propia edición de la revista PROA CIT.",
      images: [
        "/A1.jpg",
        "/AA1.jpg",
        "/AAAA1.jpg",
        "/AAAAA1.jpg",
      ],
    },
    {
      key: "B",
      title: "FOTOS B",
      caption:
        "Los grupos compartieron sus avances con la profesora, recibiendo consejos y correcciones para seguir mejorando cada propuesta de la revista.",
      images: ["/BB2.jpg", "/BBB2.jpg", "/BBBBB2.jpg"],
    },
    {
      key: "C",
      title: "FOTOS C",
      caption:
        "Los grupos salieron a entrevistar y recopilar información, ampliando sus investigaciones para enriquecer los contenidos de la revista.",
      images: ["/CCC3.PNG", "/CCCCC3.jpg"],
    },
    {
      key: "D",
      title: "FOTOS D",
      caption:
        "Luego de la presentación de la revista en Feria de Ciencias, junto a la profesora coordinamos las nuevas cosas que debíamos agregar a la revista.",
      images: [
        "/IMG_8134.jpg",
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

  console.log("[v0] Galleries data:", galleries);

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

    <div className="px-4 my-8">
      <div className="text-center mb-12">

        <h1 className="text-5xl font-bold text-black">Galería</h1>
      </div>
     
      {galleries.map((g) => {
        console.log("[v0] Gallery caption:", g.caption);
       
        return (
          <section key={g.key} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground">{g.title}</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Array.isArray(g.images) && g.images.length > 0 ? (
                g.images.map((src, idx) => (
                  <div key={idx} className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]">
                    <button
                      type="button"
                      className="w-full p-0 border-0 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-200"
                      onClick={() =>
                        openModal(src, `${g.title} — Imagen ${idx + 1}`)
                      }
                      style={{ background: "transparent" }}
                    >
                      <img
                        src={src || "/placeholder.svg"}
                        alt={`${g.title} ${idx + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </button>
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-8">
                  <p className="text-muted-foreground">No hay imágenes para mostrar.</p>
                </div>
              )}
            </div>

            {g.caption && (
              <div className="text-center max-w-3xl mx-auto px-4">
                <p className="text-lg text-gray-800 leading-relaxed bg-gray-100 p-6 rounded-lg border border-gray-300">
                  {g.caption}
                </p>
              </div>
            )}
          </section>
        );
      })}

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-card rounded-lg shadow-2xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-xl font-semibold text-foreground">{modalCaption}</h3>
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-muted"
                aria-label="Close"
                onClick={closeModal}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 flex items-center justify-center bg-muted/30">
              <img
                src={modalImage || "/placeholder.svg"}
                alt={modalCaption}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="flex justify-end p-4 border-t border-border">
              <button
                type="button"
                className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors font-medium"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
