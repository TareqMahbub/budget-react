import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title='Your Balance' value='2,550.53' />
      
      <DisplayBalances />

      <MainHeader title='History' />
      <EntryLine description="Something" value="$10,00" isExpense={true} />
      <EntryLine description="Something else" value="$100,00" />
      <EntryLine description="Something" value="$20,00" isExpense={true} />
      
      <MainHeader type='h3' title='Add new transaction' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
