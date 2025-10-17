import TaskManager from './TaskManager'
import Button from './Button'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to Student Management
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Efficiently manage student information with our comprehensive management system.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Button onClick={() => window.location.href = '/students'}>
              View Students
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Manage Students</h3>
          <p className="text-gray-600 mb-4">Add, edit, and track student information in our comprehensive student management system.</p>
          <Button onClick={() => window.location.href = '/students'}>
            Go to Students
          </Button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Task Management</h3>
          <p className="text-gray-600 mb-4">Organize and track your tasks efficiently with our task management system.</p>
          <Button onClick={() => window.location.href = '/tasks'}>
            Go to Tasks
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
