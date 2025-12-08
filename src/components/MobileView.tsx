import { useState } from "react";
import svgPaths from "../imports/svg-5h4l4kdqn1";
import img from "figma:asset/b272865e06c139db8e8033acae2cc3ad705e0a2c.png";
import RunwayLogo from "./RunwayLogo";
import basketballImage from "figma:asset/66cecfb41498ec5cb924536e472b6b8a17b81673.png";
import ImageCaption from "./ImageCaption";
import TheTruthText from "../imports/Group21";
import bowieImage from "figma:asset/9baeb2ea700d3fdda17d168a74992b05fb173694.png";

const vibrantColors = [
  '#FF006E', // Hot pink
  '#8338EC', // Purple
  '#FF6B35', // Orange
  '#FFBE0B', // Yellow
  '#FB5607', // Bright orange
  '#FF006E', // Magenta
  '#7209B7', // Deep purple
  '#F72585', // Pink
];

function getRandomColor() {
  return vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
}

// Colorful hover text components for mobile with shared color state
function MobileSubtitleText() {
  const [color, setColor] = useState('#FFFFFF');
  
  const handleColorChange = () => setColor(getRandomColor());
  const handleColorReset = () => setColor('#FFFFFF');
  
  return (
    <p 
      className="font-['ComputerSaysNo',sans-serif] leading-[0.75] not-italic text-[min(7vw,26px)] text-center max-w-[380px] cursor-pointer transition-colors duration-300"
      style={{ color }}
      onTouchStart={handleColorChange}
      onTouchEnd={handleColorReset}
      onMouseEnter={handleColorChange}
      onMouseLeave={handleColorReset}
    >
      A HUMANISTIC BUSINESS AGENCY<br />BY&nbsp;STEFAN&nbsp;P.
    </p>
  );
}

/**
 * Halftone pattern component for mobile
 */
