import {redact} from './redact_src/redact';

let cv = `
Yasser won the best actress award in 2013.
Yasser is a programmer.
An actress's greatest dream. She is a baroness.
A Mother. A girl in a big world. A waitress working nine till six. 
She was the first woman on the moon.

Marital Status: divorced 

Yasser Shalash
waiter at restaurant
Her residence was in the netherlands where Her her 
He worked as a swain at their restaurant and his brother did too.
Fullstack web developer
Eligible to work in The Netherlands • yasservanshalash@gmail.com • +31685442682 • LinkedIn • Github
Fullstack developer with 9+ years of non-commercial and 1+ years of professional experience in the field. Programming has been a pastime of mine for eight years, but I'm now considering it a career. Thanks to my experience in the industry, I became knowledgeable about technologies like SEO, responsive design, Schema Markup, and Wireframes. Devoted to working in cross-functional teams and offering the best solutions for clients. Able to adapt to new tech stacks, and eager to learn new technologies. Currently working on web applications created with NextJS, Redux, and Tailwind. Willing to relocate and take jobs involving full-stack web development.

Key skills: Creativity, teamwork, patience, empathy, critical thinking, and collaboration skills.
Languages: English (Fluent), Dutch (Intermediate level), Arabic (Native Level).
Frontend Development: TypeScript, JavaScript, SCSS, Bootstrap, HTML, CSS, React.js (CRA/Vite/Next.Js), Redux, Axios, MUI, BEM.
Backend Development: REST, Node.js, Express, PassportJs, MongoDB, Mongoose, PostgreSQL, SQL.
Cloud Services: Bash, CI/CD, docker, actions, Netlify, Vercel, Heroku, EC2, IAM, S3, RDS, Lambda.
Testing: Unit testing, integration testing, Jest.
Other: Figma, Canva, Wordpress, Wix, Shopify, Photoshop.

KEY PROJECTS
BookMe | Tech Lead 2023, Remote
Booking website group project done at Integrify. Working as a team lead of a group of 3 people. Organizing file structures and routes as a boilerplate for the team. The app was built from scratch using technologies such as ReactJS, Redux, TypeScript, and Material UI, NodeJs, ExpressJs, PassportJs, MongoDB, and Mongoose.

Betsy | Full Stack web developer 2023, Remote
E-commerce website built from scratch with functionalities like favoriting, adding to cart, and ordering products. Tech stack: ReactJS, Redux, TypeScript, and Material UI, NodeJs, ExpressJs, PassportJs, MongoDB, and Mongoose.

ReAble | Junior web developer 2016, Beirut, Lebanon
Money management app for people with special needs built by a small team of 4 where a user can scan a receipt and the app places the order for him/her so they don't have any confusion. The receipts are added to the app's payment page where legal guardians are able to monitor the history of payments.

WORK EXPERIENCE
Software Developer Trainee @ Integrify October 2022 – April 2023 (Remote)
Integrify is a 5-month Full Stack development program.

Gained a solid understanding of the web's functionality & technologies needed to build a fully-fledged app.
Mastered the frontend side of applications using technologies such as React, TypeScript, and Redux.
Learned to build the backend side from scratch with NodeJS, expressJs, MongoDB, and Mongoose.
Gained a better understanding of how team dynamics work by interacting with my team with the SCRUM.
Led multiple teams on different projects throughout the program.
Organized team tasks using Trello and code bases using github.

Junior web developer @ ReAble January 2016 – January 2017 (Beirut, Lebanon)
Fintech startup for people with special needs. (TechStars company)

Learned how the startup ecosystem works.
Worked with an international team of people of different professional backgrounds.
Started every day with SCRUM meetings with the team.
Got exposed to technologies such as the Tesseract OCR.

HONORS & REWARDS
Led a team of 3 people in a hackathon organized by Integrify and Oivan where we won first place.
Was a student of the month 3 times at Integrify.

EDUCATION
Techstars Accelerator, 2016
Le Wagon Beirut: Ruby on Rails Software Development Bootcamp (won a scholarship for studies), 2015-2016
AOU Beirut: ITC BSc Degree, 2014-2015

LinkedIn: https://www.linkedin.com/in/yassershalash/
GitHub: https://github.com/yasservanshalash/
BookMe Project: https://bookme-m0zg.onrender.com/
Betsy Project: https://betsy-frontend.onrender.com/
Instagram: https://www.instagram.com/wearereable/
`;

let name = "Yasser Shalash";

let new_cv:string = redact(cv, name);

// console.log("Original: " + cv);
console.log("Redacted:\n" + new_cv);