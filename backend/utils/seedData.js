const User = require('../models/User');
const Job = require('../models/Job');
const Blog = require('../models/Blog');

const seedData = async () => {
  try {
    // Check if data already exists
    const userCount = await User.countDocuments();
    const jobCount = await Job.countDocuments();
    const blogpostCount = await Blog.countDocuments();

    if (userCount > 0 || jobCount > 0 || blogpostCount > 0) {
      console.log('Database already seeded. Skipping seed operation.');
      return;
    }

    // Create test user
    const user = await User.create({
      username: 'Test User',
      email: 'test@example.com',
      password: 'Password@123',
      role: 'admin'
    });

    // Create sample jobs
    await Job.create([
      {
        title: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        location: "San Francisco, CA",
        salary: "$130,000 - $160,000",
        employmentType: "Full-time",
        description: "We're seeking an experienced Full Stack Developer to join our growing team.",
        requirements: [
          "7+ years of software development experience",
          "Strong proficiency in React, Node.js, and TypeScript"
        ],
        postedBy: user._id
      },
      {
        title: "Product Marketing Manager",
        company: "InnovateMark",
        location: "New York, NY",
        salary: "$90,000 - $120,000",
        employmentType: "Full-time",
        description: "Join our marketing team to develop and execute product marketing strategies.",
        requirements: [
          "5+ years of product marketing experience",
          "Strong analytical and communication skills"
        ],
        postedBy: user._id
      }
    ]);

    // Create sample blog posts
    await Blog.create([
      {
        title: "Getting Started with Web Development",
        content: "A comprehensive guide for beginners...",
        author: user._id,
        tags: ["Web Development", "Programming"],
        status: "published",
        slug: "getting-started-web-development"
      },
      {
        title: "Career Tips for Software Engineers",
        content: "Essential tips for advancing your career...",
        author: user._id,
        tags: ["Career", "Software Engineering"],
        status: "published",
        slug: "career-tips-software-engineers"
      }
    ]);

    console.log('Sample data seeded successfully');
    console.log('Test user credentials:');
    console.log('Email: test@example.com');
    console.log('Password: Password@123');
  } catch (error) {
    console.error('Error seeding data:', error);
    throw error;
  }
};

module.exports = seedData;