import Widget from '../Widget';
import {create as createContentView} from './ContentView';
import {create as createStatusBar} from './StatusBar';

export default function UI() {
  throw new Error('UI can not be created');
}

let _UI = Widget.extend({

  _name: 'UI',

  _create() {
    Object.defineProperty(this, 'contentView', {
      value: createContentView(),
      writable: false,
      configurable: false
    });
    this.append(this.contentView);
    Object.defineProperty(this, 'statusBar', {
      value: createStatusBar(),
      writable: false,
      configurable: false
    });
    this.append(this.statusBar);
  },

  _setParent() {
    throw new Error('Parent of ContentView can not be changed');
  },

  _nativeSet() {},

  _nativeGet() {},

  _nativeCall() {},

  _nativeListen() {},

  _supportsChildren(child) {
    if (child === this.contentView || child === this.statusBar) {
      return true;
    }
    return false;
  },

  _dispose() {
    throw new Error('UI can not be disposed');
  }

});

UI.prototype = _UI.prototype;

export function create() {
  return new _UI();
}
