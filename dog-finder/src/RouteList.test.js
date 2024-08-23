import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import RouteList from './RouteList';
import dogs from "./_testCommon";

test('renders all dog names in the dog list', () => {
  render(
    <MemoryRouter initialEntries={["/dogs"]}>
      <RouteList dogs={dogs} />
    </MemoryRouter>
  );
  
  dogs.forEach(dog => {
    const linkElement = screen.getByText(new RegExp(dog.name, "i"));
    expect(linkElement).toBeInTheDocument();
  });
});

test("renders only the 'test' dog's info", () => {
  render(
    <MemoryRouter initialEntries={["/dogs/test"]}>
      <RouteList dogs={dogs} />
    </MemoryRouter>
  );
  
  const testDog = dogs.find(dog => dog.name === "test");
  const otherDog = dogs.find(dog => dog.name === "mocked-dog");

  const factElement = screen.getByText(new RegExp(testDog.facts[0], "i"));
  expect(factElement).toBeInTheDocument();

  expect(screen.queryByText(new RegExp(otherDog.facts[0], "i"))).toBeNull();
});

test('renders the home page when the dog is not found', () => {
  render(
    <MemoryRouter initialEntries={["/dogs/wrong"]}>
      <RouteList dogs={dogs} />
    </MemoryRouter>
  );

  expect(screen.getByText("HELLO. WE HAVE DOGS. CLICK ON THEM FOR MORE INFO.")).toBeInTheDocument();

  dogs.forEach(dog => {
    const linkElement = screen.getByText(new RegExp(dog.name, "i"));
    expect(linkElement).toBeInTheDocument();
  });
});

test('renders home page on a bad route', () => {
  render(
    <MemoryRouter initialEntries={["/bad-route"]}>
      <RouteList dogs={dogs} />
    </MemoryRouter>
  );

  dogs.forEach(dog => {
    const linkElement = screen.getByText(new RegExp(dog.name, "i"));
    expect(linkElement).toBeInTheDocument();
  });
});

