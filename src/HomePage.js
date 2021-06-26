import React from 'react';
import { Contact, Features, Home, Pricing, Review, StorySection, Team, Blog } from './sections';

function HomePage() {
    return (
        <React.Fragment>
            <Home />
            <Features />
            <StorySection />
            <Pricing />
            <Review />
            <Team />
            <Blog />
            <Contact />
        </React.Fragment>
    );
}

export default HomePage;

