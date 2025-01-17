/* globals window */

// eslint-disable-next-line no-unused-vars
import CernerSmartEmbeddableLib from './cerner-smart-embeddable-lib';

window.CernerSmartEmbeddableLib = window.CernerSmartEmbeddableLib || {};

if (window.external && typeof window.external.DiscernObjectFactory !== 'undefined') {
  CernerSmartEmbeddableLib.init();
  CernerSmartEmbeddableLib.listenForCustomFrameHeight();

  window.CernerSmartEmbeddableLib.calcFrameHeight = CernerSmartEmbeddableLib.calcFrameHeight;
  window.CernerSmartEmbeddableLib.setFrameHeight = CernerSmartEmbeddableLib.setFrameHeight;
}
