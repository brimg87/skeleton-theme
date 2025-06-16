# Starside Armory Theme - Style Guide

## 🎯 Theme Overview
**Aesthetic**: Cyberpunk Terminal Interface  
**Narrative**: Orbital Station Archive System  
**Target Feel**: Professional, Technical, Futuristic, Immersive

---

## 🎨 Color Palette

### Primary Accent Colors
```css
--color-accent-cyan: #00ffff      /* Primary highlights, borders, active states */
--color-accent-magenta: #ff00ff   /* Secondary highlights, special elements */
--color-accent-green: #00ff00     /* Success states, positive indicators, logo */
--color-accent-yellow: #ffff00    /* Warnings, classifications, important data */
```

### Background Colors
```css
--color-primary-dark: #0a0f1f     /* Main background */
--color-background-secondary: #0a0a0a  /* Secondary backgrounds */
--color-background-overlay: rgba(10, 15, 31, 0.95)  /* Modals, dropdowns */
--color-background-input: #1a1a2e  /* Form inputs */
```

### Text Colors
```css
--color-text-primary: #ffffff     /* Main text */
--color-text-secondary: #b0b0b0   /* Secondary text, labels */
--color-text-highlight: #e0e0e0   /* Emphasized text */
--color-text-link: #00ffff        /* Links */
--color-text-link-hover: #ffff00  /* Link hover states */
```

### Border Colors
```css
--color-border-primary: #333366   /* Standard borders */
--color-border-secondary: #444     /* Subtle borders */
```

## 📝 Typography

### Font Families
```css
--font-family-primary: 'Orbitron', sans-serif;      /* Headers, UI elements, tech text */
--font-family-secondary: 'Share Tech Mono', monospace;  /* Navigation, labels, code */
--font-family-body: 'Inter', sans-serif;            /* Body text, descriptions */
```

### Font Sizing Scale
```css
--font-size-xs: 0.75rem    /* 12px - Small labels */
--font-size-sm: 0.875rem   /* 14px - Secondary text */
--font-size-base: 1rem     /* 16px - Body text */
--font-size-md: 1.125rem   /* 18px - Emphasized text */
--font-size-lg: 1.25rem    /* 20px - Small headers */
--font-size-xl: 1.5rem     /* 24px - Section headers */
--font-size-xxl: 2rem      /* 32px - Major headers */
--font-size-h1: 2.5rem     /* 40px - Page titles */
```

### Typography Usage Rules
- **Headers**: Always use `--font-family-primary` + uppercase
- **Navigation**: Use `--font-family-secondary` + uppercase
- **Body Content**: Use `--font-family-body` for readability
- **Technical Data**: Use `--font-family-secondary` for code-like appearance

## 🎭 Design Language

### Terminal Text Formatting
```
[BRACKETED_LABELS]           /* Status indicators, buttons, form labels */
//: SECTION_HEADERS ://       /* Section dividers, data box headers */
SYSTEM_UNDERSCORES          /* IDs, technical references */
>COMMAND_PROMPTS            /* Interactive elements */
```

### Content Structure Patterns
```
TITLE_CASE_HEADERS          /* Page titles, major sections */
sentence_case_with_underscores  /* Technical variables, IDs */
Sentence case               /* Body content, descriptions */
```

## 📦 Component Guidelines

### Data Boxes (.data-box)
**Usage**: Primary container for organized content sections
```css
/* Structure */
.data-box {
  background: var(--color-background-secondary);
  border: 2px solid var(--color-accent-cyan);
  clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%);
}

.data-box-header {
  background: var(--color-accent-cyan);
  color: var(--color-primary-dark);
  font-family: var(--font-family-primary);
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
}
```

**Content Guidelines**:
- Headers should use `//: SECTION_NAME ://` format
- Internal padding: `1.5rem`
- Use for: specs, forms, content blocks, navigation sections

### Buttons

#### Primary CTA (.btn-cta-primary)
```css
/* Green primary buttons - main actions */
background: var(--color-accent-green);
color: var(--color-primary-dark);
border: 2px solid var(--color-accent-green);
```
**Usage**: Add to cart, submit forms, primary navigation

