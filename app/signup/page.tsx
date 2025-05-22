'use client';
export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-6 bg-gradient-to-br from-[#fffbe7] to-[#e6fbea]">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Записаться на бесплатный урок</h1>
      <div className="text-lg mb-2 text-center">Оставьте заявку, и мы с вами свяжемся!</div>
      <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <p className="mb-2 text-xl font-bold">Контакты для связи:</p>
        <p>Имя: Светлана</p>
        <p>Телефон: +7 (900) 111-22-33</p>
        <p>Email: svetka@sobaka.ru</p>
      </div>
    </main>
  );
}