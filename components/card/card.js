// SFC=stateless function component 40行》30行

const Card = ({ title, subtitle,img}) => 
    <div className="card-container">
        <style scope jsx>{`
                    .card-container {
                        background-color: #f6f6f6;
                        cursor: pointer;
                        padding-top: 10px;
                        padding-bottom: 30px;
                        border: 1px solid transparent;
                        margin-bottom: 5px;
                        height: 178px;
                    }
                    .card-container:hover {
                        border: 1px solid #00a2e1;
                    }
                    .img-s {
                        max-width: 80%;
                        height: auto;
                    }
                `}</style>
        <img className="img-s" src={img} alt="img" />
        {
            title ? (<p>
                <b>{title}</b>
                {subtitle}
            </p>) : (<br />)
        }

    </div>
export default Card