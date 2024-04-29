import { useState } from 'react'
import { IAppProps } from './components/models'
import { FluentProvider, webLightTheme, Input, Button, makeStyles, InputProps } from '@fluentui/react-components'

const useStyles = makeStyles({
  wrapper: {
    columnGap: "10px",
    display: "flex",
  },
});

const App: React.FC<IAppProps> = (props) => {
  const [name, setName] = useState(props.name)
  console.log('React App', props, name);
  const styles = useStyles();
  const handleDone = () => {
    //@ts-ignore
    window.webResResult = { "value": name };
    window.close();
  }
  const handleOnChange: InputProps["onChange"] = (ev, data) => {
    setName(data.value);
  }
  const handleCancel = () => {
    //@ts-ignore
    window.webResResult = null;
    window.close();
  }

  return (
    <FluentProvider theme={webLightTheme}>
      <Input
        placeholder="Enter a Name"
        type="text"
        value={name}
        onChange={handleOnChange}
      />
      <div className={styles.wrapper}>
        <Button appearance='secondary' onClick={handleCancel}>Cancel</Button>
        <Button appearance='primary' onClick={handleDone}>Done</Button>
      </div>
    </FluentProvider>
  )
}

export default App
