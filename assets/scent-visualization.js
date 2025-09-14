import { Component } from '@theme/component';
import { requestIdleCallback } from '@theme/utilities';

/**
 * @typedef {object} ScentVisualizationRefs
 * @property {HTMLElement[]} notes - The scent notes.
 * @extends {Component<ScentVisualizationRefs>}
 */
export class ScentVisualization extends Component {
  connectedCallback() {
    super.connectedCallback();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.#animateNotes();
  }

  #animateNotes() {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.refs.notes.forEach((note, index) => {
              requestIdleCallback(
                () => {
                  note.style.setProperty('--animation-order', index.toString());
                  note.classList.add('is-animated');
                },
index * 100
              );
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this);
  }
}

if (!customElements.get('scent-visualization')) {
  customElements.define('scent-visualization', ScentVisualization);
}