import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Recipes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        recipes: []
      };
    }
  
    componentDidMount() {
        const url = "/api/v1/recipes/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ recipes: response }))
          .catch(() => this.props.history.push("/"));
    }
    render() {
        const { recipes } = this.state;
        const allRecipes = recipes.map((recipe, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            {/* <div className="card mb-4">
            <Link to={`/recipe/${recipe.id}`} className="btn custom-button">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={`${recipe.name} image`}
              />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
               
                
              </div>
            </div> */}
            <Card style={{ width: '18rem' }}>
            <Link to={`/recipe/${recipe.id}`} >
              <Card.Img variant="top" src={recipe.image} />
              
                <Card.ImgOverlay>
                  <div className = "overlaytextbox">
                <Card.Title className = "overlaytext">{recipe.name}</Card.Title>
                </div>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text> */}
                </Card.ImgOverlay>
                
                
                
              
              </Link>
            </Card>
          </div>
          
          
        ));
        const noRecipe = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
              No recipes yet. Why not <Link to="/new_recipe">create one</Link>
            </h4>
          </div>
        );
    
        return (
          <>
            <section className="jumbotron jumbotron-fluid text-center">
              <div className="container py-5">
                <h1 className="display-4">Recipes for every occasion</h1>
                <p className="lead text-muted">
                  We’ve pulled together our most popular recipes, our latest
                  additions, and our editor’s picks, so there’s sure to be something
                  tempting for you to try.
                </p>
              </div>
            </section>
            <div className="py-5">
              <main className="container">
                <div className="text-right mb-3">
                  <Link to="/recipe" className="btn custom-button">
                    Create New Recipe
                  </Link>
                </div>
                <div className="row">
                  {recipes.length > 0 ? allRecipes : noRecipe}
                </div>
                <Link to="/" className="btn btn-link">
                  Home
                </Link>
              </main>
            </div>
          </>
        );
      }
  }
  export default Recipes;