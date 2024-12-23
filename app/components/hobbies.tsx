import React from 'react';

// Import gambar hobi
import film from './image/film.png';
import ball from './image/BALL 2.png';
import games from './image/gamers.png';
import cupang from './image/cupang.png';

// Data Object Hobbies
const hobbies = [
    { id: 1, name: 'Menonton Film', image: film},
    { id: 2, name: 'sepakbola', image: ball },
    { id: 3, name: 'Bermain Games', image: games },
    { id: 4, name: 'Memelihara Cupang', image: cupang },
];

const MyGallery = () => {
    return (
        <section className="max-w-6xl mx-auto p-6 bg-balck-rounded-lg shadow-md mt-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-black-100">MY HOBBY</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {hobbies.map(hobby => (
                    <div key={hobby.id} className=" border border-pink-700 bg-pink rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                        <img 
                            src= {hobby.image.src}
                            alt={hobby.name}
                            className="w-full h-48 object-cover hover:opacity-80 transition-opacity duration-300"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-white-800">{hobby.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyGallery;
