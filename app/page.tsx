'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 py-6 bg-gradient-to-br from-[#fffbe7] to-[#e6fbea]">
      {/* Верхний блок: широкий, с большой кнопкой */}
      <div className="flex flex-col items-center w-full max-w-5xl mb-6">
        <div className="w-full flex flex-col items-center rounded-3xl shadow-2xl mb-4 pt-6 pb-6 bg-white/0">
          <div className="w-full flex justify-center">
            <div className="overflow-hidden rounded-3xl shadow-xl" style={{ width: 300, height: 380 }}>
              <Image
                src="/kids-with-book.png"
                alt="Мультяшные дети"
                width={300}
                height={380}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold mb-2 text-center mt-3">Добро пожаловать!</h1>
          <div className="text-lg mb-3 text-center">
            Помогаем детям изучать русский язык легко, с удовольствием и результатом. Мультяшная школа для детей и подростков!
          </div>
          <button
            className="btn-main text-lg px-12 py-4 mt-2 bg-yellow-400 hover:bg-yellow-300 shadow-lg border-2 border-yellow-500"
            onClick={() => router.push('/signup')}
          >
            Записаться на бесплатный урок
          </button>
        </div>
      </div>

      {/* О нас */}
      <div className="w-full max-w-4xl mb-6">
        <h2 className="text-2xl font-extrabold mb-2">О нас</h2>
        <div className="mb-1 text-base">
          Опытные преподаватели (сертификация РКИ), индивидуальный подход, забота о каждом ребенке. Используем современные игровые методики. Готовим к ТРКИ и олимпиадам!
        </div>
        <ul className="list-disc ml-5 text-base mb-2">
          <li>Сертификаты и грамоты</li>
          <li>Отзывы родителей</li>
        </ul>
      </div>

      {/* Карточки (основной блок, компактнее) */}
      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-x-8 gap-y-6 mb-6">
        {/* Индивидуальные занятия */}
        <div
          className="flex flex-col items-center bg-transparent transition-transform duration-300 hover:scale-105 active:scale-95 group cursor-pointer shadow-xl rounded-3xl w-[220px] min-h-[390px]"
          onClick={() => router.push('/individual')}
        >
          <div className="mb-2 mt-2 overflow-hidden rounded-2xl" style={{ width: 180, height: 220 }}>
            <Image
              src="/school-supplies.png"
              alt="Индивидуальные занятия"
              width={180}
              height={220}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-extrabold mb-1 text-center">Индивидуальные занятия</h3>
          <p className="text-base text-center mb-2">Персональный подход, игры и гибкий график. Для детей и подростков.</p>
          <button
            className="btn-main mb-3 mt-auto"
            onClick={e => { e.stopPropagation(); router.push('/individual'); }}
          >
            Подробнее
          </button>
        </div>

        {/* Групповые курсы */}
        <div
          className="flex flex-col items-center bg-transparent transition-transform duration-300 hover:scale-105 active:scale-95 group cursor-pointer shadow-xl rounded-3xl w-[220px] min-h-[390px]"
          onClick={() => router.push('/group')}
        >
          <div className="mb-2 mt-2 overflow-hidden rounded-2xl" style={{ width: 180, height: 220 }}>
            <Image
              src="/goose-goat-pig.PNG"
              alt="Групповые курсы"
              width={180}
              height={220}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-extrabold mb-1 text-center">Групповые курсы</h3>
          <p className="text-base text-center mb-2">Весёлое обучение в мини-группах, общение и результат.</p>
          <button
            className="btn-main mb-3 mt-auto"
            onClick={e => { e.stopPropagation(); router.push('/group'); }}
          >
            Подробнее
          </button>
        </div>

        {/* Детские интенсивы */}
        <div
          className="flex flex-col items-center bg-transparent transition-transform duration-300 hover:scale-105 active:scale-95 group cursor-pointer shadow-xl rounded-3xl w-[220px] min-h-[390px]"
          onClick={() => router.push('/intensive')}
        >
          <div className="mb-2 mt-2 overflow-hidden rounded-2xl" style={{ width: 180, height: 220 }}>
            <Image
              src="/stars.png"
              alt="Детские интенсивы"
              width={180}
              height={220}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-extrabold mb-1 text-center">Детские интенсивы</h3>
          <p className="text-base text-center mb-2">Уровни A1–B2, короткие и эффективные занятия, подготовка к ТРКИ.</p>
          <button
            className="btn-main mb-3 mt-auto"
            onClick={e => { e.stopPropagation(); router.push('/intensive'); }}
          >
            Подробнее
          </button>
        </div>
      </div>

      {/* Нижний блок карточек (компактнее) */}
      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-x-8 gap-y-6">
        {/* Ваш преподаватель */}
        <div
          className="flex flex-col items-center bg-transparent transition-transform duration-300 hover:scale-105 active:scale-95 group cursor-pointer shadow-xl rounded-3xl w-[220px] min-h-[340px]"
          onClick={() => router.push('/teacher')}
        >
          <div className="mb-2 mt-2 overflow-hidden rounded-2xl" style={{ width: 180, height: 220 }}>
            <Image
              src="/hero-edu.png"
              alt="Ваш преподаватель"
              width={180}
              height={220}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-extrabold mb-1 text-center">Ваш преподаватель</h3>
          <p className="text-base text-center mb-2">Главный вдохновитель школы!</p>
        </div>

        {/* Счастливый ученик */}
        <div
          className="flex flex-col items-center bg-transparent transition-transform duration-300 hover:scale-105 active:scale-95 group cursor-pointer shadow-xl rounded-3xl w-[220px] min-h-[340px]"
          onClick={() => router.push('/happy')}
        >
          <div className="mb-2 mt-2 overflow-hidden rounded-2xl" style={{ width: 180, height: 220 }}>
            <Image
              src="/happy.png.PNG"
              alt="Счастливый ученик"
              width={180}
              height={220}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-extrabold mb-1 text-center">Счастливый ученик</h3>
          <p className="text-base text-center mb-2">Результаты гарантированы — радость обеспечена!</p>
        </div>

        {/* Грустный ученик */}
        <div
          className="flex flex-col items-center bg-transparent transition-transform duration-300 hover:scale-105 active:scale-95 group cursor-pointer shadow-xl rounded-3xl w-[220px] min-h-[340px]"
          onClick={() => router.push('/sad')}
        >
          <div className="mb-2 mt-2 overflow-hidden rounded-2xl" style={{ width: 180, height: 220 }}>
            <Image
              src="/dog-sad.PNG"
              alt="Грустный ученик"
              width={180}
              height={220}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-extrabold mb-1 text-center">Грустный ученик без нас</h3>
          <p className="text-base text-center mb-2">Скучает без весёлых уроков! Не будьте как этот пёсик.</p>
        </div>
      </div>
    </main>
  );
}