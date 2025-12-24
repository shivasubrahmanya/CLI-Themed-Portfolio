import { useState, useEffect } from 'react';

interface BootSequenceProps {
    onComplete: () => void;
}

const BOOT_LOGS = [
    "BIOS Check... OK",
    "Loading Kernel...",
    "Mounting Virtual File System...",
    "Scanning user modules...",
    "Loading 'shivasubrahmanya' profile...",
    "Initializing shell environment...",
    "Starting system components [ OK ]",
    "Establishing neural link... [ OK ]",
    "System Ready."
];

export const BootSequence = ({ onComplete }: BootSequenceProps) => {
    const [lines, setLines] = useState<string[]>([]);

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < BOOT_LOGS.length) {
                setLines(prev => [...prev, BOOT_LOGS[currentIndex]]);
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(onComplete, 800); // Small pause before switching
            }
        }, 150); // Speed of logs

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="terminal-container" style={{ padding: '2rem' }}>
            {lines.map((line, index) => (
                <div key={index} className="output-line" style={{ color: index === BOOT_LOGS.length - 1 ? '#00FF00' : '#E0E0E0' }}>
                    {line}
                </div>
            ))}
        </div>
    );
};
