"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableCardProps {
  title: string;
  shortContent: React.ReactNode;
  expandedContent: React.ReactNode;
  className?: string;
  cardId: string;
}

const ExpandableCard = ({
  title,
  shortContent,
  expandedContent,
  className = "",
  cardId,
}: ExpandableCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isExpanded = isSticky || (!isMobile && isHovered);

  const handleMouseEnter = () => {
    if (!isMobile && !isSticky) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && !isSticky) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      // On mobile, toggle expanded state
      setIsSticky(!isSticky);
    } else {
      // On desktop, toggle sticky state
      setIsSticky(!isSticky);
      if (isSticky) {
        setIsHovered(false);
      }
    }
  };

  return (
    <motion.div
      className={`bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 select-none relative overflow-hidden cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ scale: isExpanded ? 1.02 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      data-card={cardId}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-cyan-400/10 rounded-lg"
        animate={{
          opacity: isExpanded ? 1 : 0.3,
          scale: isExpanded ? 1.05 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Close button for sticky cards */}
      

      {/* Mobile tap indicator */}
      <AnimatePresence>
        {isMobile && !isSticky && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-3 right-3 text-xs text-cyan-400/80 flex items-center space-x-1"
          >
            <span>👆</span>
            <span>Tap to expand</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop click hint */}
      <AnimatePresence>
        {!isMobile && isHovered && !isSticky && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-3 right-3 text-xs text-cyan-400/80"
          >
            Click to pin
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content container */}
      <div className="relative z-10">
        {/* Title */}
        <motion.h2
          className="text-2xl font-semibold mb-4 text-cyan-400 select-none pr-8"
          animate={{
            scale: isExpanded ? 1.05 : 1,
            letterSpacing: isExpanded ? "0.02em" : "0em",
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>

        {/* Content with smooth transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isExpanded ? "expanded" : "short"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {isExpanded ? expandedContent : shortContent}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const visionShortContent = (
    <>
      <p className="text-foreground/80 mb-4 select-none">
        To ensure that every home in Africa has basic knowledge of life-saving skills.
      </p>
      <div className="flex items-center space-x-4 select-none">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium select-none">Saving Lives Daily</span>
      </div>
    </>
  );

  const visionExpandedContent = (
    <>
      <p className="text-foreground/80 mb-4 select-none">
        To ensure that every home in Africa has basic knowledge of life-saving skills.
      </p>
      <div className="mb-4">
        <div className="flex items-center space-x-4 select-none">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium select-none">Saving Lives Daily</span>
        </div>
      </div>
      <div className="space-y-2 text-sm text-foreground/70">
        <p>• Zero preventable deaths in rural communities</p>
        <p>• 100% vaccination coverage in target areas</p>
        <p>• Community-owned healthcare initiatives</p>
        <p>• Integration with traditional healing practices</p>
      </div>
    </>
  );

  const missionShortContent = (
    <>
      <p className="text-foreground/80 mb-4 select-none">
        To be the first establishment that focuses on picking young unemployed youth from the
        streets and making them useful by equipping them with lifesaving skills needed in our
        society, thereby providing them with employment opportunities.
      </p>
      <div className="text-3xl font-bold text-cyan-400 select-none">70%</div>
      <p className="text-sm text-foreground/70 select-none">of Nigeria's rural population lacks access to basic healthcare</p>
    </>
  );

  const missionExpandedContent = (
    <>
      <p className="text-foreground/80 mb-4 select-none">
        To be the first establishment that focuses on picking young unemployed youth from the
        streets and making them useful by equipping them with lifesaving skills needed in our
        society, thereby providing them with employment opportunities.
      </p>
      <div className="text-foreground/80 mb-4 select-none text-sm leading-relaxed">
        <p className="mb-3">
          With the increasing death rate in our world today, from lack of preventive and emergency
          care, there is need to embrace an initiative that sees these needs as eminent in
          these trying times.
        </p>
        <p className="mb-3">
          Many families are unable to pay for immediate healthcare when faced with emergent needs
          that are not usually planned for. Some interventions cannot wait, as they are time
          sensitive. CPR, blood transfusions, oxygen supplement and IV hydrations are examples of
          interventions that must be delivered immediately, to sustain life.
        </p>
        <p className="mb-3">
          As a young nurse in Nigeria, I witnessed many incidents of avoidable deaths, ranging from
          ignorance of preventing them to lack of proper interventions, giving rise to losses of many
          young people who should be around today.
        </p>
        <p>
          This not-for-profit organization has been set up to curb this menace while empowering the
          youth who are significantly unemployed in this region. We will continue to provide free
          trainings and employ people who have been picked up from the street and rehabilitated.
        </p>
      </div>
      <div className="mb-4">
        <div className="text-3xl font-bold text-cyan-400 select-none">70%</div>
        <p className="text-sm text-foreground/70 select-none">of Nigeria's rural population lacks access to basic healthcare</p>
      </div>
      <div className="space-y-2 text-sm text-foreground/70">
        <p>• Establishing mobile medical units for remote communities</p>
        <p>• Training local healthcare workers and volunteers</p>
        <p>• Providing essential medications and medical supplies</p>
        <p>• Creating sustainable health education programs</p>
      </div>
    </>
  );

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
          <div className="space-y-6 mb-8">
            <ExpandableCard
              title="Our Vision"
              shortContent={visionShortContent}
              expandedContent={visionExpandedContent}
              cardId="vision"
            />
            
            <ExpandableCard
              title="Our Mission"
              shortContent={missionShortContent}
              expandedContent={missionExpandedContent}
              cardId="mission"
            />
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
            href="/donations"
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
       
      </footer>
    </div>
  );
}