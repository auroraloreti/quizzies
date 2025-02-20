import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaHeart } from "react-icons/fa";

// Dati dei Quiz
const quizPopolari = [
    { id: 1, title: "Quiz di Matematica", likes: 120 },
    { id: 2, title: "Quiz di Storia", likes: 90 },
    { id: 3, title: "Quiz di Scienze", likes: 75 },
  ];
  
  const quizRecenti = [
    { id: 4, title: "Quiz di Geografia", likes: 25 },
    { id: 5, title: "Quiz di Arte", likes: 40 },
    { id: 6, title: "Quiz di Letteratura", likes: 30 },
  ];

export default function Quiz() {
  const { hash } = useLocation();
  const [likes, setLikes] = useState({
    1: 120,
    2: 90,
    3: 75,
    4: 25,
    5: 40,
    6: 30,
  });

    // Scroll automatico alla sezione specificata dall'URL hash
  useEffect(() => {
    if (hash) {
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Elemento con ID '${elementId}' non trovato.`);
      }
    }
  }, [hash]);

  // Incrementa i "Mi Piace" per un quiz
  const handleLike = (quizId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [quizId]: prevLikes[quizId] + 1,
    }));
  };

  const sectionTitleClasses =
    "text-2xl sm:text-3xl md:text-4xl font-bold text-purple mb-6";

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Carosello Quiz Popolari */}
      <section id="quiz-popular" className="mb-12">
        <h2 className={sectionTitleClasses}>Quiz Popolari</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {quizPopolari.map((quiz) => (
            <SwiperSlide key={quiz.id}>
              <div className="bg-coral p-4 rounded-md shadow-md text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-dark-blue mb-2">
                  {quiz.title}
                </h3>
                <button
                  className="flex items-center justify-center space-x-2 text-purple mt-4"
                  onClick={() => handleLike(quiz.id)}
                >
                  <FaHeart className="text-lilac" />
                  <span className="text-sm sm:text-base">{likes[quiz.id]}</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Carosello Quiz Recenti */}
      <section id="quiz-recent" className="mb-12">
        <h2 className={sectionTitleClasses}>Quiz Recenti</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {quizRecenti.map((quiz) => (
            <SwiperSlide key={quiz.id}>
              <div className="bg-periwinkle p-4 rounded-md shadow-md text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-dark-blue mb-2">
                  {quiz.title}
                </h3>
                <button
                  className="flex items-center justify-center space-x-2 text-purple mt-4"
                  onClick={() => handleLike(quiz.id)}
                >
                  <FaHeart className="text-lilac" />
                  <span className="text-sm sm:text-base">{likes[quiz.id]}</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

        </div>

    )
};