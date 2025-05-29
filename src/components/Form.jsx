import { General } from "./General"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { useState } from "react"

export function Form() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [github, setGithub] = useState('')
    const [isEditing, setIsEditing] = useState(true)

    function toggleEdit() {
        setIsEditing(!isEditing);
    }

    const [education, setEducation] = useState([
        {
            school: 'UFSC',
            degree: 'Animal Science',
            startDate: '2008-02',
            endDate: '2013-05'
        },
        {
            school: 'FGV',
            degree: 'MBA',
            startDate: '2016-02',
            endDate: '2019-05'
        }
    ])
    const [experience, setExperience] = useState([
        {
            company: 'JBS',
            position: 'Production Supervisor',
            functions: 'Lorem ipsum dolor sit amet consectetur adipisicing elwwit. Quia deserunt dignissimos neque aliquam, dolorem nisi corporis voluptatibus alias doloremque voluptatem',
            startDate: '2014-02',
            endDate: '2017-04'

        },
        {
            company: 'Casa Paulina',
            position: 'Owner',
            functions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deserunt dignissimos neque aliquam, dolorem nisi corporis voluptatibus alias doloremque voluptatem',
            startDate: '2018-11',
            endDate: '2023-05'

        }
    ])

    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        github: '',
        education: [],
        experience: []
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({
            fullName,
            email,
            phoneNumber,
            github,
            education,
            experience
        });
        toggleEdit();
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="form-container">
            <General 
            name={fullName} 
            setName={setFullName}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            github={github}
            setGithub={setGithub}
            isEditing={isEditing}
            ></General>
            <Education
            education={education}
            setEducation={setEducation}
            isEditing={isEditing}
            ></Education>
            <Experience
            experience={experience}
            setExperience={setExperience}
            isEditing={isEditing}
            ></Experience>
            {isEditing ? (
                <button onClick={toggleEdit}>Edit</button>
            ) : (
                <input 
                type="submit" 
                className="submit-btn"
                />
            )}


        </form>
    )
}