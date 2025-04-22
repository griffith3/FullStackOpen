```mermaid 

sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a note and clicks "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created (new note on JSON format)
    deactivate server

    Note right of browser: The browser updates the interface dynamically adding the new note to the <ul> without refreshing/reloading the page
