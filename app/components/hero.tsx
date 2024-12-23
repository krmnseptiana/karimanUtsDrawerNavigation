import foto from "../man.png";

export default function Hero() {
    return (
        <div className="container mx-auto p-6 text-center">
            <h1 className="text-pink-700 font-bold text-4xl md:text-5xl mb-4">CV Online</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kariman Septiana</h2>
            <Profile />
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                Saya adalah seorang Mahasiswa Universitas Ma'soem Semester 5 jurusan Sistem Informasi. Saya memiliki minat yang cukup dalam mengenai Teknologi, dan saya ingin mengembangkan minat saya tersebut.
            </p>
        </div>
    );
}

function Profile() {
    return (
        <div className="flex justify-center mt-6 mb-6">
            <img 
                src={foto.src} 
                alt="Kariman Septiana Profile" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
        </div>
    );
}
