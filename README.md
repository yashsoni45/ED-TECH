

# ED-TECH

**ED-TECH** is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. Built using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS), the platform provides a seamless and interactive learning experience for students and a space for instructors to showcase their expertise.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Front-end](#front-end)
- [Back-end](#back-end)
- [API Design](#api-design)
- [Deployment](#deployment)
- [Testing](#testing)
- [Future Enhancements](#future-enhancements)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

StudyNotion is designed to make education more accessible and engaging. It offers students a rich, interactive learning experience and allows instructors to connect with learners worldwide. The platform includes functionalities like user authentication, course creation and management, media content handling, and payment integration.

## Features

- **User Authentication and Authorization**: Secure login, registration, and OTP verification.
- **Course Management**: Instructors can create, update, delete, and manage course content.
- **Payment Integration**: Secure checkout process using Razorpay.
- **Cloud-based Media Management**: Store and manage media content using Cloudinary.
- **Responsive UI**: Built with ReactJS, Tailwind CSS, and other modern front-end technologies.
- **RESTful API**: Robust backend APIs built with Node.js and Express.js.

## System Architecture

StudyNotion follows a client-server architecture with three main components:

1. **Front-end**: ReactJS-based dynamic and responsive user interface.
2. **Back-end**: Node.js and Express.js-based server-side application.
3. **Database**: MongoDB for flexible and scalable data storage.

![System Architecture Diagram](link-to-architecture-diagram)

## Front-end

The front-end of StudyNotion is designed using ReactJS and Tailwind CSS, ensuring a clean and minimal user interface. Key pages include:

### For Students:

- **Homepage**: Introduction and links to courses.
- **Course List**: Browse available courses with descriptions and ratings.
- **Wishlist**: Manage desired courses.
- **Cart Checkout**: Complete the purchase of courses.
- **Course Content**: Access videos and other course materials.
- **User Details/Edit Details**: Manage personal account information.

### For Instructors:

- **Dashboard**: Overview of courses and feedback.
- **Insights**: Detailed metrics on course performance.
- **Course Management**: Create, update, and delete courses.
- **Profile Management**: View and edit account details.

### For Admin (Future Scope):

- **Admin Dashboard**: Overview of platform metrics and user management.

Figma Design: [StudyNotion Figma Design](https://www.figma.com/file/Mikd0FjHKAofUlWQSi70nf/StudyNotion_shared)

## Back-end

The back-end architecture is monolithic, built with Node.js, Express.js, and MongoDB. Key features include:

- **User Authentication**: JWT and Bcrypt for secure login.
- **Course Management**: CRUD operations for courses.
- **Payment Integration**: Razorpay for handling transactions.
- **Media Management**: Cloudinary for managing images, videos, and documents.
- **Data Models**: Structured schemas for students, instructors, and courses.

## API Design

StudyNotion’s API follows REST principles, using JSON for data exchange. Key endpoints include:

- **User Authentication**: `/api/auth/signup`, `/api/auth/login`, `/api/auth/verify-otp`, `/api/auth/forgot-password`
- **Course Management**: `/api/courses`, `/api/courses/:id`, `/api/courses/:id/rate`

Sample API Requests and Responses are detailed in the documentation.

## Deployment

The deployment of StudyNotion involves:

- **Front-end**: Deployed on [Vercel](https://vercel.com/).
- **Back-end**: Hosted on [Render](https://render.com/) 
- **Media Storage**: Managed by [Cloudinary](https://cloudinary.com/).
- **Database**: Hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

The deployment process ensures scalability, security, and reliability across all components.

## Testing

The platform has undergone rigorous testing to ensure reliability and performance. Key types of testing include:

- **Unit Testing**: For individual components and functions.
- **Integration Testing**: Ensuring that different modules interact as expected.
- **End-to-End Testing**: Full application workflow testing.
- **Tools Used**: Jest, Mocha, and Chai.

## Future Enhancements

Potential future enhancements to StudyNotion include:

- **Admin Features**: Enhanced control over users and courses.
- **AI-Powered Recommendations**: Personalized course recommendations for users.
- **Gamification**: Introducing badges and achievements to increase engagement.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js installed on your machine
- MongoDB setup and running

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yashsoni45/ED-TECH.git
   ```
2. Navigate to the project directory:
   ```sh
   cd ED-TECH
   ```
3. Install dependencies for the front-end:
   ```sh
   cd client
   npm install
   ```
4. Install dependencies for the back-end:
   ```sh
   cd server
   npm install
   ```
5. Set up environment variables for the backend in a `.env` file (refer to `.env.example` for guidance).
6. Start the development server:
   ```sh
   npm run dev
   ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact



Project Link: [https://github.com/yashsoni45/ED-TECH](https://github.com/yashsoni45/ED-TECH)

