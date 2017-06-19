import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";

import {TwoWheel} from "../components/TwoWheel";
import {FourWheel} from "../components/FourWheel";

import {addDiscount} from "../actions/discountActions";
import {addVisitor} from "../actions/visitorActions";

class App extends React.Component {
    render() {
		var twoWheelSpecs = {manufacturer : "Royal Enfield"};
		var fourWheelSpecs = {manufacturer : "Maruti Suzuki"};
		
        return ( 
			<div>
				 <div className="container">
					<div className="row">
						<div className="row">
							<TwoWheel name="Enfield Classic" 
									  specs={twoWheelSpecs} 
									  price="0" 
									  changeVisitor={(name) => this.props.setVisitorName(name)} 
									  changeDiscount={(amount) => this.props.setDiscount(amount)}
									  discount={this.props.discountProp.discount}/>
						</div>
					</div>
				  </div>
			  
				  <div className="container">
					<div className="row">
						<div className="row">
							<FourWheel 
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

