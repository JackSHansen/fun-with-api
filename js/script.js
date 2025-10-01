// Main entry point for the Dog Image Generator app
// Imports the setupButton function from modules
import { setupButton } from './modules/setupButton.js';

// Get references to DOM elements
const button = document.getElementById('generate-btn');
const img = document.getElementById('dog-image');

// Set up the button click functionality
setupButton(button, img);
