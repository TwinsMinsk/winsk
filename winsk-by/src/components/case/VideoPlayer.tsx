'use client';

import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Gauge } from 'lucide-react';

interface VideoPlayerProps {
    src: string;
    caption?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    className?: string;
}

const SPEEDS = [0.5, 1, 1.5, 2];

export function VideoPlayer({
    src,
    caption,
    autoPlay = true,
    loop = true,
    muted = true,
    className = ""
}: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [isMuted, setIsMuted] = useState(muted);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [showSpeedMenu, setShowSpeedMenu] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleSpeedChange = (speed: number, e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.playbackRate = speed;
            setPlaybackSpeed(speed);
            setShowSpeedMenu(false);
        }
    };

    return (
        <div className={`my-12 max-w-4xl mx-auto group ${className}`}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl transition-all duration-500 group-hover:border-[var(--color-accent-primary)]/30 group-hover:shadow-[var(--color-accent-primary)]/5">
                {/* Scanline Overlay Effect */}
                <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
                
                {/* Cyberpunk Border Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <video
                    ref={videoRef}
                    src={src}
                    className="w-full h-auto cursor-pointer block shadow-2xl"
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    playsInline
                    onClick={togglePlay}
                />

                {/* Controls Overlay */}
                <div className="absolute bottom-4 right-4 flex items-center gap-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                    {/* Speed Selector */}
                    <div className="relative">
                        {showSpeedMenu && (
                            <div className="absolute bottom-full right-0 mb-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden flex flex-col min-w-[60px] shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
                                {SPEEDS.map((speed) => (
                                    <button
                                        key={speed}
                                        onClick={(e) => handleSpeedChange(speed, e)}
                                        className={`px-3 py-1.5 text-[10px] font-mono hover:bg-[var(--color-accent-primary)] hover:text-white transition-colors text-left ${playbackSpeed === speed ? 'text-[var(--color-accent-primary)]' : 'text-white/70'}`}
                                    >
                                        {speed}x
                                    </button>
                                ))}
                            </div>
                        )}
                        <button 
                            onClick={(e) => { e.stopPropagation(); setShowSpeedMenu(!showSpeedMenu); }}
                            className={`p-2 rounded-full border transition-all backdrop-blur-md flex items-center gap-1.5 ${showSpeedMenu ? 'bg-[var(--color-accent-primary)]/20 border-[var(--color-accent-primary)] text-white' : 'bg-black/60 border-white/10 text-white/70 hover:text-white hover:bg-black/80'}`}
                        >
                            <Gauge size={16} />
                            <span className="text-[10px] font-mono font-bold">{playbackSpeed}x</span>
                        </button>
                    </div>

                    <button 
                        onClick={toggleMute}
                        className="p-2 rounded-full bg-black/60 border border-white/10 text-white/70 hover:text-white hover:bg-black/80 transition-all backdrop-blur-md"
                    >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                    
                    <button 
                        onClick={togglePlay}
                        className="p-2 rounded-full bg-[var(--color-accent-primary)]/80 text-white shadow-lg hover:scale-110 transition-all backdrop-blur-md flex items-center justify-center w-10 h-10"
                    >
                        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
                    </button>
                </div>

                {/* Status Indicator (Terminal Style) */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                    <div className="flex items-center gap-2 px-2 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-md">
                        <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-[var(--color-terminal-green)] animate-pulse' : 'bg-red-500'}`} />
                        <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest flex items-center gap-1.5">
                            {isPlaying ? (
                                <>
                                    Live_Feed
                                    <span className="opacity-40">|</span>
                                    <span className="text-[var(--color-accent-primary)]">{playbackSpeed}x</span>
                                </>
                            ) : (
                                'System_Paused'
                            )}
                        </span>
                    </div>
                </div>
            </div>

            {caption && (
                <div className="text-sm text-[var(--color-text-secondary)] text-center mt-4 font-mono flex items-center justify-center gap-2 opacity-80 group-hover:opacity-100 transition-all">
                    <span className="text-[var(--color-terminal-green)] opacity-60 italic">{'>'}</span>
                    {caption}
                </div>
            )}
        </div>
    );
}
