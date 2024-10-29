

const VideoServices = () => {
  

  return (
    <div className="services-container">
      {/* 2D Animation Story Videos Section */}
      <div className="service-card">
        <div className="service-image">
          <img src="/service/animation-stories.png" alt="3D Animation" />
        </div>
        <div className="service-content">
          <h3 className="service-title">2D ANIMATION STORY VIDEOS</h3>
          <p className="service-description">
            One can create various types of 2D animation story videos for any social media platform that are both engaging and monetizable. These include:
          </p>
          <ul className="service-list">
            <li>Stories on History</li>
            <li>Animated short films on any topic of your choice </li>
            <li>Magical & Fantasy stories </li>
            <li>Superhero stories</li>
            <li>Bedtime Stories</li>
            <li>Detective Stories </li>
            <li>Horror Stories</li>
            <li> Mythological Stories</li>
            <li>Motivational Stories</li>
          </ul>
        </div>
      </div>

      {/* 3D Rhymes for Kids Section */}
      <div className="service-card">
      
        <div className="service-content">
          <h3 className="service-title blue">3D RHYMES FOR KIDS</h3>
          <p className="service-description">
            With our expertise in 3D rhymes animation for kids, we’ll help you create memorable content that not only entertains but also drives learning, allowing you to capitalize on the growing demand for engaging and educational children’s media.
          </p>
          <p className="service-description">
            Connect your rhymes’ educational content by integrating catchy rhymes with stunning visuals, keeping your audience engaged on platforms like YouTube, educational apps, or social media.
          </p>
        </div>
        <div className="service-image">
          <img src="/service/2D-rhymes-for-kids.png" alt="3D Rhymes" />
        </div>
      </div>

      {/* 3D Product Videos Section */}
      <div className="service-card">
        <div className="service-image">
          <img src="/service/product-demo.png" alt="3D Product" />
        </div>
        <div className="service-content">
          <h3 className="service-title pink">3D PRODUCT VIDEOS</h3>
          <p className="service-description">
            We will create the product in 3D and use it however required as per the requirement. Product demonstration videos showcase how a product works, highlighting its features and benefits.
          </p>
          <p className="service-description">
            These videos can significantly boost sales, build trust, and create brand awareness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoServices;
