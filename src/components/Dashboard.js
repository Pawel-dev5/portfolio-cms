import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaBars } from 'react-icons/fa';
import reactLogo from '../assets/logo192.png';
import { NavLink } from "react-router-dom";

export const Dashboard = ({
    collapsed,
    rtl,
    image,
    handleToggleSidebar,
    handleCollapsedChange,
    handleRtlChange,
    handleImageChange,
    handleLogout,
    toggleLang,
    toggledLang
}) => {
    const intl = useIntl();
    return (
        <main>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>
            <header>
                <h1>
                    <img width={80} src={reactLogo} alt="react logo" /> {intl.formatMessage({ id: 'title' })}
                </h1>
                <p>{intl.formatMessage({ id: 'description' })}</p>
            </header>
            <div className="block ">
                <Switch
                    height={16}
                    width={30}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={handleCollapsedChange}
                    checked={collapsed}
                    onColor="#219de9"
                    offColor="#bbbbbb"
                />
                <span> {intl.formatMessage({ id: 'collapsed' })}</span>
            </div>
            <div className="block">
                <Switch
                    height={16}
                    width={30}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={handleRtlChange}
                    checked={rtl}
                    onColor="#219de9"
                    offColor="#bbbbbb"
                />
                <span> {intl.formatMessage({ id: 'rtl' })}</span>
            </div>
            <div className="block">
                <Switch
                    height={16}
                    width={30}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={handleImageChange}
                    checked={image}
                    onColor="#219de9"
                    offColor="#bbbbbb"
                />
                <span> {intl.formatMessage({ id: 'image' })}</span>
            </div>
            <div className="block">
                <Switch
                    height={16}
                    width={30}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={toggleLang}
                    checked={toggledLang}
                    onColor="#219de9"
                    offColor="#bbbbbb"
                />
                {toggledLang ? (
                    <>
                        <span>Wprowadzasz zmiany do Angielskiej wersji językowej</span>
                    </>
                ) : (
                    <>
                        <span>Wprowadzasz zmiany do Polskiej wersji językowej</span>
                    </>
                )}
            </div>
            <NavLink exact to="/" className="menu-link"
                activeClassName="menu-link-active" >
                <button onClick={handleLogout} className="LogOutButton">Wyloguj</button>
            </NavLink>
        </main>
    );
};