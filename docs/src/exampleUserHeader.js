const environment = "production"; // This Variable Decides the environment of the app. 'production' or 'development' or 'local'

const serviceaccounts = [];
const randomserviceaccount =
    serviceaccounts[Math.floor(Math.random() * serviceaccounts.length)]; // DO NOT TOUCH THIS
const domains_for_dl = [""]; // add multiple cloudflare addresses to balance the load on download/stream servers, eg. ['https://testing.fetchgoogleapi.workers.dev', 'https://testing2.fetchgoogleapi2.workers.dev']
const domain_for_dl =
    domains_for_dl[Math.floor(Math.random() * domains_for_dl.length)]; // DO NOT TOUCH THIS
const blocked_region = [""]; // add regional codes seperated by comma, eg. ['IN', 'US', 'PK']
const blocked_asn = []; // add ASN numbers from http://www.bgplookingglass.com/list-of-autonomous-system-numbers, eg. [16509, 12345]
const authConfig = {
    siteName: "Kevin Nitro Index", // Website name
    client_id: "123oih1easdkb12", // Client id from Google Cloud Console
    client_secret: "uy19324y8", // Client Secret from Google Cloud Console
    refresh_token: "234p213h", // Authorize token
    service_account: false, // true if you're using Service Account instead of user account
    service_account_json: randomserviceaccount, // don't touch this one
    files_list_page_size: 100,
    search_result_list_page_size: 100,
    enable_cors_file_down: false,
    enable_password_file_verify: false, // support for .password file not working right now
    direct_link_protection: false, // protects direct links with Display UI
    disable_anonymous_download: false, // disables direct links without session
    file_link_expiry: 7, // expire file link in set number of days
    search_all_drives: true, // search all of your drives instead of current drive if set to true
    enable_login: false, // set to true if you want to add login system
    enable_signup: false, // set to true if you want to add signup system
    enable_social_login: false, // set to true if you want to add social login system
    google_client_id_for_login: "", // Google Client ID for Login
    google_client_secret_for_login: "", // Google Client Secret for Login
    redirect_domain: "", // Domain for login redirect eg. https://example.com
    login_database: "Local", // KV or Local
    login_days: 7, // days to keep logged in
    enable_ip_lock: false, // set to true if you want to lock user downloads to user IP
    single_session: false, // set to true if you want to allow only one session per user
    ip_changed_action: false, // set to true if you want to logout user if IP changed
    users_list: [
        {
            username: "kevin",
            password: "kevin",
        },
    ],
    roots: [
        {
            id: "",
            name: "00-MUST-HAVE",
            protect_file_link: false,
        },
    ],
};
const crypto_base_key = "a4affcad11ea4c7f696e63edaf92095e"; // Example 256 bit key used.
const encrypt_iv = new Uint8Array([
    38, 100, 240, 76, 189, 111, 227, 246, 178, 254, 115, 201, 91, 244, 245, 171,
]); // Example 128 bit IV used.
const uiConfig = {
    theme: "darkly", // switch between themes, default set to slate, select from https://gitlab.com/GoogleDriveIndex/Google-Drive-Index
    version: "2.3.6", // don't touch this one. get latest code using generator at https://bdi-generator.hashhackers.com
    // If you're using Image then set to true, If you want text then set it to false
    logo_image: true, // true if you're using image link in next option.
    logo_height: "35px", // only if logo_image is true
    logo_width: "", // only if logo_image is true
    favicon:
        "https://cdn.jsdelivr.net/gh/KevinNitroG/KevinNitroG@main/icons/kevindex/kevindex-logo.svg",
    // if logo is true then link otherwise just text for name
    logo_link_name:
        "https://cdn.jsdelivr.net/gh/KevinNitroG/KevinNitroG@main/icons/kevindex/kevindex-logo.svg",
    login_image:
        "https://cdn.jsdelivr.net/gh/KevinNitroG/KevinNitroG@main/icons/kevindex/kevindex-logo.svg", // Login page logo image
    fixed_header: true, // If you want the header to be flexible or fixed.
    header_padding: "80", // Value 80 for fixed header, Value 20 for flexible header. Required to be changed accordingly in some themes.
    nav_link_1: "Home", // change navigation link name
    nav_link_3: "Current Path", // change navigation link name
    nav_link_4: "Help 🤯", // change navigation link name
    fixed_footer: false, // If you want the footer to be flexible or fixed.
    hide_footer: true, // hides the footer from site entirely.
    header_style_class: "navbar-dark bg-dark", // navbar-dark bg-primary || navbar-dark bg-dark || navbar-light bg-light
    footer_style_class: "bg-dark", // bg-primary || bg-dark || bg-light
    css_a_tag_color: "white", // Color Name or Hex Code eg. #ffffff
    css_p_tag_color: "white", // Color Name or Hex Code eg. #ffffff
    folder_text_color: "white", // Color Name or Hex Code eg. #ffffff
    loading_spinner_class: "text-primary", // https://getbootstrap.com/docs/5.0/components/spinners/#colors
    search_button_class: "btn btn-danger", // https://getbootstrap.com/docs/5.0/components/buttons/#examples
    path_nav_alert_class: "alert alert-dark", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    file_view_alert_class: "alert alert-danger", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    file_count_alert_class: "alert alert-secondary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    contact_link:
        "https://gist.github.com/KevinNitroG/3bf237847a2b6e2adeb7f26c5cf169ac#file-guidance-for-kevinnitro-s-film-index-md", // Link to Contact Button on Menu
    copyright_year: "2050", // year of copyright, can be anything like 2015 - 2020 or just 2020
    company_name: "Nitro Group", // Name next to copyright
    company_link: "https://www.facebook.com/KevinNitro", // link of copyright name
    credit: false, // Set this to true to give us credit
    display_size: true, // Set this to false to hide display file size
    display_time: true, // Set this to false to hide display modified time for folder and files
    display_download: true, // Set this to false to hide download icon for folder and files on main index
    disable_player: false, // Set this to true to hide audio and video players
    disable_video_download: false, // Remove Download, Copy Button on Videos
    allow_selecting_files: true, // Disable Selecting Files to Download in Bulk
    second_domain_for_dl: false, // If you want to display other URL for Downloading to protect your main domain.
    poster: "https://cdn.jsdelivr.net/npm/@googledrive/index@2.2.3/images/poster.jpg", // Video poster URL or see Readme to how to load from Drive
    audioposter:
        "https://cdn.jsdelivr.net/npm/@googledrive/index@2.2.3/images/music.jpg", // Video poster URL or see Readme to how to load from Drive
    jsdelivr_cdn_src: "https://cdn.jsdelivr.net/npm/@googledrive/index", // If Project is Forked, then enter your GitHub repo
    render_head_md: true, // Render Head.md
    render_readme_md: true, // Render Readme.md
    unauthorized_owner_link: "https://www.facebook.com/KevinNitro", // Unauthorized Error Page Link to Owner
    unauthorized_owner_email: "kevinnitro@duck.com", // Unauthorized Error Page Owner Email
    downloaddomain: domain_for_dl, // Ignore this and set domains at top of this page after service accounts.
    show_logout_button: authConfig.enable_login ? true : false, // set to true if you want to add logout button
    allow_file_copy: true, // set to false if you want to disable file copy
};

const player_config = {
    player: "videojs", // videojs || plyr || dplayer || jwplayer
    videojs_version: "8.3.0", // Change videojs version in future when needed.
    plyr_io_version: "3.7.8",
    jwplayer_version: "8.16.2",
};
