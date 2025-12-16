// --- Icons ---
const Icons = {
    sun: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    moon: `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    coffee: `<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    download: `<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    upload: `<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
    info: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    barChart: `<svg viewBox="0 0 24 24"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>`,
    checkSquare: `<svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
    copy: `<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
    check: `<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    trash: `<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
    plus: `<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    maximize: `<svg viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>`,
    minimize: `<svg viewBox="0 0 24 24"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>`,
    pin: `<svg viewBox="0 0 24 24"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>`,
    pinFilled: `<svg viewBox="0 0 24 24" fill="currentColor"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>`,
    edit: `<svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
    grid: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    list: `<svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`,
    typeText: `<svg viewBox="0 0 24 24"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>`,
    typeCode: `<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    typeLink: `<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
    density: `<svg viewBox="0 0 24 24"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`,
    history: `<svg viewBox="0 0 24 24"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><path d="M12 6v6l4 2"></path></svg>`,
    open: `<svg viewBox="0 0 24 24"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`,
    close: `<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    filter: `<svg viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>`,
    filterOff: `<svg viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" fill="none" stroke="currentColor" stroke-dasharray="4 4"></polygon></svg>`
};

// --- Storage Service (IndexedDB) ---
const DB_NAME = 'gitnotes-db';
const STORE_NAME = 'items';
const DB_VERSION = 3; // Incremented for filePath

class Storage {
    constructor() { this.db = null; }
    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => { this.db = request.result; resolve(); };
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
                    store.createIndex('timestamp', 'timestamp', { unique: false });
                    store.createIndex('repoId', 'repoId', { unique: false });
                    store.createIndex('filePath', 'filePath', { unique: false });
                } else {
                    const store = e.target.transaction.objectStore(STORE_NAME);
                    if (!store.indexNames.contains('repoId')) {
                        store.createIndex('repoId', 'repoId', { unique: false });
                    }
                    if (!store.indexNames.contains('filePath')) {
                        store.createIndex('filePath', 'filePath', { unique: false });
                    }
                }
            };
        });
    }
    async getAll() {
        if (!this.db) await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.index('timestamp').getAll();
            request.onsuccess = () => resolve(request.result.reverse());
            request.onerror = () => reject(request.error);
        });
    }
    async add(content, tags = [], title = '', repoId = null, filePath = null, branch = null) {
        if (!this.db) await this.init();
        const item = { id: crypto.randomUUID(), content, title, timestamp: Date.now(), tags, isPinned: false, history: [], repoId, filePath, branch };
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            store.put(item).onsuccess = () => resolve(item);
        });
    }
    async delete(id) {
        if (!this.db) await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(STORE_NAME, 'readwrite');
            tx.objectStore(STORE_NAME).delete(id).onsuccess = () => resolve();
        });
    }
    async clear() {
        if (!this.db) await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(STORE_NAME, 'readwrite');
            tx.objectStore(STORE_NAME).clear().onsuccess = () => resolve();
        });
    }
    async update(item) {
        if (!this.db) await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(STORE_NAME, 'readwrite');
            tx.objectStore(STORE_NAME).put(item).onsuccess = () => resolve();
        });
    }
}

// --- App Logic ---
const storage = new Storage();
let items = [];
let theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
let layout = localStorage.getItem('layout') || 'list';
let density = localStorage.getItem('density') || 'compact'; // Default to compact for side panel
let repoFilterEnabled = true; // Default to true as requested
let fileFilterEnabled = false;
let currentContext = { repoId: null, filePath: null, branch: null };

let editingId = null;
let lastDeletedItem = null;
let undoTimeout = null;
let activePanelItem = null;
let isPanelEditing = false;
let selectedItems = new Set();
let bulkMode = false;

// Elements
const listContainer = document.getElementById('listContainer');
const searchInput = document.getElementById('searchInput');
const manualInput = document.getElementById('manualInput');
const titleInput = document.getElementById('titleInput');
const tagInput = document.getElementById('tagInput');
const themeBtn = document.getElementById('themeBtn');
const layoutBtn = document.getElementById('layoutBtn');
const densityBtn = document.getElementById('densityBtn');
const repoFilterBtn = document.getElementById('repoFilterBtn');
const fileFilterBtn = document.getElementById('fileFilterBtn');
const repoContextDisplay = document.getElementById('repoContextDisplay');
const repoNameSpan = document.getElementById('repoName');
const charCount = document.getElementById('charCount');
const toast = document.getElementById('toast');
const tagSuggestions = document.getElementById('tagSuggestions');
const sidePanel = document.getElementById('sidePanel');
const sidePanelOverlay = document.getElementById('sidePanelOverlay');
const saveBtn = document.getElementById('saveBtn');
const undoBtn = document.getElementById('undoBtn');
const clearBtn = document.getElementById('clearBtn');
const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const statsBtn = document.getElementById('statsBtn');
const helpBtn = document.getElementById('helpBtn');
const bulkModeBtn = document.getElementById('bulkModeBtn');
const bulkActionsBar = document.getElementById('bulkActionsBar');
const bulkSelectionCount = document.getElementById('bulkSelectionCount');
const bulkTagBtn = document.getElementById('bulkTagBtn');
const bulkPinBtn = document.getElementById('bulkPinBtn');
const bulkExportBtn = document.getElementById('bulkExportBtn');
const bulkDeleteBtn = document.getElementById('bulkDeleteBtn');
const bulkDeselectBtn = document.getElementById('bulkDeselectBtn');

// Helper: Detect Type
function detectType(content) {
    if (content.match(/^https?:\/\/[^\s]+$/)) return { type: 'link', icon: Icons.typeLink };
    if (content.match(/[\{\}\[\]\(\);=><]/) && content.includes('\n')) return { type: 'code', icon: Icons.typeCode };
    return { type: 'text', icon: Icons.typeText };
}

// Simple Syntax Highlighting
function highlightCode(code) {
    // Basic syntax highlighting for common keywords
    const keywords = /\b(function|const|let|var|if|else|return|import|export|class|async|await|for|while|switch|case|break|continue|try|catch|throw|new|this|super|extends|static|public|private|protected|void|int|string|boolean|true|false|null|undefined)\b/g;
    const strings = /(".*?"|'.*?'|`.*?`)/g;
    const comments = /(\/\/.*?$|\/\*[\s\S]*?\*\/)/gm;
    const numbers = /\b(\d+\.?\d*)\b/g;

    let highlighted = escapeHtml(code);

    // Apply highlighting in reverse order to preserve positions
    highlighted = highlighted.replace(comments, '<span style="color:#6a737d; font-style:italic;">$1</span>');
    highlighted = highlighted.replace(strings, '<span style="color:#032f62;">$1</span>');
    highlighted = highlighted.replace(keywords, '<span style="color:#d73a49; font-weight:600;">$1</span>');
    highlighted = highlighted.replace(numbers, '<span style="color:#005cc5;">$1</span>');

    return highlighted;
}

