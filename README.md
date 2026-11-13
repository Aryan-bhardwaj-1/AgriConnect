# 🌱 AgriConnect – Farmer-to-Buyer Marketplace

### Connecting Farmers Directly with Buyers Through Technology

AgriConnect is a digital farmer-to-buyer marketplace designed to connect farmers directly with buyers. It aims to simplify agricultural trading, improve market accessibility, and reduce dependency on intermediaries.

The platform provides a digital environment where farmers and buyers can connect, explore agricultural products, and make the buying and selling process easier.

---
## here is an link - http://3.25.173.107/


## 🚀 Project Overview

In traditional agricultural markets, farmers often face challenges such as limited market access, dependency on middlemen, and difficulty finding suitable buyers.

**AgriConnect** aims to address these challenges by providing a digital marketplace where farmers and buyers can interact directly.

Our goal is to make agricultural trade more accessible, transparent, and efficient through technology.

---

## ✨ Key Features

- 🌾 **Farmer Dashboard:** A dedicated dashboard for farmers.
- 🛒 **Digital Marketplace:** A platform for connecting farmers and buyers.
- 🤝 **Direct Farmer-to-Buyer Connection:** Helps reduce dependency on intermediaries.
- 📦 **Product Discovery:** Makes agricultural products easier to explore.
- 🚚 **Delivery Support:** Marketplace interface with delivery-related visuals.
- 📱 **User-Friendly Interface:** Simple and responsive frontend experience.

*Note: Features may vary depending on the current implementation of the project.*

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Frontend build tool |
| Python | Backend programming |
| Flask | Backend framework and APIs |
| MySQL | Database |
| Git & GitHub | Version control |
| AWS EC2 | Cloud deployment |
| Gunicorn | Flask application server |
| Nginx | Web server and reverse proxy |
| GitHub Actions | CI/CD automation |

---

## 📂 Project Structure

```text
AgriConnect/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── dist/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation and Setup

Follow these steps to run AgriConnect on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/Aryan-bhardwaj-1/AgriConnect.git
```

### 2. Open the Project

```bash
cd AgriConnect
```

### 3. Backend Setup

Open a terminal:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Activate it on Linux/macOS:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the Flask backend:

```bash
python app.py
```

Backend API:

```text
http://127.0.0.1:5000
```

### 4. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local frontend URL displayed in your terminal (usually):

```text
http://localhost:5173
```

**Important:** For local development, configure the frontend API URL to point to your local Flask backend. Also configure the required database connection before using database-dependent features.

---

## ☁️ AWS Deployment

AgriConnect is deployed on an AWS EC2 Ubuntu server.

Deployment architecture:

```text
             GitHub Repository
                     |
                     |
               GitHub Actions
                     |
                     |
                 SSH Access
                     |
                     |
                AWS EC2
                     |
              ----------------
              |              |
           Nginx          Gunicorn
              |              |
              |           Flask API
              |
          React Frontend
              |
           Web Browser
```

### Deployment Components

- **AWS EC2:** Hosts the application.
- **Nginx:** Serves the React frontend and forwards API requests.
- **Gunicorn:** Runs the Flask backend.
- **GitHub Actions:** Automates deployment whenever changes are pushed to the main branch.

### CI/CD Workflow

The deployment pipeline follows these steps:

1. Developer pushes code to GitHub.
2. GitHub Actions workflow is triggered.
3. Workflow connects to AWS EC2 using SSH.
4. Latest code is pulled from the repository.
5. Backend dependencies are installed.
6. Flask application service is restarted.
7. Frontend production build is served through Nginx.


## 🎯 Project Objectives

- Connect farmers directly with potential buyers.
- Improve digital access to agricultural markets.
- Make agricultural product discovery easier.
- Promote technology-driven agricultural trade.
- Build a scalable digital marketplace.

---

##  Future Enhancements

- AI-powered crop price prediction.
- Smart product recommendations.
- Online payment integration.
- Real-time order tracking.
- Logistics and delivery optimization.
- Multilingual support for farmers.
- Mobile application.

---

##  Project Information

**Project Name:** AgriConnect – Farmer-to-Buyer Marketplace

**Developer:** Aryan Singh

**GitHub Repository:** Aryan-bhardwaj-1/AgriConnect

**Domain:** Agriculture Technology (AgriTech)

**Project Type:** Web-Based Marketplace

---

## 🤝 Contributions

Contributions, suggestions, and feedback are welcome.

If you would like to improve this project:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a Pull Request.

---

## ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub.

**Building a better digital marketplace for farmers, one step at a time! **
