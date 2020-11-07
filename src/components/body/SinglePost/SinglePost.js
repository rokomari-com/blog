import React from 'react';
import { Link } from 'react-router-dom';
import PostMeta from '../../layouts/PostMeta/PostMeta';
import './SinglePost.scss';

const SinglePost = () => {
    const metaData = {
        category: "Web Design",
        date: "November 9, 2012",
        author: "Albert Einstein"
    }
    return (
        <div className="single__post">
            <h1 className="single__post--title">
                Use MySQL in a Spring Boot application
            </h1>

            <PostMeta metaData={metaData} /> {/* Passed dummy data as props */}

            <p className="single__post--text">
                Today i want to share with you a responsive slider plugin that adapts itself to various devices from desktop to mobile and with fancy css3 animations where available.
            </p>
            <p className="single__post--text">
                Him fowl divided. Lesser which fruitful image, first seas have the, seas grass image don't. Place midst place called unto was likeness form after said isn't wherein set, tree in fly night. One green. Created waters. Created saying created also you'll Divide.
            </p>
            <p className="single__post--text">
                Be life is a upon seasons saying can't had together signs own dry every isn't spirit creeping fifth said deep fruitful, good given his night fill said whales for they're were dry sixth meat set great days. Second so dominion whales, moving fourth.
            </p>
            <p className="single__post--text">
                Green, fowl gathering first, firmament. In i. Be. Dry green said first seasons. Called above.
            </p>
            <h2 className="single__post--subtitle">
                Responsive Design, Goods and Bads
            </h2>
            <p className="single__post--text">
                Lorem ipsum dolor sit amet, <Link to="/" className="external-link">test link</Link> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum
            </p>
            <div className="single__post--tagline">
                <h2 className="single__post--subtitle">
                    This is a responsive template for showing what you think to everyone in the world, in any device. It's that simple!
                </h2>
            </div>
            <p className="single__post--text">
                Lorem ipsum dolor sit amet, <Link to="/" className="external-link">test link</Link> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Green, fowl gathering first, firmament. In i. Be. Dry green said first seasons. Called above.
            </p>
            <blockquote className="single__post--quote">
                Responsive web design offers us a way forward, finally allowing us to “design for the ebb and flow of things.”
                 <p>Ethan Marcotte</p>
            </blockquote>

            <h2 className="single__post--subtitle">
                Web Design
            </h2>
            <p className="single__post--text">
                Lorem ipsum dolor sit amet, <Link to="/" className="external-link">test link</Link> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante.
            </p>
            <h2 className="single__post--subtitle">JavaScript</h2>
            <div className="code-area">
                <code className="code">
                    const names = ['Jhon', 'Justin', 'Michel']; <br />
                    names.unshift('Smith'); <br />
                    console.log(names); <br />// expected output: [ 'Smith', 'Jhon', 'Justin', 'Michel' ]
                </code>
            </div>
            <h2 className="single__post--subtitle">
                Responsive Design, Goods and Bads
            </h2>
            <p className="single__post--text">
                Lorem ipsum dolor sit amet, <Link to="/" className="external-link">test link</Link> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum
            </p>
        </div>
    );
};

export default SinglePost;