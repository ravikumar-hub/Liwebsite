// Comprehensive Linux Distros Database
const distrosDatabase = [
    // Debian-based
    {
        id: 1,
        name: 'Ubuntu',
        category: 'debian',
        icon: '🦄',
        description: 'The most popular Linux distribution with strong community support and a focus on ease of use.',
        based_on: 'Debian',
        release_cycle: 'Every 6 months',
        website: 'https://ubuntu.com',
        download: 'https://ubuntu.com/download',
    },
    {
        id: 2,
        name: 'Linux Mint',
        category: 'debian',
        icon: '🌿',
        description: 'Beginner-friendly with Cinnamon desktop, designed to be elegant and comfortable.',
        based_on: 'Ubuntu/Debian',
        release_cycle: 'Every 2 years',
        website: 'https://linuxmint.com',
        download: 'https://linuxmint.com/download.php',
    },
    {
        id: 3,
        name: 'Debian',
        category: 'debian',
        icon: '🌪️',
        description: 'The universal operating system, emphasizing stability and freedom.',
        based_on: 'Independent',
        release_cycle: 'Every 2 years',
        website: 'https://www.debian.org',
        download: 'https://www.debian.org/distrib/',
    },
    {
        id: 4,
        name: 'Elementary OS',
        category: 'debian',
        icon: '🌙',
        description: 'A beautiful, thoughtfully designed operating system focused on user experience.',
        based_on: 'Ubuntu/Debian',
        release_cycle: 'Every 2 years',
        website: 'https://elementary.io',
        download: 'https://elementary.io/download',
    },
    {
        id: 5,
        name: 'Pop!_OS',
        category: 'debian',
        icon: '⚡',
        description: 'System76\'s powerful Ubuntu-based OS for creators and developers.',
        based_on: 'Ubuntu',
        release_cycle: 'Every 6 months',
        website: 'https://pop.system76.com',
        download: 'https://pop.system76.com',
    },
    {
        id: 6,
        name: 'Zorin OS',
        category: 'debian',
        icon: '🎨',
        description: 'Windows/macOS-like interface making the transition to Linux seamless.',
        based_on: 'Ubuntu',
        release_cycle: 'Every 2 years',
        website: 'https://zorin.com/os/',
        download: 'https://zorin.com/os/#download-zorin',
    },

    // Red Hat-based
    {
        id: 7,
        name: 'Fedora',
        category: 'redhat',
        icon: '🎩',
        description: 'Cutting-edge, community-driven platform showcasing the latest in Linux technology.',
        based_on: 'Red Hat',
        release_cycle: 'Every 6 months',
        website: 'https://getfedora.org',
        download: 'https://getfedora.org/en/workstation/download/',
    },
    {
        id: 8,
        name: 'CentOS',
        category: 'redhat',
        icon: '⚙️',
        description: 'Community-driven distribution focused on stability and enterprise features.',
        based_on: 'Red Hat',
        release_cycle: 'Every 2-3 years',
        website: 'https://www.centos.org',
        download: 'https://www.centos.org/download/',
    },
    {
        id: 9,
        name: 'Red Hat Enterprise Linux (RHEL)',
        category: 'redhat',
        icon: '🔴',
        description: 'Professional Linux platform for enterprise environments with extensive support.',
        based_on: 'Independent',
        release_cycle: 'Every 3 years',
        website: 'https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux',
        download: 'https://developers.redhat.com/products/rhel/download',
    },
    {
        id: 10,
        name: 'AlmaLinux',
        category: 'redhat',
        icon: '🌲',
        description: 'Community-driven fork providing RHEL binary compatibility and stability.',
        based_on: 'Red Hat',
        release_cycle: 'Every 2-3 years',
        website: 'https://almalinux.org',
        download: 'https://almalinux.org/get-almalinux/',
    },
    {
        id: 11,
        name: 'Rocky Linux',
        category: 'redhat',
        icon: '🪨',
        description: 'Community-governed, stable, and suitable for enterprise production.',
        based_on: 'Red Hat',
        release_cycle: 'Every 2-3 years',
        website: 'https://rockylinux.org',
        download: 'https://rockylinux.org/download',
    },

    // Arch-based
    {
        id: 12,
        name: 'Arch Linux',
        category: 'arch',
        icon: '🏔️',
        description: 'Lightweight and flexible distribution designed for experienced Linux users.',
        based_on: 'Independent',
        release_cycle: 'Rolling release',
        website: 'https://www.archlinux.org',
        download: 'https://www.archlinux.org/download/',
    },
    {
        id: 13,
        name: 'Manjaro',
        category: 'arch',
        icon: '🌴',
        description: 'User-friendly Arch-based distribution with beautiful desktop environments.',
        based_on: 'Arch',
        release_cycle: 'Rolling release',
        website: 'https://manjaro.org',
        download: 'https://manjaro.org/download/',
    },
    {
        id: 14,
        name: 'EndeavourOS',
        category: 'arch',
        icon: '🚀',
        description: 'Community-driven Arch distribution with simple, modern, and helpful approach.',
        based_on: 'Arch',
        release_cycle: 'Rolling release',
        website: 'https://endeavouros.com',
        download: 'https://endeavouros.com/latest-release/',
    },
    {
        id: 15,
        name: 'Garuda Linux',
        category: 'arch',
        icon: '🦅',
        description: 'High-performance gaming and productivity Arch-based distribution.',
        based_on: 'Arch',
        release_cycle: 'Rolling release',
        website: 'https://garudalinux.org',
        download: 'https://garudalinux.org/downloads.html',
    },

    // Independent
    {
        id: 16,
        name: 'openSUSE',
        category: 'independent',
        icon: '🦎',
        description: 'Professional Linux distribution with great tools for developers and sysadmins.',
        based_on: 'Independent',
        release_cycle: 'Every 8 months (Leap)',
        website: 'https://www.opensuse.org',
        download: 'https://www.opensuse.org/software/leap/',
    },
    {
        id: 17,
        name: 'Slackware',
        category: 'independent',
        icon: '📦',
        description: 'Simplicity-first Linux distribution known for stability and control.',
        based_on: 'Independent',
        release_cycle: 'Every 12 months',
        website: 'http://www.slackware.com',
        download: 'http://www.slackware.com/install/disksets.php',
    },
    {
        id: 18,
        name: 'PCLinuxOS',
        category: 'independent',
        icon: '🖥️',
        description: 'User-friendly distribution focused on ease of use and productivity.',
        based_on: 'Mandriva/Mageia',
        release_cycle: 'Rolling release',
        website: 'http://www.pclinuxos.com',
        download: 'http://www.pclinuxos.com/?page_id=1618',
    },

    // Specialized
    {
        id: 19,
        name: 'Kali Linux',
        category: 'specialized',
        icon: '🗡️',
        description: 'Penetration testing and security auditing platform with pre-loaded tools.',
        based_on: 'Debian',
        release_cycle: 'Rolling release',
        website: 'https://www.kali.org',
        download: 'https://www.kali.org/get-kali/',
    },
    {
        id: 20,
        name: 'Parrot Security OS',
        category: 'specialized',
        icon: '🦜',
        description: 'Comprehensive penetration testing, forensics, and ethical hacking platform.',
        based_on: 'Debian',
        release_cycle: 'Rolling release',
        website: 'https://www.parrotsec.org',
        download: 'https://www.parrotsec.org/download/',
    },
    {
        id: 21,
        name: 'NixOS',
        category: 'specialized',
        icon: '❄️',
        description: 'Declarative and reproducible Linux distribution with unique package management.',
        based_on: 'Independent',
        release_cycle: 'Every 6 months',
        website: 'https://nixos.org',
        download: 'https://nixos.org/download.html',
    },
    {
        id: 22,
        name: 'Qubes OS',
        category: 'specialized',
        icon: '🔐',
        description: 'Security-focused OS based on virtualization for maximum compartmentalization.',
        based_on: 'Fedora',
        release_cycle: 'Every 6-9 months',
        website: 'https://www.qubes-os.org',
        download: 'https://www.qubes-os.org/downloads/',
    },
    {
        id: 23,
        name: 'Tails',
        category: 'specialized',
        icon: '🐭',
        description: 'Amnesic incognito live system focused on privacy and anonymity.',
        based_on: 'Debian',
        release_cycle: 'Every 6 weeks',
        website: 'https://tails.boum.org',
        download: 'https://tails.boum.org/install/index.en.html',
    },
    {
        id: 24,
        name: 'Clear Linux',
        category: 'specialized',
        icon: '✨',
        description: 'Intel-optimized distribution for maximum performance and security.',
        based_on: 'Independent',
        release_cycle: 'Every 2 weeks',
        website: 'https://clearlinux.org',
        download: 'https://clearlinux.org/documentation/clear-linux/get-started/bare-metal-install-server',
    },
    {
        id: 25,
        name: 'Lubuntu',
        category: 'debian',
        icon: '⚡',
        description: 'Fast, lightweight Ubuntu variant with minimal resource requirements.',
        based_on: 'Ubuntu',
        release_cycle: 'Every 2 years (LTS)',
        website: 'https://lubuntu.me',
        download: 'https://lubuntu.me/downloads/',
    },
    {
        id: 26,
        name: 'Xubuntu',
        category: 'debian',
        icon: '🎯',
        description: 'Elegant and easy-to-use Ubuntu with Xfce desktop environment.',
        based_on: 'Ubuntu',
        release_cycle: 'Every 2 years (LTS)',
        website: 'https://xubuntu.org',
        download: 'https://xubuntu.org/download/',
    },
    {
        id: 27,
        name: 'Kubuntu',
        category: 'debian',
        icon: '❄️',
        description: 'Ubuntu with the powerful and flexible KDE Plasma desktop.',
        based_on: 'Ubuntu',
        release_cycle: 'Every 2 years (LTS)',
        website: 'https://kubuntu.org',
        download: 'https://kubuntu.org/getkubuntu/',
    },
];

