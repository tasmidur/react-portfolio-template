# Professional Portfolio
## Modify all from src/data as like

### Modify Basic Information from src/data/BasicInfoShema.js

```js
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
```

### Edit Experience from src/data/ExperienceSchema.js

```js
export const ExperienceSchema = [
  {
    title: "FullStack Sr. Software Engineer",
    period: "Sep. 2022 - Present",
    company: "XYZ Tech Solutions, Cityville, Country",
    description: [
      "Microservice based architecture",
      "Backend API service is developed with NodeJs and Laravel",
      "Frontend is developed with MUI React",
      "Deploy the web app using a Docker web server",
      "Configuring Keycloak and WSO2 API manager",
      "System log manage using Kafka and Elasticsearch, Logstash, and Kibana (ELK stack)",
      `Used: NodeJs, NestJs, React, PHP, Laravel, Lumen, Kafka, MySQL, MongoDb, ElasticSearch, Keycloak, Docker, Gitlab CI, etc`,
    ],
  },
  {
    title: "FullStack Assistant Software Engineer",
    period: "Dec. 2020 - Sep. 2022",
    company: "Tech Solutions Ltd, Cityville, Country",
    description: [
      "Microservice based architecture",
      "Backend API service is developed with Lumen",
      "Frontend is developed with NextJs",
      "Real-time Notification fetching using socket",
      "Deploy the web app using a Docker web server",
      "WSO2 api manager and identity server",
      "API documentation with Swagger",
      "Distributed transaction using SAGA pattern, RabbitMQ",
      "Distributed notification manage using Kafka",
      "Data aggregation using Kafka Debezium",
      "System log manage using Kafka and Elasticsearch, Logstash, and Kibana (ELK stack)",
      "Distributed payment transaction using ekpay, sslcommerz, and RabbitMQ",
      `Used: NodeJs, NestJs, React, PHP, Laravel, Lumen, Kafka, MySQL, MongoDb, ElasticSearch, Docker, Gitlab CI, etc`,
    ],
  },
  {
    title: "Junior Software Engineer",
    period: "Jan. 2019 - Nov. 2020",
    company: "Tech Innovations Ltd., Cityville, Country",
    description: [
      "Maintenance and feature development",
      "Implementation of Banglalink Network API using cURL",
      "Integration ekpay, sslcommerz",
      "SMS API integration",
      `Used: NodeJs, NestJs, React, PHP, Laravel, CakePhp, JQuery, Gitlab CI, etc`,
    ],
  },
];
```
