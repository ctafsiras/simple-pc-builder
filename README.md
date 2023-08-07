# Live Link: https://simple-pc-builder.vercel.app

# Simple PC Builder Website using Next.js - ReadMe

This ReadMe provides an overview of the Simple PC Builder website project, its features, and instructions on how to run the project.

## Project Overview

The PC Builder website is a web application built using Next.js, a React framework for server-side rendering and static site generation. The website allows users to browse and select PC components to build their own custom PC. It features a PC Builder tool where users can add selected PC components and create their desired configuration.

### Features

1. **Navbar**: The website's navigation bar includes a "PC Builder" button that redirects users to the PC Builder page. It also contains a "Categories" dropdown with various PC component categories.

2. **Home Page**: The home page displays at least six randomly selected Featured Products. Each featured product card shows essential details like image, product name, category, price, stock status, and rating. Clicking on a featured product takes the user to the product detail page.

3. **Featured Category Sections**: The home page also has six Featured Category Sections. Each section is clickable and redirects users to a page displaying at least three products of that specific category.

4. **Product Detail Page**: The product detail page displays in-depth information about a PC component, including image, product name, category, stock status, price, description, key features, individual rating, average rating, and user reviews.

5. **PC Builder Page**: The PC Builder page allows users to build their custom PC by selecting PC components. The page includes sections for CPU, motherboard, RAM, power supply unit, storage device, and monitor. Users can click on the "Choose/Select" button to view and add at least three components of each category. The added components are displayed below the respective sections. The "Complete Build" button becomes active when the user selects at least 5-6 components.

6. **Protected Route**: The PC Builder page is a protected/private route, accessible only to logged-in users. User authentication is implemented using NextAuth with at least one social login provider (Google/Github).

7. **Success Alert**: Clicking the "Complete Build" button displays a success alert, confirming the successful build of the custom PC.

8. **Responsive Design**: The entire application is responsive and optimized for both mobile and desktop devices.

## How to Run the Project

Follow the steps below to run the PC Builder website project locally:

### Prerequisites

1. Node.js and npm must be installed on your machine.

### Steps

1. Clone the repository: `git clone https://github.com/ctafsiras/simple-pc-builder`
2. Navigate to the project directory: `cd simple-pc-builder`
3. Install dependencies: `npm install`
4. Set up environment variables: Create a `.env` file in the root directory and define the required environment variables (e.g., API keys for social logins).
5. Run the development server: `npm run dev`
6. Open your web browser and visit `http://localhost:3000` to access the PC Builder website.

### Deploying the Project

To deploy the project to a production server, follow the deployment guidelines for Next.js applications.

## Additional Notes

- The project includes unit tests and integration tests to ensure code quality and functionality.
- The website's hero section and footer are included for better user experience and navigation.

## Contributions

Contributions to the project are welcome. If you find any issues or have suggestions for improvements, feel free to submit a pull request or create an issue.

## License

The PC Builder website project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

This concludes the ReadMe for the Simple PC Builder website project. Feel free to reach out if you have any questions or need further assistance. Happy coding! 🚀