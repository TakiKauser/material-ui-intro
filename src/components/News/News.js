import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

const News = (props) => {
    const {title, description, urlToImage} = props.article;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar>
                        kb
                    </Avatar>
                }
                title={title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={urlToImage}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description.slice(0, 100)}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default News;