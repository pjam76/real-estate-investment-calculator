'use strict'

import React from 'react'

import { connectReduxForm } from 'redux-form'

import { 
		Grid, Row, Col, 
		Input, Button, ButtonToolbar 
	} from 'react-bootstrap'

class AddInvestmentForm extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = 'AddInvestmentForm'
    }

    onSubmit ( data ) {
    	console.log("submitting", data)
    }

    render() {
    	const { fields: {name, propertyPrice, propertyCashInvestment, loadRate, loanPeriod, monthlyRent, vacancyFactor, yearlyPropertyTax, monthlyRentTax, yearlyImprovementCost, initalImprovementsCost}, handleSubmit } = this.props
		return (
		<Grid>
			<Row>
				<Col xs={7}>
				<h2>Add Property Investment</h2>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

					<Input 
						type='text' 
						name='investment-name' 
						label='Investment Name:'
						{...name}
					/>

					<Input 
						type='text' 
						name='property-price' 
						label='Property Price:'
						{...propertyPrice}
					/>

					<Input 
						type='text' 
						name='cash-investment' 
						label='Cash investment:'
						{...propertyCashInvestment}
					/>

					<Input 
						type='text' 
						name='loan-rate' 
						label='Loan Rate:'
						{...loadRate}
					/>

					<Input 
						type='text' 
						name='loan-period' 
						label='Loan Period:'
						{...loanPeriod}
					/>

					<Input 
						type='text' 
						name='monthly-rent' 
						label='Monthly Rent:'
						{...monthlyRent}
					/>

					<Input 
						type='text' 
						name='vacancy-factor' 
						label='Vacancy Factor:'
						{...vacancyFactor}
					/>

					<Input 
						type='text' 
						name='yearly-property-tax' 
						label='Yearly property tax:'
						{...yearlyPropertyTax}
					/>

					<Input 
						type='text' 
						name='monthly-rent-tax' 
						label='Monthly rent tax:'
						{...monthlyRentTax}
					/>

					<Input 
						type='text' 
						name='yearly-improvements-cost' 
						label='Yearly Improvements:'
						{...yearlyImprovementCost}
					/>

					<Input 
						type='text' 
						name='initial-improvements-cost' 
						label='Initial Improvements:'
						{...initalImprovementsCost}
					/>

					<Button 
						bsSize="large"
						bsStyle="primary" 
						role='submit'
						onClick={handleSubmit(this.onSubmit.bind(this))}
					>
						Submit
					</Button>
				</form>
				</Col>
	        </Row>
        </Grid>
        )
    }
}

export default connectReduxForm({
	form: 'investmentForm',                      
	fields: [
		'name', 
		'propertyPrice', 
		'propertyCashInvestment', 
		'loadRate', 
		'loanPeriod',
		'monthlyRent',
		'vacancyFactor',
		'yearlyPropertyTax',
		'monthlyRentTax',
		'yearlyImprovementCost',
		'initalImprovementsCost'
		]
})(AddInvestmentForm)
