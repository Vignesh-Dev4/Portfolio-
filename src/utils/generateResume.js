import jsPDF from 'jspdf';

export const generateResumePDF = () => {
    const doc = new jsPDF();

    // Set font sizes and colors
    const primaryColor = [37, 99, 235]; // Blue
    const textColor = [51, 51, 51]; // Dark gray
    const lightGray = [107, 114, 128];

    let yPos = 20;

    // Header - Name
    doc.setFontSize(24);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('VIGNESH S', 105, yPos, { align: 'center' });

    // Contact Info
    yPos += 8;
    doc.setFontSize(10);
    doc.setTextColor(...lightGray);
    doc.setFont('helvetica', 'normal');
    const contactInfo = 'vigneshsivaji8@gmail.com | +91 9360657174 | Dharmapuri, Tamil Nadu 636810';
    doc.text(contactInfo, 105, yPos, { align: 'center' });

    // Line separator
    yPos += 5;
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.5);
    doc.line(20, yPos, 190, yPos);

    // Professional Summary
    yPos += 10;
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL SUMMARY', 20, yPos);

    yPos += 7;
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const summary = 'Motivated Full Stack Developer with 6 months of internship experience in web development. Proficient in front-end and back-end technologies including HTML, CSS, JavaScript, and MySQL. Demonstrated ability to build user-friendly and scalable web applications. Strong problem-solving skills with a passion for creating efficient solutions and enhancing user experiences.';
    const summaryLines = doc.splitTextToSize(summary, 170);
    doc.text(summaryLines, 20, yPos);
    yPos += summaryLines.length * 5;

    // Technical Skills
    yPos += 8;
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('TECHNICAL SKILLS', 20, yPos);

    yPos += 7;
    doc.setFontSize(10);
    doc.setTextColor(...textColor);

    const skills = [
        { label: 'Programming Languages:', value: 'Java, C++, Python, JavaScript (ES6+)' },
        { label: 'Frontend Technologies:', value: 'React.js, HTML5, CSS3, Bootstrap, Tailwind, Redux, React Router' },
        { label: 'Backend Technologies:', value: 'Node.js, SpringBoot, RESTful APIs' },
        { label: 'Databases:', value: 'SQL, MySQL, MS Access' },
        { label: 'Tools & Platforms:', value: 'Git, GitHub, Postman, Jira, VS Code' },
        { label: 'Operating Systems:', value: 'Microsoft Windows, Linux' },
        { label: 'Development Concepts:', value: 'RESTful APIs, JWT Authentication, Responsive Design, MVC Architecture' },
        { label: 'Soft Skills:', value: 'Problem Solving, Debugging, Team Collaboration, Communication' }
    ];

    skills.forEach(skill => {
        doc.setFont('helvetica', 'bold');
        doc.text(skill.label, 20, yPos);
        doc.setFont('helvetica', 'normal');
        const skillLines = doc.splitTextToSize(skill.value, 145);
        doc.text(skillLines, 65, yPos);
        yPos += Math.max(skillLines.length * 5, 6);
    });

    // Professional Experience
    yPos += 5;
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL EXPERIENCE', 20, yPos);

    yPos += 7;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...textColor);
    doc.text('Full Stack Developer Intern (React + REST API)', 20, yPos);

    yPos += 5;
    doc.setFontSize(10);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'normal');
    doc.text('Mak INFOTECH solution | Onsite', 20, yPos);
    doc.setTextColor(...lightGray);
    doc.text('2025 - 2026 (6 Months)', 190, yPos, { align: 'right' });

    yPos += 5;
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'italic');
    doc.text('Project: ALGO Trading', 20, yPos);

    yPos += 5;
    doc.setFont('helvetica', 'normal');
    const expDesc = 'Developed a responsive Algo Trading dashboard UI using React.js, Tailwind CSS, and React Router for smooth navigation across trading modules. Implemented Redux state management to handle live market data, user interactions, and trading UI updates efficiently.';
    const expLines = doc.splitTextToSize(expDesc, 170);
    doc.text(expLines, 20, yPos);
    yPos += expLines.length * 5;

    yPos += 3;
    doc.setFont('helvetica', 'bold');
    doc.text('Key Achievements:', 20, yPos);
    yPos += 5;
    doc.setFont('helvetica', 'normal');

    const achievements = [
        'Built responsive Algo Trading dashboard with React.js and Tailwind CSS',
        'Implemented Redux for efficient state management of live market data',
        'Integrated REST APIs for real-time trading data display',
        'Optimized loading and error handling for better user experience'
    ];

    achievements.forEach(achievement => {
        const achLines = doc.splitTextToSize('• ' + achievement, 165);
        doc.text(achLines, 25, yPos);
        yPos += achLines.length * 5;
    });

    // Add new page for projects
    doc.addPage();
    yPos = 20;

    // Projects
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('PROJECTS', 20, yPos);

    // Project 1
    yPos += 7;
    doc.setFontSize(11);
    doc.setTextColor(...textColor);
    doc.text('E-Commerce Platform (MERN Stack)', 20, yPos);

    yPos += 5;
    doc.setFontSize(10);
    doc.setTextColor(...lightGray);
    doc.setFont('helvetica', 'italic');
    doc.text('Duration: 2 Months', 20, yPos);

    yPos += 5;
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const proj1Desc = 'Built a Full-Stack E-commerce web app using React.js, Node.js/Express.js, MongoDB with Redux for cart, auth, and product state management. Developed REST APIs (CRUD, orders, authentication) with JWT-based role access, responsive UI, and reusable React components. Added Search + Filters + Pagination + Sorting, Stripe payment simulation, admin panel, and improved performance using MongoDB indexing (40% faster responses).';
    const proj1Lines = doc.splitTextToSize(proj1Desc, 170);
    doc.text(proj1Lines, 20, yPos);
    yPos += proj1Lines.length * 5;

    yPos += 3;
    doc.setFont('helvetica', 'bold');
    doc.text('Technologies:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text('React.js, Node.js, MongoDB, Redux, Express.js, JWT, Stripe', 50, yPos);

    // Project 2
    yPos += 10;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Task Manager Application (MERN Stack)', 20, yPos);

    yPos += 5;
    doc.setFontSize(10);
    doc.setTextColor(...lightGray);
    doc.setFont('helvetica', 'italic');
    doc.text('Duration: 1.5 Months', 20, yPos);

    yPos += 5;
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const proj2Desc = 'Built a full-stack Task Management System using React.js, Express.js REST API, MongoDB, and Redux Toolkit for task state, filters, and preferences. Implemented JWT authentication, user-based task isolation, drag-and-drop task reordering (React DnD), and responsive UI with Material-UI. Added Search + Filter with debouncing, deadline alerts using Node Cron, and a dashboard with task stats and progress metrics.';
    const proj2Lines = doc.splitTextToSize(proj2Desc, 170);
    doc.text(proj2Lines, 20, yPos);
    yPos += proj2Lines.length * 5;

    yPos += 3;
    doc.setFont('helvetica', 'bold');
    doc.text('Technologies:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text('React.js, Node.js, MongoDB, Redux Toolkit, Material-UI, JWT', 50, yPos);

    // Project 3 - Weather App
    yPos += 10;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...textColor);
    doc.text('Weather App', 20, yPos);

    yPos += 5;
    doc.setFontSize(10);
    doc.setTextColor(...lightGray);
    doc.setFont('helvetica', 'italic');
    doc.text('Duration: 1 Month', 20, yPos);

    yPos += 5;
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const proj3Desc = 'Built a responsive Weather Application using React.js and Tailwind CSS with real-time weather data integration. Implemented OpenWeather API to fetch current weather conditions, 5-day forecasts, and location-based weather updates. Features include dynamic weather icons, temperature unit conversion (Celsius/Fahrenheit), city search functionality, and responsive design optimized for all devices.';
    const proj3Lines = doc.splitTextToSize(proj3Desc, 170);
    doc.text(proj3Lines, 20, yPos);
    yPos += proj3Lines.length * 5;

    yPos += 3;
    doc.setFont('helvetica', 'bold');
    doc.text('Technologies:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text('React.js, Tailwind CSS, OpenWeather API, Fetch API', 50, yPos);

    // Education
    yPos += 10;
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('EDUCATION', 20, yPos);

    yPos += 7;
    doc.setFontSize(11);
    doc.setTextColor(...textColor);
    doc.text('Bachelor of Science in Computer Science', 20, yPos);

    yPos += 5;
    doc.setFontSize(10);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'normal');
    doc.text('Periyar University', 20, yPos);
    doc.setTextColor(...lightGray);
    doc.text('2021', 190, yPos, { align: 'right' });

    yPos += 5;
    doc.setTextColor(...textColor);
    doc.text('CGPA: 6.78/10', 20, yPos);

    // Areas of Interest
    yPos += 10;
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('AREAS OF INTEREST', 20, yPos);

    yPos += 7;
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const interests = [
        'Full-Stack Web Development and Modern JavaScript Frameworks',
        'User Experience (UX) Design and Interface Development',
        'RESTful API Design and Integration',
        'Database Optimization and Management',
        'Continuous Learning and Emerging Technologies'
    ];

    interests.forEach(interest => {
        doc.text('• ' + interest, 20, yPos);
        yPos += 6;
    });

    // Declaration
    yPos += 5;
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('DECLARATION', 20, yPos);

    yPos += 7;
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'italic');
    const declaration = 'I hereby declare that all the information provided in this resume is true and accurate to the best of my knowledge.';
    const declLines = doc.splitTextToSize(declaration, 170);
    doc.text(declLines, 20, yPos);

    // Save the PDF
    doc.save('Vignesh_S_Resume.pdf');
};
