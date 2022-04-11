import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

export default function DisplayBalances({title, value, size="small", color="normal"}){
    return (
        <Segment textAlign="center">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title='Incomes' value='1,045.50' color='green' />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title='Expenses' value='1,045.50' color='red' />
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>);
}