import { Col, Row } from 'reactstrap';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import {selectFeaturedPartner} from '../partners/partnersSlice';
import AnimatedDisplayCard from './AnimatedDisplayCard';

//needs more understanding //

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;