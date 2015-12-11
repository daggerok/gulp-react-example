import ReactDOMServer from 'react-dom/server';

const Hello = (props) => {
  <div>
    Hello, {props.name}!
  </div>
};

ReactDOMServer.renderToString(
  <Hello name="World" />
);
