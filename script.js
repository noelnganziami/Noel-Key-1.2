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
            clear_data_confirmation: 'Are you sure you want to clear ALL data? This action cannot be undone.',
            confirm_ok: 'OK',
            confirm_cancel: 'Cancel',
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
            clear_data_confirmation: 'Êtes-vous sûr de vouloir effacer TOUTES les données? Cette action ne peut pas être annulée.',
            confirm_ok: 'OK',
            confirm_cancel: 'Annuler',
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
            confirmModal: document.getElementById('confirmModal'),
            confirmMessage: document.getElementById('confirmMessage'),
            confirmYesBtn: document.getElementById('confirmYesBtn'),
            confirmNoBtn: document.getElementById('confirmNoBtn'),
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
        document.getElementById('clearAllDataBtn').addEventListener('click', () => this.confirmAction(this.getTranslation('clear_data_confirmation'), this.clearAllData.bind(this)));
        document.getElementById('loadAllBtn').addEventListener('click', () => this.loadAllSongs());
        document.getElementById('clearViewBtn').addEventListener('click', () => this.clearView());

        document.getElementById('exportPdfBtn').addEventListener('click', () => this.exportPDF());
        document.getElementById('closePreviewBtn').addEventListener('click', () => this.closeModal('previewModal'));
        document.getElementById('toggleAboutBtn').addEventListener('click', () => this.toggleAboutSection());

        // Filter and search inputs
        this.elements.searchInput.addEventListener('input', () => this.filterSongs());
        this.elements.filterCategory.addEventListener('change', () => this.filterSongs());
        this.elements.filterLeader.addEventListener('change', () => this.filterSongs());
        this.elements.sortOption.addEventListener('change', () => this.filterSongs());

        // Theme switching
        this.elements.themeSelect.addEventListener('change', (e) => {
            const theme = e.target.value;
            this.applyTheme(theme);
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

        // Modal close buttons and overlay clicks
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal-overlay');
                if (modal) this.closeModal(modal.id);
            });
        });
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
             overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    this.closeModal(overlay.id);
                }
            });
        });

        // Confirmation Dialog Buttons
        this.elements.confirmNoBtn.addEventListener('click', () => this.closeModal('confirmModal'));
    },

    // Load data from local storage
    loadData: function() {
        try {
            const savedData = localStorage.getItem('noelKeysData');
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                // Deep merge to prevent losing settings if structure changes slightly
                this.data.songs = parsedData.songs || [];
                this.data.leaders = parsedData.leaders || [];
                this.data.settings = { ...this.data.settings, ...(parsedData.settings || {}) };
                console.log('Data loaded from local storage', this.data);
            }
        } catch (error) {
            console.error('Error loading data from local storage:', error);
            // If there's an error, use the default empty data but keep existing settings if possible
            this.data.songs = [];
            this.data.leaders = [];
        }
    },

    // Save data to local storage
    saveData: function() {
        try {
            localStorage.setItem('noelKeysData', JSON.stringify(this.data));
        } catch (error) {
            console.error('Error saving data to local storage:', error);
            this.showError('Failed to save data to local storage. Please check your browser settings.');
        }
    },

    // Update UI elements based on current data
    updateUI: function() {
        this.updateStats();
        this.populateLeaderDropdowns();
        this.renderLeaderList();
        this.filterSongs(); // Re-render song list with filters applied
    },

    // Update statistics display
    updateStats: function() {
        const totalSongs = this.data.songs.length;
        const uniqueTitles = new Set(this.data.songs.map(song => song.title.toLowerCase())).size; // Case-insensitive count
        const totalLeaders = this.data.leaders.length;

        let latestEntryDate = '-';
        if (totalSongs > 0) {
            try {
                // Filter out invalid dates before finding max
                const validDates = this.data.songs
                    .map(song => new Date(song.date))
                    .filter(date => !isNaN(date));

                if (validDates.length > 0) {
                    const latestDate = new Date(Math.max.apply(null, validDates));
                    latestEntryDate = this.formatDate(latestDate);
                }
            } catch (e) {
                 console.error("Error calculating latest entry date:", e);
                 latestEntryDate = 'Error';
            }
        }

        this.elements.totalSongs.textContent = totalSongs;
        this.elements.uniqueSongs.textContent = uniqueTitles;
        this.elements.totalLeaders.textContent = totalLeaders;
        this.elements.latestEntry.textContent = latestEntryDate;
    },

    // Populate leader dropdowns in forms and filters
    populateLeaderDropdowns: function() {
        const currentSongLeader = this.elements.songLeader.value;
        const currentFilterLeader = this.elements.filterLeader.value;

        // Clear existing options except the default placeholder
        [this.elements.songLeader, this.elements.filterLeader].forEach(select => {
            while (select.options.length > 1) {
                select.remove(1);
            }
        });

        // Sort leaders alphabetically by name for consistency
        const sortedLeaders = [...this.data.leaders].sort((a, b) => a.name.localeCompare(b.name));

        // Add each leader to the dropdowns
        sortedLeaders.forEach(leader => {
            const optionText = `${leader.icon} ${leader.name}`;

            // Song form dropdown
            const songOption = document.createElement('option');
            songOption.value = leader.id;
            songOption.innerHTML = optionText;
            this.elements.songLeader.appendChild(songOption);

            // Filter dropdown
            const filterOption = document.createElement('option');
            filterOption.value = leader.id;
            filterOption.innerHTML = optionText;
            this.elements.filterLeader.appendChild(filterOption);
        });

        // Re-select the previously selected leader if they still exist
        this.elements.songLeader.value = currentSongLeader && this.data.leaders.find(l => l.id === currentSongLeader) ? currentSongLeader : '';
        this.elements.filterLeader.value = currentFilterLeader && this.data.leaders.find(l => l.id === currentFilterLeader) ? currentFilterLeader : '';
    },

    // Render the list of leaders in the management section
    renderLeaderList: function() {
        this.elements.leaderList.innerHTML = ''; // Clear previous list

        if (this.data.leaders.length === 0) {
            const noLeadersLi = document.createElement('li');
            noLeadersLi.innerHTML = `<p class="no-data-inline">${this.getTranslation('no_leaders_message')}</p>`;
            noLeadersLi.style.borderBottom = 'none'; // No border for the message
            this.elements.leaderList.appendChild(noLeadersLi);
            return;
        }

        // Sort leaders alphabetically for display
        const sortedLeaders = [...this.data.leaders].sort((a, b) => a.name.localeCompare(b.name));

        sortedLeaders.forEach(leader => {
            const li = document.createElement('li');

            const leaderInfo = document.createElement('div');
            leaderInfo.className = 'leader-info';
            // Sanitize leader name and icon display (though icon is from select, name is user input)
            const iconSpan = document.createElement('span');
            iconSpan.className = 'leader-icon';
            iconSpan.textContent = leader.icon; // Use textContent for safety
            const nameSpan = document.createElement('span');
            nameSpan.className = 'leader-name';
            nameSpan.textContent = leader.name; // Use textContent for safety
            leaderInfo.appendChild(iconSpan);
            leaderInfo.appendChild(nameSpan);

            const leaderActions = document.createElement('div');
            leaderActions.className = 'leader-actions';

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-leader-btn';
            deleteBtn.innerHTML = '×'; // Delete symbol
            deleteBtn.title = this.getTranslation('delete');
            deleteBtn.setAttribute('aria-label', `${this.getTranslation('delete')} ${leader.name}`);
            deleteBtn.addEventListener('click', () => {
                this.confirmAction(
                    `${this.getTranslation('delete_confirmation')} (${leader.name})`,
                    () => this.deleteLeader(leader.id)
                );
            });

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

        // Basic validation
        if (!formData.date || !formData.title || !formData.key || !formData.category) {
            this.showError("Please fill in all required fields (Date, Title, Key, Category).");
            return;
        }

        if (this.currentEditId) {
            // Update existing song
            const index = this.data.songs.findIndex(song => song.id === this.currentEditId);
            if (index !== -1) {
                this.data.songs[index] = {
                    ...this.data.songs[index], // Keep original id, createdAt
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
        this.updateUI(); // This will re-render the list with the new/updated item
    },

    // Save a new leader
    saveLeader: function() {
        const leaderName = this.elements.leaderName.value.trim();
        const leaderIcon = this.elements.leaderIconSelect.value;

        if (!leaderName) {
             this.showError("Leader name cannot be empty.");
             return;
        }

        // Check if leader name already exists (case-insensitive)
        const nameExists = this.data.leaders.some(leader => leader.name.toLowerCase() === leaderName.toLowerCase());
        if (nameExists) {
            this.showError(`Leader "${leaderName}" already exists.`);
            return;
        }


        const newLeader = {
            id: this.generateId(),
            name: leaderName,
            icon: leaderIcon,
            createdAt: new Date().toISOString()
        };

        this.data.leaders.push(newLeader);
        this.saveData();
        this.elements.leaderName.value = ''; // Clear the input field
        this.elements.leaderIconSelect.value = '👨'; // Reset icon select to default
        this.updateUI(); // Update stats, leader list, and dropdowns
    },

    // Delete a leader (actual deletion logic, called after confirmation)
    deleteLeader: function(leaderId) {
        // Remove the leader
        this.data.leaders = this.data.leaders.filter(leader => leader.id !== leaderId);

        // Update songs that used this leader (set leader to empty string)
        let updatedSongCount = 0;
        this.data.songs.forEach(song => {
            if (song.leader === leaderId) {
                song.leader = '';
                updatedSongCount++;
            }
        });

        // Save and update UI
        this.saveData();
        this.updateUI(); // Refreshes leader list, dropdowns, song list, stats

        console.log(`Leader ${leaderId} deleted. ${updatedSongCount} songs updated.`);
    },

    // Filter songs based on search and filter criteria
    filterSongs: function() {
        const searchTerm = this.elements.searchInput.value.toLowerCase().trim();
        const categoryFilter = this.elements.filterCategory.value;
        const leaderFilter = this.elements.filterLeader.value;
        const sortOption = this.elements.sortOption.value;

        // Apply filters
        let filteredSongs = this.data.songs.filter(song => {
            const leader = song.leader ? this.data.leaders.find(l => l.id === song.leader) : null;
            const leaderName = leader ? leader.name.toLowerCase() : '';

            const matchesSearch = !searchTerm ||
                song.title.toLowerCase().includes(searchTerm) ||
                (song.notes && song.notes.toLowerCase().includes(searchTerm)) ||
                leaderName.includes(searchTerm) ||
                song.key.toLowerCase().startsWith(searchTerm) || // Allow searching by key start
                this.formatDate(new Date(song.date)).toLowerCase().includes(searchTerm); // Allow searching by formatted date

            const matchesCategory = !categoryFilter || song.category === categoryFilter;
            const matchesLeader = !leaderFilter || song.leader === leaderFilter;

            return matchesSearch && matchesCategory && matchesLeader;
        });

        // Apply sorting
        filteredSongs.sort((a, b) => {
            switch (sortOption) {
                case 'date-desc':
                    return new Date(b.date) - new Date(a.date) || a.title.localeCompare(b.title); // Secondary sort by title
                case 'date-asc':
                    return new Date(a.date) - new Date(b.date) || a.title.localeCompare(b.title);
                case 'title-asc':
                    return a.title.localeCompare(b.title) || new Date(b.date) - new Date(a.date); // Secondary sort by date desc
                case 'title-desc':
                    return b.title.localeCompare(a.title) || new Date(b.date) - new Date(a.date);
                default:
                    return new Date(b.date) - new Date(a.date);
            }
        });

        // Limit to 20 items by default unless loadAll was clicked
        if (!this._loadAllActive && filteredSongs.length > 20) {
            filteredSongs = filteredSongs.slice(0, 20);
            // Maybe show a message indicating more results are available?
        }

        // Render filtered songs
        this.renderSongs(filteredSongs);
    },

    // Render songs to the list
    renderSongs: function(songs) {
        this.elements.songList.innerHTML = ''; // Clear previous list

        if (songs.length === 0) {
            this.elements.noSongs.style.display = 'block';
            return;
        }

        this.elements.noSongs.style.display = 'none';

        const fragment = document.createDocumentFragment(); // Improve performance for many items

        songs.forEach(song => {
            const li = document.createElement('li');
            li.className = `song-list-item category-${song.category}`;
            li.setAttribute('data-song-id', song.id); // Add ID for easier targeting

            // Get leader details if available
            let leaderDisplay = '';
            let leaderName = '';
            if (song.leader) {
                const leader = this.data.leaders.find(l => l.id === song.leader);
                if (leader) {
                    leaderName = leader.name;
                    // Sanitize icon/name for display
                    leaderDisplay = `<span class="leader-icon">${leader.icon}</span> <span class="leader-name-display">${this.escapeHtml(leaderName)}</span>`;
                } else {
                    leaderDisplay = `<span class="meta-value">(Leader not found)</span>`; // Indicate missing leader
                }
            }

            // Format the date safely
            let formattedDate = 'Invalid Date';
            try {
                 const dateObj = new Date(song.date);
                 if (!isNaN(dateObj)) {
                     formattedDate = this.formatDate(dateObj);
                 }
            } catch(e) { console.error("Error formatting date:", song.date, e); }


            // Sanitize song data before displaying
            const safeTitle = this.escapeHtml(song.title);
            const safeKey = this.escapeHtml(song.key);
            const safeNotes = song.notes ? this.escapeHtml(song.notes) : '';
            const safeCategory = this.escapeHtml(song.category);

            li.innerHTML = `
                <div class="details">
                    <span class="song-title">${safeTitle}</span>
                    <div class="song-meta">
                        <span class="meta-label">${this.getTranslation('key')}:</span>
                        <span class="meta-value">${safeKey}</span>
                        <span class="meta-label">${this.getTranslation('date')}:</span>
                        <span class="meta-value">${formattedDate}</span>
                    </div>
                    ${leaderDisplay ? `<span class="song-leader">${leaderDisplay}</span>` : ''}
                    ${safeNotes ? `<span class="song-notes">${safeNotes}</span>` : ''}
                </div>
                <div class="category-display">
                    <span class="category-badge ${safeCategory}">${this.getTranslation(safeCategory)}</span>
                    <div class="song-actions">
                        <button class="song-action-btn edit" aria-label="${this.getTranslation('edit')} ${safeTitle}">
                            ${this.getTranslation('edit')}
                        </button>
                        <button class="song-action-btn delete" aria-label="${this.getTranslation('delete')} ${safeTitle}">
                            ${this.getTranslation('delete')}
                        </button>
                    </div>
                </div>
            `;

            // Add event listeners for actions
            li.querySelector('.edit').addEventListener('click', () => this.editSong(song.id));
            li.querySelector('.delete').addEventListener('click', () => {
                 this.confirmAction(
                     `${this.getTranslation('delete_confirmation')} (${song.title})`,
                     () => this.deleteSong(song.id)
                 );
            });

            fragment.appendChild(li);
        });

        this.elements.songList.appendChild(fragment); // Append all items at once
    },

    // Load all songs without limiting
    loadAllSongs: function() {
        this._loadAllActive = true;
        this.filterSongs(); // Re-filter and render all matching songs
        document.getElementById('loadAllBtn').style.display = 'none'; // Hide button after clicking
        document.getElementById('clearViewBtn').style.display = 'inline-block'; // Show clear view button
    },

    // Clear the current view (reset filters and limit)
    clearView: function() {
        this._loadAllActive = false;
        this.elements.searchInput.value = '';
        this.elements.filterCategory.value = '';
        this.elements.filterLeader.value = '';
        this.elements.sortOption.value = 'date-desc'; // Reset sort
        this.filterSongs(); // Re-filter and render limited list
        document.getElementById('loadAllBtn').style.display = 'inline-block'; // Show load all button again
        document.getElementById('clearViewBtn').style.display = 'none'; // Hide clear view button
    },

    // Edit a song: Populate form
    editSong: function(songId) {
        const song = this.data.songs.find(s => s.id === songId);
        if (!song) {
            console.error("Song not found for editing:", songId);
            this.showError("Could not find the song to edit.");
            return;
        }

        // Fill the form with song data
        this.elements.songId.value = song.id;
        this.elements.songDate.value = song.date; // Assumes date is stored in 'YYYY-MM-DD' format
        this.elements.songTitle.value = song.title;
        this.elements.songKey.value = song.key;
        this.elements.songCategory.value = song.category;
        this.elements.songLeader.value = song.leader || ''; // Handle case where leader might be empty
        this.elements.songNotes.value = song.notes || '';

        // Set form to edit mode
        this.currentEditId = songId;

        // Change submit button text and style
        const submitBtn = this.elements.songForm.querySelector('button[type="submit"]');
        submitBtn.textContent = this.getTranslation('update_song');
        submitBtn.style.backgroundColor = 'var(--info-color)'; // Example: Use info color for update

        // Scroll to form for better UX
        this.elements.songForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.elements.songTitle.focus(); // Focus title field
    },

    // Delete a song (actual deletion logic, called after confirmation)
    deleteSong: function(songId) {
        this.data.songs = this.data.songs.filter(song => song.id !== songId);
        this.saveData();
        this.updateUI(); // Re-render lists and update stats
    },

    // Reset the song form to its default state
    resetSongForm: function() {
        this.elements.songForm.reset();
        this.elements.songId.value = ''; // Clear hidden ID field

        // Set today's date as default again
        const today = new Date().toISOString().split('T')[0];
        this.elements.songDate.value = today;

        // Reset submit button text and style
        const submitBtn = this.elements.songForm.querySelector('button[type="submit"]');
        submitBtn.textContent = this.getTranslation('save_song');
        submitBtn.style.backgroundColor = ''; // Reset to default button style

        this.currentEditId = null; // Clear edit mode flag
    },

    // Preview song list for printing/viewing
    previewSongList: function() {
        // Get current filtered and sorted songs for the preview
        // Re-run filter logic but without the limit
        const searchTerm = this.elements.searchInput.value.toLowerCase().trim();
        const categoryFilter = this.elements.filterCategory.value;
        const leaderFilter = this.elements.filterLeader.value;
        const sortOption = this.elements.sortOption.value;

        let songsToPreview = this.data.songs.filter(song => {
             const leader = song.leader ? this.data.leaders.find(l => l.id === song.leader) : null;
             const leaderName = leader ? leader.name.toLowerCase() : '';
             const matchesSearch = !searchTerm || song.title.toLowerCase().includes(searchTerm) || (song.notes && song.notes.toLowerCase().includes(searchTerm)) || leaderName.includes(searchTerm);
             const matchesCategory = !categoryFilter || song.category === categoryFilter;
             const matchesLeader = !leaderFilter || song.leader === leaderFilter;
             return matchesSearch && matchesCategory && matchesLeader;
        });

        songsToPreview.sort((a, b) => {
             switch (sortOption) {
                 case 'date-desc': return new Date(b.date) - new Date(a.date);
                 case 'date-asc': return new Date(a.date) - new Date(b.date);
                 case 'title-asc': return a.title.localeCompare(b.title);
                 case 'title-desc': return b.title.localeCompare(a.title);
                 default: return new Date(b.date) - new Date(a.date);
             }
        });


        let html = `
            <div class="summary-stats preview-summary">
                <div class="stat-item">
                    <span class="label">${this.getTranslation('total_songs')}</span>
                    <span class="value">${songsToPreview.length}</span>
                </div>
                <div class="stat-item">
                    <span class="label">${this.getTranslation('unique_songs')}</span>
                    <span class="value">${new Set(songsToPreview.map(song => song.title.toLowerCase())).size}</span>
                </div>
            </div>
            <hr style="margin: 20px 0;">
        `;

        // Group songs by category for the preview, maintaining the current sort order within categories
        const categories = ['worship', 'praise', 'interlude', 'other'];
        let groupedHtml = '';

        categories.forEach(category => {
            const categorySongs = songsToPreview.filter(song => song.category === category);
            if (categorySongs.length === 0) return;

            groupedHtml += `<h4>${this.getTranslation(category)} (${categorySongs.length})</h4>`;
            groupedHtml += `<ul class="song-list preview-list">`; // Add specific class for preview styling if needed

            categorySongs.forEach(song => {
                let leaderDisplay = '';
                if (song.leader) {
                    const leader = this.data.leaders.find(l => l.id === song.leader);
                    if (leader) {
                         leaderDisplay = `<span class="leader-icon">${leader.icon}</span> ${this.escapeHtml(leader.name)}`;
                    }
                }

                let formattedDate = 'Invalid Date';
                 try {
                     const dateObj = new Date(song.date);
                     if (!isNaN(dateObj)) formattedDate = this.formatDate(dateObj);
                 } catch(e) {}

                const safeTitle = this.escapeHtml(song.title);
                const safeKey = this.escapeHtml(song.key);
                const safeNotes = song.notes ? this.escapeHtml(song.notes) : '';

                groupedHtml += `
                    <li class="song-list-item category-${song.category}">
                        <div class="details">
                            <span class="song-title">${safeTitle}</span>
                            <div class="song-meta">
                                <span class="meta-label">${this.getTranslation('key')}:</span>
                                <span class="meta-value">${safeKey}</span>
                                <span class="meta-label">${this.getTranslation('date')}:</span>
                                <span class="meta-value">${formattedDate}</span>
                            </div>
                            ${leaderDisplay ? `<span class="song-leader">${leaderDisplay}</span>` : ''}
                            ${safeNotes ? `<span class="song-notes">${safeNotes}</span>` : ''}
                        </div>
                    </li>
                `;
            });

            groupedHtml += `</ul>`;
        });

        if (groupedHtml === '') {
            html += `<p>${this.getTranslation('no_songs_message')}</p>`;
        } else {
             html += groupedHtml;
        }


        this.elements.previewContent.innerHTML = html;
        this.openModal('previewModal');
    },

    // Open a specific modal
    openModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            // Focus the first focusable element inside the modal, e.g., the close button
            const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable) {
                focusable.focus();
            }
        }
    },

    // Close a specific modal
    closeModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
        }
    },


    // Toggle about section visibility
    toggleAboutSection: function() {
        const aboutSection = this.elements.aboutSection;
        const isVisible = aboutSection.style.display === 'block';
        aboutSection.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    // Show confirmation dialog
    confirmAction: function(message, confirmCallback) {
        this.elements.confirmMessage.textContent = message;
        this.elements.confirmYesBtn.textContent = this.getTranslation('confirm_ok');
        this.elements.confirmNoBtn.textContent = this.getTranslation('confirm_cancel');

        // Clone and replace the Yes button to remove previous listeners
        const oldBtn = this.elements.confirmYesBtn;
        const newBtn = oldBtn.cloneNode(true);
        oldBtn.parentNode.replaceChild(newBtn, oldBtn);
        this.elements.confirmYesBtn = newBtn; // Update reference

        // Add the new listener
        newBtn.addEventListener('click', () => {
            this.closeModal('confirmModal');
            confirmCallback(); // Execute the action
        }, { once: true }); // Ensure listener runs only once

        this.openModal('confirmModal');
    },

    // Clear all data (actual deletion logic, called after confirmation)
    clearAllData: function() {
        this.data.songs = [];
        this.data.leaders = [];
        // Keep settings (theme, language)
        this.saveData();
        this.updateUI();
        this.resetSongForm();
        console.log("All song and leader data cleared.");
    },


    // Export data as PDF using jsPDF
    exportPDF: function() {
        // Check if jsPDF is loaded
        if (typeof window.jspdf === 'undefined' || typeof window.jspdf.jsPDF === 'undefined') {
            this.showError("PDF library (jsPDF) is not loaded. Cannot export.");
            console.error("jsPDF library not found.");
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const pageHeight = doc.internal.pageSize.height;
        const pageWidth = doc.internal.pageSize.width;
        const margin = 15;
        const contentWidth = pageWidth - 2 * margin;
        let y = margin; // Current y position

        // Helper function to add text and advance y, handling page breaks
        const addText = (text, x, currentY, options = {}) => {
            const fontSize = options.fontSize || 10;
            const fontStyle = options.fontStyle || 'normal';
            const align = options.align || 'left';
            const color = options.color || [0, 0, 0]; // Default black
            const lineHeightFactor = options.lineHeightFactor || 1.2;
            const textHeight = (fontSize / doc.internal.scaleFactor) * lineHeightFactor;

            if (currentY + textHeight > pageHeight - margin) {
                doc.addPage();
                currentY = margin; // Reset y to top margin on new page
            }

            doc.setFontSize(fontSize);
            doc.setFont(undefined, fontStyle);
            doc.setTextColor(color[0], color[1], color[2]);
            doc.text(text, x, currentY, { align: align, maxWidth: contentWidth });
            return currentY + textHeight;
        };

        // --- PDF Content ---

        // Header
        y = addText('Noel_Keys Song List', pageWidth / 2, y, { fontSize: 18, fontStyle: 'bold', align: 'center' });
        y = addText(`Export Date: ${this.formatDate(new Date())}`, pageWidth / 2, y + 2, { fontSize: 10, align: 'center' });
        y += 8; // Extra space

        // Summary
        const uniqueSongsCount = new Set(this.data.songs.map(song => song.title.toLowerCase())).size;
        y = addText('Summary:', margin, y, { fontSize: 14, fontStyle: 'bold' });
        y = addText(`• Total Songs Recorded: ${this.data.songs.length}`, margin + 5, y, { fontSize: 10 });
        y = addText(`• Unique Song Titles: ${uniqueSongsCount}`, margin + 5, y, { fontSize: 10 });
        y = addText(`• Managed Leaders: ${this.data.leaders.length}`, margin + 5, y, { fontSize: 10 });
        y += 10; // Extra space

        // Get currently filtered/sorted songs for export
        // (Use the same filtering logic as preview or main view)
        const searchTerm = this.elements.searchInput.value.toLowerCase().trim();
        const categoryFilter = this.elements.filterCategory.value;
        const leaderFilter = this.elements.filterLeader.value;
        const sortOption = this.elements.sortOption.value;

        let songsToExport = this.data.songs.filter(song => {
             const leader = song.leader ? this.data.leaders.find(l => l.id === song.leader) : null;
             const leaderName = leader ? leader.name.toLowerCase() : '';
             const matchesSearch = !searchTerm || song.title.toLowerCase().includes(searchTerm) || (song.notes && song.notes.toLowerCase().includes(searchTerm)) || leaderName.includes(searchTerm);
             const matchesCategory = !categoryFilter || song.category === categoryFilter;
             const matchesLeader = !leaderFilter || song.leader === leaderFilter;
             return matchesSearch && matchesCategory && matchesLeader;
        });

        songsToExport.sort((a, b) => {
            switch (sortOption) {
                case 'date-desc': return new Date(b.date) - new Date(a.date) || a.title.localeCompare(b.title);
                case 'date-asc': return new Date(a.date) - new Date(b.date) || a.title.localeCompare(b.title);
                case 'title-asc': return a.title.localeCompare(b.title) || new Date(b.date) - new Date(a.date);
                case 'title-desc': return b.title.localeCompare(a.title) || new Date(b.date) - new Date(a.date);
                default: return new Date(b.date) - new Date(a.date);
            }
        });

        y = addText('Song Details:', margin, y, { fontSize: 14, fontStyle: 'bold' });

        if (songsToExport.length === 0) {
             y = addText('No songs match the current filters.', margin, y, { fontSize: 10 });
        } else {
            songsToExport.forEach((song, index) => {
                const startY = y; // Remember start position for drawing a box later

                // Song Title and Key
                y = addText(`${index + 1}. ${this.escapeHtml(song.title)} (${this.escapeHtml(song.key)})`, margin, y, { fontSize: 12, fontStyle: 'bold' });

                // Date and Category
                let dateStr = 'Invalid Date';
                try {
                     const dateObj = new Date(song.date);
                     if (!isNaN(dateObj)) dateStr = this.formatDate(dateObj);
                } catch(e){}
                y = addText(`Date: ${dateStr} | Category: ${this.getTranslation(song.category)}`, margin + 5, y, { fontSize: 9 });

                // Leader
                if (song.leader) {
                    const leader = this.data.leaders.find(l => l.id === song.leader);
                    if (leader) {
                        y = addText(`Leader: ${leader.icon} ${this.escapeHtml(leader.name)}`, margin + 5, y, { fontSize: 9 });
                    } else {
                         y = addText(`Leader: (ID: ${song.leader} - Not Found)`, margin + 5, y, { fontSize: 9 });
                    }
                }

                // Notes
                if (song.notes) {
                    y = addText(`Notes: ${this.escapeHtml(song.notes)}`, margin + 5, y, { fontSize: 9 });
                }

                // Draw a light grey line separator
                y += 2;
                if (y < pageHeight - margin) { // Don't draw if it's the last thing before page break
                    doc.setDrawColor(200); // Light grey
                    doc.line(margin, y, pageWidth - margin, y);
                }
                 y += 4; // Space after line

                 // Check for page break within the entry processing itself
                 if (y > pageHeight - margin && index < songsToExport.length - 1) {
                    doc.addPage();
                    y = margin;
                 }
            });
        }

        // --- End PDF Content ---

        try {
            doc.save(`noelkeys_songs_${new Date().toISOString().split('T')[0]}.pdf`);
        } catch (e) {
            console.error("Error saving PDF:", e);
            this.showError("Could not generate or save the PDF file.");
        }
    },


    // Apply theme to the document
    applyTheme: function(theme) {
        document.documentElement.setAttribute('data-theme', theme === 'default' ? '' : theme); // Remove attribute for default

        // Update theme select dropdown to match
        if (this.elements.themeSelect) {
            this.elements.themeSelect.value = theme;
        }
    },

    // Apply language to UI elements
    applyLanguage: function(lang) {
        if (!this.translations[lang]) {
            console.warn(`Language '${lang}' not found, defaulting to 'en'.`);
            lang = 'en';
        }
        this.data.settings.language = lang;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key); // Uses the now set language

            // Handle different element types
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.placeholder) {
                     el.placeholder = translation;
                }
            } else if (el.tagName === 'BUTTON' && el.classList.contains('action-button') || el.tagName === 'OPTION') {
                 el.textContent = translation; // Use textContent for buttons/options to avoid potential HTML injection issues if translations were complex
            } else {
                el.innerHTML = translation; // Allow HTML in translations for elements like <p> with <strong>
            }
        });

        // Update active state in language buttons
        document.querySelectorAll('.lang-button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update dynamic dropdowns, placeholders, etc.
        this.updateDynamicTranslations();

        // Save the language setting
        this.saveData();
    },

    // Get translation for a specific key
    getTranslation: function(key, fallback = null) {
        const lang = this.data.settings.language || 'en';
        const translations = this.translations[lang] || this.translations['en'];
        // Provide a clearer fallback mechanism
        return translations[key] || fallback || `[${key}]`; // Return key in brackets if missing
    },

    // Update elements whose text content is set dynamically (e.g., dropdown defaults)
    updateDynamicTranslations: function() {
        // Update category options (form and filter) including the 'All' option
        this.elements.songCategory.options[0].textContent = this.getTranslation('select_category', 'Select Category'); // Add translation key if needed
        this.elements.filterCategory.options[0].textContent = this.getTranslation('all_categories');
         document.querySelectorAll('#songCategory option, #filterCategory option').forEach(option => {
             if (option.value && this.translations[this.data.settings.language][option.value]) {
                 option.textContent = this.getTranslation(option.value);
             }
         });


        // Update leader dropdown 'All' option
        this.elements.songLeader.options[0].textContent = this.getTranslation('select_leader', 'Select Leader'); // Add translation key if needed
        this.elements.filterLeader.options[0].textContent = this.getTranslation('all_leaders');


        // Update sort options
        document.querySelectorAll('#sortOption option').forEach(option => {
            if (option.value === 'date-desc') option.textContent = this.getTranslation('sort_date_desc');
            if (option.value === 'date-asc') option.textContent = this.getTranslation('sort_date_asc');
            if (option.value === 'title-asc') option.textContent = this.getTranslation('sort_title_asc');
            if (option.value === 'title-desc') option.textContent = this.getTranslation('sort_title_desc');
        });

        // Re-render lists to apply translations within items (like badges)
        this.renderLeaderList();
        this.filterSongs();
    },


    // Format date to localized string (e.g., "Jan 1, 2023" or "1 janv. 2023")
    formatDate: function(date) {
        if (!(date instanceof Date) || isNaN(date)) {
            return "Invalid Date";
        }
        const lang = this.data.settings.language || 'en';
        const langCode = this.getLangCode(lang);
        try {
            return date.toLocaleDateString(langCode, {
                year: 'numeric',
                month: 'short', // Use 'short' for abbreviated month name
                day: 'numeric'
            });
        } catch (e) {
            console.error("Error formatting date with lang code:", langCode, e);
            // Fallback to basic ISO format if locale fails
            return date.toISOString().split('T')[0];
        }
    },

    // Get BCP 47 language code for date formatting etc.
    getLangCode: function(lang) {
        const langMap = {
            en: 'en-US',
            fr: 'fr-FR'
            // Add more mappings if needed
        };
        return langMap[lang] || 'en-US'; // Default to en-US
    },

    // Generate unique ID for items
    generateId: function() {
        // Simple unique ID generator
        return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
    },

    // Utility to escape HTML to prevent XSS
    escapeHtml: function(str) {
        if (str === null || typeof str === 'undefined') return '';
        return String(str)
            .replace(/&/g, '&')
            .replace(/</g, '<')
            .replace(/>/g, '>')
            .replace(/"/g, '"')
            .replace(/'/g, ''');
    },

    // Utility to show simple error messages (replace with a nicer modal later if desired)
    showError: function(message) {
        // Simple alert for now, could be enhanced with a custom modal
        alert(`Error: ${message}`);
        console.error("App Error:", message);
    }
};

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check for jsPDF before initialization if it's critical early on
    // (though it's only used for export here, so check can be done later)
    NoelKeys.init();
});