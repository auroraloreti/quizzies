import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-coral text-purple py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonna Informazioni */}
          <div>
            <h2 className="text-lilac font-bold text-lg mb-4">Informazioni</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-dark-blue hover:text-lilac transition"
                >
                  Terms & Condition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-blue hover:text-lilac transition"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-blue hover:text-lilac transition"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-blue hover:text-lilac transition"
                >
                  Promo
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
                  className="text-dark-blue hover:text-lilac transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-blue hover:text-lilac transition"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-blue hover:text-lilac transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-blue hover:text-lilac transition"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna Navigazione */}
          <div>

          <h2 className="text-lilac font-bold text-lg mb-4">Navigazione</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-dark-blue hover:text-lilac transition"
                >
                  Quizz Archive
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-blue hover:text-lilac transition"
                >
                  Challenge
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-blue hover:text-lilac transition"
                >
                  Achievement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-blue hover:text-lilac transition"
                >
                  Top Players
                </a>
              </li>
              </ul>
              </div>

          
         
        </div>

        <div className="border-t border-lilac mt-8 pt-4 text-center text-sm">
          <p className="text-dark-blue">
            &copy; {new Date().getFullYear()} Quizzies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
