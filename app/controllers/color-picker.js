import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import jQuery from 'jquery';

export default class ColorPickerController extends Controller {
  @tracked colorPickerChecked = false;
  @tracked colorValue;
  colorPickerInput = '';

  @action
  showColorPicker(element) {
    this.colorPickerChecked = true;
    this.colorPickerInput = document.getElementById('colorPickerInput');

    var myColor = new jscolor.color(this.colorPickerInput);
    this.colorPickerInput.focus();
  }

  @action
  colorPicked() {
    this.colorValue = 'background-color: #' + this.colorPickerInput.value;
  }
}
