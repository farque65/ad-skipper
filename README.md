# Ad Skipper Chrome Extension

## Overview

**Ad Skipper** is a Chrome extension designed to enhance your browsing experience by automatically clicking the "Skip Ad" button on supported websites. This extension helps you avoid interruptions from advertisements, allowing you to enjoy your content seamlessly.

## Features

- Automatically clicks the "Skip Ad" button on supported websites.
- Minimal impact on browser performance.
- Easy to extend support for additional websites.

## Purpose

The primary purpose of the Ad Skipper extension is to improve user experience by reducing the time spent waiting for ads to finish playing. This extension is especially useful for frequent users of video streaming websites where ads are common.

## How to Use

1. **Install the Extension**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle switch in the top right corner.
   - Click on "Load unpacked" and select the directory where you created your extension (`ad-skipper`).

2. **Browse as Usual**:
   - Once the extension is installed, it will automatically detect supported websites and click the "Skip Ad" button when ads appear.

3. **Supported Websites**:
   - Currently supports YouTube and additional websites as specified in the extension's code.

## Contribution

We welcome contributions to extend the functionality of the Ad Skipper extension. If you'd like to add support for more websites, please follow the steps below:

1. **Fork the Repository**:
   - Fork the Ad Skipper repository on GitHub.

2. **Clone the Repository**:
   - Clone your forked repository to your local machine.

3. **Add the Selector**:
   - Open `content.js` and add the skip button selector for the new website to the `selectors` object. Example:

     ```javascript
     const selectors = {
       'youtube.com': '.ytp-skip-ad-button',
       'example.com': '.example-skip-ad-button', // Add new site here
       // Add more websites and their skip button selectors here
     };
     ```

4. **Test Your Changes**:
   - Load your modified extension into Chrome and test it to ensure it works correctly with the new website.

5. **Submit a Pull Request**:
   - Push your changes to your forked repository.
   - Open a pull request to the main Ad Skipper repository with a description of your changes.

6. **Review and Merge**:
   - The maintainers will review your pull request. Once approved, your changes will be merged into the main repository.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for contributing to Ad Skipper! Together, we can improve the browsing experience for everyone.
