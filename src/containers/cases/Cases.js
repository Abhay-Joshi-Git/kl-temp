import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from './_store/actions';
import selectors from './_store/selectors';

class Cases extends Component {
  componentDidMount() {
    this.props.fetchCases();
  }

  render() {
    return (
      <div className="full-height">
        <h3>Cases</h3>
        <div>
          {
            this.getCases()
          }
        </div>
      </div>
    );
  }

  getCases() {
    const { cases } = this.props;
    return cases && cases.length ? cases.map((item, index) => 
      <div key={index}>
        {item ? item.name : index}
      </div>
    ) : null;
  }
}

Cases.propTypes = {
  fetchCases: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cases: selectors.cases(state),
});

export default connect(mapStateToProps, { ...actions })(Cases);
