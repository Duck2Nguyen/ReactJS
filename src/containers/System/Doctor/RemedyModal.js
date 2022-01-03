import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './RemedyModal.scss'
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap'
import { toast } from "react-toastify";
import moment from 'moment';
import { CommonUtils } from '../../../utils'


class RemedyModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            imgBase64: ''
        }
    }

    async componentDidMount() {
        if (this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.dataModal !== prevProps.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }
    }

    handleOnchangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                imgBase64: base64
            })
        }
    }

    handleSendRemedy = () => {
        this.props.sendRemedy(this.state)
    }

    render() {
        let { language } = this.props
        let { isOpenModal, closeRemedyModal, dataModal, sendRemedy } = this.props



        // console.log('my check state nehehe', this.state)
        return (
            <Modal
                isOpen={isOpenModal}
                className={'booking-modal-container'}
                size='md'
                centered
            >
                <div className='modal-header'>
                    <h5 className='modal-title'>Modal title</h5>
                    <button type='button' className='close' aria-label="Close" onClick={closeRemedyModal}>
                        <span aria-hidden='true'>x</span>
                    </button>
                </div>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <div className="form-group col-6">
                                <label>Email</label>
                                <input type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={(event) => this.handleOnchangeEmail(event)}
                                />
                            </div>
                            <div className="form-group col-6">
                                <label>Chọn file hóa đơn</label>
                                <input type="file" className='form-control-file'
                                    onChange={(event) => {
                                        this.handleOnchangeImage(event)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="px-3" onClick={() => this.handleSendRemedy()}>Save</Button>
                    <Button color="secondary" className="px-3" onClick={closeRemedyModal}>Close</Button>
                </ModalFooter>
            </Modal>
        )

    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language,
        genders: state.admin.genders,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);
