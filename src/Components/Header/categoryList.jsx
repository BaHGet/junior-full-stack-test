import {React, Component} from 'react';
import { Query } from '@apollo/client/react/components';
import { GET_Categories } from '../../queries';
import './navigation-categories-style.css'
import Loading from '../loading';
import { Link } from 'react-router-dom';

class CategoryList extends Component {
  
  render() {

    const {selectedCategory, setSelectedCategory} = this.props
    return (
      <Query query={GET_Categories}>
      {({ loading, error, data }) => {
          if (loading) return <Loading  />;
          if (error) return <p>Error :(</p>;

          return (
              <ul className={`category-list `}>
                {
                  data.categories.map((category) =>{
                    return (
                            <li
                                key={category.name}
                                dataname={category.name }
                                className={`category-list-items ${category.name === selectedCategory ? 'selected ':''}`}
                                
                            >
                              <Link 
                                data-testid={category.name === selectedCategory ?
                                  'active-category-link' : 'category-link'}
                                onClick={() =>setSelectedCategory(category.name)} to={`/${category.name}`}
                              >{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</Link>
                            </li>
                          )
                  })
                }
              </ul>
          );
        }}
      </Query>
    );
  }
}


export default CategoryList
