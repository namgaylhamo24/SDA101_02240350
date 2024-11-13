## Reflection on Card Component Project
#### Main Concepts Applied
In this project, I developed a reusable card component using Web Components. The primary concepts applied included:
1. **Custom Elements**: I created a reusable `<card-component>` custom HTML element, encapsulating the card’s functionality and making it modular for use across different pages.

2. **Shadow DOM**: I used Shadow DOM to encapsulate styles within the component, ensuring they don’t interfere with or get affected by external styles, resulting in consistent design.

3. **Slots**: I implemented multiple slots (header, content, footer) to allow flexible content insertion, enabling different types of content (text, images, HTML elements) in each section without altering the component’s structure.

4. **CSS Custom Properties**: I used CSS custom properties to enable styling customization. Users can override properties like `--card-background`, `--card-border-radius`, and `--header-font-size` when using the component, allowing for easy visual customization without modifying the component's code.

#### New Skills and Knowledge Acquired
Working on this project helped me gain practical experience with **Web Components**, which was new for me. I learned how to define a custom element, apply the Shadow DOM, and work with slots for content insertion. Additionally, I improved my understanding of **CSS custom properties** and their importance in making components customizable. The project also provided a better understanding of modular and reusable design practices, which are crucial in modern web development.

#### What I Learned
I learned how to create a reusable, modular component using Web Components and how to keep its styles separate using Shadow DOM. I found the use of slots especially useful because they allow flexible content insertion, making the component more adaptable. This project also helped me improve my CSS skills, particularly with custom properties, and taught me how to design a component that’s easy to reuse and customize.

#### Challenges Faced and Solutions
One of the main challenges I faced was making sure the slots displayed content consistently without layout problems. At first, the content would overflow or become misaligned because I hadn’t applied flexbox styling correctly to the card container. I fixed this by adding `display: flex` and `flex-direction: column` to the card’s CSS, which helped stack the content vertically with enough space between the header, content, and footer.

Another challenge was with styling customization. At first, I hardcoded colors and sizes in the CSS, which made the card less flexible. After looking into best practices, I switched to using CSS custom properties, which made it easy to customize and adjust styles from outside the component.

### c) Clarity & Coherence
I organized this reflection by separating each section based on the given criteria. I covered the core concepts, new knowledge, challenges, and solutions in a clear, logical order. This structure makes the reflection easy to follow and shows my thought process throughout the project.