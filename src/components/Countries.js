import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
class Countries extends Component {
  constructor() {
    super();
    this.state = {
      contries: [],
    };
  }
  componentDidMount() {
    this.getCountries();
  }
  getCountries() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ contries: data });
      })
      .catch((error) => console.log(error));
  }
  handleDelete = (position) => {
    console.log(position);
    let newState = { ...this.state };
    newState.contries = newState.contries.filter((pais, index) => {
      return position !== index;
    });

    this.setState(newState);
  };
  render() {
    return (
      <div>
        <h1>Países</h1>
        <List component="nav">
          {this.state.contries.map((contry, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <DeleteIcon onClick={() => this.handleDelete(index)} />
              </ListItemIcon>
              <ListItemText primary={contry.name} />
            </ListItem>
          ))}
        </List>
        {/* <Button variant='contained' color='secondary' onClick={this.getCountries} >Cargar Lista</Button> */}
      </div>
    );
  }
}
export default Countries;
