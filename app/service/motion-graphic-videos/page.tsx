import VideoSection from "../../components/services/services";
import Banner from "../../components/services/banner";
import VideoServices from "../../components/services/VideoService"
import "../../scss/home.scss";
import "../../scss/service.scss";
import Benefits from "@/app/components/services/benefits";
import { title } from "process";

const banners = {
    title: 'Motion Graphic Videos',
    titleDescription: 'Creative | Dynamic | Informative',
    youtubeLinks: 'https://www.youtube.com/embed/Yp1yHJTSXDA?si=y_sUj3RuFcA-jbYY&amp;controls=0',
    longDescriptions: "Customers using our motion graphic video services will receive visually captivating animations that effectively communicate their brand message. These engaging videos simplify complex concepts through creative storytelling, enhance viewer engagement, and strengthen brand identity, ultimately driving conversions and improving marketing efforts."
}
const videosSectiondata = [
    {
        imageUrl: "/assets/home/services/01.png",
        title: "2d animation",
    },
    {
        imageUrl: "/assets/home/services/02.png",
        title: "3d animation",
    },
    {
        imageUrl: "/assets/home/services/03.png",
        title: "3d product video",
    },
    {
        imageUrl: "/assets/home/services/04.png",
        title: "explainer video",
    },
    {
        imageUrl: "/assets/home/services/05.png",
        title: "motion graphic videos",
    },
    {
        imageUrl: "/assets/home/services/06.png",
        title: "whiteboard animation",
    },
    {
        imageUrl: "/assets/home/services/07.png",
        title: "business promotional videos",
    },
    {
        imageUrl: "/assets/home/services/06.png",
        title: "e-learning videos",
    },
    {
        imageUrl: "/assets/home/services/06.png",
        title: "design services",
    },
];

const videosSection = {
    title: 'MOTION GRAPHIC VIDEOS',
    data: videosSectiondata,
    descriptions: "Explore our Motion Graphic videos showcase to see how we bring ideas to life with dynamic visuals and engaging animations!",
    bottom: {
        content1: 'Explore more Motion Graphic videos',
        content2: 'Click on the above button. Fill your requirements and explore more such Motion Graphic video animations right for your business growth.',
        content3: ''
    }
}

