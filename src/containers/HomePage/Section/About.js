import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'

class About extends Component {
    render() {

        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói gì về Duck2Nguyen
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/ixdSsW5n2rI"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            Một trong những điều khó chịu nhất đối với bệnh nhân khi đi khám là thời gian chờ đợi. Với đặc thù khám chữa bệnh, nhất là ở Việt Nam, tình trạng quá tải diễn ra ở nhiều bệnh viện lớn thì chờ đợi là khó tránh khỏi.
                            Tuy nhiên, liệu có thể giảm thời gian chờ đợi, nâng cao sự tiện nghi, thoải mái và sự hài lòng cho bệnh nhân trong thời gian chờ đợi ở các cơ sở y tế không? Sau đây là một vài gợi ý gợi ý nếu áp dụng thành công sẽ mang về lợi ích cho cả bệnh nhân và cơ sở khám bệnh.
                        </p>
                    </div>
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(About);
