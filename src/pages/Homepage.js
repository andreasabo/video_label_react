import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import "./homepage.css"

class HomePage extends Component {



    render () {


        return (
            <div className="container">
            <h1 id="andrea">Video Labelling Utility</h1>
            <table>
                <tbody>
                <tr>
                <td>
                    <h2><button> 
                        <Link to='/label'>Start Labelling </Link>
                </button></h2>
                </td>
                <td>
                    <h2><button> 
                        <Link to='/setup'>Setup Configurations </Link>
                    </button></h2>
                </td>
                </tr>
                </tbody>
            </table>
            

            </div>


        )
    }
}

export default HomePage;