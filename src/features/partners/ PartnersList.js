import { useReducer } from 'react';
import { Col, Row } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
	const partners = useReducer(selectAllPartners);
	return (
		<Col className="mt-4">
			{partners.map((partner) => {
				return (
					<div className="d-flex mb-5" key={partner.id}>
						<Partner partner={partner} />
					</div>
				);
			})}
		</Col>
	);
};

export default PartnersList;
