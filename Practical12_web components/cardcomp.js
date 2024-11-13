class CardComponent extends HTMLElement {
    constructor() {
      super();
      // Attach shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Create the card container
      const card = document.createElement('div');
      card.classList.add('card');
  
      // Setup slot elements
      const headerSlot = document.createElement('slot');
      headerSlot.name = 'header';
      headerSlot.classList.add('card-header');
  
      const contentSlot = document.createElement('slot');
      contentSlot.name = 'content';
      contentSlot.classList.add('card-content');
  
      const footerSlot = document.createElement('slot');
      footerSlot.name = 'footer';
      footerSlot.classList.add('card-footer');
  
      // Append slots to card container
      card.appendChild(headerSlot);
      card.appendChild(contentSlot);
      card.appendChild(footerSlot);
  
      // Apply styles to the component
      const style = document.createElement('style');
      style.textContent = `
        .card {
          background-color: var(--card-background, #ffffff);
          border-radius: var(--card-border-radius, 8px);
          box-shadow: var(--card-shadow, 0px 4px 8px rgba(0, 0, 0, 0.1));
          padding: var(--card-padding, 16px);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .card-header {
          font-size: var(--header-font-size, 1.5em);
          font-weight: bold;
          color: var(--header-color, #333);
        }
        .card-content {
          font-size: var(--content-font-size, 1em);
          color: var(--content-color, #555);
        }
        .card-footer {
          font-size: var(--footer-font-size, 0.9em);
          color: var(--footer-color, #777);
          text-align: right;
        }
      `;
  
      // Attach elements to shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(card);
    }
  }
  
  // Define the custom element
  customElements.define('card-component', CardComponent);
  