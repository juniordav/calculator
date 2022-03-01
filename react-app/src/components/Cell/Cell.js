import React from 'react';
import './Cell.css'

/**Représente une cellule de la calculatrice */
class Cell extends React.Component {
    render() {
      return (
        <input type="button" className="cell" value={this.props.numero} onClick = {this.props.onPress}/>
      );
    }
  }

export default Cell;