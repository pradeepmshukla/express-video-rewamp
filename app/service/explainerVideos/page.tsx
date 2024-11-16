import VideoSection from "../../components/services/services";
import Banner from "../../components/services/banner";
import VideoServices from "../../components/services/VideoService"
import "../../scss/home.scss";
import "../../scss/service.scss";
import Benefits from "@/app/components/services/benefits";
import { title } from "process";

const banners = {
    title: 'Explainer Videos',
    titleDescription: 'Clear | Concise | Compelling',
    youtubeLinks: 'https://www.youtube.com/embed/Yp1yHJTSXDA?si=y_sUj3RuFcA-jbYY&amp;controls=0',
    longDescriptions: "With our Explainer Video Services, customers get a fun and engaging way to share their message. We simplify complex ideas and create eye-catching content that enhances brand storytelling. Our tailored videos not only grab attention but also help boost engagement and conversion rates, leaving a lasting impression on their audience."
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
        content1: 'Explore more Explainer vedios',
        content2: 'Click on the above button. Fill your requirements and explore more such Explainer video animations right for your business growth.',
        content3: ''
    }
}

const videoService = {
    topbanner: {
        content1: 'USE CASE OF',
        content2: 'EXPLAINER VIDEOS',
        content3: 'FOR BUSINESSES?',
        content4: 'PRODUCT DEMONSTRATIONS | ONBOARDING | BRAND STORYTELLING | MARKETING & PROMOTIONS | SERVICE EXPLANATION | EVENT PROMOTION'
    },
    servicecontent: {
    },
    serviceCard: [{
        image: '/assets/service/product-demonstration.png',
        heading: 'Product Demonstration',
        headingBackgroundColor: 'rgb(254,88,92)',
        serviceDescription:
            [
                "Explainer videos can effectively showcase how a product works, emphasizing its features and benefits.",
                "By visually demonstrating the product in action, companies can engage potential customers, helping them understand its practical applications and advantages.",
                "This can significantly enhance purchase confidence, as viewers can see the product's value firsthand."
            ]
        ,
        list: [],
        color: ''

    },
    {
        image: '/assets/service/Onboarding.png',
        heading: 'Onboarding',
        headingBackgroundColor: 'rgb(1,166,255)',
        serviceDescription: [
            "For platforms or services, explainer videos serve as an effective onboarding tool for new users. ",
            "They can guide users through the key functionalities of the platform, making it easier for them to navigate and utilize the service efficiently. ",
            "This streamlined introduction reduces the learning curve, ensuring that users feel comfortable and confident as they begin using the platform."
        ],
        color: 'blue',
        list: [],
    },
    {
        image: '/assets/service/Brand-storytelling.png',
        heading: 'Brand Storytelling',
        headingBackgroundColor: 'rgb(255,155,195)',
        color: '',
        list: [],
        serviceDescription: [
            "Explainer videos can communicate a company’s mission, values, and history in an engaging manner.",
            "By sharing the brand's story, companies can create an emotional connection with their audience, fostering loyalty and trust.",
            "This approach humanizes the brand and allows potential customers to relate to the company's vision and ethos."
        ],
    },
    {
        image: '/assets/service/marketing-and-promotion.png',
        heading: 'Marketing & Promotion',
        headingBackgroundColor: 'rgb(122,144,255)',
        color: 'blue',
        list: [],
        serviceDescription: [
            "Explainer videos are an excellent tool for marketing and promotional efforts.",
            "They can drive interest in new products, services, or campaigns by using captivating visuals and storytelling techniques.",
            "This format not only captures attention but also makes the messaging memorable, increasing the likelihood of conversions and customer engagement."
        ],
    },
    {
        image: '/assets/service/service-explaination.png',
        heading: 'Service Explanation',
        headingBackgroundColor: 'rgb(51,222,242 )',
        color: '',
        list: [],
        serviceDescription: [
            "Explainer videos can generate excitement and convey essential information about upcoming events, webinars, or conferences.",

            "By highlighting key speakers, topics, and benefits of attending, these videos can boost attendance and engagement. ",

            "They create anticipation and provide a visual representation of what attendees can expect."
        ],
    },
    {
        image: '/assets/service/EventPromotion.png',
        heading: 'Event Promotion',
        headingBackgroundColor: 'rgb(254,143,0)',
        color: 'blue',
        list: [],
        serviceDescription: [
            "Explainer videos can generate excitement and convey essential information about upcoming events, webinars, or conferences.",
            "By highlighting key speakers, topics, and benefits of attending, these videos can boost attendance and engagement.",
            "They create anticipation and provide a visual representation of what attendees can expect."
        ],
    }

    ]


}

const benefits =
{
    content1: 'Here are some statistics that demonstrate the',
    content2: 'Benefits of EXPLAINER VIDEO Animation for businesses:',
    subcontent: [
        {
            title: 'Retention Rate:',
            description: ['Viewers retain 95% of a message when they watch it in a video, compared to 10% when reading text.']
        },
        {
            title: 'Engagement:',
            description: [
                "80% of consumers remember a video they watched in the past month."
            ]
        },
        {
            title: 'Conversion Rates:',
            description: [
                "Including a video on a landing page can increase conversions by up to 80%."
            ]
        },
        {
            title: 'User Preference:',
            description:
                [
                    "72% of customers prefer learning about a product or service through video."
                ]
        },
        {
            title: 'SEO Benefits:',
            description:
                [
                    "Websites with video content are 53 times more likely to rank on the first page of Google search results."
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