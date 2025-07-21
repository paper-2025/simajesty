import { ThreeDMarquee } from "@/components/ThreeDMarquee";

const sampleImages = [
  // Technology & Coding
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
  // Development & Design
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
  // AI & Machine Learning
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1574192324001-ee41e18ed679?w=800&h=600&fit=crop",
  // Data & Analytics
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=800&h=600&fit=crop",
  // Mobile & Web Development
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&h=600&fit=crop",
  // UI/UX & Design
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
];

export default function About() {
    return (
        <div className="min-h-screen pt-32 px-8 pb-20">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center relative z-10">
                    About Us
                </h1>
                
                <div className="prose prose-lg mx-auto relative z-10 mb-16 max-w-3xl">
                    <p className="text-lg mb-6 text-center">
                        Welcome to our Next.js application! This page demonstrates the beautiful lamp effect 
                        that illuminates your content from the navbar, combined with stunning 3D visual elements.
                    </p>
                    <p className="text-lg mb-6 text-center">
                        Below you'll see our interactive 3D gallery showcasing our work and projects. 
                        The images animate in a mesmerizing pattern, creating depth and visual interest.
                    </p>
                </div>

                {/* 3D Marquee Gallery */}
                <div className="relative z-10 mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Our Work Gallery</h2>
                    <ThreeDMarquee 
                        images={sampleImages}
                        className="mb-8"
                    />
                </div>

                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Features</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-medium mb-2 text-cyan-400">Visual Effects</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>3D rotating image gallery</li>
                                    <li>Animated lamp effect</li>
                                    <li>Smooth hover interactions</li>
                                    <li>Dynamic grid animations</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2 text-cyan-400">Technical Stack</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Next.js 15 with App Router</li>
                                    <li>Framer Motion animations</li>
                                    <li>Tailwind CSS styling</li>
                                    <li>TypeScript for type safety</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2 text-cyan-400">Design System</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Responsive design patterns</li>
                                    <li>Dark/light theme support</li>
                                    <li>Modern UI components</li>
                                    <li>Accessibility focused</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2 text-cyan-400">User Experience</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Intuitive navigation</li>
                                    <li>Smooth page transitions</li>
                                    <li>Mobile-first approach</li>
                                    <li>Performance optimized</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}