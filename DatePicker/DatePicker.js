// dependencies
import React from "react";
import { combine, prepare } from "../functions/functions";

// components
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

// styling
import "./DatePicker.css";

export default class DatePicker extends React.Component {
  state = {};
  target = React.createRef();

  render = () => {
    // prepare properties
    const [properties] = prepare(this.props);

    const weeks = [0, 1, 2, 3, 4, 5];
    const days = [0, 1, 2, 3, 4, 5, 6];

    // extract popover properties
    const title = properties.title;
    const titleAs = properties.titleAs;
    delete properties.title;
    delete properties.titleAs;

    // set defaults
    if (!properties.variant) {
      properties.variant = "light";
      properties.className.push("border");
    }

    // set required attributes
    properties.ref = this.target;
    properties.onClick = this.onToggle;

    // merge classes
    properties.className = combine(properties.className);

    return (
      <>
        <Button {...properties}>
          {this.props.value
            ? this.props.value.toLocaleDateString()
            : "no date selected"}
        </Button>

        <Overlay
          target={this.target.current}
          show={this.state.show}
          rootClose
          onHide={this.onClose}
          onEnter={this.load}
        >
          {(props) => (
            <Popover {...props}>
              <Popover.Title as={titleAs ?? "h3"}>
                {title ?? "Date Picker"}
              </Popover.Title>

              <table id="DatePicker">
                <thead className="border-bottom">
                  <tr>
                    <th>
                      <Button
                        variant="link"
                        onClick={this.onMonthChange.bind(this, -1)}
                        className="text-body"
                      >
                        &lt;
                      </Button>
                    </th>
                    <th colSpan="5">
                      {this.state.displayed.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </th>
                    <th>
                      <Button
                        variant="link"
                        onClick={this.onMonthChange.bind(this, 1)}
                        className="text-body"
                      >
                        &gt;
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                </thead>
                <tbody>
                  {weeks.map((week, weekIndex) => (
                    <tr key={weekIndex}>
                      {days.map((day, dayIndex) => (
                        <td key={dayIndex}>
                          <Button
                            variant="link"
                            block
                            onClick={this.onChange.bind(
                              this,
                              new Date(
                                this.state.start.getFullYear(),
                                this.state.start.getMonth(),
                                this.state.start.getDate() + week * 7 + day
                              )
                            )}
                            className={this.dayClassName(week, day)}
                          >
                            {new Date(
                              this.state.start.getFullYear(),
                              this.state.start.getMonth(),
                              this.state.start.getDate() + week * 7 + day
                            ).toLocaleDateString("en-US", {
                              day: "numeric",
                            })}
                          </Button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-right">
                <Button
                  variant="link"
                  onClick={this.onChange.bind(this, new Date())}
                  className="text-body"
                >
                  today
                </Button>
              </div>
            </Popover>
          )}
        </Overlay>
      </>
    );
  };

  /********************
   ***** Handlers *****
   *******************/

  /** when component is ready to interact */
  componentDidMount = () => {
    this.load();
  };

  /** when date selected */
  onChange = (selected) => {
    // close popover
    this.onClose();

    // notify of change
    this.props.onChange(selected);
  };

  /** when popover needs to close */
  onClose = () => {
    this.setState({ show: false });
  };

  /** when month change button clicked (i.e., prev/next month) */
  onMonthChange(deltaMonths) {
    // skip the requested number of months
    const displayed = new Date(
      this.state.displayed.getFullYear(),
      this.state.displayed.getMonth() + deltaMonths,
      1
    );

    this.setState({
      displayed: displayed,
      start: this.startDate(displayed),
    });
  }

  /** when popover needs to toggle open/closed */
  onToggle = () => {
    this.setState({ show: !this.state.show });
  };

  /*******************
   ***** Methods *****
   ******************/

  dayClassName = (week, day) => {
    const className = [];

    const current = new Date(
      this.state.start.getFullYear(),
      this.state.start.getMonth(),
      this.state.start.getDate() + week * 7 + day
    );

    if (this.state.displayed.getMonth() === current.getMonth())
      className.push("text-body");
    else className.push("text-muted");

    if (
      this.state.selected &&
      this.state.selected.toLocaleDateString() === current.toLocaleDateString()
    )
      className.push("border border-primary");

    return className.join(" ");
  };

  load = () => {
    this.setState({
      displayed: this.props.value ? new Date(this.props.value) : new Date(),
      selected: this.props.value ? new Date(this.props.value) : null,
      start: this.startDate(
        this.props.value ? new Date(this.props.value) : new Date()
      ),
    });
  };

  startDate = (input) => {
    // set start date to the beginning of the month
    let output = new Date(input.getFullYear(), input.getMonth(), 1);

    // set start date to the beginning of the week
    if (output.getDay()) {
      output = new Date(
        output.getFullYear(),
        output.getMonth(),
        1 - output.getDay()
      );
    }

    return output;
  };
}
