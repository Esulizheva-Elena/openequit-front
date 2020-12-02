import React,{Component} from 'react';
import CoinContract from '../../../build/contracts/CoinCreator.json'
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Switch, Route, Redirect } from "react-router-dom";
// core components
// import Button from "../../components/CustomButtons/Button";
import Input from "../input/Input"
import moment from 'moment'

class Crowd extends Component {
  constructor(props, context) {
    super(props)
    this.state={
    accounts:props.accounts[0],
    web3:'',
    parametersSet:false,


    orderForm: {
        openingTime: {
            elementType: 'date',
            label:'Sale Opening Time',
            elementConfig: {
                type: 'text',
                placeholder: ''
            },
            value: '',
            display:''
        },
        closingTime: {
            elementType: 'date',
            label:'Sale Closing Time',
            elementConfig: {
                type: 'text',
                placeholder: ''
            },
            value: '',
            display:''
        },
        rate: {
            elementType: 'input',
            label: 'Rate',
            elementConfig: {
                type: 'text',
                placeholder: 'enter rate'
            },
            value: 10
        },
        wallet: {
            elementType: 'input',
            label: 'Wallet',
            elementConfig: {
                type: 'text',
                placeholder: 'enter wallet address'
            },
            value: '0x00000000'
        },
        token: {
            elementType: 'input',
            label:'Token',
            elementConfig: {
                type: 'text',
                placeholder: 'token'
            },
            value: 'Test'
        }
    },

    instance:'',
    owner:'',
    contracts:context.drizzle.contracts,
    event:'',
    web3:'',
    created:false,
    newContract:''
    }
  }



  componentWillMount () {
    console.log(this.props)
    console.log(this.context.drizzle.web3)
    // console.log(this.context.drizzle.contracts.CoinCreator.events)
    // this.setState({events:this.context.drizzle.contracts.CoinCreator.events.CoinCreation,web3:this.context.drizzle.web3})
  }



  // change partner address, share
  handleChange = (fieldName, event) => {
    const state = {
      ...this.state,
    };
    state[fieldName] = event.target.value;
    this.setState(state);
    console.log(state)
  };

  // change  params
  inputChangedHandler = (event, inputIdentifier,inputType) => {
    console.log(inputIdentifier)
    console.log(event)
    console.log(inputType)
    const updatedOrderForm = {
        ...this.state.orderForm
    };
    const updatedFormElement = {
        ...updatedOrderForm[inputIdentifier]
    };

    if(inputType=='date'){
      let display=event
      let unix=moment(event).format('X')



      updatedFormElement.value=display
      updatedFormElement.display=unix
      updatedOrderForm[inputIdentifier] = updatedFormElement;
      this.setState({orderForm: updatedOrderForm});

    }else{
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    console.log(event.target.value)
    this.setState({orderForm: updatedOrderForm},console.log(this.state));
    }
  }

  // deploy
    handleSubmit2= async()=>{

    }
  handleSubmit=()=>{
    this.setState({parametersSet:true})
  }

  render () {
    let parametersForm=null
    let CreatedMessage=null
    
    
  
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
          id: key,
          config: this.state.orderForm[key]
      });
    }
     parametersForm =
      <React.Fragment>
        <Typography variant="display1" gutterBottom>
          CrowdSale Parameters
        </Typography>
        <form >
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    label={formElement.config.label}
                    changed={(event) => this.inputChangedHandler(event, formElement.id,formElement.config.elementType)} />
            ))}
        </form>
      </React.Fragment>

    if(this.state.created === true){
      CreatedMessage=(<div> <h1>Your new Coin has been created. Its address is {this.state.newContract} </h1>
      </div>)
    }
    return (
      <Card>
        <CardContent>
          <Grid container spacing={0}>
          {CreatedMessage}
            <Grid item xs={0} sm={6} style={{background:'white'}} >
              
              {parametersForm}
            </Grid>

          </Grid>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={this.handleSubmit2}>Crowd Sale</Button>
        </CardActions>
      </Card>
    );
  }
}
Crowd.contextTypes = {
    drizzle: PropTypes.object
  }
export default withStyles()(Crowd);
