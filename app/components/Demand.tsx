"use client"

import { motion } from "motion/react"

export const Demand = () => {
  return (
    <div className="pt-10 md:pt-24 px-4" id="demand">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h3 className="text-brand text-2xl font-semibold text-center">Спрос</h3>
        <div className="max-w-screen-2xl mx-auto mt-16 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 ">
          {data.map((item, i) => (
            <div
              // style={{ background: "rgba(238,237,237, 0.8)" }}
              key={i}
              className={`scale-100 flex flex-col  shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.025] overflow-hidden`}
            >
              <div
                className={`p-3 flex flex-col gap-4 h-full rounded-[inherit]`}
              >
                <div className="h-[260px] rounded-[inherit]">
                  <img
                    className="h-full w-full object-cover rounded-[inherit] rounded-xl"
                    src={`/demand-${i + 1}.png`}
                  />
                </div>
                <p className="text-lg font-[family-name:var(--font-poppins)]">{item.tite}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const data = [
  {
    tite: "Медицинская промышленность: используется в качестве контрастного вещества в рентгеновских исследованиях.",
  },
  {
    tite: "Добавка при изготовлении кирпичей в строительной индустрии. Она делает кирпичи прочнее и более аккуратными внешне (препятствует выступлению солей на поверхности кирпича).",
  },
  {
    tite: "В аналитической химии — для калибровки калориметров; для очистки растворов перед титрованием бора; для обнаружения гидроксил-ионов щелочи методом титрования.",
  },
  {
    tite: "Для получения солей бария, бариевых ферритов, синтетических волокон, пиротехники, а также древесно-угольных карбюризаторов — тугоплавких горючих древесных гранул, покрытых карбонатом бария. Используются для цементации стальных деталей.",
  },
  {
    tite: "Востребован при изготовлении керамики, черепицы, керамической плитки, фарфора, фаянса, глазурей, эмалей, лаков.",
  },
  {
    tite: "Керамическая и стекольная промышленность: для производства керамической плитки, стекла, фарфора, глазури.",
  },
];
