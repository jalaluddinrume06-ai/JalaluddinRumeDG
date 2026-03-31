import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/FeaturedWork.css";

gsap.registerPlugin(ScrollTrigger);

const FeaturedWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      // Video Animation
      gsap.from(videoRef.current, {
        y: 150,
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
        },
      });

      // Bottom Content Animation (Staggered)
      if (contentRef.current) {
        const children = contentRef.current.children;
        gsap.from(Array.from(children), {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
          },
        });
      }

      // Parallax effect on the section background elements
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
      <div className="header-container" ref={headerRef}>
        <h2 className="featured-title">AI Fashion Commercial | Releva Brand</h2>
        <p className="featured-subtitle">
          AI-powered commercial video created with video editing, AI visuals, and music production
        </p>
      </div>

      <div className="video-player-container" ref={videoRef}>
        <iframe
          src="https://www.youtube.com/embed/g4SiL6awqPE?autoplay=0&mute=0&controls=1&rel=0"
          title="AI Fashion Commercial | Releva Brand"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="content-bottom" ref={contentRef}>
        <ul className="bullet-points">
          <li className="bullet-item">AI Video Generation</li>
          <li className="bullet-item">Cinematic Editing & Storytelling</li>
          <li className="bullet-item">AI Music & Sound Design</li>
        </ul>

        <a href="#contact" className="cta-button">
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default FeaturedWork;