function MobileHalftonePattern({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Mobile Halftone Pattern">
      {/* Top section */}
      <div className="absolute bottom-[74.68%] left-[0.08%] right-0 top-0" data-name="Component 3">
        <div className="absolute inset-[0.64%_81.13%_56.44%_0.5%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.64%_62.76%_56.44%_18.87%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[42.92%_81.13%_14.15%_0.5%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[85.85%_62.76%_2.38%_18.87%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-[2.38%] left-0 right-[81.63%] top-[85.85%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[42.92%_62.59%_14.15%_19.04%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.16%_14.05%_56.92%_67.58%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-[57.08%] left-[80.96%] right-[0.67%] top-0" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-[15.26%] left-[81.63%] right-0 top-[41.81%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[41.97%_43.72%_15.1%_37.91%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[84.74%_43.81%_2.38%_37.82%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.64%_43.81%_56.44%_37.82%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.64%_32.92%_56.44%_55.94%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[44.04%_32.92%_13.04%_55.94%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[56.12%_0.25%_0.95%_88.61%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[44.04%_21.61%_13.04%_67.25%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[43.56%_11.14%_13.51%_77.72%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[87.6%_32.92%_3.18%_55.94%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[88.39%_21.2%_3.98%_67.66%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[82.67%_21.2%_9.7%_67.66%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[85.85%_11.14%_6.52%_77.72%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-0 left-[75.39%] right-[13.47%] top-[92.37%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
      </div>
      {/* Second section */}
      <div className="absolute bottom-[34.5%] left-[0.08%] right-0 top-[3.51%]" data-name="Component 4">
        <div className="absolute inset-[0.64%_81.13%_56.44%_0.5%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.64%_62.76%_56.44%_18.87%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[42.92%_81.13%_14.15%_0.5%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[85.85%_62.76%_2.38%_18.87%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-[2.38%] left-0 right-[81.63%] top-[85.85%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[42.92%_62.59%_14.15%_19.04%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.16%_14.05%_56.92%_67.58%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-[57.08%] left-[80.96%] right-[0.67%] top-0" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-[15.26%] left-[81.63%] right-0 top-[41.81%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[41.97%_43.72%_15.1%_37.91%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[84.74%_43.81%_2.38%_37.82%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.64%_43.81%_56.44%_37.82%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.64%_32.92%_56.44%_55.94%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[44.04%_32.92%_13.04%_55.94%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[56.12%_0.25%_0.95%_88.61%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[44.04%_21.61%_13.04%_67.25%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[43.56%_11.14%_13.51%_77.72%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[87.6%_32.92%_3.18%_55.94%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[88.39%_21.2%_3.98%_67.66%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[82.67%_21.2%_9.7%_67.66%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[85.85%_11.14%_6.52%_77.72%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-0 left-[75.39%] right-[13.47%] top-[92.37%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
      </div>
      {/* Third section */}
      <div className="absolute bottom-[13.06%] left-0 right-[0.08%] top-[24.95%]" data-name="Component 5">
        <div className="absolute inset-[0.64%_81.13%_56.44%_0.5%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.64%_62.76%_56.44%_18.87%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[42.92%_81.13%_14.15%_0.5%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[85.85%_62.76%_2.38%_18.87%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-[2.38%] left-0 right-[81.63%] top-[85.85%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[42.92%_62.59%_14.15%_19.04%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.16%_14.05%_56.92%_67.58%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-[57.08%] left-[80.96%] right-[0.67%] top-0" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-[15.26%] left-[81.63%] right-0 top-[41.81%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[41.97%_43.72%_15.1%_37.91%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[84.74%_43.81%_2.38%_37.82%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.64%_43.81%_56.44%_37.82%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.64%_32.92%_56.44%_55.94%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[44.04%_32.92%_13.04%_55.94%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[56.12%_0.25%_0.95%_88.61%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[44.04%_21.61%_13.04%_67.25%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[43.56%_11.14%_13.51%_77.72%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[87.6%_32.92%_3.18%_55.94%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[88.39%_21.2%_3.98%_67.66%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[82.67%_21.2%_9.7%_67.66%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[85.85%_11.14%_6.52%_77.72%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-0 left-[75.39%] right-[13.47%] top-[92.37%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
      </div>
      {/* Fourth section */}
      <div className="absolute bottom-0 left-0 right-[0.08%] top-[38.02%]" data-name="Component 6">
        <div className="absolute inset-[0.64%_81.13%_56.44%_0.5%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.64%_62.76%_56.44%_18.87%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[42.92%_81.13%_14.15%_0.5%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[85.85%_62.76%_2.38%_18.87%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-[2.38%] left-0 right-[81.63%] top-[85.85%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[42.92%_62.59%_14.15%_19.04%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.16%_14.05%_56.92%_67.58%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-[57.08%] left-[80.96%] right-[0.67%] top-0" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-[15.26%] left-[81.63%] right-0 top-[41.81%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[41.97%_43.72%_15.1%_37.91%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[84.74%_43.81%_2.38%_37.82%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.64%_43.81%_56.44%_37.82%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[0.64%_32.92%_56.44%_55.94%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[44.04%_32.92%_13.04%_55.94%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[56.12%_0.25%_0.95%_88.61%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[44.04%_21.61%_13.04%_67.25%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[43.56%_11.14%_13.51%_77.72%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[87.6%_32.92%_3.18%_55.94%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[88.39%_21.2%_3.98%_67.66%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[82.67%_21.2%_9.7%_67.66%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute inset-[85.85%_11.14%_6.52%_77.72%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
        <div className="absolute bottom-0 left-[75.39%] right-[13.47%] top-[92.37%]" data-name="Rectangle">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
        </div>
      </div>
    </div>
  );
}

export default function MobileView() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Fixed Background - stays in place while content scrolls */}
      <div className="fixed inset-0 bg-[#19006A] z-0">
        {/* Background SVG */}
        <div className="absolute inset-0">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 377 1000">
            <path d={svgPaths.p2f645300} fill="#19006A" />
          </svg>
        </div>

        {/* Halftone Pattern */}
        <MobileHalftonePattern className="absolute inset-0" />
      </div>

      {/* Scrollable Content */}
      <div className="relative h-screen overflow-y-auto overflow-x-hidden z-10 snap-y snap-mandatory" style={{ height: '100dvh' }}>
        
        {/* Section 1 - Hero with Logo */}
        <section className="w-full flex items-center justify-center relative snap-start px-6" style={{ height: '100dvh' }}>
          {/* RUNWAY SERVICES LOGO - Mobile Centered and Larger */}
          <div className="flex flex-col items-center">
            <RunwayLogo className="w-[min(85vw,320px)] h-auto" />
            
            {/* Subtitle - Below Logo */}
            <div className="mt-[min(12vw,45px)]">
              <MobileSubtitleText />
            </div>
          </div>
        </section>

        {/* Section 2 - Text Only */}
        <section className="w-full flex items-center justify-center relative snap-start px-6" style={{ height: '100dvh' }}>
          {/* Text Content */}
          <div className="flex flex-col text-center w-full" style={{ maxWidth: 'calc(100vw - 48px)' }}>
            <p className="font-['GenericFont',sans-serif] text-white text-[24px] leading-[1.15] break-words overflow-wrap-anywhere">
              THIS COULD HAVE BEEN SOME METICULOUSLY CRAFTED TEXT THAT SOUNDS EXTREMELY TRENDY, GIVES THE ILLUSION OF EXPERTISE AND STILL TELLS YOU VERY LITTLE ABOUT WHAT WE ACTUALLY DO.
            </p>
          </div>
        </section>

        {/* Section 3 - Text Only */}
        <section className="w-full flex items-center justify-center relative snap-start px-6" style={{ height: '100dvh' }}>
          <div className="text-center w-full" style={{ maxWidth: 'calc(100vw - 48px)' }}>
            <p className="font-['GenericFont',sans-serif] text-white text-[24px] leading-[1.15] break-words">
              INSTEAD WE'LL HIT YOU WITH THE TRUTH..
            </p>
          </div>
        </section>

        {/* Section 4 - Text Only */}
        <section className="w-full flex items-center justify-center relative snap-start px-6" style={{ height: '100dvh' }}>
          <div className="text-center w-full" style={{ maxWidth: 'calc(100vw - 48px)' }}>
            <p className="font-['GenericFont',sans-serif] text-white text-[24px] leading-[1.15] break-words">
              PLENTY OF AGENCIES KNOW WHAT THEY'RE TALKING ABOUT.
            </p>
            <div className="flex justify-center mt-[1.15em]">
              <p className="font-['GenericFont',sans-serif] text-white text-[24px] leading-[1.15] break-words">
                BUT YOU DON'T REALLY LIKE WORKING WITH THEM.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 - Text Only */}
        <section className="w-full flex items-center justify-center relative snap-start px-6" style={{ height: '100dvh' }}>
          <div className="text-center w-full" style={{ maxWidth: 'calc(100vw - 48px)' }}>
            <p className="font-['GenericFont',sans-serif] text-white text-[24px] leading-[1.15] break-words">
              BECAUSE THEY DON'T <span className="whitespace-nowrap">LISTEN TO YOU.</span>
            </p>
          </div>
        </section>

        {/* Section 6 - Text Only */}
        <section className="w-full flex items-center justify-center relative snap-start px-6" style={{ height: '100dvh' }}>
          <div className="text-center w-full" style={{ maxWidth: 'calc(100vw - 48px)' }}>
            <p className="font-['GenericFont',sans-serif] text-white text-[24px] leading-[1.15] break-words">
              WE ASK THE <span className="whitespace-nowrap">RIGHT QUESTIONS.</span>
            </p>
          </div>
        </section>

        {/* Section 7 - Text Only */}
        <section className="w-full flex items-center justify-center relative snap-start px-6" style={{ height: '100dvh' }}>
          <div className="text-center w-full" style={{ maxWidth: 'calc(100vw - 48px)' }}>
            <p className="font-['GenericFont',sans-serif] text-white text-[24px] leading-[1.15]">
              USING SUPERBASIC™ THINKING WE DESIGN CULTURALLY-AWARE MEDIA EXPERIENCES THAT ARE HUMANISTIC IN NATURE AND GENERATE LEGACY<br />FOR OUR CLIENTS.
            </p>
          </div>
        </section>

        {/* Section 8 - SuperBasic™ Story Machine */}
        <section className="w-full flex items-center justify-center relative snap-start px-6" style={{ height: '100dvh' }}>
          <div className="text-center w-full" style={{ maxWidth: 'calc(100vw - 48px)' }}>
            <p className="font-['GenericFont',sans-serif] text-white text-[24px] leading-[1.15]">
              SUPERBASIC™ STORY MACHINE
            </p>
          </div>
        </section>

        {/* Section 9 - Contact */}
        <section className="w-full flex flex-col items-center justify-center relative snap-start px-6" style={{ height: '100dvh' }}>
          <div className="text-center w-full max-w-[300px]">
            <p className="font-['GenericFont',sans-serif] text-white text-[24px] leading-[1.15] mb-8">
              INTRIGUED? HIT US UP!
            </p>
            
            {/* Contact Buttons */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <a 
                href="https://www.linkedin.com/in/stefan-p-b95b8139/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 active:bg-white/20 transition-colors flex items-center justify-center"
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://wa.me/4917676867195" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 active:bg-white/20 transition-colors flex items-center justify-center"
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              
              <a 
                href="mailto:stefan@runwayservices.net"
                className="w-14 h-14 rounded-full bg-white/10 active:bg-white/20 transition-colors flex items-center justify-center"
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              
              <a 
                href="https://substack.com/@yoursubstack"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 active:bg-white/20 transition-colors flex items-center justify-center"
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Footer */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 text-white/60" style={{ fontSize: '1.05rem' }}>
            <a href="/imprint" className="active:text-white transition-colors font-['ComputerSaysNo',sans-serif] uppercase">IMPRINT</a>
            <span className="font-['ComputerSaysNo',sans-serif]">|</span>
            <a href="/privacy" className="active:text-white transition-colors font-['ComputerSaysNo',sans-serif] uppercase">PRIVACY POLICY</a>
          </div>
        </section>
      </div>
    </div>
  );
}