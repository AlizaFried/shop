import { Component } from "react";
import "./Header.css";
import Slider from "@mui/material/Slider";

class Header extends Component {
  valueChange = (event, newValue) => {
    this.props.handleValueChange(newValue);
  };

  render() {
    return (
      <div class="product-filter">
        <h1>Jackets</h1>

        <div class="sort">
          <div class="collection-sort">
            <label>Filter by:</label>
            <select>
              <option value="/">All Jackets</option>
              <option value="/">2016</option>
              <option value="/">jacket</option>
              <option value="/">Jackets</option>
              <option value="/">layers</option>
              <option value="/">Obermeyer</option>
              <option value="/">Roxy</option>
              <option value="/">womens</option>
            </select>
          </div>

          <div class="collection-sort">
            <label>Sort by:</label>
            <select>
              <option value="/">Featured</option>
              <option value="/">Best Selling</option>
              <option value="/">Alphabetically, A-Z</option>
              <option value="/">Alphabetically, Z-A</option>
              <option value="/">Price, low to high</option>
              <option value="/">Price, high to low</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select>
          </div>

          <div class="collection-sort">
            <label>Filter by Price</label>
            <Slider
              getAriaLabel={() => "Price Range"}
              value={this.props.valueRange}
              onChange={this.valueChange}
              valueLabelDisplay="auto"
              min={this.props.minValue}
              max={this.props.maxValue}
              // getAriaValueText={valuetext}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
