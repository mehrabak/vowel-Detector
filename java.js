const a = prompt("Enter any alphabet of your top choice");

let b = /^[aeiouAEIOU]$/;  // Regex for vowels
let c = /^[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/;  // Regex for consonants

if (b.test(a)) {
    document.write("It's a vowel 😎");
} else if (c.test(a)) {
    document.write("It's a consonant");
} else {
    document.write("Invalid input! Please enter a single alphabet.");
}
