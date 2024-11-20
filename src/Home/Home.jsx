import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaHeart } from "react-icons/fa";
import Carousel from "./Carosello";
import Banner from "./Banners";


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

// Post di Facebook
const facebookPosts = [
  {
    id: 1,
    iframe: (
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid07DXeKcCsjyExYi44WpjAZph1a7dxjh9fWgveazw7mGdemwVUjvBfZNgUQyHQNQ5Sl%26id%3D61568784880891&show_text=true&width=500"
        width="100%"
        height="667"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    ),
  },
  {
    id: 2,
    iframe: (
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02LJeYAN7FF7hgcj2nL7Uzc19ayAbwdKzACQemhGsmrU2ZtHyXxZ5FgWkbhohdoLuHl%26id%3D61568784880891&show_text=true&width=500"
        width="100%"
        height="648"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    ),
  },
  {
    id: 3,
    iframe: (
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02e8ecZDwR3jiPiFzqrKCrxCAwCv99bMs6eKQEqPbGL8N5NX5HMNn34VRcGbVVt18wl%26id%3D61568784880891&show_text=true&width=500"
        width="100%"
        height="679"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    ),
  },
];

export default function Home() {
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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Carosello Quiz Popolari */}
      <section id="quiz-popular" className="mb-8">
        <h2 className="text-2xl font-bold text-purple mb-4">Quiz Popolari</h2>
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
              <div className="bg-coral p-4 rounded-md shadow-md text-center transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-dark-blue mb-2">
                  {quiz.title}
                </h3>
                <button
                  className="flex items-center justify-center space-x-2 text-purple mt-4"
                  onClick={() => handleLike(quiz.id)}
                >
                  <FaHeart className="text-lilac" />
                  <span>{likes[quiz.id]}</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Carosello Quiz Recenti */}
      <section id="quiz-recent" className="mb-8">
        <h2 className="text-2xl font-bold text-purple mb-4">Quiz Recenti</h2>
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
              <div className="bg-periwinkle p-4 rounded-md shadow-md text-center transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-dark-blue mb-2">
                  {quiz.title}
                </h3>
                <button
                  className="flex items-center justify-center space-x-2 text-purple mt-4"
                  onClick={() => handleLike(quiz.id)}
                >
                  <FaHeart className="text-lilac" />
                  <span>{likes[quiz.id]}</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Carosello Post di Facebook */}
      <section id="facebook-posts" className="mb-8">
        <h2 className="text-2xl font-bold text-purple mb-4">Post di Facebook</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {facebookPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="bg-white p-4 rounded-md shadow-md text-center transform transition-transform hover:scale-105">
                {post.iframe}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Top10 player */}
      <Carousel />

      <Banner/>

    </div>
  );
}
