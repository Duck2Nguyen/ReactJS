import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'

class HomeFooter extends Component {
    render() {

        return (
            <div className="home-footer">
                <p>&copy; 2021 Duck2Nguyen. More information, please visit my YouTube Channel.
                    <a target="blank" href="https://www.youtube.com/"> &#8594; Click here &#8592;
                    </a>
                </p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
