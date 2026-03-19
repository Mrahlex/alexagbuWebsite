// ===== PORTFOLIO DATA =====
// Edit this file to update your portfolio content easily

const portfolioData = {
    // Experience Timeline
    experience: [
        {
            title: "Data Quality Analyst",
            company: "Notting Hill Genesis",
            location: "London, UK",
            period: "May 2025 - Present",
            description: "Leading data quality initiatives for a major housing association serving 130,000+ residents. Designing property hierarchy mappings, automating data quality rules, and building compliance-ready dashboards in Power BI and SSRS.",
            tags: ["SQL", "Power BI", "SSRS", "Data Governance", "T-SQL"]
        },
        {
            title: "AI Data Trainer",
            company: "Invisible Technologies",
            location: "California, USA (Remote)",
            period: "May 2024 - April 2025",
            description: "Enhanced Large Language Model (LLM) performance through advanced prompt engineering and Reinforcement Learning with Human Feedback (RLHF). Achieved significant improvements in context relevance and response accuracy while developing protocols to minimize harmful content.",
            tags: ["AI/ML", "Prompt Engineering", "RLHF", "LLMs", "Python"]
        },
        {
            title: "Junior Data Scientist",
            company: "Notting Hill Genesis",
            location: "London, UK",
            period: "Jan 2024 - May 2024",
            description: "Spearheaded machine learning initiative to predict tenant arrears risk, achieving 5% reduction through early intervention. Developed NLP model for tenant complaint analysis, improving customer satisfaction scores by 10%. Built ArrearsRadar real-time web application.",
            tags: ["Machine Learning", "NLP", "Python", "Predictive Analytics", "Web Development"]
        },
        {
            title: "Lead Data Analyst",
            company: "Bionic Owls C-Corps",
            location: "Pennsylvania, USA (Remote)",
            period: "Mar 2022 - Aug 2023",
            description: "Increased community retention by 23% through detailed churn analysis and Python-based statistical growth models. Grew community engagement to 50,000+ active users across platforms, boosting NFT sales. Created real-time dashboards for KPI tracking.",
            tags: ["Python", "Data Analysis", "Statistical Modeling", "Dashboards", "Community Analytics"]
        },

        {
            title: "Data Scientist",
            company: "National Space Research and Development Agency",
            location: "Nigeria",
            period: "Aug 2018 - Dec 2022",
            description: "Led satellite image analysis projects providing critical data for governmental decision-making on environmental challenges. Extracted and analyzed large-scale geospatial datasets for climate and urban development projects. Trained stakeholders on geospatial tools monthly.",
            tags: ["Geospatial Analysis", "Remote Sensing", "ArcGIS", "ENVI", "Python", "Training"]
        }
    ],

    // Skills organized by category
    skills: [
        {
            category: "Data Science & ML",
            icon: "🤖",
            items: ["Python", "R", "Machine Learning", "NLP", "Statistical Analysis", "Predictive Modeling", "Deep Learning"]
        },
        {
            category: "Data Quality",
            icon: "⚙️",
            items: ["SQL", "PostgreSQL", "T-SQL", "ETL Pipelines", "Data Warehousing", "Data Quality", "Data Governance"]
        },
        {
            category: "Visualization & BI",
            icon: "📊",
            items: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "SSRS", "Dashboard Design", "Data Storytelling"]
        },
        {
            category: "Cloud & Tools",
            icon: "☁️",
            items: ["Azure", "MSSQL", "Oracle Cloud", "Git", "Jupyter", "VS Code"]
        },
        {
            category: "Geospatial Tech",
            icon: "🗺️",
            items: ["ArcGIS", "ERDAS IMAGINE", "ENVI", "Google Earth Pro", "Satellite Imagery", "Remote Sensing"]
        },
        {
            category: "Soft Skills",
            icon: "💡",
            items: ["Teaching", "Mentoring", "Technical Writing", "Presentation", "Stakeholder Management", "Problem Solving"]
        }
    ],

    // Featured Projects
    projects: [
        {
            title: "Tenant Arrears Prediction Model",
            description: "Built an AdaBoost machine learning model achieving 5% reduction in tenant arrears for 130,000+ residents at Notting Hill Genesis. Published findings in IEEE conference proceedings.",
            tech: ["Python", "AdaBoost", "Scikit-learn", "Pandas", "Machine Learning"],
            icon: "📈",
            link: null
        },
        {
            title: "ArrearsRadar - Real-Time Dashboard",
            description: "Developed a real-time web application empowering housing managers with data-driven insights for proactive arrears management and tenant support.",
            tech: ["Python", "Flask", "JavaScript", "Chart.js", "SQL"],
            icon: "🎯",
            link: null
        },
        {
            title: "Stock Numbers Dashboard",
            description: "Comprehensive Power BI dashboard consolidating property and communal asset data from NEC and Integrator systems, providing unified view of 68,000+ properties with data quality transparency.",
            tech: ["Power BI", "SQL", "DAX", "Power Query", "Data Governance"],
            icon: "🏢",
            link: null
        },
        {
            title: "Community Growth Analytics",
            description: "Python-based statistical models and churn analysis that increased community retention by 23% and grew engagement to 50,000+ users across blockchain gaming platform.",
            tech: ["Python", "Statistical Modeling", "Data Analysis", "Visualization"],
            icon: "📊",
            link: null
        },
        {
            title: "NLP Complaint Analysis",
            description: "Natural Language Processing model analyzing tenant complaints to identify patterns and improve response strategies, resulting in 10% improvement in customer satisfaction scores.",
            tech: ["Python", "NLP", "NLTK", "Machine Learning", "Text Analytics"],
            icon: "💬",
            link: null
        },
        {
            title: "Satellite Image Analysis Platform",
            description: "Led geospatial analysis projects for environmental monitoring and urban planning using satellite imagery, providing critical insights for governmental decision-making.",
            tech: ["ArcGIS", "ENVI", "Python", "Remote Sensing", "Geospatial Analysis"],
            icon: "🛰️",
            link: null
        }
    ],

    // Publications
    publications: [
        {
            type: "Journal Article",
            title: "Software tool to store IoT device data onto a blockchain",
            authors: "Alexander Agbu, Dr. Opeyemi Adamson Oloyede, Nicolas Lopez, et al",
            venue: "Data in Brief, Volume 16, May 2023, Elsevier",
            year: "2023",
            link: "https://www.sciencedirect.com/science/article/pii/S2665963823000489",
            doi: "10.1016/j.simpa.2023.100511"
        },
        {
            type: "Journal Article",
            title: "Upper-air meteorological dataset for Uyo, using radiosonde",
            authors: "Alexander Agbu, Dr. Opeyemi Adamson Oloyede, Nicolas Lopez, Prof. Simeon Ozuomba, et al",
            venue: "Software Impacts, Volume 46, February 2023, Elsevier",
            year: "2023",
            link: "https://www.sciencedirect.com/science/article/pii/S2352340923000227",
            doi: "10.1016/j.dib.2023.108904"
        },
        {
            type: "Conference Paper",
            title: "Housing Arrears Prediction Using Machine Learning: A Case Study",
            authors: "Alexander Agbu, Dr. Opeyemi Adamson Oloyede, Anthony Ifeanyi Okenwa, Benita Chidinma Nnah",
            venue: "International Journal of Basic and Applied Research ",
            year: "2021",
            link: "https://www.gssrr.org/index.php/JournalOfBasicAndApplied/article/view/11915"
        },
        {
            type: "Journal Article",
            title: "Application And Performance Evaluation Of Artificial Immune System-Negative Selection Algorithm For Anomalies Detection In Distributed Sensor Networks",
            authors: "Dr. Bliss Utibeabasi Stephen, Alexander Agbu, Ofonime Dominic Okon",
            venue: "Journal of Multidisciplinary Engineering Science Research (JMESR)",
            year: "2022",
            link: "http://www.jmesr.co.uk/wp-content/uploads/2022/11/JMESRN42350043.pdf"
        }
    ],

    // Blog Posts (placeholder - update with actual blog posts)
    blog: [
        {
            title: "Why SQL Became My Go-To Tool for Data Quality Work",
            date: "Feb 2026",
            category: "Career Insights",
            excerpt: "Reflecting on transitioning from Python-heavy workflows to SQL-intensive projects and discovering the unique strengths of each tool in data work.",
            link: "https://medium.com/@alexanderagbu/why-sql-became-my-go-to-tool-for-data-quality-work-906bfb203d39"
        },
        {
            title: "My thoughts on Data Science",
            date: "Aug 2024",
            category: "Data Science",
            excerpt: "Data science is more than just crunching numbers — it’s the art of turning raw data into valuable insights that drive real-world decisions",
            link: "https://medium.com/@alexanderagbu/my-thoughts-on-data-science-d1cf75f54c9e"
        },
        {
            title: "Becoming Better and helping Someone Along the way",
            date: "January 2024",
            category: "Personal Development",
            excerpt: "I have embarked on a journey to enhance my skills in my chosen field. I’ve realized that I often neglect to document my learning process and skills development.",
            link: "https://medium.com/@alexanderagbu/becoming-better-and-helping-someone-along-the-way-b37f4352f02b"
        }
    ]
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
