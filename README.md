# Hono.js Clean Architecture Example 🌐

Welcome to the **Hono.js Clean Architecture Example**! This repository serves as a practical guide for implementing **Domain-Driven Design (DDD)** and **Clean Architecture** principles in a project built with [Hono.js](https://honojs.dev/) and powered by [Bun](https://bun.sh/).

> Even if you're new to DDD or Clean Architecture, this example can help you structure and scale your applications with ease and maintainability.

---

## 📖 Table of Contents
- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## 🛠️ About the Project

This project showcases a **basic yet robust example** of implementing Clean Architecture principles. By leveraging Hono.js and Bun, we aim to demonstrate how to build applications that:
- Are highly **modular** and **scalable**.
- Promote clear separation of concerns.
- Enable easy testing and maintenance.

---

## ✨ Key Features

- **Domain-Driven Design (DDD):** Focus on the core domain and its logic.
- **Clean Architecture Layers:** Divides code into well-defined layers like **Entities**, **Use Cases**, **Repositories**, and **Data Sources**.
- **Fast and Lightweight:** Uses Hono.js, a fast and minimalist web framework.
- **Powered by Bun:** Ultra-fast JavaScript runtime for blazing speed.
- **Highly Extensible:** A foundational structure that you can expand for complex applications.

---

## 📂 Project Structure
📁 src 
├── 📁 domain # Core business logic 
│ ├── 📁 datasources # Core entities (models) - Databases Handlers 
│ ├── 📁 entities # Data Transfer Objects
│ ├── 📁 entities # Objects used through the project (No direct object from DB)
│ ├── 📁 repositories # Abstract classes for repositories
│ ├── 📁 schemas # Validation schemas using zod 
│ └── 📁 use-cases # Application-specific business rules 
├── 📁 infrastructure # Frameworks and data access 
│ ├── 📁 datasources # External data sources (APIs, DBs) 
│ └── 📁 repositories # Implementation of repositories 
├── 📁 presentation # Web layer 
│ └── 📁 handlers # Handle HTTP requests and routes defined here
├── 📁 prisma # Prisma schemas and migrations
│ ├── 📁 migrations # Database migrations
│ └── 📄 schema.prisma # Database schema 
└── 📄 index.ts # Application entry point

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites
- [Bun](https://bun.sh/) installed on your machine.
- Basic understanding of JavaScript/TypeScript.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hono-clean-architecture.git
   cd hono-clean-architecture
   ```
2. Install dependencies:
  ```
  bun install
  ```
3. Set up your Database environment, in my case im using NeonTech and Prisma as ORM 
4. Start the development server:
  ```
  bun run dev
  ```
5. Visit http://localhost:3000 in your browser to see the application in action.


### 📊 Usage

Here’s how to add a new feature or modify existing ones:

1. Define your entity in the domain/entities folder.
2. Add business rules in the domain/usecases folder.
3. Implement repository methods in the infrastructure/repositories folder.
4. Set up data sources in the infrastructure/datasources folder.
5. Expose endpoints via routes and controllers in the interfaces folder.
6. Check the provided example use case and entity for guidance.

### ❤️ Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve this example. If you found this project helpful, give it a star ⭐️ to show your support!

### 🌟 Acknowledgements
Special thanks to the creators of Hono.js and Bun for providing the tools to build fast and modern applications.


> [!IMPORTANT]  
> This project is a guide and is intended to be used as such. Feel free to improve or modify it as you please.
