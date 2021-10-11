import PropTypes from 'prop-types';

function FeatureBlock(props) {
    const isFeatureVisible = props.activePlan.features
        .find(feature => feature === props.featureName);

    console.log(props.activePlan);

    if (isFeatureVisible) {
        return (
                <>
                    {props.children}
                </>
            );
    } else {
        return (<></>);
    }
};

FeatureBlock.propTypes = {
    featureName: PropTypes.string.isRequired
};

export default FeatureBlock;