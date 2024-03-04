import {Col, Image, Row} from "react-bootstrap";
import SocialIcon from "./SocialIcon";

function Profile({data}) {
  return (
    <>
      <Row>
        <Col>
          <div className="profile-div">
            <Image src={data.profile.image} className="rounded mx-auto d-block mt-3"
                   roundedCircle={true} width={150} height={150}/>
            <div className="mt-4">
              <div className="text-capitalize text-center">
                <h4>
                  <strong>
                    {data.profile.name}
                  </strong>
                </h4>
                <h5>{data.profile.occupation},</h5>
                <p>{data.profile.location}</p>
                <SocialIcon socialInfo={data.socialMedia}/>
                <p>Lives in: Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Profile;
