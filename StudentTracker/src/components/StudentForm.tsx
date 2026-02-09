import './StudentForm.css';
import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./button";
import { StudentList } from "./StudentList";
import { Component } from 'react';

interface Student {
    id: string;
    name: string;
    studentId: string;
    dateOfBirth: string;
    phoneNumber: string;
    email: string;
    address: string;
    gender: string;
    photo: string;
}

export class StudentForm extends Component<object, {
    students: Student[];
    formData: Omit<Student, 'id'>;
}> {
    constructor(props: object) {
        super(props);
        this.state = { 
            students: this.loadFromLocalStorage(),
            formData: {
                name: '',
                studentId: '',
                dateOfBirth: '',
                phoneNumber: '',
                email: '',
                address: '',
                gender: '',
                photo: '',
            }
        };
    }

    loadFromLocalStorage =  (): Student[] => {
        const saved = localStorage.getItem('students');
        return saved ? JSON.parse(saved) : [];
    };

    saveToLocalStorage = (students: Student[]) => {
        localStorage.setItem('students', JSON.stringify(students));
    };

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.currentTarget;
        this.setState((prev) => ({
            formData: { ...prev.formData, [id]: value }
        }));
    };

    handleSelectChange = (value: string) => {
        this.setState((prev) => ({
            formData: { ...prev.formData, gender: value }
        }));
    };

    handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState((prev) => ({
                    formData: { ...prev.formData, photo: reader.result as string }
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    handleAddStudent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { formData, students } = this.state;
        
        if (!formData.name || !formData.studentId || !formData.email) {
            alert('Please fill in all required fields');
            return;
        }

        const newStudent: Student = {
            id: Date.now().toString(),
            ...formData
        };

        const updatedStudents = [...students, newStudent];
        this.setState({ students: updatedStudents });
        this.saveToLocalStorage(updatedStudents);
        
        // Reset form
        this.setState({
            formData: {
                name: '',
                studentId: '',
                dateOfBirth: '',
                phoneNumber: '',
                email: '',
                address: '',
                gender: '',
                photo: '',
            }
        });
        
        alert('Student added successfully!');
    };

    handleDeleteStudent = (id: string) => {
        this.setState((prev) => {
            const updatedStudents = prev.students.filter((s) => s.id !== id);
            this.saveToLocalStorage(updatedStudents);
            return { ...prev, students: updatedStudents };
        });
    };

    render() {
        const { formData, students } = this.state;
        return (
            <>
            <div className='Student-Container'>
                <form className="student-form" onSubmit={this.handleAddStudent}>
                    <h1>Add Student</h1>
                    <div>
                        <label htmlFor="photo">Student Photo</label>
                        <input
                            id="photo"
                            type="file"
                            accept="image/*"
                            onChange={this.handlePhotoChange}
                            style={{ marginBottom: '10px' }}
                        />
                        {formData.photo && (
                            <div style={{ marginBottom: '15px' }}>
                                <img src={formData.photo} alt="Preview" style={{ width: '100px', height: '100px', borderRadius: '4px', objectFit: 'cover' }} />
                            </div>
                        )}
                    </div>
                    <Input 
                        label="Name"
                        id="name" 
                        type="string" 
                        text="Enter Full Name"
                        value={formData.name}
                        onChange={this.handleInputChange}
                    />
                    <Input 
                        label="Student Id"
                        id="studentId" 
                        type="string" 
                        text="Enter Student ID"
                        value={formData.studentId}
                        onChange={this.handleInputChange}
                        />
                    <Input 
                        label="Date Of Birth"
                        id="dateOfBirth" 
                        type="date" 
                        text="Enter Date of Birth"
                        value={formData.dateOfBirth}
                        onChange={this.handleInputChange}
                        />
                    <Input 
                        label="Phone Number"
                        id="phoneNumber" 
                        type="tel" 
                        text="Enter Phone Number"
                        value={formData.phoneNumber}
                        onChange={this.handleInputChange}
                    />
                    <Input 
                        label="Email"
                        id="email" 
                        type="email" 
                        text="Enter Email"
                        value={formData.email}
                        onChange={this.handleInputChange}
                    />
                    <Input 
                        label="Address"
                        id="address" 
                        type="string" 
                        text="Enter Address"
                        value={formData.address}
                        onChange={this.handleInputChange}
                    />
                    <Select 
                        label="Gender"
                        id='gender' 
                        options={['Select Gender', 'Male', 'Female', 'Others']} 
                        onChange={this.handleSelectChange}
                    />
                    <Button text="Submit" onClick={() => {}} />
                </form>

                <div className="students-section">
                    <h2>Registered Students ({students.length})</h2>
                    <StudentList students={students} onDelete={this.handleDeleteStudent} />
                </div>
            </div>
            </>
        );
    }
}