import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample({header, body}:any) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>
          {body}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;