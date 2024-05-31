## Functionality

To view the functionality of the website, open the file: **"Explanation_to_my_work (courses-project).docx"** and go to page **52** and read to **56**

# Site for AutoService

## Introduction

This project is part of a comprehensive car service management system designed to optimize the process of managing car service records, customer interaction and service analytics. The complete project consists of three main components:

1. **Website**: allows customers to sign up for service, view available services and receive information about car service.
2. **Telegram Bot**: Provides customers with an alternative and convenient way to interact with the car service, offering the same features as the website.
3. **Main application**: Used by car service staff to book appointments, process customer information and analyze car service data.

Each component is integrated with the MongoDB cloud database to ensure seamless data synchronization and availability.

![Project Structure](https://github.com/boghtml/TelegramBot_AutoServiceProject_part_1/assets/119760440/f30720c6-70fe-47de-a98a-502ae62bf98f)

## Site overview

The website is an integral part of this system, created to provide customers with a convenient interface for interacting with the car service. This allows customers to:
- **Sign up for service**: The client can sign up for service at a car service by entering his First Name, Last Name, Family name, information about the car, add a personal comment with wishes for the services and choose the desired date of visit.
- View the list of available car service services.
- Get contact information, address and other useful information about the car service.

## Features

### Main features:
- **Register for service**: customers can register for service at a car service by entering personal data, information about the car and the desired date of visit.
- **View services**: customers can view the list of available services offered by the car service.
- **Get information**: customers can get contact information, address and other useful information about the car service.

### Possible future website improvements:
- **Employee Workload Tracking**: Admins can monitor employee workload through the website interface.
- **Analytics**: administrators can receive reports on revenue, service popularity and employee workload.

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
## Project structure


- **index.html**: The main entry point of the website.
- **about.html**: The page with information about the car service.
- **booking.html**: The page for booking services.
- **services.html**: The page displaying available services.
- **package.json**: Configuration file for Node.js project, including dependencies.
- **package-lock.json**: Automatically generated file that records the exact versions of installed dependencies.
- **.vscode/**: Directory for Visual Studio Code settings.
  - **settings.json**: Configuration settings for Visual Studio Code.
- **assets/**: Contains static resources such as images and CSS files.
  - **images/**: Directory for image files used on the website.
  - **styles/**: Directory for CSS files used for styling the website.
- **js/**: Directory for JavaScript files.
  - **main.js**: Main JavaScript file for the website's functionality.
- **node_modules/**: Directory where npm installs the project dependencies.

## But here are some screenshots of the functionality of the website:

### Homepage

![image](https://github.com/boghtml/WebSite_AutoServiceProject_part_2/assets/119760440/cfb9b6f2-47fd-4d16-a12f-9bb42449c2a2)

### Reservation of services

![image](https://github.com/boghtml/WebSite_AutoServiceProject_part_2/assets/119760440/c8a61efa-a409-4685-9c81-e8cc5f6a33cb)

![image](https://github.com/boghtml/WebSite_AutoServiceProject_part_2/assets/119760440/94c6e9a4-3921-425f-90fc-537072711a1e)

### Service details

![image](https://github.com/boghtml/WebSite_AutoServiceProject_part_2/assets/119760440/0243a64a-0c0d-491f-80f4-e374a88a381d)

### Contact Information

![image](https://github.com/boghtml/WebSite_AutoServiceProject_part_2/assets/119760440/e67758d6-ebb8-4a5c-875a-c809de0e9252)

![image](https://github.com/boghtml/WebSite_AutoServiceProject_part_2/assets/119760440/4c9b72fc-52da-4566-a881-dbba6f9a46f9)

## Advantages

- **User-friendly interface**: provides customers with an easy-to-use interface to interact with the car service.
- **Efficiency**: simplifies the process of booking and obtaining information.
- **Integration**: Seamlessly integrates with the main app and Telegram bot for data consistency.
- **Cloud Based**: Uses the MongoDB cloud database to ensure data consistency and availability.

## Conclusion

A site for a car service is an important component of a larger system aimed at improving the management of a car service. By providing a user-friendly interface, the website improves customer interaction and simplifies service booking. Integrated with MongoDB, it ensures data consistency and availability, contributing to an efficient and comprehensive car service management system.
