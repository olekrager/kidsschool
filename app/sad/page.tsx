'use client';
export default function SadPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-6 bg-gradient-to-br from-[#fffbe7] to-[#e6fbea]">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Грустный ученик без нас</h1>
      <div className="text-lg mb-2 text-center">
        Не хватает весёлых уроков, общения и поддержки.
      </div>
      <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <p>“Мне скучно без уроков в любимой школе!”</p>
      </div>
    </main>
  );
}