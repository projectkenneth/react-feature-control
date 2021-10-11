import PropTypes from 'prop-types';

function RoleSwitcher({ plans, activePlan, setActivePlan }) {
    const navItemTags = () =>
        plans.map((label, index) =>
            <li className="nav-item" key={index}>
                <button className={"nav-link" + (activePlan === index ? " active" : "")} onClick={e => setActivePlan(index)}>{label}</button>
            </li>
        );

    return (
        <ul className="nav nav-pills">
            {navItemTags()}
        </ul>
    );
};

RoleSwitcher.propTypes = {
    activePlan: PropTypes.number.isRequired,
    setActivePlan: PropTypes.func.isRequired,
    plans: PropTypes.array.isRequired
};

export default RoleSwitcher;