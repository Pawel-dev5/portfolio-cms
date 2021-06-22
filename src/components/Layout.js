import { useState, useEffect } from 'react';
import Aside from './Aside';
import Main from './Main';
import { BrowserRouter } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { Route } from "react-router-dom";
import Login from './Login';

function Layout({ setLocale, data, toggleLang, toggledLang }) {
    const [rtl, setRtl] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [collapsedSidebar, setCollapsedSidebar] = useState({
        Zwin: true
    });
    const [image, setImage] = useState(true);
    const [toggled, setToggled] = useState(false);
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // console.log(user)
    // console.log(email)

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        const isErrorEmail = email.length < 10;
        const isErrorPassword = password.length < 6;
        if (isErrorEmail) {
            setEmailError("Email jest za krótki");
            return;
        } else {
            setEmailError("")
        }
        if (isErrorPassword) {
            setPasswordError("Hasło jest za krótkie");
            return;
        } else {
            setPasswordError("")
        }
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                    default:
                }
            });
    };

    const handleLogout = () => {
        console.log("hello")
        firebase
            .auth()
            .signOut();
        setEmail('');
        setUser('')
    };

    const authListener = () => {
        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    clearInputs();
                    setUser(user);
                } else {
                    setUser("");
                }
            });
    };

    useEffect(() => {
        function authListener() {
        };
        authListener();
    }, [])
    authListener();

    const handleCollapsedChange = (checked) => {
        // setCollapsed(checked);
        setCollapsedSidebar((prevState) => ({
            ...prevState,
            Zwin: !prevState.Zwin,
        }))
        if(collapsedSidebar.Zwin === true) {
            return setCollapsed(true)
        }else setCollapsed(false)
    };

    const handleRtlChange = (checked) => {
        setRtl(checked);
        setLocale(checked ? 'pl' : 'en');
    };
    const handleImageChange = (checked) => {
        setImage(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <div className="app">
            <BrowserRouter>
                {user ? (
                    <>
                        <Aside
                            image={image}
                            collapsed={collapsed}
                            rtl={rtl}
                            toggled={toggled}
                            handleToggleSidebar={handleToggleSidebar}
                            handleLogout={handleLogout}
                            setEmail={setEmail}
                            setUser={setUser}
                            handleCollapsedChange={handleCollapsedChange}
                            toggledLang={toggledLang}
                            toggleLang={toggleLang}
                        />
                        <Main
                            image={image}
                            toggled={toggled}
                            collapsed={collapsed}
                            rtl={rtl}
                            handleToggleSidebar={handleToggleSidebar}
                            handleCollapsedChange={handleCollapsedChange}
                            handleRtlChange={handleRtlChange}
                            handleImageChange={handleImageChange}
                            data={data}
                            handleLogout={handleLogout}
                            toggleLang={toggleLang}
                            toggledLang={toggledLang}
                        />
                    </>
                ) : (
                    <>
                        <Route path="/" >
                            <>
                                <Login
                                    email={email}
                                    setEmail={setEmail}
                                    password={password}
                                    setPassword={setPassword}
                                    handleLogin={handleLogin}
                                    emailError={emailError}
                                    passwordError={passwordError}
                                />
                            </>
                        </Route>
                    </>
                )}

            </BrowserRouter>
        </div>
    );
}

export default Layout;