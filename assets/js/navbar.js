class NavbarWin95 extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <nav class="NavbarWin95">
            <link rel="stylesheet" href="/assets/block/navbar/style.css">
            <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="/pages/host/">Hébergement</a></li>
            <li><a href="/pages/dev/">Développement</a></li>
            <li><a href="/pages/about/">A Propos</a></li>
            <li><a href="#">Contact</a></li>
            <li style="float: right;" class="credit-btn">
            <a>Credit</a>
            <span class="credittip">&copy; CatDev 2023-2024. All rights reserved.<br><em>This website respect EU and American law.</em></span>
            </li>
            </ul>
            </nav>
        `;
    }
}

customElements.define('Win95nav', NavbarWin95);