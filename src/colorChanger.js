import React, { Component } from "react";
class ColorChanger extends Component {
  state = {
    disp: "none",
    bgcolor: "grey",
    colorname: "DropDown",
    options: [
      { label: "Lime", value: "lime" },
      { label: "Lavender", value: "lavender" },
      { label: "Crimson", value: "crimson" },
      { label: "Darkblue", value: "darkblue" },
      { label: "Teal", value: "teal" },
      { label: "Rebecca Purple", value: "rebeccapurple" },
      { label: "Ghost White", value: "ghostwhite" },
      { label: "Aqua Marine", value: "aquamarine" },

      {
        label: "Alice Blue",

        value: "aliceblue"
      }
    ]
  };
  render() {
    return (
      <>
        <h1>Color Changer</h1>
        <div
          style={{
            backgroundColor: this.state.bgcolor,
            height: 250,
            width: 250,
            border: "3px solid black",
            borderRadius: 10,
            display: "inline-block"
          }}
        ></div>
        <br />
        <div style={{ display: "inline-block" }}>
          <div style={{ backgroundColor: "#e1e3e6", width: 400 }}>
            <div
              className="dropdown"
              style={{
                backgroundColor: this.state.bgcolor,
                width: 400,
                margin: 3
              }}
              onMouseOver={() => this.setState({ disp: "inline-block" })}
            >
              {this.state.colorname}
            </div>
          </div>
          <div
            style={{
              display: this.state.disp,
              backgroundColor: "#e1e3e6",
              width: 400
            }}
            onMouseOver={() => this.setState({ disp: "inline-block" })}
            onMouseOut={() => this.setState({ disp: "none" })}
          >
            {this.state.options.map((color) => (
              <div
                onClick={() =>
                  this.setState({
                    bgcolor: color.value,
                    colorname: color.label
                  })
                }
              >
                <div style={{ margin: 3, backgroundColor: "#bababa" }}>
                  {color.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default ColorChanger;
