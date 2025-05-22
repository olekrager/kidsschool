'use client';
export default function IndividualPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-6 bg-gradient-to-br from-[#fffbe7] to-[#e6fbea]">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Индивидуальные занятия</h1>
      <div className="text-lg mb-2 text-center">
        Индивидуальный подход, творческие задания, гибкий график.<br />
        Учим русский язык легко и с радостью!
      </div>
      <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <ul className="list-disc ml-5 text-base text-left">
          <li>Возраст: 5–16 лет</li>
          <li>Занятия 2-3 раза в неделю</li>
          <li>Домашние задания и поддержка преподавателя</li>
        </ul>
      </div>
    </main>
  );
}