#### Secondary CTA (.btn-cta)
```css
/* Cyan outlined buttons - secondary actions */
color: var(--color-accent-cyan);
border: 2px solid var(--color-accent-cyan);
background: transparent;
```
**Usage**: View details, secondary navigation, cancel actions

#### Archive Buttons (.btn-archive)
```css
/* Specialized for archive/transmission log */
background: transparent;
border: 1px solid var(--color-accent-green);
```
**Usage**: Archive navigation, view entries, reference-only actions

### Status Indicators

#### Status Colors by Type
```css
.status-details     /* Available/Active - Cyan */
.status-restricted  /* Limited Access - Yellow */
.status-sealed      /* Locked/Private - Magenta */
.status-archived    /* Stored/Reference - Green */
```

#### Badge Styling
```css
.entry-badge, .archive-badge {
  padding: 0.25rem 0.75rem;
  font-family: var(--font-family-primary);
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 4px;
}
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
@media (max-width: 767px)   /* Mobile */
@media (max-width: 989px)   /* Tablet */
@media (min-width: 990px)   /* Desktop Small */
@media (min-width: 1400px)  /* Desktop Large */
```

### Grid Patterns
```css
/* Product/Archive Grids */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

/* Content Layout Grids */
grid-template-columns: 1fr 400px;  /* Content + Sidebar */
grid-template-columns: 1fr;        /* Mobile Stack */
```

## 🎯 Section Organization

### Standard Section Structure
```html
<section class="[specific]-section section-padding">
  <div class="container">
    <!-- Breadcrumbs (if applicable) -->
    <nav class="breadcrumbs">...</nav>
    
    <!-- Section Header -->
    <header class="[section]-header">
      <div class="data-box">
        <div class="data-box-header">//: SECTION_NAME ://</div>
        <!-- Header content -->
      </div>
    </header>
    
    <!-- Main Content -->
    <div class="[section]-content">
      <!-- Content grids, cards, etc. -->
    </div>
    
    <!-- Navigation (if applicable) -->
    <nav class="[section]-navigation">...</nav>
  </div>
</section>
```

### Padding Standards
```css
.section-padding {
  padding: calc(var(--header-height) + var(--spacing-section)) 0 var(--spacing-section) 0;
}

/* Internal component padding */
--space-xs: 0.5rem
--space-sm: 0.75rem  
--space-md: 1rem
--space-lg: 1.5rem
--space-xl: 2rem
--space-xxl: 3rem
```

## 🔧 Form Styling

### Input Fields
```css
.form-input, input, textarea {
  background: var(--color-background-input);
  border: 1px solid var(--color-border-primary);
  color: var(--color-text-highlight);
  font-family: var(--font-family-secondary);
  clip-path: var(--clip-path-input);
}

.form-input:focus {
  border-color: var(--color-accent-cyan);
  box-shadow: 0 0 8px var(--color-accent-cyan);
}
```

### Form Labels
```css
label {
  font-family: var(--font-family-secondary);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  font-size: var(--font-size-sm);
}
```

**Label Format**: `[FIELD_NAME]` or `[FIELD_DESCRIPTION]:`

## 🎪 Animation & Effects

### Hover States
```css
/* Standard hover transition */
transition: all 0.3s ease;

/* Glow effects for important elements */
box-shadow: 0 0 10px var(--color-accent-cyan);

/* Scale effects for interactive cards */
transform: scale(1.02);
```

### Text Effects
```css
/* Glowing text for important headings */
text-shadow: 0 0 10px var(--color-accent-cyan);

/* Subtle glow for links */
text-shadow: 0 0 5px currentColor;
```

## 📋 Content Guidelines

### Tone & Voice
- **Technical but accessible**: Use terminal/coding language but explain when needed
- **Future-focused**: References to orbital stations, systems, protocols
- **Professional**: Serious but not overly complex
- **Immersive**: Maintain the cyberpunk narrative consistently

### Content Formatting
```
Headers: //: MAIN_SYSTEM_HEADERS ://
Labels: [SPECIFIC_FUNCTIONS] or [STATUS_INDICATORS]
Technical IDs: ENTRY_001, SYSTEM_CORE, TRANSMISSION_LOG
Commands: >EXECUTE_PROTOCOL or [ACCESS_GRANTED]
```

