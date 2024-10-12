import { createSC } from "./utils/createSC";

// Box: A generic wrapper component
const Box = createSC("div");

// Flex: A flexbox container
const Flex = createSC("div", {
  display: "flex",
});

// Grid: A grid container
const Grid = createSC("div", {
  display: "grid",
});

// Text: A customizable text component
const Text = createSC("span");

// Paragraph: A block-level text component
const Paragraph = createSC("p");

// Heading: For headings (h1, h2, etc.)
const Heading = createSC("h1");

// Link: A styled anchor (<a>) element
const Link = createSC("a", {
  color: "blue",
  textDecoration: "underline",
  _hover: {
    textDecoration: "none",
  },
});

// Button: A customizable button element
const Button = createSC("button", {
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  cursor: "pointer",
  border: "1px solid transparent",
  _hover: {
    backgroundColor: "#f0f0f0",
  },
});

// Input: A basic input field component
const Input = createSC("input", {
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
});

// Textarea: A multi-line input field component
const Textarea = createSC("textarea", {
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
});

// Image: A styled image component
const Image = createSC("img", {
  maxWidth: "100%",
  height: "auto",
});

// Card: A container with padding and shadow for card-based UIs
const Card = createSC("div", {
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
});

// List: A styled list element (<ul> or <ol>)
const List = createSC("ul");

// ListItem: A customizable list item (<li>)
const ListItem = createSC("li");

// Container: A responsive container for layout and alignment
const Container = createSC("div", {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1rem",
});

// Badge: For small status or labeling UI elements
const Badge = createSC("span", {
  padding: "0.25rem 0.5rem",
  borderRadius: "12px",
  backgroundColor: "#eee",
  color: "#333",
});

// Avatar: A component for displaying user profile images
const Avatar = createSC("img", {
  borderRadius: "50%",
  width: "40px",
  height: "40px",
});

export {
  Box,
  Flex,
  Grid,
  Text,
  Paragraph,
  Heading,
  Link,
  Button,
  Input,
  Textarea,
  Image,
  Card,
  List,
  ListItem,
  Container,
  Badge,
  Avatar,
};
