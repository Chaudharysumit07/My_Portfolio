import React, { useState, useEffect } from 'react';

// --- Helper Data ---
// In a real app, you might fetch this from a CMS or API
const profile = {
  name: 'Sumit Kumar Chaudhary',
  title: 'Software Development Engineer (he/him) ',
  title2: 'M.Tech CSE IIT Kanpur(2024)',
  email: 'chaudharysumit130@gmail.com',
  imageUrl: './sumit_photo.png',
  background: './convocation.jpeg',
  about: "SDE-1 at C3iHub and M.Tech CSE graduate from IIT Kanpur. I build and deploy scalable, production-ready AI and backend systems.My passion is bridging the gap between advanced machine learning models and robust, high-performance software. As a software engineer, I don't just build models; I ship them. In my current role, I have hands-on experience engineering a Generative AI tool from the ground up, moving it from a RAG pipeline concept to a fully deployed, scalable microservice.",
  resumeUrl: '/Sumit_Resume_sde_1311.pdf', // Path to your resume PDF
  socials: {
    github: 'https://github.com/Chaudharysumit07/',
    twitter: '#',
    linkedin: 'https://www.linkedin.com/in/sumitchaudhary14/',
  }
};

const experiences = [
  {
    role: 'Software Development Engineer 1',
    company: 'C3iHub ',
    period: '2024 - Present',
    description: ['Architected and deployed a Generative AI assessment microservice using Docker and FastAPI, supporting policy compliance analysis with a Retrieval-Augmented Generation (RAG) pipeline',
        'Reduced manual assessment time by 80% and achieved >85% accuracy in compliance detection by leveraging semantic search and text embeddings for analyzing unstructured documents',
        'Designed and owned the end-to-end data workflow, creating robust API contracts for asynchronous document ingestion, real-time status tracking, and structured JSON output for the frontend.'
    ]
  },
  {
    role: 'Research Scholar Intern',
    company: 'Center for Developing Intelligent Systems(CDIS) IIT-KANPUR',
    period: 'Jan\'24 - Mar\'24',
    description: [
        'Developed a retrieval-augmented generation (RAG) pipeline in Python to answer natural language questions over a custom knowledge base (e.g., research papers).',
        'Utilized sentence-transformer models for creating dense vector embeddings and implemented a FAISS vector index for highly efficient semantic search and retrieval.'
    ]  }
];

const education = [
  {
    degree: 'Master of Technology(M.Tech), CSE',
    institution: 'IIT Kanpur',
    period: '2022 - 2024',
    description: 'Thesis focused on applying machine learning techniques for network intrusion detection in cybersecurity.'
  },
   {
    degree: 'Bachelor of Technology, CSE',
    institution: 'MMMUT Gorakhpur',
    period: '2017 - 2021',
    description: 'Graduated with honors, active member of the university coding club.'
  }
];

const projects = [
  {
    title: 'PolicyBot Auditor',
    description: 'An AI tool to assist auditors in analyzing  multiple policy documents at once and generates answers to question using a local open source LLM to ensure data privacy with proper explanation and source tagging',
    tags: ['Python','NLP', 'Gen AI','LLM', 'FastAPI', 'Cybersecurity']
  },
  {
    title: 'DeceptiSense: Cyber Attack Pattern Recognition (M.Tech Thesis)',
    description: 'Engineered a scalable, end-to-end data pipeline in Python to process and analyze real-time malware artifacts capturedfrom Dockerized honeypots',
    tags: ['Python','Docker','Machine Learning' , 'React.js', 'MITRE ATT\&CK',]
  },
  
  {
    title: 'CSCMM  Assessment Tool',
    description: 'Led a 2-person team to design and implement a full-stack Cybersecurity Maturity assessment platform for a Govt. of India Project',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'Express.js', 'REST APIs']
  },
 
  {
    title: 'Predictive Modeling for High-Dimensional Binary Classification',
    description: 'Solved a complex binary classification challenge by building a custom SVM solver using primal gradient descent',
    tags: ['Machine Learning','Gradient Descent Algorithm', 'SVM', 'Logisitic Regression','Python']
  },
   {
    title: 'Kernel InfoTracker: Process and Thread Insights',
    description: 'Designed a character device driver and integrated sysfs for efficient access to process attributes such as ID, priority, command name, parent ID, context switches, as well as thread count, open files, and max stack usage',
    tags: ['C programming','Linux Kernel APIs', 'Device Drivers', 'Sysfs']
  },
  {
    title: 'PCI Device Driver and User-Space Library for CryptoCard Integration',
    description: 'Developed a device driver and user-space library to integrate CryptoCard, a PCI device for data encryption/decryption, into various application scenarios',
    tags: ['C programming','Linux Kernel APIs', 'Device Drivers', 'PCI']
  },
   {
    title: 'The Unified Kill Chain Navigator Tool ',
    description: 'Created an enhanced iteration of the MITRE ATT&CK Navigator tool, centered around The Unified Kill Chain methodology and engineered an advanced attack mapping tool enabling visualization of cyber attack reports, unraveling attack-specific kill chains',
    tags: ['MITRE ATT\&CK', 'Cybersecurity', 'React.js']
  },
  

];

