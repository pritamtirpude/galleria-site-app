# Galleria Slideshow Website

Welcome to the **Galleria Slideshow Website** project! This web application showcases a curated collection of artwork, allowing users to browse through different art pieces in a slideshow format with detailed information about the artwork and its artist.

![galleria-site-app vercel app_](https://github.com/user-attachments/assets/bbeeb8a5-51fa-494a-9a8a-81c3adac823f)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Accessibility](#accessibility)
- [Contributing](#contributing)

## Features
- **Dynamic Slideshow:** Browse through a collection of artwork with smooth transitions and animations.
- **Lightbox View:** View artwork in an expanded lightbox format for better detail.
- **Keyboard Navigation:** Use the arrow keys to navigate between artwork in the slideshow.
- **Mobile-Friendly:** Fully responsive design with optimized layouts for both desktop and mobile devices.
- **Accessible Interface:** Designed with accessibility in mind, ensuring screen reader and keyboard support.

## Technologies Used
- **Next.js 14**: React-based framework for server-side rendering and static site generation.
- **TypeScript**: Provides type safety and better development experience.
- **Tailwind CSS**: Utility-first CSS framework for building responsive and modern user interfaces.
- **Framer Motion**: Used for smooth animations and transitions.
- **React Context API**: Manages shared state between components for slideshow and lightbox functionality.
- **Image Optimization**: Built-in Next.js image optimization for performance.
  
## Project Structure
.
├── public               # Public assets like images, icons, etc.
├── src
│   ├── app              # Pages and layout
│   ├── components       # Reusable React components
│   ├── utils            # Utility functions, data, hooks, and types
│   ├── styles           # Global styles and Tailwind configurations
│   └── context          # Context providers for managing state
├── next.config.js       # Next.js configuration file
└── tsconfig.json        # TypeScript configuration file

## Accessibility
- **Semantic HTML**:  Use of proper HTML tags such as <button>, <a>, and headings for better screen reader support.
- **ARIA Labels**: Screen readers can understand custom elements via aria-labels where needed.
- **Keyboard Navigation**: Users can navigate the app using the keyboard (e.g., Tab, Enter, Arrow keys).
- **Alt Text for Images**:  All images have descriptive alt attributes.
- **Focus Management**:  Ensured focus states are visible, and elements are accessible by tabbing through the page.

## Contributing

We welcome contributions to improve this project! Whether it's fixing a bug, adding a feature, improving documentation, or any other form of contribution, your help is appreciated.

### How to Contribute

1. **Fork the repository**
   - Click the "Fork" button at the top of this repository.
   - This will create a copy of the repository under your GitHub account.

2. **Clone the repository**
   - Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/your-username/galleria-slideshow.git
   cd galleria-slideshow