// DOM Elements
const distrosContainer = document.getElementById('distrosContainer');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');
const totalDistrosEl = document.getElementById('totalDistros');
const totalCategoriesEl = document.getElementById('totalCategories');
const resultsCountEl = document.getElementById('resultsCount');

// State
let currentCategory = 'all';
let currentSearch = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    renderDistros();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderDistros();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderDistros();
            searchInput.focus();
        });
    });
}

// Filter Distros
function getFilteredDistros() {
    return distrosDatabase.filter(distro => {
        const matchCategory = currentCategory === 'all' || distro.category === currentCategory;
        const matchSearch = currentSearch === '' || 
                           distro.name.toLowerCase().includes(currentSearch) ||
                           distro.description.toLowerCase().includes(currentSearch) ||
                           distro.based_on.toLowerCase().includes(currentSearch);
        return matchCategory && matchSearch;
    });
}

// Render Distros
function renderDistros() {
    const filtered = getFilteredDistros();
    
    distrosContainer.innerHTML = '';
    
    if (filtered.length === 0) {
        noResults.style.display = 'block';
        resultsCountEl.textContent = '0';
        return;
    }
    
    noResults.style.display = 'none';
    resultsCountEl.textContent = filtered.length;
    
    filtered.forEach((distro, index) => {
        const card = createDistroCard(distro);
        card.style.animationDelay = `${index * 0.1}s`;
        distrosContainer.appendChild(card);
    });
}

