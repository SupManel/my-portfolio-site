import { Link } from "react-router-dom";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-black px-4 py-16">
      <div className="container mx-auto max-w-screen-xl">
        <div className="mb-8 rounded-lg bg-zinc-900/50 p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">Contact Me</h2>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-zinc-800/50 px-4 py-2 text-white">
              <MailIcon className="h-5 w-5" />
              <span>emanuelramospaiva@gmail.com</span>
            </div>

            <Link
              to="https://www.linkedin.com/in/emanuel-ramos-paiva-292357311/"
              className="rounded-lg bg-zinc-800/50 p-2 text-white transition-colors hover:bg-zinc-700"
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link
              to="https://github.com/SupManel"
              className="rounded-lg bg-zinc-800/50 p-2 text-white transition-colors hover:bg-zinc-700"
            >
              <GithubIcon className="h-6 w-6" />
            </Link>
            <Link
              to="https://www.instagram.com/emanuelramospaiva/"
              className="rounded-lg bg-zinc-800/50 p-2 text-white transition-colors hover:bg-zinc-700"
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      <footer className="mt-8 border-t border-zinc-800">
        <div className="container mx-auto max-w-screen-xl py-4">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <p>{new Date().getFullYear()} © All Right Reserved</p>
            <p>Developed By : Emanuel Ramos Paiva</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
