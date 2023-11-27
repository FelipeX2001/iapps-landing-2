import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <img
        src="/logo.png" // Asume que tu logo está en la carpeta public/images
        alt="Logo"
        className="absolute left-0 top-0 m-5 w-12 h-12" // Margen de 4 y dimensiones de 12x12, posición izquierda superior
      />
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base duration-500 text-zinc-400 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-9xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-11xl md:text-12xl whitespace-nowrap bg-clip-text ">
        IApps
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block font-display animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-lg text-zinc-400 ">
          Creando{" "}
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=573042501726&text=Quiero%20evolucionar%20mi%20empresa%20con%20Inteligencia%20Artificial%20%F0%9F%A6%BE"
            className="underline duration-500 hover:text-zinc-300"
          >
            SOLUCIONES
          </Link> con Inteligencia Artificial que EVOLUCIONEN tu empresa.
        </h2>
      </div>
    </div>
  );

}
