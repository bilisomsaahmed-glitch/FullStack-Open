sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /exampleapp/spa
    server-->>browser: HTML document

    browser->>server: GET /exampleapp/main.css
    server-->>browser: CSS file

    browser->>server: GET /exampleapp/spa.js
    server-->>browser: JavaScript file

    Note right of browser: Browser runs the JavaScript

    browser->>server: GET /exampleapp/data.json
    server-->>browser: JSON containing the notes

    Note right of browser: JavaScript displays the notes