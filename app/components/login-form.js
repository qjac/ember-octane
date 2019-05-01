import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {

    loginAsUserWithId(val) {
        console.log(val);
    }

    // @param {Event & {target: HTMLFormElement}} evt

    // add decorator. all decorators are 
    // action(myDecorator(target, "methodName")). fn invoked from bottom to top

    // @action is needed to properly bind `this` to the component
    @action

    onLoginFormSubmit(evt) {
        const { target} = evt;
        const val = target.querySelector('select').value;
        evt.preventDefault();
        
        this.loginAsUserWithId(val);
    }
}
