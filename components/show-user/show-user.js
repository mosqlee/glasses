import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {getUserList} from '../../redux/actions/userShow'

class ShowUser extends Component {
    count = 1;
    refresh = (e)=>{
        this.count++;
        const url = this.count%2 === 0? '1':'2';
        this.props.getUserList(url)
    }
    render() {
        const { userList,preList, isLoading, errorMsg } = this.props.userList;
        const list = isLoading ? preList : userList;
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
                <div className="col-md-12 text-right">
                    <a href="javascript:void(0)" className="refresh" onClick={this.refresh}>
                        <i className="glyphicon glyphicon-refresh"></i>
                        trade
                    </a>

                </div>
                {
                    list.userList.map((i,index) => {
                        return (
                            <div className={index === 0 ? "col-md-4 avatar-l" : "col-md-2 avatar-s"} key={index}>
                                <img className="avatar" src={i} alt="userAvatar" />
                            </div>
                        )
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