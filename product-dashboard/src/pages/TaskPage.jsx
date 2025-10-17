import TaskManager from '../components/TaskManager'

const TaskPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Task Management</h2>
        <p className="mt-2 text-gray-600">Organize and track your tasks efficiently</p>
      </div>
      <TaskManager />
    </div>
  )
}

export default TaskPage