import React from "react";
import { Link } from "react-router-dom";
import Side from "./Side.jsx";
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
            <div className="card mb-4">
            <div id="cardwrapper">
            <Card style={{ width: '18rem' }, {height: '10rem'},  {margin: '0.5rem'}}>
            <Link to={`/recipe/${recipe.id}`} >
              <Card.Img variant="top" src={recipe.image} />
              
                <Card.ImgOverlay>
                  <div className = "overlaytextbox">
                <Card.Title className = "overlaytext">{recipe.name}</Card.Title>
                </div>
                </Card.ImgOverlay>
              </Link>
            </Card>
            </div>
          </div>
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
          <div ><Side/>
          <>
            <section className=" text-center">
              <div className="container py-5">
                <h1 className="display-4">Fight for an existing social justice movement</h1>
                <p className="lead text-muted">
                For social movements to gain traction in modern society, continued support for each movement is essential. By joining the group, donating to the movement's foundation, and actively encouraging others, we can make this world a better place.
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
          </div>
        );
      }
  }
  export default Recipes;