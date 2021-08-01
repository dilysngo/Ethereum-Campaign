import React, { Component } from "react";
import { Form, Button, Message, Input } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import web3 from "../../../ethereum/web3";
import Campaign from "../../../ethereum/campaign";
import { Link, Router } from "../../../routes";
 
class RequestNew extends Component {
  state = { 
    value: "",
    description: "",
    recipient: "",
    errorMessage: ""
  }
  static async getInitialProps(props) { 
    const { address } = props.query;
    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    const campaign = Campaign(this.props.address);

    const { description, value, recipient } = this.state;

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(
        description, 
        web3.utils.toWei(value, 'ether'), 
        recipient
      ).send({ from: accounts[0] });
      Router.replaceRoute(`/campaigns/${this.props.address}/requests`); 
    } catch (error) {
      this.setState({ loading: false, errorMessage: error.message });
    }
    this.setState({ loading: false, errorMessage: "" });
  } 

  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>Back</a>
        </Link>
        <h3>Create a Requests</h3>
        <Form onSubmit={this.onSubmit}  error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })} 
            />
          </Form.Field>
          <Form.Field>
            <label>Value in Ether</label>
            <Input 
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })} 
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={event => this.setState({ recipient: event.target.value })} 
            />
          </Form.Field>
          <Form.Field>
            <Message error header="Oop!" content={this.state.errorMessage} />
          </Form.Field>
          <Form.Field>
            <Button primary loading={this.state.loading}>
              Create!
            </Button>
          </Form.Field>
        </Form>
      </Layout>
    )
  }
}

export default RequestNew;