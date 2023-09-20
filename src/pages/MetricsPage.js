import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import PartnersList from '../features/partners/PartnersList';
import PieChartComponent from '../components/Charts/PieChart';


const MetricsPage = () => {
	return (
		<Container>
            <SubHeader current='Metrics' />
			<Row className="row-content">
				<Col sm="6">
				<PieChartComponent />
				</Col>

				<Col sm="6">
					<Card>
						<CardHeader>
							<h3>Missions</h3>
						</CardHeader>
						<CardBody>
							<dl className="row">
								<dt className="col-6">Summary</dt>
								<dd className="col-6">February 3, 2016</dd>
								<dt className="col-6">No. of Campsites in 2019</dt>
								<dd className="col-6">563</dd>
								<dt className="col-6">No. of Reviews in 2019</dt>
								<dd className="col-6">4388</dd>
								<dt className="col-6">Employees</dt>
								<dd className="col-6">42</dd>
							</dl>
						</CardBody>
					</Card>
				</Col>

				<Col>
					<Card className="bg-light mt-3">
						<CardBody>
							<blockquote className="blockquote">
								<p>
									I will not follow where the path may lead, but I will go where there is no path, and 
                                    I will leave a trail.
								</p>
								<footer className="blockquote-footer">
									Muriel Strode,{' '}
									<cite title="Source Title">"Wind-Wafted Wild Flowers" - The Open Court, 1903</cite>
								</footer>
							</blockquote>
						</CardBody>
					</Card>
				</Col>
			</Row>
			<Row className="row-content">
				<Col xs="12">
					<h3> Community Partners</h3>
					<PartnersList/>
				</Col>
			</Row>
		</Container>
	);
};

export default MetricsPage;
