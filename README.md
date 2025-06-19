# E-Commerce Test Framework with Cypress

This repository contains a complete end-to-end test automation framework for an E-Commerce web application using **Cypress**. It includes **UI testing**, **API testing**, and **mocking API responses**, all structured in a scalable and maintainable framework.

## 🚀 Key Features

- ✅ Full coverage of core e-commerce user flows (login, product search, cart, checkout, etc.)
- 🔧 Modular Cypress test framework with reusable custom commands
- 🔍 API Testing using Cypress with request/response validations
- 🔁 API Mocking and response stubbing for UI reliability testing
- 📂 Page Object Model (POM) structure for better maintainability
- 📊 Clear test reports and logs
- 🌐 Supports multiple environments (if configured)



## 🧪 Test Scenarios Covered

### UI Test Flows

- User login and authentication
- Product listing and filtering
- Product detail page and add-to-cart
- Cart and checkout process
- Order confirmation

### API Testing

- GET/POST requests validation
- Token-based authentication
- Response status and schema checks
- Dynamic data assertion

### API Mocking

- Simulating API failures (500, 404)
- Delayed responses and edge cases
- Mocking product details or cart APIs using fixtures

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-test-framework-cypress.git
   cd ecommerce-test-framework-cypress
2. npm install

3. npx cypress open     # For interactive mode
npx cypress run      # For headless run

📌 **Note**: This test framework is actively being developed. Additional features and enhancements will be added progressively.
