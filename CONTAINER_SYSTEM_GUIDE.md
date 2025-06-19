# 📦 Container System Guide - Starside Armory Theme

## 🎯 Overview

The Starside Armory theme now uses a **standardized, semantic container system** that provides consistent layout patterns across all sections. This system separates concerns between **horizontal containment** (width + centering) and **vertical spacing** (padding/margins).

---

## 🏗️ System Architecture

### **Separation of Concerns**
- **Container Classes**: Handle width, centering, and horizontal padding
- **Section Classes**: Handle vertical spacing and header offsets
- **Wrapper Classes**: Handle section-level layout concerns

### **Progressive Enhancement**
- Mobile-first responsive design
- Semantic class names for clear intent
- Backward compatibility with legacy patterns

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

## 📏 Section Classes

### **Standard Section Spacing**

#### `.section-standard`
```css
/* Default section spacing with header offset */
padding-top: calc(header-height + 3rem);
padding-bottom: 3rem;
```
**Use for**: Most page sections

#### `.section-compact`
```css
/* Tighter spacing for content-dense areas */
padding-top: calc(header-height + 2rem);
padding-bottom: 2rem;
```
**Use for**: Form sections, compact content

#### `.section-spacious`
```css
/* More breathing room for important content */
padding-top: calc(header-height + 4rem);
padding-bottom: 4rem;
```
**Use for**: Feature highlights, testimonials

#### `.section-hero`
```css
/* Maximum spacing for hero/landing sections */
padding-top: calc(header-height + 6rem);
padding-bottom: 6rem;
```
**Use for**: Hero sections, landing page headers

### **Legacy Support**

#### `.section-padding` ⚠️ DEPRECATED
```css
/* Complex legacy system - use new .section-* classes instead */
```

---

## 🔧 Section Wrapper System

### **Flexible Spacing Control**

#### `.section-wrapper`
```css
/* Base wrapper - no spacing applied */
width: 100%;
```

#### `.section-wrapper-sm|md|lg|xl`
```css
/* Vertical spacing variants without header offset */
```

#### `.section-wrapper-header-offset`
```css
/* Adds header height to top padding */
```

#### `.section-wrapper-no-top|bottom|spacing`
```css
/* Remove specific spacing as needed */
```

---

## 💡 Usage Patterns

### **Standard Page Section**
```html
<section class="section-standard">
  <div class="container">
    <!-- Content -->
  </div>
</section>
```

### **Hero Section**
```html
<section class="section-hero">
  <div class="container-full">
    <!-- Full-width hero content -->
  </div>
</section>
```

### **Compact Form Section**
```html
<section class="section-compact">
  <div class="container-narrow">
    <!-- Form content -->
  </div>
</section>
```

### **Product Showcase**
```html
<section class="section-spacious">
  <div class="container-wide">
    <!-- Product grid -->
  </div>
</section>
```

### **Custom Spacing Needs**
```html
<section class="section-wrapper-header-offset section-wrapper-lg">
  <div class="container">
    <!-- Custom spaced content -->
  </div>
</section>
```

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