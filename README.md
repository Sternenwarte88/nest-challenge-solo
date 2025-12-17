# 🎯 NestJS Fundamentals – The No-AI Challenge

> **Can I actually build with NestJS, or am I just good at prompting ChatGPT?**

A deliberate constraint-based learning project: Build a functional NestJS backend **without any AI assistance** to prove genuine framework understanding.

---

## 🧠 The Challenge

This project was born from a critical realization during my work as a backend developer and instructor:

**I was becoming too dependent on AI tooling.**

After noticing how much ChatGPT, Copilot and similar tools influenced both my company's codebase and my own development workflow, I questioned: *Do I actually understand NestJS, or am I just orchestrating AI outputs?*

### The Constraint

Build a complete, functional NestJS application following these rules:

| Allowed ✅ | Forbidden ❌ |
|-----------|-------------|
| Official NestJS documentation | ChatGPT / Claude / any LLM |
| Stack Overflow, GitHub issues | GitHub Copilot |
| Manual debugging and logging | AI code completion |
| Community forums | Copy-pasting unexplained code |

### The Goal

Prove to myself (and future employers) that I can:
- Navigate framework documentation independently
- Understand dependency injection without AI scaffolding
- Debug issues through reasoning, not prompting
- Write code I can actually explain and maintain

**Part of my portfolio series** – each repo focuses on different backend skills:
| Repo | Focus |
|------|-------|
| [Typescript-demo](https://github.com/Sternenwarte88/Typescript-demo) | Clean Architecture, Testing, TypeDoc |
| **nest-challenge-solo** | NestJS, Framework Mastery, Self-Directed Learning ← You are here |
| [Unwritten-Legends-Backend](https://github.com/Sternenwarte88/Unwritten-Legends-Backend) | Microservices, Auth, Infrastructure |

---

## 🏗️ What This Project Demonstrates

### ✅ Core NestJS Patterns (All Implemented Without AI)

**Module Architecture**
```
src/
└── trips/
    ├── provider/              # Injectable Services
    │   └── trips.service.ts
    ├── trips.controller.ts    # REST Endpoints
    ├── trips.module.ts        # Feature Module
    ├── trips.interface.ts     # TypeScript Contracts
    └── create-trip.dto.ts     # Validation Objects
```

**Dependency Injection Flow**
```typescript
@Module({
  controllers: [TripsController],
  providers: [TripsService],      // DI Container manages lifecycle
})
export class TripsModule {}
```

**Decorator-Based Routing**
```typescript
@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}  // DI in action
  
  @Get()
  findAll() { /* ... */ }
  
  @Post()
  create(@Body() createTripDto: CreateTripDto) { /* ... */ }
}
```

**DTO Validation with class-validator**
```typescript
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

---

## 🎓 Skills Demonstrated

| Skill | Evidence |
|-------|----------|
| **Framework Documentation Navigation** | Successfully implemented NestJS patterns by reading official docs |
| **Dependency Injection Understanding** | Proper use of `@Injectable()`, constructor injection, module providers |
| **TypeScript Type Safety** | Interfaces for domain models, DTOs for transport layer |
| **Decorator Pattern Usage** | Route handlers, validation decorators, module metadata |
| **Problem-Solving Without AI** | Debugging through logging, Stack Overflow research, manual testing |

---

## 🔧 Tech Stack

- **NestJS** – Progressive Node.js Framework
- **TypeScript** – Strict Mode
- **class-validator** – Declarative Validation
- **class-transformer** – DTO Transformation

---

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/Sternenwarte88/nest-challenge-solo.git
cd nest-challenge-solo
npm install
```

### Development

```bash
# Start development server
npm run start:dev

# Build for production
npm run build

# Run production build
npm start
```

### Example Request

```bash
curl -X POST http://localhost:3000/trips \
  -H "Content-Type: application/json" \
  -d '{
    "destination": "Tokyo",
    "startDate": "2025-06-15",
    "budget": 2500
  }'
```

---

## 📂 Project Structure

```
nest-challenge-solo/
├── src/
│   ├── app.module.ts           # Root Module
│   ├── main.ts                 # Application Bootstrap
│   └── trips/                  # Feature Module
│       ├── provider/
│       │   └── trips.service.ts
│       ├── trips.controller.ts
│       ├── trips.controller.spec.ts
│       ├── trips.module.ts
│       ├── trips.interface.ts
│       └── create-trip.dto.ts
├── test/                       # E2E Test Setup
├── nest-cli.json
├── tsconfig.json
└── package.json
```

---

## 💡 Why This Matters

Many developers (myself included) have become reliant on AI tools to the point where **we're not sure what we actually know anymore.**

This project represents:
- **Accountability** – Proving skills through constraints
- **Growth Mindset** – Recognizing dependencies and addressing them
- **Genuine Understanding** – Code I can explain, debug, and extend independently

In a job interview, I can walk through every line of this codebase and explain *why* it works – because **I wrote it with my own understanding**, not AI suggestions.

---

## 👤 Author

**Stephan** – Backend Developer & DevOps Instructor  
GitHub: [@Sternenwarte88](https://github.com/Sternenwarte88)

*"AI is a tool, not a crutch. This project proves I know the difference."*
