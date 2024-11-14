import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-periwinkle py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonna Informazioni */}
          <div>
            <h2 className="text-lilac font-bold text-lg mb-4">Informazioni</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-periwinkle hover:text-purple transition"
                >
                  Chi Siamo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-periwinkle hover:text-purple transition"
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-periwinkle hover:text-purple transition"
                >
                  Contatti
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-periwinkle hover:text-purple transition"
                >
                  Lavora con Noi
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna Risorse */}
          <div>
            <h2 className="text-lilac font-bold text-lg mb-4">Risorse</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-periwinkle hover:text-purple transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-periwinkle hover:text-purple transition"
                >
                  Documentazione
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-periwinkle hover:text-purple transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-periwinkle hover:text-purple transition"
                >
                  Supporto
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna Social */}
          <div>
            <h2 className="text-lilac font-bold text-lg mb-4">Seguici</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-periwinkle hover:text-purple transition"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-periwinkle hover:text-purple transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-periwinkle hover:text-purple transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-periwinkle hover:text-purple transition"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-lilac mt-8 pt-4 text-center text-sm">
          <p className="text-periwinkle">
            &copy; {new Date().getFullYear()} Quizzies. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
