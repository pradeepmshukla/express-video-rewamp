import VideoSection from "../../components/services/services";
import Banner from "../../components/services/banner";
import VideoServices from "../../components/services/VideoService"
import "../../scss/home.scss";
import "../../scss/service.scss";
import Benefits from "@/app/components/services/benefits";
import { title } from "process";

const banners = {
    title: '3D Animation Services',
    titleDescription: 'Immersive | High Impact | Realistic',
    youtubeLinks: 'https://www.youtube.com/embed/Yp1yHJTSXDA?si=y_sUj3RuFcA-jbYY&amp;controls=0',
    longDescriptions: "Boost your business with our 3D animation services that enhance storytelling and engage audiences. Our expertly crafted animations provide stunning realism and dynamic visuals, making complex ideas easier to understand. With limitless creative possibilities, we bring your concepts to life in ways that captivate viewers and elevate your brand's presence in a competitive market."
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
        imageUrl: "/home/animation-img/design.jpg",
        title: "design services",
    },
];

const videosSection = {
    title: '3D ANIMATION VIDEOS',
    data: videosSectiondata,
    descriptions: "Explore our showcase of 3D animation videos to see the creativity and quality we bring to every project. Check them out below!",
    bottom: null
}

const videoService = {
    topbanner: {
        content1: 'USE CASE OF',
        content2: '3D ANIMATION',
        content3: 'FOR BUSINESSES?',
        content4: '3D ANIMATION STORIES | 3D RHYMES FOR KIDS | 3D PRODUCT | 3D MEDICAL | 3D INDUSTRIAL | 3D EDUCATIONAL'
    },
    servicecontent: {
    },
    serviceCard: [{
        image: '/assets/service/animation-stories.png',
        heading: '3D ANIMATION STORY VIDEOS',
        headingBackgroundColor: 'rgb(254,88,92)',
        serviceDescription:
            [
                'One can create various types of 3D animation story videos for any social media platform that are both engaging and monetizable. These include:'
            ]
        ,
        list: [
            "Stories on History",
            "Animated short films on any topic of your choice",
            "Magical & Fantasy stories ",
            "Superhero stories",
            "Bedtime Stories",
            "Detective Stories",
            "Horror Stories",
            "Mythological Stories",
            "Motivational Stories",
        ],
        color: ''

    },
    {
        image: '/assets/service/2D-rhymes-for-kids.png',
        heading: '3D RHYMES FOR KIDS',
        headingBackgroundColor: 'rgb(1,166,255)',
        serviceDescription: [
            "With our expertise in 3D rhymes animation for kids, we’ll help you create memorable content that not only entertains but also drives revenue, allowing you to capitalize on the growing demand for engaging and educational children's media.",
            "Create your children's educational content by integrating catchy rhymes with stunning visuals, you can engage young audiences and keep them coming back for more.",
            "Monetize your videos through platforms like YouTube, educational apps, or social media by attracting sponsorships, ad revenue, and subscriptions."
        ],
        color: 'blue',
        list: [],
    },
    {
        image: '/assets/service/product-demo.png',
        heading: '3D PRODUCT VIDEOS',
        headingBackgroundColor: 'rgb(255,155,195)',
        color: '',
        list: [],
        serviceDescription: [
            "We will create the product in 3D and use it however we require as per the requirement.",
            "Product demonstration videos showcase how a product works, highlighting its features and benefits in action. These videos help potential customers understand the product's value, making it easier for them to make informed purchase decisions.",
            "Product launch videos create excitement and anticipation for a new product by showcasing its unique features and benefits. They effectively communicate the product’s value, generate buzz, and engage both existing and potential customers.",
            "These videos can significantly boost sales, build trust, and create brand recognition."

        ],
    },
    {
        image: '/assets/service/marketing-promo-video.png',
        heading: '3D MEDICAL VIDEOS',
        headingBackgroundColor: 'rgb(122,144,255)',
        color: 'blue',
        list: [],
        serviceDescription: [
            "A 3D medical video is an animated visual representation that explains complex medical concepts, procedures, or anatomy using three-dimensional graphics.",
            "Creating these videos in 3D is beneficial because it offers realistic and detailed views of intricate biological structures, making it easier for healthcare professionals and patients to grasp complex information.",
            "This enhanced visualization improves patient education and engagement while also serving as a valuable training tool for medical personnel through immersive simulations."
        ],
    },
    {
        image: '/assets/service/how-to-video.png',
        heading: '3D INDUSTRIAL VIDEOS',
        headingBackgroundColor: 'rgb(51,222,242 )',
        color: '',
        list: [],
        serviceDescription: [
            "3D industrial videos are animated visualizations that showcase industrial processes, machinery, and products in three dimensions.",
            "Creating these videos in 3D is advantageous because they provide a realistic and detailed perspective, making complex operations easier to understand.",
            "This immersive format enhances training, marketing, and sales presentations, effectively conveying technical information while engaging viewers and helping companies differentiate themselves in competitive markets."
        ],
    },
    {
        image: '/assets/service/training-and-education.png',
        heading: '3D EDUCATIONAL VIDEO',
        headingBackgroundColor: 'rgb(254,143,0)',
        color: 'blue',
        list: [],
        serviceDescription: [
            "3D educational and awareness videos present complex concepts in an engaging and visually appealing way.",
            "By incorporating realistic graphics and dynamic visuals, these videos enhance understanding and retention, making learning more interactive and enjoyable.",
            "Creating content in 3D simplifies difficult topics, captivates diverse audiences, and promotes deeper learning, making it an effective tool for educators, businesses, and organizations to raise awareness on important issues."
        ],
    }

    ]


}

const benefits =
{
    content1: 'Here are some statistics that demonstrate the',
    content2: 'BENEFITS OF 3D ANIMATION VIDEOS FOR BUSINESSES:',
    subcontent: [
        {
            title: 'ENHANCED REALISM:',
            description: ['3D animations offer lifelike visuals, providing a more immersive and realistic experience.']
        },
        {
            title: 'INCREASED ENGAGEMENT & BOOST YOUR BRAND:',
            description: [
                "91% of consumers prefer visual content over text, and 3D animations are a highly engaging form of visual content.",
                "With dynamic perspectives and depth, the visual impact of 3D often leads to higher engagement, helping your story stand out and hold viewer interest longer."
            ]
        },
        {
            title: 'LEARNING & RETENTION:',
            description: [
                "Studies show that learners retain 65% of information when it is presented in 3D compared to 10% retention when information is presented in 2D formats."
            ]
        },
        {
            title: 'SOCIAL MEDIA ENGAGEMENT:',
            description:
                [
                    "3D animations can increase social media shares by 1200% when used in posts, making them a powerful tool for reaching wider audiences."

                ]
        },
        {
            title: 'BRAND ELEVATION:',
            description:
                [
                    "3D animation videos often feel more premium and innovative, elevating brand perception and setting you apart from competitors."

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
            <Benefits contents={benefits } />
        </>
    )

}

export default Animation3d;