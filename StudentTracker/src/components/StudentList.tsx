import { StudentCard } from './Cardstyle';

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

interface StudentListProps {
    students: Student[];
    onDelete?: (id: string) => void;
}

export const StudentList = ({ students, onDelete }: StudentListProps) => {
    if (students.length === 0) {
        return <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>No students registered yet.</p>;
    }

    return (
        <div className="students-grid">
            {students.map((student) => (
                <StudentCard
                    key={student.id}
                    id={student.id}
                    name={student.name}
                    studentId={student.studentId}
                    dateOfBirth={student.dateOfBirth}
                    phoneNumber={student.phoneNumber}
                    email={student.email}
                    address={student.address}
                    gender={student.gender}
                    photo={student.photo}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};