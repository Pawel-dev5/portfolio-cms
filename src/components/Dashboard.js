import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaBars } from 'react-icons/fa';
import reactLogo from '../assets/logo192.png';

export const Dashboard = ({
    collapsed,
    rtl,
    image,
    handleToggleSidebar,
    handleCollapsedChange,
    handleRtlChange,
    handleImageChange,
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
        </main>
    );
};