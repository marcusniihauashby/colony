import { Geist, Geist_Mono, Merriweather, Neuton, Slabo_13px, Questrial } from "next/font/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const neuton = Neuton({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const slabo13 = Slabo_13px({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const questrial = Questrial({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  return (
    <div className=" min-h-screen h-full bg-gradient-to-b from-[#0E2220] to-[#3E8981]">
      <main className='min-h-screen bg-gradient-to-b from-[#0E2220] to-[#3E8981] text-white'>
        <section className="text-center py-12 md:py-20 px-4">
          <h1 className={`text-white text-3xl md:text-5xl mb-4 ${merriweather.className}`}>
            Your Job Search,<br />
            <div className="mb-4"></div>
            100% Automated.
          </h1>
          <div className="mb-6"></div>
          <p className={`text-white text-2xl md:text-2xl mb-8 ${neuton.className}`}>Find your dream job, hands-free.</p>
          <a
            href="https://calendly.com/marcusna-berkeley/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-6 py-3 text-white rounded-lg transition-colors ${questrial.className}`} style={{backgroundColor: '#417057'}}
          >
            Book a Call
          </a>
          <div className="mb-12"></div>

        </section>
      <div className="mb-12"></div>

        <section className="py-12 md:py-16 px-4">
          <div className='mt-12'></div>
          <h2 className={`text-white text-2xl md:text-3xl text-center mt-10 mb-8 md:mb-12 ${neuton.className}`}>
            What is your time worth?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            <div className="bg-green-800 p-6 rounded-lg"style={{ backgroundColor: '#375349'}}>
              <h3 className={`text-white text-lg md:text-xl mb-4 text-center ${neuton.className}`}>Online applications take time.</h3>
              <p className={`text-gray-300 text-sm md:text-base text-center ${slabo13.className}`}>On average, it takes 23 minutes to fill out an application for a singular job. Even with autofiller applications, the user still must be present to fill in the blanks.</p>
            </div> 
            <div className="bg-green-800 p-6 rounded-lg" style={{ backgroundColor: '#375349'}}>
              <h3 className={`text-white text-lg md:text-xl mb-4 text-center ${neuton.className}`}>Quantity is required.</h3>
              <p className={`text-gray-300 text-sm md:text-base text-center ${slabo13.className}`}>It takes 100-200 applications for a person to find work. For CS jobs, it takes 5-10x as many applications, leading to prospective hires putting in 50+ applications a day.</p>
            </div>
            <div className="bg-green-800 p-6 rounded-lg" style={{ backgroundColor: '#375349'}}>
              <h3 className={`text-white text-lg md:text-xl mb-4 text-center ${neuton.className}`}>Do the math.</h3>
              <p className={`text-gray-300 text-sm md:text-base text-center ${slabo13.className}`}>Given the previous information, you would have to perform 40 hours of nonstop job applications. 40 hours of mindless data entry - all so you can begin to work.</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4">
          <h2 className={`text-white text-5xl text-center mb-5 md:mb-4 ${neuton.className}`}>Let the Colony Handle your Applications.</h2>
          <p className={`text-white text-center mb-8 md:mb-12 text-sm md:text-base ${slabo13.className}`}>Batch-apply to your dream companies with AI agents that never miss a detail.</p>
          <div className="relative w-full max-w-4xl mx-auto aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/tuJ2-CPz--o?si=jEeNc4iUuyD077kq"
              title="Colony AI demo video"
              frameBorder="0"
              loading="eager"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="py-12 md:py-16 text-center px-4">
          <h2 className={`text-white text-5xl md:text-5xl mt-12 mb-12 md:mb-12 ${neuton.className}`}>Ready to take your life back?</h2>
          <div className="mb-12 mt-12"></div>
          <a
            href="https://calendly.com/marcusna-berkeley/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-6 py-3 mt-12 mb-12 text-white rounded-md transition-colors ${questrial.className}`} style={{backgroundColor: '#417057'}}
          >
            Book a Call
          </a>
        </section>
        <p className={`${questrial.className}`}>Copyright 2024-2025 Colony-AI.com</p>
      </main>

    </div>
  );
}
