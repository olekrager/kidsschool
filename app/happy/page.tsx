'use client';
export default function HappyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-6 bg-gradient-to-br from-[#fffbe7] to-[#e6fbea]">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Счастливый ученик</h1>
      <div className="text-lg mb-2 text-center">
        Всегда с улыбкой идёт на занятия!<br />
        Горжусь своими успехами и новыми знаниями.
      </div>
      <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <p>“На уроках интересно и весело! Я люблю свою школу!”</p>
      </div>
    </main>
  );
}