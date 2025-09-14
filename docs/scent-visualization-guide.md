# Scent Visualization Guide

## Overview

The Scent Visualization feature allows you to display a fragrance's scent profile in an elegant, interactive format. This guide explains how to set up and customize this feature for your fragrance products.

## Setting Up Product Metafields

The scent visualization component uses product metafields to store and display the fragrance notes. You'll need to create the following metafields for each fragrance product:

1. **Top Notes**: `fragrance.top_notes` (comma-separated list)
2. **Middle Notes**: `fragrance.middle_notes` (comma-separated list)
3. **Base Notes**: `fragrance.base_notes` (comma-separated list)

### Example Metafield Values

```
fragrance.top_notes: "Bergamot,Lemon,Lavender,Grapefruit"
fragrance.middle_notes: "Rose,Jasmine,Ylang-Ylang,Geranium"
fragrance.base_notes: "Sandalwood,Vanilla,Musk,Amber"
```

## Adding the Scent Visualization Block

1. Go to the product page template you want to edit in the Shopify theme editor
2. Find the "Product Details" section
3. Click "Add Block"
4. Select "Scent Visualization" from the list of available blocks
5. Configure the block settings as desired

## Block Settings

The Scent Visualization block includes the following customizable settings:

- **Title**: The main heading for the scent profile section (default: "Scent Profile")
- **Top Notes Title**: The heading for the top notes section (default: "Top Notes")
- **Middle Notes Title**: The heading for the middle notes section (default: "Middle Notes")
- **Base Notes Title**: The heading for the base notes section (default: "Base Notes")
- **Description**: A short description text explaining the scent profile (default: "Experience the layers of this fragrance")
- **Show Description**: Toggle to show or hide the description text

## Features

- **Interactive Notes**: Each scent note has hover and click interactions
- **Animated Display**: Notes animate in sequence when the page loads
- **Mobile Optimized**: Responsive design works well on all device sizes
- **Customizable**: Easy to adjust colors through theme settings

## Customizing the Appearance

The scent visualization component inherits colors from your theme's color scheme. To customize the appearance:

1. Go to the theme editor
2. Navigate to "Theme Settings" > "Colors"
3. Adjust the following color settings:
   - **Accent 1**: Used for top notes
   - **Accent 2**: Used for middle notes
   - **Foreground**: Used for base notes
   - **Background 1 & 2**: Used for note backgrounds

## Troubleshooting

**Notes not appearing?**
- Verify that you've created the correct metafields for your product
- Check that the metafield values are comma-separated without spaces after commas
- Ensure the block is added to your product template

**Animation not working?**
- Make sure the theme's JavaScript is loading correctly
- Check browser console for any JavaScript errors

## Need Help?

If you need assistance with the Scent Visualization feature, please contact our support team.