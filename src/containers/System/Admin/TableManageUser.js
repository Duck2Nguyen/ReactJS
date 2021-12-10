import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import * as actions from "../../../store/actions";
import { connect } from 'react-redux';
import './TableManageUser.scss';

class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersRedux: []
        }
    }
    async componentDidMount() {
        this.props.fetchUserRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.ListUsers !== this.props.ListUsers) {

            let arrGenders = this.props.genderRedux;
            this.setState({
                usersRedux: this.props.ListUsers
            })
        }
    }
    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id)
    }
    render() {
        console.log("My check all user from redux", this.props.ListUsers)
        console.log("Check state", this.state.usersRedux)
        let arrUsers = this.state.usersRedux;
        return (
            <table id="TableManageUser">
                <tbody>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    {arrUsers && arrUsers.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>
                                    <button className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                                    <button
                                        className="btn-delete"
                                        onClick={() => this.handleDeleteUser(item)}
                                    ><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        ListUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
