//here we will have a list of multiple movies, so this component will have more components
import react from 'react'
import React from 'react'

import Card from '../components/Card/Card'

class List extends react.Component{

    constructor(){
        super();
        this.state={
            data: []
        }
    }
    async componentDidMount() {
      const res = await fetch('../../assets/data.json')
      const resJSON= await res.json()
      this.setState({data:resJSON})

    }

    render(){
        return this.state.data.map(movie => {
            return <Card movie={movie}/>
        })
    }

}

export default List
