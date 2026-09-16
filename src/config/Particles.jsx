import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesCom = () => {
  return (
    <ParticlesProvider init={loadSlim}>
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0 pointer-events-none"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 0.1,
            },
            number: {
              value: 50,
              density: {
                enable: false,
              },
            },
            opacity: {
              value: 0.5,
              random: {
                enable: true,
              },
            },
            size: {
              value: 3,
              random: {
                enable: true,
              },
            },
            move: {
              enable: false,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
};
