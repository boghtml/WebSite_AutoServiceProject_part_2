# Website for AutoService

## Introduction

This project is part of a comprehensive car service management system designed to optimize the process of managing car service records, customer interaction, and service analytics. The complete project consists of three main components:

1. **Website**: Allows customers to make service appointments, view available services, and receive information about the car service.
2. **Telegram Bot**: Provides customers with an alternative and convenient way to interact with the car service, offering the same features as the website.
3. **Main Application**: Used by car service center staff to book appointments, process customer information, and analyze car service data.

Each component is integrated with the MongoDB cloud database to ensure seamless data synchronization and availability.

![Структура проекту](https://github.com/boghtml/TelegramBot_AutoServiceProject_part_1/assets/119760440/f30720c6-70fe-47de-a98a-502ae62bf98f)

## Website Review

The website is an essential part of this system, designed to provide customers with a user-friendly interface to interact with the car service. It allows customers to:
- Sign up by entering their personal details and car information.
- Book a service by selecting the desired service, date, and time of visit.
- View the list of available car service services.
- Get contact information, address, and other useful information about the car service.

## Features

### Main Features:
- **Sign up for service**: Customers can sign up for service at a car service by entering their personal details, car information, and desired date of visit.
- **View Services**: Customers can view the list of available services offered by the car service center.
- **Get Information**: Customers can get contact information, address, and other useful information about the car service center.

### Possible future website improvements:
- **Employee Workload Tracking**: Admins can monitor employee workload through the website interface.
- **Analytics**: Administrators can receive reports on earnings, service popularity, and employee workload.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/boghtml/WebSite_AutoServiceProject_part_2.git
    ```

2. Navigate to the project directory:
    ```bash
    cd WebSite_AutoServiceProject_part_2
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Set up the environment variables for the website, such as the database connection string.

5. Run the website locally:
    ```bash
    npm start
    ```

## Project Structure

- **index.html**: The main entry point of the website.
- **public/**: Contains static assets like images, CSS, and JavaScript files.
- **src/**: Contains the main source code of the website.
    - **components/**: Reusable components used across the website.
    - **pages/**: Different pages of the website.
    - **services/**: Modules for different services provided by the website.
    - **utils/**: Utility functions used across the project.

## Screenshots

### Home Page
![Home Page](path_to_screenshot_home)

### Service Booking
![Service Booking](path_to_screenshot_booking)

### Service Details
![Service Details](path_to_screenshot_details)

### Contact Information
![Contact Information](path_to_screenshot_contact)

*Replace `path_to_screenshot_home`, `path_to_screenshot_booking`, etc. with the actual paths to your screenshots.*

## Advantages

- **User-Friendly Interface**: Provides customers with an easy-to-use interface to interact with the car service.
- **Efficiency**: Simplifies the process of booking and obtaining information.
- **Integration**: Seamlessly integrates with the main application and Telegram bot for data consistency.
- **Cloud-Based**: Utilizes MongoDB cloud database to ensure data consistency and availability.

## Conclusion

The Website for AutoService is a crucial component of a larger system aimed at improving car service management. By providing a user-friendly interface, the website enhances customer interaction and simplifies service booking. Integrated with MongoDB, it ensures data consistency and availability, facilitating an efficient and comprehensive car service management system.
