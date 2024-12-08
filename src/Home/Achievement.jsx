export default function Achievement() {
  return (
    <div className="bg-coral rounded-full w-full h-auto mb-6 p-8 flex flex-col items-center md:flex-row md:items-center">
      {/* Segnaposto per immagine (attualmente viola) */}
      <div className="w-32 h-32 bg-lilac rounded-full mb-4 md:mb-0 md:mr-8 flex-shrink-0"></div>

      <div className="flex flex-col justify-center flex-grow text-center md:text-left">
        <p className="text-white text-3xl font-semibold mb-2">
          Novizio dei quiz
        </p>
        <p className="text-white mb-4">Completa 2 quiz</p>

        <div className="bg-white rounded-full h-4 w-full overflow-hidden">
          <div className="bg-lilac h-4" style={{ width: "50%" }}></div>
        </div>
      </div>
    </div>
  );
}
