'use client';
export default function IntensivePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-6 bg-gradient-to-br from-[#fffbe7] to-[#e6fbea]">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Детские интенсивы</h1>
      <div className="text-lg mb-2 text-center">
        Краткосрочные, но очень эффективные курсы для детей.<br />
        Подготовка к ТРКИ, олимпиадам, проектам.
      </div>
      <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <ul className="list-disc ml-5 text-base text-left">
          <li>Уровни A1–B2</li>
          <li>Много практики</li>
          <li>Дружелюбная атмосфера</li>
        </ul>
      </div>
    </main>
  );
}