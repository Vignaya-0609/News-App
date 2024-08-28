import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Category = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${REACT_APP_API_KEY}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setArticles(data.articles || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false);
            });
    }, [category,REACT_APP_API_KEY]);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-5">
                {category.charAt(0).toUpperCase() + category.slice(1)} <span className="badge bg-dark">News</span>
            </h2>
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <Row className="g-4">
                    {articles.map((news, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <NewsItem 
                                title={news.title || "No Title Available"}
                                date={news.publishedAt || "No Date Available"}
                                src={news.author || "Unknown"}
                                url={news.url}
                            />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default Category;
