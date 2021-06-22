import { useState } from "react"
import firebase from 'firebase/app';

export const AboutMe = ({ data }) => {
    const [sumDat, setSumDat] = useState({
        occupation: data.occupation,
        email: data.email,
        place: data.place,
        employer: data.employer,
        title: data.title,
        biopriv: data.biopriv,
        shortBio: data.shortBio,
        phone: data.phone
    })

    const handleOnChangeSum = (e) => {

        const { name, value } = e.target;
        setSumDat({
            ...sumDat,
            [name]: value,
        });
    };

    const completeHeader = () => {
        const ref = firebase.database().ref('PL').child("main");
        ref.update({
            biopriv: sumDat.biopriv,
            shortBio: sumDat.shortBio,
            title: sumDat.title,
            employer: sumDat.employer,
            phone: sumDat.phone,
            place: sumDat.place,
            occupation: sumDat.occupation,
            email: sumDat.email,
        });
    };
    return (
        <>
            <form className="header-form" onSubmit={completeHeader} >
                <h3>About Me Title:</h3>
                <input type="text" onChange={handleOnChangeSum} value={sumDat.title} name="title" />
                <h3>About Me Bio:</h3>
                <textarea type="text" onChange={handleOnChangeSum} value={sumDat.biopriv} name="biopriv" />
                <textarea type="text" onChange={handleOnChangeSum} value={sumDat.shortBio} name="shortBio" />
                <h3>Zatrudniony:</h3>
                <input type='text' onChange={handleOnChangeSum} value={sumDat.employer} name="employer" />
                <h3>Telefon:</h3>
                <input type='text' onChange={handleOnChangeSum} value={sumDat.phone} name="phone" />
                <h3>Miejsce zamieszkania:</h3>
                <input type='text' onChange={handleOnChangeSum} value={sumDat.place} name="place" />
                <h3>Email:</h3>
                <input type='text' onChange={handleOnChangeSum} value={sumDat.email} name="email" />
                <h3>Seniority:</h3>
                <input type='text' onChange={handleOnChangeSum} value={sumDat.occupation} name="occupation" />
                <br />
                <br />
                <button type='submit' >Zapisz</button>
            </form>
        </>
    )
}