import React from "react";

export default class Content extends React.Component {
    render() {
        return (

          <div>
            <ul>
              <li>{this.props.first_name}</li>
                <li>{this.props.last_name}</li>
                  <li>{this.props.email}</li>
                    <li>{this.props.gender}</li>
            </ul>
          </div>

        );
    }
}
