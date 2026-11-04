// Theme handling for the newer list pages (projects.html).
// The stylesheet reads data-theme on <html>; the choice is remembered in localStorage.
// applyStoredTheme() is called inline in <head> so the page never flashes the wrong theme.

var THEME_KEY = 'projects-theme';

function applyStoredTheme() {
    var stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (e) { /* storage blocked: fall back to dark */ }
    if (stored === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

function switchTheme() {
    var root = document.documentElement;
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (next === 'light') {
        root.setAttribute('data-theme', 'light');
    } else {
        root.removeAttribute('data-theme');
    }
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
}
