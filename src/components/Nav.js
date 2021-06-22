import firebase from 'firebase/app';
import { useState } from 'react';
import { AiFillDelete, AiFillFileAdd } from 'react-icons/ai';

export const Nav = ({ data }) => {
    const [menu, setMenu] = useState(data.menu);
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
        var updates = {};
        updates[postID] = meniItem;
        setMenu([...menu, meniItem])
        ref.update(updates)
    };

    const deleteTodo = (id) => {
        const ref = firebase.database().ref('PL' + '/main' + '/menu').child(id);
        ref.remove();
    };

    return (
        <>
            <div className="nav-container">
                <ul>
                    {data.menu.map((item, id) => {
                        return (
                            <div className="nav-box">
                                <li key={id}>{item.name}</li>
                                <AiFillDelete onClick={() => deleteTodo(id)} />
                            </div>
                        )
                    })}
                    <div>
                        <input type="text" onChange={handleOnChange} value={title} />
                        <AiFillFileAdd onClick={createTodo} />
                    </div>
                </ul>
            </div>
        </>
    )
}