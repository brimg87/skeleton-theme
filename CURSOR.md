# Color System Documentation

## Overview
Our theme uses a systematic approach to color management that allows for easy customization through the Shopify theme editor. All colors are defined in the theme settings and accessed through CSS variables.

## Color Structure

### 1. Theme Settings (`config/settings_schema.json`)
Colors are defined in the theme settings under the "Colors" section:
```json
{
  "name": "t:general.colors",
  "settings": [
    {
      "type": "header",
      "content": "Primary Colors"
    },
    {
      "type": "color",
      "id": "color_primary_dark",
      "label": "Primary Dark",
      "default": "#0a0f1f"
    },
    // ... other color settings
  ]
}
```

### 2. CSS Variables (`snippets/css-variables.liquid`)
Colors from theme settings are mapped to CSS variables:
```liquid
:root {
  /* Base Colors */
  --color-primary-dark: {{ settings.color_primary_dark }};
  --color-secondary-dark: {{ settings.color_secondary_dark }};
  // ... other color variables
}
```

### 3. Derived Colors
Some colors are derived from base colors for consistency:
```css
:root {
  /* Derived Colors */
  --color-background-body: var(--color-primary-dark);
  --color-background-card: var(--color-secondary-dark);
  --color-text-primary: var(--color-white);
  // ... other derived colors
}
```

## Best Practices for Color Changes

1. **Never use hardcoded colors** in CSS or Liquid files
   ```css
   /* ❌ Don't do this */
   .my-element { color: #0a0f1f; }
   
   /* ✅ Do this instead */
   .my-element { color: var(--color-primary-dark); }
   ```

2. **Add new colors to theme settings** if needed:
   ```json
   {
     "type": "color",
     "id": "color_new_accent",
     "label": "New Accent Color",
     "default": "#your-color"
   }
   ```

3. **Use derived colors** for related elements:
   ```css
   /* ✅ Good: Using derived colors */
   .card { background-color: var(--color-background-card); }
   .text { color: var(--color-text-primary); }
   ```

4. **Maintain color relationships**:
   - Use `--color-background-body` for main background
   - Use `--color-background-card` for card/element backgrounds
   - Use `--color-text-primary` for main text
   - Use `--color-text-secondary` for secondary text

## Common Color Variables

### Base Colors
- `--color-primary-dark`: Main dark color
- `--color-secondary-dark`: Secondary dark color
- `--color-accent-green`: Green accent
- `--color-accent-magenta`: Magenta accent
- `--color-accent-cyan`: Cyan accent
- `--color-white`: White

### Derived Colors
- `--color-background-body`: Main background
- `--color-background-card`: Card/element background
- `--color-text-primary`: Main text color
- `--color-text-secondary`: Secondary text color
- `--color-text-highlight`: Highlight text color
- `--color-border-primary`: Primary border color
- `--color-border-secondary`: Secondary border color

## Making Color Changes

When making color changes:

1. First, check if the color already exists in theme settings
2. If not, add it to `config/settings_schema.json`
3. Add the corresponding CSS variable in `snippets/css-variables.liquid`
4. Use the CSS variable in your styles

Example of adding a new color:
```json
// In config/settings_schema.json
{
  "type": "color",
  "id": "color_new_accent",
  "label": "New Accent Color",
  "default": "#ff0000"
}
```

```liquid
// In snippets/css-variables.liquid
:root {
  --color-new-accent: {{ settings.color_new_accent }};
}
```

```css
// In your CSS
.new-element {
  color: var(--color-new-accent);
}
```

## Benefits of This System

1. **Client Control**: Colors can be changed through the Shopify theme editor
2. **Consistency**: Colors are managed in one place
3. **Maintainability**: Easy to update colors across the entire theme
4. **Dark/Light Mode Ready**: System can be extended to support theme modes
5. **Performance**: CSS variables are efficient and widely supported 

# Theme Development Guidelines

## Color System

[Previous color system content remains unchanged...]

## Shopify Theme Structure

### Section Files
Sections are the main building blocks of our theme. Each section should:
1. Have a clear, descriptive name (e.g., `index-hero-banner.liquid`)
2. Include proper schema settings for customization
3. Use CSS variables for styling
4. Follow our naming conventions

Example section structure:
```liquid
{%- style -%}
  .section-{{ section.id }}-padding {
    padding-top: {{ section.settings.padding_top | times: 0.75 | round: 0 }}px;
    padding-bottom: {{ section.settings.padding_bottom | times: 0.75 | round: 0 }}px;
  }
{%- endstyle -%}

<div class="section-{{ section.id }}-padding">
  <!-- Section content -->
</div>

{% schema %}
{
  "name": "Section Name",
  "settings": [
    {
      "type": "header",
      "content": "Layout"
    },
    {
      "type": "range",
      "id": "padding_top",
      "min": 0,
      "max": 100,
      "step": 4,
      "unit": "px",
      "label": "Top padding",
      "default": 36
    }
  ],
  "presets": [
    {
      "name": "Section Name"
    }
  ]
}
{% endschema %}
```

