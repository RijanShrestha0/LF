import { Button } from './button';
import './Cardstyle.css';

interface StudentCardProps {
    name: string;
    studentId: string;
    dateOfBirth: string;
    phoneNumber: string;
    email: string;
    address: string;
    gender: string;
    photo: string;
    id: string;
    onDelete?: (id: string) => void;
}

export const StudentCard = ({ name, studentId, dateOfBirth, phoneNumber, email, address, gender, photo, id, onDelete }: StudentCardProps) => {
    return (
        <div className="student-card">
            <div className='student-photo-container'>
                {photo ? (
                    <img src={photo} alt={name} className='student-photo' />
                ) : (
                    <div className='student-photo-placeholder'>No Photo</div>
                )}
            </div>
            <div className='student-detail'>
                <h3>{name}</h3>
                <p><strong>Student ID:</strong> {studentId}</p>
                <p><strong>Date of Birth:</strong> {dateOfBirth}</p>
                <p><strong>Phone Number:</strong> {phoneNumber}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Address:</strong> {address}</p>
                <p><strong>Gender:</strong> {gender}</p>
            </div>
            <div className='Delete-btn'>
                {onDelete && (
                    <Button className="delete-button" text="Delete" onClick={() => onDelete(id)} />
                )}
            </div>
        </div>
    );
};