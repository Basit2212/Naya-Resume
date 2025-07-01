import React from 'react'
import Layout from '../Layout/Layout'
import CreateResumeSection from './sections/CreateResumeSection'
import About from './About'
import Contact from './Contact'

const Home = () => {
    return (
        <>
            <Layout>
                <div style={{ paddingTop: '70px' }}>
                    <CreateResumeSection />
                    <About />
                    <Contact />
                </div>
            </Layout>


        </>
    )
}

export default Home