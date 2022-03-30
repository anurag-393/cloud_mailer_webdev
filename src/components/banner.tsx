import { Avatar, Container, Grid, Text, Title } from '@mantine/core';
import React from 'react';
import background from '../assets/images/background.png';

export const Banner: React.FC = () => {
    return (
        <Container
            fluid
            px={0}
            sx={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
            }}
        >

            <Grid>
                <Grid.Col sm={6} xs={12} p='md'>
                    <Title style={{ color: 'white' }} order={1}>Send bulk mailes in a click</Title>
                    <Text color='white'>
                        Why waste time sending bulk mails manually, when
                        you can use cloudlymail to send mails with just a click
                    </Text>
                </Grid.Col>
                <Grid.Col sm={6} xs={12}>
                    <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxelgwdtv1lksZqgNreiO5StGl5AxFXJobYo1J0dREYXMc72tv-CmQhOlgw_OfTMCOvPM&usqp=CAU'} />
                </Grid.Col>
            </Grid>

        </Container >
    );
}
