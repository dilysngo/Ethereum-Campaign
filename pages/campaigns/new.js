import React, { Component } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Link, Router } from "../../routes";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
    loading: false
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      console.log('accounts', accounts);
      await factory.methods.createCampaign(this.state.minimumContribution)
        .send({ from: accounts[0] });

      Router.push("/");
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }

    this.setState({ loading: false });
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Create a Campaigns</h3>

          <Form onSubmit={this.onSubmit} error={Boolean(this.state.errorMessage)}>
            <Form.Field>
              <label>Minimum Contribution</label>
              <Input 
                label="wei" 
                labelPosition="right" 
                value={this.state.minimumContribution}
                onChange={event => this.setState({ minimumContribution: event.target.value })}
              /> 
            </Form.Field>
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Form.Field>
              <Button primary loading={this.state.loading} >Create!</Button>
            </Form.Field>
          </Form>
        </div>
      </Layout>
    );
  }
}

export default CampaignNew;
