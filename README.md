# ⚖️ Justice AI – Legal Rights Assistant  

### 🧠 AI-Powered Legal Awareness Platform  

**Justice AI** is an intelligent chatbot designed to make **Indian laws simple and accessible** for everyone.  
It uses a **Transformer-based LLM – Gemini 2.5 Flash**, capable of understanding and explaining complex legal content in clear, human-friendly language.  

---

## 🚀 Features  

- 💬 **Smart Legal Chatbot** – Answers user questions about Indian laws in simple English.  
- 🧠 **AI-Powered Reasoning** – Uses the Gemini 2.5 Flash model for legal understanding and section identification.  
- ⚡ **Fast & Scalable** – Single unified model handles reasoning, interpretation, and response generation.  
- 📜 **Law Section References** – Provides accurate IPC and Act sections in responses.  
- 🌐 **Modern Web Interface** – Built using React, TypeScript, and Tailwind CSS.  

---

## 🧩 Tech Stack  

| Layer | Technology |
|-------|-------------|
| **Frontend** | React + TypeScript + Vite |
| **UI Framework** | shadcn-ui + Tailwind CSS |
| **AI Model** | Transformer-based LLM – Gemini 2.5 Flash |
| **Backend / API** | Node.js + Express |
| **Data Source** | Indian Penal Code, Constitution Acts, Consumer Protection Act, etc. |

---

## ⚙️ Project Setup  

### 🧾 Requirements  

Ensure you have installed:  
- Node.js (v18 or above)  
- npm (v9 or above)  
- Internet connection (for model access)  

---

### 📦 Installation  

```bash
# Step 1: Clone this repository
git clone https://github.com/<your-username>/justice-ai.git

# Step 2: Navigate to the project directory
cd justice-ai

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
The app will run at 👉 http://localhost:5173

📦 Required npm Packages
Package	Purpose
react	Core React library for UI building
react-dom	DOM rendering for React components
vite	Fast build tool and development server
typescript	Type-safe development environment
tailwindcss	Utility-first CSS framework for design
@shadcn/ui	Ready-made accessible UI components
lucide-react	Icon set for the interface
axios	For API communication
framer-motion	Smooth animations and transitions
dotenv	Environment variable management
express	Lightweight backend framework

Install all dependencies:

bash
Copy code
npm install react react-dom vite typescript tailwindcss @shadcn/ui lucide-react axios framer-motion dotenv express
🧠 System Architecture
sql
Copy code
User Query
   ↓
Preprocessing & Tokenization
   ↓
Vector Search / Context Retrieval
   ↓
Fine-Tuned Legal LLM (Gemini 2.5 Flash)
   ↓
Answer Generation with Acts & Sections
   ↓
Frontend (Chat Interface)
📈 Future Enhancements
🎙️ Voice-based query interaction

🗣️ Multilingual (regional language) support

📄 Legal document summarization and case file analysis

🔗 Integration with government legal portals

🎯 Objective
Justice AI bridges the gap between citizens and legal awareness by simplifying complex Indian laws into clear, understandable explanations.
It empowers users to learn their rights confidently and promotes accessible digital legal literacy.

👨‍💻 Team
Developed by:
🎓 B.Tech IT Students – AVC College of Engineering for EDUNET Project
