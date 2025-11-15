import React, { useState, useEffect } from 'react';

const Cocina = () => {
  const [selectedRecipeType, setSelectedRecipeType] = useState(null);
  const [expandedRecipe, setExpandedRecipe] = useState(null);
  const [showRecetario, setShowRecetario] = useState(false);
  const [timelineOrder, setTimelineOrder] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  const tecnicas = [
    {
      nombre: "Cocina a bajas temperaturas",
      descripcion: "Cocinar lentamente para preservar sabor, textura y nutrientes.",
    },
    { nombre: "Técnicas de construcción", descripcion: "Descomponer y reorganizar platos para nuevas presentaciones." },
    { nombre: "Esferificación", descripcion: "Crear esferas líquidas comestibles con gelificación." },
    { nombre: "Cocina molecular", descripcion: "Uso de ciencia y química para transformar alimentos." },
    { nombre: "Fermentación avanzada", descripcion: "Fermentación controlada para sabores complejos y únicos." },
    { nombre: "Impresión 3D", descripcion: "Imprimir alimentos capa por capa, logrando formas y texturas imposibles." },
  ];

  const chefs = [
    { nombre: "Fernando Rivarola", especialidad: "Cocina de territorio / producto local" },
    { nombre: "René Redzepi", especialidad: "Fermentación / foraging (recolección silvestre)" },
    { nombre: "Ferran Adrià", especialidad: "Cocina molecular / deconstrucción" },
    { nombre: "Paco Pérez", especialidad: "Impresión 3D" },
  ];

  const curiosidades = [
    "La gastronomía evolucionó desde la recolección y caza prehistórica hasta convertirse en arte culinario.",
    "En el Siglo XX se popularizó, con escuelas de cocina y restaurantes de alta categoría.",
    "La impresión 3D de alimentos permite crear texturas imposibles de replicar manualmente.",
    "Apps de cocina y sensores permiten medir proteínas, carbohidratos y grasas en tiempo real.",
  ];

  // Timeline data
  const timelineData = [
    {
      id: 1,
      epoca: "Prehistoria",
      titulo: "Descubrimiento del fuego",
      descripcion: "Permite cocinar hacer la comida digestible y segura, marcando la primera revolución alimentaria.",
      color: "bg-orange-500"
    },
    {
      id: 2,
      epoca: "Grecia y Roma",
      titulo: "Primeras recetas",
      descripcion: "Se codifican las prácticas culinarias; surge Apicio (primer gastrónomo de Roma siglo 1 D.C) y sus primeros recetarios detallados.",
      color: "bg-purple-500"
    },
    {
      id: 3,
      epoca: "Edad Media",
      titulo: "Banquetes abundantes",
      descripcion: "La comida es un símbolo de estatus, caracterizada por grandes festines y el uso masivo de especias costosas.",
      color: "bg-amber-600"
    },
    {
      id: 4,
      epoca: "Renacimiento",
      titulo: "Influencia francesa",
      descripcion: "Se refinan las técnicas y se establecen las bases de la cocina cortesana y estructurada, liderada por Francia.",
      color: "bg-rose-500"
    },
    {
      id: 5,
      epoca: "Siglo XIX",
      titulo: "Gastronomía científica",
      descripcion: "Carême y Escoffier codifican la alta cocina francesa; la gastronomía se convierte en una disciplina profesional.",
      color: "bg-blue-500"
    },
    {
      id: 6,
      epoca: "Siglo XX",
      titulo: "Profesionalización",
      descripcion: "Se establecen las escuelas culinarias y el oficio de chef se convierte en una carrera global, enfocada en la innovación.",
      color: "bg-green-600"
    },
    {
      id: 7,
      epoca: "Siglo XXI",
      titulo: "Cocina moderna",
      descripcion: "La cocina moderna usa artículos tecnológicos para mejorar o facilitar las cosas.",
      color: "bg-cyan-500"
    }
  ];

  // Recipes data
  const recetas = {
    postres: [
      {
        nombre: "Mousse de Chocolate Exprés",
        ingredientes: ["200 g de chocolate semiamargo", "200 ml de crema de leche", "2 cucharadas de azúcar (opcional)"],
        preparacion: ["Derretí el chocolate en el microondas o al baño maría.", "Batí la crema hasta que espese un poco.", "Mezcla el chocolate con la crema (cuando el chocolate esté tibio).", "Llevá a la heladera por 1 hora.", "Se puede decorar con frutas o virutas de chocolate."]
      },
      {
        nombre: "Tarta fría de galletitas y dulce de leche",
        ingredientes: ["1 paquete de galletitas de vainilla", "400 g de dulce de leche", "250 g de crema de leche", "Leche (para mojar las galletitas)"],
        preparacion: ["Mezcla el dulce de leche con la crema.", "Moja las galletas en leche y forma una capa en una fuente.", "Agregá una capa de la mezcla, repetí las capas.", "Terminá con crema y llevá al frío 3 horas."]
      },
      {
        nombre: "Helado natural de banana y cacao",
        ingredientes: ["2 bananas maduras congeladas", "1 cucharada de cacao en polvo sin azúcar"],
        preparacion: ["Procesar las bananas congeladas con el cacao hasta que quede una crema.", "Serví enseguida o llevá al freezer 1 hora para una textura más firme."]
      },
      {
        nombre: "Yogur con granola y frutas frescas",
        ingredientes: ["1 taza de yogur natural o griego", "Frutas frescas (frutillas, manzana, kiwi, etc.)", "2 cucharadas de granola o avena tostada", "Miel o stevia (opcional)"],
        preparacion: ["En un vaso, poné una capa de yogur.", "Agregá frutas picadas y granola.", "Repetí las capas y endulzá a gusto."]
      },
      {
        nombre: "Torta en taza",
        ingredientes: ["4 cucharadas Harina leudante", "1 cucharadita Bicarbonato de sodio", "4 cucharadas Azúcar", "2 cucharadas de Cacao", "1 Huevo", "1 cucharadita Esencia de vainilla", "3 cucharadas Leche", "3 cucharadas Aceite de girasol"],
        preparacion: ["En una taza grande tipo jarra o mug, mezclar con una cuchara los ingredientes secos: harina, bicarbonato, azúcar y cacao.", "Agregar el huevo y batir bien con un tenedor hasta integrar.", "Verter la esencia de vainilla, la leche y el aceite. Revolver hasta obtener una mezcla homogénea.", "Cocinar en microondas a temperatura máxima durante 2 minutos, o hasta que esté firme al tacto."]
      }
    ],
    saladas: [
      {
        nombre: "Tarta de jamón y queso",
        ingredientes: ["1 tapa de tarta (hojaldre o criolla)", "150 g de jamón cocido", "150 g de queso cremoso", "2 huevos", "100 ml de crema o leche"],
        preparacion: ["Colocá la tapa en una tartera, previamente aceitada.", "Agregá el jamón y el queso.", "Mezclar los huevos con la crema y volcar sobre el relleno.", "Cocina en horno medio 25–30 min (o freidora de aire)."]
      },
      {
        nombre: "Fideos salteados con verduras",
        ingredientes: ["200 g de fideos (integrales o comunes)", "1 zanahoria", "1 morrón", "½ cebolla", "1 zucchini", "Salsa de soja y condimentos a gusto"],
        preparacion: ["Cocina los fideos y reservá.", "Saltea las verduras en una sartén con un poco de aceite.", "Agregá los fideos y condimenta."]
      },
      {
        nombre: "Papas al horno con queso y orégano",
        ingredientes: ["3 papas medianas", "Queso rallado o cremoso", "Aceite, sal y orégano"],
        preparacion: ["Cortá las papas en rodajas o cubos.", "Mezcla con aceite, sal y orégano.", "Hornea hasta que estén doradas (25–30 min).", "Sumale queso al final y dejá gratinar."]
      },
      {
        nombre: "Ensalada proteica de garbanzos",
        ingredientes: ["1 taza de garbanzos cocidos", "½ morrón", "½ tomate", "½ cebolla morada", "1 huevo duro (opcional)", "Aceite de oliva, limón y sal"],
        preparacion: ["Pica las verduras y mezclarlas con los garbanzos.", "Agregá el huevo picado.", "Condimenta con aceite, jugo de limón y sal."]
      },
      {
        nombre: "Wraps de pollo",
        ingredientes: ["2 tortillas (de trigo o maíz)", "½ pechuga de pollo cocida o salteada", "Lechuga, tomate, cebolla", "Mayonesa, mostaza o yogur natural"],
        preparacion: ["Dentro de las tortillas sumale el pollo y las verduras.", "Enrolla y calienta 1 min en sartén o microondas."]
      }
    ]
  };

  // Carreras y chefs cordobeses
  const carreras = [
    "Tecnicatura Universitaria en Gastronomía – Universidad Pública de Córdoba",
    "Licenciatura en Gastronomía – Universidad Siglo 21",
    "Tecnicatura en Alta Cocina – IGA Córdoba"
  ];

  const chefsCordobeses = [
    { nombre: "Miguel Escalante", instagram: "@miguescalante" },
    { nombre: "Lucas Galán", instagram: "@lucasgalan_chef" },
    { nombre: "Dante Enríquez", instagram: "@danteenriquez" },
    { nombre: "Darío Brugnon", instagram: "@dariobrugnon" },
    { nombre: "Julio Figueroa", instagram: "@juliofigueroachef" }
  ];

  // Initialize shuffled timeline
  useEffect(() => {
    const shuffled = [...timelineData].sort(() => Math.random() - 0.5);
    setTimelineOrder(shuffled);
  }, []);

  // Check if timeline is complete
  useEffect(() => {
    if (timelineOrder.length === timelineData.length) {
      const isCorrect = timelineOrder.every((item, index) => item.id === timelineData[index].id);
      setIsComplete(isCorrect);
    }
  }, [timelineOrder]);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetItem) => {
    e.preventDefault();
    if (!draggedItem) return;

    const draggedIndex = timelineOrder.findIndex(item => item.id === draggedItem.id);
    const targetIndex = timelineOrder.findIndex(item => item.id === targetItem.id);

    const newOrder = [...timelineOrder];
    newOrder[draggedIndex] = targetItem;
    newOrder[targetIndex] = draggedItem;

    setTimelineOrder(newOrder);
    setDraggedItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 py-16 px-4 w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🍳</div>
          <div className="absolute bottom-10 right-10 text-9xl">👨‍🍳</div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            La Ciencia e Innovación en la Cocina
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            La gastronomía ha evolucionado desde la recolección y caza prehistórica hasta convertirse en un arte culinario reconocido. La tecnología se integró para mejorar técnicas y crear experiencias únicas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Timeline Interactiva */}
        <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            📜 Línea de Tiempo de la Gastronomía
          </h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Arrastra las imágenes para ordenarlas cronológicamente. Ayúdate con la información de cada espacio.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {timelineOrder.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, item)}
                className={`${item.color} w-40 h-56 rounded-xl shadow-lg cursor-move hover:scale-105 transition-transform p-4 flex flex-col justify-between text-white`}
              >
                <div>
                  <div className="font-bold text-sm mb-2">{item.epoca}</div>
                  <div className="text-xs font-semibold mb-1">{item.titulo}</div>
                </div>
                <div className="text-xs opacity-90 leading-tight">{item.descripcion}</div>
              </div>
            ))}
          </div>

          {isComplete && (
            <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6 text-center">
              <p className="text-2xl font-bold text-green-700">¡Felicitaciones! Ordenaste correctamente la línea de tiempo 🎉</p>
            </div>
          )}
        </section>

        {/* Técnicas Innovadoras */}
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            ✨ Técnicas Innovadoras
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tecnicas.map((t, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-orange-200 hover:border-orange-400 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full -mr-16 -mt-16 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                <h3 className="font-bold text-xl text-gray-800 mb-3 relative z-10">{t.nombre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{t.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recetario Digital Button */}
        <section className="text-center">
          <button
            onClick={() => setShowRecetario(!showRecetario)}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-2xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-orange-400 hover:scale-105 transition-all duration-300"
          >
            📖 {showRecetario ? 'Ocultar' : 'Abrir'} Recetario Digital
          </button>
        </section>

        {/* Recetario Section */}
        {showRecetario && (
          <section className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              🍽️ Recetario Digital Creativo
            </h2>
            
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedRecipeType('postres')}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  selectedRecipeType === 'postres'
                    ? 'bg-pink-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-pink-100'
                }`}
              >
                🍰 Postres
              </button>
              <button
                onClick={() => setSelectedRecipeType('saladas')}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  selectedRecipeType === 'saladas'
                    ? 'bg-green-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-green-100'
                }`}
              >
                🥗 Comidas Saladas
              </button>
            </div>

            {selectedRecipeType && (
              <div className="space-y-4">
                {recetas[selectedRecipeType].map((receta, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedRecipe(expandedRecipe === index ? null : index)}
                      className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-lg text-gray-800">{receta.nombre}</span>
                      <span className="text-2xl transform transition-transform duration-300" style={{
                        transform: expandedRecipe === index ? 'rotate(90deg)' : 'rotate(0deg)'
                      }}>
                        ➡️
                      </span>
                    </button>
                    
                    {expandedRecipe === index && (
                      <div className="px-6 pb-6 space-y-4 border-t-2 border-gray-100 pt-4">
                        <div>
                          <h4 className="font-bold text-orange-600 mb-2">Ingredientes:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {receta.ingredientes.map((ing, i) => (
                              <li key={i}>{ing}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-orange-600 mb-2">Preparación:</h4>
                          <ol className="list-decimal list-inside space-y-1 text-gray-700">
                            {receta.preparacion.map((paso, i) => (
                              <li key={i}>{paso}</li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Chefs Innovadores */}
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            👨‍🍳 Chefs Innovadores
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {chefs.map((c, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:scale-105 border-2 border-amber-200"
              >
                <div className="w-28 h-28 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg mb-4">
                  {c.nombre.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-bold text-xl text-gray-800 text-center mb-2">{c.nombre}</h3>
                <p className="text-gray-600 text-center text-sm">{c.especialidad}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curiosidades */}
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            💡 Curiosidades y Aplicaciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curiosidades.map((c, i) => (
              <div key={i} className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-amber-300">
                <p className="text-gray-800 text-lg leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Estudiar Gastronomía */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            🎓 Estudiar Gastronomía
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Carreras Universitarias en Córdoba:</h3>
            <ul className="space-y-3">
              {carreras.map((carrera, i) => (
                <li key={i} className="bg-white p-4 rounded-xl shadow-md text-gray-700 text-lg">
                  📚 {carrera}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-8 rounded-2xl shadow-lg mb-12 border-2 border-orange-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🌟 Recomendación Especial:</h3>
            <h4 className="text-xl font-bold text-orange-600 mb-3">Fundación Celia Gastronomía</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✅ 13 cursos online (pastelería, cocina salada, coctelería)</li>
              <li>✅ 4 carreras: Chef, Pastelero, Repostero, Panadero</li>
              <li>✅ Enfoque: alimentación saludable y reducción del desperdicio</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">Chefs Cordobeses Destacados:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {chefsCordobeses.map((chef, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all hover:scale-105">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-3 shadow-lg">
                    {chef.nombre.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{chef.nombre}</h4>
                  <a 
                    href={`https://instagram.com/${chef.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 text-sm font-semibold"
                  >
                    {chef.instagram}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cierre */}
        <section className="text-center bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-3xl shadow-2xl p-12">
          <p className="text-2xl md:text-3xl font-bold leading-relaxed">
            La cocina no solo es sabor, sino también ciencia, tecnología e innovación. Cada técnica y cada chef muestran cómo los alimentos pueden convertirse en experiencias únicas. 🍳✨
          </p>
        </section>
      </div>
    </div>
  );
};

export default Cocina;
