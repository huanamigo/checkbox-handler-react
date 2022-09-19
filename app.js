const ValidationMessage = (props) => {
  return <p>{props.text}</p>;
};

const TicketForm = ({ checked, onChange, display }) => (
  <>
    <h1>Buy a ticket for a best horror of 2022!</h1>
    <input
      type="checkbox"
      id="checkYear"
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor="checkYear">I am at least 16 years old</label>
    {display}
  </>
);

class AgeConfirmation extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <ValidationMessage text="You can buy a ticket!" />;
    } else {
      return (
        <ValidationMessage text="You can't buy a ticket! You are too young" />
      );
    }
  };

  render() {
    return (
      <>
        <TicketForm
          checked={this.state.isConfirmed}
          onChange={this.handleChange}
          display={this.displayMessage()}
        />
      </>
    );
  }
}

ReactDOM.render(<AgeConfirmation />, document.getElementById('root'));
