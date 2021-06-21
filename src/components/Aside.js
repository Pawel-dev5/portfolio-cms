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
import { FaTachometerAlt, FaGem, FaList, FaGithub } from 'react-icons/fa';
import sidebarBg from '../assets/bg1.jpg';
import { NavLink } from "react-router-dom";

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
    const intl = useIntl();
    return (
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

            <SidebarContent>
                <Menu iconShape="circle">
                    <NavLink exact to="/portfolio-cms" className="menu-link"
                        activeClassName="menu-link-active">

                        <MenuItem
                            icon={<FaTachometerAlt />}
                        // suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
                        >
                            {intl.formatMessage({ id: 'dashboard' })}
                        </MenuItem>
                    </NavLink>
                    {/* <MenuItem icon={<FaGem />}> {intl.formatMessage({ id: 'components' })}</MenuItem> */}
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        // suffix={<span className="badge yellow">3</span>}
                        title={intl.formatMessage({ id: 'components' })}
                        icon={<FaGem />}
                    >
                        <MenuItem>Navigation</MenuItem>
                        <NavLink exact to="/portfolio-cms/components/Header" className="menu-link"
                            activeClassName="menu-link-active">
                            <MenuItem>Header</MenuItem>
                        </NavLink>
                        <MenuItem>About me</MenuItem>
                    </SubMenu>
                    {/* <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: 'withPrefix' })}
            icon={<FaHeart />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu> */}
                    <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
                        <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
                            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
                            </SubMenu>
                        </SubMenu>
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
    );
};

export default Aside;