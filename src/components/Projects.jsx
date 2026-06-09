"use client";
import { Github, ExternalLink } from "lucide-react";
import jobby from "../assets/images/jobby.png";
import jobstation from "../assets/images/jobstation.png";
import foodieland from "../assets/images/foodieland.png";
import signalainews from"../assets/images/signalainews.png"
import milkdash from"../assets/images/milkdash.png"
import nxt from "../assets/images/nxt.png"; 
import lgevents from "../assets/images/lg-events.png"
import eventshub from "../assets/images/eventshub.png"
import skyclothing from "../assets/images/skyclothing.png"
export default function Projects({ isVisible }) {
  const projects = [

  {
    title: "LG Events",
    description: "A React.js-powered event portfolio website designed to showcase weddings, celebrations, and successful events beautifully. Features smooth animations, complete gallery management for displaying events and moments, and a responsive, dynamic interface. Built with React and Tailwind CSS to ensure fast performance and a seamless user experience.",
    tech: ["React","Tailwind CSS","Framer Motion"],
    image: lgevents, 
    github: "https://github.com/VenkateshLatchireddy/LG-EVENTS",
    demo: "https://lakshmi-ganapathi-events.vercel.app/",
  },
    {
    title: "Events Hub",
    description: "A MERN stack-powered event management application designed to handle event browsing, user registrations, and seat availability efficiently. Features secure JWT authentication, complete CRUD for managing events with real-time capacity updates, and a dynamic dashboard interface. Built with React, Node.js, and MongoDB to ensure scalable data handling and a seamless user experience.",
    tech: ["React", "Node.js", "Mongo DB","Express.js"],
    image: eventshub, 
    github: "https://github.com/VenkateshLatchireddy/EventHub",
    demo: "https://event-hub-alpha-lemon.vercel.app/",
  },
      {
    title: "Sky Clothing",
    description: "A MERN stack-powered e-commerce platform designed to handle product browsing, cart management, and order processing efficiently. Features secure JWT authentication, complete CRUD for products with stock tracking, and email notifications using Nodemailer and SendGrid. Built with React, Node.js, and MongoDB to ensure scalable data handling and a seamless checkout experience.",
    tech: ["React", "Node.js", "Mongo DB","Express.js"],
    image: skyclothing, 
    github: "https://github.com/VenkateshLatchireddy/clothing-ecommerce",
    demo: "https://clothing-ecommerce-dusky.vercel.app/",
  },
      {
    title: "SignalAI News",
    description:"A multilingual AI-powered news platform delivering real-time updates, personalized feeds, and seamless browsing. Built with the MERN stack, featuring JWT authentication, role-based access, live news integration, and a fast, responsive newspaper-style UI crafted with React and modern CSS." ,
    tech: ["React", "Tailwind CSS","Context API","TypeScript",],
    image: signalainews, 
    github: "https://github.com/VenkateshLatchireddy/SignalAI-News",
    demo: "https://signalai-news-by-venkatesh.netlify.app/",
  },
   {
    title: "Milkdash",
    description: "A React.js-powered dairy management system designed to track milk production, sales, and distribution efficiently. Features secure admin authentication, full CRUD capabilities for managing products and pricing, and a smooth, dynamic interface. Built with React and MySQL to ensure reliable data handling and a seamless user experience.",
    tech: ["React", "Node.js", "MySQL","Express.js","Flexbox"],
    image: milkdash, 
    github: "https://github.com/VenkateshLatchireddy/MILKDASH.git",
    demo: "https://milkdash-by-venkatesh.netlify.app/",
  },
    {
      title: "Jobby App",
      description: "A full-featured job search platform built with React, offering seamless browsing of job listings, detailed job views, and secure user login. Integrated JWT authentication, protected routes, and persistent sessions using React Router and local storage. Designed with clean UI components and efficient REST APIs for a smooth, responsive job-finding experience.",
      tech: ["React", "Bootstrap","JWT Token,"],
      image: jobby,
      github: "https://github.com/VenkateshLatchireddy/Jobby-App.git",
      demo: "https://lachireddi.ccbp.tech/login",
    },
    {
      title: "Foodieland",
      description: "A visually engaging and responsive frontend application inspired by Foodieland UI, built with reusable React components and smooth client-side routing. Designed dynamic content rendering, intuitive state management, and flexible layouts to deliver a modern, polished user experience across all devices.",
      tech:["React + Vite", "Bootstrap","Component Architecture"], 
      image: foodieland,
      github: "https://github.com/VenkateshLatchireddy/Foodieland.git",
      demo: "https://symfor-foodieland.netlify.app/",
    },
    {
      title: "Nxt Trendz",
      description: "A modern e-commerce platform inspired by Amazon and Flipkart, featuring secure user login, product listings, and detailed product pages. Built with React Router and reusable components, integrated JWT-based authentication, and powered by efficient REST APIs for a fast, reliable shopping experience.",
      tech: ["React + Vite", "Bootstrap","Flexbox"],
      image: nxt,
      github: "https://github.com/VenkateshLatchireddy/Enhancement-of-Nxt-Trendz---Payment",
      demo: "https://lnxttrendz.ccbp.tech/",
    },
    {
      title: "Jobstation",
      description: "A job listing portal that enables employers to securely post and manage job openings. Built with React and Sequelize, featuring authentication and authorization for protected employer access, along with a clean, intuitive interface for adding and organizing job details efficiently.",
      tech: ["React + Vite", "Bootstrap","CSS","MySQL"],
      image: jobstation,
      github: "https://github.com/VenkateshLatchireddy/job-listing-portal-live.git",
      demo: "https://job-listing-portal-by-venkatesh.netlify.app/",
    },
    
  ];

  const techColors = {
    React: "#61DAFB",
    "Node.js": "#339933",
    MongoDB: "#47A248",
    Express: "#000000",
    "Socket.io": "#010101",
    PostgreSQL: "#336791",
    Bootstrap: "#7952B3",
    "Weather API": "#00C9FF",
    "Chart.js": "#FF6384",
    "D3.js": "#F9A03C",
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
         <div className="text-center mb-5">
  <h2 className="display-5 fw-bold mb-2" style={{ color: "#2d3748" }}>
    <span>Featured </span>
    <span
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Projects
    </span>
  </h2>

  <div
    style={{
      height: "4px",
      width: "120px",
      background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "8px",
      margin: "0 auto",
    }}
  ></div>
</div>

          <p className="lead" style={{ color: "#4a5568" }}>
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={project.title} className="col-lg-4 col-md-6">
              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  transition: `all 0.3s ease ${index * 0.2}s`,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  opacity: isVisible ? 1 : 0,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 20px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    borderRadius: "20px 20px 0 0",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body p-4">
                  <h5
                    className="card-title fw-bold mb-3"
                    style={{ color: "#2d3748" }}
                  >
                    {project.title}
                  </h5>
                  <p className="card-text mb-3" style={{ color: "#4a5568" }}>
                    {project.description}
                  </p>
                  <div className="mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="badge me-2 mb-1 px-2 py-1"
                        style={{
                          background: techColors[tech] || "#764ba2",
                          color: "white",
                          fontSize: "0.8rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                  {project?.github ?
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm flex-fill"
                      style={{
                        borderRadius: "25px",
                        textDecoration: "none",
                      }}
                    >
                      <Github size={16} className="me-1" />
                      Code
                    </a>:
                    <div className="w-50"> </div>} 
                  {project.demo && <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm flex-fill"
                      style={{
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        border: "none",
                        color: "white",
                        borderRadius: "25px",
                        textDecoration: "none",
                      }}
                    >
                      <ExternalLink size={16} className="me-1" />
                      Demo
                    </a>}
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
