# Vowel Detector 🔠

A simple JavaScript web application that detects whether a user-inputted character is a vowel, consonant, or invalid input.

![Demo](https://img.shields.io/badge/Demo-Available-green) ![License](https://img.shields.io/badge/License-MIT-blue)

## Description 📝

This project prompts users to enter any alphabet character and instantly tells them whether it's a vowel, consonant, or invalid input (for non-alphabet characters). Built with vanilla JavaScript, HTML, and regular expressions.

## Features ✨

- Detects vowels (A, E, I, O, U) in both lowercase and uppercase
- Identifies consonant characters
- Validates input to ensure only single alphabet characters are processed
- Case-insensitive detection
- Immediate feedback with emoji-enhanced responses 😎

## How to Use 🖱️

1. Enter any alphabet character when prompted
2. Click "OK" to submit
3. Receive instant feedback:
   - Vowel detection: "It's a vowel 😎"
   - Consonant detection: "It's a consonant"
   - Invalid input warning: "Invalid input! Please enter a single alphabet."

## Code Overview 💻

### Regex Magic
- **Vowel Check**: `^[aeiouAEIOU]$`
- **Consonant Check**: `^[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$`

### Logic Flow
1. Capture user input via `prompt()`
2. Test against vowel regex pattern
3. If not vowel, test against consonant regex
4. Handle invalid inputs with final else clause

