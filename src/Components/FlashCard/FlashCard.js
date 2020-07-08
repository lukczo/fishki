import React, { Component } from 'react';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

class FlashCard extends Component {
    state = {
        query: '',
        def: '',
      };
    
    getQuery = (event) => {
        this.setState({
          query: event.target.value
        })
      } 
    
      getDef =  (event) => {
        this.setState({
          def: event.target.value
        })
      }

      handleSubmit = (event, q, d) => {
        event.preventDefault();
        this.props.btnFunction(event, q, d);
        this.setState(
          {
            query: '',
            def: ''
          }
        )
      }

    render() {
    return (
        <form onSubmit={ (event) => this.handleSubmit(event, this.state.query, this.state.def)}>
        <ul>
          <InputField inputFunction={ (event) => this.getQuery(event)} value={this.state.query}></InputField>
          <InputField inputFunction={ (event) => this.getDef(event)}  value={this.state.def}></InputField>
        </ul>
        <Button>Add</Button>
      </form>
    )}
};
 
export default FlashCard;