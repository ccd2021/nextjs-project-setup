"use client"

const products = [
  {
    id: 1,
    name: "Faja Postquirúrgica Abdominal Premium",
    price: "$89.990",
    image: "https://placehold.co/400x400/3B82F6/FFFFFF?text=Faja+Abdominal",
    description: "Faja de compresión media para recuperación abdominal"
  },
  {
    id: 2,
    name: "Faja Lipoescultura Completa",
    price: "$129.990",
    image: "https://placehold.co/400x400/60A5FA/FFFFFF?text=Faja+Completa",
    description: "Cobertura completa para procedimientos de lipoescultura"
  },
  {
    id: 3,
    name: "Faja Mamaria Post-Cirugía",
    price: "$69.990",
    image: "https://placehold.co/400x400/93C5FD/FFFFFF?text=Faja+Mamaria",
    description: "Soporte especializado para recuperación mamaria"
  },
  {
    id: 4,
    name: "Faja Braquioplastia",
    price: "$79.990",
    image: "https://placehold.co/400x400/DBEAFE/1E40AF?text=Faja+Brazos",
    description: "Compresión para procedimientos de braquioplastia"
  },
  {
    id: 5,
    name: "Faja Glútea Post-BBL",
    price: "$99.990",
    image: "https://placehold.co/400x400/1E40AF/FFFFFF?text=Faja+Glútea",
    description: "Diseño especial para recuperación post-BBL"
  },
  {
    id: 6,
    name: "Faja Facial Post-Cirugía",
    price: "$59.990",
    image: "https://placehold.co/400x400/3B82F6/FFFFFF?text=Faja+Facial",
    description: "Compresión facial para procedimientos estéticos"
  },
  {
    id: 7,
    name: "Faja Abdominoplastia Plus",
    price: "$119.990",
    image: "https://placehold.co/400x400/60A5FA/FFFFFF?text=Faja+Plus",
    description: "Nivel superior de compresión para abdominoplastia"
  },
  {
    id: 8,
    name: "Faja Media Pierna",
    price: "$74.990",
    image: "https://placehold.co/400x400/93C5FD/FFFFFF?text=Faja+Pierna",
    description: "Compresión media para muslos y glúteos"
  },
  {
    id: 9,
    name: "Faja Lumbar Terapéutica",
    price: "$64.990",
    image: "https://placehold.co/400x400/DBEAFE/1E40AF?text=Faja+Lumbar",
    description: "Soporte lumbar para recuperación postoperatoria"
  },
  {
    id: 10,
    name: "Faja Completa 3 en 1",
    price: "$149.990",
    image: "https://placehold.co/400x400/1E40AF/FFFFFF?text=Faja+3en1",
    description: "Sistema completo de compresión ajustable"
  }
]

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-12">
          Catálogo de Productos
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <p className="text-2xl font-bold text-blue-600">{product.price}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
