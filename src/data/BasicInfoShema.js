import {SiFacebook, SiGithub, SiGitlab, SiHashnode, SiLinkedin} from "react-icons/si";
import {BsMedium} from "react-icons/bs";
import avatarImage from "../assets/img/avater.jpeg"

export const BasicInfoShema = {
  profile: {
    name: "John Doe",
    occupation: "FullStack Developer",
    location: "123 Main Street, Cityville, Country",
    image: avatarImage,
  },
  contact:
    {
      email: "john.doe@example.com",
    mobileNumber: "+123 4567890",
    address: "Cityville, Country",
    },
  aboutMe: {

    description: `
      <div>
      <h2>Hi, I'm John Doe</h2>
      <p>Experienced and results-driven Software Engineer with a proven track record in designing, developing, and implementing robust and scalable systems. Specializing in creating innovative solutions within dynamic technology environments, I bring a unique blend of technical expertise, strategic thinking, and collaborative leadership to drive successful project outcomes.</p>
  
      <p>As an experienced and results-driven Software Engineer, I possess a proven track record in crafting robust and scalable systems. My expertise lies in designing, developing, and implementing innovative solutions tailored to dynamic technology environments. Specializing in creating software that stands the test of time, I bring a unique blend of technical acumen, strategic thinking, and collaborative leadership to the table.</p>
  
      <p>With a keen eye for detail, I navigate complex challenges with precision, ensuring the delivery of high-quality solutions. I am adept at fostering teamwork and implementing best practices, driving successful project outcomes. My commitment to staying at the forefront of technological advancements enables me to bring cutting-edge solutions to the projects I undertake.</p>
  
      <p>In summary, I am a forward-thinking Software Engineer dedicated to delivering excellence in every aspect of software development. My passion for innovation, coupled with a solid foundation of technical skills, positions me as a valuable asset in creating and maintaining sophisticated systems.</p>
      </div>
    `
  },
  academic: [
   {
      career: "B.Sc in Computer Science",
      passingYear: "2022",
      institution: "ABC University",
    },
  ],
  interest: ["Machine Learning", "Photography", "Blockchain"],
  skills: {
    technicalLabel: "Technologies",
    softLabel: "Skills",
    technicalSkills: [
      "Nodejs",
      "Nestjs",
      "React",
      "PHP",
      "Laravel",
      "MySql",
      "MongoDb",
      "ElasticSearch",
      "Git",
    ],
    softSkills: [
      "WSO2 Api Manager",
      "KeyCloak",
      "Docker",
      "ELK",
      "Kafka",
      "Kafka-debezium",
      "RabbitMq"
    ],
  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Medium",
        name: "hashnode",
        url: "https://medium.com/",
        icon: <BsMedium size={25} fill="bg-secondary"/>
      },
      {
        label: "HashNode",
        name: "hashnode",
        url: "https://hashnode.com/",
        icon: <SiHashnode size={25}/>
      },
      {
        label: "LinkedIn",
        name: "linkedin",
        url: "https://www.linkedin.com",
        icon: <SiLinkedin size={25}/>
      },
      {
        label: "GitHub",
        name: "github",
        url: "https://github.com",
        icon: <SiGithub size={25} fill="bg-secondary"/>,
      },
      {
        label: "GitLab",
        name: "gitlab",
        url: "https://gitlab.com",
        icon: <SiGitlab size={25} fill="#FC6D27"/>,
      },
      {
        label: "FaceBook",
        name: "facebook",
        url: "https://www.facebook.com",
        icon: <SiFacebook size={25}/>
      },
    ],
  }
};