// Create Distro Card
function createDistroCard(distro) {
    const card = document.createElement('div');
    card.className = 'distro-card';
    card.innerHTML = `
        <div class="distro-header">
            <div>
                <div class="distro-icon">${distro.icon}</div>
                <h3 class="distro-name">${distro.name}</h3>
            </div>
            <span class="distro-category">${getCategoryLabel(distro.category)}</span>
        </div>
        
        <p class="distro-description">${distro.description}</p>
        
        <div class="distro-info">
            <div class="info-item">
                <span class="info-label">Based on:</span>
                <span>${distro.based_on}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Release:</span>
                <span>${distro.release_cycle}</span>
            </div>
        </div>
        
        <div class="distro-links">
            <a href="${distro.website}" target="_blank" class="distro-link link-primary">Website</a>
            <a href="${distro.download}" target="_blank" class="distro-link link-secondary">Download</a>
        </div>
    `;
    return card;
}

// Get Category Label
function getCategoryLabel(category) {
    const labels = {
        'debian': 'Debian',
        'redhat': 'Red Hat',
        'arch': 'Arch',
        'independent': 'Independent',
        'specialized': 'Specialized'
    };
    return labels[category] || category;
}

// Update Stats
function updateStats() {
    totalDistrosEl.textContent = distrosDatabase.length;
    
    const uniqueCategories = new Set(distrosDatabase.map(d => d.category));
    totalCategoriesEl.textContent = uniqueCategories.size;
}
