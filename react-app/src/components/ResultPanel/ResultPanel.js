import React from 'react';
import './ResultPanel.css';


class ResultPanel extends React.Component{

 

    render(){
        return(

         <input type="text" readOnly className="result-panel" value={""+ this.props.question+ "\n" + this.props.answer}/>
        );
    }
}

  export default ResultPanel;

