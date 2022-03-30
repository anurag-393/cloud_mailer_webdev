import { Container, Grid } from '@mantine/core';
import React from 'react';

export const Plans: React.FC = () => {
    return (
        <Container
            fluid
            px={0}
            sx={{
                backgroundImage: 'linear-gradient(to bottom, pink, violet)',
            }}
        >

            <Grid grow gutter={0}>
                {[1, 2, 3, 4].map((number) => (
                    <Grid.Col px={0} md={6} lg={3}>{number}</Grid.Col>
                ))}
            </Grid>

        </Container>
    );
}
