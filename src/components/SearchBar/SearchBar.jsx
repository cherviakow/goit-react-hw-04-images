import { Component } from "react";
import css from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa';


class SearchBar extends Component {
    state = {
        search: '',
    } 

    searchResult = event =>{
        this.setState({search: event.currentTarget.value})

    }


    handleSubmit = event =>{
        event.preventDefault();
        const {search} = this.state;

        this.props.onSubmit(search.trim());
        this.setState({search: '',})




        console.log('click');
    }    


    render() { 
        return (
            <header className={css.searchBar}>
                <form onSubmit={this.handleSubmit} action="submit" className={css.form}>
                    <button className={css.btn}><FaSearch size='12px'/></button>
                    <input onChange={this.searchResult}  type="text" className={css.input}
                    placeholder="Search photos"/>
            
                </form>

            </header>
        );
    }
}
 
export default SearchBar;