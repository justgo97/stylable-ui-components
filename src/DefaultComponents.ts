import { createComponent } from "./utils/createComponent";

// Box: A generic wrapper component
const Box = createComponent("div");

// Flex: A flexbox container
const Flex = createComponent("div", {
  display: "flex",
});

// Grid: A grid container
const Grid = createComponent("div", {
  display: "grid",
});

// Text: A customizable text component
const Text = createComponent("span");

// Paragraph: A block-level text component
const Paragraph = createComponent("p");

// Heading: For headings (h1, h2, etc.)
const Heading = createComponent("h1");

// Link: A styled anchor (<a>) element
const Link = createComponent("a", {
  color: "blue",
  textDecoration: "underline",
  _hover: {
    textDecoration: "none",
  },
});

// Button: A customizable button element
const Button = createComponent("button", {
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  cursor: "pointer",
  border: "1px solid transparent",
  _hover: {
    backgroundColor: "#f0f0f0",
  },
});

// Input: A basic input field component
const Input = createComponent("input", {
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
});

// Textarea: A multi-line input field component
const Textarea = createComponent("textarea", {
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
});

// Image: A styled image component
const Image = createComponent("img", {
  maxWidth: "100%",
  height: "auto",
});

// Card: A container with padding and shadow for card-based UIs
const Card = createComponent("div", {
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
});

// List: A styled list element (<ul> or <ol>)
const List = createComponent("ul");

// ListItem: A customizable list item (<li>)
const ListItem = createComponent("li");

// Container: A responsive container for layout and alignment
const Container = createComponent("div", {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1rem",
});

// Badge: For small status or labeling UI elements
const Badge = createComponent("span", {
  padding: "0.25rem 0.5rem",
  borderRadius: "12px",
  backgroundColor: "#eee",
  color: "#333",
});

// Avatar: A component for displaying user profile images
const Avatar = createComponent("img", {
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
