import { useState } from "react";
import firebase from 'firebase/app';

export const Footer = ({ data }) => {
    const [footData, setFootData] = useState({
        email: data.email,
        formessage: data.formessage,
        name: data.name,
        sectiontitle: data.sectiontitle,
        send: data.send,
        title: data.title
    });

    console.log(footData)
    const handleChangeData = (e) => {
        const { name, value } = e.target;
        setFootData({
            ...footData,
            [name]: value
        })
    }

    const changeData = () => {
        const ref = firebase.database().ref('PL').child('footer');
        ref.update({
            email: footData.email,
            formessage: footData.formessage,
            name: footData.name,
            sectiontitle: footData.sectiontitle,
            send: footData.send,
            title: footData.title
        })
    };

    return (
        <>
            <h1>Stopka</h1>
            <form className='header-form' onSubmit={changeData}>
                <input type='text' onChange={handleChangeData} value={footData.email} name='email' />
                <input type='text' onChange={handleChangeData} value={footData.formessage} name='formessage' />
                <input type='text' onChange={handleChangeData} value={footData.name} name='name' />
                <input type='text' onChange={handleChangeData} value={footData.sectiontitle} name='sectiontitle' />
                <input type='text' onChange={handleChangeData} value={footData.send} name='send' />
                <input type='text' onChange={handleChangeData} value={footData.title} name='title' />
                <br />
                <br />
                <button type='submit' >Zapisz</button>
            </form>
        </>
    )
}