// Helper: Auto Title
function getAutoTitle(content) {
    const firstLine = content.split('\n')[0].trim();
    if (firstLine.length > 0 && firstLine.length < 50) return firstLine;
    const sentences = content.match(/[^\.!\?]+[\.!\?]+/g);
    if (sentences && sentences[0].length < 60) return sentences[0];
    return null;
}

// Helper: Date Grouping
function getDateGroup(timestamp) {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
}

// Theme
function setTheme(newTheme) {
    theme = newTheme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeBtn.innerHTML = theme === 'dark' ? Icons.moon : (theme === 'sepia' ? Icons.coffee : Icons.sun);
}
themeBtn.addEventListener('click', () => setTheme(['light', 'dark', 'sepia'][(['light', 'dark', 'sepia'].indexOf(theme) + 1) % 3]));

// Layout
function setLayout(newLayout) {
    layout = newLayout;
    localStorage.setItem('layout', layout);
    listContainer.className = layout === 'masonry' ? 'masonry-container' : 'list-container';
    layoutBtn.innerHTML = layout === 'masonry' ? Icons.grid : Icons.list;
    render();
}
layoutBtn.addEventListener('click', () => setLayout(layout === 'list' ? 'masonry' : 'list'));

// Density
function setDensity(newDensity) {
    density = newDensity;
    localStorage.setItem('density', density);
    document.documentElement.setAttribute('data-density', density);
    densityBtn.innerHTML = Icons.density;
    render();
}
densityBtn.addEventListener('click', () => setDensity(['compact', 'standard', 'spacious'][(['compact', 'standard', 'spacious'].indexOf(density) + 1) % 3]));

// Repo Filter
function toggleRepoFilter() {
    repoFilterEnabled = !repoFilterEnabled;
    render();
}
repoFilterBtn.addEventListener('click', toggleRepoFilter);

// File Filter
function toggleFileFilter() {
    fileFilterEnabled = !fileFilterEnabled;
    render();
}
fileFilterBtn.addEventListener('click', toggleFileFilter);

// GitHub Detection
async function detectGitHubContext() {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab && tab.url && tab.url.includes('github.com')) {
            const url = new URL(tab.url);
            const pathParts = url.pathname.split('/').filter(p => p);

            // Format: /user/repo
            if (pathParts.length >= 2) {
                const repoId = `${pathParts[0]}/${pathParts[1]}`;
                let filePath = null;

                // Check for file/blob/tree
                // Format: /user/repo/blob/branch/path/to/file
                // Format: /user/repo/tree/branch/path/to/dir
                let branch = null;
                if (pathParts.length > 4 && (pathParts[2] === 'blob' || pathParts[2] === 'tree')) {
                    // pathParts[3] is branch, rest is path
                    branch = pathParts[3];
                    filePath = pathParts.slice(4).join('/');
                }

                currentContext = { repoId, filePath, branch };

                repoContextDisplay.style.display = 'flex';
                repoContextDisplay.classList.add('active');

                let contextText = repoId;
                if (filePath) {
                    contextText += ` / ${filePath}`;
                }
                repoNameSpan.textContent = contextText;
                repoNameSpan.title = contextText; // Tooltip for long paths

                render();
                return;
            }
        }
    } catch (e) {
        console.error('Failed to detect repo', e);
    }
    currentContext = { repoId: null, filePath: null, branch: null };
    repoContextDisplay.style.display = 'none';
    repoContextDisplay.classList.remove('active');
    render();
}

// Listen for tab updates to refresh repo context
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        detectGitHubContext();
    }
});

chrome.tabs.onActivated.addListener(() => {
    detectGitHubContext();
});

// --- Event Delegation ---

// List Container Events
listContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    const itemEl = e.target.closest('.item');
    const tagRemove = e.target.closest('.tag-remove');
    const dateHeader = e.target.closest('.date-header');
    const checkbox = e.target.closest('.bulk-checkbox');

    // Bulk Selection Checkbox
    if (checkbox) {
        e.stopPropagation();
        const id = checkbox.dataset.id;
        toggleItemSelection(id);
        return;
    }

    // Date Header Toggle
    if (dateHeader) {
        dateHeader.parentElement.classList.toggle('collapsed');
        return;
    }

    // Tag Remove
    if (tagRemove) {
        e.stopPropagation();
        const id = tagRemove.dataset.id;
        const tag = tagRemove.dataset.tag;
        removeTag(id, tag);
        return;
    }

    // Buttons
    if (btn) {
        e.stopPropagation();
        const action = btn.dataset.action;
        const id = btn.dataset.id;

        if (!action || !id) return;

        if (action === 'open-panel') openSidePanel(id);
        if (action === 'toggle-pin') togglePin(id);
        if (action === 'enable-edit') enableEdit(id);
        if (action === 'copy') copyItem(id, btn);
        if (action === 'delete') deleteItem(id);
        if (action === 'add-tag') addTagToItem(id);
        if (action === 'save-edit') saveEdit(id);
        if (action === 'cancel-edit') cancelEdit();
        if (action === 'show-history') showHistory(id);
        if (action === 'edit-path') editPath(id);
        return;
    }

    // Repo Badge Click
    const repoBadge = e.target.closest('.repo-badge');
    if (repoBadge) {
        e.stopPropagation();
        const repoId = repoBadge.dataset.repo;
        if (repoId) {
            chrome.tabs.create({ url: `https://github.com/${repoId}` });
        }
        return;
    }

    // Item Click (Select/Open)
    if (itemEl) {
        // If clicking inside content or just the item card
        if (!e.target.closest('input') && !e.target.closest('textarea')) {
            const id = itemEl.id.replace('item-', '');
            // Double click handled by dblclick listener, but we can handle single click selection here if needed
        }
    }
});

listContainer.addEventListener('dblclick', (e) => {
    const itemEl = e.target.closest('.item');
    if (itemEl && !e.target.closest('button') && !e.target.closest('input') && !e.target.closest('textarea')) {
        const id = itemEl.id.replace('item-', '');
        const item = items.find(i => i.id === id);
        if (item && item.repoId) {
            // Construct the full GitHub URL with file path if available
            let githubUrl = `https://github.com/${item.repoId}`;
            if (item.filePath) {
                // Use the saved branch, or default to 'main'
                const branch = item.branch || 'main';
                githubUrl += `/blob/${branch}/${item.filePath}`;
            }
            chrome.tabs.create({ url: githubUrl });
        } else {
            openSidePanel(id);
        }
    }
});

