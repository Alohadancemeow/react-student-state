import React, { useRef } from 'react'

function Student(props) {

    // # Recieve properties from studentList component.
    const { data, deleteStudent, editStudent } = props

    // # Create a inputReference.
    const updatedInputName = useRef()

    // # Delete Student
    const onDeleteStudent = () => {
        deleteStudent()
    }

    // # Edit Student.
    // # Change status false -> true.
    const onEditStudent = () => {
        const editData = {
            id: data.id,
            name: data.name,
            edittingStatus: !data.edittingStatus
        }

        editStudent(data.id, editData)
    }

    // # Confrim Edit.
    // # set current input value into name.
    // # Change status true -> false.
    const onConfirmEdit = () => {
        const editData = {
            id: data.id,
            name: updatedInputName.current.value,
            edittingStatus: false
        }

        editStudent(data.id, editData)
    }

    // # Cancle Edit.
    // # Change status true -> false.
    const onCancleEdit = () => {
        const editData = {
            id: data.id,
            name: data.name,
            edittingStatus: false
        }
        editStudent(data.id, editData)
    }

    // # Status = true -> show EditForm : false -> null
    const editForm = (
        <div className="row">
            <div className="input-group mb-3">
                <input
                    type="text"
                    name="updateName"
                    className="form-control col-6"
                    defaultValue={data.name}
                    ref={updatedInputName}
                />

                <button
                    onClick={onCancleEdit}
                    className="btn btn-outline-primary btn-sm ml-1 col-3"
                >
                    Cancle
                </button>

                <button
                    onClick={onConfirmEdit}
                    className="btn btn-primary btn-sm ml-1 col-3"
                >
                    Ok
                </button>

            </div>
        </div>
    )

    return (
        <div className="card">
            <div className="card-header text-center">

                <button
                    onClick={onEditStudent}
                    className="btn btn-outline-success btn-sm mr-1"
                >Edit
                </button>

                <button
                    onClick={onDeleteStudent}
                    className="btn btn-outline-danger btn-sm ml-1"
                >Delete
                </button>

            </div>
            <div className="card-body">
                <dl className="row">
                    <dt className="col-6">id:</dt>
                    <dd className="col-6">{props.data.id}</dd>
                    <dt className="col-6">name:</dt>
                    <dt className="col-6">{props.data.name}</dt>
                </dl>

                {
                    props.data.edittingStatus
                        ? editForm
                        : null
                }
            </div>
        </div>
    )
}

export default Student
