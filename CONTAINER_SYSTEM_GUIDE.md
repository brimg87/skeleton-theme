# 📦 Container System Guide - Starside Armory Theme

## 🎯 Overview

The Starside Armory theme uses **Shopify's automatic section wrapper system** combined with a **standardized container system** for consistent layout patterns. This follows Shopify best practices and provides clean, maintainable code.

---

## 🏗️ System Architecture (Shopify Best Practice)

### **How Shopify Handles Sections**
- **Shopify automatically wraps ALL sections** with `<div class="shopify-section">`
- **Section files contain ONLY content** - no manual wrapper elements
- **CSS targets `.shopify-section`** for spacing between sections
- **Section content starts with `.container`** for proper layout

### **Separation of Concerns**
- **Shopify Section Wrapper**: Handles vertical spacing between sections
- **Container Classes**: Handle width, centering, and horizontal padding
- **Content Classes**: Handle internal layout and styling

### **Clean Architecture**
- No manual section wrapper classes needed
- Semantic class names for clear intent
- Works with Shopify's automatic systems

---

## 📐 Container Classes

### **Primary Containers**

#### `.container` (Standard)
```css
/* Standard content width - Most common use case */
max-width: 1200px;
responsive horizontal padding;
```
**Use for**: Most page content, product grids, general sections

#### `.container-narrow` (75% width)
```css
/* Narrower content for focused content */
max-width: 900px;
```
**Use for**: Article content, forms, focused content areas

#### `.container-wide` (125% width)  
```css
/* Wider content for data-heavy sections */
max-width: 1500px;
```
**Use for**: Product galleries, data tables, showcase sections

#### `.container-full` (No max-width)
```css
/* Full viewport width with padding */
max-width: none;
```
**Use for**: Hero sections, full-width layouts, immersive content

### **Legacy Support**

#### `.page-width` ⚠️ DEPRECATED
```css
/* Identical to .container - use .container instead */
```

---

## 📏 Section Spacing (Shopify Automatic)

### **How Section Spacing Works**

#### `.shopify-section` (Automatic)
```css
/* Shopify automatically applies this to ALL sections */
.shopify-section {
  padding-top: var(--space-xxl);    /* 80px */
  padding-bottom: var(--space-xxl); /* 80px */
}
```
**Applied by**: Shopify automatically - you don't add this class
**Use for**: All sections get this spacing automatically

### **Section Spacing Modifiers**

#### `.shopify-section.no-top-spacing`
```css
/* Remove top spacing when needed */
padding-top: 0;
```
**Use for**: Sections that should touch the header

#### `.shopify-section.no-bottom-spacing`
```css
/* Remove bottom spacing when needed */
padding-bottom: 0;
```
**Use for**: Sections that should touch the footer

#### `.shopify-section.small-spacing`
```css
/* Reduced spacing for compact sections */
padding-top: var(--space-lg);    /* 24px */
padding-bottom: var(--space-lg);
```
**Use for**: Form sections, compact content

#### `.shopify-section.large-spacing`
```css
/* Increased spacing for feature sections */
padding-top: 4rem;    /* 64px */
padding-bottom: 4rem;
```
**Use for**: Hero sections, feature highlights

### **⚠️ DEPRECATED Classes**

#### `.section-*` classes ❌ REMOVED
```css
/* All manual section classes have been removed */
/* Use Shopify's automatic .shopify-section instead */
```

---

## 🔧 How to Apply Section Classes

### **Using Schema Classes**

Section classes are applied via the section schema, not in the HTML:

```json
{
  "name": "Section Name",
  "tag": "section",
  "class": "small-spacing",
  "settings": [...]
}
```

### **Available Schema Classes**

#### `"class": "small-spacing"`
- Applies `.shopify-section.small-spacing`
- Reduces section spacing to 24px

#### `"class": "large-spacing"`
- Applies `.shopify-section.large-spacing`  
- Increases section spacing to 64px

#### `"class": "no-top-spacing"`
- Applies `.shopify-section.no-top-spacing`
- Removes top padding

#### `"class": "no-bottom-spacing"`
- Applies `.shopify-section.no-bottom-spacing`
- Removes bottom padding

### **⚠️ DEPRECATED System**

#### `.section-wrapper-*` classes ❌ REMOVED
```css
/* All manual wrapper classes have been removed */
/* Use schema class system instead */
```

---

## 💡 Usage Patterns (Shopify Best Practice)

### **Standard Section (Most Common)**
```html
<!-- Shopify automatically wraps this in <div class="shopify-section"> -->
<div class="container">
  <!-- Section content -->
</div>
```
**Result**: Gets automatic 80px spacing above and below

