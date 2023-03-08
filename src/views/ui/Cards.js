import { 
  Row,
  Col,
} from "reactstrap";
import Blog from "../../components/dashboard/Blog";
import bg1 from "../../assets/images/bg/1.webp";
import bg2 from "../../assets/images/bg/2.webp";
import bg3 from "../../assets/images/bg/3.webp";
import bg4 from "../../assets/images/bg/4.webp";

const BlogData = [
  {
    image: bg1,
    title: "This is sample1",
    subtitle: "2 comments, 1 Like",
    description:
      "NFT Cards $$$$$$$$$$$$$",
    btnbg:"primary",
  },
  {
    image: bg2,
    title: "This is sample2",
    subtitle: "2 comments, 1 Like",
    description:
      "NFT Cards $$$$$$$$$$$$$",
    btnbg:"primary",
  },
  {
    image: bg3,
    title: "This is sample3",
    subtitle: "2 comments, 1 Like",
    description:
      "NFT Cards $$$$$$$$$$$$$",
    btnbg:"primary",
  },
  {
    image: bg4,
    title: "This is sample4",
    subtitle: "2 comments, 1 Like",
    description:
      "NFT Cards $$$$$$$$$$$$$",
    btnbg:"primary",
  },
];


const Cards = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <h5 className="mb-3">Basic Card</h5>
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
