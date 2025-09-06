document.addEventListener('DOMContentLoaded', function() {
    const birthYear = 2006;
    const now = new Date();
    const age = now.getFullYear() - birthYear;
    const ageSpan = document.getElementById('age');
    if (ageSpan) {
        ageSpan.textContent = age;
    }
});