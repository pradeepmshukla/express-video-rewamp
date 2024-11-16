import VideoSection from "../../components/services/services";
import Banner from "../../components/services/banner";
import VideoServices from "../../components/services/VideoService"
import "../../scss/home.scss";
import "../../scss/service.scss";

const banners = {
  title: '2D Animation Services',
  titleDescription: 'Cost Effective | Visual Appealing | Engaging',
  youtubeLinks: 'https://www.youtube.com/embed/Yp1yHJTSXDA?si=y_sUj3RuFcA-jbYY&amp;controls=0',
  longDescriptions: 'Boost your business with our 2D animation services! It’s cost-effective, easy to update, and visually appealing. 2D animation helps explain your ideas clearly, engages your audience, and adds a unique, creative touch to your brand. Let’s make your message stand out and attract more customers!'
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
  title: 'Animation Video Services',
  data: videosSectiondata,
  descriptions: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
  bottom: {
    content1: 'Explore more 2D animation videos',
    content2: 'Click on the above button',
    content3: 'Fill your requirements and explor more such 2D animations right for your business growth'
  }

}

const videoService = {
  topbanner: {
    content1: 'USE CASE OF',
    content2: '2D ANIMATION',
    content3: 'FOR BUSINESSES?',
    content4: '2D ANIMATION STORIES | 2D RHYMES FOR KIDS | 2D VIDEOS FOR YOUTUBE CHANNELS | BUSINESS VIDEOS'
  },
  servicecontent: {
  },
  serviceCard: [{
    image: '/assets/service/animation-stories.png',
    heading: '2D ANIMATION STORY VIDEOS',
    headingBackgroundColor:'rgb(254,88,92)',
    serviceDescription:
      [
        'One can create various types of 2D animation story videos for any social media platform that are both engaging and monetizable. These include:'
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
    heading: '2D RHYMES FOR KIDS',
    headingBackgroundColor:'rgb(1,166,255)',
    serviceDescription: ['One can create various types of 2D animation story videos for any social media platform that are both engaging and monetizable. These include:'
    ],
    color: 'blue',
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
  },
  {
    image: '/assets/service/product-demo.png',
    heading: 'PRODUCT DEMO & LAUNCH',
    headingBackgroundColor:'rgb(255,155,195)',
    color: '',
    list: [],
    serviceDescription: [
      "These video will be created by motion graphic technique. We will not create 3d  products here. We will only use product images to create the video.",
      "Product demonstration videos showcase how a product works, highlighting its features and benefits in action. These videos help potential customers understand the product's value, making it easier for them to make informed purchase decisions.",
      "Product launch videos create excitement and anticipation for a new product by showcasing its unique features and benefits. They effectively communicate the product’s value, generate buzz, and engage both existing and potential customers.",
      "These videos can significantly boost sales, build trust, and create brand loyalty."

    ],
  },
  {
    image: '/assets/service/marketing-promo-video.png',
    heading: 'MARKETING & PROMO VIDEOS',
    headingBackgroundColor:'rgb(122,144,255)',
    color: 'blue',
    list: [],
    serviceDescription: [
      "Marketing and promotion videos are designed to attract and engage audiences by showcasing a brand, product, or service in a compelling way.",
      "These videos can drive interest in new offerings and campaigns through captivating visuals, all aimed at increasing awareness and driving sales.",
      "Short, eye-catching videos can drive engagement on any social media platforms like (YouTube, Facebook, Instagram, TikTok, LinkedIn, etc.)"

    ],
  },
  {
    image: '/assets/service/how-to-video.png',
    heading: 'HOW TO VIDEOS',
    headingBackgroundColor:'rgb(51,222,242 )',
    color: '',
    list: [],
    serviceDescription: [
      "How-to videos are an invaluable tool for businesses, helping customers understand how to use products effectively and troubleshoot common issues, thereby reducing the need for customer support.",
      "These videos build trust and credibility by showcasing your expertise while also improving your SEO and online presence by attracting more organic traffic.",
      "By providing clear, step-by-step guidance, how-to videos enhance customer satisfaction, boost sales by helping potential customers make informed decisions, and increase engagement with direct calls to action."
    ],
  },
  {
    image: '/assets/service/training-and-education.png',
    heading: 'TRAINING & EDUCATION VIDEOS',
    headingBackgroundColor:'rgb(254,143,0)',
    color: 'blue',
    list: [],
    serviceDescription: [
      "Training and education videos provide valuable instructional content that helps employees and customers learn new skills or understand complex concepts.",
      "These videos can simplify training processes, improve knowledge retention, and ensure consistent messaging across teams.",
      "By using engaging visuals and clear explanations, they enhance the learning experience and empower viewers to apply what they've learned effectively.",

    ],
  }

  ]


}
const Animation2d = () => {
  return (
    <>
      <Banner data={banners} />
      <VideoSection contents={videosSection} />
      <VideoServices contents={videoService} />
    </>
  )

}

export default Animation2d;