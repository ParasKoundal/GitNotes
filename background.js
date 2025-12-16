// Disable the action by default
chrome.action.disable();

chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes('github.com')) {
        chrome.action.enable(tabId);
    } else {
        chrome.action.disable(tabId);
    }
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    if (tab.url && tab.url.includes('github.com')) {
        chrome.action.enable(activeInfo.tabId);
    } else {
        chrome.action.disable(activeInfo.tabId);
    }
});
