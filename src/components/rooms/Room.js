import React, { Component } from "react";
import firebase from "../../firebase";
export default class Room extends Component {
  componentDidMount() {
    const databaseReference = firebase.database().ref("classes_information");

    databaseReference.on("value", snapshot => {
      let datas = snapshot.val();
      let newState = [];
      for (let data in datas) {
        newState.push({
          id: data,
          class: datas[data].class,
          extras: datas[data].extras
        });
      }
      this.setState({
        data: newState
      });
    });
  }

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div className="row">
        {this.state.data.map(data => {
          return (
            <div className="col s4" key={data.id}>
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  {(() => {
                    if (data.extras < 5) {
                      return (
                        <img
                          className="activator"
                          src="classempty.jpg"
                          alt="greenIco"
                        />
                      );
                    } else {
                      return (
                        <img
                          className="activator"
                          src="classfull.jpg"
                          alt="redIco"
                        />
                      );
                    }
                  })()}
                </div>
                <div className="card-content">
                  <span className="card-title">{data.class}</span>
                  <h6>Occupants : {data.extras}</h6>
                </div>
              </div>
            </div>
          );
        })}
        <div />
      </div>
    );
  }
}
