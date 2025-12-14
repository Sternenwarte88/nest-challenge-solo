# 🎯 NestJS Fundamentals Showcase

> **Skill Focus:** NestJS Framework, TypeScript, Dependency Injection, DTOs & Validation

A compact example project demonstrating core NestJS concepts – no unnecessary bloat.

---

## 🚧 Status: Base Showcase

This project demonstrates fundamental NestJS patterns using a simple `Trips` module. Intentionally kept lean to highlight the architecture.

**Part of my portfolio series** – each repo focuses on different backend skills:
| Repo | Focus |
|------|-------|
| [Typescript-demo](https://github.com/Sternenwarte88/Typescript-demo) | Clean Architecture, Testing, TypeDoc |
| **nest-challenge-solo** | NestJS, DI, Decorators, Validation ← You are here |
| [Unwritten-Legends-Backend](https://github.com/Sternenwarte88/Unwritten-Legends-Backend) | Microservices, Auth, Redis |

---

## 🧱 What This Project Demonstrates

### ✅ NestJS Module Structure
```
src/
└── trips/
    ├── provider/           # Services (Business Logic)
    ├── trips.controller.ts # REST Endpoints
    ├── trips.module.ts     # Modul-Definition
    ├── trips.interface.ts  # TypeScript Interfaces
    └── create-trip.dto.ts  # Data Transfer Objects
```

### ✅ Decorators & Dependency Injection
- `@Controller()`, `@Get()`, `@Post()` for routing
- `@Injectable()` services with constructor injection
- `@Body()`, `@Param()` for request data

### ✅ DTOs with class-validator
```typescript
// Example: create-trip.dto.ts
export class CreateTripDto {
  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsNumber()
  budget?: number;
}
```

### ✅ Interfaces for Type Safety
Strict typing between layers – no `any`, clear contracts.

### 🔜 Planned: Unit Tests
Test setup is prepared (`*.spec.ts` files), implementation coming soon.

---

## 🔧 Tech Stack

- **NestJS** – Framework
- **TypeScript** – Strict Mode
- **class-validator** – Declarative validation
- **class-transformer** – DTO transformation

---

## 🚀 Getting Started

```bash
# Installation
npm install

# Development
npm run start:dev
```

---

## 📂 Project Structure

```
nest-challenge-solo/
├── src/
│   ├── app.module.ts        # Root Module
│   └── trips/               # Feature Module
│       ├── provider/        # Services
│       ├── trips.controller.ts
│       ├── trips.controller.spec.ts  # (Placeholder)
│       ├── trips.module.ts
│       ├── trips.interface.ts
│       └── create-trip.dto.ts
├── test/                    # E2E Tests (planned)
├── nest-cli.json
├── tsconfig.json
└── package.json
```

---

## 💡 Why This Project?

Many NestJS tutorials hide the basics behind too much complexity. This repo shows:

- How modules, controllers and services work together
- Why DTOs and interfaces should be separated
- How declarative validation works
- The fundamentals of dependency injection in practice

---

## 👤 Author

**Stephan** – Backend Developer  
GitHub: [@Sternenwarte88](https://github.com/Sternenwarte88)
