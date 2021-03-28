import React from 'react'

export class FormInput extends React.Component{
      render(){
        console.log('this.props', this.props);
        const {labelText, inputType}= this.props;
        return (
            <div>
                <label>
                    {labelText}
                    <input type={inputType} />
                </label>
            </div>
        );
      }
    }