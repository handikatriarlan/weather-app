# Weather App

![Weather App Screenshot](https://ucarecdn.com/ca2ea210-2cdb-4a7a-8c7c-895db1c62166/weatherapp.png)

A simple weather web application that allows users to check the current weather conditions for any city. The application fetches weather data from the OpenWeather API and displays the temperature, weather description, and more.

## Features

-   Check the current weather for any city
-   Display temperature and weather description
-   Simple and clean UI using Next.js, NextUI, and Tailwind CSS
-   Responsive design with utility-first styling
-   Error handling for city not found or API errors

## Tech Stack

-   **Next.js 14** - The React framework for building web applications
-   **NextUI v2** - UI components for React applications
-   **Tailwind CSS** - Utility-first CSS framework for custom designs
-   **TypeScript** - Typed JavaScript for better developer experience
-   **React Query** - Data-fetching library to manage server state in React apps
-   **Formik** - Form management library for React
-   **Axios** - Promise-based HTTP client for the browser and Node.js

## Installation

To get started with the Weather App, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/handikatriarlan/weather-app.git
```

### 2. Navigate to the project directory

```bash
cd weather-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up Environment Variables

To access the OpenWeather API, you need to add your API key to the project. Here’s how:

1. Create a `.env` file
   Create a new file named `.env` or just copy a `.env.example` file in the root directory of your project.
2. Add the API Key
   Insert your API key into the `.env` file in the following format

```bash
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with the API key you obtained from [OpenWeather](https://openweathermap.org/).

### 5. Run the development server
After adding the API key, start the development server using
```bash
npm run dev
```

### 6. Open in your local server
Visit `http://localhost:3000` in your browser to see the app in action.

## Usage
- Enter the city name in the input field.
- Click "Check Weather" to get the weather information.
- View the weather results displayed below the form.
