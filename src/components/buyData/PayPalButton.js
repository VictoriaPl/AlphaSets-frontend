import React, {Component} from 'react'
import scriptLoader from 'react-async-script-loader';

class PayPalButton  extends Component{
  constructor(props){
    super(props)

    this.buttonRef = React.createRef()
  }
  
  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    const {total} = this.props
    
    if (isScriptLoaded && isScriptLoadSucceed) {
      const paypal = window.paypal
      
      paypal
      .Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total
                }
              }
            ]
          });
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            this.props.history.push('/thanks');
          });
        }
      })
      .render(this.buttonRef.current);
    }
  }

  render(){
    return <div>
      <div ref={this.buttonRef}></div>
    </div>
  }

}


export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=AUos8ry8Ki3xe8_8gyB5ndX_4qQCiGRxPVmpMGegm_nSibfC146tm4ZU04no-TlVBlX0TpPguxWhpdlK`)(PayPalButton)