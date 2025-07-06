# Text Transformer Chrome Extension

This guide helps you set up, test, and update your Chrome extension locally before publishing.

## Prerequisites
- Google Chrome browser installed
- Extension files: `manifest.json`, JavaScript, HTML/CSS, and icons

## Setup & Testing
1. **Open Extensions Page:**
   - Go to [chrome://extensions/](chrome://extensions/) or Menu > More Tools > Extensions
2. **Enable Developer Mode:**
   - Toggle **Developer mode** (top-right corner)
3. **Load Unpacked Extension:**
   - Click **Load unpacked** and select your extension folder
4. **Verify Loading:**
   - Ensure the extension icon appears in the Chrome toolbar

## Usage
1. Click the extension icon to open the popup
2. In the popup:
   - Type text in the textarea
   - Click **Pascal Case** to transform text to PascalCase
   - Click **Kebab Case** to transform text to kebab-case

## Updating the Extension
- After making changes, go to [chrome://extensions/](chrome://extensions/) and click **Reload** on your extension
- Retest all key functionality after updates