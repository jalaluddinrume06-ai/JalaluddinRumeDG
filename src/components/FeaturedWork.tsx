import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/FeaturedWork.css";

gsap.registerPlugin(ScrollTrigger);

interface FeaturedItem {
  id: string;
  title: string;
  subtitle: string;
  videoId: string;
  bullets: string[];
}

const FEATURED_WORKS: FeaturedItem[] = [
  {
    id: "releva",
    title: "AI Fashion Commercial | Releva Brand",
    subtitle: "AI-powered commercial video created with video editing, AI visuals, and music production",
    videoId: "g4SiL6awqPE",
    bullets: ["AI Video Generation", "Cinematic Editing & Storytelling", "AI Music & Sound Design"]
  },
  {
    id: "ai-reels",
    title: "AI Reels for Clothing Brands 🚀",
    subtitle: "Transforming raw clothing content into premium viral reels using AI + proven strategies",
    videoId: "iZ7cZAsU-a0",
    bullets: ["AI Video Editing", "Viral Hook Strategy", "Content Optimization"]
  }
];

const FeaturedWork = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".featured-work-item");
      
      items.forEach((item: any) => {
        const header = item.querySelector(".header-container");
        const video = item.querySelector(".video-player-container");
        const content = item.querySelector(".content-bottom");

        // Header Animation
        gsap.from(header, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          },
        });

        // Video Animation
        gsap.from(video, {
          y: 150,
          opacity: 0,
          scale: 0.9,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: video,
            start: "top 80%",
          },
        });

        // Content Animation
        if (content) {
          const children = content.children;
          gsap.from(Array.from(children), {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: content,
              start: "top 90%",
            },
          });
        }
      });

      // Parallax effect on the section background
      gsap.to(".featured-work-section::before", {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="featured-work-section" ref={sectionRef} id="featured-work">
      {FEATURED_WORKS.map((work) => (
        <div key={work.id} className="featured-work-item">
          <div className="header-container">
            <h2 className="featured-title">{work.title}</h2>
            <p className="featured-subtitle">{work.subtitle}</p>
          </div>

          <div className="video-player-container">
            <iframe
              src={`https://www.youtube.com/embed/${work.videoId}?autoplay=0&mute=0&controls=1&rel=0`}
              title={work.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="content-bottom">
            <ul className="bullet-points">
              {work.bullets.map((bullet, idx) => (
                <li key={idx} className="bullet-item">{bullet}</li>
              ))}
            </ul>

            <a href="#contact" className="cta-button">
              Hire Me
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedWork;
