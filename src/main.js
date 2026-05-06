import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-list', {
  elementClass: 'faq-list-item',
  triggerClass: 'faq-acordion-btn',
  panelClass: 'faq-accordion',
});
