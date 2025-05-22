'use client';

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#fffbe7] to-[#e6fbea] py-8">
      {/* ВЕРХНИЙ БЛОК */}
      <div className="flex flex-col items-center mt-4 mb-6">
        <Image
          src="/kids-with-book.png"
          width={200}
          height={200}
          alt="Дети с книгой"
          className="rounded-2xl shadow-xl mb-4 transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-5xl font-extrabold mb-2 text-center">Добро пожаловать!</h1>
        <p className="text-lg text-center max-w-2xl">
          Помогаем детям изучать русский язык легко, с удовольствием и результатом.<br />
          Мультяшная школа для детей и подростков!
        </p>
        <button className="mt-5 btn-main transition-transform duration-200 hover:scale-110">
          Записаться на бесплатный урок
        </button>
      </div>

      {/* О НАС */}
      <section className="w-full max-w-4xl px-4 mb-8">
        <h2 className="text-2xl font-bold mb-2">О нас</h2>
        <p className="mb-2">
          Опытные преподаватели (сертификация РКИ), индивидуальный подход, забота о каждом ребёнке. Используем современные игровые методики. Готовим к ТРКИ и олимпиадам!
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Сертификаты и грамоты</li>
          <li>Отзывы родителей</li>
        </ul>
      </section>

      {/* КАРТОЧКИ */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* 1. Индивидуальные занятия (school-supplies) */}
        <div className="card flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <Image
            src="/school-supplies.png"
            width={120}
            height={120}
            alt="Индивидуальные занятия"
            className="mb-4 rounded-xl shadow"
          />
          <h3 className="text-xl font-extrabold mb-2 text-center">Индивидуальные занятия</h3>
          <p className="text-center mb-4">
            Персональный подход, игры и гибкий график. Для детей и подростков.
          </p>
          <button className="btn-main">Подробнее</button>
        </div>

        {/* 2. Групповые курсы (goose-goat-pig) */}
        <div className="card flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <Image
            src="/goose-goat-pig.PNG"
            width={120}
            height={120}
            alt="Групповые курсы"
            className="mb-4 rounded-xl shadow"
          />
          <h3 className="text-xl font-extrabold mb-2 text-center">Групповые курсы</h3>
          <p className="text-center mb-4">
            Весёлое обучение в мини-группах, общение и результат.
          </p>
          <button className="btn-main">Подробнее</button>
        </div>

        {/* 3. Детские интенсивы (stars) */}
        <div className="card flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <Image
            src="/stars.png"
            width={120}
            height={120}
            alt="Детские интенсивы"
            className="mb-4 rounded-xl shadow"
          />
          <h3 className="text-xl font-extrabold mb-2 text-center">Детские интенсивы</h3>
          <p className="text-center mb-4">
            Уровни А1–В2, короткие и эффективные занятия, подготовка к ТРКИ.
          </p>
          <button className="btn-main">Подробнее</button>
        </div>
      </section>

      {/* НИЖНИЙ БЛОК: преподаватель + ученик + бонус */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center items-center gap-8 mt-12 px-4">
        {/* Преподаватель */}
        <div className="flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
          <Image
            src="/hero-edu.png"
            width={100}
            height={100}
            alt="Ваш преподаватель"
            className="mb-2 rounded-xl shadow"
          />
          <span className="font-bold">Ваш преподаватель</span>
        </div>
        {/* Ученик */}
        <div className="flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
          <Image
            src="/happy.png.PNG"
            width={100}
            height={100}
            alt="Счастливый ученик"
            className="mb-2 rounded-xl shadow"
          />
          <span className="font-bold">Счастливый ученик :)</span>
        </div>
        {/* Бонус — еще одна картинка (dog-sad) */}
        <div className="flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
          <Image
            src="/dog-sad.PNG"
            width={100}
            height={100}
            alt="Грустный ученик"
            className="mb-2 rounded-xl shadow"
          />
          <span className="font-bold">Грустный ученик (без нас)</span>
        </div>
      </div>
    </main>
  );
}