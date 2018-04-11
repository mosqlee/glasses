import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {getUserList} from '../../redux/actions/userShow'

class ShowUser extends Component {
    refresh = ()=>{
        this.props.getUserList()
    }
    render() {
        const { userList, isLoading, errorMsg } = this.props.userList;
        return (
            <div>
                <style scope jsx>{`
                    .avatar-l {
                        height: 400px;
                        overflow: hidden;
                    }
                    .avatar-s {
                        margin-bottom: 10px;
                        height: 195px;
                        overflow: hidden;
                    }
                    .avatar {
                        width: 100%;
                    }
                    .refresh{
                        color:#00a2e1;
                        cursor: pointer;
                    }
                `}
                </style>
                <div className="col-md-12 text-right refresh" onClick={this.refresh}>
                    <i className="glyphicon glyphicon-refresh"></i>
                trade
                </div>
                {
                    userList.userList.map((i,index) => {
                        const a = !isLoading ? (
                            <div className={index === 0 ? "col-md-4 avatar-l" : "col-md-2 avatar-s"} key={index}>
                                <img className="avatar" src={i} alt="userAvatar" />
                            </div>
                        ): (
                            <h1 className="te">loading</h1>
                        )
                        return a
                    })
                }
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUserList: bindActionCreators(getUserList, dispatch)
    }
}
export default connect((state) => ({ userList: state.userShow }), mapDispatchToProps)(ShowUser)