# NC UI Kit 🎨

A warm, editorial React component library. Built as part of my [30-day portfolio challenge](https://github.com/NC5002).

![Version](https://img.shields.io/badge/version-1.0.0-D97706)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-264DE4)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Components

| Component   | Description                              |
|-------------|------------------------------------------|
| `Button`    | 6 variants, 3 sizes, loading & icon-only |
| `Badge`     | 5 color variants with optional dot       |
| `Input`     | Label, helper text, error/success states |
| `Card`      | Default, elevated (hover lift), accent   |
| `Alert`     | Success, warning, error, info            |
| `Modal`     | Accessible, Escape to close, focus trap  |
| `Toggle`    | Animated switch with label               |
| `Avatar`    | Sizes, colors, online status, groups     |
| `Progress`  | Labeled bar, 4 colors                    |

## 🚀 Usage

```jsx
import { Button, Card, CardBody, Badge } from './components';

function App() {
  return (
    <Card variant="elevated">
      <CardBody>
        <Badge variant="green" dot>Active</Badge>
        <Button variant="amber" size="lg">Get started →</Button>
      </CardBody>
    </Card>
  );
}
```

## 🛠 Setup

```bash
git clone https://github.com/NC5002/nc-ui-kit.git
cd nc-ui-kit
npm install
npm run dev
```

## 🎨 Design tokens

All colors and typography use CSS custom properties defined in `src/index.css`:

```css
:root {
  --bg: #F5F0E8;
  --ink: #1A1410;
  --amber: #D97706;
  --font-display: 'DM Serif Display', serif;
  --font-body: 'Epilogue', sans-serif;
  --font-mono: 'DM Mono', monospace;
}
```

## 📁 Structure

```
src/
└── components/
    ├── Button/     Button.jsx + Button.module.css
    ├── Badge/      Badge.jsx  + Badge.module.css
    ├── Input/      Input.jsx  + Input.module.css
    ├── Card/       Card.jsx   + Card.module.css
    ├── Alert/      Alert.jsx  + Alert.module.css
    ├── Modal/      Modal.jsx  + Modal.module.css
    ├── Toggle/     Toggle.jsx + Toggle.module.css
    ├── Avatar/     Avatar.jsx + Avatar.module.css
    ├── Progress/   Progress.jsx + Progress.module.css
    └── index.js    ← barrel export
```

## 👩‍💻 Author

**Nicole Calvas** — Full-Stack Developer  
[github.com/NC5002](https://github.com/NC5002) · [Portfolio](https://NC5002.github.io)

---
*Day 2 of my 30-day portfolio challenge — building one project per day.*
