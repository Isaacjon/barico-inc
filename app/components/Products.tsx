"use client"

const products = [
  {
    name: 'Barium Carbonate',
    image: '/product-images/bari_car.png',
    description: '',
    styleCss: 'md:row-span-2',
    clickOur: () => window.open('/product/barium', '_self'),
    imgCss: ''
  },
  {
    name: 'Скоро...',
    image: '/product-images/bari_sul.png', // Replace with actual path or imported image
    description: '',
    styleCss: '',
    clickOur: () => null,
    imgCss: ''
  },
  {
    name: 'Скоро...',
    image: '/product-images/bari_clor.png',
    description: '',
    styleCss: 'md:col-start-2 md:row-start-2',
    clickOur: () => null,
    imgCss: ''

  }
];

export const Products = () => {
  return (
    <div className=" bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Что мы предлагаем ?</h2>
      <div className="md:h-[500px] w-3/5 mx-auto md:grid md:grid-cols-2 md:grid-rows-2 gap-12 sm:flex sm:flex-col">
        {products.map((product) => (
          <div
            key={`${product.name}-${product.image}`}
            className={`
                       flex 
                       flex-col
                       items-center
                     bg-white shadow hover:shadow-2xl 
                       transition-shadow cursor-pointer
                 ` + product.styleCss}
            onClick={product.clickOur}
          >
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover ` + product.imgCss}
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}