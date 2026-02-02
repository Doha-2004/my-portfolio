export default function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a href="#!">
          {/* Logos */}
          <img src="/assets/logo.png" alt="Doha Emad Logo" className="w-36 mx-auto mb-2 dark:hidden" />
          <img src="/assets/logo_dark.png" alt="Doha Emad Logo Dark" className="w-36 mx-auto mb-2 hidden dark:block" />
        </a>

        {/* Contact Email */}
        <div className="w-max flex items-center gap-2 mx-auto">
          <img src="./assets/mail_icon.png" alt="Email Icon" className="w-5 dark:hidden" />
          <img src="./assets/mail_icon_dark.png" alt="Email Icon Dark" className="w-5 hidden dark:block" />
          <a href="mailto:doha.emad204@gmail.com">doha.emad204@gmail.com</a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
        <p className="text-sm">
          © {new Date().getFullYear()} <a href="#!" className="underline">Doha Emad</a> • All rights reserved.
        </p>

        {/* Social Links */}
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li><a href="https://github.com/Doha-2004" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/doha-emad-843b452b0" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
}
