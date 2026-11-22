import React from 'react';

function Card({ children, className = '', ...props }) {
  return (
    <div className={`card ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

function CardImg({ className = '', ...props }) {
  return <img className={`card-img-top ${className}`.trim()} {...props} />;
}

function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`card-header ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

function CardBody({ className = '', ...props }) {
  return (
    <div className={`card-body ${className}`.trim()} {...props}>
      {props.children}
    </div>
  );
}

function CardTitle({ className = '', ...props }) {
  return (
    <h5 className={`card-title ${className}`.trim()} {...props}>
      {props.children}
    </h5>
  );
}

function CardSubtitle({ className = '', ...props }) {
  return (
    <h6 className={`card-subtitle mb-2 text-body-secondary ${className}`.trim()} {...props}>
      {props.children}
    </h6>
  );
}

function CardText({ className = '', ...props }) {
  return (
    <p className={`card-text ${className}`.trim()} {...props}>
      {props.children}
    </p>
  );
}

function CardLink({ className = '', ...props }) {
  return <a className={`card-link ${className}`.trim()} {...props} />;
}

function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={`card-footer ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

Card.Img = CardImg;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;
Card.Link = CardLink;
Card.Footer = CardFooter;

export { Card, CardImg, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, CardLink, CardFooter };
