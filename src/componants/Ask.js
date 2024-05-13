import Accordion from 'react-bootstrap/Accordion';
import '../css/Ask.css';
function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What are the company's services or products?</Accordion.Header>
        <Accordion.Body>
        Please visit our official website to view a list of our current services and products.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is the company's experience and expertise in the field?</Accordion.Header>
        <Accordion.Body>
        We are a highly experienced company in this field. We have a skilled team with extensive expertise, and we have provided our services to a large number of clients, prioritizing customer satisfaction as our primary goal
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Do you have any recognized certifications or achievements?</Accordion.Header>
        <Accordion.Body>
        Yes, we have several recognized certifications and achievements in our industry. You can visit our website's certifications and achievements page for more information        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What are the steps for a client to benefit from your services?</Accordion.Header>
        <Accordion.Body>
        You can contact us via our official phone number or email to provide your information and needs. Our team will collaborate with you to determine the next steps and deliver the required services.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Do you have examples of previous work you have done?</Accordion.Header>
        <Accordion.Body>
        Yes, you can visit our portfolio page on our website to see some examples of our previous work. You will find a list of projects we have completed and the results we have achieved for our clients.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>What are the prices and fees associated with your services?</Accordion.Header>
        <Accordion.Body>
        For information about the prices and fees related to our services, please contact our sales team or fill out the inquiry form on our website. Our team will provide you with updated and detailed information.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Do you offer flexible payment options or financing plans for customers?</Accordion.Header>
        <Accordion.Body>
        Yes, we provide flexible payment options and financing plans to meet the needs of our customers. You can speak with our sales team to get more information about the available options.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>How can I contact you?</Accordion.Header>
        <Accordion.Body>
        You can reach us by phone or email. For information about our refund policy in case of dissatisfaction with the services, please contact us directly.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Contact Us!</Accordion.Header>
        <Accordion.Body>
        Name:  GCM company   <br/>
        Phone Number: +201016588468<br/>
        Email: companygcm20@gmail.com   
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;