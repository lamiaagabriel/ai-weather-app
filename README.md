# AI Weather App

Welcome to the Weather AI App repository! This repository contains an application built with Next.js that utilizes the ChatGPT API to provide weather details for a chosen city. The weather data is obtained from the StepZen API, and you will need to set up environment variables to configure the application.

## Prerequisites

Before getting started, make sure you have the following prerequisites installed on your machine:

- Node.js (version 18.15.0 or higher)
- npm (version 9.6.0 or higher)
- Git

## Getting Started

To use this repository and run the Weather AI App locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/lamiaagabriel/ai-weather-app.git
   ```

2. Change into the project directory:

   ```bash
   cd ai-weather-app
   ```

3. Install the dependencies:

   ```bash
   yarn
   ```

4. Create the necessary environment variables. Open a text editor and create a new file named `.env` in the root directory of the project.

5. Copy and paste the following content into the `.env` file:

   ```dotenv
   app_title='Weather AI'

   # ------------------------
   # GraphQL Stepzen API
   # ------------------------

   API_URL=http://localhost:5001/api/weather-ai
   # API_URL=https://kochbihar.stepzen.net/api/weather-ai/__graphql
   STEPZEN_API_KEY=

   # ------------------------
   # ChatGPT API
   # ------------------------

   OPENAI_API_KEY=
   ```

6. Provide values for the environment variables:

   - `app_title`: Set your desired title for the AI Weather App.
   - `API_URL`: Set the URL of the StepZen API. If you're running it locally, use `http://localhost:5001/api/weather-ai`. If it's hosted elsewhere, replace the URL accordingly.
   - `STEPZEN_API_KEY`: Obtain your StepZen API key and paste it here.
   - `OPENAI_API_KEY`: Obtain your OpenAI API key and paste it here.

7. Save the `.env` file.

8. Start the development server:

   ```bash
   yarn dev
   ```

   The Weather AI App should now be accessible at [http://localhost:3000](http://localhost:3000). You can choose a city on the home page and view the weather details provided by the ChatGPT API.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes in your branch.
4. Commit and push your changes.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```