### Navigation Patterns
```
Breadcrumbs: [SYSTEM_ROOT] > [SUBSYSTEM] > [CURRENT_LOCATION]
Buttons: [ACTION_TO_PERFORM]
Status: [CURRENT_STATE] or [ACCESS_LEVEL]
```

## 🚫 Avoid These Patterns

### Design Don'ts
- ❌ Bright white backgrounds (breaks terminal aesthetic)
- ❌ Rounded corners (except subtle 4px max)
- ❌ Comic Sans or playful fonts
- ❌ Gradients (except subtle dark-to-darker)
- ❌ Drop shadows (use glows instead)

### Content Don'ts  
- ❌ "Cute" or casual language
- ❌ Emojis in production interface
- ❌ Mixed case in technical labels
- ❌ Inconsistent bracket/slash usage
- ❌ Breaking the sci-fi narrative

## ✅ Best Practices

### Development
1. **Always use CSS variables** for colors and spacing
2. **Follow BEM naming** for component-specific styles
3. **Mobile-first responsive design**
4. **Test navigation functionality** after any header changes
5. **Maintain semantic HTML** structure

### Content
1. **Keep the terminal aesthetic** consistent across all pages
2. **Use data-box structure** for organized content
3. **Maintain the orbital station narrative**
4. **Ensure accessibility** with proper contrast and focus states
5. **Test across devices** for responsive behavior

---

## 🎯 Quick Reference

### Most Used Classes
```css
.data-box                    /* Primary content container */
.section-padding             /* Standard section spacing */
.btn-cta-primary            /* Green action buttons */
.btn-cta                    /* Cyan secondary buttons */
.terminal-green-glow        /* Glowing green text */
.text-accent-cyan           /* Cyan highlighted text */
.archive-entry              /* Archive/transmission cards */
.nav-button                 /* Navigation elements */
```

### Common Color Combinations
- **Primary Action**: Green background + dark text
- **Secondary Action**: Cyan border + cyan text  
- **Status Good**: Green text + green glow
- **Status Warning**: Yellow text + yellow background
- **Status Error**: Magenta text + magenta border
- **Status Info**: Cyan text + cyan glow

---

---

## 🏗️ Design System Architecture

### CSS Variable System

#### Root Variables Structure
```css
:root {
  /* Color System */
  --color-accent-[name]: #value;
  --color-background-[context]: #value;
  --color-text-[hierarchy]: #value;
  --color-border-[priority]: #value;
  
  /* Typography System */
  --font-family-[usage]: 'Font Name', fallback;
  --font-size-[scale]: value;
  --font-weight-[emphasis]: value;
  --line-height-[density]: value;
  
  /* Spacing System */
  --space-[scale]: value;
  --spacing-section: value;
  --spacing-component: value;
  
  /* Layout System */
  --container-padding-x: value;
  --header-height: value;
  --border-radius-[context]: value;
  
  /* Animation System */
  --transition-duration-[speed]: value;
  --transition-easing: value;
  
  /* Component-Specific */
  --clip-path-[component]: polygon(...);
  --z-index-[layer]: value;
}
```

#### How to Use Variables
```css
/* ✅ CORRECT - Always use variables for consistent theming */
.my-component {
  color: var(--color-text-primary);
  background: var(--color-background-secondary);
  padding: var(--space-md) var(--space-lg);
  font-family: var(--font-family-primary);
}

/* ❌ INCORRECT - Hard-coded values break the system */
.my-component {
  color: #ffffff;
  background: #0a0a0a;
  padding: 1rem 1.5rem;
  font-family: 'Orbitron';
}
```

#### Adding New Variables
**Process:**
1. Check if existing variable can be used
2. Follow naming convention: `--category-subcategory-variant`
3. Add to `:root` with proper grouping and comments
4. Document usage in this style guide

**Example:**
```css
/* Adding a new status color */
:root {
  /* Status Colors */
  --color-status-online: #00ff88;     /* Active/Connected */
  --color-status-offline: #ff4444;    /* Inactive/Disconnected */
  --color-status-pending: #ffaa00;    /* Loading/Processing */
}
```

## 🎨 Class Architecture System

### BEM Methodology
**Structure**: `block__element--modifier`

```css
/* Block - Independent component */
.data-box { }

/* Element - Part of the block */
.data-box__header { }
.data-box__content { }
.data-box__footer { }

/* Modifier - Variation of block or element */
.data-box--large { }
.data-box--archive { }
.data-box__header--secondary { }
```

