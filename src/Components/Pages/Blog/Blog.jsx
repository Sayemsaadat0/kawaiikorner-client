import React from 'react';

const Blog = () => {
    return (
        <div className='m-20'>
            boloh
            <div>
                {/* carda */}
                <div className="card w-[100%] bg-base-100 shadow-xl mb-10 hover:shadow-fuchsia-200 hover:scale-110 duration-700 hover:bg-fuchsia-500 hover:text-white ">
                    <div className="card-body">
                        <h2 className="card-title">Q- What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p>An access token is a credential granted to a client after successful authentication, allowing access to specific resources or actions.</p>
                        <p>A refresh token is a long-lived credential issued to a client during authentication, used to obtain new access tokens when the current one expires.</p>
                        <p>
                            Access tokens can be stored in memory or local storage on the client-side for easy retrieval and inclusion in requests. Refresh tokens, being more sensitive, should be securely stored, typically in an HTTP-only secure cookie or through other secure storage mechanisms provided by the platform or framework.</p>
                        <p>When a user authenticates, an access token and a refresh token are generated. The access token is sent with each subsequent request to the server, allowing access to protected resources. It has a limited lifespan to enhance security. If the access token expires or becomes invalid, the client can use the refresh token to request a new access token without re-entering credentials. The server verifies the refresh token and, if valid, issues a new access token. This process enables continuous access while minimizing the exposure of long-lived credentials. The use of short-lived access tokens and longer-lived refresh tokens enhances security by reducing the window of opportunity for unauthorized access.</p>
                    </div>
                </div>
                {/* carda */}
                <div className="card w-[100%] bg-base-100 shadow-xl mb-10 hover:shadow-fuchsia-200  hover:scale-110 duration-700 hover:bg-fuchsia-500 hover:text-white">
                    <div className="card-body">
                        <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                        <p>SQL (Structured Query Language) databases are based on the relational data model. They organize data into structured tables with predefined schemas, where each table consists of rows and columns....NoSQL (Not Only SQL) databases, on the other hand, use various data models such as key-value, document, columnar, or graph. These models offer more flexibility and allow for storing unstructured or semi-structured data.</p>
                        <p>SQL databases enforce a rigid schema, which means that the structure and relationships between tables must be defined upfront. Changes to the schema often require altering the table structure and migrating data.....NoSQL databases are typically schema-less or schema-flexible. They allow for dynamic schema changes, enabling you to store data without predefined structures. Each record or document can have its own structure.</p>
                    </div>
                </div>
                {/* carda */}
                <div className="card w-[100%] bg-base-100 shadow-xl mb-10 hover:shadow-fuchsia-200  hover:scale-110 duration-700 hover:bg-fuchsia-500 hover:text-white">
                    <div className="card-body">
                        <h2 className="card-title">What is express js? What is Nest JS </h2>
                        <p>Express.js is a minimalist web application framework for Node.js. It simplifies the process of building web applications by providing a lightweight and flexible set of features for handling HTTP requests, routing, and middleware.</p>
                        <p>Node.js is an open-source JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server-side, enabling them to build scalable and efficient network applications. Node.js utilizes an event-driven, non-blocking I/O model, which makes it well-suited for handling concurrent connections. It provides a rich ecosystem of modules and packages through npm (Node Package Manager) that allow developers to extend its functionality. Node.js has gained popularity for its ability to build real-time applications, APIs, server-side applications, and microservices, making it a powerful and versatile platform for web development..</p>
                        
                    </div>
                </div>
                {/* carda */}
                <div className="card w-[100%] bg-base-100 shadow-xl mb-10 hover:shadow-fuchsia-200 
                hover:scale-110 duration-700 hover:bg-fuchsia-500 hover:text-white
                ">
                    <div className="card-body">
                        <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                        <p>MongoDB's aggregate is a powerful framework that allows for advanced data processing and aggregation operations within the MongoDB database. It provides a way to perform complex data manipulations, transformations, and computations on collections of documents.

                            The aggregation framework works by processing documents through a pipeline of stages. Each stage performs a specific operation on the input documents and passes the results to the next stage. The pipeline stages can include operations like filtering, grouping, sorting, projecting fields, performing mathematical calculations, and executing custom JavaScript code.

                            The pipeline stages are flexible and can be combined in various ways to achieve specific data aggregation and transformation requirements. Aggregation pipelines can handle large volumes of data efficiently and are particularly useful for generating reports, performing analytics, and extracting valuable insights from MongoDB collections.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;