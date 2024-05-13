import { Container, VStack, Text, Input, Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import Confetti from 'react-confetti';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input.trim()]);
      setInput('');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000); // Turn off confetti after 2 seconds
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" mb="8">Todo App</Text>
        <Input
          placeholder="Add new todo"
          value={input}
          onChange={handleInputChange}
          size="md"
          width="100%"
        />
        <Button onClick={handleAddTodo} colorScheme="blue" mt="4">Add Todo</Button>
        {showConfetti && <Confetti />}
        <List spacing={3} mt="8" width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" alignItems="center">
              <ListIcon as={FaCheckCircle} color="green.500" />
              <Text ml="2">{todo}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;