import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
import SlideComponent from '../components/slideComponent';

const HomePage = () => {
	return (
		<Container>
			<SubHeader current='Home' />
			<DisplayList />
			<SlideComponent />
		</Container>
	);
};

export default HomePage;
