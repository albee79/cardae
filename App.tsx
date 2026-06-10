import React, { useState } from "react";
import { PITCH_SLIDES } from "../data";
import { ChevronLeft, ChevronRight, Presentation, Award, BookOpen, Layers, CheckCircle } from "lucide-react";

export default function SlidePresentation() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : PITCH_SLIDES.length - 1));
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev < PITCH_SLIDES.length - 1 ? prev + 1 : 0));
  };

  const currentSlide = PITCH_SLIDES[currentSlideIndex];

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl bg-stone-950 border border-stone-850 p-6 md:p-8 shadow-2xl overflow-hidden relative">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-stone-850 pb-6 mb-8 gap-4">
        <div className="space-y-1">
          <span className="text-amber-500 font-mono tracking-widest text-xs uppercase flex items-center gap-1.5 font-semibold">
            <Presentation className="w-3.5 h-3.5 animate-pulse" /> Pitch Presentation
          </span>
          <h3 className="text-2xl font-serif text-stone-100 font-medium tracking-tight">
            Slide-by-Slide Strategy
          </h3>
        </div>
        <p className="text-xs text-stone-500 max-w-sm leading-relaxed">
          The complete corporate pitch documenting the market demand, high-margin direct-distribution model, and editorial blueprint. (13 Slides)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Direct Navigation Index */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto pb-4 lg:pb-0 scrollbar-thin scrollbar-thumb-stone-800 h-auto lg:h-[480px] max-h-[480px]">
          {PITCH_SLIDES.map((slide, idx) => (
            <button
              key={slide.number}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`text-left p-3 rounded-xl border shrink-0 lg:shrink transition-all duration-200 min-w-[160px] lg:min-w-0 ${
                currentSlideIndex === idx
                  ? "bg-amber-600/10 border-amber-500/40 text-stone-100"
                  : "bg-stone-900/40 border-stone-850 hover:bg-stone-900 text-stone-500 hover:text-stone-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`font-mono text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  currentSlideIndex === idx 
                    ? "bg-amber-600/20 text-amber-400 border border-amber-500/30" 
                    : "bg-stone-800 text-stone-500"
                }`}>
                  {slide.number}
                </span>
                <span className="text-xs font-serif font-medium truncate">
                  {slide.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Column: Premium Active Slide Stage */}
        <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl bg-stone-900/50 border border-stone-850 p-6 md:p-10 relative">
          
          {/* Subtle grid pattern background on active frame */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] rounded-2xl pointer-events-none" />

          {/* Active slide layout */}
          <div className="space-y-6 relative z-10">
            {/* Top info */}
            <div className="flex justify-between items-center pb-4 border-b border-stone-850/60">
              <span className="font-mono text-[10px] tracking-widest text-amber-500/80 uppercase font-semibold">
                CARDÆ PITCH DECK // SLIDE {currentSlide.number} OF {PITCH_SLIDES.length}
              </span>
              <span className="text-[10px] font-mono text-stone-600">CONFIDENTIAL</span>
            </div>

            {/* Slide Headings */}
            <div className="space-y-1">
              <h4 className="text-3xl font-serif text-stone-100 font-medium tracking-tight">
                {currentSlide.title}
              </h4>
              {currentSlide.subtitle && (
                <p className="font-sans text-xs uppercase tracking-wider text-amber-500/75">
                  {currentSlide.subtitle}
                </p>
              )}
            </div>

            {/* Slide Body Bullet points */}
            <div className="space-y-4 py-2">
              {currentSlide.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 text-stone-300">
                  <CheckCircle className="w-4 h-4 text-amber-500/80 shrink-0 mt-1" />
                  <p className="text-sm md:text-base leading-relaxed text-stone-350">{point}</p>
                </div>
              ))}
            </div>

            {/* Metrics visualizer (if defined) */}
            {currentSlide.metrics && (
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-850/60">
                {currentSlide.metrics.map((metric, index) => (
                  <div key={index} className="bg-stone-950/60 p-4 rounded-xl border border-stone-800 text-center">
                    <div className="text-2xl md:text-3xl font-serif font-bold text-amber-500 tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-stone-500 font-mono mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Visual Highlight or details overlay (if defined) */}
            {currentSlide.visualHighlight && !currentSlide.metrics && (
              <div className="p-4 bg-stone-950 border border-stone-850 rounded-xl">
                <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 block mb-1">
                  Design & Production Suggestion
                </span>
                <p className="text-xs text-stone-400 font-serif italic">
                  {currentSlide.visualHighlight}
                </p>
              </div>
            )}
          </div>

          {/* Nav Controls */}
          <div className="flex justify-between items-center pt-8 border-t border-stone-850/60 mt-8 relative z-10">
            <div className="text-xs text-stone-500 font-mono">
              Use arrows below or index list to navigate the proposal
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-stone-150 border border-stone-700 flex items-center justify-center transition-all duration-200"
                title="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-stone-150 border border-stone-700 flex items-center justify-center transition-all duration-200"
                title="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