### **Hero Section (Full Width)**
```html
<!-- Shopify automatically wraps this in <div class="shopify-section"> -->
<div class="container-full">
  <!-- Full-width hero content -->
</div>
```
**Result**: Full width with automatic spacing

### **Compact Section**
```html
<!-- Add small-spacing class to the Shopify wrapper via schema -->
<div class="container-narrow">
  <!-- Form content -->
</div>
```
**Schema setting**: `"class": "small-spacing"`
**Result**: Gets reduced 24px spacing

### **Feature Section**
```html
<!-- Add large-spacing class to the Shopify wrapper via schema -->
<div class="container-wide">
  <!-- Feature content -->
</div>
```
**Schema setting**: `"class": "large-spacing"`
**Result**: Gets increased 64px spacing

### **Section Without Top Spacing**
```html
<!-- Add no-top-spacing class to the Shopify wrapper via schema -->
<div class="container">
  <!-- Content that should touch header -->
</div>
```
**Schema setting**: `"class": "no-top-spacing"`
**Result**: No top spacing, normal bottom spacing

---

## 📱 Responsive Behavior

### **Breakpoints**
- **Mobile**: 0-767px
- **Tablet**: 768px+
- **Desktop**: All larger screens

### **Automatic Adjustments**
- Container padding reduces on mobile
- Section spacing compacts on mobile
- Header offset calculations remain consistent

---

## 🔄 Migration Guide

### **From Manual Wrappers to Shopify Auto-Wrappers**

#### ❌ **OLD WAY (Incorrect)**
```html
<section class="section-wrapper section-standard">
  <div class="container">
    <!-- Content -->
  </div>
</section>
```

#### ✅ **NEW WAY (Correct)**
```html
<!-- Shopify automatically wraps this -->
<div class="container">
  <!-- Content -->
</div>
```
```json
{
  "name": "Section Name",
  "tag": "section",
  "class": "optional-modifier"
}
```

### **Class Migration Map**

| Old Class | New Approach |
|-----------|--------------|
| `.section-standard` | Default (no class needed) |
| `.section-compact` | `"class": "small-spacing"` |
| `.section-spacious` | `"class": "large-spacing"` |
| `.section-hero` | `"class": "large-spacing"` |
| `.section-wrapper` | Remove entirely |
| `.section-padding` | Remove entirely |

### **Benefits of New System**

✅ **Cleaner HTML** - No manual wrapper elements  
✅ **Shopify Compliance** - Works with Shopify's automatic systems  
✅ **Easier Maintenance** - Less code to manage  
✅ **Better Performance** - Leverages Shopify's optimizations  
✅ **Theme Editor Compatible** - Works properly with section customization

### **From Legacy to New System**

#### **Replace `.page-width`**
```html
<!-- OLD -->
<div class="page-width">

<!-- NEW -->
<div class="container">
```

#### **Replace `.section-padding`**
```html
<!-- OLD -->
<section class="section-padding">

<!-- NEW -->
<section class="section-standard">
  <div class="container">
```

#### **Update Complex Sections**
```html
<!-- OLD -->
<section class="my-section-name section-padding">
  <div class="page-width">
    <!-- content -->
  </div>
</section>

<!-- NEW -->
<section class="my-section-name section-standard">
  <div class="container">
    <!-- content -->
  </div>
</section>
```

---

## 🎯 Best Practices

### **✅ DO**
- Use semantic container sizes (.container-narrow for forms)
- Combine section + container classes appropriately  
- Choose section spacing based on content importance
- Use standard patterns for consistency

### **❌ DON'T**
- Mix old and new systems in the same section
- Apply manual padding when section classes exist
- Use .container-full unless truly needed
- Override container max-widths without good reason

---

## 🧪 Testing Checklist

When implementing the new container system:

- [ ] **Mobile responsiveness** - Check all breakpoints
- [ ] **Header overlap** - Ensure proper header offset
- [ ] **Content alignment** - Verify centering and padding
- [ ] **Visual consistency** - Compare with existing sections
- [ ] **Navigation functionality** - Test after layout changes

---

## 🔮 Future Enhancements

### **Planned Additions**
- Grid-based container variants
- Enhanced responsive breakpoint system  
- Animation-aware spacing classes
- Theme editor integration for spacing control

### **Phase 4 Preparation**
This container system provides the foundation for:
- Typography standardization
- Component spacing systems
- Advanced layout patterns
- Design token integration

---

## 📚 Related Documentation

- [Button System Guide](BUTTON_SYSTEM_GUIDE.md)
- [Color System Documentation](CURSOR.md#color-system)
- [Shopify Theme Architecture](CURSOR.md#shopify-theme-structure)
- [Development Rules](CURSOR.md#development-rules)

---

*Last Updated: Phase 3 - Container System Standardization* 