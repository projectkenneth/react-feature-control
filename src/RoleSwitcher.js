import PropTypes from 'prop-types';

function RoleSwitcher({ plans, activePlan, setActivePlan }) {
    const navItemTags = () =>
        plans.map((plan) =>
            <li className="nav-item" key={plan.id}>
                <button className={"nav-link" + (activePlan.id === plan.id ? " active" : "")} onClick={e => setActivePlan(plan)}>{plan.name}</button>
            </li>
        );

    return (
        <ul className="nav nav-pills">
            {navItemTags()}
        </ul>
    );
};

RoleSwitcher.propTypes = {
    activePlan: PropTypes.object.isRequired,
    setActivePlan: PropTypes.func.isRequired,
    plans: PropTypes.array.isRequired
};

export default RoleSwitcher;