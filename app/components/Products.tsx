"use client"

const products = [
  {
    name: 'Barium Carbonate',
    image: '/product-images/bari_car.png',
    description: '',
    styleCss: 'row-span-2',
    clickOur: () => window.open('/product/barium', '_self'),
    imgCss: ''
  },
  {
    name: 'Скоро...',
    image: '/product-images/bari_sul.png', // Replace with actual path or imported image
    description: '',
    styleCss: '',
    clickOur: () => null,
    imgCss: 'blur-sm'
  },
  {
    name: 'Скоро...',
    image: '/product-images/bari_clor.png',
    description: '',
    styleCss: 'col-start-2 row-start-2',
    clickOur: () => null,
    imgCss: 'blur-sm'

  }
];

export const Products = () => {
  return (
    <div className=" bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Что мы предлагаем ?</h2>
      <div className="h-[500px] w-3/5 mx-auto grid grid-cols-2 grid-rows-2 gap-12">
        {products.map((product, idx) => (
          <>
            <div
              key={idx + product.image}
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
          </>
        ))}
      </div>
    </div>
  );
}