//lets start
const groupItems = document.querySelectorAll('.group-item');
const mainContent = document.getElementById('main-content');
const stickyAddBtn = document.getElementById('sticky-add-btn');
const groupPopup = document.getElementById('group-popup');
const saveGroupBtn = document.getElementById('save-group-btn');
const groupList = document.getElementById('group-list');
const myNotes = document.getElementById('my-notes');

groupItems.forEach((item) => {
    item.addEventListener('click', () => {
        mainContent.innerHTML = `<h2>${item.textContent} Notes</h2><p>This is the content for the ${item.textContent} group.</p>`;
    });
});

stickyAddBtn.addEventListener('click', () => {
    groupPopup.style.display = 'flex';
});

saveGroupBtn.addEventListener('click', () => {
    const groupName = document.getElementById('new-group-name').value;
    const groupColor = document.getElementById('group-color-picker').value;

    if (groupName) {
        const newGroupItem = document.createElement('li');
        newGroupItem.className = 'group-item';
        newGroupItem.textContent = groupName;
        newGroupItem.style.backgroundColor = groupColor;
        newGroupItem.style.color = "#fff"; 
        groupList.appendChild(newGroupItem);

        newGroupItem.addEventListener('click', () => {
            mainContent.innerHTML = `<h2>${groupName} Notes</h2><p>This is the content for the ${groupName} group.</p>`;
        });

        groupPopup.style.display = 'none';
        document.getElementById('new-group-name').value = '';
    }
});
groupPopup.addEventListener('click', (e) => {
    if (e.target === groupPopup) {
        groupPopup.style.display = 'none';
    }
});

myNotes.addEventListener('click', () => {
    mainContent.innerHTML = `
        <div class="java-notes-container">
            <div id="java-content">
                <div class="hi">
                <h2>Java Notes</h2>
                <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA).</p>
                <p>Some key features of Java include:</p>
                <ul>
                    <li>Platform independence</li>
                    <li>Object-oriented</li>
                    <li>Security features</li>
                    <li>Rich API</li>
                    <li>Automatic memory management (Garbage Collection)</li>
                </ul> </div>
            </div>
            <textarea id="java-notes" placeholder="Add more notes here..."></textarea>
            <button id="add-note-btn">Add</button>
        </div>
    `;

    const addNoteBtn = document.getElementById('add-note-btn');
    const javaNotesTextarea = document.getElementById('java-notes');
    const javaContent = document.getElementById('java-content');

    addNoteBtn.addEventListener('click', () => {
        const newNote = javaNotesTextarea.value.trim();
        if (newNote) {
            const newNoteParagraph = document.createElement('p');
            newNoteParagraph.textContent = newNote;
            javaContent.appendChild(newNoteParagraph);
            javaNotesTextarea.value = '';
        }
    });
});