### Class Categories

#### 1. Component Classes (.component-name)
```css
.data-box              /* Core component */
.transmission-log      /* Feature-specific component */
.archive-entry         /* Content-specific component */
.nav-terminal          /* UI-specific component */
```

#### 2. Layout Classes (.layout-context)
```css
.section-padding       /* Standard section spacing */
.container             /* Content width container */
.grid-products         /* Product grid layout */
.grid-archive          /* Archive grid layout */
```

#### 3. Utility Classes (.utility-function)
```css
.text-accent-cyan      /* Color utilities */
.font-family-primary   /* Typography utilities */
.terminal-green-glow   /* Effect utilities */
.visually-hidden       /* Accessibility utilities */
```

#### 4. State Classes (.state-name or .is-state)
```css
.active                /* Active navigation item */
.loading               /* Loading state */
.disabled              /* Disabled state */
.is-open               /* Open dropdown/modal */
```

### Naming Conventions

#### Component Naming
```css
/* Feature-based naming */
.transmission-log-archive-section
.archive-entry-card
.product-interface-section

/* Context-based naming */
.header-logo
.nav-terminal
.footer-links

/* Function-based naming */
.search-input
.filter-button
.sort-dropdown
```

#### Modifier Naming
```css
/* Size modifiers */
.btn--small, .btn--large
.data-box--compact, .data-box--expanded

/* State modifiers */
.status--active, .status--inactive
.entry--sealed, .entry--accessible

/* Theme modifiers */
.terminal--green, .terminal--cyan
.glow--subtle, .glow--intense
```

## 🔧 Design Tokens

### Spacing Scale
```css
/* Micro spacing */
--space-xxs: 0.25rem   /* 4px - Tight spacing */
--space-xs: 0.5rem     /* 8px - Small gaps */
--space-sm: 0.75rem    /* 12px - Compact spacing */

/* Standard spacing */
--space-md: 1rem       /* 16px - Default spacing */
--space-lg: 1.5rem     /* 24px - Comfortable spacing */
--space-xl: 2rem       /* 32px - Section spacing */
--space-xxl: 3rem      /* 48px - Major spacing */

/* Component spacing */
--spacing-section: 4rem       /* Between major sections */
--spacing-component: 2rem     /* Between components */
--spacing-element: 1rem       /* Between elements */
```

### Shadow & Glow System
```css
/* Glow effects - core to cyberpunk aesthetic */
--glow-subtle: 0 0 5px currentColor;
--glow-standard: 0 0 10px var(--color-accent-cyan);
--glow-intense: 0 0 20px var(--color-accent-cyan);
--glow-pulse: 0 0 15px var(--color-accent-cyan), 0 0 25px var(--color-accent-cyan);

/* Box shadows for depth */
--shadow-card: 0 4px 20px rgba(0, 255, 255, 0.3);
--shadow-modal: 0 8px 40px rgba(0, 0, 0, 0.8);
--shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.3);
```

### Animation Tokens
```css
/* Duration scale */
--transition-duration-fast: 0.15s;    /* Micro interactions */
--transition-duration-normal: 0.3s;   /* Standard hover/focus */
--transition-duration-slow: 0.5s;     /* Page transitions */

/* Easing functions */
--transition-easing: ease-in-out;     /* Standard easing */
--transition-easing-enter: ease-out;  /* Enter animations */
--transition-easing-exit: ease-in;    /* Exit animations */

/* Common transitions */
--transition-standard: all var(--transition-duration-normal) var(--transition-easing);
--transition-color: color var(--transition-duration-fast) var(--transition-easing);
--transition-transform: transform var(--transition-duration-normal) var(--transition-easing);
```

### Border & Radius System
```css
/* Border widths */
--border-width-thin: 1px;
--border-width-medium: 2px;
--border-width-thick: 3px;

/* Border radius - minimal for cyberpunk aesthetic */
--border-radius-none: 0;
--border-radius-subtle: 4px;      /* Maximum roundness for theme */
--border-radius-input: 4px;
--border-radius-button: 4px;
```

## 📐 Component API Reference

