import React from 'react'
import trainlotus from '../../Assets/train-lotus.jpg'
import '../Home-cards/Home-cards.css'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export default function Homecards() {
  return (
    <div className='container'>
        <div className='cards'>
            
            <Card className='card'>
              <Card.Img src={trainlotus} className='card-picture' variant="top"/>
              <Card.Body>
                <Card.Title>REGULARIZATION OF LAND OWNED BY RAILWAY DEPARTMENT</Card.Title>
                <Card.Text>Using the land/buildings owned by the Railway Department without 
                a formal lease agreement is an offense punishable under the Government Land 
                Ordinance Act. Accordingly, all railway land users and new applicants should 
                register online and the last date is 15th July 2024. Persons who do not register 
                before that date will be dealt with under the Government Land (Recovery of Possession) Act No. 07 of 1979.</Card.Text>
              </Card.Body>
              <Button variant="primary">Register</Button>
            </Card>

            <Card className='card'>
              <Card.Img src={trainlotus} className='card-picture' variant="top"/>
              <Card.Body>
                <Card.Title>නව දුම්රිය සාමාන්‍යාධිකාරීවරයා පත් කෙරේ</Card.Title>
                <Card.Text>ශ්‍රී ලංකා දුම්රිය සේවයේ වැඩබලන දුම්රිය සාමාන්‍යාධිකාරීවරයා 
                ලෙස ප්‍රවාහන හා මහා මාර් ග අමාත්‍යංශයේ අධ්‍යක්ෂ ජනරාල් (සැලසුම්) එස්. එස්.මුදලිගේ මහතා 
                2024.04.29 දින රාජකාරි භාර ගන්නා ලදි.</Card.Text>
              </Card.Body>
             
            </Card>

            <Card className='card'>
              <Card.Img src={trainlotus} className='card-picture' variant="top"/>
              <Card.Body>
                <Card.Title>Transforming Urban Mobility</Card.Title>
                <Card.Text>The Ministry of Transport invites visionary investors to participate in an unprecedented 
                opportunity to redefine the urban landscape by developing the six major railway stations mainly Slave Island, 
                Kollupitiya, Bambalapitiya, Wallawatta, Dehiwala & Mount Lavinia through the ppp model.
                Apart from this, investors have been given the opportunity to submit proposals for any railway station in Sri Lanka through ppp format.
                In order to provide a better investment plan, the survey plan of the above six major stations is available for download.</Card.Text>
              </Card.Body>
              <Button variant="primary">Read More....</Button>
            </Card>

            <Card className='card'>
              <Card.Img src={trainlotus} className='card-picture' variant="top"/>
              <Card.Body>
                <Card.Title>REGULARIZATION OF LAND OWNED BY RAILWAY DEPARTMENT</Card.Title>
                <Card.Text>Using the land/buildings owned by the Railway Department without 
                a formal lease agreement is an offense punishable under the Government Land 
                Ordinance Act. Accordingly, all railway land users and new applicants should 
                register online and the last date is 15th July 2024. Persons who do not register 
                before that date will be dealt with under the Government Land (Recovery of Possession) Act No. 07 of 1979.</Card.Text>
              </Card.Body>
              <Button variant="primary">Register</Button>
            </Card>

            <Card className='card'>
              <Card.Img src={trainlotus} className='card-picture' variant="top"/>
              <Card.Body>
                <Card.Title>REGULARIZATION OF LAND OWNED BY RAILWAY DEPARTMENT</Card.Title>
                <Card.Text>Using the land/buildings owned by the Railway Department without 
                a formal lease agreement is an offense punishable under the Government Land 
                Ordinance Act. Accordingly, all railway land users and new applicants should 
                register online and the last date is 15th July 2024. Persons who do not register 
                before that date will be dealt with under the Government Land (Recovery of Possession) Act No. 07 of 1979.</Card.Text>
              </Card.Body>
              <Button variant="primary">Register</Button>
            </Card>
        </div>
    </div>
  )
}
