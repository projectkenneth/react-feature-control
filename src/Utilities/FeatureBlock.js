import PropTypes from 'prop-types';

function FeatureBlock(props) {
    const isFeatureVisible = props.activePlan.name === props.planName;

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
    planName: PropTypes.string.isRequired
};

export default FeatureBlock;