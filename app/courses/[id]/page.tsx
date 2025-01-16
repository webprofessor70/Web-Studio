import { notFound } from "next/navigation";

const staticCourses = [
  {
    id: "1",
    title: "Facebook Marketing",
    description: "Facebook  Master the art of Facebook ads to boost your online sales. Are you looking to enhance your marketing skills and generate more revenue online? Our Facebook Marketing Course is the ultimate solution to mastering the art of social media marketing. With 7 days of comprehensive online classes, this course is designed to equip you with all the essential knowledge and tools to succeed in the competitive world of digital marketing and advertising. Our expert instructors will guide you through the process of creating effective Facebook ads, targeting the right audience, and optimizing your campaigns for maximum results. Whether you are a beginner or an experienced marketer, this course will help you take your skills to the next level and achieve your business goals.",
    image: "https://www.syntacticsinc.com/wp-content/uploads/2022/01/FACEBOOK-MARKETERS-AND-MARKETING-ADVERTISERS-1280x720.jpg",

  },
  {
    id: "2",
    title: "WhatsApp Marketing",
    description: "Learn effective strategies to market using WhatsApp.",
    image: "https://www.ameyo.com/wp-content/uploads/2022/08/16-2-1024x576.png",

  },
  {
    id: "3",
    title: "Web Development",
    description: "Become a professional web developer with HTML, CSS, and JavaScript.",
    image: "https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/65f2215bcb94d4592f844920_7%2B%20Best%20Web%20Development%20Frameworks%20to%20Use%20in%202024.webp",
  },
];

interface CourseDetailsProps {
  params: {
    id: string;
  };
}

const CourseDetailsPage = ({ params }: CourseDetailsProps) => {
  const course = staticCourses.find((c) => c.id === params.id);

  if (!course) {
    notFound(); // Redirects to the 404 page if course is not found
  }

  return (
    <div className="container mx-auto py-10 fit-content">
      <h1 className="text-4xl font-bold mb-6">{course.title}</h1>
      <img
        src={course.image}
        alt={course.title}
        className="flex fit-content justify-center md:ml-[350px] w-70 h-96 object-cover rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 text-center">{course.description}</p>
    </div>
  );
};

export default CourseDetailsPage;
