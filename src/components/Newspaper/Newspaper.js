import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=97fee09a75c1435e9920e3da04514ada")
            .then(response => response.json())
            .then(jsonData => setArticles(jsonData.articles))
    }, [])
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        articles.map(article => <Grid
                            item xs={2} sm={4} md={4}>
                            <News article={article} />
                        </Grid>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default Newspaper;