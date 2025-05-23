'use client';

import { useState } from 'react';
import {Contact, Header, Navbar} from '../../components';
export default function BariumCarbonatePage() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <main className="text-gray-800">
        <Navbar visibleDefault={true} />


      {/* Product Image */}
      <section className="py-8 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <img
          src="/product-images/bari_car.png" // Replace with actual path
          alt="Карбонат бария"
          className="w-full max-w-md mx-auto rounded shadow-md object-cover"
        />
        <p className="text-sm text-gray-600 mt-2">Изображение продукта (пример)</p>
      </section>

      {/* Product Information */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto pb-8">
        <p className="mb-6">
          Это неорганическое соединение бария, белый кристаллический порошок без запаха, плохо растворимый в воде.
          Благодаря своим химическим свойствам он широко используется в самых разных отраслях промышленности.
        </p>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Основные характеристики</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Формула: <strong>BaCO₃</strong></li>
            <li>Внешний вид: белый порошок</li>
            <li>Растворимость: нерастворим в воде, растворим в кислотах</li>
            <li>Упаковка: мешки по 25 кг или биг-беги</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Области применения</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Стекольная промышленность — для удаления сульфатов и повышения прозрачности стекла</li>
            <li>Керамика — как флюс и компонент глазурей</li>
            <li>Металлургия — для очистки расплавов от вредных примесей</li>
            <li>Производство ферритов — для изготовления компонентов в электронике</li>
            <li>Химическая промышленность — в качестве сырья для получения других соединений бария</li>
            <li>Производство кирпича и керамических изделий — для связывания растворимых солей и предотвращения появления высолов</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Преимущества нашей продукции</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Высокая степень чистоты</li>
            <li>Стабильное качество</li>
            <li>Гибкие условия оплаты и поставки</li>
            <li>Упаковка по выбору клиента — мешки или биг-беги</li>
          </ul>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Скачать PDF с технической информацией</h2>
          <button
            onClick={() => setShowPdf(!showPdf)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {showPdf ? 'Скрыть PDF' : 'Показать PDF'}
          </button>

          {showPdf && (
            <div className="mt-6">
              <iframe
                src="/protocol.pdf" // Replace with your actual PDF path
                width="100%"
                height="1200"
                className="border rounded"
              ></iframe>
            </div>
          )}

          <div className="mt-4">
            <a
              href="/protocol.pdf" // Replace with actual path
              download
              className="text-blue-600 hover:underline"
            >
              Скачать PDF файл
            </a>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
