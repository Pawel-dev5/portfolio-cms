import { useState } from "react"
import firebase from 'firebase/app';

export const Portfolio = ({ data }) => {
    const a = data.portfolio;
    console.log(a)
    const [sumDat, setSumDat] = useState({
        // id: data.id,
        title: data.title,
        projects: [{
            id: data.projects.id,
            description: data.description,
            title: data.projects.title,
            // git: data.git,
            // category: data.category
        }]
    });
    const handleChangeData = (e) => {
        const { name, value } = e.target;
        setSumDat({
            ...sumDat,
            [name]: value
        });
    };
    const completeHeader = () => {
        const ref = firebase.database().ref('PL').child("portfolio");
        ref.update({
            // id: sumDat.id,
            title: sumDat.title,
            description: sumDat.description,
            git: sumDat.git,
            category: sumDat.category
        });
    };
    console.log(sumDat)
    return (
        <>
            <form className='header-form' onSubmit={completeHeader} >
                <h1>Portfolio</h1>
                <h3>Tytuł:</h3>
                <input type='text' onChange={handleChangeData} value={sumDat.title} name='title' />
                {/* <input type='text' onChange={handleChangeData} value={sumDat.id} name='id' /> */}
                <textarea type="text" onChange={handleChangeData} value={sumDat.description} name="description" />
                <input type='text' onChange={handleChangeData} value={sumDat.git} name='git' />

            </form>
            <p>Portfolio</p>
            <ul>
                {data.projects.map((item, id) => {
                    return (
                        <li key={id}>
                            {/* <p>Item ID: {item.id}</p> */}
                            <p>Item title: {item.title}</p>
                            <p>Item description:<br /> {item.description}</p>
                            <p>Item URL: {sumDat.git}</p>
                            <p>Kategorie:</p>
                            <ul>
                                {item.category.map((i, index) => {
                                    const handleChangeCat = (e) => {
                                        const { name, i } = e.target;
                                        setSumDat({
                                            ...sumDat,
                                            [name]: i
                                        });
                                    };
                                    return (
                                        // <li key={index}>{i}</li>
                                        <input type='text' onChange={handleChangeCat} value={i} name='category' />
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}