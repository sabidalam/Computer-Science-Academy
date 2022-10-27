import React from 'react';
import Headers from '../SharedPage/Header/Headers';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <Headers></Headers>
            <div className='text-center'>
                <span className='bg-primary px-5 py-2 fs-4 fw-semibold rounded text-center text-light'>Blog</span>
            </div>
            <Accordion className='container w-75 mx-auto my-5' defaultActiveKey="0">
                <Accordion.Item className='mb-4' eventKey="0">
                    <Accordion.Header><h5>What is Cors?</h5></Accordion.Header>
                    <Accordion.Body>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='mb-4' eventKey="1">
                    <Accordion.Header>
                        <h5>
                            Why we use Firebase and What other options do we have to implement authentication?
                        </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        Store and sync data with our NoSQL cloud database. Data is synced across all clients in realtime, and remains available when your app goes offline.The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically.
                        <br />
                        Other Options we have to implement authentication is: <br />
                        1. Auth0 <br />
                        2. MongoDb <br />
                        3. Passport <br />
                        4. Okta <br />
                        5. JSON Web Token
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='mb-4' eventKey="2">
                    <Accordion.Header>
                        <h5>
                            How does Private Route work?
                        </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='mb-4' eventKey="3">
                    <Accordion.Header>
                        <h5>
                            What is Node? How does Node work?
                        </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />

                        <b>Working of Node.js</b>: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br />

                        Node.js basically works on two concept <br />

                        1. Asynchronous <br />
                        2. Non-blocking I/O
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blog;