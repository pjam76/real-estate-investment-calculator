import React from 'react'

import { 
		Grid, Row, Col, 
		Input, Button, ButtonToolbar 
	} from 'react-bootstrap'

class AddInvestmentProject extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = 'AddInvestmentProject'
    }

    render() {
		return (
		<Grid>
			<Row>
				<Col xs={7}>
				<h2>Add Property Investment</h2>
				<form>

					<Input 
						type='text' 
						name='investment-name' 
						label='Investment Name:'
					/>

					<Input 
						type='text' 
						name='property-price' 
						label='Property Price:'
					/>

					<Input 
						type='text' 
						name='cash-investment' 
						label='Cash investment:'
					/>

					<Input 
						type='text' 
						name='loan-rate' 
						label='Loan Rate:'
					/>

					<Input 
						type='text' 
						name='loan-period' 
						label='Loan Period:'
					/>

					<Input 
						type='text' 
						name='monthly-rent' 
						label='Monthly Rent:'
					/>

					<Input 
						type='text' 
						name='vacancy-factor' 
						label='Vacancy Factor:'
					/>

					<Input 
						type='text' 
						name='yearly-property-tax' 
						label='Yearly property tax:'
					/>

					<Input 
						type='text' 
						name='monthly-rent-tax' 
						label='Monthly rent tax:'
					/>

					<Input 
						type='text' 
						name='yearly-improvements-cost' 
						label='Yearly Improvements:'
					/>

					<Input 
						type='text' 
						name='initial-improvements-cost' 
						label='Initial Improvements:'
					/>

					<Button 
						bsSize="large"
						bsStyle="primary" 
						role='submit'>Submit</Button>
				</form>
				</Col>
	        </Row>
        </Grid>
        )
    }
}

export default AddInvestmentProject;
