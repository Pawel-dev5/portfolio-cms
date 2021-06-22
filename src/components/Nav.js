import firebase from 'firebase/app';
import { useState } from 'react';

export const Nav = ({ data }) => {
    const [name, setName] = useState(data.name);
    const [bio, setBio] = useState(data.shortBio);
    const [menu, setMenu] = useState(data.menu);

    const handleOnChangeName = (e) => {
        setName(e.target.value);
    };

    const handleOnChangeBio = (e) => {
        setBio(e.target.value);
    };

    const completeNav = () => {
        const ref = firebase.database().ref('PL').child("main");
        ref.update({
            name: name,
            shortBio: bio
        });
    };

    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const postID = menu.length;

    const createTodo = () => {
        const ref = firebase.database().ref('PL' + '/main').child("menu");
        const meniItem = {
            name: title,
            id: menu.length + 1,
            href: title
        };
        // const newPostKey = firebase.database().ref('PL' + '/main').child('menu').push().key;
        // const newPostKey = firebase.database().ref('PL').child('main').child('menu').push().key;
        // const newPostKey = firebase.database().ref().child(postID).push().key;
        var updates = {};
        updates[postID] = meniItem;
        // ref.push(updates);
        setMenu([...menu, meniItem])
        ref.update(updates)
    };

    return (
        <>
            <form onSubmit={completeNav}>
                <h3>Title:</h3>
                <input type="text" onChange={handleOnChangeName} value={name}></input>
                <h3>Bio:</h3>
                <textarea style={{ width: "300px", height: "150px" }} type="text" onChange={handleOnChangeBio} value={bio}></textarea>
                <br />
                <br />
                <button type='submit'>Zapisz</button>
            </form>
            <div>
                <input type="text" onChange={handleOnChange} value={title} />
                <button onClick={createTodo}>Add Todo</button>
            </div>
            <ul>
                {data.menu.map((item, id) => {
                    return (
                        <li key={id}>{item.name}</li>
                    )
                })}
            </ul>
        </>
    )
}