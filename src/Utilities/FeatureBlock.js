import PropTypes from 'prop-types';

function FeatureBlock(props) {
    const isFeatureVisible = props.activePlan.features
        .find(feature => feature === props.featureName);

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
    featureName: PropTypes.string.isRequired
};

export default FeatureBlock;