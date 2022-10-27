import React from 'react';
import Headers from '../SharedPage/Header/Headers';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>
            <Headers></Headers>
            <div>
                <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
                <h5 className="text-center text-secondary mb-5">
                    Find the answers for the most frequently asked questions below
                </h5>
            </div>
            <div className='d-flex container'>
                <div className='w-50 container'>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h5>What is React?</h5></Accordion.Header>
                            <Accordion.Body>
                                It is an open source project released in 2013 by Meta, for building user interfaces (UI). It is based on declarative programming principles, and using components as main entities.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h5>What is JSX?</h5></Accordion.Header>
                            <Accordion.Body>
                                This is an extension for React, which changes syntax to create React elements, which contains both JavaScript code and elements markup for HTML at the same time.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><h5>What are props in React?</h5></Accordion.Header>
                            <Accordion.Body>
                                In React props are the arguments which we send to React components. The most similar thing like this is the function arguments in clear JavaScript. Their main characteristic is immutable - once set they can't be changed. Also they can be used both in functional and in class components.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><h5>What is a state in React?</h5></Accordion.Header>
                            <Accordion.Body>
                                It is part of a component which contains data or information about it. It can be changed dynamically and every change will cause component re-render. States can store properties but are available to use only in class components.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='w-50 container'>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h5>What is DOM?</h5></Accordion.Header>
                            <Accordion.Body>
                                DOM stands for Document Object Model.  DOM is a programming interface for HTML and XML documents.
                                When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM. Using this DOM, we can manipulate or change various elements inside the HTML document.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h5>What are arrow functions?</h5></Accordion.Header>
                            <Accordion.Body>
                                Arrow functions were introduced in the ES6 version of javascript. They provide us with a new and shorter syntax for declaring functions. Arrow functions can only be used as a function expression.Arrow functions are declared without the function keyword. If there is only one returning expression then we don’t need to use the return keyword as well in an arrow function as shown in the example above. Also, for functions having just one line of code, curly braces { } can be omitted.

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><h5> What are the elements of the CSS Box Model?</h5></Accordion.Header>
                            <Accordion.Body>
                                The CSS box model defines the layout and design of CSS elements. The elements are content (like text and images, padding (the area around content), border (the area around padding), and margin (the area around the border).
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><h5>What are Attributes in HTML?</h5></Accordion.Header>
                            <Accordion.Body>
                                An additional attribute is given to each tag to alter the behavior of the tag. Attributes are defined directly after the tag name, inside the angular brackets. They appear in opening tags and can never appear in closing tags.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;