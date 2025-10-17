import Button from './Button'

const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{student.name}</h3>
        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-medium">Age:</span> {student.age}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Email:</span> {student.email}
          </p>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="secondary" onClick={() => onEdit(student)}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => onDelete(student._id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StudentCard