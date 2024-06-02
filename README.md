
# Geeksynergy-Assesment

This project is a React JS application consisting of several tasks aimed at creating a user authentication system and retrieving movie data from an API. Below are the details of each task:

## Task 1: User Signup Page

- Fields: Name, Password, Email, Phone number, Profession (Dropdown).
- Stores the data locally using local storage.

## Task 2: Login Page

- Uses registered credentials to log in.
- Checks if the name and password match.
- If credentials are correct, navigates to the next screen.
- If credentials are incorrect, displays "Invalid Credentials" message.

## Task 3: Upon Successful Login

- Opens a new page.
- Calls the API with the following details:
  - URL: `https://hoblist.com/api/movieList`
  - Type: POST
  - Parameters:
    - category: "movies"
    - language: "kannada"
    - genre: "all"
    - sort: "voting"

## Task 4: Company Info Page

- Adds an option in the menu bar called “Company Info”.
- Displays the following details:
  - Company: Geeksynergy Technologies Pvt Ltd
  - Address: Sanjayanagar, Bengaluru-56
  - Phone: XXXXXXXXX09
  - Email: XXXXXX@gmail.com

## How to Run the Project

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `yarn install`.
4. Start the development server by running `yarn start`.
5. Open your browser and visit `http://localhost:3000` to view the application.

## Deployment Link

The project is deployed and can be accessed at: [Geeksynergy-Assesment Deployment](https://geeksynergy-assesment.onrender.com)

---