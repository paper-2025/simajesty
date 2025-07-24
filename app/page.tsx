import CustomButton from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 pt-32 select-none">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start relative z-30">
        <div className="relative text-center select-none">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 relative z-10 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent select-none">
            Dr. Obe Charity Foundation
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto relative z-10 mb-6 select-none">
            Transforming Rural Healthcare in Nigeria Through Preventive & Emergency Medical Services
          </p>
          <div className="absolute inset-0 -z-10 bg-cyan-400/20 blur-2xl rounded-full scale-150 pointer-events-none" />
        </div>
        
        <div className="text-center sm:text-left relative z-10 cursor-default max-w-4xl select-none">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 select-none">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400 select-none">Our Mission</h2>
              <p className="text-foreground/80 mb-4 select-none">
                To bridge the healthcare gap in underserved areas through innovation, advocacy, and collaboration 
                with community leaders and government.
              </p>
              <div className="text-3xl font-bold text-cyan-400 select-none">70%</div>
              <p className="text-sm text-foreground/70 select-none">of Nigeria's rural population lacks access to basic healthcare</p>
            </div>
            
            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 select-none">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400 select-none">Our Vision</h2>
              <p className="text-foreground/80 mb-4 select-none">
                Provide accessible, culturally sensitive preventive and emergency healthcare to rural Nigeria.
              </p>
              <div className="flex items-center space-x-4 select-none">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium select-none">Saving Lives Daily</span>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 text-sm mb-8 select-none">
            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 text-center select-none">
              <div className="text-2xl mb-2 select-none">🚑</div>
              <h3 className="font-semibold mb-2 text-cyan-400 select-none">Mobile Clinics</h3>
              <p className="text-foreground/70 select-none">Emergency response units reaching remote communities</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 text-center select-none">
              <div className="text-2xl mb-2 select-none">📚</div>
              <h3 className="font-semibold mb-2 text-cyan-400 select-none">Health Education</h3>
              <p className="text-foreground/70 select-none">Community programs and vaccination drives</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 text-center select-none">
              <div className="text-2xl mb-2 select-none">🤝</div>
              <h3 className="font-semibold mb-2 text-cyan-400 select-none">Partnerships</h3>
              <p className="text-foreground/70 select-none">Collaboration with local leaders and government</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row relative z-10">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gradient-to-r from-cyan-400 to-cyan-500 text-white gap-2 hover:from-cyan-500 hover:to-cyan-600 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto hover:shadow-lg hover:shadow-cyan-400/30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 select-none"
            href="/contact"
          >
            💙 Support Our Mission
          </Link>
          <Link
            className="rounded-full border border-solid border-cyan-400/30 transition-colors flex items-center justify-center hover:bg-cyan-400/10 hover:border-cyan-400 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] hover:shadow-lg hover:shadow-cyan-400/10 backdrop-blur-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 select-none"
            href="/about"
          >
            Learn More
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center relative z-10">
        <CustomButton link='/about' name='About Us' />
        <CustomButton link='/contact' name='Partner With Us' />
        <CustomButton link='/about' name='Our Programs' />
      </footer>
    </div>
  );
}