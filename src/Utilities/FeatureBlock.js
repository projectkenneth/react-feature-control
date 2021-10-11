import PropTypes from 'prop-types';

function FeatureBlock(props) {
    const isFeatureVisible = props.planNames.find(plan => plan === props.activePlan.name);

    if (isFeatureVisible) {
        return (
                <>
                    {props.children}
                </>
            );
    } else {
        return null;
    }
};

FeatureBlock.propTypes = {
    activePlan: PropTypes.object.isRequired,
    planNames: PropTypes.array.isRequired
};

export default FeatureBlock;