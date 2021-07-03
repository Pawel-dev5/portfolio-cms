import {
    Route,
    Switch,
} from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import { Dashboard } from '../components/Dashboard';
import { Header } from './Header';
import { Nav } from './Nav';
import { AboutMe } from './AboutMe';
import { Footer } from './Footer';
import { Portfolio } from './Portfolio';
import { Tech } from './Tech';
import { Work } from './Work';

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
    toggledLang,
    fireChangeLang
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
                    <Header data={data.main} />
                </Route>
                <Route path="/components/Navigation">
                    <Nav data={data.main} toggledLang={toggledLang} fireChangeLang={fireChangeLang} />
                </Route>
                <Route path="/components/AboutMe">
                    <AboutMe data={data.main} />
                </Route>
                <Route path="/components/Footer">
                    <Footer data={data.footer} />
                </Route>
                <Route path="/components/Portfolio">
                    <Portfolio data={data.portfolio} />
                </Route>
                <Route path="/components/Tech">
                    <Tech data={data.resume} />
                </Route>
                <Route path="/components/Work">
                    <Work data={data.resume} />
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