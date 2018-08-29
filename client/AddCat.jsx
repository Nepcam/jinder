import React from 'react'

export default class AddCat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      breed: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
  }
  updateDetails(e) {
    const key = e.target.name
    const value = e.target.value
    const obj = {[key]: value}
    this.setState(obj)
    // this.setState({
    //   [e.target.name] : e.target.value
    // })
  }
  onSubmit (e) {
    e.preventDefault() //dont do the default
    const cat = this.state
    this.props.addCat(cat) //send the cat up to App.jsx
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.updateDetails} className={`input ${this.state.name.length > 5 ? 'is-success' : 'is-danger'}`} type="text" name="name" placeholder="who's a cutie kittie?" />
        <input onChange={this.updateDetails} className="input" type="text" name="breed" placeholder="what kind of cutie kittie?" />
        <input className="button is-success" type="submit" />
      </form>
    )
  }
}
