import { useIntl } from 'react-intl';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaGithub, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import sidebarBg from '../assets/bg1.jpg';
import { NavLink } from "react-router-dom";
import Switch from 'react-switch';

const Aside = ({
    image,
    collapsed,
    // rtl,
    toggled,
    handleToggleSidebar,
    handleCollapsedChange,
    toggledLang,
    toggleLang
    // handleLogout
}) => {

    const intl = useIntl();

    return (
        <>
            <ProSidebar
                image={image ? sidebarBg : false}
                //   rtl={rtl}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {intl.formatMessage({ id: 'sidebarTitle' })}
                    </div>
                </SidebarHeader>

                <SidebarContent >
                    <Menu iconShape="circle">
                        <NavLink to="/" className="menu-link"
                            activeClassName="menu-link-active">
                            <MenuItem
                                icon={<FaTachometerAlt />}
                            // suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
                            >
                                {intl.formatMessage({ id: 'dashboard' })}
                            </MenuItem>
                        </NavLink>
                    </Menu>
                    <Menu iconShape="circle" >
                        <SubMenu
                            // suffix={<span className="badge yellow">3</span>}
                            title={intl.formatMessage({ id: 'components' })}
                            icon={<FaGem />}
                        >
                            <MenuItem>
                                <NavLink to="/components/Navigation/" className="menu-link"
                                    activeClassName="menu-link-active">
                                    Navigation
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink exact to="/components/Header/" className="menu-link"
                                    activeClassName="menu-link-active">
                                    Header
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/components/AboutMe/" className="menu-link"
                                    activeClassName="menu-link-active">
                                    About me
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/components/Footer/" className="menu-link"
                                    activeClassName="menu-link-active">
                                    Footer
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/components/Portfolio/" className="menu-link"
                                    activeClassName="menu-link-active">
                                    Portfolio
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/components/Tech/" className="menu-link"
                                    activeClassName="menu-link-active">
                                    Tech
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/components/Work/" className="menu-link"
                                    activeClassName="menu-link-active">
                                    Work
                                </NavLink>
                            </MenuItem>
                        </SubMenu>
                    </Menu>
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
                        {!collapsed ? (
                            <>
                                {toggledLang ? (
                                    <>
                                        <span>Angielskia wersja j??zykowa</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Polska wersja j??zykowa</span>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                {''}
                            </>
                        )}
                    </div>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/Pawel-dev5"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span> {intl.formatMessage({ id: 'viewSource' })}</span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
            {/* <div className="collapse-icon" >
                {!collapsed ? (
                    <div>
                        <FaChevronLeft
                            height={16}
                            width={30}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            onClick={handleCollapsedChange}
                            checked={collapsed}
                            onColor="#219de9"
                            offColor="#bbbbbb"
                        />
                    </div>
                ) : (
                    <div>
                        <FaChevronRight
                            height={16}
                            width={30}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            onClick={handleCollapsedChange}
                            checked={collapsed}
                            onColor="#219de9"
                            offColor="#bbbbbb"
                        />
                    </div>
                )}
            </div> */}

            {/* <NavLink exact to="/" className="menu-link"
                activeClassName="menu-link-active" >
                <button onClick={handleLogout} className="LogOutButton">Wyloguj</button>
            </NavLink> */}
        </>
    );
};

export default Aside;