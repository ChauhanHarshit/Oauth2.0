# Wallet-Signup

## Overview

Wallet-Signup is a Node.js web application that provides user authentication, including OAuth2 authentication with Google using Passport.js. It also incorporates cross-site request forgery (CSRF) protection for enhanced security.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
  - [Google OAuth Configuration](#google-oauth-configuration)
  - [MongoDB Configuration](#mongodb-configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed on your system:

- Node.js and npm (Node Package Manager)
- MongoDB (for database storage)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/Wallet-Signup.git
   ```

2. Change into the project directory:

   ```bash
   cd Wallet-Signup
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Configuration

### Google OAuth Configuration

To use Google OAuth for authentication, you need to configure the Google OAuth credentials:

1. Visit the [Google Developers Console](https://console.developers.google.com/).
2. Create a new project and enable the Google+ API.
3. Create OAuth 2.0 client credentials (client ID and client secret).
4. Set the authorized redirect URI to match your application's callback URL (e.g., `http://localhost:3000/auth/google/callback`).

### MongoDB Configuration

You also need to configure the MongoDB URI for your database:

1. Install MongoDB on your system or use a cloud-based MongoDB service.
2. Obtain the MongoDB connection URI.
3. Replace the placeholder in your project's configuration with your MongoDB URI.

## Usage

To run the this project, use the following command:

```bash
nodemon app.js
```

Your application will be accessible at `http://localhost:3000` by default.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and commit them with clear and concise messages.
5. Push your changes to your GitHub repository.
6. Create a pull request from your branch to the main repository.

---
