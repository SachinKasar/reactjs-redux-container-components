import React from "react";
import {render} from "react-dom";

// TwoWheeler as a Class Component
export const TwoWheeler = (props) =>  {
	  return ( 
		    <div  className="alert alert-warning" >
						<h1 style={{color:'blue'}}> Two Wheeler </h1>
						<ul>
							<li>
								<b>Name :</b> {props.name}
							</li>
							<li>
								<b>By :</b> {props.specs.manufacturer}
							</li>
							
							<li>
								<b>Price :</b> {props.price}
							</li>
							
							<li>
								<b>Discount :</b> {props.discount}
							</li>
							 
						</ul>
						<div className="btn-group btn-group-sm">
							<button style={{margin:'5px'}} onClick={() => props.changeVisitor('New Visitor')} className="btn btn-primary" >Update Visitor</button>
							<button style={{margin:'5px'}} onClick={() => props.changeDiscount('10%')} className="btn btn-primary" >Update Discount</button>
						</div>
					 
				</div>
      
        );
     
};
