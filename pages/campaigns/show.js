import React, { Component } from "react";
import { Button, Card, Grid } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    
    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };  
  }

  renderCard() {
    const { 
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;
    
    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description: "The manager created this campaign and can request balance.",
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description: "Your must contribute at least this much wei to become an approver",
        style: { overflowWrap: 'break-word' },
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description: "A request tries to withdraw money from the contract.",
        style: { overflowWrap: 'break-word' }
      },
      {
        header: approversCount,
        meta: "Address of Approvers",
        description: "Number of people who have already donated to campaign.",
        style: { overflowWrap: 'break-word' },
      }, 
      {
        header: web3.utils.fromWei(balance, 'ether') + " (ether)",
        meta: "Campaign balance (ether)",
        description: "The balance is how much money this campaign has left to spend."
      }
    ];
    return  <Card.Group items={items} />;  
  }

  render() {
    return (
      <Layout> 
        <h3>Campaign Detail</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCard()}
            </Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}> 
                <a>
                  <Button primary>View Requests</Button>
                </a> 
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )
  }
}

export default CampaignShow;