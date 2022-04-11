import { Grid, Icon, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

export default function EntryLine({description, value, isExpense = false}){
    return (
        <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
            <Grid.Column width={3}>{value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>);
}