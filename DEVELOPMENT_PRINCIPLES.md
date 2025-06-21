# Starside Armory Theme - Development Principles

*A practical guide for building a single-merchant Shopify theme that prioritizes functionality over flexibility.*

## 🎯 Core Philosophy

**"Make it look incredible, work perfectly for our specific use case, and be maintainable. Everything else is nice-to-have."**

This theme is built for **one merchant, one store** - not as a general-purpose theme for thousands of different stores. This allows us to make smart trade-offs between flexibility and simplicity.

## 🎯 Guiding Principles

### 1. **"Does it break Shopify?" Test**
- **Always work WITH Shopify, never against it**
- Use Shopify's automatic wrappers (`.shopify-section`) - don't create competing systems
- Test core commerce functionality: checkout, cart, product pages, collections
- If Shopify expects something to work a certain way, follow that pattern
- **Example:** We use inline `style="padding: 80px 0"` instead of complex CSS systems

### 2. **"Single Merchant" Mindset**
- **We know exactly what content will be used** - optimize for that reality
- **We control the store** - don't need infinite customization options
- **Hardcode sensible defaults** instead of making everything a theme setting
- **Skip edge cases** that won't happen in our specific store
- **Example:** Fixed cyberpunk color scheme vs. customizable color picker

### 3. **"Dawn-Level Complexity" Ceiling**
- **If Dawn doesn't do it, question if we need it**
- Dawn works for millions of stores - it's the proven baseline
- When in doubt, copy Dawn's approach, then customize the styling
- **Avoid reinventing the wheel** - Shopify's solutions are battle-tested
- **Example:** Our section spacing disaster vs. Dawn's simple approach

### 4. **"Visual First, Features Second"**
- **Priority 1:** Does it look amazing and match our cyberpunk aesthetic?
- **Priority 2:** Does it have every possible feature? (Often unnecessary)
- **The aesthetic is our differentiator** - not feature complexity
- **Better to have fewer features that work perfectly** than many that are buggy

### 5. **"Inline is Fine" for Single Merchant**
- **Simple solutions are maintainable solutions**
- `style="padding: 80px 0"` is perfectly acceptable for section spacing
- CSS variables for colors/fonts, but don't over-abstract everything
- **Fewer files = easier to maintain = less that can break**

## 🚫 What to Avoid

### **Over-Engineering Red Flags:**
- ❌ Universal CSS systems that try to handle every case
- ❌ Theme settings for every possible option
- ❌ Multiple layout variations "just in case"
- ❌ Complex JavaScript frameworks for simple interactions
- ❌ Recreating Shopify features from scratch
- ❌ CSS architectures more complex than the content they style

### **Flexibility Traps:**
- ❌ "What if someone wants to..." (We ARE the someone!)
- ❌ "This should be customizable..." (Should it really?)
- ❌ "Let's make this reusable..." (Will we actually reuse it?)

## ✅ What to Prioritize

### **Must-Have Excellence:**
1. **Cyberpunk aesthetic perfection** - this is our unique value proposition
2. **Mobile responsiveness** - customers shop on phones
3. **Fast loading times** - don't sacrifice performance for features
4. **Core commerce functionality** - product pages, cart, checkout must be flawless
5. **Easy content management** - we'll be maintaining this long-term

### **Nice-to-Have Features:**
- Advanced filtering (if products actually need it)
- Complex animations (if they don't hurt performance)
- Multiple layout options (if we'll actually use them)

## 🛠 Practical Guidelines

### **Development Workflow:**
1. **Start with Dawn's structure** - modify styling, not core functionality
2. **Test on real devices** - especially mobile and different screen sizes
3. **Keep CSS organized but not over-engineered** - readable > clever
4. **Use Shopify's built-in features** - sections, metafields, liquid filters
5. **Document the weird stuff** - so future you understands the decisions

### **Code Standards:**
- **Inline styles are OK** for one-off spacing and simple adjustments
- **CSS variables for theming** - colors, fonts, spacing scales
- **Component-based CSS** - but don't create unused abstractions
- **Semantic HTML** - accessibility and SEO matter
- **Progressive enhancement** - work without JavaScript, enhance with it

### **Testing Checklist:**
- ✅ Does it look good on mobile?
- ✅ Does the cart/checkout flow work?
- ✅ Can products be added/removed?
- ✅ Do all links work?
- ✅ Is the site fast?
- ✅ Does it match the cyberpunk aesthetic?

## 📚 Reference Examples

### **Good Decisions We Made:**
- ✅ Simple inline padding for sections instead of complex CSS system
- ✅ Using Shopify's automatic `.shopify-section` wrappers
- ✅ Fixed cyberpunk color scheme instead of customizable colors
- ✅ Single main CSS file for better caching

### **Bad Decisions We Avoided:**
- ❌ Universal section spacing system that fought Shopify
- ❌ Over-complex CSS architecture with multiple files
- ❌ Trying to recreate Shopify's section wrapper system

## 🎯 Success Metrics

**Primary:** Does the store look amazing and sell products effectively?

**Secondary:**
- Can we easily update content?
- Is the code maintainable?
- Do customers have a smooth shopping experience?
- Is site performance good?

**Not Important:** 
- Could this work for other stores?
- Does it have every feature other themes have?
- Is the CSS architecture "perfect"?

---

## 💡 Remember

**"Perfect is the enemy of good."** 

This theme needs to be excellent for our specific store, not theoretically perfect for all possible stores. Make decisions that serve the actual use case, not hypothetical future requirements.

**When in doubt, choose the simpler solution.** 