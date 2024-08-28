import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
function NewsItem({ title, date, src, url }) {
    const formattedDate = moment(date).format('MMM D, YYYY [at] h:mm A');
  return (
    <Card style={{ width: '100%', height: '250px', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
      <Card.Body style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div>
          <Card.Title className='card-title'>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{src}</Card.Subtitle>
          <Card.Text>{formattedDate}</Card.Text>
        </div>
        <div className="mt-auto">
          <Button variant="danger" className='w-100' href={url} target='_blank'>Read More</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NewsItem;
