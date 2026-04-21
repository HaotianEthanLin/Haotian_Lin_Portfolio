"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="font-bold">Santa Clara University</span> <br/>
          Master of Science in Computer Science<br/>
          GPA: 3.7/4
        </li>
        <br/>
        <li>
          <span className="font-bold">University of Rochester</span> <br/>
          Bachelor of Art in Computer Science<br/>
          GPA: 3.0/4
        </li>
      </ul>
    ),
  },
  {
    title: "skill",
    id: "skill",
    content: (
      <div>
        <p className="font-bold">-Languages:</p>
        <p>Java, JavaScript, Python, PHP, SQL, C, C++, Solidity</p>
        <p className="font-bold">-Frameworks:</p>
        <p>React, Node.js, Next.js, Express.js, Spring, Tailwind CSS, PyTorch</p>
        <p className="font-bold">-Databases&Tools:</p>
        <p>MySQL, MongoDB, PostgreSQL, Git, GitHub, Docker, AWS EC2, AWS Lambda, CI/CD, Webhook, Kubernetes</p>
        <p className="font-bold">-AI:</p>
        <p>RAG (Retrieval-Augmented Generation), LangChain, LangGraph, AI Agent Skills</p>
      </div>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
      <div>
        <span className="font-bold text-lg">Inspired Earth</span> <br/>
        Oct 2024 - Present | Santa Clara, CA<br/>
        <span className="italic">Software Engineer(Research Assistant)</span> <br/>
        <ul className="list-disc pl-6">
          <li>Lead the development of an e-commerce platform using <strong>PHP,
            JavaScript</strong>, and <strong>MySQL</strong>, delivering full-stack features across checkout, 
            order management, and customer-facing purchase flows.</li>
          <li>Engineered core backend logic for cart, payment, and order workflows, improving the reliability of 
            end-to-end transactions from checkout through post-purchase communication.</li>
          <li>Designed and implemented an automated receipt and notification pipeline using <strong>Stripe webhooks</strong> and 
            <strong>PHPMailer</strong>, enabling customer confirmations and internal order alerts tied to completed purchases.</li>
          <li>Improved checkout resilience by refactoring backend services to handle dynamic cart updates, shipping-related logic, retries, 
            refreshes, and incomplete sessions, making the platform more reliable under real-world user behavior.</li>
          <li>Delivered product features including coupon support, order processing improvements, and transactional workflow updates, 
            balancing technical reliability with a smoother customer experience.</li>
          <li>Built a Web3-enabled donation workflow by configuring oracle-backed smart contract integrations, deploying contracts that consumed 
            off-chain API data and published information on-chain, and extending the platform with blockchain-facing transparency features.</li>
        </ul>
        <br />
        <span className="font-bold text-lg">Datatrixs Inc.</span> <br/>
        June 2024 - Sep 2024 | San Francisco, CA<br/>
        <span className="italic">Software Engineer Intern</span> <br/>
        <ul className="list-disc pl-6">
          <li>Contributed to a production SaaS platform for CPAs, helping build workflow automation and data visualization capabilities 
            that supported real client use cases and improved the product’s value for enterprise customers, including Intuit QuickBooks.</li>
          <li>Built backend services with <strong>Express.js</strong> and <strong>MongoDB</strong>, designing schemas and business logic 
          for profile management and secure data sharing so new product features could be added on a cleaner and more scalable foundation.</li>
          <li>Integrated OpenAI GPT-4o into the backend to generate structured chart data in JSON, turning natural-language inputs into usable 
            visualizations and making advanced reporting workflows more accessible to users.</li>
          <li>Added reliability checks around AI-generated outputs, including structured response handling and validation logic, to improve 
            consistency and reduce incorrect or poorly formatted chart results before they reached the frontend.</li>
          <li>Developed responsive <strong>React</strong> frontend features for chart rendering, previews, and prompt guidance, helping connect AI-generated 
            data with a smoother and more intuitive user experience.</li>
          <li>Deployed and maintained services in serverless Seed.run environment, gaining hands-on experience with cloud deployment, monitoring, 
            and keeping production features reliable as the platform evolved.</li>
        </ul>
        <br />
        <span className="font-bold text-lg">Shinetech Software Inc.</span> <br/>
        June 2019 - Aug 2019 | Wuxi, Jiangsu, China<br/>
        <span className="italic">Software Engineer Intern</span> <br/>
        <ul className="list-disc pl-6">
          <li>Contributed to the development and optimization of an internal Office Automation System, working on backend-focused 
            modules related to information display, email delivery, and schedule management.</li>
          <li>Refactored and debugged core application components using <strong>Java Spring</strong> and <strong>Apache Maven</strong>, 
          improving code reliability, maintainability, and day-to-day system stability.</li>
          <li>Analyzed user access patterns and usage frequency across different functional areas, then helped adjust backend 
            resource allocation to better support real-world traffic behavior.</li>
          <li>Improved overall system responsiveness by optimizing how resources were distributed across user groups, contributing 
            to a <strong>40%</strong> reduction in average access propagation delay.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "project",
    id: "project",
    content: (
      <div>
        <span className="font-bold text-lg">Implementation and Analysis of Recommendation Algorithms</span> <br/>
        <ul className="list-disc pl-6">
          <li>Used <strong>Python</strong> to develop user-based and item-based collaborative filtering algorithms to predict new users&apos; ratings of 
            movies, and further improved algorithms&apos; accuracy by implementing inverse user frequency and case amplification</li>
          <li>Employed <strong>nltk</strong> package to perform stemming and tokenization of movie titles and abstracts. Performed better clustering 
            and item-based filtering based on IDF of tokens, achieving <strong>96%</strong> accuracy and mean absolute error of <strong>0.3</strong></li>
        </ul>
        <br />
        <span className="font-bold text-lg">Neural Network Optimization Algorithms and Learning Rate Decay</span> <br/>
        <ul className="list-disc pl-6">
          <li>Implement various optimization algorithms: Stochastic Gradient Descent, Momentum, RMSProp, and Adam</li>
          <li>Use random minibatches to accelerate convergence and improve optimization</li>
          <li>Compare different models and justify that for Mini-batch GD or Mini-batch GD with Momentum, the accuracy is significantly lower than Adam, 
            but when learning rate decay is added on top, either can achieve performance at a speed and accuracy score that&apos;s similar to Adam</li>
        </ul>
        <br />
        <span className="font-bold text-lg">Computer Networks Application of RDT(Reliable Data Transport)</span> <br/>
        <ul className="list-disc pl-6">
          <li>Developed server and client applications with configurable IP addresses(InetAddress) and ports using <strong>Java</strong>. Simulated 
            acknowledgement packets of <strong>TCP</strong> over UDP to prevent interceptions</li>
          <li>Used <strong>Wireshark</strong> to capture packets, analyzed simulated packet corruption and out-of-order, redesigned packet header 
            and confirmation algorithm accordingly. Eliminated the chance of verifying corrupted packets and reduced reaction time 
            of lost and out-of-order packets by <strong>70%</strong></li>
        </ul>
      </div>
    ),
  },
  {
    title: "coursework",
    id: "coursework",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Structure and Algorithms</li>
        <li>Operating Systems</li>
        <li>Computer Architecture</li>
        <li>Artificial Intelligence</li>
        <li>Deep learning</li>
        <li>Machine learning</li>
        <li>Distributed System</li>
        <li>Search and Information Retrieval</li>
        <li>Object Oriented Design and Programming</li>
        <li>Computer Networks</li>
        <li className="font-bold rounded">Actively learning more ......</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-gray-800 bg-gray-100" id="about">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full mt-4 ml-4 md:w-1/2 h-auto">
          <Image 
            src="/images/about_new.png"
            width={300}
            height={300}
            alt="About me"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-full mt-4 mr-4 md:w-1/2">
          <h2 className="text-4xl font-bold text-cyan-600">About Me</h2>
          <p className="text-base lg:text-lg text-gray-600">
            I am a full-stack software engineer with a strong backend focus,
            experienced in building web systems, APIs, payment workflows, and data-driven product features. 
            My stack includes Java, JavaScript, React, Node.js, MySQL, and MongoDB, 
            with hands-on experience across both product development and system reliability. 
            I&apos;m also actively expanding my AI engineering skills in agentic workflows, retrieval-based systems, 
            and practical LLM applications. <br />
            <span className="font-semibold">Let&apos;s connect and build something impactful together.</span>
          </p>
          <div className="flex justify-start items-start space-x-5 mt-2" style={{overflowX: "auto"}}>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skill")}
              active={tab === "skill"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("project")}
              active={tab === "project"}
            >
              {" "}
              Projects{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("coursework")}
              active={tab === "coursework"}
            >
              {" "}
              Coursework{" "}
            </TabButton>
          </div>
          <div className="bg-white shadow rounded-lg p-6 mt-2" style={{ height: "400px", overflowY: "auto"}}>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;