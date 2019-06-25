import React from 'react';
// import History from './comp'

class History extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <ul>
                {this.props.urlData.map((url, idx) => {
                    return (
                        <li key={idx}>
                            <p>GET</p>
                            <p>{url}</p>
                        </li>
                )
            })
            
            
          }
          </ul>
        )
    }
}

export default History;