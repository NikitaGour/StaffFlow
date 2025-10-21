StaffFlow
Full-stack StaffFlow System built with MERN stack. Features secure JWT authentication, role-based access for admin and users, profile editing, and employee management (view, update, delete). Modern responsive UI using React &amp; Bootstrap for seamless experience

StaffFlow is a modern MERN stack application designed to simplify employee and admin workflows. It provides secure authentication, profile management, and a robust admin dashboard for managing staff efficiently.

🚀 Features

🔐 JWT Authentication – Secure login & registration system

👥 Role-based Access – Admin & User privileges

🧑‍💼 User Management – View, edit, and delete employees

🧾 Profile Page – Each user can view and update their own details

🧑‍💻 Admin Dashboard – Admins can manage all registered users

🎨 Responsive UI – Styled with Bootstrap and modern gradients for a clean look

🏗️ Tech Stack

Frontend: React.js, Bootstrap, CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Token)

⚙️ Installation
# Clone the repository
git clone https://github.com/yourusername/staffflow.git

# Navigate to the project
cd staffflow

# Install dependencies for both frontend and backend
Frontend: npm install axios bootstrap react-router-dom

Backend: npm init -y
npm install express mongoose cors dotenv bcryptjs jsonwebtoken nodemon

# Run the backend server
cd server
node index.js

# Run the frontend
cd client
npm start

🔑 Environment Variables

Create a .env file in the server directory with:

JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection_string

📸 Screenshots

🏠 Home Page
<img width="1366" height="728" alt="HomepageStafflfow" src="https://github.com/user-attachments/assets/aa85a10a-bfbf-4c17-9ffb-a1efce873795" />


🔑 Login & Register
<img width="1366" height="691" alt="login-registerstafflow" src="https://github.com/user-attachments/assets/42aece87-e593-4a20-b352-95d0c224c7fb" />

👤 User details
<img width="1366" height="696" alt="user-details" src="https://github.com/user-attachments/assets/025ffd98-16b0-4115-bf4c-df817a90aaf8" />


👤 User Details For admin
<img width="1366" height="691" alt="user-details-for-admin" src="https://github.com/user-attachments/assets/b15606e6-0d4a-43ac-a03d-1bf579e7a935" />

🧑‍💼 All Users Details For Admin 
<img width="1366" height="695" alt="all-users-details-for-admin" src="https://github.com/user-attachments/assets/f4d04556-9f1f-496e-8571-9eae3609143c" />