// Side Panel Events
sidePanel.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    const tagRemove = e.target.closest('.tag-remove');
    const repoBadge = e.target.closest('.repo-badge');

    if (repoBadge) {
        e.stopPropagation();
        const repoId = repoBadge.dataset.repo;
        if (repoId) {
            chrome.tabs.create({ url: `https://github.com/${repoId}` });
        }
        return;
    }

    if (tagRemove) {
        e.stopPropagation();
        const id = tagRemove.dataset.id;
        const tag = tagRemove.dataset.tag;
        removeTag(id, tag);
        return;
    }

    if (btn) {
        const action = btn.dataset.action;
        // Some actions might not have ID if they operate on activePanelItem

        if (action === 'close') closeSidePanel();
        if (action === 'enable-panel-edit') enablePanelEdit();
        if (action === 'toggle-pin') togglePin(activePanelItem.id);
        if (action === 'show-history') showHistory(activePanelItem.id);
        if (action === 'copy-panel') copyPanelContent();
        if (action === 'delete-panel') { deleteItem(activePanelItem.id); closeSidePanel(); }
        if (action === 'save-panel-edit') savePanelEdit();
        if (action === 'cancel-panel-edit') { isPanelEditing = false; renderSidePanel(); }
        if (action === 'add-tag') addTagToItem(activePanelItem.id);
        if (action === 'back-to-current') renderSidePanel();
        if (action === 'restore-version') {
            const index = parseInt(btn.dataset.index);
            restoreVersion(index);
        }
        if (action === 'edit-path') editPath(activePanelItem.id);
    }
});

// Side Panel Logic
function openSidePanel(id) {
    const item = items.find(i => i.id === id);
    if (!item) return;
    activePanelItem = item;
    isPanelEditing = false;
    renderSidePanel();
    sidePanel.classList.add('visible');
    sidePanelOverlay.classList.add('visible');
}

