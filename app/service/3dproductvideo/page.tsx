import VideoSection from "../../components/services/services";
import Banner from "../../components/services/banner";
import VideoServices from "../../components/services/VideoService"
import "../../scss/home.scss";
import "../../scss/service.scss";
import Benefits from "@/app/components/services/benefits";
import { title } from "process";

const banners = {
    title: '3D Product Videos',
    titleDescription: 'Realistic | High Impact | Boost Sales',
    youtubeLinks: 'https://www.youtube.com/embed/Yp1yHJTSXDA?si=y_sUj3RuFcA-jbYY&amp;controls=0',
    longDescriptions: "By leveraging our 3D product video services, manufacturing & advertising companies can present their products in stunning, lifelike detail, providing customers with a clear, interactive view of complex features and functionality—ultimately boosting sales, enhancing brand trust, and differentiating them in a competitive market."
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
    title: '3D PRODUCT VIDEOS',
    data: videosSectiondata,
    descriptions: "Explore our 3D Product Videos Showcase to see how we bring products to life with stunning detail and creativity!",
    bottom: {
        content1: 'Explore more 3D product videos',
        content2: 'Click on the above button. Fill your requirements and explore more such 3D animations right for your business growth',
        content3: ''
    }
}

const videoService = {
    topbanner: {
        content1: 'USE CASE OF',
        content2: '3D PRODUCT ANIMATION',
        content3: 'FOR BUSINESSES?',
        content4: 'MARKETING & ADVERTISING | E-COMMERCE| PRODUCT DEMONSTRATIONS | TRADE SHOWS & EXHIBITIONS | TRAINING & TUTORIALS | INVESTOR PRESENTATIONS'
    },
    servicecontent: {
    },
    serviceCard: [{
        image: '/assets/service/marketing-advertising.png',
        heading: 'Marketing & Advertising',
        headingBackgroundColor: 'rgb(254,88,92)',
        serviceDescription:
            [
                "3D product animations are highly effective in commercials, online ads, and social media campaigns.",
                "They allow businesses to highlight key product features, show the product in action, and create visually appealing content that grabs attention, leading to increased interest and customer engagement."
            ]
        ,
        list: [],
        color: ''

    },
    {
        image: '/assets/service/Ecommerce.png',
        heading: 'E-commerce',
        headingBackgroundColor: 'rgb(1,166,255)',
        serviceDescription: [
            "In e-commerce, 3D animations provide customers with a 360-degree view of products, making it easier for them to explore every detail.",
            "This enhanced visual experience leads to higher engagement, reducing uncertainty and increasing the likelihood of conversions."
        ],
        color: 'blue',
        list: [],
    },
    {
        image: '/assets/service/product-demo.png',
        heading: 'Product Demonstrations',
        headingBackgroundColor: 'rgb(255,155,195)',
        color: '',
        list: [],
        serviceDescription: [
            "For products with complex features or functionality, 3D animations offer clear, detailed demonstrations. ",
            "These animations break down how a product works, making it easier for potential customers to understand its benefits and usage, reducing the need for lengthy explanations."
        ],
    },
    {
        image: '/assets/service/trade-show-and-exhibitions.png',
        heading: 'Trade Shows & Exhibitions',
        headingBackgroundColor: 'rgb(122,144,255)',
        color: 'blue',
        list: [],
        serviceDescription: [
        "At trade shows and exhibitions, 3D animations serve as attention-grabbing tools. "    ,
        "Eye-catching visuals, combined with dynamic product presentations, help companies stand out in crowded spaces and effectively inform visitors about the product's unique selling points."
        ],
    },
    {
        image: '/assets/service/training-Tutorial.png',
        heading: 'Training & Tutorials',
        headingBackgroundColor: 'rgb(51,222,242 )',
        color: '',
        list: [],
        serviceDescription: [
            "3D animations are ideal for creating instructional videos, offering step-by-step guides on product usage, assembly, or maintenance."    ,
            "These clear, visually driven tutorials improve the user experience by making complex tasks simpler to follow and execute."
        ],
    },
    {
        image: '/assets/service/investor-presentation.png',
        heading: 'Investor Presentations',
        headingBackgroundColor: 'rgb(254,143,0)',
        color: 'blue',
        list: [],
        serviceDescription: [
            "In presentations to potential investors, 3D product animations bring a product to life in a visually compelling manner. ",
            "They effectively communicate the product’s value, design, and functionality, helping investors grasp its potential impact in the market."
        ],
    }

    ]


}

const benefits =
{
    content1: 'Here are some statistics that demonstrate the',
    content2: 'Benefits of 3D PRODUCT Animation videos for businesses:',
    subcontent: [
        {
            title: 'INCREASED ENGAGEMENT:',
            description: ['Products with 3D animations receive up to 400% more engagement compared to static images.']
        },
        {
            title: 'Higher Conversion Rates:',
            description: [
                "Including 3D animations can boost conversion rates by 20% or more, as customers feel more informed and confident in their purchasing decisions."
            ]
        },
        {
            title: 'Improved Retention:',
            description: [
                "Viewers retain 95% of a message when they watch it in a video format, compared to 10% when reading text."
            ]
        },
        {
            title: 'Enhanced Customer Experience:',
            description:
                [
                    "83% of consumers say they prefer learning about products through video rather than reading about them."
                ]
        },
        {
            title: 'Greater Interest:',
            description:
                [
                 "71% of consumers say they would share a 3D product video with others, increasing brand exposure and reach."
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