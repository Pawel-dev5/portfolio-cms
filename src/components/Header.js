import { useState } from 'react';
import firebase from 'firebase/app';

export const Header = ({ data }) => {
    const [title, setTitle] = useState(data.name);
    const [bio, setBio] = useState(data.shortBio);

    const handleOnChangeBio = (e) => {
        setBio(e.target.value);
    };
    const handleOnChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const completeHeader = () => {
        const ref = firebase.database().ref('PL').child("main");
        ref.update({
            name: title,
            shortBio: bio
        });
    };
    return (
        <div className="headet-txt-box">
            <form onSubmit={completeHeader} className="header-form" >
                <h3>Title:</h3>
                <input type="text" value={title} onChange={handleOnChangeTitle} />
                <h3>Bio:</h3>
                <textarea type="text" onChange={handleOnChangeBio} value={bio}/>
                <br />
                <br />
                <button type='submit' >Zapisz</button>
            </form>
            {/* <Container>
                                <a href="tel:791-893-867">
                                    {data.phone}
                                </a>
                                <a href="mailto:p.nowecki@gmail.com">
                                    {data.email}
                                </a>
                                <a href={data.social[0].url}>
                                    {data.social[0].name}
                                </a>
                                <a href={data.social[1].url}>
                                    {data.social[1].name}
                                </a>
                                <a href={data.social[2].url}>
                                    {data.social[2].name}
                                </a>
                            </Container> */}
        </div>
    )
}