import { ThreeDMarquee } from "@/components/ThreeDMarquee";

// Healthcare and medical images for the gallery
const healthcareImages = [
   "/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg",
  "/9.jpg", "/10.jpg", "/11.jpg", "/12.jpg", "/13.jpg", "/14.jpg", "/15.jpg", "/16.jpg",
  "/17.jpg", "/18.jpg", "/19.jpg", "/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "/24.jpg",
  "/25.jpg", "/26.jpg", "/27.jpg", "/28.jpg", "/29.jpg", "/30.jpg", "/31.jpg"]
export default function About() {
    return (
        <div className="min-h-screen pt-32 px-8 pb-20 select-none">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 relative z-10">
                    <h1 className="text-4xl font-bold mb-6 cursor-default bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                        About Dr. Obe Charity Foundation
                    </h1>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        Bridging the healthcare gap in underserved rural communities across Nigeria
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-16 relative z-10">
                    <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8">
                        <div className="text-3xl mb-4">🎯</div>
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Our Vision</h2>
                        <p className="text-lg cursor-default select-text">
                            Provide accessible, culturally sensitive preventive and emergency healthcare to rural Nigeria.
                        </p>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8">
                        <div className="text-3xl mb-4">🚀</div>
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Our Mission</h2>
                        <p className="text-lg cursor-default select-text">
                            To bridge the healthcare gap in underserved areas through innovation, advocacy, and collaboration 
                            with community leaders and government.
                        </p>
                    </div>
                </div>

                {/* 3D Marquee Gallery */}
                <div className="relative z-10 mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center cursor-default">Our Impact Gallery</h2>
                    <ThreeDMarquee 
                        images={healthcareImages}
                        className="mb-8"
                    />
                </div>

                <div className="relative z-10 mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center cursor-default">The Challenge We Address</h2>
                    <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8 text-center">
                        <div className="text-6xl font-bold text-red-400 mb-4">70%</div>
                        <p className="text-xl mb-4 cursor-default select-text">
                            of Nigeria's rural population lacks access to basic healthcare
                        </p>
                        <p className="text-lg text-foreground/70 cursor-default select-text">
                            Leading to preventable deaths from malaria, maternal complications, malnutrition, and infectious diseases.
                        </p>
                        <div className="grid md:grid-cols-4 gap-4 mt-8">
                            <div className="text-center">
                                <div className="text-2xl mb-2">🏥</div>
                                <p className="text-sm text-foreground/70">Limited healthcare facilities</p>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl mb-2">👨‍⚕️</div>
                                <p className="text-sm text-foreground/70">Shortage of medical personnel</p>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl mb-2">💰</div>
                                <p className="text-sm text-foreground/70">Poverty limiting access</p>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl mb-2">🛤️</div>
                                <p className="text-sm text-foreground/70">Geographic isolation</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10 mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center cursor-default">Our Objectives</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-4">🏥</div>
                                <h3 className="text-lg font-medium text-cyan-400">Improve Healthcare Access</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-sm select-text cursor-text text-foreground/70">
                                <li>Deliver primary, preventive, and emergency medical services to remote areas</li>
                                <li>Mobile medical units reaching underserved communities</li>
                                <li>24/7 emergency response capabilities</li>
                            </ul>
                        </div>
                        
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-4">🛡️</div>
                                <h3 className="text-lg font-medium text-cyan-400">Reduce Preventable Diseases</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-sm select-text cursor-text text-foreground/70">
                                <li>Combat malaria, typhoid, and infectious diseases</li>
                                <li>Reduce maternal and child mortality rates</li>
                                <li>Vaccination campaigns and immunization drives</li>
                            </ul>
                        </div>
                        
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-4">👥</div>
                                <h3 className="text-lg font-medium text-cyan-400">Strengthen Community Health</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-sm select-text cursor-text text-foreground/70">
                                <li>Train local health workers and community volunteers</li>
                                <li>Promote sustainable healthcare practices</li>
                                <li>Build partnerships with traditional leaders</li>
                            </ul>
                        </div>
                        
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-4">🚨</div>
                                <h3 className="text-lg font-medium text-cyan-400">Enhance Emergency Response</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-sm select-text cursor-text text-foreground/70">
                                <li>Provide rapid medical aid during crises</li>
                                <li>Motorcycle ambulances for remote access</li>
                                <li>Emergency preparedness and disaster response</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 relative z-10">
                    <h2 className="text-3xl font-semibold mb-8 text-center cursor-default">Our Approach</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 text-center">
                            <div className="text-4xl mb-4">🚑</div>
                            <h3 className="font-semibold mb-3 text-cyan-400">Mobile Clinics & Emergency Response</h3>
                            <p className="text-foreground/70 text-sm select-text cursor-text">
                                Fully equipped mobile medical units and emergency response teams that reach 
                                the most remote communities in Nigeria.
                            </p>
                        </div>
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 text-center">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="font-semibold mb-3 text-cyan-400">Community Health Education</h3>
                            <p className="text-foreground/70 text-sm select-text cursor-text">
                                Culturally sensitive health education programs and vaccination drives 
                                designed with community input and traditional leadership support.
                            </p>
                        </div>
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 text-center">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="font-semibold mb-3 text-cyan-400">Strategic Partnerships</h3>
                            <p className="text-foreground/70 text-sm select-text cursor-text">
                                Collaborative partnerships with local leaders, government agencies, 
                                and international organizations to ensure sustainable impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}