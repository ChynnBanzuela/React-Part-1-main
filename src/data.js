import componentImg from "./assets/images/components.png";
import JsxImg from "./assets/images/jsx-ui.png";
import PropImg from "./assets/images/config.png";
import StateImg from "./assets/images/state-mgmt.png";
import ReactCoreConcept from "./assets/images/react-core-concepts.png"



export const data =[
  {
    image: componentImg,
    title: 'Components',
    description: 'The core UI building block- compose the user interface by combining multiple components.'
  },
  {
    image: JsxImg,
    title: 'JSX',
    description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.'
  },
  {
    image: PropImg,
    title: 'Props',
    description: 'Make components configurable (and therefore reusable) by passing input data to them.'
  },
  {
    image: StateImg,
    title: 'State',
    description: 'React-managed data which, when changed, causes the components to re-render & the UI to update.'
  }
];


export const header =[
    {
      image: ReactCoreConcept,
      title: 'React Essentials',
      description: "Fundamental React concepts you will need for almost any app you are going to build!"
    }
  ];