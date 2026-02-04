import './header.css';

interface HeaderProps {
    title: string;
    discription: string;
    }

const header = ({ title, discription }: HeaderProps) => {
    return (
        <header>
            <h3>{title}</h3>
            <p>{discription}</p>
        </header>
    );
}

export default header;