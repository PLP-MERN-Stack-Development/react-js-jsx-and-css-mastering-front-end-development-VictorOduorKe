const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export const fetchStudents = async () => {
  const response = await fetch(`${BASE_URL}/students`)
  if (!response.ok) throw new Error('Failed to fetch students')
  return response.json()
}

export const createStudent = async (studentData) => {
  const response = await fetch(`${BASE_URL}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
  })
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to create student')
  }
  return response.json()
}

export const updateStudent = async (id, studentData) => {
  const response = await fetch(`${BASE_URL}/students/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
  })
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to update student')
  }
  return response.json()
}

export const deleteStudent = async (id) => {
  const response = await fetch(`${BASE_URL}/students/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to delete student')
  }
  return true
}