const skills = ['Python','Machine Learning','LLM','Generative AI', 'NLP', 'React.js', 'Node.js', 'PyTorch', 'FastAPI', 'Docker','Streamlit' ,'Micro Services','Cybersecurity', 'SQL', 'Git','API Testing'];

const blogPosts = [
    {
        id: 'post1',
        date: 'November 20, 2025',
        title: 'Visualizing Embeddings with TensorFlow\’s Embedding Projector',
        excerpt: 'Visualizing embeddings in 2D or 3D using techniques like PCA (Principal Component Analysis) using TensorFlow\’s Embedding Projector ',
        imageUrl: 'https://placehold.co/600x400/a3e635/1e293b?text=Embeddings+Visualization',
        blogLink: 'https://www.linkedin.com/posts/sumitchaudhary14_machinelearning-nlp-embeddings-activity-7354022614954070016-9mIa/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH5NBQBomxOIzF9aqJXKm7kmOE677GW6P8'
    },


   
];


// --- SVG Icons ---
const GithubIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);


// --- Reusable Components (defined in one file) ---

const Section = ({ id, title, children }) => (
    <section id={id} className="py-16 md:py-20">
        <h2 className="font-mono text-3xl text-center tracking-widest mb-12">&lt;{title}&gt;</h2>
        {children}
    </section>
);

const NavButton = ({ children, onClick }) => (
    <button onClick={onClick} className="w-full text-center rounded-md bg-black text-white py-3 px-6 font-bold hover:bg-gray-800 transition-all duration-300">
        {children}
    </button>
);

// --- Page Components ---

