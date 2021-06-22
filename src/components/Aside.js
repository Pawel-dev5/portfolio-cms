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
import { FaTachometerAlt, FaGem, FaGithub } from 'react-icons/fa';
import sidebarBg from '../assets/bg1.jpg';
import { NavLink } from "react-router-dom";

const Aside = ({
    image,
    collapsed,
    // rtl,
    toggled,
    handleToggleSidebar,
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
                        <NavLink exact to="/" className="menu-link"
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
                                <NavLink to="/components/Navigation" className="menu-link"
                                    activeClassName="menu-link-active">
                                    Navigation
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/components/Header" className="menu-link"
                                    activeClassName="menu-link-active">
                                    Header
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/components/AboutMe" className="menu-link"
                                    activeClassName="menu-link-active">
                                    About me
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/components/Footer" className="menu-link"
                                    activeClassName="menu-link-active">
                                    Footer
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/components/Portfolio" className="menu-link"
                                    activeClassName="menu-link-active">
                                    Portfolio
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/components/Tech" className="menu-link"
                                    activeClassName="menu-link-active">
                                    Tech
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/components/Work" className="menu-link"
                                    activeClassName="menu-link-active">
                                    Work
                                </NavLink>
                            </MenuItem>
                        </SubMenu>
                    </Menu>
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
            {/* <NavLink exact to="/" className="menu-link"
                activeClassName="menu-link-active" >
                <button onClick={handleLogout} className="LogOutButton">Wyloguj</button>
            </NavLink> */}
        </>
    );
};

export default Aside;