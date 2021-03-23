import { useState, Component } from 'react'

export default class Users extends Component {
    constructor() {
        super()
        const names = []
        const itemsPerList = 4
        const listsOfNames = new Array(Math.ceil(names.length / itemsPerList))
            .fill()
            .map(_ => names.splice(0, itemsPerList))
        this.state = {
            rows: listsOfNames.map((list) => { return <ul style={{ display: 'flex' }}> { list.map((name) => { return <li style={{ listStyleType: 'none', background: '#C9DDFF', marginLeft: '5px', width: '25%'}}><h2 style={{ margin: 'auto', textAlign: 'center' }}>{ name }</h2></li>}) } </ul>})
        }
        
    }
    render() {
        return (
            <div style={{ margin: 'auto auto', width: '80%'}}>
                <h1>Usuários Cadastrados</h1>
                { this.state.rows }
            </div>
        )
    }
}
