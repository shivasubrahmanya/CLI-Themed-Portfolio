import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import './Terminal.css';
import { fileSystem, VirtualFile } from './FileSystem';

interface HistoryItem {
    type: 'input' | 'output';
    content: React.ReactNode;
    path?: string;
}

const USER = "shiva";
const HOST = "portfolio";

export const Terminal = () => {
    const [history, setHistory] = useState<HistoryItem[]>([
        {
            type: 'output',
            content: (
                <div className="hero-section">
                    <img
                        src={fileSystem["home"].children?.["shiva"].children?.["profile.png"].content}
                        alt="Profile"
                        className="hero-image"
                    />
                    <div className="hero-text">
                        <div className="hero-name">Shivasubrahmanya K C</div>
                        <div className="hero-role">Data Science & Machine Learning Engineer</div>
                        <div className="hero-bio">
                            Identity Verified.<br />
                            Specialized in statistical modeling, innovative AI solutions, and transforming raw data into actionable intelligence.<br />
                            <br />
                            <span style={{ color: 'var(--term-dim)' }}>Type 'help' to view available commands.</span>
                        </div>
                    </div>
                </div>
            )
        }
    ]);
    const [currentPath, setCurrentPath] = useState<string[]>(["home", "shiva"]);
    const [inputValue, setInputValue] = useState("");
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'auto' });
    }, [history]);

    // Focus management
    useEffect(() => {
        const handleClick = () => inputRef.current?.focus();
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    // Helper: Get current directory object
    const getCurrentDir = (): VirtualFile | null => {
        let current: VirtualFile | undefined = fileSystem["home"]; // Start at root/home
        // But our path starts with "home", "shiva"
        // Let's traverse
        for (let i = 1; i < currentPath.length; i++) {
            if (current && current.children) {
                current = current.children[currentPath[i]];
            } else {
                return null;
            }
        }
        return current || null;
    };

    const handleCommand = (cmdStr: string) => {
        const trimmed = cmdStr.trim();
        if (!trimmed) return;

        // Add to history
        const newHistory: HistoryItem[] = [...history, {
            type: 'input',
            content: trimmed,
            path: `~${currentPath.length > 2 ? '/' + currentPath.slice(2).join('/') : ''}`
        }];

        const args = trimmed.split(/\s+/);
        const cmd = args[0].toLowerCase();

        // --- COMMAND LOGIC ---
        let output: React.ReactNode = "";

        switch (cmd) {
            case 'help':
                output = (
                    <div>
                        Available commands:
                        <br />&nbsp;&nbsp;ls&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- List directory contents
                        <br />&nbsp;&nbsp;cd [dir]&nbsp;&nbsp;- Change directory (.. for up)
                        <br />&nbsp;&nbsp;cat [file]&nbsp;- Display file content
                        <br />&nbsp;&nbsp;clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Clear terminal
                        <br />&nbsp;&nbsp;whoami&nbsp;&nbsp;&nbsp;&nbsp;- Display profile info
                        <br />&nbsp;&nbsp;neofetch&nbsp;&nbsp;- System information
                        <br />&nbsp;&nbsp;open [url]&nbsp;- Open external link
                    </div>
                );
                break;

            case 'clear':
                setHistory([]);
                return; // Special case

            case 'whoami':
                // Shortcut to cat about.txt
                output = fileSystem["home"]?.children?.["shiva"]?.children?.["about.txt"]?.content || "User info not found.";
                break;

            case 'ls':
                const dir = getCurrentDir();
                if (dir && dir.children) {
                    output = (
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            {Object.entries(dir.children).map(([name, file]) => (
                                <span key={name} style={{
                                    color: file.type === 'directory' ? 'var(--term-blue)' : 'var(--term-text)',
                                    fontWeight: file.type === 'directory' ? 'bold' : 'normal'
                                }}>
                                    {name}{file.type === 'directory' ? '/' : ''}
                                </span>
                            ))}
                        </div>
                    );
                } else {
                    output = "Empty directory";
                }
                break;

            case 'cd':
                const target = args[1];
                if (!target || target === "~") {
                    setCurrentPath(["home", "shiva"]);
                    output = "";
                } else if (target === "..") {
                    if (currentPath.length > 2) {
                        setCurrentPath(prev => prev.slice(0, -1));
                    }
                    output = "";
                } else {
                    const current = getCurrentDir();
                    if (current?.children?.[target] && current.children[target].type === 'directory') {
                        setCurrentPath(prev => [...prev, target]);
                    } else {
                        output = `cd: no such directory: ${target}`;
                    }
                }
                break;

            case 'cat':
                const filename = args[1];
                const currentD = getCurrentDir();
                if (filename && currentD?.children?.[filename]) {
                    const file = currentD.children[filename];
                    if (file.type === 'text') {
                        output = <div style={{ whiteSpace: 'pre-wrap' }}>{file.content}</div>;
                    } else if (file.type === 'image') {
                        output = (
                            <div>
                                <img
                                    src={file.content}
                                    alt={filename}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '300px',
                                        border: '2px solid var(--term-dim)',
                                        marginTop: '10px'
                                    }}
                                />
                                <div style={{ color: 'var(--term-dim)', fontSize: '0.8rem' }}>Image: {filename}</div>
                            </div>
                        );
                    } else if (file.type === 'directory') {
                        output = `cat: ${filename}: Is a directory`;
                    } else if (file.type === 'executable') {
                        output = `Binary file (type 'open' to execute)`; // simple logic
                    }
                } else {
                    output = `cat: ${filename}: No such file`;
                }
                break;

            case 'neofetch':
                output = (
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div style={{ color: 'var(--term-green)', whiteSpace: 'pre' }}>
                            {`       _
      (_)
  ___  _
 / __|| |
 \\__ \\| |
 |___/|_|
`}
                        </div>
                        <div>
                            <div style={{ color: 'var(--term-green)', fontWeight: 'bold' }}>shiva@portfolio</div>
                            <div>----------------</div>
                            <div>OS: PortfolioOS v2.0</div>
                            <div>Shell: ReactTerm</div>
                            <div>Resolution: 1920x1080</div>
                            <div>Uptime: Forever</div>
                            <div>Stack: React, TypeScript, Vite</div>
                        </div>
                    </div>
                );
                break;

            case 'open':
                // Simple open logic
                if (args[1]) {
                    window.open(args[1], '_blank');
                    output = `Opening ${args[1]}...`;
                } else {
                    output = "Usage: open [url]";
                }
                break;

            default:
                output = `Command not found: ${cmd}`;
        }

        if (output) {
            newHistory.push({ type: 'output', content: output });
        }
        setHistory(newHistory);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(inputValue);
            setCommandHistory(prev => [...prev, inputValue]);
            setHistoryIndex(commandHistory.length + 1);
            setInputValue("");
        } else if (e.key === 'ArrowUp') {
            // History navigation logic (simplified)
            e.preventDefault();
            // TODO: strict history nav
        }
    };

    return (
        <div className="terminal-container">
            {history.map((item, i) => (
                <div key={i} className="output-line">
                    {item.type === 'input' ? (
                        <div className="input-line">
                            <span className="prompt">{`${USER}@${HOST}:`}</span>
                            <span className="path">{item.path}$</span>
                            <span style={{ marginLeft: '10px' }}>{item.content}</span>
                        </div>
                    ) : (
                        <div>{item.content}</div>
                    )}
                </div>
            ))}

            <div className="input-line">
                <span className="prompt">{`${USER}@${HOST}:`}</span>
                <span className="path">
                    {`~${currentPath.length > 2 ? '/' + currentPath.slice(2).join('/') : ''}`}
                    $
                </span>
                <input
                    ref={inputRef}
                    className="command-input"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                    style={{ marginLeft: '10px' }}
                />
            </div>
            <div ref={bottomRef} />
        </div>
    );
};
