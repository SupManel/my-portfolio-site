import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import profileImage from "@/assets/ImagemPerfil.jpg"; // Importar a imagem


const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black px-4 pt-20">
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            EMANUEL RAMOS PAIVA
          </h1>
          <p className="max-w-2xl text-lg text-gray-300">
            I'm A Passionate Programming Student Currently In The 3rd Semester
            Of Computer Systems Technology. I Enjoy Building Creative And
            Efficient Solutions Through Code, Focused On Continuous Learning,
            Teamwork, And Innovation
          </p>
          <div>
            <Button
              className="rounded-md bg-zinc-800 text-white hover:bg-zinc-700"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Hire Me
            </Button>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/SupManel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/emanuelramospaiva/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/emanuel-ramos-paiva-292357311/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="relative aspect-square w-full max-w-xl justify-self-end overflow-hidden rounded-full border-8 border-zinc-800">
          <img
            src={profileImage}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
