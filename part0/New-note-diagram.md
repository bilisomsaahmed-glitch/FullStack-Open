sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a note and clicks Save

    browser->>server: POST /exampleapp/new_note
    activate server
    Note right of server: Server saves the new note
    server-->>browser: 302 Found
    Note right of server: Redirect to /exampleapp/notes
    deactivate server

    browser->>server: GET /exampleapp/notes
    server-->>browser: HTML document

    browser->>server: GET /exampleapp/main.css
    server-->>browser: CSS file

    browser->>server: GET /exampleapp/main.js
    server-->>browser: JavaScript file

    Note right of browser: Browser runs the JavaScript

    browser->>server: GET /exampleapp/data.json
    server-->>browser: JSON containing the notes

    Note right of browser: Browser displays the notes, including the new note