function renderSidePanel() {
    if (!activePanelItem) return;
    const item = activePanelItem;
    const type = detectType(item.content);
    const date = new Date(item.timestamp).toLocaleString();

    document.getElementById('panelMeta').innerHTML = `
        <span style="display:flex; align-items:center; gap:6px;">${type.icon} ${type.type.toUpperCase()}</span>
        <span>•</span>
        <span>${date}</span>
        ${item.repoId ? `<span>•</span><span class="repo-badge" data-repo="${item.repoId}" style="font-family:monospace; font-size:10px; background:var(--hover); padding:2px 4px; border-radius:4px; cursor:pointer; user-select:none;" title="Open Repo">${item.repoId}${item.filePath ? ' / ' + item.filePath : ''}</span>` : ''}
    `;

    document.getElementById('panelActions').innerHTML = `
        <button data-action="enable-panel-edit" data-tooltip="Edit">${Icons.edit}</button>
        <button data-action="edit-path" data-tooltip="Move/Edit Path" style="font-family:monospace; font-size:12px;">./</button>
        <button data-action="toggle-pin" data-tooltip="${item.isPinned ? 'Unpin' : 'Pin'}">${item.isPinned ? Icons.pinFilled : Icons.pin}</button>
        ${item.history && item.history.length > 0 ? `<button data-action="show-history" data-tooltip="History (${item.history.length})">${Icons.history}</button>` : ''}
        <button data-action="copy-panel" data-tooltip="Copy">${Icons.copy}</button>
        <button data-action="delete-panel" data-tooltip="Delete" style="color:var(--accent);">${Icons.trash}</button>
        <div style="width:1px; height:16px; background:var(--border); margin:0 4px;"></div>
        <button data-action="close" data-tooltip="Close">${Icons.close}</button>
    `;

    if (isPanelEditing) {
        document.getElementById('panelContent').innerHTML = `
            <input type="text" id="panelTitleEdit" value="${escapeHtml(item.title || '')}" placeholder="Title (optional)" style="width:100%; padding:8px; border:1px solid var(--border); background:var(--bg); color:var(--text); font-size:14px; font-weight:600; margin-bottom:12px;">
            <textarea id="panelEditInput" class="content-edit" style="height:100%; min-height:300px;">${escapeHtml(item.content)}</textarea>
            <div style="display:flex; gap:12px; margin-top:16px; justify-content:flex-end;">
                <button class="btn-secondary" data-action="cancel-panel-edit">Cancel</button>
                <button class="btn-primary" data-action="save-panel-edit">Save Changes</button>
            </div>
        `;
    } else {
        const titleHtml = item.title ? `<div style="font-size:16px; font-weight:600; margin-bottom:16px; font-family:var(--font-sans);">${escapeHtml(item.title)}</div>` : '';
        const contentHtml = type.type === 'code' ? highlightCode(item.content) : escapeHtml(item.content);
        document.getElementById('panelContent').innerHTML = titleHtml + contentHtml;
    }

    document.getElementById('panelFooter').innerHTML = `
        <div class="tags" style="flex:1;">
            ${item.tags.map(tag => `<span class="tag">#${escapeHtml(tag)}<span class="tag-remove" data-id="${item.id}" data-tag="${escapeHtml(tag)}">×</span></span>`).join('')}
            <button class="add-tag" data-action="add-tag">${Icons.plus} Tag</button>
        </div>
    `;
}

function enablePanelEdit() {
    isPanelEditing = true;
    renderSidePanel();
}

async function savePanelEdit() {
    const val = document.getElementById('panelEditInput').value;
    const titleVal = document.getElementById('panelTitleEdit').value.trim();
    if (val && activePanelItem) {
        if (!activePanelItem.history) activePanelItem.history = [];
        activePanelItem.history.push({ content: activePanelItem.content, title: activePanelItem.title || '', timestamp: Date.now() });
        activePanelItem.content = val;
        activePanelItem.title = titleVal;
        await storage.update(activePanelItem);
        isPanelEditing = false;
        renderSidePanel();
        await loadItems();
    }
}

function closeSidePanel() {
    sidePanel.classList.remove('visible');
    sidePanelOverlay.classList.remove('visible');
    activePanelItem = null;
}

async function copyPanelContent() {
    if (activePanelItem) {
        await navigator.clipboard.writeText(activePanelItem.content);
    }
}

// Render
function render() {
    const query = searchInput.value.toLowerCase();

    // Filter Logic
    let filtered = items.filter(item =>
        item.content.toLowerCase().includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query)) ||
        (item.title && item.title.toLowerCase().includes(query))
    );

    // Repo Filter
    if (repoFilterEnabled && currentContext.repoId) {
        filtered = filtered.filter(item => item.repoId === currentContext.repoId);
        repoFilterBtn.innerHTML = Icons.filter;
        repoFilterBtn.style.color = 'var(--text)';
        repoFilterBtn.setAttribute('data-tooltip', `Showing notes for ${currentContext.repoId}`);
        repoFilterBtn.setAttribute('data-tooltip', `Showing notes for ${currentContext.repoId}`);
    } else {
        repoFilterBtn.innerHTML = Icons.filterOff;
        repoFilterBtn.style.color = 'var(--text-sub)';
        repoFilterBtn.setAttribute('data-tooltip', 'Showing all notes');
    }

    // File Filter
    if (fileFilterEnabled && currentContext.filePath) {
        filtered = filtered.filter(item => item.filePath === currentContext.filePath);
        fileFilterBtn.style.color = 'var(--text)';
        fileFilterBtn.style.opacity = '1';
        fileFilterBtn.setAttribute('data-tooltip', `Showing notes for ${currentContext.filePath.split('/').pop()}`);
    } else {
        fileFilterBtn.style.color = 'var(--text-sub)';
        fileFilterBtn.style.opacity = currentContext.filePath ? '0.7' : '0.3'; // Dim if no file context
        fileFilterBtn.setAttribute('data-tooltip', 'Filter by current file');
    }

    const sorted = filtered.sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return b.timestamp - a.timestamp;
    });

    tagSuggestions.innerHTML = Array.from(new Set(items.flatMap(i => i.tags))).map(t => `<option value="${t}">`).join('');

    if (sorted.length === 0) {
        listContainer.innerHTML = `<div class="empty-state" style="text-align:center; padding:60px 0; color:var(--text-sub);">
            <p>${repoFilterEnabled && currentContext.repoId ? `No notes for ${currentContext.repoId}` : 'No items found.'}</p>
        </div>`;
        return;
    }

    // Tree View for Repo Context
    if (repoFilterEnabled && currentContext.repoId) {
        renderTree(sorted);
        return;
    }

    if (layout === 'list') {
        const groups = {};
        sorted.forEach(item => {
            const group = item.isPinned ? 'Pinned' : getDateGroup(item.timestamp);
            if (!groups[group]) groups[group] = [];
            groups[group].push(item);
        });

        listContainer.innerHTML = Object.entries(groups).map(([group, groupItems]) => `
            <div class="date-group">
                <div class="date-header">${group}</div>
                <div class="group-items">
                    ${groupItems.map(item => renderItem(item)).join('')}
                </div>
            </div>
        `).join('');
    } else {
        listContainer.innerHTML = sorted.map(item => renderItem(item)).join('');
    }

    if (editingId) {
        const el = document.getElementById(`edit-${editingId}`);
        if (el) { el.focus(); el.style.height = el.scrollHeight + 'px'; }
    }
}

// --- Tree View Logic ---
function buildTree(items) {
    const root = {};

    items.forEach(item => {
        // If no filePath, put in root
        const path = item.filePath || '';
        const parts = path.split('/').filter(p => p);

        let currentLevel = root;
        parts.forEach((part, index) => {
            if (!currentLevel[part]) {
                currentLevel[part] = {
                    __name: part,
                    __path: parts.slice(0, index + 1).join('/'),
                    __children: {},
                    __items: []
                };
            }
            if (index === parts.length - 1) {
                currentLevel[part].__items.push(item);
            }
            currentLevel = currentLevel[part].__children;
        });

        if (parts.length === 0) {
            // Root items
            if (!root['__root__']) root['__root__'] = { __name: 'Root', __path: '', __children: {}, __items: [] };
            root['__root__'].__items.push(item);
        }
    });

    return root;
}

function renderTree(items) {
    const tree = buildTree(items);
    listContainer.innerHTML = renderTreeLevel(tree);
}

function renderTreeLevel(level, depth = 0) {
    let html = '';

    // Sort: Folders first, then files? 
    // Actually, in our structure, everything in `level` is a node (file or folder)
    // except __root__.

    const nodes = Object.entries(level).sort((a, b) => {
        if (a[0] === '__root__') return -1;
        if (b[0] === '__root__') return 1;
        return a[0].localeCompare(b[0]);
    });

    for (const [key, node] of nodes) {
        const isRoot = key === '__root__';
        const hasChildren = Object.keys(node.__children).length > 0;
        const hasItems = node.__items.length > 0;

        if (!hasChildren && !hasItems) continue;

        const indent = depth * 12;

        if (!isRoot) {
            // Render Folder/File Header
            const icon = hasChildren ? Icons.open : Icons.typeCode; // Simplified icon logic
            // Actually, if it has children it's a folder. If it has items but no children, it's likely a file.
            // But a folder can have items too (if we allow notes on folders? No, user said file specific).
            // Let's assume nodes with items are files.

            const isFile = hasItems;
            const folderIcon = isFile ? Icons.typeCode : (hasChildren ? Icons.grid : Icons.list); // Placeholder icons

            html += `
                <div class="tree-node" style="margin-left:${indent}px; margin-top:4px;">
                    <div class="tree-header" style="display:flex; align-items:center; gap:6px; padding:4px; border-radius:4px; cursor:pointer; user-select:none; color:var(--text-sub);" onclick="this.nextElementSibling.classList.toggle('hidden')">
                        <span style="width:16px; height:16px;">${folderIcon}</span>
                        <span style="font-weight:500; font-size:13px;">${escapeHtml(node.__name)}</span>
                        <span style="font-size:11px; opacity:0.6;">(${node.__items.length})</span>
                    </div>
                    <div class="tree-children">
            `;
        } else {
            html += `<div class="tree-root">`;
        }

        // Render Items in this node
        if (node.__items.length > 0) {
            html += `<div class="tree-items" style="margin-left:${isRoot ? 0 : 12}px; border-left: ${isRoot ? 'none' : '1px solid var(--border)'};">`;
            node.__items.forEach(item => {
                html += renderItem(item);
            });
            html += `</div>`;
        }

        // Render Children
        if (hasChildren) {
            html += renderTreeLevel(node.__children, isRoot ? depth : depth + 1);
        }

        if (!isRoot) {
            html += `</div></div>`;
        } else {
            html += `</div>`;
        }
    }

    return html;
}

function renderItem(item) {
    const isLong = item.content.split('\n').length > 4 || item.content.length > 150;
    const isEditing = item.id === editingId;
    const type = detectType(item.content);

    const displayTitle = item.title || getAutoTitle(item.content);
    const displayContent = (item.title || !displayTitle) ? item.content : item.content.substring(displayTitle.length).trim();

    let classes = `item ${item.isPinned ? 'pinned' : ''}`;
    if (item.content.includes('TODO')) classes += ' highlight-todo';
    if (type.type === 'code') classes += ' highlight-code';
    if (selectedItems.has(item.id)) classes += ' selected';

    // In tree view (repo context), don't show file path in item as it's grouped
    const showPath = !repoFilterEnabled || !currentContext.repoId;

    return `
        <div class="${classes}" id="item-${item.id}">
            <div class="item-header">
                ${bulkMode ? `<input type="checkbox" class="bulk-checkbox" data-id="${item.id}" ${selectedItems.has(item.id) ? 'checked' : ''} style="margin-right:8px; cursor:pointer;">` : ''}
                <div class="item-meta">
                    <span class="type-icon" title="${type.type}">${type.icon}</span>
                    <span class="timestamp" title="${new Date(item.timestamp).toLocaleString()}">
                        ${timeAgo(item.timestamp)}
                        ${item.history && item.history.length > 0 ? `<span data-action="show-history" data-id="${item.id}" title="View History" style="margin-left:4px; cursor:pointer; text-decoration:underline;">(v${item.history.length + 1})</span>` : ''}
                    </span>
                    ${!repoFilterEnabled && item.repoId ? `<span class="repo-badge" data-repo="${item.repoId}" style="font-size:9px; background:var(--hover); padding:1px 3px; border-radius:3px; margin-left:4px; cursor:pointer; user-select:none;" title="Open Repo">${item.repoId}${item.filePath ? ' / ' + item.filePath.split('/').pop() : ''}</span>` : ''}
                    ${showPath && !item.repoId && item.filePath ? `<span style="font-size:9px; opacity:0.7; margin-left:4px;" title="${item.filePath}">${item.filePath.split('/').pop()}</span>` : ''}
                </div>
                <div class="actions">
                    <button data-action="open-panel" data-id="${item.id}" data-tooltip="Open">${Icons.open}</button>
                    <button data-action="toggle-pin" data-id="${item.id}" data-tooltip="${item.isPinned ? 'Unpin' : 'Pin'}">${item.isPinned ? Icons.pinFilled : Icons.pin}</button>
                    <button data-action="enable-edit" data-id="${item.id}" data-tooltip="Edit">${Icons.edit}</button>
                    <button data-action="edit-path" data-id="${item.id}" data-tooltip="Move/Edit Path" style="font-family:monospace; font-size:10px;">./</button>
                    <button data-action="copy" data-id="${item.id}" data-tooltip="Copy">${Icons.copy}</button>
                    <button data-action="delete" data-id="${item.id}" data-tooltip="Delete" style="color: var(--accent)">${Icons.trash}</button>
                </div>
            </div>
            
            ${isEditing ? `
                <input type="text" id="edit-title-${item.id}" value="${escapeHtml(item.title || '')}" placeholder="Title (optional)" style="width:100%; padding:6px; border:1px solid var(--border); background:var(--hover); color:var(--text); font-size:13px; font-weight:600; margin-bottom:8px;">
                <textarea class="content-edit" id="edit-${item.id}" onkeydown="if(event.key==='Enter' && !event.shiftKey) { event.preventDefault(); document.querySelector('button[data-action=\\'save-edit\\'][data-id=\\'${item.id}\\']').click(); }">${escapeHtml(item.content)}</textarea>
                <div style="display:flex; gap:8px; margin-top:8px;">
                    <button data-action="save-edit" data-id="${item.id}" style="background:var(--text); color:var(--bg); font-size:12px; padding:4px 12px;">Save</button>
                    <button data-action="cancel-edit" data-id="${item.id}" style="font-size:12px; padding:4px 12px;">Cancel</button>
                </div>
            ` : `
                <div class="content ${isLong ? '' : 'expanded'}" id="content-${item.id}">
                    ${displayTitle ? `<span class="content-title">${escapeHtml(displayTitle)}</span>` : ''}
                    ${type.type === 'code' ? highlightCode(displayContent) : escapeHtml(displayContent)}
                </div>
                ${isLong ? `<button class="expand-btn visible" data-action="open-panel" data-id="${item.id}">Show more</button>` : ''}
            `}

            <div class="tags">
                ${item.tags.map(tag => `<span class="tag">#${escapeHtml(tag)}<span class="tag-remove" data-id="${item.id}" data-tag="${escapeHtml(tag)}">×</span></span>`).join('')}
                <button class="add-tag" data-action="add-tag" data-id="${item.id}">${Icons.plus} Tag</button>
            </div>
        </div>
    `;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function timeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return "Just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return Math.floor(hours / 24) + "d ago";
}

// Actions
async function saveContent() {
    const content = manualInput.value.trim();
    const tagsStr = tagInput.value.trim();
    const title = titleInput.value.trim();
    if (content) {
        const tags = tagsStr ? tagsStr.split(',').map(t => t.trim()).filter(t => t) : [];
        // Save with currentRepo context
        await storage.add(content, tags, title, currentContext.repoId, currentContext.filePath, currentContext.branch);
        manualInput.value = '';
        tagInput.value = '';
        titleInput.value = '';
        charCount.textContent = '0 chars';
        manualInput.style.height = '80px';
        await loadItems();
    }
}
saveBtn.addEventListener('click', saveContent);

// Input Logic
manualInput.addEventListener('input', () => {
    manualInput.style.height = 'auto';
    manualInput.style.height = Math.max(80, manualInput.scrollHeight) + 'px';
    charCount.textContent = `${manualInput.value.length} chars`;
});

manualInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        saveContent();
    }
});

tagInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        saveContent();
    }
});

// Shortcuts
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        if (editingId) saveEdit(editingId);
        else saveContent();
    }
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        manualInput.focus();
    }
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'l') {
        e.preventDefault();
        themeBtn.click();
    }
    if (e.key === 'Escape') {
        closeSidePanel();
    }
});

// Item Actions
async function copyItem(id, btn) {
    const item = items.find(i => i.id === id);
    if (item) {
        await navigator.clipboard.writeText(item.content);
        const originalIcon = btn.innerHTML;
        btn.innerHTML = Icons.check;
        setTimeout(() => btn.innerHTML = originalIcon, 2000);
    }
}

async function deleteItem(id) {
    const item = items.find(i => i.id === id);
    if (item) {
        lastDeletedItem = item;
        await storage.delete(id);
        await loadItems();
        toast.classList.add('visible');
        if (undoTimeout) clearTimeout(undoTimeout);
        undoTimeout = setTimeout(() => { toast.classList.remove('visible'); lastDeletedItem = null; }, 5000);
    }
}

undoBtn.addEventListener('click', async () => {
    if (lastDeletedItem) {
        await storage.update(lastDeletedItem);
        toast.classList.remove('visible');
        lastDeletedItem = null;
        await loadItems();
    }
});

clearBtn.addEventListener('click', async () => {
    if (confirm('Delete ALL items?')) {
        await storage.clear();
        await loadItems();
    }
});

async function togglePin(id) {
    const item = items.find(i => i.id === id);
    if (item) {
        item.isPinned = !item.isPinned;
        await storage.update(item);
        await loadItems();
        if (activePanelItem && activePanelItem.id === id) {
            activePanelItem.isPinned = item.isPinned;
            renderSidePanel();
        }
    }
}

async function addTagToItem(id) {
    const tag = prompt('Enter tag name:');
    if (tag && tag.trim()) {
        const item = items.find(i => i.id === id);
        if (item && !item.tags.includes(tag.trim())) {
            item.tags.push(tag.trim());
            await storage.update(item);
            await loadItems();
            if (activePanelItem && activePanelItem.id === id) {
                activePanelItem.tags = item.tags;
                renderSidePanel();
            }
        }
    }
}

async function removeTag(id, tag) {
    const item = items.find(i => i.id === id);
    if (item) {
        item.tags = item.tags.filter(t => t !== tag);
        await storage.update(item);
        await loadItems();
        if (activePanelItem && activePanelItem.id === id) {
            activePanelItem.tags = item.tags;
            renderSidePanel();
        }
    }
}

function enableEdit(id) {
    editingId = id;
    render();
}

function cancelEdit() {
    editingId = null;
    render();
}

async function saveEdit(id) {
    const val = document.getElementById(`edit-${id}`).value.trim();
    const titleVal = document.getElementById(`edit-title-${id}`)?.value.trim() || '';
    if (val) {
        const item = items.find(i => i.id === id);
        if (!item.history) item.history = [];
        item.history.push({ content: item.content, title: item.title || '', timestamp: Date.now() });
        item.content = val;
        item.title = titleVal;
        await storage.update(item);
        editingId = null;
        await loadItems();
    }
}



async function editPath(id) {
    const item = items.find(i => i.id === id);
    if (item) {
        const newPath = prompt('Enter new file path (e.g., src/utils.js) or leave empty for repo root:', item.filePath || '');
        if (newPath !== null) {
            item.filePath = newPath.trim() || null;
            await storage.update(item);
            await loadItems();
            if (activePanelItem && activePanelItem.id === id) {
                renderSidePanel();
            }
        }
    }
}

// Diff Algorithm
function diff(text1, text2) {
    const words1 = text1.split(/(\s+)/);
    const words2 = text2.split(/(\s+)/);
    let i = 0, j = 0;
    let result = '';

    while (i < words1.length && j < words2.length) {
        if (words1[i] === words2[j]) {
            result += escapeHtml(words1[i]);
            i++; j++;
        } else {
            let k = 1;
            let found = false;
            const maxLookAhead = 20;

            while (k < maxLookAhead) {
                if (i + k < words1.length && words1[i + k] === words2[j]) {
                    for (let x = 0; x < k; x++) {
                        result += `<span class="diff-del">${escapeHtml(words1[i + x])}</span>`;
                    }
                    i += k;
                    found = true;
                    break;
                }
                if (j + k < words2.length && words1[i] === words2[j + k]) {
                    for (let x = 0; x < k; x++) {
                        result += `<span class="diff-ins">${escapeHtml(words2[j + x])}</span>`;
                    }
                    j += k;
                    found = true;
                    break;
                }
                k++;
            }

            if (!found) {
                result += `<span class="diff-del">${escapeHtml(words1[i])}</span>`;
                result += `<span class="diff-ins">${escapeHtml(words2[j])}</span>`;
                i++; j++;
            }
        }
    }

    while (i < words1.length) result += `<span class="diff-del">${escapeHtml(words1[i++])}</span>`;
    while (j < words2.length) result += `<span class="diff-ins">${escapeHtml(words2[j++])}</span>`;

    return result;
}

// Version History
function showHistory(id) {
    const item = items.find(i => i.id === id);
    if (!item || !item.history || item.history.length === 0) return;

    activePanelItem = item;
    isPanelEditing = false;
    sidePanel.classList.add('visible');
    sidePanelOverlay.classList.add('visible');
    renderHistoryPanel();
}

function renderHistoryPanel() {
    if (!activePanelItem) return;
    const item = activePanelItem;

    document.getElementById('panelMeta').innerHTML = `
        <span style="font-weight:600;">Version History</span>
        <span>•</span>
        <span>${item.history.length} previous versions</span>
    `;

    document.getElementById('panelActions').innerHTML = `
        <button data-action="back-to-current" data-tooltip="Back to Current">${Icons.close}</button>
    `;

    const historyHtml = item.history.slice().reverse().map((ver, idx) => {
        const diffHtml = diff(item.content, ver.content);
        const versionTitle = ver.title ? `<div style="font-weight:600; margin-bottom:8px;">${escapeHtml(ver.title)}</div>` : '';

        return `
            <div style="border:1px solid var(--border); padding:16px; border-radius:4px; margin-bottom:16px; background:var(--bg);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding-bottom:12px; border-bottom:1px solid var(--border);">
                    <div style="display:flex; flex-direction:column; gap:2px;">
                        <span style="font-weight:600; font-size:13px;">Version ${item.history.length - idx}</span>
                        <span style="font-size:11px; color:var(--text-sub);">${new Date(ver.timestamp).toLocaleString()}</span>
                    </div>
                    <button data-action="restore-version" data-index="${item.history.length - 1 - idx}" style="background:var(--hover); border:1px solid var(--border); padding:6px 12px; border-radius:4px; font-size:12px; font-weight:600; cursor:pointer;">Restore</button>
                </div>
                ${versionTitle}
                <div style="font-family:var(--font-mono); font-size:13px; white-space:pre-wrap; line-height:1.6;">${diffHtml}</div>
            </div>
        `;
    }).join('');

    const currentTitle = item.title ? `<div style="font-weight:600; margin-bottom:8px;">${escapeHtml(item.title)}</div>` : '';

    document.getElementById('panelContent').innerHTML = `
        <div style="margin-bottom:32px;">
            <div style="font-size:14px; font-weight:bold; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                Current Version
                <span style="font-size:11px; font-weight:normal; color:var(--text-sub); background:var(--hover); padding:2px 6px; border-radius:4px;">Live</span>
            </div>
            <div style="border:1px solid var(--text); padding:16px; border-radius:4px; background:var(--bg); font-family:var(--font-mono); font-size:13px; white-space:pre-wrap; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
                ${currentTitle}
                ${escapeHtml(item.content)}
            </div>
        </div>

        <div style="font-size:14px; font-weight:bold; margin-bottom:16px;">History & Diffs</div>
        <div style="font-size:11px; color:var(--text-sub); margin-bottom:16px; background:var(--hover); padding:8px; border-radius:4px;">
            <span style="color:#24292e; background:#e6ffec; padding:0 4px;">Green</span> = Content in this version (will be restored)<br>
            <span style="color:#24292e; background:#ffebe9; text-decoration:line-through; padding:0 4px;">Red</span> = Content in current version (will be lost)
        </div>
        ${historyHtml}
    `;

    document.getElementById('panelFooter').innerHTML = '';
}

async function restoreVersion(index) {
    if (!activePanelItem) return;
    if (confirm('Restore this version? Current content will be saved to history.')) {
        const item = activePanelItem;
        const versionToRestore = item.history[index];

        item.history.push({ content: item.content, title: item.title || '', timestamp: Date.now() });
        item.content = versionToRestore.content;
        item.title = versionToRestore.title || '';

        await storage.update(item);
        renderSidePanel();
        await loadItems();
    }
}

// BMC Widget Logic
function initBmc() {
    const state = localStorage.getItem('bmcState');
    if (state === 'minimized') {
        document.getElementById('bmcWidget').classList.add('minimized');
    }

    document.getElementById('bmcClose').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const widget = document.getElementById('bmcWidget');
        widget.classList.add('minimized');
        localStorage.setItem('bmcState', 'minimized');
    });

    document.getElementById('bmcLink').addEventListener('click', (e) => {
        const widget = document.getElementById('bmcWidget');
        if (widget.classList.contains('minimized')) {
            e.preventDefault();
            widget.classList.remove('minimized');
            localStorage.setItem('bmcState', 'expanded');
        }
    });
}

// Export/Import Functions
async function exportNotes() {
    const data = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        notes: items
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gitnotes-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Notes exported successfully!');
}

async function importNotes() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const text = await file.text();
            const data = JSON.parse(text);

            if (!data.notes || !Array.isArray(data.notes)) {
                showToast('Invalid backup file format!');
                return;
            }

            const importCount = data.notes.length;
            if (!confirm(`Import ${importCount} notes? This will add to your existing notes.`)) return;

            for (const note of data.notes) {
                await storage.update(note);
            }

            await loadItems();
            showToast(`Successfully imported ${importCount} notes!`);
        } catch (err) {
            showToast('Error importing notes: ' + err.message);
        }
    };
    input.click();
}

function showToast(message, duration = 3000) {
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), duration);
}

// Statistics Dashboard
function showStatistics() {
    const totalNotes = items.length;
    const totalChars = items.reduce((sum, item) => sum + item.content.length, 0);
    const totalTags = new Set(items.flatMap(i => i.tags)).size;
    const pinnedNotes = items.filter(i => i.isPinned).length;
    const codeNotes = items.filter(i => detectType(i.content).type === 'code').length;
    const linkNotes = items.filter(i => detectType(i.content).type === 'link').length;
    const repoCount = new Set(items.map(i => i.repoId).filter(Boolean)).size;

    const oldestNote = items.length > 0 ? new Date(Math.min(...items.map(i => i.timestamp))) : null;
    const newestNote = items.length > 0 ? new Date(Math.max(...items.map(i => i.timestamp))) : null;

    const avgLength = totalNotes > 0 ? Math.round(totalChars / totalNotes) : 0;

    const topTags = Object.entries(
        items.flatMap(i => i.tags).reduce((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1;
            return acc;
        }, {})
    ).sort((a, b) => b[1] - a[1]).slice(0, 5);

    activePanelItem = { id: 'stats' };

    document.getElementById('panelMeta').innerHTML = `
        <span style="display:flex; align-items:center; gap:6px;">${Icons.barChart} STATISTICS</span>
    `;

    document.getElementById('panelActions').innerHTML = `
        <button data-action="close" data-tooltip="Close">${Icons.close}</button>
    `;

    document.getElementById('panelContent').innerHTML = `
        <div style="display:flex; flex-direction:column; gap:24px;">
            <div>
                <h2 style="font-size:18px; font-weight:700; margin:0 0 16px 0; font-family:var(--font-sans);">Overview</h2>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                    <div style="background:var(--hover); padding:16px; border-radius:8px;">
                        <div style="font-size:32px; font-weight:700; color:var(--text);">${totalNotes}</div>
                        <div style="font-size:12px; color:var(--text-sub); margin-top:4px;">Total Notes</div>
                    </div>
                    <div style="background:var(--hover); padding:16px; border-radius:8px;">
                        <div style="font-size:32px; font-weight:700; color:var(--text);">${repoCount}</div>
                        <div style="font-size:12px; color:var(--text-sub); margin-top:4px;">Repositories</div>
                    </div>
                    <div style="background:var(--hover); padding:16px; border-radius:8px;">
                        <div style="font-size:32px; font-weight:700; color:var(--text);">${totalTags}</div>
                        <div style="font-size:12px; color:var(--text-sub); margin-top:4px;">Unique Tags</div>
                    </div>
                    <div style="background:var(--hover); padding:16px; border-radius:8px;">
                        <div style="font-size:32px; font-weight:700; color:var(--text);">${pinnedNotes}</div>
                        <div style="font-size:12px; color:var(--text-sub); margin-top:4px;">Pinned Notes</div>
                    </div>
                </div>
            </div>

            <div>
                <h2 style="font-size:18px; font-weight:700; margin:0 0 16px 0; font-family:var(--font-sans);">Content Types</h2>
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <div style="display:flex; justify-content:space-between; padding:8px; background:var(--hover); border-radius:4px;">
                        <span>${Icons.typeText} Text Notes</span>
                        <span style="font-weight:600;">${totalNotes - codeNotes - linkNotes}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:8px; background:var(--hover); border-radius:4px;">
                        <span>${Icons.typeCode} Code Snippets</span>
                        <span style="font-weight:600;">${codeNotes}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; padding:8px; background:var(--hover); border-radius:4px;">
                        <span>${Icons.typeLink} Links</span>
                        <span style="font-weight:600;">${linkNotes}</span>
                    </div>
                </div>
            </div>

            ${topTags.length > 0 ? `
            <div>
                <h2 style="font-size:18px; font-weight:700; margin:0 0 16px 0; font-family:var(--font-sans);">Top Tags</h2>
                <div style="display:flex; flex-direction:column; gap:8px;">
                    ${topTags.map(([tag, count]) => `
                        <div style="display:flex; justify-content:space-between; align-items:center; padding:8px; background:var(--hover); border-radius:4px;">
                            <span style="font-weight:500;">#${escapeHtml(tag)}</span>
                            <span style="background:var(--text); color:var(--bg); padding:2px 8px; border-radius:12px; font-size:11px; font-weight:600;">${count}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}

            <div>
                <h2 style="font-size:18px; font-weight:700; margin:0 0 16px 0; font-family:var(--font-sans);">Activity</h2>
                <div style="display:flex; flex-direction:column; gap:8px; font-size:13px;">
                    <div style="padding:8px; background:var(--hover); border-radius:4px;">
                        <strong>Average Note Length:</strong> ${avgLength} characters
                    </div>
                    ${oldestNote ? `
                    <div style="padding:8px; background:var(--hover); border-radius:4px;">
                        <strong>First Note:</strong> ${oldestNote.toLocaleDateString()}
                    </div>
                    ` : ''}
                    ${newestNote ? `
                    <div style="padding:8px; background:var(--hover); border-radius:4px;">
                        <strong>Latest Note:</strong> ${newestNote.toLocaleDateString()}
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;

    document.getElementById('panelFooter').innerHTML = '';
    sidePanel.classList.add('visible');
    sidePanelOverlay.classList.add('visible');
}

// Keyboard Shortcuts Help
function showKeyboardShortcuts() {
    activePanelItem = { id: 'help' };

    document.getElementById('panelMeta').innerHTML = `
        <span style="display:flex; align-items:center; gap:6px;">${Icons.info} KEYBOARD SHORTCUTS</span>
    `;

    document.getElementById('panelActions').innerHTML = `
        <button data-action="close" data-tooltip="Close">${Icons.close}</button>
    `;

    const shortcuts = [
        { keys: 'Cmd/Ctrl + Enter', desc: 'Save current note or edit' },
        { keys: 'Cmd/Ctrl + Shift + K', desc: 'Focus note input' },
        { keys: 'Cmd/Ctrl + Shift + L', desc: 'Toggle theme' },
        { keys: 'Escape', desc: 'Close side panel' },
        { keys: 'Enter', desc: 'Save tag input (when focused)' }
    ];

    document.getElementById('panelContent').innerHTML = `
        <div style="display:flex; flex-direction:column; gap:16px;">
            <p style="font-family:var(--font-sans); color:var(--text-sub); margin:0;">
                Use these keyboard shortcuts to navigate GitNotes faster:
            </p>
            <div style="display:flex; flex-direction:column; gap:12px;">
                ${shortcuts.map(({ keys, desc }) => `
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:var(--hover); border-radius:4px;">
                        <span style="font-family:var(--font-sans); font-size:13px;">${desc}</span>
                        <kbd style="background:var(--bg); border:1px solid var(--border); padding:4px 8px; border-radius:4px; font-family:var(--font-mono); font-size:11px; white-space:nowrap;">${keys}</kbd>
                    </div>
                `).join('')}
            </div>

            <div style="margin-top:16px; padding:16px; background:var(--hover); border-radius:8px; border-left:3px solid var(--text);">
                <h3 style="font-size:14px; font-weight:600; margin:0 0 8px 0; font-family:var(--font-sans);">Tips</h3>
                <ul style="margin:0; padding-left:20px; font-size:13px; line-height:1.8; font-family:var(--font-sans);">
                    <li>Double-click a note to open its repository</li>
                    <li>Click repo badges to navigate to GitHub</li>
                    <li>Use tags to organize related notes</li>
                    <li>Pin important notes to keep them at the top</li>
                    <li>Export your notes regularly for backup</li>
                </ul>
            </div>
        </div>
    `;

    document.getElementById('panelFooter').innerHTML = '';
    sidePanel.classList.add('visible');
    sidePanelOverlay.classList.add('visible');
}

// Init
async function loadItems() {
    items = await storage.getAll();
    render();
}

searchInput.addEventListener('input', render);

// New Button Listeners
exportBtn.addEventListener('click', exportNotes);
exportBtn.innerHTML = Icons.download;

importBtn.addEventListener('click', importNotes);
importBtn.innerHTML = Icons.upload;

statsBtn.addEventListener('click', showStatistics);
statsBtn.innerHTML = Icons.barChart;

helpBtn.addEventListener('click', showKeyboardShortcuts);
helpBtn.innerHTML = Icons.info;

// Bulk Operations
function toggleBulkMode() {
    bulkMode = !bulkMode;
    selectedItems.clear();
    updateBulkUI();
    render();
}

function toggleItemSelection(id) {
    if (selectedItems.has(id)) {
        selectedItems.delete(id);
    } else {
        selectedItems.add(id);
    }
    updateBulkUI();
    render();
}

function updateBulkUI() {
    bulkActionsBar.style.display = bulkMode ? 'flex' : 'none';
    bulkSelectionCount.textContent = `${selectedItems.size} selected`;
    bulkModeBtn.style.background = bulkMode ? 'var(--text)' : 'none';
    bulkModeBtn.style.color = bulkMode ? 'var(--bg)' : 'var(--text-sub)';
}

async function bulkAddTag() {
    if (selectedItems.size === 0) {
        showToast('No notes selected');
        return;
    }
    const tag = prompt('Enter tag name:');
    if (!tag || !tag.trim()) return;

    for (const id of selectedItems) {
        const item = items.find(i => i.id === id);
        if (item && !item.tags.includes(tag.trim())) {
            item.tags.push(tag.trim());
            await storage.update(item);
        }
    }
    await loadItems();
    showToast(`Tag added to ${selectedItems.size} notes`);
}

async function bulkPin() {
    if (selectedItems.size === 0) {
        showToast('No notes selected');
        return;
    }
    for (const id of selectedItems) {
        const item = items.find(i => i.id === id);
        if (item) {
            item.isPinned = true;
            await storage.update(item);
        }
    }
    await loadItems();
    showToast(`${selectedItems.size} notes pinned`);
}

async function bulkExport() {
    if (selectedItems.size === 0) {
        showToast('No notes selected');
        return;
    }
    const selectedNotes = items.filter(i => selectedItems.has(i.id));
    const data = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        notes: selectedNotes
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gitnotes-selection-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(`${selectedItems.size} notes exported`);
}

async function bulkDelete() {
    if (selectedItems.size === 0) {
        showToast('No notes selected');
        return;
    }
    if (!confirm(`Delete ${selectedItems.size} selected notes?`)) return;

    for (const id of selectedItems) {
        await storage.delete(id);
    }
    selectedItems.clear();
    updateBulkUI();
    await loadItems();
    showToast('Selected notes deleted');
}

function bulkDeselect() {
    selectedItems.clear();
    updateBulkUI();
    render();
}

bulkModeBtn.addEventListener('click', toggleBulkMode);
bulkModeBtn.innerHTML = Icons.checkSquare;

bulkTagBtn.addEventListener('click', bulkAddTag);
bulkTagBtn.innerHTML = Icons.plus;

bulkPinBtn.addEventListener('click', bulkPin);
bulkPinBtn.innerHTML = Icons.pin;

bulkExportBtn.addEventListener('click', bulkExport);
bulkExportBtn.innerHTML = Icons.download;

bulkDeleteBtn.addEventListener('click', bulkDelete);
bulkDeleteBtn.innerHTML = Icons.trash;

bulkDeselectBtn.addEventListener('click', bulkDeselect);
bulkDeselectBtn.innerHTML = Icons.close;

(async () => {
    setTheme(theme);
    setLayout(layout);
    setDensity(density);
    initBmc();
    await storage.init();
    await loadItems();
    await detectGitHubContext();
})();
