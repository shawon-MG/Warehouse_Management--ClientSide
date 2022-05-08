import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='mt-5 w-75 mx-auto'>

            <div className='mb-5 shadow-lg'>
                <h2 className='bg-secondary p-2 text-white'>1. What are the differences between JavaScript and NodeJs ? </h2>
                <Table bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Javascript</th>
                            <th>NodeJs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                            <td>NodeJS is a Javascript runtime environment.</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Javascript can only be run in the browsers.</td>
                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>It is basically used on the client-side.</td>
                            <td>It is mostly used on the server-side.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                            <td>Nodejs does not have capability to add HTML tags.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>
                            <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Javascript is used in frontend development. </td>
                            <td>Nodejs is used in server-side development.</td>
                        </tr>
                    </tbody>
                </Table>

            </div>

            <div className='mb-5 shadow-lg'>
                <h2 className='bg-secondary p-2 text-white'>2. When should you use Nodejs and when should you use MongoDB ? </h2>
                <Card>
                    <Card.Body>MongoDB and NodeJS are two different technologies. MongoDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias. Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too. MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc. NodeJS's responsibilty is especially to execute your application.</Card.Body>
                </Card>
            </div>

            <div className='mb-5 shadow-lg'>
                <h2 className='bg-secondary p-2 text-white'>3. What are the differences between SQL and NoSQL databases ? </h2>
                <Table bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>These databases have fixed or static or predefined schema.</td>
                            <td>They have dynamic schema.</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>These databases are not suited for hierarchical data storage.</td>
                            <td>These databases are best suited for hierarchical data storage.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>These databases are best suited for complex queries.</td>
                            <td>These databases are not so good for complex queries.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Vertically Scalable.</td>
                            <td>Horizontally scalable.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Follows ACID property.</td>
                            <td>Follows CAP(consistency, availability, partition tolerance).</td>
                        </tr>

                    </tbody>
                </Table>

            </div>

            <div className='mb-5 shadow-lg'>
                <h2 className='bg-secondary p-2 text-white'>4. What is the purpose of jwt and how does it work ? </h2>
                <Card>
                    <Card.Body>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. In short, JWTs are used as a secure way to authenticate users and share information. <br /> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default Blogs;