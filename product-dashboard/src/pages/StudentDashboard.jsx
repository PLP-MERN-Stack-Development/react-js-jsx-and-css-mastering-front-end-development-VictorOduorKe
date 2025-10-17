import { useState, useEffect } from 'react'
import StudentCard from '../components/StudentCard'
import StudentForm from '../components/StudentForm'
import Button from '../components/Button'
import LoadingSpinner from '../components/LoadingSpinner'
import { fetchStudents, createStudent, updateStudent, deleteStudent } from '../api/studentApi'

const StudentDashboard = () => {
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editStudent, setEditStudent] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadStudents()
  }, [])

  const loadStudents = async () => {
    try {
      setIsLoading(true)
      const data = await fetchStudents()
      setStudents(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddStudent = async (studentData) => {
    try {
      const newStudent = await createStudent(studentData)
      setStudents([...students, newStudent])
      setShowForm(false)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleEditStudent = (student) => {
    setEditStudent(student)
    setShowForm(true)
  }

  const handleUpdateStudent = async (studentData) => {
    try {
      const updatedStudent = await updateStudent(editStudent._id, studentData)
      setStudents(students.map(s => s._id === updatedStudent._id ? updatedStudent : s))
      setShowForm(false)
      setEditStudent(null)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDeleteStudent = async (studentId) => {
    if (!confirm('Are you sure you want to delete this student?')) return

    try {
      await deleteStudent(studentId)
      setStudents(students.filter(s => s._id !== studentId))
    } catch (err) {
      setError(err.message)
    }
  }

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (isLoading) return <LoadingSpinner />
  if (error) return <div className="text-center text-red-600 py-8">Error: {error}</div>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <h2 className="text-2xl font-bold text-gray-900">Students</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <Button onClick={() => setShowForm(true)}>Add Student</Button>
        </div>
      </div>

      {showForm && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">
            {editStudent ? 'Edit Student' : 'Add New Student'}
          </h3>
          <StudentForm
            onSubmit={editStudent ? handleUpdateStudent : handleAddStudent}
            initialValues={editStudent}
          />
        </div>
      )}

      {filteredStudents.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No students found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map(student => (
            <StudentCard
              key={student._id}
              student={student}
              onEdit={handleEditStudent}
              onDelete={handleDeleteStudent}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default StudentDashboard