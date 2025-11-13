export default function Entrevista() {
  return (
    <>
      <section className="w-full bg-white py-16 px-6 flex flex-col items-center text-center text-black">
        {/* Contenedor del contenido */}
        <div className="w-full text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">🎤 Entrevistas CIT</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              En esta sección compartimos las entrevistas realizadas por nuestro equipo sobre los distintos temas de la
              revista: <span className="font-semibold"> videojuegos, cocina, deporte y entretenimiento.</span>
              Cada entrevista busca mostrar distintas perspectivas, experiencias e historias que conectan con los ejes
              principales de nuestro proyecto{" "}
              <span className="font-semibold">CIT (Ciencia, Innovación y Tecnología)</span>.
            </p>
          </div>

          <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Ejemplo de video embebido */}
            <div className="aspect-video w-full max-w-md rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Entrevista 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="aspect-video w-full max-w-md rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="Entrevista 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="aspect-video w-full max-w-md rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/oHg5SJYRHA0"
                title="Entrevista 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
