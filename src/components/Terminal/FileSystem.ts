export type FileType = 'text' | 'directory' | 'executable' | 'image';

export interface VirtualFile {
    type: FileType;
    content?: string;
    children?: { [key: string]: VirtualFile };
    description?: string; // For 'ls' metadata
}

// Image path (in public folder)
const profileImg = "/profile.png";

export const fileSystem: { [key: string]: VirtualFile } = {
    "home": {
        type: "directory",
        children: {
            "shiva": {
                type: "directory",
                children: {
                    "profile.png": {
                        type: "image",
                        content: profileImg,
                        description: "Profile Picture"
                    },
                    "about.txt": {
                        type: "text",
                        content: `SHIVASUBRAHMANYA K C
Data Science & Machine Learning Engineer

Identity Verified.
Transforming raw data into actionable intelligence. Specialized in statistical modeling and innovative AI solutions.

Contact: shivasubrahmanyakc@gmail.com
GitHub: github.com/shivasubrahmanya
LinkedIn: linkedin.com/in/shivasubrahmanya
`
                    },
                    "skills.json": {
                        type: "text",
                        content: `{
  "Data Science & Analysis": ["Numpy", "Pandas", "Scikit-Learn", "Matplotlib"],
  "AI & Machine Learning": ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch"],
  "Core Engineering": ["Python", "SQL", "JavaScript", "HTML/CSS", "R", "Java", "C/C++"],
  "Tools & Infrastructure": ["Microsoft Power BI", "Git", "Jupyter", "GitHub"]
}`
                    },
                    "experience.txt": {
                        type: "text",
                        content: `
[Summer 2024] Mentor @ Hack/Harbour 3.0
----------------------------------------
Role: Internship
Description: Mentored participants during a 10-day intensive bootcamp, delivering sessions and guiding project development. Supported collaborative learning and exploration of emerging technologies.

Key Responsibilities:
- Mentored participants during intensive 10-day program
- Delivered technical sessions on emerging technologies
- Guided project development and implementation
- Supported collaborative learning environment
- Facilitated knowledge sharing and skill development

Skills Developed: Mentoring, Technical Training, Project Management, Team Leadership, Knowledge Transfer
`
                    },
                    "education.txt": {
                        type: "text",
                        content: `
[2023 - 2027] Bachelor of Engineering - CSE (AIML)
Institution: Sahyadri College of Engineering and Management
Location: Adyar, Mangaluru
GPA: 9.6 / 10.0
Status: IN_PROGRESS
Description: Specializing in Artificial Intelligence and Machine Learning. Focus: Practical applications & real-world problem solving.

[2021 - 2023] Pre University Course (PCMB)
Institution: Vivekananda Pre University Centre
Location: Puttur
GPA: 94.5%
Status: COMPLETED
Description: Foundation in Physics, Chemistry, Mathematics, Biology. Focus: Analytical & problem-solving skills.
`
                    },
                    "projects": {
                        type: "directory",
                        children: {
                            "01_digital_time_machine.txt": {
                                type: "text",
                                content: `Title: Digital Time Machine
Type: Machine Learning / Computer Vision
------------------------------------------
A Machine Learning project that transforms present-day images into historically accurate past renditions of the same locations, bridging time by recreating the visual essence of different historical eras.

Tech Stack: Machine Learning, Computer Vision, Python, Image Processing
Code: https://github.com/shivasubrahmanya/Digital-time-Machine
Features:
- Historical image transformation
- Visual essence recreation
- Interactive time travel experience
- Advanced ML algorithms
`
                            },
                            "02_edu_ease.txt": {
                                type: "text",
                                content: `Title: Edu Ease
Type: Web Platform
------------------------------------------
Your Personalized Learning Companion - A web platform with speech recognition & text-to-speech for accessibility. Features personalized and gamified learning modules for enhanced engagement.

Tech Stack: JavaScript, HTML, CSS, Speech Recognition, Text-to-Speech
Demo: https://eduease-hazel.vercel.app/
Code: https://github.com/shivasubrahmanya/EDUEASE
Features:
- Speech recognition integration
- Text-to-speech functionality
- Personalized learning paths
- Gamified learning modules
`
                            },
                            "03_foodwallah.txt": {
                                type: "text",
                                content: `Title: Foodwallah
Type: Frontend Web App
------------------------------------------
Food Ordering Web Application - A fully frontend-based food ordering web app built with HTML, CSS, and JavaScript. Designed to be responsive and interactive for an engaging user experience.

Tech Stack: HTML, CSS, JavaScript, Responsive Design, UI/UX, React
Code: https://github.com/Manvith-kumar16/FoodWallah
Features:
- Responsive web design
- Interactive user interface
- Real-world food ordering simulation
- Modern web technologies
`
                            },
                            "04_rag_chatbot.txt": {
                                type: "text",
                                content: `Title: RAG Chatbot (PDF Intelligence System)
Type: AI / Automation
------------------------------------------
An n8n-powered Retrieval-Augmented Generation (RAG) chatbot that enables intelligent question-answering over large PDF documents like Amazon’s Annual Report.

Tech Stack: n8n, Pinecone, Ollama Embeddings, Gemini, RAG
Code: https://github.com/shivasubrahmanya/n8n-Automations/tree/main/RAG%20agent
Features:
- Automated PDF ingestion and chunking from Google Drive
- Vector storage and semantic search using Pinecone
- Context-aware chatbot with memory support
- Local embeddings via Ollama for cost-efficient retrieval
`
                            },
                            "05_slack_bot.txt": {
                                type: "text",
                                content: `Title: Slack Notification Bot
Type: Automation
------------------------------------------
An n8n workflow that sends instant Slack alerts for important triggers like new form submissions or database updates. Ensures teams never miss critical updates.

Tech Stack: n8n, Slack API, Webhooks
Code: https://github.com/shivasubrahmanya/n8n-Automations/tree/main/Order_E-mail_Automation
Features:
- Real-time Slack alerts
- Webhook-based triggers
- Customizable channel notifications
- Streamlined team communication
`
                            },
                            "06_ai_mental_wellness.txt": {
                                type: "text",
                                content: `Title: AI Mental Wellness & Burnout Assistant
Type: AI / Full Stack
------------------------------------------
A full-stack AI-powered mental wellness application that analyzes emotions, detects burnout, and provides personalized wellness recommendations using advanced machine learning models.

Tech Stack: FastAPI, Streamlit, Hugging Face, OpenCV, Faster Whisper, Microsoft Azure, Docker
Code: https://github.com/shivasubrahmanya/AI-Mental-Wellness-and-Burnout-Assistant
Features:
- Text, face, voice, and video emotion analysis
- AI-driven burnout assessment
- Personalized wellness suggestions
- Anonymous privacy-first mode
- Real-time emotion tracking
- Azure cloud deployment
`
                            },
                            "07_synergysphere.txt": {
                                type: "text",
                                content: `Title: SynergySphere – Team Collaboration MVP
Type: Full Stack
------------------------------------------
A full-stack team collaboration MVP that enables project management, task tracking, real-time communication, and smart notifications with a modern, responsive UI.

Tech Stack: React, TypeScript, FastAPI, MySQL, WebSockets, JWT, CSS3
Code: https://github.com/shivasubrahmanya/SynergySpherre
Features:
- JWT-based authentication and role management
- Project and task management system
- Real-time collaboration using WebSockets
- In-app and email notifications
- Responsive modern UI
- Secure backend with FastAPI and MySQL
`
                            },
                            "08_college_mentorship.txt": {
                                type: "text",
                                content: `Title: College Mentorship Platform
Type: Full Stack
------------------------------------------
A full-stack mentorship platform connecting college seniors (mentors) with juniors (mentees), featuring role-based access, resources sharing, leaderboards, and admin moderation.

Tech Stack: FastAPI, React, TypeScript, MySQL, SQLAlchemy, JWT, Tailwind CSS
Code: https://github.com/shivasubrahmanya/College-Placement-Mentorship
Features:
- JWT-based authentication with role-based access
- Mentor directory with advanced filters
- Posts and resources with admin moderation
- Real-time chat using polling
- Leaderboard with DB triggers and procedures
- Admin dashboard and verification workflow
`
                            },
                            "09_ai_health_tracker.txt": {
                                type: "text",
                                content: `Title: AI Health Tracker
Type: AI / Full Stack
------------------------------------------
An AI-powered health tracking platform that helps users monitor daily health metrics, analyze meals and mood, and receive personalized insights to improve overall well-being.

Tech Stack: React 19, TypeScript, Node.js, Express.js, MongoDB, JWT, Recharts, AI Analytics
Code: https://github.com/shivasubrahmanya/Health-Tracker
Features:
- Daily health score calculation (steps, water, sleep, mood)
- AI-based health risk assessment
- Smart food analysis (Healthy vs Junk detection)
- Personalized AI diet plans & recommendations
- Interactive dashboards with charts and trends
- Mood & stress tracking with historical insights
- Achievement badges and streak system
`
                            }
                        }
                    },
                    "resume.pdf": {
                        type: "executable",
                        description: "Download Resume",
                        content: "LINK:/Shivasubrahmanya_K_C_Resume.pdf"
                    }
                }
            }
        }
    }
};

export const getFile = (pathItems: string[], currentDir: string[]): VirtualFile | null => {
    // Simplified resolution logic for now
    // Assume absolute path /home/shiva/... or relative if implemented
    // For now, let's just expose the hardcoded structure helper
    return null;
};
