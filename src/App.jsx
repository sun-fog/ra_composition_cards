import React from 'react';
import { Card } from './components/Card';

export default function App() {
  return (
    <div className="container py-5">
      <h1 className="mb-5 text-center">Карточки</h1>

      <div className="row justify-content-center g-4">
        {/* Карточка с изображением сверху */}
        <div className="col-md-4">
          <Card>
            <Card.Img
              src="/img/1.png"
              alt="Image cap"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </Card.Text>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </Card.Body>
          </Card>
        </div>

        {/* Текстовая карточка */}
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
