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
Specialized in statistical modeling, innovative AI solutions, and transforming raw data into actionable intelligence.

Locations: Adyar, Mangaluru
Contact: shivasubrahmanya8@gmail.com
GitHub: github.com/shivasubrahmanya
LinkedIn: linkedin.com/in/shivasubrahmanya
`
                    },
                    "skills.json": {
                        type: "text",
                        content: `{
  "Data Science": ["Numpy", "Pandas", "Scikit-Learn", "Matplotlib"],
  "AI & ML": ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch"],
  "Engineering": ["Python", "SQL", "JavaScript", "C/C++", "Java", "R"],
  "Tools": ["Power BI", "Git", "Jupyter", "Docker"]
}`
                    },
                    "experience.txt": {
                        type: "text",
                        content: `
[SUMMER 2024] Mentor @ Hack/Harbour 3.0
----------------------------------------
Role: Internship
Description: Mentored participants during a 10-day intensive bootcamp.
Key Responsibilities:
- Delivered technical sessions on emerging technologies.
- Guided project development.
- Facilitated knowledge sharing.
`
                    },
                    "education.txt": {
                        type: "text",
                        content: `
[2023 - 2027] Bachelor of Engineering - CSE (AIML)
Institution: Sahyadri College of Engineering and Management
GPA: 9.6 / 10.0
Status: IN_PROGRESS

[2021 - 2023] Pre University Course (PCMB)
Institution: Vivekananda Pre University Centre
GPA: 94.5%
Status: COMPLETED
`
                    },
                    "projects": {
                        type: "directory",
                        children: {
                            "digital_time_machine.txt": {
                                type: "text",
                                content: `Title: Digital Time Machine
Type: Machine Learning / Computer Vision
------------------------------------------
A project that transforms present-day images into historically accurate past renditions using ML.

Tech Stack: Python, Image Processing, ML Algorithms
Status: Completed
`
                            },
                            "edu_ease.txt": {
                                type: "text",
                                content: `Title: Edu Ease
Type: Web Platform
------------------------------------------
Personalized Learning Companion with speech recognition & text-to-speech for accessibility.

Tech Stack: JavaScript, HTML, CSS, Speech APIs
Status: Completed
`
                            },
                            "foodwallah.txt": {
                                type: "text",
                                content: `Title: Foodwallah
Type: Frontend Web App
------------------------------------------
Responsive food ordering application.

Tech Stack: React, CSS, Responsive Design
Status: Completed
`
                            },
                            "gmail_bot.txt": {
                                type: "text",
                                content: `Title: Gmail Auto-Responder
Type: Automation
------------------------------------------
n8n workflow for automatic email replies using Gmail API.

Tech Stack: n8n, JavaScript
`
                            },
                            "slack_bot.txt": {
                                type: "text",
                                content: `Title: Slack Notification Bot
Type: Automation
------------------------------------------
Real-time Slack alerts for critical updates via Webhooks.

Tech Stack: n8n, Slack API
`
                            }
                        }
                    },
                    "resume.pdf": {
                        type: "executable",
                        description: "Download Resume",
                        content: "LINK:https://github.com/shivasubrahmanya" // Mock link or actual assignment if available
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
