# Stylable UI Components

A CSS-in-JS library for building customizable and responsive UI components in React using props for styling, It allows for the easy creation of styled components with support for shorthand properties, breakpoints, and pseudo-classes.

## Features

- **Default Components**: Includes a set of common components like `Box`, `Flex`, `Grid`, `Text`, `Button`, and more, ready to be used out-of-the-box.
- **Customizable Styles**: Supports dynamic styling based on props, including shorthand CSS properties and pseudo-classes.
- **Responsive Design**: Built-in support for breakpoints, making it easy to create responsive layouts.
- **Component Factory**: Use (`createSC`) to build new, reusable styled components that fits your UI structure.

## Installation

To install the package, run:

```bash
npm install stylable-ui-components @emotion/styled
```

## Usage

Start by importing the components and using them in your React app:

```tsx
import { Box, Flex, Button, Text } from "stylable-ui-components";

const App = () => (
  <Flex justify="center" align="center" p={4}>
    <Box bgColor="lightgray" p={3} borderRadius={8}>
      <Text fontSize={20} mb={2}>
        Hello, world!
      </Text>
      <Button onClick={() => alert("Clicked!")}>Click me</Button>
    </Box>
  </Flex>
);
```

Available Components:

- `Box`, `Flex`, `Grid`, `Text`, `Paragraph`, `Heading`
- `Link`, `Button`, `Input`, `Textarea`, `Image`, `Card`
- `List`, `ListItem`, `Container`, `Badge`, `Avatar`

### Using SCFactory (SC)

You can use the `SC` shorthand to create new styled components dynamically:

```tsx
import { SC } from "stylable-ui-components";

const App = () => (
  <SC.div backgroundColor="lightblue" padding="16px">
    Custom styled box
  </SC.div>
);
```

### Creating Components with `createSC`

The `createSC` function allows you to build custom, reusable styled components. You can pass any HTML tag and default styles to it:

```tsx
import { createSC } from "stylable-ui-components";

const CustomHeading = createSC("h2", { color: "purple", fontSize: "24px" });

const App = () => (
  <CustomHeading mb={2}>This is a custom heading</CustomHeading>
);
```

## Customizing Styles

Each component accepts CSS props and supports shorthand properties like:

- `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py` for padding
- `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my` for margin
- `bg`, `bgColor`, `minH`, `maxW`, and more

Pseudo-classes like `_hover` and `_selected` can be applied to style components dynamically.

```tsx
<Button p="1rem" _hover={{ backgroundColor: "darkgray" }}>
  Hover me!
</Button>
```

## Responsive Design

Built-in breakpoints (`_xs`, `_sm`, `_md`, `_lg`, `_xl`, `_xxl`) allow you to create responsive components:

```tsx
<Box _md={{ backgroundColor: "lightgreen" }}>Responsive box</Box>
```

You can also inline any pseudo-classes within another:

```tsx
<Box _hover={{ bgColor: "beige", _md: { backgroundColor: "lightgreen" } }}>
  Hover Responsive box
</Box>
```

## Notes

- This is still a **Work in Progress** ⚠️ so some features aren't heavly tested and some syntax changes could occur in newer versions.
- A run time CSS-in-JS solution could be less performant than other approaches in various cases, thus this is more suitable for small and meduim size projects where this issue is insignifcant.

## License

[MIT](LICENSE)
