# Typography Standardization Plan - Phase 4

## 🎯 Objective
Replace ALL hardcoded typography values with CSS variables to ensure consistent, accessible, and maintainable typography across the entire theme.

## 📊 Current CSS Variables Available

### Font Families
- `--font-family-primary`: 'Orbitron', sans-serif (headings, titles, CTAs)
- `--font-family-secondary`: 'Share Tech Mono', monospace (technical text, forms, UI)
- `--font-family-body`: 'Roboto Condensed', sans-serif (body text)

### Font Sizes (rem-based for accessibility)
- `--font-size-xs`: 0.75rem
- `--font-size-sm`: 0.875rem
- `--font-size-base`: 1rem
- `--font-size-md`: 1.125rem
- `--font-size-lg`: 1.25rem
- `--font-size-xl`: 1.5rem
- `--font-size-xxl`: 2rem
- `--font-size-h1`: 2.8rem
- `--font-size-h2`: 2.2rem
- `--font-size-h3`: 1.5rem
- `--font-size-h4`: 1.25rem
- `--font-size-hero-title`: 3.5rem
- `--font-size-hero-subtext`: 1.5rem
- `--font-size-section-title`: 2.2rem
- `--font-size-header-logo`: 1.5rem
- `--font-size-header-nav`: 1rem
- `--font-size-card-title`: 1.25rem

### Font Weights
- `--font-weight-light`: 300
- `--font-weight-normal`: 400
- `--font-weight-bold`: 700

### Line Heights
- `--line-height-tight`: 1.2
- `--line-height-normal`: 1.6
- `--line-height-heading`: 1.3

## 🗺️ Hardcoded Value → CSS Variable Mapping

### Font Size Mappings
```css
/* Current Hardcoded → Target CSS Variable */
font-size: 0.7rem    → var(--font-size-xs)
font-size: 0.75rem   → var(--font-size-xs)
font-size: 0.8rem    → var(--font-size-sm)
font-size: 0.85rem   → var(--font-size-sm)
font-size: 0.875rem  → var(--font-size-sm)
font-size: 0.9rem    → var(--font-size-base)
font-size: 0.95rem   → var(--font-size-base)
font-size: 1rem      → var(--font-size-base)
font-size: 1.1rem    → var(--font-size-md)
font-size: 1.125rem  → var(--font-size-md)
font-size: 1.25rem   → var(--font-size-lg)
font-size: 1.5rem    → var(--font-size-xl)
font-size: 1.75rem   → var(--font-size-xxl)
font-size: 2rem      → var(--font-size-xxl)
font-size: 2.2rem    → var(--font-size-h2)
font-size: 2.5rem    → var(--font-size-section-title)
font-size: 3rem      → var(--font-size-hero-subtext) [NEEDS NEW VARIABLE]
font-size: 3.5rem    → var(--font-size-hero-title)
font-size: 4rem      → var(--font-size-hero-title) [NEEDS NEW VARIABLE]
```

### Font Family Mappings
```css
/* Current Hardcoded → Target CSS Variable */
'Share Tech Mono', monospace → var(--font-family-secondary)
'Orbitron', sans-serif       → var(--font-family-primary)
```

### Em-based Values (Convert to rem)
```css
/* Current em → Target rem variable */
font-size: 0.6em  → var(--font-size-xs)
font-size: 0.7em  → var(--font-size-xs)
font-size: 0.8em  → var(--font-size-sm)
font-size: 0.9em  → var(--font-size-base)
font-size: 1.2em  → var(--font-size-md)
```

## 🆕 Additional CSS Variables Needed

### Extra Large Font Sizes
```css
--font-size-xxxl: 3rem;     /* For large icons, special displays */
--font-size-super: 4rem;    /* For hero elements, massive displays */
```

### Specialized Font Sizes
```css
--font-size-badge: 0.7rem;     /* For badges, small labels */
--font-size-icon-sm: 0.8rem;   /* Small icons */
--font-size-icon-md: 1.2rem;   /* Medium icons */
--font-size-icon-lg: 2.5rem;   /* Large icons */
```

## 🎯 Implementation Strategy

### Phase 1: Add Missing CSS Variables
1. Add new font-size variables to `snippets/css-variables.liquid`
2. Update existing mappings

### Phase 2: Systematic Component Refactoring
1. **Global Elements**: h1-h6, p, a, code, etc.
2. **Navigation**: Header, nav links, dropdown items
3. **Product Components**: Cards, pricing, descriptions
4. **Form Elements**: Inputs, labels, buttons
5. **Section Titles**: Hero, section headers
6. **Specialized Components**: Badges, icons, stats
7. **Footer**: Links, copyright, lore text

### Phase 3: Media Query Adjustments
1. Update responsive font-size changes to use variables
2. Maintain proportional scaling

### Phase 4: Verification
1. Test typography consistency across all pages
2. Verify accessibility (rem units, proper scaling)
3. Check visual hierarchy is maintained

## 🔧 Implementation Rules

### CSS Property Priority
1. **Primary**: Use semantic HTML + global styles
2. **Secondary**: Use utility classes (`.font-size-sm`, `.font-family-secondary`)
3. **Tertiary**: Component-specific CSS using variables

### Semantic Approach
- Trust global `h1-h6` styles as the primary text hierarchy
- Use utility classes for intentional deviations
- Component CSS should reference variables, not hardcode values

### Accessibility Focus
- All font-size values MUST use rem units (via variables)
- Maintain proper contrast ratios
- Preserve logical text hierarchy

## 📋 Quality Checklist

### Before Committing Changes
- [ ] No hardcoded font-size values in CSS (except global variables)
- [ ] No hardcoded font-family values (except in CSS variables)
- [ ] All text scales properly with browser font-size changes
- [ ] Visual hierarchy is maintained and logical
- [ ] RTE content displays consistently
- [ ] Navigation remains functional and readable
- [ ] Form elements are properly sized and accessible
- [ ] Mobile responsiveness is maintained

### Component-Specific Checks
- [ ] Product cards: Consistent title, price, description sizing
- [ ] Navigation: Proper link and dropdown sizing
- [ ] Hero sections: Dramatic but readable typography
- [ ] Section titles: Clear hierarchy and consistent sizing
- [ ] Footer: Readable links and appropriate content sizing
- [ ] Forms: Proper label, input, and button typography
- [ ] Error pages: Clear and helpful text hierarchy

## 🚀 Success Metrics

1. **Consistency**: Same semantic elements look identical across all pages
2. **Accessibility**: Typography scales with browser settings
3. **Maintainability**: Typography changes can be made by editing CSS variables
4. **Performance**: No redundant font-size declarations
5. **Developer Experience**: Clear, semantic typography system

---

*This plan ensures the Starside Armory theme achieves typography excellence through systematic standardization.* 