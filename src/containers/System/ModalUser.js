import { flatMap } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: '',
            lastName: '',
            address: ''
        }
        this.listenToEmitter();
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: "",
                password: "",
                firstName: '',
                lastName: '',
                address: ''
            })
        })
    }
    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleFromParent();
    }
    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }
    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert("Missing paramester:" + arrInput[i])
                break;
            }
        }
        return isValid;
    }
    handleAddNewUser = () => {
        let isValid = this.checkValidInput()
        if (isValid === true) {
            this.props.createNewUser(this.state)
            console.log(this.state)
        }
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size='lg'
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email"
                                    class="form-control"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={(event) => {
                                        this.handleOnChangeInput(event, "email")
                                    }}
                                />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password"
                                    class="form-control"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={(event) => {
                                        this.handleOnChangeInput(event, "password")
                                    }}
                                />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">First Name</label>
                                <input type="text"
                                    class="form-control"
                                    value={this.state.firstName}
                                    placeholder="First Name"
                                    onChange={(event) => {
                                        this.handleOnChangeInput(event, "firstName")
                                    }}
                                />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Last Name</label>
                                <input type="text"
                                    class="form-control"
                                    value={this.state.lastName}
                                    placeholder="Last Name"
                                    onChange={(event) => {
                                        this.handleOnChangeInput(event, "lastName")
                                    }}
                                />
                            </div>
                            <div class="form-group col-md-12">
                                <label for="inputAddress">Address</label>
                                <input type="text"
                                    class="form-control col-12"
                                    value={this.state.address}
                                    placeholder="1234 Main St"
                                    onChange={(event) => {
                                        this.handleOnChangeInput(event, "address")
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="px-3" onClick={() => { this.handleAddNewUser() }}>Add new</Button>
                    <Button color="secondary" className="px-3" onClick={() => { this.toggle() }}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);