### Data Box Component
```html
<!-- Basic data box -->
<div class="data-box">
  <div class="data-box-header">//: SECTION_TITLE ://</div>
  <div class="data-box-content">
    <!-- Content here -->
  </div>
</div>

<!-- With modifiers -->
<div class="data-box data-box--large data-box--archive">
  <div class="data-box-header data-box-header--secondary">
    //: SECONDARY_SECTION ://
  </div>
  <div class="data-box-content">
    <!-- Content here -->
  </div>
</div>
```

**CSS Requirements:**
```css
.data-box {
  background: var(--color-background-secondary);
  border: var(--border-width-medium) solid var(--color-accent-cyan);
  clip-path: var(--clip-path-data-box);
}
```

### Button Component API
```html
<!-- Primary action button -->
<button class="btn btn-cta-primary">[PRIMARY_ACTION]</button>

<!-- Secondary action button -->
<button class="btn btn-cta">[SECONDARY_ACTION]</button>

<!-- Archive-specific button -->
<button class="btn btn-archive">[VIEW_ENTRY]</button>

<!-- With states -->
<button class="btn btn-cta-primary loading disabled">
  [PROCESSING...]
</button>
```

### Status Indicator API
```html
<!-- Status badge -->
<span class="status-badge status-details">[ACCESS_GRANTED]</span>
<span class="status-badge status-restricted">[LIMITED_ACCESS]</span>
<span class="status-badge status-sealed">[CLASSIFIED]</span>
<span class="status-badge status-archived">[ARCHIVED]</span>

<!-- Entry badge with number -->
<span class="entry-badge">[ENTRY_#001]</span>
```

### Grid System API
```html
<!-- Product/Archive grid -->
<div class="archive-entries-grid">
  <div class="archive-entry">...</div>
  <div class="archive-entry">...</div>
  <div class="archive-entry">...</div>
</div>

<!-- Content layout grid -->
<div class="entry-content-grid">
  <div class="entry-visuals">...</div>
  <div class="entry-data-section">...</div>
</div>
```

## 🔄 Extending the System

### Adding New Components

#### 1. Planning Phase
- **Identify need**: What problem does this component solve?
- **Check existing**: Can existing components be modified?
- **Define variations**: What modifiers will be needed?
- **Plan responsive**: How does it behave on different screens?

#### 2. Implementation Process
```css
/* 1. Create base component following BEM */
.new-component {
  /* Use design tokens */
  background: var(--color-background-secondary);
  padding: var(--space-md);
  border: var(--border-width-thin) solid var(--color-border-primary);
  
  /* Follow responsive patterns */
  display: grid;
  gap: var(--space-md);
}

/* 2. Add elements if needed */
.new-component__header {
  font-family: var(--font-family-primary);
  color: var(--color-accent-cyan);
}

/* 3. Create modifiers */
.new-component--large {
  padding: var(--space-lg);
}

/* 4. Add responsive behavior */
@media (max-width: 767px) {
  .new-component {
    padding: var(--space-sm);
  }
}
```

#### 3. Documentation Requirements
- Add component to this style guide
- Document HTML structure and CSS classes
- Provide usage examples
- Note any accessibility considerations
- Include responsive behavior

### Customization Guidelines

#### Theme Customization
```css
/* Custom color scheme - maintain contrast ratios */
:root {
  --color-accent-primary: #custom-color;
  --color-accent-secondary: #custom-color;
  /* Ensure all accent colors work together */
}
```

#### Component Customization
```css
/* Extend existing components, don't override */
.data-box--custom {
  /* Add new styles */
  border-color: var(--color-accent-custom);
}

/* Don't do this - breaks the system */
.data-box {
  border-color: #hardcoded !important;
}
```

## 🧪 Testing & Quality Assurance

### Checklist for New Components
- [ ] Uses design tokens (colors, spacing, typography)
- [ ] Follows BEM naming convention
- [ ] Includes hover/focus states
- [ ] Works on all breakpoints
- [ ] Maintains cyberpunk aesthetic
- [ ] Accessible contrast ratios
- [ ] Documented in style guide

### Browser Testing
- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Mobile devices**: iOS Safari, Android Chrome
- **Fallbacks**: Ensure graceful degradation for unsupported features

---

*This comprehensive design system ensures scalable, maintainable development while preserving the unique Starside Armory cyberpunk aesthetic.* 