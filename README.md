# Codeforces Day Tag

**Codeforces Day Tag** is a lightweight browser extension that automatically tags every date on Codeforces (or any webpage) with the corresponding day of the week. Using this will allow you to never have to search your calendar for the corresponding day of the week a contest will land on!

## Features

- **Detects** dates in `MMM/DD/YYYY` format (e.g., `Jan/15/2026`)
- Prepends the day of the week to each date (e.g., `Wednesday, Jan/15/2026`)
- Works for almost all browsers, including Chrome, Opera, Opera GX, Brave, Microsoft Edge, Vivaldi, and all other chromium-based browsers
- Works on all pages and posts, even with dynamically loaded content
- Minimal footprint - no external dependencies

## How it works

The script scans all text nodes for dates, converts them into JavaScript `Date` objects, and updates the text with the day of the week. New elements injected into the page are automatically enhanced.

## Installation/Usage

- Download this project as a .zip from the [latest release](https://github.com/christhabot/Codeforces-Day-Tag/releases)
- Unzip it and place it somewhere safe (for example in your Documents folder). If this folder is deleted, the extension will no longer work
- Open your browser's "Manage Extensions" page
- Enable `Developer mode`. This should be located somewhere near the top right of the screen
- Click `Load unpacked`. This should be located somewhere near the top left of the screen
- Browse and select the extension's folder
- Enable it if it's not already
- Open/refresh any codeforces page that includes a date
- There should now be a day of the week right before any date!

### Example

<img width="869" height="254" alt="image" src="https://github.com/user-attachments/assets/cbf5a85a-4649-4fac-be39-d31ae82b8504" />

## Experienced issues or want to suggest a change?

Open an [issue](https://github.com/christhabot/print-serial/issues) explaining your problem or suggestion in detail!

## Want to contribute?

Open a [pull request](https://github.com/christhabot/print-serial/pulls)! You will become a contributor in this project, and help it evolve!
