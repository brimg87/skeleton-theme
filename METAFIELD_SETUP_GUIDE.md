# Starside Armory Metafield System Setup Guide

## Overview

We've created a comprehensive metafield system that allows you to manage both regular products and Transmission Log items with rich, structured data while keeping your Shopify admin clean and organized.

## System Architecture

### Product Types
- **Regular Products**: Use standard product template with enhanced metafields
- **Transmission Log Items**: Use custom `product.transmission-log.liquid` template with archive styling

### Template Routing
Products are automatically routed to the correct template based on their **Product Type**:
- Product Type: "Transmission Log Entry" → Uses `templates/product.transmission-log.liquid`
- All other product types → Uses standard `templates/product.liquid`

## Metafield Structure

### Shared Metafields (All Products)
**Namespace: `product_specs`**
- `class` (single_line_text) - "Equipment - Wield", "Accessory - ChemicalMate"
- `rarity` (single_line_text) - "Common", "Rare", "Unique", "Prototype"
- `materials` (multi_line_text) - "PLA+, 1/8" Acrylic"
- `dimensions_detailed` (single_line_text) - "10.5" length", "~1.5 x 1.5""
- `processing_info` (single_line_text) - "Ships within 5 business days"

### Regular Product Specific
**Namespace: `product_info`**
- `features_list` (multi_line_text) - Bullet point features
- `power_source` (single_line_text) - "CR2032 coin cell battery"
- `maintenance_tool` (single_line_text) - "2.5mm hex wrench"
- `quick_guide_url` (url) - Link to guides
- `compatibility_notes` (multi_line_text)

### Transmission Log Specific
**Namespace: `transmission_log`**
- `entry_number` (single_line_text) - Sequential numbering
- `desc` (single_line_text) - Short tactical description
- `type` (single_line_text) - "Field Electron Emission"
- `role` (single_line_text) - "Anti-robotics, hull-safe"
- `eva_notes` (multi_line_text) - Space operation details
- `status` (single_line_text) - "DETAILS", "RESERVED", "SOLD", "RESTRICTED", "SEALED"
- `backstory` (rich_text) - Full lore narrative
- `technical_details` (rich_text) - Detailed specs

## Shopify Setup Instructions

### Step 1: Create Metafield Definitions

In your Shopify admin, go to **Settings > Metafields > Products** and create these definitions:

#### Shared Metafields (product_specs namespace)
1. **Class**
   - Namespace: `product_specs`
   - Key: `class`
   - Type: Single line text
   - Description: "Product classification (e.g., Equipment - Wield)"

2. **Rarity**
   - Namespace: `product_specs`
   - Key: `rarity`
   - Type: Single line text
   - Description: "Item rarity level"

3. **Materials**
   - Namespace: `product_specs`
   - Key: `materials`
   - Type: Multi-line text
   - Description: "Materials used in construction"

4. **Detailed Dimensions**
   - Namespace: `product_specs`
   - Key: `dimensions_detailed`
   - Type: Single line text
   - Description: "Detailed dimension specifications"

5. **Processing Info**
   - Namespace: `product_specs`
   - Key: `processing_info`
   - Type: Single line text
   - Description: "Processing and shipping information"

#### Regular Product Metafields (product_info namespace)
1. **Features List**
   - Namespace: `product_info`
   - Key: `features_list`
   - Type: Multi-line text
   - Description: "Product features (one per line)"

2. **Power Source**
   - Namespace: `product_info`
   - Key: `power_source`
   - Type: Single line text
   - Description: "Power source requirements"

3. **Maintenance Tool**
   - Namespace: `product_info`
   - Key: `maintenance_tool`
   - Type: Single line text
   - Description: "Required maintenance tools"

4. **Quick Guide URL**
   - Namespace: `product_info`
   - Key: `quick_guide_url`
   - Type: URL
   - Description: "Link to quick guide or manual"

5. **Compatibility Notes**
   - Namespace: `product_info`
   - Key: `compatibility_notes`
   - Type: Multi-line text
   - Description: "Compatibility information"

