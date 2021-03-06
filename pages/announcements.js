import React from 'react'
import MainBanner from '@/components/eLearningSchool/MainBanner'
import Partner from '@/components/eLearningSchool/Partner'
import Features from '@/components/eLearningSchool/Features'
import AboutUs from '@/components/eLearningSchool/AboutUs'
import PopularCourses from '@/components/eLearningSchool/PopularCourses'
import FeedbackSliderWithFunFacts from '@/components/eLearningSchool/FeedbackSliderWithFunFacts'
import GetInstantCourses from '@/components/eLearningSchool/GetInstantCourses'
import LatestNews from '@/components/Common/LatestNews'
import ViewAllCourses from '@/components/eLearningSchool/ViewAllCourses'
import AffordableCertification from '@/components/eLearningSchool/AffordableCertification'
import axios from 'axios'
import baseUrl from '@/utils/baseUrl'

const Index = ({ courses }) => {
    // console.log(courses)
    return (
        <React.Fragment>
            <LatestNews />
        </React.Fragment>
    )
}

Index.getInitialProps = async () => {
    const url = `${baseUrl}/api/v1/courses/homepage-courses`
    const response = await axios.get(url)
    // console.log(response)
    return response.data
}

export default Index