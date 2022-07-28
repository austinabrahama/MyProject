import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class FlexBoxController extends Controller {
    @action
    changeFlexDirection(flexDirection) {
        document.getElementsByClassName("flex-mock-container")[0].style.flexDirection = flexDirection;
    }

    @action
    changeJustifyContent(justifyContent) {
        document.getElementsByClassName("flex-mock-container")[0].style.justifyContent = justifyContent;
    }
}
