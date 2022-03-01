import React from 'react';
import Cell from "../../components/Cell/Cell";
import ResultPanel from '../../components/ResultPanel/ResultPanel.js'
import './Calculator.css'
class Calculator extends React.Component {


    constructor() {
  super();
  // set our default state
  this.state = {
    question: '',
    answer: ''
  }
  this.onPress = this.onPress.bind(this);
}



  onPress(event){

    const value = event.target.value;

    switch (value) {
      case '=': {
 
    		if(this.state.question!=='')
        {
    			var ans='';
    		  try
    			{
            //evalue le calcul a faire
    				ans = eval(this.state.question);
    			}
    			catch(err)
    			{
    				this.setState({answer: "Une erreur est survenue"});
    			}
    			if(ans===undefined)
    				this.setState({answer: "Une erreur est survenue lors du calcul"});
    			// mettre à jour la réponse.
    			else
    				this.setState({ answer: ans , question: ''});
    			break;
    		}
      }
      case 'AC':  {
        //efface tout dans le panel result
        this.setState({ question: '', answer: '' });
        break;
      }

	  case '<=': {
      //effece un caractère
	    var str = this.state.question;
  		str = str.substr(0,str.length-1);
  		this.setState({question: str});
  		break;
	  }

    default: {
        this.setState({ question: this.state.question += value})
        break;
      }
    }
  }


    renderCell(i) {
      return <Cell  numero={i} onPress = {this.onPress}/>;
    }
  
    render() {
  
      return (
               

        <div className="calculator">
        <div>
            <ResultPanel answer = {this.state.answer} question = {this.state.question}/>
            
        </div>
          <div className="calculator-panel">

          <div className="panel-row">
            {this.renderCell(7)}
            {this.renderCell(8)}
            {this.renderCell(9)}
             {this.renderCell('/')}

          </div>
          <div className="panel-row">
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
            {this.renderCell('*')}
          </div>
          <div className="panel-row">
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
            {this.renderCell('-')}
          </div>

            <div className="panel-row">
            {this.renderCell(0)}
            {this.renderCell('.')}
            {this.renderCell('=')}
            {this.renderCell('+')}
          </div>


           <div className="panel-row">
            {this.renderCell('AC')}
            {this.renderCell('<=')}

           
          </div>
        </div>
        </div>
      
      );
    }
  }

  export default Calculator;
