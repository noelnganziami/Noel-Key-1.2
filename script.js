
        // Main Application Object
        const NoelKeys = {
            version: '1.0.0',
            data: {
                songs: [],
                leaders: [],
                settings: {
                    theme: 'default',
                    language: 'en'
                }
            },
            currentEditId: null,
            translations: {
                en: {
                    total_songs: 'Total Songs',
                    unique_songs: 'Unique Songs',
                    total_leaders: 'Total Leaders',
                    latest_entry: 'Latest Entry',
                    add_song: 'Add Song',
                    date: 'Date',
                    song_title: 'Song Title',
                    key: 'Key',
                    category: 'Category',
                    leader: 'Leader',
                    notes: 'Notes',
                    save_song: 'Save Song',
                    update_song: 'Update Song',
                    preview_list: 'Preview List',
                    clear_all_data: 'Clear All Data',
                    leader_management: 'Leader Management',
                    leader_name: 'Leader Name',
                    icon: 'Icon',
                    add_leader: 'Add Leader',
                    song_history: 'Song History',
                    search: 'Search',
                    filter_category: 'Filter Category',
                    filter_leader: 'Filter Leader',
                    sort_by: 'Sort By',
                    load_all: 'Load All',
                    clear_view: 'Clear View',
                    export_json: 'Export JSON',
                    export_pdf: 'Export PDF',
                    about_app: 'About This App',
                    about_description: 'Noel_Keys is a simple web application designed to help worship teams track songs, keys, and leaders. All data is stored locally in your browser. No data is sent to any server.',
                    features: '<strong>Features:</strong><br>- Track songs with keys, categories, and leaders<br>- Manage worship leaders with custom icons<br>- Filter and search song history<br>- Export data to PDF<br>- Multiple themes and language options',
                    no_songs_message: 'No songs found. Add your first song using the form above.',
                    song_list_preview: 'Song List Preview',
                    close: 'Close',
                    delete_confirmation: 'Are you sure you want to delete this? This action cannot be undone.',
                    clear_data_confirmation: 'This action cannot be undone.',
                    edit: 'Edit',
                    delete: 'Delete',
                    worship: 'Worship',
                    praise: 'Praise',
                    interlude: 'Interlude',
                    other: 'Other',
                    all_categories: 'All Categories',
                    all_leaders: 'All Leaders',
                    sort_date_desc: 'Date (Newest First)',
                    sort_date_asc: 'Date (Oldest First)',
                    sort_title_asc: 'Title (A-Z)',
                    sort_title_desc: 'Title (Z-A)',
                    no_leaders_message: 'No leaders added yet.'
                },
                fr: {
                    total_songs: 'Total Chansons',
                    unique_songs: 'Chansons Uniques',
                    total_leaders: 'Total Responsables',
                    latest_entry: 'Dernière Entrée',
                    add_song: 'Ajouter Chanson',
                    date: 'Date',
                    song_title: 'Titre',
                    key: 'Clé',
                    category: 'Catégorie',
                    leader: 'Responsable',
                    notes: 'Notes',
                    save_song: 'Enregistrer',
                    update_song: 'Mettre à Jour',
                    preview_list: 'Aperçu Liste',
                    clear_all_data: 'Effacer Tout',
                    leader_management: 'Gestion des Responsables',
                    leader_name: 'Nom du Responsable',
                    icon: 'Icône',
                    add_leader: 'Ajouter',
                    song_history: 'Historique des Chansons',
                    search: 'Rechercher',
                    filter_category: 'Filtrer Catégorie',
                    filter_leader: 'Filtrer Responsable',
                    sort_by: 'Trier Par',
                    load_all: 'Charger Tout',
                    clear_view: 'Effacer Vue',
                    export_json: 'Exporter JSON',
                    export_pdf: 'Exporter PDF',
                    about_app: 'À Propos',
                    about_description: 'Noel_Keys est une application web simple conçue pour aider les équipes de louange à suivre les chansons, les clés et les responsables. Toutes les données sont stockées localement dans votre navigateur. Aucune donnée n\'est envoyée à un serveur.',
                    features: '<strong>Fonctionnalités:</strong><br>- Suivi des chansons avec clés, catégories et responsables<br>- Gestion des responsables avec icônes personnalisées<br>- Filtrage et recherche dans l\'historique<br>- Exportation des données en PDF<br>- Plusieurs thèmes et options de langue',
                    no_songs_message: 'Aucune chanson trouvée. Ajoutez votre première chanson en utilisant le formulaire ci-dessus.',
                    song_list_preview: 'Aperçu de la Liste',
                    close: 'Fermer',
                    delete_confirmation: 'Êtes-vous sûr de vouloir supprimer ceci? Cette action ne peut pas être annulée.',
                    clear_data_confirmation: 'Cette action ne peut pas être annulée.',
                    edit: 'Modifier',
                    delete: 'Supprimer',
                    worship: 'Adoration',
                    praise: 'Louange',
                    interlude: 'Interlude',
                    other: 'Autre',
                    all_categories: 'Toutes Catégories',
                    all_leaders: 'Tous Responsables',
                    sort_date_desc: 'Date (Plus Récent)',
                    sort_date_asc: 'Date (Plus Ancien)',
                    sort_title_asc: 'Titre (A-Z)',
                    sort_title_desc: 'Titre (Z-A)',
                    no_leaders_message: 'Aucun responsable ajouté.'
                }
            },
            
            // Initialize the application
            init: function() {
                // Load data from local storage
                this.loadData();
                
                // Initialize UI elements
                this.initUIElements();
                
                // Set up event listeners
                this.setupEventListeners();
                
                // Update the UI based on loaded data
                this.updateUI();
                
                // Apply current theme and language
                this.applyTheme(this.data.settings.theme);
                this.applyLanguage(this.data.settings.language);
                
                console.log('NoelKeys initialized', this.version);
            },
            
            // Initialize UI element references
            initUIElements: function() {
                // Form elements
                this.elements = {
                    songForm: document.getElementById('songForm'),
                    songId: document.getElementById('songId'),
                    songDate: document.getElementById('songDate'),
                    songTitle: document.getElementById('songTitle'),
                    songKey: document.getElementById('songKey'),
                    songCategory: document.getElementById('songCategory'),
                    songLeader: document.getElementById('songLeader'),
                    songNotes: document.getElementById('songNotes'),
                    leaderManagementForm: document.getElementById('leaderManagementForm'),
                    leaderName: document.getElementById('leaderName'),
                    leaderIconSelect: document.getElementById('leaderIconSelect'),
                    leaderList: document.getElementById('leaderList'),
                    songList: document.getElementById('songList'),
                    noSongs: document.getElementById('noSongs'),
                    searchInput: document.getElementById('searchInput'),
                    filterCategory: document.getElementById('filterCategory'),
                    filterLeader: document.getElementById('filterLeader'),
                    sortOption: document.getElementById('sortOption'),
                    previewModal: document.getElementById('previewModal'),
                    previewContent: document.getElementById('previewContent'),
                    totalSongs: document.getElementById('totalSongs'),
                    uniqueSongs: document.getElementById('uniqueSongs'),
                    totalLeaders: document.getElementById('totalLeaders'),
                    latestEntry: document.getElementById('latestEntry'),
                    aboutSection: document.getElementById('aboutSection'),
                    themeSelect: document.getElementById('themeSelect')
                };
                
                // Set today's date as default in the date field
                const today = new Date().toISOString().split('T')[0];
                this.elements.songDate.value = today;
            },
            
            // Set up all event listeners
            setupEventListeners: function() {
                // Song form submission
                this.elements.songForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.saveSong();
                });
                
                // Leader form submission
                this.elements.leaderManagementForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.saveLeader();
                });
                
                // UI Control Buttons
                document.getElementById('previewListBtn').addEventListener('click', () => this.previewSongList());
                document.getElementById('clearAllDataBtn').addEventListener('click', () => this.clearAllData());
                document.getElementById('loadAllBtn').addEventListener('click', () => this.loadAllSongs());
                document.getElementById('clearViewBtn').addEventListener('click', () => this.clearView());

                document.getElementById('exportPdfBtn').addEventListener('click', () => this.exportPDF());
                document.getElementById('closePreviewBtn').addEventListener('click', () => this.closePreview());
                document.getElementById('toggleAboutBtn').addEventListener('click', () => this.toggleAboutSection());
                
                // Filter and search inputs
                this.elements.searchInput.addEventListener('input', () => this.filterSongs());
                this.elements.filterCategory.addEventListener('change', () => this.filterSongs());
                this.elements.filterLeader.addEventListener('change', () => this.filterSongs());
                this.elements.sortOption.addEventListener('change', () => this.filterSongs());
                
                // Theme switching
                document.getElementById('themeSelect').addEventListener('change', (e) => {
                    const theme = e.target.value;
                    this.applyTheme(theme);
                    
                    // Save the theme setting
                    this.data.settings.theme = theme;
                    this.saveData();
                });
                
                // Language switching
                document.querySelectorAll('.lang-button').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const lang = e.currentTarget.dataset.lang;
                        this.applyLanguage(lang);
                    });
                });
                
                // Modal close button
                document.querySelector('.modal-close').addEventListener('click', () => this.closePreview());
                
                // Click outside modal to close
                this.elements.previewModal.addEventListener('click', (e) => {
                    if (e.target === this.elements.previewModal) {
                        this.closePreview();
                    }
                });
            },
            
            // Load data from local storage
            loadData: function() {
                try {
                    const savedData = localStorage.getItem('noelKeysData');
                    if (savedData) {
                        const parsedData = JSON.parse(savedData);
                        this.data = {
                            ...this.data,
                            ...parsedData
                        };
                        console.log('Data loaded from local storage', this.data);
                    }
                } catch (error) {
                    console.error('Error loading data from local storage:', error);
                    // If there's an error, use the default empty data
                }
            },
            
            // Save data to local storage
            saveData: function() {
                try {
                    localStorage.setItem('noelKeysData', JSON.stringify(this.data));
                } catch (error) {
                    console.error('Error saving data to local storage:', error);
                    alert('Failed to save data to local storage. Please check your browser settings.');
                }
            },
            
            // Update UI elements based on current data
            updateUI: function() {
                this.updateStats();
                this.populateLeaderDropdowns();
                this.renderLeaderList();
                this.filterSongs();
            },
            
            // Update statistics display
            updateStats: function() {
                const totalSongs = this.data.songs.length;
                const uniqueTitles = new Set(this.data.songs.map(song => song.title)).size;
                const totalLeaders = this.data.leaders.length;
                
                let latestEntryDate = '-';
                if (totalSongs > 0) {
                    // Find the most recent date
                    const dates = this.data.songs.map(song => new Date(song.date));
                    const latestDate = new Date(Math.max.apply(null, dates));
                    latestEntryDate = this.formatDate(latestDate);
                }
                
                this.elements.totalSongs.textContent = totalSongs;
                this.elements.uniqueSongs.textContent = uniqueTitles;
                this.elements.totalLeaders.textContent = totalLeaders;
                this.elements.latestEntry.textContent = latestEntryDate;
            },
            
            // Populate leader dropdowns in forms and filters
            populateLeaderDropdowns: function() {
                // Clear existing options except the default
                while (this.elements.songLeader.options.length > 1) {
                    this.elements.songLeader.remove(1);
                }
                
                while (this.elements.filterLeader.options.length > 1) {
                    this.elements.filterLeader.remove(1);
                }
                
                // Add each leader to the dropdowns
                this.data.leaders.forEach(leader => {
                    // Song form dropdown
                    const songOption = document.createElement('option');
                    songOption.value = leader.id;
                    songOption.innerHTML = `${leader.icon} ${leader.name}`;
                    this.elements.songLeader.appendChild(songOption);
                    
                    // Filter dropdown
                    const filterOption = document.createElement('option');
                    filterOption.value = leader.id;
                    filterOption.innerHTML = `${leader.icon} ${leader.name}`;
                    this.elements.filterLeader.appendChild(filterOption);
                });
            },
            
            // Render the list of leaders in the management section
            renderLeaderList: function() {
                this.elements.leaderList.innerHTML = '';
                
                if (this.data.leaders.length === 0) {
                    const noLeaders = document.createElement('li');
                    noLeaders.textContent = this.getTranslation('no_leaders_message', 'No leaders added yet.');
                    noLeaders.style.color = 'var(--light-text)';
                    noLeaders.style.textAlign = 'center';
                    noLeaders.style.padding = '10px 0';
                    this.elements.leaderList.appendChild(noLeaders);
                    return;
                }
                
                this.data.leaders.forEach(leader => {
                    const li = document.createElement('li');
                    
                    const leaderInfo = document.createElement('div');
                    leaderInfo.className = 'leader-info';
                    leaderInfo.innerHTML = `<span class="leader-icon">${leader.icon}</span><span class="leader-name">${leader.name}</span>`;
                    
                    const leaderActions = document.createElement('div');
                    leaderActions.className = 'leader-actions';
                    
                    const deleteBtn = document.createElement('button');
                    deleteBtn.className = 'delete-leader-btn';
                    deleteBtn.innerHTML = '&times;';
                    deleteBtn.title = this.getTranslation('delete');
                    deleteBtn.addEventListener('click', () => this.deleteLeader(leader.id));
                    
                    leaderActions.appendChild(deleteBtn);
                    li.appendChild(leaderInfo);
                    li.appendChild(leaderActions);
                    
                    this.elements.leaderList.appendChild(li);
                });
            },
            
            // Save a song (new or updated)
            saveSong: function() {
                const formData = {
                    date: this.elements.songDate.value,
                    title: this.elements.songTitle.value.trim(),
                    key: this.elements.songKey.value,
                    category: this.elements.songCategory.value,
                    leader: this.elements.songLeader.value,
                    notes: this.elements.songNotes.value.trim()
                };
                
                if (this.currentEditId) {
                    // Update existing song
                    const index = this.data.songs.findIndex(song => song.id === this.currentEditId);
                    if (index !== -1) {
                        this.data.songs[index] = {
                            ...this.data.songs[index],
                            ...formData,
                            updatedAt: new Date().toISOString()
                        };
                    }
                    this.currentEditId = null;
                } else {
                    // Add new song
                    const newSong = {
                        ...formData,
                        id: this.generateId(),
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    };
                    this.data.songs.push(newSong);
                }
                
                // Save data and update UI
                this.saveData();
                this.resetSongForm();
                this.updateUI();
                
                // Show the newly added song
                this.filterSongs();
            },
            
            // Save a new leader
            saveLeader: function() {
                const leaderName = this.elements.leaderName.value.trim();
                const leaderIcon = this.elements.leaderIconSelect.value;
                
                if (!leaderName) return;
                
                const newLeader = {
                    id: this.generateId(),
                    name: leaderName,
                    icon: leaderIcon,
                    createdAt: new Date().toISOString()
                };
                
                this.data.leaders.push(newLeader);
                this.saveData();
                this.elements.leaderName.value = '';
                this.renderLeaderList();
                this.populateLeaderDropdowns();
                this.updateStats();
            },
            
            // Delete a leader
            deleteLeader: function(leaderId) {
                if (!confirm(this.getTranslation('delete_confirmation'))) return;
                
                // Remove the leader
                this.data.leaders = this.data.leaders.filter(leader => leader.id !== leaderId);
                
                // Update songs that used this leader (set leader to empty)
                this.data.songs.forEach(song => {
                    if (song.leader === leaderId) {
                        song.leader = '';
                    }
                });
                
                // Save and update UI
                this.saveData();
                this.renderLeaderList();
                this.populateLeaderDropdowns();
                this.filterSongs();
                this.updateStats();
            },
            
            // Filter songs based on search and filter criteria
            filterSongs: function() {
                const searchTerm = this.elements.searchInput.value.toLowerCase();
                const categoryFilter = this.elements.filterCategory.value;
                const leaderFilter = this.elements.filterLeader.value;
                const sortOption = this.elements.sortOption.value;
                
                // Apply filters
                let filteredSongs = this.data.songs.filter(song => {
                    const matchesSearch = 
                        song.title.toLowerCase().includes(searchTerm) || 
                        (song.notes && song.notes.toLowerCase().includes(searchTerm));
                    
                    const matchesCategory = !categoryFilter || song.category === categoryFilter;
                    const matchesLeader = !leaderFilter || song.leader === leaderFilter;
                    
                    return matchesSearch && matchesCategory && matchesLeader;
                });
                
                // Apply sorting
                filteredSongs.sort((a, b) => {
                    switch (sortOption) {
                        case 'date-desc':
                            return new Date(b.date) - new Date(a.date);
                        case 'date-asc':
                            return new Date(a.date) - new Date(b.date);
                        case 'title-asc':
                            return a.title.localeCompare(b.title);
                        case 'title-desc':
                            return b.title.localeCompare(a.title);
                        default:
                            return new Date(b.date) - new Date(a.date);
                    }
                });
                
                // Limit to 20 items by default unless loadAll was clicked
                if (!this._loadAllActive && filteredSongs.length > 20) {
                    filteredSongs = filteredSongs.slice(0, 20);
                }
                
                // Render filtered songs
                this.renderSongs(filteredSongs);
            },
            
            // Render songs to the list
            renderSongs: function(songs) {
                this.elements.songList.innerHTML = '';
                
                if (songs.length === 0) {
                    this.elements.noSongs.style.display = 'block';
                    return;
                }
                
                this.elements.noSongs.style.display = 'none';
                
                songs.forEach(song => {
                    const li = document.createElement('li');
                    li.className = `song-list-item category-${song.category}`;
                    
                    // Get leader details if available
                    let leaderDisplay = '';
                    if (song.leader) {
                        const leader = this.data.leaders.find(l => l.id === song.leader);
                        if (leader) {
                            leaderDisplay = `${leader.icon} ${leader.name}`;
                        }
                    }
                    
                    // Format the date
                    const formattedDate = this.formatDate(new Date(song.date));
                    
                    // Create layout
                    const details = document.createElement('div');
                    details.className = 'details';
                    
                    const title = document.createElement('span');
                    title.className = 'song-title';
                    title.textContent = song.title;
                    details.appendChild(title);
                    
                    const meta = document.createElement('div');
                    meta.className = 'song-meta';
                    
                    // Key
                    const keyLabel = document.createElement('span');
                    keyLabel.className = 'meta-label';
                    keyLabel.textContent = this.getTranslation('key') + ':';
                    meta.appendChild(keyLabel);
                    
                    const keyValue = document.createElement('span');
                    keyValue.className = 'meta-value';
                    keyValue.textContent = song.key;
                    meta.appendChild(keyValue);
                    
                    // Date
                    const dateLabel = document.createElement('span');
                    dateLabel.className = 'meta-label';
                    dateLabel.textContent = this.getTranslation('date') + ':';
                    meta.appendChild(dateLabel);
                    
                    const dateValue = document.createElement('span');
                    dateValue.className = 'meta-value';
                    dateValue.textContent = formattedDate;
                    meta.appendChild(dateValue);
                    
                    details.appendChild(meta);
                    
                    // Leader info
                    if (leaderDisplay) {
                        const leaderInfo = document.createElement('span');
                        leaderInfo.className = 'song-leader';
                        leaderInfo.innerHTML = leaderDisplay;
                        details.appendChild(leaderInfo);
                    }
                    
                    // Notes
                    if (song.notes) {
                        const notes = document.createElement('span');
                        notes.className = 'song-notes';
                        notes.textContent = song.notes;
                        details.appendChild(notes);
                    }
                    
                    // Category display
                    const categoryDisplay = document.createElement('div');
                    categoryDisplay.className = 'category-display';
                    
                    const categoryBadge = document.createElement('span');
                    categoryBadge.className = `category-badge ${song.category}`;
                    categoryBadge.textContent = this.getTranslation(song.category);
                    categoryDisplay.appendChild(categoryBadge);
                    
                    // Action buttons
                    const actions = document.createElement('div');
                    actions.className = 'song-actions';
                    
                    const editBtn = document.createElement('button');
                    editBtn.className = 'song-action-btn edit';
                    editBtn.textContent = this.getTranslation('edit');
                    editBtn.addEventListener('click', () => this.editSong(song.id));
                    actions.appendChild(editBtn);
                    
                    const deleteBtn = document.createElement('button');
                    deleteBtn.className = 'song-action-btn delete';
                    deleteBtn.textContent = this.getTranslation('delete');
                    deleteBtn.addEventListener('click', () => this.deleteSong(song.id));
                    actions.appendChild(deleteBtn);
                    
                    categoryDisplay.appendChild(actions);
                    
                    // Assemble the list item
                    li.appendChild(details);
                    li.appendChild(categoryDisplay);
                    
                    this.elements.songList.appendChild(li);
                });
            },
            
            // Load all songs without limiting
            loadAllSongs: function() {
                this._loadAllActive = true;
                this.filterSongs();
            },
            
            // Clear the current view
            clearView: function() {
                this._loadAllActive = false;
                this.elements.searchInput.value = '';
                this.elements.filterCategory.value = '';
                this.elements.filterLeader.value = '';
                this.elements.sortOption.value = 'date-desc';
                this.filterSongs();
            },
            
            // Edit a song
            editSong: function(songId) {
                const song = this.data.songs.find(s => s.id === songId);
                if (!song) return;
                
                // Fill the form with song data
                this.elements.songId.value = song.id;
                this.elements.songDate.value = song.date;
                this.elements.songTitle.value = song.title;
                this.elements.songKey.value = song.key;
                this.elements.songCategory.value = song.category;
                this.elements.songLeader.value = song.leader || '';
                this.elements.songNotes.value = song.notes || '';
                
                // Set form to edit mode
                this.currentEditId = songId;
                
                // Change submit button text
                const submitBtn = this.elements.songForm.querySelector('button[type="submit"]');
                submitBtn.textContent = this.getTranslation('update_song');
                
                // Scroll to form
                this.elements.songForm.scrollIntoView({ behavior: 'smooth' });
            },
            
            // Delete a song
            deleteSong: function(songId) {
                if (!confirm(this.getTranslation('delete_confirmation'))) return;
                
                this.data.songs = this.data.songs.filter(song => song.id !== songId);
                this.saveData();
                this.updateUI();
            },
            
            // Reset the song form
            resetSongForm: function() {
                this.elements.songForm.reset();
                this.elements.songId.value = '';
                
                // Set today's date
                const today = new Date().toISOString().split('T')[0];
                this.elements.songDate.value = today;
                
                // Reset submit button text
                const submitBtn = this.elements.songForm.querySelector('button[type="submit"]');
                submitBtn.textContent = this.getTranslation('save_song');
                
                this.currentEditId = null;
            },
            
            // Preview song list for printing
            previewSongList: function() {
                // Create a formatted list for preview
                const songs = [...this.data.songs].sort((a, b) => new Date(b.date) - new Date(a.date));
                
                let html = `
                    <h3>${this.getTranslation('song_list_preview')}</h3>
                    <div class="summary-stats">
                        <div class="stat-item">
                            <span class="label">${this.getTranslation('total_songs')}</span>
                            <span class="value">${songs.length}</span>
                        </div>
                        <div class="stat-item">
                            <span class="label">${this.getTranslation('unique_songs')}</span>
                            <span class="value">${new Set(songs.map(song => song.title)).size}</span>
                        </div>
                    </div>
                `;
                
                // Group songs by category for the preview
                const categories = ['worship', 'praise', 'interlude', 'other'];
                
                categories.forEach(category => {
                    const categorySongs = songs.filter(song => song.category === category);
                    if (categorySongs.length === 0) return;
                    
                    html += `<h4>${this.getTranslation(category)} (${categorySongs.length})</h4>`;
                    html += `<ul class="song-list">`;
                    
                    categorySongs.forEach(song => {
                        // Get leader details if available
                        let leaderDisplay = '';
                        if (song.leader) {
                            const leader = this.data.leaders.find(l => l.id === song.leader);
                            if (leader) {
                                leaderDisplay = `${leader.icon} ${leader.name}`;
                            }
                        }
                        
                        html += `
                            <li class="song-list-item category-${song.category}">
                                <div class="details">
                                    <span class="song-title">${song.title}</span>
                                    <div class="song-meta">
                                        <span class="meta-label">${this.getTranslation('key')}:</span>
                                        <span class="meta-value">${song.key}</span>
                                        <span class="meta-label">${this.getTranslation('date')}:</span>
                                        <span class="meta-value">${this.formatDate(new Date(song.date))}</span>
                                    </div>
                                    ${leaderDisplay ? `<span class="song-leader">${leaderDisplay}</span>` : ''}
                                    ${song.notes ? `<span class="song-notes">${song.notes}</span>` : ''}
                                </div>
                            </li>
                        `;
                    });
                    
                    html += `</ul>`;
                });
                
                this.elements.previewContent.innerHTML = html;
                this.elements.previewModal.classList.add('active');
            },
            
            // Close the preview modal
            closePreview: function() {
                this.elements.previewModal.classList.remove('active');
            },
            
            // Toggle about section visibility
            toggleAboutSection: function() {
                const aboutSection = this.elements.aboutSection;
                if (aboutSection.style.display === 'block') {
                    aboutSection.style.display = 'none';
                } else {
                    aboutSection.style.display = 'block';
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            },
            
            // Clear all data after confirmation
            clearAllData: function() {
                if (!confirm(this.getTranslation('clear_data_confirmation'))) return;
                
                this.data = {
                    songs: [],
                    leaders: [],
                    settings: this.data.settings // Keep theme and language settings
                };
                
                this.saveData();
                this.updateUI();
                this.resetSongForm();
            },
            

            
            // Export data as PDF
            exportPDF: function() {
                const { jsPDF } = window.jspdf;
                
                // Create a new PDF document
                const doc = new jsPDF({
                    orientation: 'portrait',
                    unit: 'mm',
                    format: 'a4'
                });
                
                // Set default font size and line height
                const fontSize = 10;
                const lineHeight = 7;
                doc.setFontSize(fontSize);
                
                // Add title and header
                doc.setFillColor(0, 150, 199); // Using the primary blue color
                doc.rect(0, 0, 210, 15, 'F');
                doc.setTextColor(255, 255, 255);
                doc.setFontSize(18);
                doc.text('Noel_Keys Song List', 105, 10, { align: 'center' });
                
                // Reset text color for the rest of the document
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.text(`Export Date: ${this.formatDate(new Date())}`, 105, 20, { align: 'center' });
                
                // Add table of contents heading
                doc.setFontSize(14);
                doc.text('Table of Contents', 20, 30);
                
                // Add summary stats
                const uniqueSongs = new Set(this.data.songs.map(song => song.title)).size;
                doc.setFontSize(12);
                doc.text('Summary Statistics:', 20, 40);
                doc.setFontSize(10);
                doc.text(`• Total Songs: ${this.data.songs.length}`, 25, 47);
                doc.text(`• Unique Songs: ${uniqueSongs}`, 25, 53);
                doc.text(`• Total Leaders: ${this.data.leaders.length}`, 25, 59);
                
                // Group songs by category for table of contents
                const categories = ['worship', 'praise', 'interlude', 'other'];
                let tocY = 70;
                
                // Category page numbers and song counts
                const categoryInfo = {};
                
                // First, calculate song counts to include in ToC
                categories.forEach(category => {
                    const categorySongs = this.data.songs.filter(song => song.category === category);
                    if (categorySongs.length === 0) return;
                    
                    categoryInfo[category] = {
                        count: categorySongs.length
                    };
                    
                    // Add to table of contents
                    const categoryTitle = this.getTranslation(category);
                    doc.setFontSize(11);
                    doc.text(`• ${categoryTitle} Songs (${categorySongs.length})`, 25, tocY);
                    tocY += 7;
                });
                
                // Skip some space after ToC
                tocY += 12;
                
                // Add content heading - strong divider
                doc.setFillColor(200, 200, 200);
                doc.rect(20, tocY, 170, 0.5, 'F');
                tocY += 8;
                
                doc.setFontSize(14);
                doc.text('Song Listings by Category', 105, tocY, { align: 'center' });
                tocY += 10;
                
                // Now add the actual song content, starting from a new page
                doc.addPage();
                let y = 20;
                
                // Keep track of current page 
                let currentPage = 2;
                
                categories.forEach(category => {
                    const categorySongs = this.data.songs.filter(song => song.category === category);
                    if (categorySongs.length === 0) return;
                    
                    // Update page number in our category info
                    categoryInfo[category].page = currentPage;
                    
                    // Add category heading with background
                    doc.setFillColor(230, 230, 230);
                    doc.rect(0, y-6, 210, 10, 'F');
                    doc.setFontSize(14);
                    doc.setTextColor(0, 0, 0);
                    doc.text(this.getTranslation(category) + ` Songs (${categorySongs.length})`, 20, y);
                    y += 10;
                    
                    // Add songs in this category
                    doc.setFontSize(10);
                    
                    categorySongs.forEach((song, index) => {
                        // Make sure we have space for at least one entry; if not, create a new page
                        if (y > 270) {
                            doc.addPage();
                            currentPage++;
                            y = 20;
                            
                            // Repeat category heading on new page
                            doc.setFillColor(230, 230, 230);
                            doc.rect(0, y-6, 210, 10, 'F');
                            doc.setFontSize(14);
                            doc.text(this.getTranslation(category) + ' (continued)', 20, y);
                            y += 10;
                            doc.setFontSize(10);
                        }
                        
                        // Background for alternating rows
                        if (index % 2 === 0) {
                            doc.setFillColor(245, 245, 245);
                            doc.rect(20, y-4, 170, lineHeight*3, 'F');
                        }
                        
                        // Find leader info
                        let leaderInfo = '';
                        if (song.leader) {
                            const leader = this.data.leaders.find(l => l.id === song.leader);
                            if (leader) {
                                leaderInfo = leader.name;
                            }
                        }
                        
                        // Add song number for reference
                        doc.text(`${index + 1}.`, 15, y);
                        
                        // Add song title with key
                        doc.setFont(undefined, 'bold');
                        doc.text(`${song.title} (${song.key})`, 25, y);
                        y += lineHeight;
                        
                        // Add date
                        doc.setFont(undefined, 'normal');
                        const dateStr = this.formatDate(new Date(song.date));
                        doc.text(`Date: ${dateStr}`, 30, y);
                        
                        // Add leader on same line if available
                        if (leaderInfo) {
                            doc.text(`Leader: ${leaderInfo}`, 95, y);
                        }
                        
                        // Add notes if present
                        if (song.notes) {
                            y += lineHeight;
                            doc.text(`Notes: ${song.notes}`, 30, y);
                        }
                        
                        y += lineHeight + 3; // Extra spacing between songs
                    });
                    
                    y += 10; // Extra spacing between categories
                });
                
                // Go back to first page to update TOC with page numbers
                doc.setPage(1);
                tocY = 70;
                
                categories.forEach(category => {
                    if (!categoryInfo[category]) return;
                    
                    const categoryTitle = this.getTranslation(category);
                    const songCount = categoryInfo[category].count;
                    const pageNum = categoryInfo[category].page;
                    
                    // Clear previous text area
                    doc.setFillColor(255, 255, 255);
                    doc.rect(20, tocY-5, 170, 7, 'F');
                    
                    // Rewrite with page number
                    doc.setFontSize(11);
                    doc.text(`• ${categoryTitle} Songs (${songCount})`, 25, tocY);
                    doc.text(`Page ${pageNum}`, 160, tocY);
                    tocY += 7;
                });
                
                // Save the PDF
                doc.save(`noelkeys_songs_${new Date().toISOString().split('T')[0]}.pdf`);
            },
            
            // Apply theme to the document
            applyTheme: function(theme) {
                document.documentElement.setAttribute('data-theme', theme);
                
                // Update theme select dropdown
                const themeSelect = document.getElementById('themeSelect');
                if (themeSelect) {
                    themeSelect.value = theme;
                }
            },
            
            // Apply language to UI elements
            applyLanguage: function(lang) {
                // Set the language 
                this.data.settings.language = lang;
                
                // Update all elements with data-i18n attribute
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    const translation = this.getTranslation(key);
                    
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        if (el.getAttribute('placeholder')) {
                            el.setAttribute('placeholder', translation);
                        }
                    } else {
                        el.innerHTML = translation;
                    }
                });
                
                // Update active state in language buttons 
                document.querySelectorAll('.lang-button').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.lang === lang);
                });
                
                // Update dropdowns with translated content
                this.updateCategoryOptions();
                this.updateFormLabels();
                
                // Save the language setting
                this.saveData();
            },
            
            // Get translation for a specific key
            getTranslation: function(key, fallback = '') {
                const lang = this.data.settings.language;
                const translations = this.translations[lang] || this.translations['en'];
                return translations[key] || fallback || key;
            },
            
            // Format date to localized string
            formatDate: function(date) {
                const lang = this.data.settings.language;
                return date.toLocaleDateString(this.getLangCode(lang), { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric'
                });
            },
            
            // Get language code for date formatting
            getLangCode: function(lang) {
                const langMap = {
                    en: 'en-US',
                    fr: 'fr-FR'
                };
                return langMap[lang] || 'en-US';
            },
            
            // Generate unique ID for items
            generateId: function() {
                return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
            },
            
            // Update category options with translations
            updateCategoryOptions: function() {
                // Update category options in both form and filter
                document.querySelectorAll('#songCategory option, #filterCategory option').forEach(option => {
                    const value = option.value;
                    if (value && value !== '') {
                        option.textContent = this.getTranslation(value);
                    }
                });
            },
            
            // Update other form labels that might need translation
            updateFormLabels: function() {
                // Update sort options
                document.querySelectorAll('#sortOption option').forEach(option => {
                    if (option.value === 'date-desc') option.textContent = this.getTranslation('sort_date_desc', 'Date (Newest First)');
                    if (option.value === 'date-asc') option.textContent = this.getTranslation('sort_date_asc', 'Date (Oldest First)');
                    if (option.value === 'title-asc') option.textContent = this.getTranslation('sort_title_asc', 'Title (A-Z)');
                    if (option.value === 'title-desc') option.textContent = this.getTranslation('sort_title_desc', 'Title (Z-A)');
                });
                
                // Update placeholder texts in song history section
                const filterElems = document.querySelectorAll('#filterCategory option[value=""], #filterLeader option[value=""]');
                filterElems.forEach(elem => {
                    if (elem.parentElement.id === 'filterCategory') {
                        elem.textContent = this.getTranslation('all_categories', 'All Categories');
                    } else if (elem.parentElement.id === 'filterLeader') {
                        elem.textContent = this.getTranslation('all_leaders', 'All Leaders');
                    }
                });
            }
        };
        
        // Initialize the application when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            NoelKeys.init();
        });
    