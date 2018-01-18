import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";

import {TwoWheeler} from "../components/TwoWheeler";
import {FourWheeler} from "../components/FourWheeler";

import {addDiscount} from "../actions/discountActions";
import {addVisitor} from "../actions/visitorActions";

class App extends React.Component {
    render() {
		var twoWheelSpecs = {manufacturer : "Royal Enfield"};
		var fourWheelSpecs = {manufacturer : "Maruti Suzuki"};
		
        return ( 
			<div className="container">
                <div className="row col-xs-10 col-xs-offset-1 alert alert-success">
				    <br/>   
                    <div className="row">
                      <div className="col-xs-10 col-xs-offset-1" >
							<TwoWheeler name="Enfield Classic" 
									  specs={twoWheelSpecs} 
									  price="0" 
									  changeVisitor={(name) => this.props.setVisitorName(name)} 
									  changeDiscount={(amount) => this.props.setDiscount(amount)}
									  discount={this.props.discountProp.discount}/>
						</div>
					</div> <br/>
            
				   <div className="row">
                      <div className="col-xs-10 col-xs-offset-1" >
							<FourWheeler 
								name="Grand Vitara" 
								specs={fourWheelSpecs} 
								visitor={this.props.visitorProp.visitorName}
								discount={this.props.discountProp.discount}/>
						</div>
					</div>
				  </div>
			  </div>
        );
    } 
}

const mapStateToProps = (state) => {
	return {
		visitorProp : state.visitorReducer,
		discountProp : state.discountReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setVisitorName: (name) => {
			dispatch(addVisitor(name));
		},
		setDiscount: (amount) => {
			dispatch(addDiscount(amount));
		},
		
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

