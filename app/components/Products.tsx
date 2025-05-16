"use client"

const products = [
  {
    name: 'Barium Carbonate',
    image: '/product-images/bari_car.png',
    description: '',
  },
  {
    name: 'Скоро...',
    image: '/product-images/bari_sul.png', // Replace with actual path or imported image
    description: '',
  },
  {
    name: 'Скоро...',
    image: '/product-images/bari_clor.png',
    description: '',
  }
];

 export const Products = () => {
  return (
    <div className=" bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Что мы предлагаем ?</h2>
      <div className="sm:flex sm:flex-wrap md:grid md:grid-cols-3 md:grid-rows-2 md:gap-8 md:w-2/5 mx-auto">
        {products.map((product, idx) => (
          idx === 0 ? (<>
          <div
          key={idx + product.image}
          className="flex flex-col md:col-span-2 md:row-span-2 items-center bg-white shadow hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => window.open('/protocol.pdf', '_blank')}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-sm text-gray-500 text-center">
              {product.description}
            </p>
          )}
        </div>
          </>) : <div
          key={idx}
          className="flex flex-col md:col-start-3 items-center bg-white shadow hover:shadow-lg transition-shadow my-10"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover mb-4 rounded"
          />
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-sm text-gray-500 text-center">
              {product.description}
            </p>
          )}
        </div>
        ))}
      </div>
    </div>
  );
}