#### Transmission Log Metafields (transmission_log namespace)
1. **Entry Number**
   - Namespace: `transmission_log`
   - Key: `entry_number`
   - Type: Single line text
   - Description: "Archive entry number"

2. **Description**
   - Namespace: `transmission_log`
   - Key: `desc`
   - Type: Single line text
   - Description: "Short tactical description"

3. **Type**
   - Namespace: `transmission_log`
   - Key: `type`
   - Type: Single line text
   - Description: "Technical classification"

4. **Role**
   - Namespace: `transmission_log`
   - Key: `role`
   - Type: Single line text
   - Description: "Intended use case"

5. **EVA Notes**
   - Namespace: `transmission_log`
   - Key: `eva_notes`
   - Type: Multi-line text
   - Description: "Space operation notes"

6. **Status**
   - Namespace: `transmission_log`
   - Key: `status`
   - Type: Single line text
   - Description: "Archive status (DETAILS, RESERVED, etc.)"

7. **Backstory**
   - Namespace: `transmission_log`
   - Key: `backstory`
   - Type: Rich text
   - Description: "Development history and lore"

8. **Technical Details**
   - Namespace: `transmission_log`
   - Key: `technical_details`
   - Type: Rich text
   - Description: "Detailed technical analysis"

### Step 2: Configure Metafield Visibility

For each metafield definition:
1. Set **Visibility** to show only for relevant product types
2. For Transmission Log metafields: Show only when Product Type = "Transmission Log Entry"
3. For Regular Product metafields: Show for all other product types
4. Shared metafields: Show for all product types

### Step 3: Create Product Types

In your product admin, use these product types:
- **"Transmission Log Entry"** - For archive/showcase items
- **"Physical Product"** - For regular items for sale
- **"Digital Product"** - For plans and digital downloads

### Step 4: Set Up Collections

Create these collections:
- **Handle: `transmission-log`** - For Transmission Log items
- **Handle: `update-log`** - For Update Log blog
- **Handle: `manuals-guides`** - For Manuals & Guides blog

### Step 5: Update Navigation Menu

Update your main menu to point to:
- **Update Log** → `/blogs/update-log`
- **Manuals & Guides** → `/blogs/manuals-guides`
- **Transmission Log** → `/collections/transmission-log`

## Usage Examples

### Regular Product (Dataknife)
**Product Type**: Physical Product
**Metafields**:
- `product_specs.class`: "Equipment - Wield"
- `product_specs.rarity`: "Common"
- `product_specs.materials`: "PLA+, 1/8" Acrylic"
- `product_info.features_list`: "• Combo switch\n• Latching sheath\n• Replaceable battery"
- `product_info.power_source`: "CR2032 coin cell battery"

### Transmission Log Item (Rattlesnake)
**Product Type**: Transmission Log Entry
**Metafields**:
- `transmission_log.entry_number`: "047"
- `transmission_log.desc`: "Electric PDW conversion"
- `transmission_log.type`: "Field Electron Emission"
- `transmission_log.role`: "Anti-robotics, hull-safe"
- `transmission_log.status`: "RESERVED"
- `transmission_log.eva_notes`: "Altered operation; training recommended"

## Benefits

✅ **Clean Admin UI** - Only relevant fields show for each product type
✅ **Consistent Data** - Structured fields ensure consistent information
✅ **Automatic Styling** - Templates automatically style data appropriately
✅ **SEO Optimized** - Rich structured data for search engines
✅ **Future Proof** - Easy to add new fields or modify existing ones
✅ **No Code Changes** - All managed through Shopify admin

## Files Created/Modified

- `templates/product.transmission-log.liquid` - Custom template for Transmission Log
- `assets/section-transmission-log.css` - Styling for Transmission Log template
- `sections/product.liquid` - Enhanced with metafield support
- `assets/style.css` - Added styles for metafield sections

## Next Steps

1. Set up metafield definitions in Shopify admin
2. Configure visibility rules for each metafield
3. Create new blogs with correct handles (`update-log`, `manuals-guides`)
4. Update navigation menu URLs
5. Test with a few products to ensure everything works
6. Migrate existing content to use the new metafield system

The system is designed to be backwards compatible - existing products will continue to work normally, and you can gradually add metafield data as needed. 