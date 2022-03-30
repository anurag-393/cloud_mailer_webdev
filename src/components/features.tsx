import { Container } from '@mantine/core';
import React from 'react';

export type Section = {
    title: string;
    image: string;
    children: string;
}

export const FeatureSection: React.FC<Section> = (section) => {
    return (
        <Container>

        </Container>
    );
}

export const Features: React.FC = () => {
    return (
        <>
            <FeatureSection title='a' image='a'>
                A
            </FeatureSection>
        </>
    );
}
