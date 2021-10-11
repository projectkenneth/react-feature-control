import PropTypes from 'prop-types';

import FeatureBlock from '../Utilities/FeatureBlock';

function Editor({ activePlan }) {
    return (
        <div className="col col-12">
            <h1>New Post</h1>
            <div className="mb-3">
                <label htmlFor="titleInput" className="form-label">Title</label>
                <input type="text" id="titleInput" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="bodyInput" className="form-label">Content</label>
                <textarea id="bodyInput" className="form-control" rows="20"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="tagsInput" className="form-label">Tags</label>
                <input type="text" id="tagsInput" className="form-control" />
            </div>
            <FeatureBlock activePlan={activePlan} planNames={["Ultimate"]}>
                <div className="mb-3">
                    Publishers
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="publishToMediumCheckbox" />
                        <label htmlFor="publishToMediumCheckbox" className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="publishToDevToCheckbox" />
                        <label htmlFor="publishToDevToCheckbox" className="form-check-label">Dev.to</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="publishToHashnodeCheckbox" />
                        <label htmlFor="publishToHashnodeCheckbox" className="form-check-label">Hashnode</label>
                    </div>
                </div>
            </FeatureBlock>
            <FeatureBlock activePlan={activePlan} planNames={["Pro", "Ultimate"]}>
                <div className="mb-3">
                    <label htmlFor="scheduleInput" className="form-label">Schedule</label>
                    <input type="datetime-local" id="scheduleInput" className="form-control" />
                </div>
            </FeatureBlock>
            <div className="row">
                <div className="col col-6">
                    <button type="button" className="btn btn-secondary">Save Draft</button>
                </div>
                <div className="col col-6 text-end">
                    <button type="button" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    );
};

Editor.propTypes = {
    activePlan: PropTypes.object.isRequired
};

export default Editor;