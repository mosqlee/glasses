import GlassItem  from '../glass-item/glass-item'
import React, { Component } from 'react';
import { connect } from 'react-redux'
class GlassList extends Component {
    render() {
        const { glassList, isLoading, errorMsg } = this.props.glassList;
        return (
            <div>
                {
                    glassList.glassList.map((i)=>{
                        return (
                            <div className="col-md-4" key={i.id}>
                            <GlassItem data={i}  />
                        </div>
                        )
                    })
                }
                
            </div>
            )
    }
}
export default connect((state) => ({glassList: state.glassList}))(GlassList)