const videoService = {
    topbanner: {
        content1: 'USE CASE OF',
        content2: 'MOTION GRAPHIC VIDEOS',
        content3: 'FOR BUSINESSES?',
        content4: 'Brand Awareness | Product Demonstrations | Marketing Campaigns | Tutorials and Training | Event Promotions | Corporate Presentations | App or Software Introductions'
    },
    servicecontent: {
    },
    serviceCard: [{
        image: '/assets/service/Brand-Awareness.png',
        heading: 'Brand Awareness',
        headingBackgroundColor: 'rgb(254,88,92)',
        serviceDescription:
            [
                "Motion graphics can significantly enhance brand identity. By incorporating animated visual styles into promotional videos, companies can create memorable and recognizable branding.",
                "This form of visual storytelling captures attention and reinforces brand messaging, helping audiences associate specific visuals with the brand.",
                "For instance, a well-crafted logo animation can create a lasting impression and become synonymous with the company’s values."
            ]
        ,
        list: [],
        color: ''

    },
    {
        image: '/assets/service/ProductDemonstration.png',
        heading: 'Product Demonstrations',
        headingBackgroundColor: 'rgb(1,166,255)',
        serviceDescription: [
            "Motion graphics are particularly effective for showcasing product features and benefits in an engaging way.",
            "Instead of static images or lengthy descriptions, animated videos can illustrate how a product works, highlight its unique features, and demonstrate its benefits.",
            "This helps potential customers visualize the product in use, making it easier for them to understand its value and increasing the likelihood of conversion."
        ],
        color: 'blue',
        list: [],
    },
    {
        image: '/assets/service/Marketing-Campaigns.png',
        heading: 'Marketing Campaigns',
        headingBackgroundColor: 'rgb(255,155,195)',
        color: '',
        list: [],
        serviceDescription: [
            "In today's digital landscape, capturing attention quickly is crucial. ",
            "Motion graphics can effectively convey brand messages through eye-catching animations that stand out on social media, websites, and advertisements. ",
            "Whether it's a quick promotional video or a longer narrative, these graphics can simplify complex ideas into digestible content that resonates with audiences, driving engagement and brand loyalty."
        ],
    },
    {
        image: '/assets/service/Tutorials-and-Trainings.png',
        heading: 'Tutorials and Training',
        headingBackgroundColor: 'rgb(122,144,255)',
        color: 'blue',
        list: [],
        serviceDescription: [
            "Motion graphics are ideal for creating tutorials and training materials.",
            "By breaking down complex processes or software functionalities into easy-to-follow steps, companies can enhance the learning experience.",
            "Animated elements make the content more engaging and can help retain viewer attention better than traditional training materials, leading to improved comprehension and retention of information."
        ],
    },
    {
        image: '/assets/service/Event-Promotion.png',
        heading: 'Event Promotions',
        headingBackgroundColor: 'rgb(51,222,242 )',
        color: '',
        list: [],
        serviceDescription: [
            "When promoting events, captivating visuals are essential for generating excitement. ",
            "Motion graphics can create buzz by outlining key details—such as dates, locations, and highlights—through dynamic animations. ",
            "This not only informs potential attendees but also excites them about the event, increasing the likelihood of attendance. Effective motion graphics can make an event feel more inviting and vibrant."
        ],
    },
    {
        image: '/assets/service/corporate-presentation.png',
        heading: 'Corporate Presentations',
        headingBackgroundColor: 'rgb(254,143,0)',
        color: 'blue',
        list: [],
        serviceDescription: [
            "In corporate settings, adding motion graphics to presentations can transform dull slides into dynamic visual experiences.",
            "This keeps audiences engaged during internal meetings or client pitches by providing visual aids that support the narrative. ",
            "Incorporating animations can help illustrate key points, making it easier for the audience to follow along and retain informati-on."
        ],
    },
    {
        image: '/assets/service/Event-Promotion.png',
        heading: 'App or Software Introductions',
        headingBackgroundColor: 'rgb(254,143,0)',
        color: '',
        list: [],
        serviceDescription: [
            "For tech companies, motion graphics are a powerful tool for introducing apps or software. ",
            "By demonstrating user interfaces and functionalities through visually appealing animations, companies can attract users’ attention and interest. ",
            "This approach not only highlights how the product works but also showcases its user-friendliness, ultimately encouraging downloads or purchases."
        ],
    }

    ]


}

const benefits =
{
    content1: 'Here are some statistics that demonstrate the',
    content2: 'Benefits of MOTION GRAPHIC Animation for businesses:',
    subcontent: [
        {
            title: 'Increased Retention:',
            description: ['Viewers retain 95% of a message when they watch it in a video, compared to 10% when reading text.']
        },
        {
            title: 'Higher Engagement:',
            description: [
                "Video content is shared 1,200% more times than text and images combined."
            ]
        },
        {
            title: 'Improved Conversions:',
            description: [
                "Including a video on a landing page can increase conversion rates by up to 80% ."
            ]
        },
        {
            title: 'Mobile Viewing:',
            description:
                [
                    "Over 50% of all video views come from mobile devices, making it crucial for reaching on-the-go audiences."
                ]
        },
        {
            title: 'Boost in Sales:',
            description:
                [
                    "74% of users who watched an explainer video about a product subsequently purchased it."
                ]
        }

    ]
}
const Animation3d = () => {
    return (
        <>
            <Banner data={banners} />
            <VideoSection contents={videosSection} />
            <VideoServices contents={videoService} />
            <Benefits contents={benefits} />
        </>
    )

}

export default Animation3d;