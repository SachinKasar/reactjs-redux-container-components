import React from "react";

  

const discountReducer = (state={visitorName:"XYZ", discount:"5%"}, action) => {
	switch (action.type) {
		case 'ADD_DISCOUNT':
			state = { 
			          ...state,
			          discount: action.payload
					};
			break;
		
	}
	return state;
};

export default discountReducer;



 
