import { Container, MantineProvider } from '@mantine/core';
import { Banner } from './components/banner';
import { Contact } from './components/contact';
import { Features } from './components/features';
import { Header } from './components/header';
import { Plans } from './components/plans';

function App() {
  return (
    <MantineProvider
      theme={{

      }}
    >
      <Container fluid px={0}>
        <Header />
        <Banner />
        <Features />
        <Plans />
        <Contact />
      </Container>
    </MantineProvider>
  );
}

export default App;
