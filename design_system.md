# Stone Theme Design System

## 1. Core Philosophy
The "Stone Theme" is designed to be **warm, organic, and premium**. It moves away from sterile whites and cold grays, embracing earthy tones that feel grounded and sophisticated.

-   **Keywords**: Organic, Solid, Warm, Premium, Depth.
-   **Primary Font**: **Outfit** (Modern, geometric sans-serif).

---

## 2. Color Palette

### Light Mode
-   **Background**: `Stone-100` (`#f5f5f4`) - A warm, off-white base that reduces glare.
-   **Foreground (Text)**: `Stone-950` (`#0c0a09`) - Deep, warm charcoal for high readability.
-   **Accents**: `Stone-500` to `Stone-700` for secondary text and borders.

### Dark Mode
-   **Background**: `Stone-950` (`#0c0a09`) - A rich, deep black-brown.
-   **Foreground (Text)**: `Stone-50` (`#fafaf9`) - Soft off-white to prevent eye strain.
-   **Accents**: `Stone-200` to `Stone-400` for secondary text.

### CSS Variables (Tailwind)
```css
:root {
  --background: 28 25% 96%; /* Stone 100 */
  --foreground: 240 10% 3.9%; /* Deep Charcoal */
}

.dark {
  --background: 28 10% 10%; /* Stone 950 */
  --foreground: 60 9.1% 97.8%; /* Stone 50 */
}
```

---

## 3. Component Styling

### Project Cards
-   **Background**: Solid. `bg-white` (Light) / `bg-stone-900` (Dark).
-   **Border**: Subtle neutral border. `border-black/5` (Light) / `border-white/10` (Dark).
-   **Effect**: Parallax image movement on scroll.
-   **Typography**: Titles in `Stone-900` (Light) / `Stone-100` (Dark).

### Buttons
-   **Primary**: Solid Stone. `bg-stone-900` text-white (Light) / `bg-stone-800` (Dark).
-   **Secondary**: Outline/Ghost. `text-stone-700` (Light) / `text-stone-200` (Dark).
-   **Interaction**: Magnetic pull effect on hover.

### Profile Image
-   **Shape**: "Squircle" (`rounded-[2.5rem]`).
-   **Border**: Thick glass-like border. `border-[0.35rem] border-white` (Light) / `border-stone-900/50` (Dark).
-   **Shadow**: Deep, soft shadow for 3D pop.

### Skills & Chips
-   **Style**: "Mini Cards". Solid background matching project cards.
-   **Border**: Subtle neutral border (No colored/indigo borders).
-   **Text**: `Stone-800` (Light) / `Stone-200` (Dark).

---

## 4. Layout & Depth

### Glassmorphism
Used sparingly on the **Header** to separate navigation from content without blocking it.
-   **Light**: `bg-white/60 backdrop-blur-[0.5rem]`
-   **Dark**: `bg-stone-900/80 backdrop-blur-[0.5rem]`

### Background Texture
A subtle grid pattern is used to add texture without noise.
-   **Opacity**: Extremely low (`0.03` to `0.05`) to remain subliminal.
-   **Mask**: Radial gradient mask to fade edges.
