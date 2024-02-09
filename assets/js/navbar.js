import { LitElement, html } from 'lit-element';

class Win95Navbar extends LitElement {
  static get properties() {
    return {
      items: { type: Array, reflect: true },
      activePath: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.items = [
      { href: "/", label: "Home", active: true },
      { href: "/pages/host/", label: "Hébergement" },
      { href: "/pages/dev/", label: "Développement" },
      { href: "/pages/about/", label: "A Propos" },
      { href: "#", label: "Contact" },
    ];
    this.activePath = window.location.pathname;
  }

  render() {
    return html`
      <nav class="NavbarWin95">
        <ul>
          ${this.items.map((item) => html`
            <li class=${item.href === this.activePath ? 'active' : ''}>
              <a href=${item.href}>${item.label}</a>
            </li>
          `)}
          <li style="float: right;" class="credit-btn">
            <a>Credit</a>
            <span class="credittip">&copy; CatDev 2023-2024. All rights reserved.</span>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('win95-navbar', Win95Navbar);
