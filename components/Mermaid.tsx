"use client";
import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
  // 'base' allows us to completely override the default colors
  theme: "base", 
  securityLevel: "loose",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  
  // STRICT MONOCHROME VARIABLES
  themeVariables: {
    darkMode: true,
    background: '#000000',
    
    // Main Nodes
    primaryColor: '#000000',
    primaryTextColor: '#ffffff',
    primaryBorderColor: '#ffffff',
    
    // Lines & Arrows
    lineColor: '#ffffff',
    
    // Secondary Nodes (if used)
    secondaryColor: '#000000',
    secondaryTextColor: '#ffffff',
    secondaryBorderColor: '#ffffff',
    
    // Tertiary/Clusters
    tertiaryColor: '#000000',
    tertiaryTextColor: '#a3a3a3', // Neutral-400
    tertiaryBorderColor: '#525252', // Neutral-600
  },
});

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return (
    // Added 'grayscale' class to container as a failsafe
    <div className="mermaid overflow-x-auto flex justify-center p-4 bg-black rounded-lg grayscale">
      {chart}
    </div>
  );
}
