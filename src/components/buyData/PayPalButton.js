import React, {Component} from 'react'
import scriptLoader from 'react-async-script-loader';
import { withRouter } from "react-router-dom";

class PayPalButton extends Component{

  constructor(props){
    super(props)

    this.buttonRef = React.createRef()
  }
  
  componentWillReceiveProps = ({ isScriptLoaded, isScriptLoadSucceed }) => {
    const {total} = this.props
    
    if (isScriptLoaded && isScriptLoadSucceed) {
      const paypal = window.paypal
      
      paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total
                }
              }
            ]
          })
        },
        onApprove: (data, actions) => {
          actions.order.capture()
          .then((details) =>  {
            const {id} = this.props.match.params
            this.props.history.push(`/download/${id}`)
          })
          .catch(e => e)
        }
      })
      .render(this.buttonRef.current)
    }
  }

  render(){
    return <div>
      <div ref={this.buttonRef}></div>
    </div>
  }

}

const src = scriptLoader(`https://www.paypal.com/sdk/js?client-id=AfKIhHmFj4aWfCk9zX34Tf2Rv3LZO2eXJquF7GnKgy-zvTNazCTzHNIKgVnj9pEzpjYlruwq9E680wN9`)(PayPalButton)

export default withRouter(src)