import { useEffect, useState, Component } from 'react';
import Select from 'react-select'
import Users from './Users'

export default class Field extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)  
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
        this.state = {
            name: '',
            email: '',
            gender: '',
            password: ''
        }  
    }

    async handleSubmit(e) {
        e.preventDefault()
        await this.setState({
            name: document.getElementById('nameID').value,
            email: document.getElementById('emailID').value,
            gender: document.getElementById('genderID').value,
            password: document.getElementById('passwordID').value

        })

        const newUser = {Name: this.state.name, Email: this.state.email, Gender: this.state.gender, Password: this.state.password }
        alert(`Informações enviadas! \nNome: ${newUser.Name}\nEmail: ${newUser.Email}\nGênero: ${newUser.Gender}`)
        console.log(newUser)
        
        this.onHandleSubmit()
    }

    async onHandleSubmit(e) {
        this.setState({
            name: '',
            email: '',
            gender: '',
            password: ''
        })

        document.getElementById('nameID').value = this.state.name
        document.getElementById('emailID').value = this.state.email
        document.getElementById('genderID').value = this.state.gender
        document.getElementById('passwordID').value = this.state.password
    }
    
    render() {
        return (
            <div>
                <fieldset onSubmit={this.handleSubmit}>
                    <NameForm />
                    <EmailForm />
                    <PasswordForm />
                    <GenderForm />
                    <form>
                        <input type='submit' value='Submit'/>
                    </form>
                </fieldset>
            </div>
        )         

    }
}
class NameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(Event) {
        this.setState({value: Event.target.value})
    }

    render() {
        return(
            <form>
                <label>
                    Nome: 
                    <input id='nameID' type="text" value={ this.state.value } onChange={ this.handleChange }/>
                </label>
            </form>
        )
    }
}
class EmailForm extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(Event) {
        this.setState({value: Event.target.value})
    }

    render() {
        return(
            <form>
                <label>
                    Email: 
                    <input id='emailID' type="text" value={ this.state.value } onChange={ this.handleChange }/>
                </label>
            </form>
        )
    }
}
class PasswordForm extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(Event) {
        this.setState({value: Event.target.value})
    }

    render() {
        return(
            <form>
                <label>
                    Senha: 
                    <input id='passwordID' type="text" value={ this.state.value } onChange={ this.handleChange }/>
                </label>
            </form>
        )
    }
}
class GenderForm extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
        this.props = {
            options: [
                { value: 'masculino', label: 'Masculino' },
                { value: 'feminino', label: 'Feminino' },
                { value: 'outro', label: 'Outro' }
            ]
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(Event) {
        this.setState({value: Event.target.value})
    }

    render() {
        return(
            <label>
                Gênero: 
                <Select id='genderID' options={ this.props.options } value={ this.state.value } onChange={ this.handleChange } />
            </label>
        )
    }
}
