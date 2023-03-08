import { 
  Row,
  Col,
} from "reactstrap";
import Blog from "../../components/dashboard/Blog";
import BlogData from "../../components/dashboard/Blog";

const Market = (props) => {
  console.log(props)
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <h5 className="mb-3">Basic Card</h5>
      <Row>
        {/* {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))} */}
      </Row>
    </div>
  );
};

export default Market;
