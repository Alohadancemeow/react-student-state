import React, { useState } from 'react'
import Student from './Student'

function StudentList() {

    // # Create Student State.
    const [studentState, setStudentState] = useState({
        students: [
            { id: 1, name: '9A', edittingStatus: false },
            { id: 2, name: '9B', edittingStatus: false },
            { id: 3, name: '9C', edittingStatus: false },
            { id: 4, name: '9D', edittingStatus: false },
            { id: 5, name: '9E', edittingStatus: false },
            { id: 6, name: '9F', edittingStatus: false }
        ]
    })

    // # Delete.
    const deleteItemHandle = (index) => {

        // # Copying students data.
        const data = [...studentState.students]
        
        // # Finding index that want to delete.
        const deleteIndex = data.findIndex((item) => {
            return item.id === index
        })
        
        // # Deleting that index.
        data.splice(deleteIndex, 1)

        // # After deletion,
        // # Set new data into students.
        setStudentState({
            students: data
        })
    }

    // # Edit.
    const editItemHandle = (index, editData) => {

        // # Copying students data.
        const students = [...studentState.students]

        // # Finding index that want to edit.
        const edittingIndex = students.findIndex((item) => {
            return item.id === index
        })

        // # Set editted data to that index.
        students[edittingIndex] = editData

        // # After edittion,
        // # Set new data into students.
        setStudentState({
            students: students
        })
    }


    return (
        <div className="row">
            {
                studentState.students.map((item) => {
                    return (
                        <div key={item.id} className="col-lg-3 col-sm-4 mt-2">

                            <Student
                                data={item}
                                deleteStudent={deleteItemHandle.bind(this, item.id)}
                                editStudent={editItemHandle.bind(this)}
                            />

                        </div>
                    )
                })
            }
        </div>
    )
}


export default StudentList
