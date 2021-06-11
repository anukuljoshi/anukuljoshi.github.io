import React from 'react';
import Particles from 'react-tsparticles';

const FixedBackground = () => {
    return (
        <div className="fixed h-screen w-screen" style={{zIndex: -1}}>
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: "transparent",
                    },
                    particles: {
                        number: {
                            value: 100,
                        },
                        color: {
                            value: '#fff'
                        },
                        size: {
                            value: 1.5,
                            random: true,
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                        },
                        collisions: {
                            enable: true, 
                            bounce: true,
                        },
                        move: {
                            direction: "random",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 0.5,
                            straight: false,
                        },
                    },
                }}
            ></Particles>
        </div>
    )
}

export default FixedBackground
