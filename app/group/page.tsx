'use client';
export default function GroupPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-6 bg-gradient-to-br from-[#fffbe7] to-[#e6fbea]">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Групповые курсы</h1>
      <div className="text-lg mb-2 text-center">
        Весёлые мини-группы по 3-6 человек.<br />
        Общение, командные игры, подготовка к олимпиадам!
      </div>
      <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <ul className="list-disc ml-5 text-base text-left">
          <li>Дружелюбная атмосфера</li>
          <li>Совместные проекты</li>
          <li>Опытные преподаватели</li>
        </ul>
      </div>
    </main>
  );
}