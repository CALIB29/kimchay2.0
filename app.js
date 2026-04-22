// Shared state for Kimchay Landing Page
const defaultContent = {
    hero: {
        title: "Kimchay",
        subtitle: "Traditional meets Innovation",
        description: "Reinterpreting the famous Korean Kimchi using locally grown Tagalog Pechay. It's the familiar taste of fermentation with a unique Filipino soul.",
        buttonText: "Taste the Tradition",
        image: "assets/hero.png"
    },
    about: {
        title: "Our Story",
        content: "More than just a side dish, Kimchay is a community-based business that provides livelihood opportunities for local farmers and resellers. We stand for sustainability, inclusiveness, and national pride.",
        image: "assets/hero.png"
    },
    flavors: [
        { id: 'classic', name: 'Classic', description: 'The original Filipino Pechay twist.', image: 'assets/classic.png' },
        { id: 'spicy', name: 'Spicy', description: 'Extra kick for the bold.', image: 'assets/spicy.png' },
        { id: 'honey', name: 'Honey', description: 'Sweet and savory harmony.', image: 'assets/honey.png' },
        { id: 'chili-garlic', name: 'Chili Garlic', description: 'Crispy, savory, and aromatic.', image: 'assets/chili-garlic.png' }
    ],
    theme: {
        primary: '#1a472a', // Pechay Green
        secondary: '#c53030', // Chili Red
        accent: '#f6ad55'   // Honey Gold
    }
};

function getStoredContent() {
    const stored = localStorage.getItem('kimchay_content');
    return stored ? JSON.parse(stored) : defaultContent;
}

function saveContent(content) {
    try {
        localStorage.setItem('kimchay_content', JSON.stringify(content));
        return true;
    } catch (e) {
        console.error("Storage failed:", e);
        alert("Action Required: The total size of your design data has exceeded the browser storage limit. Even with our auto-compression, you should try using smaller files (under 15MB each) or reducing the number of high-res image shifts.");
        return false;
    }
}
