import React, { Component } from 'react';
import { connect } from 'react-redux'
class ShowUser extends Component {
    render() {
        const { userList, isLoading, errorMsg } = this.props.userList;
        return (
            <div>
                <style>{`
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
                `}
                </style>
                {
                    userList.userList.map((i,index) => {
                        return (
                            <div className={index === 0 ? "col-md-4 avatar-l" : "col-md-2 avatar-s"} key={index}>
                                <img className="avatar" src={i} alt="userAvatar"/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default connect((state) => ({ userList: state.userShow }))(ShowUser)