const HomePage = ({ onNavClick }) => {
    const handleScrollToPortfolio = () => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Hero Section */}
            <div 
                className="relative min-h-screen flex items-center justify-center p-4 md:p-8"
                style={{
                    backgroundImage: `url(${profile.background})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 25%',
                }}
            >
             {/* Background Overlay for Opacity/Dimming */}
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                 <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full max-w-5xl bg-white bg-opacity-80 p-8 rounded-lg shadow-xl">
                    {/* Left Column: Profile */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <img 
                            src={profile.imageUrl} 
                            alt={profile.name} 
                            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-6 shadow-lg"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/f0f0f0/333?text=AI'; }}
                        />
                        <h1 className="font-mono text-2xl md:text-3xl tracking-widest mb-2">&lt;{profile.name}&gt;</h1>
                        <p className="text-lg text-gray-600 mb-2">{profile.title}</p>
                        <p className="text-lg text-gray-600 mb-4">{profile.title2}</p>
                        <a href={`mailto:${profile.email}`} className="rounded-md bg-black text-white py-2 px-8 font-bold hover:bg-gray-800 transition-colors duration-300">Email me</a>
                        <div className="flex space-x-6 mt-6">
                            <a href={profile.socials.github} target="_blank" className="text-gray-500 hover:text-black"><GithubIcon /></a>
                            <a href={profile.socials.linkedin} target="_blank" className="text-gray-500 hover:text-black"><LinkedinIcon /></a>
                        </div>
                    </div>

                    {/* Right Column: About & Nav */}
                    <div className="flex flex-col">
                        <h2 className="font-mono text-3xl md:text-4xl tracking-widest mb-6">&lt;/About Me&gt;</h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            {profile.about}
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center rounded-md bg-black text-white py-3 px-6 font-bold hover:bg-gray-800 transition-all duration-300">Resume</a>
                            <NavButton onClick={handleScrollToPortfolio}>Portfolio</NavButton>
                            <NavButton onClick={() => onNavClick('blog')}>My Blog</NavButton>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Portfolio Section */}
            <div id="portfolio" className="bg-white px-4 md:px-8">
                <div className="container mx-auto max-w-5xl">
                    <Section title="Experience">
                        <div className="relative border-l-2 border-gray-200 pl-8 space-y-12 max-w-3xl mx-auto">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-gray-400 rounded-full border-4 border-white"></div>
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <p className="text-gray-500 mb-2">{exp.company} | {exp.period}</p>
                                    {/* CONDITIONAL RENDERING FOR BULLET POINTS */}
                                    {Array.isArray(exp.description) ? (
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            {exp.description.map((point, pointIndex) => (
                                                <li key={pointIndex}>{point}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-700">{exp.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Section>
                    
                    <Section title="Education">
                        <div className="relative border-l-2 border-gray-200 pl-8 space-y-12 max-w-3xl mx-auto">
                             {education.map((edu, index) => (
                                <div key={index} className="relative">
                                     <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-gray-400 rounded-full border-4 border-white"></div>
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <p className="text-gray-500 mb-2">{edu.institution} | {edu.period}</p>
                                    {/* <p className="text-gray-700">{edu.description}</p> */}
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title="Projects">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title="Skills">
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
                            {skills.map(skill => <span key={skill} className="bg-gray-200 text-gray-800 py-2 px-4 font-medium rounded-full">{skill}</span>)}
                        </div>
                    </Section>

                    <Section title="Recent Posts">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                             {blogPosts.slice(0, 3).map((post) => (
                                <div key={post.id} className="bg-white border rounded-lg overflow-hidden border-gray-200 flex flex-col h-full">
                                    <img src={post.imageUrl} alt={post.title} className="w-full h-40 object-cover" />
                                    <div className="p-6">
                                        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                        <h3 className="text-lg font-bold mb-2 flex-grow">{post.title}</h3>
                                        <button onClick={() => onNavClick('blog')} className="font-bold text-blue-600 hover:underline">Read More &rarr;</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                         <div className="text-center mt-12">
                            <button onClick={() => onNavClick('blog')} className="rounded-md bg-black text-white py-3 px-8 font-bold hover:bg-gray-800 transition-colors duration-300">
                                View All Posts
                            </button>
                        </div>
                    </Section>
                </div>
            </div>
        </>
    );
};

const BlogPage = ({ onNavClick }) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <nav className="container mx-auto p-4 md:p-6 flex justify-between items-center max-w-5xl">
                    <button onClick={() => onNavClick('home')} className="font-mono text-xl font-bold">&lt;{profile.name} /&gt;</button>
                    <button onClick={() => onNavClick('home')} className="text-gray-600 hover:text-black font-semibold rounded-md px-4 py-2 transition-colors">Home</button>
                </nav>
            </header>

            <main className="container mx-auto py-16 px-4 md:px-8 max-w-5xl">
                <h1 className="font-mono text-4xl text-center tracking-widest mb-4">&lt;My Blog&gt;</h1>
                <p className="text-center text-gray-600 mb-12">Thoughts on technology, cybersecurity, and creative coding.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <div key={post.id} id={post.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src={post.imageUrl} 
                                alt={post.title} 
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/ccc/333?text=Image`; }}
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                <h2 className="text-xl font-bold mb-3 flex-grow">{post.title}</h2>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <a href={post.blogLink} target='_blank' className="font-bold text-blue-600 self-start hover:underline mt-auto">Read Article &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

// --- Main App Component ---

export default function App() {
    const [page, setPage] = useState('home'); // 'home' or 'blog'
    
    // This effect runs once when the component mounts to load Tailwind CSS.
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.tailwindcss.com';
        script.async = true;
        document.head.appendChild(script);

        // Optional: cleanup function to remove the script when the component unmounts
        return () => {
            document.head.removeChild(script);
        };
    }, []); // The empty array ensures this effect runs only once.


    const handleNavClick = (targetPage) => {
        setPage(targetPage);
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    return (
        <>
            {/* This <style> tag injects global styles and font imports.
              The 'jsx' and 'global' attributes were removed to fix a React warning,
              as they are specific to frameworks like Next.js and not standard React.
            */}
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&family=Inter:wght@400;700&display=swap');
              body { 
                  font-family: 'Inter', sans-serif; 
                  background-color: #f9fafb; /* bg-gray-50 */
                  color: #1f2937; /* text-gray-800 */
              }
              .font-mono { 
                  font-family: 'Source Code Pro', monospace; 
              }
            `}</style>

            <main>
                {page === 'home' && <HomePage onNavClick={handleNavClick} />}
                {page === 'blog' && <BlogPage onNavClick={handleNavClick} />}
            </main>
        </>
    );
}

