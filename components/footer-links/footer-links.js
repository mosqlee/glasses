import react , {Component} from 'react';

class FooterLinks extends Component {
    render(){
        const title = this.props.title;
        const links = this.props.links;
        return(
            <div>
                <style scope jsx>{`
                    .footer-line{
                        display: block;
                        width: 25px;
                        margin-top: 3px;
                        margin-bottom: 3px;
                        margin-left: 0;
                        height: 1px;
                        background-color: gray;
                    }
                    ul {
                        margin: 0;
                        padding: 0;
                        list-style-type: none;
                        font-size: 12px;
                    }
                    li {
                        margin: 5px 0;
                        text-align: left;
                    }
                    li a{
                        font-size: 12px;
                        color: #000;
                    }
                    li a:hover{
                        color: #334c83;
                    }
                    .padding-r-no {
                        padding-right: 0;
                    }
                `}
                </style>
                <div className="col-md-12 text-left">
                    <b>{title}</b>
                    <i className="footer-line"></i>
                </div>
                {
                    links.map(i=>{
                        return(
                            <div className="col-md-6 padding-r-no" key={i}>
                                <ul>
                                    {
                                        i.map(m => {
                                            return (
                                                <li key={m}>
                                                    <a href="#">{m}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default FooterLinks