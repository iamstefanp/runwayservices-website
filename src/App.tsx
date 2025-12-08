import { useEffect, useState } from "react";
import DesktopView from "./components/DesktopView";
import MobileView from "./components/MobileView";
import Imprint from "./components/Imprint";
import PrivacyPolicy from "./components/PrivacyPolicy";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  
  // Set meta tags for SEO
  useEffect(() => {
    // Update title
    document.title = "Runway Services - Creative Agency & Marketing Solutions";
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', 'Runway Services - We ask the right questions. A creative agency that actually listens to you, designing sales and marketing operations for your business.');
    updateMetaTag('keywords', 'creative agency, marketing, design, sales operations, runway services');
    updateMetaTag('author', 'Runway Services');
    updateMetaTag('robots', 'index, follow');
    
    // Open Graph tags for social media
    updateMetaTag('og:title', 'Runway Services - Creative Agency', true);
    updateMetaTag('og:description', 'We ask the right questions. A creative agency that actually listens to you.', true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', window.location.href, true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'Runway Services - Creative Agency');
    updateMetaTag('twitter:description', 'We ask the right questions. A creative agency that actually listens to you.');
    
    // Viewport (usually already set but ensuring it's there)
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewport);
    }
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle navigation
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/imprint') {
      setCurrentPage('imprint');
    } else if (path === '/privacy') {
      setCurrentPage('privacy');
    } else {
      setCurrentPage('home');
    }

    // Handle link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin) {
          e.preventDefault();
          window.history.pushState({}, '', url.pathname);
          if (url.pathname === '/imprint') {
            setCurrentPage('imprint');
          } else if (url.pathname === '/privacy') {
            setCurrentPage('privacy');
          } else {
            setCurrentPage('home');
          }
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Show imprint or privacy policy
  if (currentPage === 'imprint') {
    return <Imprint />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy />;
  }

  // Mobile layout - scrollable parallax
  if (isMobile) {
    return (
      <div className="w-full h-screen bg-[#19006A]">
        <MobileView />
      </div>
    );
  }

  // Desktop layout - scrollable parallax
  return (
    <div className="w-full h-screen bg-[#19006A]">
      <DesktopView />
    </div>
  );
}