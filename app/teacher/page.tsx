'use client';
export default function TeacherPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-6 bg-gradient-to-br from-[#fffbe7] to-[#e6fbea]">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Ваш преподаватель</h1>
      <div className="text-lg mb-2 text-center">
        Более 10 лет опыта, международные сертификаты, автор собственных методик.<br />
        Вдохновляет детей учиться и достигать новых целей!
      </div>
      <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <ul className="list-disc ml-5 text-base text-left">
          <li>Стаж: 12 лет</li>
          <li>Сертифицированный преподаватель РКИ</li>
          <li>Победитель олимпиад по педагогике</li>
        </ul>
      </div>
    </main>
  );
}