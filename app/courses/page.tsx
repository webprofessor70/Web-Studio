"use client"
import { div } from "framer-motion/client";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";


const courses = () => {

  const [isVisible, setIsVisible] = useState(false);

 const toggleVisibility = () => {
   setIsVisible(!isVisible);
 };

  return (
    <div>

    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       
          <div className="border rounded-lg shadow-md overflow-hidden">
            <img
              src='https://www.syntacticsinc.com/wp-content/uploads/2022/01/FACEBOOK-MARKETERS-AND-MARKETING-ADVERTISERS-1280x720.jpg'
              alt='facebook marketing'
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Facebook Marketing</h2>
              <p className="text-gray-600 mt-2">Master the art of Facebook ads to boost your online sales.</p>
              <Link className="inline-block text-blue-500 font-semibold"  href='#facebook'>
                 View Details
              </Link>
            </div>
          </div>

          <div className="border rounded-lg shadow-md overflow-hidden">
            <img
              src='https://www.ameyo.com/wp-content/uploads/2022/08/16-2-1024x576.png'
              alt='WhatsApp Marketing'
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Whatsapp Marketing</h2>
              <p className="text-gray-600 mt-2">Learn effective strategies to market using WhatsApp.</p>
              <Link className="inline-block text-blue-500 font-semibold"  href='#whatsapp'>
                 View Details
              </Link>
            </div>
          </div>


          <div className="border rounded-lg shadow-md overflow-hidden">
            <img
              src='https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/65f2215bcb94d4592f844920_7%2B%20Best%20Web%20Development%20Frameworks%20to%20Use%20in%202024.webp'
              alt='Web Development'
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Web Development</h2>
              <p className="text-gray-600 mt-2">Become a professional web developer with HTML, CSS, and JavaScript and React js, ts.</p>
              <Link className="inline-block text-blue-500 font-semibold"  href='#webdev'>
                 View Details
              </Link>
            </div>
          </div>


          <div className="border rounded-lg shadow-md overflow-hidden">
            <img
              src='https://media.licdn.com/dms/image/v2/D5612AQGUzgwWKjOpwQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1654245424014?e=2147483647&v=beta&t=UD302auJyPCdf79X-qhhR7Qgbc11LnTARGrFZkXwOnc'
              alt='Web Development'
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Unlimited Online Data</h2>
              <p className="text-gray-600 mt-2">Become a professional web developer with HTML, CSS, and JavaScript and React js, ts.</p>
              <Link className="inline-block text-blue-500 font-semibold"  href='#data'>
                 View Details
              </Link>
            </div>
          </div>
     
      </div>
    </div>

   <div className="md:py-10 py-5 md:px-10 px-5 ">
     
     <div className="facebook text-wrap " id="facebook">

      <div className="flex md:justify-between justify-center md:px-10 md:px-5 px-2">
        <h1 className="text-2xl text-2xl font-semibold">Facebook Marketing course</h1>
        <Link href='https://.wa.me/923040535970' target="_blank" className="p-3 bg-blue-600 rounded-md hover:bg-blue-900 duration-all transition-500 text-white">Join Course</Link>
      </div>
     <img width={500} className="w-[800px] text-center overflow-hidden py-5 md:ml-40" src='https://www.syntacticsinc.com/wp-content/uploads/2022/01/FACEBOOK-MARKETERS-AND-MARKETING-ADVERTISERS-1280x720.jpg' alt="" />
         <div className="content fit-content md:mx-20 flex flex-col gap-3">
            <h1 className="text-3xl py-3 font-semibold">Facebook Marketing course with unlimited facebook data.</h1>
            <p>Are you looking to enhance your marketing skills and generate more revenue online? Our Facebook Marketing Course is the ultimate solution to mastering the art of social media marketing. With 7 days of comprehensive online classes, this course is designed to equip you with all the essential knowledge and tools to succeed in the competitive world of digital marketing.</p>
          
            
            <div className="toggle-content p-4">
      {/* Toggle Button */}
      <button
        onClick={toggleVisibility}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
      >
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {/* Content Section */}
      {isVisible && (
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl">What You Will Learn</h3>
          <p>
            Our course covers a wide range of topics tailored to help you effectively promote your
            products and services on Facebook. Here's a breakdown of what you will learn:
          </p>
          <h5 className="font-semibold">1. Introduction to Facebook Marketing</h5>
          <ul className="ml-5">
            <li>Understanding Facebook's role in digital marketing.</li>
            <li>Overview of Facebook Pages, Groups, and Ads.</li>
            <li>Key marketing strategies for small and large businesses.</li>
          </ul>

          <h5 className="font-semibold">2. Creating a Winning Facebook Page</h5>
          <ul className="ml-8">
            <li>Setting up and optimizing your Facebook business page.</li>
            <li>Designing eye-catching cover photos and profile pictures.</li>
            <li>Writing compelling "About" sections and descriptions.</li>
          </ul>

          <h5 className="font-semibold">3. Content Strategy and Engagement</h5>
          <ul className="ml-8">
            <li>Planning and creating high-quality, engaging content.</li>
            <li>Tips for videos, images, and posts that attract attention.</li>
            <li>Understanding the Facebook algorithm and how to work with it.</li>
          </ul>

          <h5 className="font-semibold">4. Facebook Ads Mastery</h5>
          <ul className="ml-8">
            <li>Step-by-step guide to creating Facebook ad campaigns.</li>
            <li>Targeting the right audience for maximum ROI.</li>
            <li>Using Facebook Pixel for advanced tracking and optimization.</li>
          </ul>

          <h5 className="font-semibold">5. Analyzing and Optimizing Performance</h5>
          <ul className="ml-8">
            <li>Measuring success with Facebook Insights and analytics tools.</li>
            <li>Adjusting campaigns based on performance data.</li>
            <li>Strategies for continuous improvement and scaling.</li>
          </ul>

          <h5 className="font-semibold">6. Facebook Groups and Community Building</h5>
          <ul className="ml-8">
            <li>How to start and manage a Facebook Group.</li>
            <li>Building an engaged community around your brand.</li>
            <li>Strategies for continuous improvement and scaling.</li>
          </ul>

          <h1 className="py-5 text-3xl font-semibold">Why Choose Our Course?</h1>
          <ul className="flex flex-col gap-2 ml-8">
            <li>
              <span className="font-semibold">Expert Guidance:</span> Learn from industry experts
              with years of experience in Facebook marketing.
            </li>
            <li>
              <span className="font-semibold">Interactive Classes:</span> Learn from industry
              experts with years of experience in Facebook marketing.
            </li>
            <li>
              <span className="font-semibold">Practical Projects:</span> Apply your knowledge with
              real-world assignments and projects.
            </li>
            <li>
              <span className="font-semibold">Lifetime Access:</span> Get access to course materials
              even after the classes are over.
            </li>
            <li>
              <span className="font-semibold">Certificate of Completion:</span> Showcase your
              expertise with a professional certification.
            </li>
          </ul>

          <h1 className="py-5 text-3xl font-semibold">Who Should Enroll?</h1>
          <h3 className="py-1">This course is ideal for:</h3>
          <ul className="flex flex-col gap-2 ml-8">
            <li>Entrepreneurs looking to grow their businesses online.</li>
            <li>Marketing professionals who want to upskill.</li>
            <li>Freelancers aiming to offer Facebook marketing services.</li>
            <li>Anyone passionate about learning digital marketing.</li>
          </ul>

          <h1 className="py-5 text-3xl font-semibold">Course Details</h1>
          <ul className="flex flex-col gap-2 ml-8">
            <li>
              <span className="font-semibold">Duration:</span> 7 days (1.5 hours per day).
            </li>
            <li>
              <span className="font-semibold">Start Date:</span> [Insert Start Date Here].
            </li>
            <li>
              <span className="font-semibold">Fee:</span> Starting 1000 PKR [Insert Course Fee
              Here].
            </li>
          </ul>

          <h1 className="py-5 text-3xl font-semibold">How to Enroll</h1>
          <h3 className="py-1">Enrolling is easy! Visit our website or contact us at:</h3>
          <ul className="flex flex-col gap-2 ml-8">
            <li className="flex gap-1 items-center">
              <span className="font-semibold">Website:</span>{' '}
              <Link href="http://www.webstudio.online" className="hover:underline flex justify-center items-center">
                          <FaEnvelope className=' p-1 text-xl hover:text-gray-100 transition-all duration-500 ' />
                 www.webstudio.online
              </Link>
            </li>
            <li className="flex gap-1 items-center">
              <span className="font-semibold">Email:</span>{' '}
              <Link href="mailto:websprofessor@gmail.com" className="hover:underline">
                websprofessor@gmail.com
              </Link>
            </li>
            <li className="flex gap-1 items-center">
              <span className="font-semibold">Phone/WhatsApp:</span>{' '}
              <Link href="tel:+923040535970" className="hover:underline">
                +923040535970
              </Link>
            </li>
          </ul>

          <h1 className="py-5 text-3xl font-semibold">Testimonials</h1>
          <h3 className="py-1">Here's what our students have to say:</h3>
          <ul className="flex flex-col gap-2 ml-8">
            <li>
              "This course helped me boost my sales by 300%! The instructors were amazing and
              explained everything so well." – Sarah M.
            </li>
            <li>
              "A game-changer for my business! I learned how to create effective ads that actually
              work." – David K.
            </li>
          </ul>
        </div>
      )}
            </div>
  


         </div>
     </div>

     <div className="whatsapp text-wrap py-10" id="whatsapp">
     <div className="flex md:justify-between justify-center md:px-10 px-2 md:px-5">
        <h1 className="text-2xl md:text-3xl font-semibold">Whatsapp Marketing course</h1>
        <Link href='https://.wa.me/923040535970' target="_blank" className="p-3 bg-blue-600 rounded-md hover:bg-blue-900 duration-all transition-500 text-white">Join Course</Link>
      </div>
  <img
    width={500}
    className="w-[800px] text-center overflow-hidden py-5 md:ml-40"
    src="https://www.ameyo.com/wp-content/uploads/2022/08/16-2-1024x576.png"
    alt="WhatsApp Marketing"
  />
  <div className="content fit-content md:mx-20 flex flex-col gap-3">
    <p>Learn how to harness the power of WhatsApp to connect with your audience, grow your business, and achieve your marketing goals. This course is designed for individuals and businesses eager to use WhatsApp effectively for marketing and communication.</p>
    <h3 className="font-semibold text-xl">What You Will Learn</h3>

    <div className="toggle-content p-4">
      {/* Toggle Button */}
      <button
        onClick={toggleVisibility}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
      >
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {/* Content Section */}
      {isVisible && (
        <div className="flex flex-col gap-2">
           <h5 className="font-semibold">1. Introduction to WhatsApp Marketing</h5>
    <ul className="ml-5">
      <li>Understanding WhatsApp's role in modern communication and marketing.</li>
      <li>Key advantages of using WhatsApp for business.</li>
    </ul>

    <h5 className="font-semibold">2. Setting Up WhatsApp Business</h5>
    <ul className="ml-8">
      <li>Creating and optimizing your WhatsApp Business profile.</li>
      <li>Adding essential details: business information, catalog, and auto-responses.</li>
    </ul>

    <h5 className="font-semibold">3. Building a Contact List</h5>
    <ul className="ml-8">
      <li>Ethical ways to grow your audience.</li>
      <li>Importing and managing contacts efficiently.</li>
    </ul>

    <h5 className="font-semibold">4. Broadcasting and Group Strategies</h5>
    <ul className="ml-8">
      <li>Creating and using broadcast lists for targeted marketing.</li>
      <li>Managing groups to engage and retain customers.</li>
    </ul>

    <h5 className="font-semibold">5. Content Creation for WhatsApp</h5>
    <ul className="ml-8">
      <li>Designing engaging messages, images, and videos.</li>
      <li>Writing effective CTAs (Call-to-Action) for better response rates.</li>
    </ul>

    <h5 className="font-semibold">6. Marketing Campaigns and Automation</h5>
    <ul className="ml-8">
      <li>Planning and executing WhatsApp marketing campaigns.</li>
      <li>Using tools to automate responses and campaigns.</li>
    </ul>

    <h1 className="py-5 text-3xl font-semibold">Why Choose Our Course?</h1>
    <ul className="flex flex-col gap-2 ml-8">
      <li><span className="font-semibold">Expert Guidance:</span> Learn from industry experts with years of experience in WhatsApp marketing.</li>
      <li><span className="font-semibold">Hands-on Projects:</span> Apply your learning in real-world scenarios.</li>
      <li><span className="font-semibold">Lifetime Resources:</span> Access course materials and templates even after completion.</li>
      <li><span className="font-semibold">Certificate of Completion:</span> Enhance your credentials with a recognized certificate.</li>
    </ul>

    <h1 className="py-5 text-3xl font-semibold">Who Should Enroll?</h1>
    <ul className="flex flex-col gap-2 ml-8">
      <li>Entrepreneurs seeking to grow their business.</li>
      <li>Digital marketers looking to expand their skill set.</li>
      <li>Businesses aiming to improve customer communication.</li>
      <li>Anyone passionate about innovative marketing techniques.</li>
    </ul>

    <h1 className="py-5 text-3xl font-semibold">Course Details</h1>
    <ul className="flex flex-col gap-2 ml-8">
      <li><span className="font-semibold">Duration:</span> 7 days (1.5 hours per day).</li>
      <li><span className="font-semibold">Start Date:</span> [Insert Start Date Here].</li>
      <li><span className="font-semibold">Fee:</span> [Insert Course Fee Here].</li>
    </ul>

    <h1 className="py-5 text-3xl font-semibold">How to Enroll</h1>
    <ul className="flex flex-col gap-2 ml-8">
      <li><span className="font-semibold">Website:</span> www.webstudio.online</li>
      <li><span className="font-semibold">Email:</span> websprofessor@gmail.com</li>
      <li><span className="font-semibold">Phone/WhatsApp:</span> 923040535970</li>
    </ul>

    <h1 className="py-5 text-3xl font-semibold">Testimonials</h1>
    <ul className="flex flex-col gap-2 ml-8">
      <li>"This course helped me connect better with my customers! Highly recommend it." – Maria T.</li>
      <li>"Effective and practical strategies. My business saw significant growth!" – Alex R.</li>
    </ul>
        </div>
      )}
            </div>


   
  </div>
     </div>


     <div className="webdev text-wrap py-10" id="webdev">
  <div className="flex md:justify-between  md:px-10 px-2">
    <h1 className="text-2xl md:text-3xl font-semibold">Web Development Course</h1>
    <Link
      href="https://wa.me/923040535970"
      target="_blank"
      className="p-3 bg-blue-600 rounded-md hover:bg-blue-900 duration-all transition-500 text-white"
    >
      Join Course
    </Link>
  </div>
  <img
    width={500}
    className="w-[800px] text-center overflow-hidden py-5 md:ml-40"
    src="https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/65f2215bcb94d4592f844920_7%2B%20Best%20Web%20Development%20Frameworks%20to%20Use%20in%202024.webp"
    alt="Web Development"
  />
  <div className="content fit-content md:mx-20 flex flex-col gap-3">
    <p>
      Learn to build professional and responsive websites from scratch with our{" "}
      <span className="font-semibold">Web Development Course</span>. This course
      is perfect for beginners and aspiring developers. Get hands-on training
      in HTML, CSS, JavaScript, and more, and start your journey toward
      mastering web development.
    </p>
    <h3 className="font-semibold text-xl">What You Will Learn</h3>

    <div className="toggle-content p-4">
      {/* Toggle Button */}
      <button
        onClick={toggleVisibility}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
      >
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      {/* Content Section */}
      {isVisible && (
        <div className="flex flex-col gap-2">
          <h5 className="font-semibold">1. Introduction to Web Development</h5>
          <ul className="ml-5">
            <li>Overview of front-end and back-end technologies.</li>
            <li>Tools and frameworks used in web development.</li>
          </ul>

          <h5 className="font-semibold">2. Mastering HTML</h5>
          <ul className="ml-8">
            <li>Structuring web pages using HTML elements.</li>
            <li>Building forms, tables, and multimedia integration.</li>
          </ul>

          <h5 className="font-semibold">3. Styling with CSS</h5>
          <ul className="ml-8">
            <li>Designing websites with CSS styles and layouts.</li>
            <li>Using responsive design techniques for all devices.</li>
          </ul>

          <h5 className="font-semibold">4. Programming with JavaScript</h5>
          <ul className="ml-8">
            <li>Adding interactivity to websites using JavaScript.</li>
            <li>Learning variables, functions, and DOM manipulation.</li>
          </ul>

          <h5 className="font-semibold">5. Version Control with Git</h5>
          <ul className="ml-8">
            <li>Setting up and using Git for version control.</li>
            <li>Collaborating on projects using GitHub repositories.</li>
          </ul>

          <h5 className="font-semibold">6. Frameworks Overview</h5>
          <ul className="ml-8">
            <li>Introduction to React and Angular frameworks.</li>
            <li>Basics of Node.js and Express for back-end development.</li>
          </ul>

          <h5 className="font-semibold">7. Building and Deploying Projects</h5>
          <ul className="ml-8">
            <li>Developing a fully functional website from scratch.</li>
            <li>Testing, debugging, and deploying projects online.</li>
          </ul>

          <h1 className="py-5 text-3xl font-semibold">
            Why Choose Our Course?
          </h1>
          <ul className="flex flex-col gap-2 ml-8">
            <li>
              <span className="font-semibold">Comprehensive Curriculum:</span>{" "}
              Covering front-end and back-end development.
            </li>
            <li>
              <span className="font-semibold">Hands-on Projects:</span> Build a
              portfolio of real-world projects.
            </li>
            <li>
              <span className="font-semibold">Lifetime Resources:</span> Access
              to all course materials forever.
            </li>
            <li>
              <span className="font-semibold">Certification:</span> Gain an
              industry-recognized certificate.
            </li>
          </ul>

          <h1 className="py-5 text-3xl font-semibold">Who Should Enroll?</h1>
          <ul className="flex flex-col gap-2 ml-8">
            <li>Beginners with no prior coding experience.</li>
            <li>Freelancers expanding their service offerings.</li>
            <li>Students or professionals aiming for a career shift.</li>
          </ul>

          <h1 className="py-5 text-3xl font-semibold">Course Details</h1>
          <ul className="flex flex-col gap-2 ml-8">
            <li>
              <span className="font-semibold">Duration:</span> 30 days (2 hours
              per day).
            </li>
            <li>
              <span className="font-semibold">Start Date:</span> [Insert Start
              Date Here].
            </li>
            <li>
              <span className="font-semibold">Fee:</span> [Insert Fee Here].
            </li>
          </ul>

          <h1 className="py-5 text-3xl font-semibold">How to Enroll</h1>
          <ul className="flex flex-col gap-2 ml-8">
            <li>
              <span className="font-semibold">Website:</span> www.webstudio.online
            </li>
            <li>
              <span className="font-semibold">Email:</span> websprofessor@gmail.com
            </li>
            <li>
              <span className="font-semibold">Phone/WhatsApp:</span>{" "}
              923040535970
            </li>
          </ul>

          <h1 className="py-5 text-3xl font-semibold">Testimonials</h1>
          <ul className="flex flex-col gap-2 ml-8">
            <li>
              "This course transformed my skills! Highly recommend." – John D.
            </li>
            <li>
              "Practical and engaging. I built my first website in no time." –
              Sarah K.
            </li>
          </ul>
        </div>
      )}
    </div>
  </div>
</div>

{/* ----------------------------------- Data ==================== */}
     <div className="webdev text-wrap py-10" id="data">
  <div className="flex md:justify-between justify-center  md:px-10 px-2">
    <h1 className="text-2xl md:text-3xl font-semibold">Unlimited Online data's</h1>
    <Link
      href="https://wa.me/923040535970"
      target="_blank"
      className="p-3 bg-blue-600 rounded-md hover:bg-blue-900 duration-all transition-500 text-white"
    >
      Get Deta
    </Link>
  </div>
  <img
    width={500}
    className="w-[800px] text-center overflow-hidden py-5 md:ml-40"
    src='https://media.licdn.com/dms/image/v2/D5612AQGUzgwWKjOpwQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1654245424014?e=2147483647&v=beta&t=UD302auJyPCdf79X-qhhR7Qgbc11LnTARGrFZkXwOnc'
    alt="Web Development"
  />
  <div className="content fit-content md:mx-20 flex flex-col gap-3">
    <p>
      Learn to build professional and responsive websites from scratch with our{" "}
      <span className="font-semibold">Web Development Course</span>. This course
      is perfect for beginners and aspiring developers. Get hands-on training
      in HTML, CSS, JavaScript, and more, and start your journey toward
      mastering web development.
    </p>
    <h3 className="font-semibold text-xl">What You Will Learn</h3>

    <div className="toggle-content p-4">
  {/* Toggle Button */}
  <button
    onClick={toggleVisibility}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
  >
    {isVisible ? "Hide Content" : "Show Content"}
  </button>

  {/* Content Section */}
  {isVisible && (
    <div className="flex flex-col gap-2">
      <h5 className="font-semibold">1. Unlimited Data Social Courses</h5>
      <ul className="ml-5">
        <li>Learn how to manage and use social media data effectively.</li>
        <li>Gain insights into analyzing social media trends and behavior.</li>
        <li>Understand how to create social media campaigns with data-driven strategies.</li>
      </ul>

      <h5 className="font-semibold">2. Facebook Marketing Courses</h5>
      <ul className="ml-8">
        <li>Master Facebook Ads and how to set up successful campaigns.</li>
        <li>Learn about targeting, budgeting, and optimizing ads for maximum reach.</li>
        <li>Understand conversion tracking and metrics for measuring success.</li>
      </ul>

      <h5 className="font-semibold">3. Ethical Hacking Courses</h5>
      <ul className="ml-8">
        <li>Introduction to ethical hacking, penetration testing, and security protocols.</li>
        <li>Learn how to protect networks and prevent cyber attacks.</li>
        <li>Hands-on experience with various hacking tools and techniques in a safe, legal environment.</li>
      </ul>

      <h5 className="font-semibold">4. Digital Marketing Course</h5>
      <ul className="ml-8">
        <li>Explore SEO, content marketing, email campaigns, and online advertising strategies.</li>
        <li>Learn the latest trends in digital marketing, including influencer marketing and social commerce.</li>
        <li>Master tools like Google Analytics, SEMrush, and others to track and optimize performance.</li>
      </ul>

      <h5 className="font-semibold">5. WordPress Development Courses</h5>
      <ul className="ml-8">
        <li>Understand the basics of WordPress themes, plugins, and customization.</li>
        <li>Learn how to build a fully functional website with WordPress from scratch.</li>
        <li>Explore advanced topics such as security, speed optimization, and SEO for WordPress sites.</li>
      </ul>

      <h5 className="font-semibold">6. Assets and Graphics Data</h5>
      <ul className="ml-8">
        <li>Access a vast library of high-quality assets like graphics, templates, and design tools.</li>
        <li>Explore various design styles and implement them into your projects.</li>
        <li>Learn how to properly organize and manage digital assets for efficient workflows.</li>
      </ul>

      <h5 className="font-semibold">7. Computer Premium Software</h5>
      <ul className="ml-8">
        <li>Gain access to premium software for productivity, creativity, and security.</li>
        <li>Learn about popular tools for graphic design, coding, and project management.</li>
        <li>Stay up to date with the latest software updates and industry standards.</li>
      </ul>

      <h5 className="font-semibold">8. Premium Mobile Apps</h5>
      <ul className="ml-8">
        <li>Access mobile apps for design, productivity, and marketing optimization.</li>
        <li>Explore apps designed for professional use and learn how to make the most of them.</li>
        <li>Learn to integrate premium apps into your business workflow for maximum efficiency.</li>
      </ul>

      <h1 className="py-5 text-3xl font-semibold">
        Why Choose Our Courses?
      </h1>
      <ul className="flex flex-col gap-2 ml-8">
        <li>
          <span className="font-semibold">Comprehensive Curriculum:</span> In-depth coverage of the latest trends and technologies.
        </li>
        <li>
          <span className="font-semibold">Hands-on Learning:</span> Gain real-world experience with practical assignments and projects.
        </li>
        <li>
          <span className="font-semibold">Lifetime Access:</span> Keep all course materials for future reference and continuous learning.
        </li>
        <li>
          <span className="font-semibold">Industry Recognition:</span> Get a certificate upon completion, recognized in the field.
        </li>
      </ul>

      <h1 className="py-5 text-3xl font-semibold">Who Should Enroll?</h1>
      <ul className="flex flex-col gap-2 ml-8">
        <li>Anyone looking to build a career in digital marketing, ethical hacking, web development, or design.</li>
        <li>Professionals seeking to upgrade their skills and stay current with industry trends.</li>
        <li>Entrepreneurs and freelancers who wish to expand their service offerings with new technologies.</li>
      </ul>

      <h1 className="py-5 text-3xl font-semibold">Course Details</h1>
      <ul className="flex flex-col gap-2 ml-8">
        <li>
          <span className="font-semibold">Duration:</span> Flexible online learning options with varying durations depending on the course.
        </li>
        <li>
          <span className="font-semibold">Start Date:</span> Start anytime with immediate access to the course material.
        </li>
        <li>
          <span className="font-semibold">Fee:</span> Affordable pricing with discounts for early enrollment.
        </li>
      </ul>

      <h1 className="py-5 text-3xl font-semibold">How to Enroll</h1>
      <ul className="flex flex-col gap-2 ml-8">
        <li>
          <Link target="_blank" href='websprofessor@gmail.com' className="hover:text-blue-700 transition-all duration-500">
            <span className="font-semibold">Website:</span> www.yourwebsite.com
          </Link>
        </li>
        <li>
          <Link target="_blank" href='https://wa.me/923040535970' className="hover:text-blue-700 transition-all duration-500">
           <span className="font-semibold">Email:</span> contact@yourwebsite.com
          </Link>
        </li>
        <li>
          <Link target="_blank" href='923040535970' className="hover:text-blue-700 transition-all duration-500">
           <span className="font-semibold">Phone/WhatsApp:</span> 923040535970
          </Link>
        </li>
      </ul>

      <h1 className="py-5 text-3xl font-semibold">Testimonials</h1>
      <ul className="flex flex-col gap-2 ml-8">
        <li>
          "These courses helped me master digital marketing and take my business to the next level!" – Emma L.
        </li>
        <li>
          "I learned everything I needed to start a career in ethical hacking. The instructors were top-notch!" – Michael R.
        </li>
      </ul>
    </div>
  )}
</div>

  </div>
</div>


   
   </div>

    </div>
  );
};

export default courses;
