# Student Management System

A modern web application built with React, Tailwind CSS, and Node.js for managing student information and tasks efficiently.

## 🚀 Features

- **Student Management**
  - Add new students with name, age, and email
  - Edit existing student information
  - Delete student records
  - Search students by name or email
  - Responsive grid layout for student cards

- **Task Management**
  - Create, edit, and delete tasks
  - Mark tasks as completed
  - Filter tasks by status (All, Active, Completed)
  - Local storage persistence
  - Dark mode support

- **Modern UI/UX**
  - Responsive design for all screen sizes
  - Tailwind CSS for styling
  - Smooth animations and transitions
  - Clean and intuitive interface
  - Dark mode support

## 🛠️ Technologies Used

- **Frontend**
  - React (with Vite)
  - React Router DOM
  - Tailwind CSS
  - Context API for state management
  - Custom hooks for data persistence

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-VictorOduorKe.git
   ```

2. Navigate to the project directory:
   ```bash
   cd product-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a .env file in the root directory with:
   ```
   VITE_API_URL=http://localhost:5000
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
src/
├── api/
│   └── studentApi.jsx      # API integration functions
├── components/
│   ├── Button.jsx         # Reusable button component
│   ├── Footer.jsx         # Application footer
│   ├── Header.jsx         # Navigation header
│   ├── LoadingSpinner.jsx # Loading indicator
│   ├── StudentCard.jsx    # Student display component
│   ├── StudentForm.jsx    # Student input form
│   └── TaskManager.jsx    # Task management component
├── contexts/
│   └── ThemeContext.jsx   # Theme management context
├── pages/
│   ├── StudentDashboard.jsx # Student management page
│   └── TaskPage.jsx       # Task management page
└── App.jsx               # Main application component
```

## 🌟 Usage

1. **Managing Students**
   - Navigate to the Students page
   - Click "Add Student" to create new student records
   - Use the search bar to filter students
   - Edit or delete students using card actions

2. **Managing Tasks**
   - Navigate to the Tasks page
   - Add new tasks using the input field
   - Toggle task completion status
   - Filter tasks using the status buttons
   - Delete completed tasks as needed

## 🔐 Backend API Endpoints

- `GET /students` - Retrieve all students
- `POST /students` - Create a new student
- `PUT /students/:id` - Update student information
- `DELETE /students/:id` - Delete a student

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is part of the PLP MERN Stack Development course.

## 👤 Author

- **Victor Oduor**
- GitHub: [VictorOduorKe](https://github.com/VictorOduorKe)

## 🙏 Acknowledgments

- PLP MERN Stack Development course instructors and mentors
- The React and Tailwind CSS communities
- All contributors to this project
