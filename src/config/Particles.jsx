import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 

export const ParticlesCom = () => {
    const particlesInit = useCallback(async engine => {
       
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);

    return (
        <Particles
        width={10}
        height={10}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            
            options={{
                background: {
                    color: {
                        value: "#050816",
                    },
                },
                style:{
                    
                    height:'25%',
                    position:'absolute'
                },
                fpsLimit: 120,
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                      onhover: {
                        enable: true,
                        mode: 'repulse'
                      },
                      onclick: {
                        enable: true,
                        mode: 'push'
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
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
                            value_area: 1202.559045649142
                          }
                    },
                    opacity: {
                              value: 0.5,
                              random: true,
                              anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                              }
                            },
                            size: {
                              value: 3,
                              random: true,
                              anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false
                              }
                            },
                            line_linked: {
                              enable: false,
                              distance: 160.3412060865523,
                              color: 'white',
                              opacity: 0.4,
                              width: 1
                            },
                            move: {
                              enable: false,
                              speed: 2,
                              direction: 'none',
                              random: true,
                              straight: false,
                              out_mode: 'out',
                              bounce: false,
                              attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                              
                            }
                          },
                },
                detectRetina: true,
            }}
        />
    );
};