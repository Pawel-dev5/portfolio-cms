import {
    Route,
    Switch,
} from "react-router-dom";
import { Dashboard } from '../components/Dashboard';
import { Header } from './Header';
import { FaGithub } from 'react-icons/fa';

const Main = ({
    collapsed,
    rtl,
    image,
    handleToggleSidebar,
    handleCollapsedChange,
    handleRtlChange,
    handleImageChange,
    toggled,
    data,
    handleLogout,
    toggleLang,
    toggledLang
}) => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <>
                        <Dashboard
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
                            toggledLang={toggledLang}
                            toggleLang={toggleLang}
                        />
                    </>
                </Route>
                <Route path="/components/Header">
                    <Header data={data} />
                </Route>
            </Switch>
            <footer>
                <div className="social-bagdes">
                    © 2021 made by{' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Pawel-dev5">
                        Paweł Nowecki{' '}
                        <FaGithub />
                    </a>
                </div>
            </footer>
        </main>
    );
};

export default Main;