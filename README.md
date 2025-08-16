# AI Todo app.

A proof of concept **AI-powered todo list app** built **Next.js (App Router)**, **Bun**, **Tailwind CSS v4**, **shadcn/ui**, **Drizzle ORM + SQLite**, and **ai-sdk**.

The app turns vague natural language into structured tasks, suggests priorities, and answers natural language queries about your todos.

## Why I'm Building This

I wanted to get hands on experience with integrating AI into a "real world" application. So far I've been mainly using AI through tools like GitHub Copilot and ChatGPT, but I wanted explore what its like to integrate it into an application.

## Goals

My main goals for this project is to:

- Learn how to integrate AI into a web application, using `ai-sdk`
- Get some experience with Drizzle ORM, namely how to structure schemas and model data. This app is a good opportunity as the data model should be very basic.

<!-- TODO: Screenshots -->

## Features

Below is a brief list of the features I'm thinking of adding.

- **AI-Assisted Task Creation**  
  Type:
  > "Finish Q3 report by Friday, high priority"  
  > AI extracts:
  ```json
  {
    "title": "Finish Q3 report",
    "dueDate": "2025-08-22",
    "priority": "high"
  }
  ```
- **MCP Integration**

## Setup

1. Setup environment variables, create a `.env.local` with:
   ```
   GITHUB_TOKEN=your_github_token
   ```