### Schema Best Practices

1. **Settings Organization**
   - Group related settings under headers
   - Use consistent naming conventions
   - Include helpful defaults

2. **Common Setting Types**
   ```json
   {
     "type": "header",
     "content": "Section Name"
   },
   {
     "type": "text",
     "id": "heading",
     "label": "Heading",
     "default": "Default Heading"
   },
   {
     "type": "richtext",
     "id": "text",
     "label": "Text",
     "default": "<p>Default text</p>"
   },
   {
     "type": "image_picker",
     "id": "image",
     "label": "Image"
   },
   {
     "type": "color",
     "id": "background_color",
     "label": "Background color",
     "default": "#ffffff"
   }
   ```

3. **Presets**
   - Include at least one preset for each section
   - Use descriptive names
   - Set sensible defaults

### Section Groups
Use section groups to organize related sections:
```json
{
  "name": "Header",
  "sections": {
    "header": {
      "type": "header",
      "settings": {
        "show_announcement": true
      }
    }
  },
  "order": [
    "header"
  ]
}
```

## CSS Architecture

### Class Naming Conventions
1. **Section Classes**
   - Prefix with `section-`
   - Use kebab-case
   - Example: `section-hero-banner`

2. **Component Classes**
   - Use BEM-like naming
   - Example: `product-card__image`

3. **Utility Classes**
   - Use descriptive names
   - Example: `text-center`, `mt-lg`

### CSS Organization
1. **Root Variables**
   - Colors
   - Typography
   - Spacing
   - Breakpoints

2. **Component Styles**
   - Buttons
   - Cards
   - Forms
   - Navigation

3. **Section Styles**
   - Hero
   - Product Grid
   - Newsletter
   - Footer

## JavaScript Guidelines

### Theme JavaScript
1. **File Organization**
   - Keep in `assets/` directory
   - Use descriptive names
   - Include source maps

2. **Module Structure**
   ```javascript
   // Example module structure
   class ThemeSection {
     constructor() {
       this.init();
     }

     init() {
       // Initialize section
     }

     // Section methods
   }

   // Initialize on DOMContentLoaded
   document.addEventListener('DOMContentLoaded', () => {
     new ThemeSection();
   });
   ```

## Performance Best Practices

1. **Asset Loading**
   - Use async/defer for non-critical scripts
   - Optimize images
   - Minimize CSS/JS

2. **Section Loading**
   - Use section rendering API
   - Implement lazy loading
   - Cache section data

3. **Responsive Images**
   ```liquid
   {%- if section.settings.image != blank -%}
     {{ section.settings.image | image_url: width: 1500 | image_tag:
       loading: 'lazy',
       width: section.settings.image.width,
       height: section.settings.image.height,
       class: 'section-image'
     }}
   {%- endif -%}
   ```

## Theme Settings

### Settings Schema
1. **Organization**
   - Group related settings
   - Use clear labels
   - Include helpful defaults

2. **Common Settings**
   ```json
   {
     "name": "t:general.layout",
     "settings": [
       {
         "type": "select",
         "id": "max_page_width",
         "label": "t:labels.page_width",
         "options": [
           {
             "value": "90rem",
             "label": "t:options.page_width.narrow"
           }
         ],
         "default": "90rem"
       }
     ]
   }
   ```

## Translation Support

1. **Liquid Translation Filters**
   ```liquid
   {{ 'general.submit' | t }}
   ```

2. **Schema Translations**
   ```json
   {
     "name": "t:general.colors",
     "settings": [
       {
         "type": "color",
         "id": "color_primary",
         "label": "t:labels.primary_color",
         "default": "#000000"
       }
     ]
   }
   ```

## Development Workflow

1. **Local Development**
   - Use Shopify CLI
   - Test in development theme
   - Use theme check

2. **Version Control**
   - Use semantic versioning
   - Document changes
   - Test before deployment

3. **Theme Updates**
   - Backup before updates
   - Test in development
   - Document changes

## Testing Guidelines

1. **Cross-browser Testing**
   - Chrome
   - Firefox
   - Safari
   - Edge

2. **Device Testing**
   - Desktop
   - Tablet
   - Mobile

3. **Performance Testing**
   - Lighthouse
   - PageSpeed Insights
   - Mobile responsiveness

## Documentation

1. **Code Comments**
   - Document complex logic
   - Explain custom functions
   - Note browser-specific fixes

2. **README Updates**
   - Document new features
   - Update installation steps
   - List dependencies

3. **Change Log**
   - Track version changes
   - Document breaking changes
   - Note bug fixes 